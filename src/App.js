import "./App.scss";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import VideoTitle from "./components/VideoTitle/VideoTitle";
import VideoAnalytics from "./components/VideoAnalytics/VideoAnalytics";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import VideoCommentsForm from "./components/VideoCommentsForm/VideoCommentsForm";

function App() {
  return (
    <section className="App">
      <Header />
      <MainVideo />
      <VideoTitle title={videos[0].title} />
      <VideoAnalytics videoData={videoDetails[0]} />
      <VideoDescription videoData={videoDetails[0]} />
      <VideoCommentsForm videoData={videoDetails[0]} />
    </section>
  );
}

export default App;
