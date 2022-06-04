import "./VideoCommentsList.scss";
import VideoComment from "../VideoComment/VideoComment";

export default function VideoCommentsList({ videoData }) {
  let comments = videoData.comments;
  return (
    <section class="display-comments">
      {comments.map((comment) => {
        return <VideoComment comment={comment} />;
      })}
    </section>
  );
}
