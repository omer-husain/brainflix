import "./NextVideo.scss"

export default function NextVideo({ video }) {
  return (
    <article className="video-card">
      <section className="video-card__col1">
        <img className="video-card__image" src={video.image} />
      </section>
      <section className="video-card__col2">
        <h2 className="video-card__title">{video.title}</h2>
        <h3 className="video-card__channel">{video.channel}</h3>
      </section>
    </article>
  );
}
