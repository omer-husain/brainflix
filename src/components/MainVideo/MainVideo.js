import "./MainVideo.scss";
import videos from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";

function MainVideo() {
  console.log(videoDetails[0].video);
  return (
    <section className="videoPlayer">
      <video
        className="videoPlayer__main-video"
        poster={videos[0].image}
        controls
      ></video>
    </section>
  );
}

export default MainVideo;
