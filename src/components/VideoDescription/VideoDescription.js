import "./VideoDescription.scss";

export default function VideoDescription({ videoData }) {
  return (
    <section className="video-description">
      <p className="video-description__text">{videoData.description}</p>
    </section>
  );
}
