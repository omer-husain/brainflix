import "./VideoCommentsForm.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";

export default function VideoCommentsForm({ videoData }) {
  let commentsLength = videoData.comments.length;

  return (
    <section className="write-comments">
      <h2 className="write-comments__number">{commentsLength} comments</h2>
      <section className="write-comments__form-container">
        <section className="write-comments__col1-image">
          <img className="write-comments__avatar" src={avatar} alt="" />
        </section>

        <form className="write-comments__col2-form" action="">
          <label className="write-comments__form-label" for="textarea">
            JOIN THE CONVERSATION
          </label>
          <textarea
            className="write-comments__comment-area"
            id="textarea"
            placeholder="Add a new comment"
          ></textarea>
          <button className="write-comments__button">Comment</button>
        </form>
      </section>
    </section>
  );
}
