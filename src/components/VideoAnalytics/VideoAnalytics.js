import "./VideoAnalytics.scss";
import likes from "../../assets/icons/likes.svg";
import views from "../../assets/icons/views.svg";

export default function VideoAnalytics({ videoData }) {
  return (
    <section className="videoAnalytics">
      <label className="videoAnalytics__by-channel">
        by {videoData.channel}
      </label>
      <article className="videoAnalytics__views-container">
        <img className="videoAnalytics__views-image" src={views}></img>
        <label className="videoAnalytics__views-data">{videoData.views}</label>
      </article>
      <time className="videoAnalytics__date">
        {new Date(videoData.timestamp).toLocaleDateString()}
      </time>
      <article className="videoAnalytics__likes-container">
        <img className="videoAnalytics__likes-image" src={likes}></img>
        <label className="videoAnalytics__likes-data">{videoData.likes}</label>
      </article>
    </section>
  );
}
