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
    let { data: videosFromApi } = await getVideos();
    let { data: video } = await getVideoWithId(videosFromApi[0].id);

    console.log(video);
    this.setState({
      videos: videosFromApi,
      selectedVideo: video,
    });
  }

  selectVideo = (videoId) => {
    this.setState({
      selectedVideo: this.state.videos.find((video) => {
        return video.id === videoId;
      }),
    });
  };

  filterVideoList = () => {
    return this.state.videos.filter((video) => {
      return video.id !== this.state.selectedVideo.id;
    });
  };

  render() {
    let { videoId } = this.props.match.params;
    console.log(this.state.selectedVideo);
    return this.state.selectedVideo ? (
      <>
        <Header />
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
