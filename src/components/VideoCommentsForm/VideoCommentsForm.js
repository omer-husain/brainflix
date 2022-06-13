import "./VideoCommentsForm.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import addIcon from "../../assets/icons/add_comment.svg";

//Component that allows for comment submission. Not functional form as not part of requirements

export default function VideoCommentsForm({ videoData }) {
  let commentsLength = videoData.comments.length;

  return (
    <section className="write-comments">
      <h2 className="write-comments__number">{commentsLength} comments</h2>
      <section className="write-comments__form-container">
        <section className="write-comments__col1-image">
          <img className="write-comments__avatar" src={avatar} alt="avatar" />
        </section>

        <form className="write-comments__col2-form" action="">
          <label className="write-comments__form-label" htmlFor="textarea">
            JOIN THE CONVERSATION
          </label>
          <textarea
            className="write-comments__comment-area"
            id="textarea"
            placeholder="Add a new comment"
          ></textarea>
          <button className="write-comments__button">
            <img className="write-comments__icon" src={addIcon}></img>
            COMMENT
          </button>
        </form>
      </section>
    </section>
  );
}
