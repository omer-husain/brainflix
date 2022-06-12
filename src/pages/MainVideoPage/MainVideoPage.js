import React from "react";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoTitle from "../../components/VideoTitle/VideoTitle";
import VideoAnalytics from "../../components/VideoAnalytics/VideoAnalytics";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import VideoCommentsForm from "../../components/VideoCommentsForm/VideoCommentsForm";
import VideoCommentsList from "../../components/VideoCommentsList/VideoCommentsList";
import NextVideosList from "../../components/NextVideosList/NextVideosList";
import { getVideos, getVideoWithId } from "../../api/apiCalls";
import "./MainVideoPage.scss";

//class component that uses state to store videos pulled from API calls to back-end server
//that are passed in from getVideos and getVideoWithID functions in ApiCalls.js

export default class MainVideoPage extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  //loads after first render, runs Api calls and checks if react router changed params
  async componentDidMount() {
    document.title = "Main Video Page";
    let { data: videosFromApi } = await getVideos();

    let { data: video } = this.props.match.params.videoId
      ? await getVideoWithId(this.props.match.params.videoId)
      : await getVideoWithId(videosFromApi[0].id);

    window.scrollTo(0, 0);

    this.setState({
      videos: videosFromApi,
      selectedVideo: video,
    });
  }

  //checks if props are changed by react router and if so updates video id
  async componentDidUpdate(prevProps, prevState) {
    let preVideoId = prevProps.match.params.videoId;
    let currentVideoId = this.props.match.params.videoId;

    if (currentVideoId !== preVideoId) {
      window.scrollTo(0, 0);

      let videoId = this.props.match.params.videoId || this.state.videos[0].id;

      this.selectVideo(videoId);
    }
  }

  //gets data from Api call and sets state of selectedVideo
  selectVideo = async (videoId) => {
    let response = await getVideoWithId(videoId);
    let { data: activeVideo } = response;
    this.setState({
      selectedVideo: activeVideo,
    });
  };

  //filters video list to make sure active video is not displayed
  filterVideoList = () => {
    return this.state.videos.filter((video) => {
      return video.id !== this.state.selectedVideo.id;
    });
  };

  render() {
    return this.state.selectedVideo ? (
      <section className="main-page">
        <section className="main-page__main-video">
          <MainVideo image={this.state.selectedVideo.image} />
          <VideoTitle title={this.state.selectedVideo.title} />
          <VideoAnalytics videoData={this.state.selectedVideo} />
          <VideoDescription videoData={this.state.selectedVideo} />
          <VideoCommentsForm videoData={this.state.selectedVideo} />
          <VideoCommentsList videoData={this.state.selectedVideo} />
        </section>
        <section className="main-page__video-list">
          <NextVideosList videos={this.filterVideoList()} />
        </section>
      </section>
    ) : (
      <span>Loading page</span>
    );
  }
}
