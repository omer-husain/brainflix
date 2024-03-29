import greyAvator from "../../assets/images/grey1.png";

//VideoComment component takes info from VideoComments list component as props comment
//displays comments with name, timestamp and comment text

export default function VideoComment({ comment }) {
  return (
    <article className="display-comments__card">
      <section className="display-comments__card-col1">
        <img
          className="display-comments__avatar"
          src={greyAvator}
          alt="user avatar"
        />
      </section>
      <section className="display-comments__card-col2">
        <section className="display-comments__heading-row1">
          <h3 className="display-comments__card-header">{comment.name}</h3>
          <time className="display-comments__date">
            {new Date(comment.timestamp).toLocaleDateString()}
          </time>
        </section>
        <p className="display-comments__comment-text">{comment.comment}</p>
      </section>
    </article>
  );
}
