import "./MainVideo.scss";


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
