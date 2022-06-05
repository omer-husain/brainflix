import "./NextVideosList.scss";
import NextVideo from "../NextVideo/NextVideo";

export default function NextVideosList({ videos, selectVideo }) {
  return (
    <section className="next-videos">
      <h3 className="next-vides__heading">NEXT VIDEOS</h3>
      {videos.map((video) => {
        return (
          <NextVideo video={video} key={video.id} selectVideo={selectVideo} />
        );
      })}
      ;
    </section>
  );
}
