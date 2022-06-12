import "./VideoDescription.scss";

//description of video pulled from VideoData props

export default function VideoDescription({ videoData }) {
  return (
    <section className="video-description">
      <p className="video-description__text">{videoData.description}</p>
    </section>
  );
}
