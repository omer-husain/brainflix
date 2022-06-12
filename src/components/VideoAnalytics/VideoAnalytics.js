import "./VideoAnalytics.scss";
import likes from "../../assets/icons/likes.svg";
import views from "../../assets/icons/views.svg";

//Video analytics component. takes VideoData prop and displays channel, timestamp, vuews and likes
//info generated and passed in from MainPAge component

export default function VideoAnalytics({ videoData }) {
  return (
    <>
      <section className="videoAnalytics">
        <label className="videoAnalytics__by-channel">
          by {videoData.channel}
        </label>
        <article className="videoAnalytics__views-container">
          <img
            className="videoAnalytics__views-image"
            src={views}
            alt="views image"
          ></img>
          <label className="videoAnalytics__views-data">
            {videoData.views}
          </label>
        </article>
        <time className="videoAnalytics__date">
          {new Date(videoData.timestamp).toLocaleDateString()}
        </time>
        <article className="videoAnalytics__likes-container">
          <img
            className="videoAnalytics__likes-image"
            src={likes}
            alt="likes image"
          ></img>
          <label className="videoAnalytics__likes-data">
            {videoData.likes}
          </label>
        </article>
      </section>

      <section className="videoAnalytics-large">
        <section className="videoAnalytics-large__column1">
          <label className="videoAnalytics-large__by-channel">
            by {videoData.channel}
          </label>

          <time className="videoAnalytics-large__date">
            {new Date(videoData.timestamp).toLocaleDateString()}
          </time>
        </section>
        <section className="videoAnalytics-large__column2">
          <article className="videoAnalytics-large__views-container">
            <img
              className="videoAnalytics-large__views-image"
              src={views}
              alt="views image"
            ></img>
            <label className="videoAnalytics-large__views-data">
              {videoData.views}
            </label>
          </article>
          <article className="videoAnalytics-large__likes-container">
            <img
              className="videoAnalytics-large__likes-image"
              src={likes}
              alt="likes image"
            ></img>
            <label className="videoAnalytics-large__likes-data">
              {videoData.likes}
            </label>
          </article>
        </section>
      </section>
    </>
  );
}
