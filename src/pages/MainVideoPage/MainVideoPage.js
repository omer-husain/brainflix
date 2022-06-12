import React from "react";
import Header from "../../components/Header/Header";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoTitle from "../../components/VideoTitle/VideoTitle";
import VideoAnalytics from "../../components/VideoAnalytics/VideoAnalytics";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import VideoCommentsForm from "../../components/VideoCommentsForm/VideoCommentsForm";
import VideoCommentsList from "../../components/VideoCommentsList/VideoCommentsList";
import NextVideosList from "../../components/NextVideosList/NextVideosList";
import { getVideos, getVideoWithId } from "../../api/apiCalls";

export default class MainVideoPage extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  async componentDidMount() {
    console.log("componentDidMount was called");
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

  async componentDidUpdate(prevProps, prevState) {
    console.log("componentDidupdate was called");
    let preVideoId = prevProps.match.params.videoId;
    let currentVideoId = this.props.match.params.videoId;

    console.log(`previous prop videoId: ${preVideoId}`);
    console.log(`current prop videoId: ${currentVideoId}`);

    if (currentVideoId !== preVideoId) {
      console.log(`prop videoId was changed`);
      window.scrollTo(0, 0);

      let videoId = this.props.match.params.videoId || this.state.videos[0].id;
      console.log(this.props.match.params.videoId);

      this.selectVideo(videoId);
    }
  }

  selectVideo = async (videoId) => {
    let response = await getVideoWithId(videoId);
    let { data: activeVideo } = response;
    this.setState({
      selectedVideo: activeVideo,
    });
  };

  filterVideoList = () => {
    return this.state.videos.filter((video) => {
      return video.id !== this.state.selectedVideo.id;
    });
  };

  render() {
    return this.state.selectedVideo ? (
      <>
        <MainVideo image={this.state.selectedVideo.image} />
        <VideoTitle title={this.state.selectedVideo.title} />
        <VideoAnalytics videoData={this.state.selectedVideo} />
        <VideoDescription videoData={this.state.selectedVideo} />
        <VideoCommentsForm videoData={this.state.selectedVideo} />
        <VideoCommentsList videoData={this.state.selectedVideo} />
        <NextVideosList
          videos={this.filterVideoList()}
          selectVideo={this.selectVideo}
        />
      </>
    ) : (
      <span>Loading page</span>
    );
  }
}
