import "./VideoCommentsList.scss";
import VideoComment from "../VideoComment/VideoComment";

export default function VideoCommentsList({ videoData }) {
  let comments = videoData.comments;
  return (
    <section className="display-comments">
      {comments.map((comment, index) => {
        return <VideoComment key={index} comment={comment} />;
      })}
    </section>
  );
}
