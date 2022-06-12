import "./MainVideo.scss";

//Returns a video tag and displays image as poster passed in as prop

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
