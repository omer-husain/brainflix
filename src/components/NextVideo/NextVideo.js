import "./NextVideo.scss";
import { Link } from "react-router-dom";

//clickable compoenent that uses react router to link to specific video page based on
//props video.id  passed in. displays card, getting info from NextVideo List

export default function NextVideo({ video }) {
  return (
    <Link to={`/videos/${video.id}`}>
      <article className="video-card">
        <section className="video-card__col1">
          <img
            className="video-card__image"
            src={video.image}
            alt={video.title}
          />
        </section>
        <section className="video-card__col2">
          <h2 className="video-card__title">{video.title}</h2>
          <h3 className="video-card__channel">{video.channel}</h3>
        </section>
      </article>
    </Link>
  );
}
