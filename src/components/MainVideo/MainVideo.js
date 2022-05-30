import "./MainVideo.scss";
import videos from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";

function MainVideo({ image }) {
  return (
    <section className="videoPlayer">
      <video
        className="videoPlayer__main-video"
        poster={image}
        controls
      ></video>
    </section>
  );
}

export default MainVideo;
