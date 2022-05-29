import "./NextVideosList.scss";
import NextVideo from "./NextVideo/NextVideo";

export default function NextVideosList({ videos }) {
  return (
    <section className="next-videos">
      <h3 className="next-vides__heading">NEXT VIDEOS</h3>
      {videos.map((video) => {
        return <NextVideo video={video}  />
      })}
      ;
    </section>
  );
}
