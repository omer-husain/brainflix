import "./NextVideosList.scss";
import NextVideo from "../NextVideo/NextVideo";

//list of components that are mapped into NextVideo list. 
//Vidoes passed in from MainPage component

export default function NextVideosList({ videos }) {
  return (
    <section className="next-videos">
      <h3 className="next-videos__heading">NEXT VIDEOS</h3>
      {videos.map((video) => {
        return <NextVideo video={video} key={video.id} />;
      })}
      
    </section>
  );
}
