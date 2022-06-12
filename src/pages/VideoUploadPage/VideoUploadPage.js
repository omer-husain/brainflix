import Header from "../../components/Header/Header";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { Link, useHistory } from "react-router-dom";
import "./VideoUploadPage.scss";
import axios from "axios";
import { postVideo } from "../../api/apiCalls";

export default function VideoUploadPage() {
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let payLoad = {
      title: event.target.title.value,
      description: event.target.description.value,
    };

    console.log(payLoad);

    let response = await postVideo(payLoad);

    history.push("/");
  };

  return (
    <>
      <section className="upload-page">
        <h1 className="upload-page__heading">Upload Video</h1>

        <section className="upload-page__columns">
          <section className="upload-page__col1">
            <h3 className="upload-page__thumbnail-label">VIDEO THUMBNAIL</h3>
            <img className="upload-page__image" src={thumbnail}></img>
          </section>
          <section className="upload-page__col2">
            <form onSubmit={handleSubmit}>
              <label className="upload-page__title-label" htmlFor="videoTitle">
                TITLE YOUR VIDEO
              </label>
              <input
                className="upload-page__title-input"
                id="videoTitle"
                type="text"
                placeholder="Add a title to your video"
                name="title"
              ></input>
              <label
                className="upload-page__description-label"
                htmlFor="videoDescription"
              >
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                className="upload-page__video-description"
                id="videoDescription"
                placeholder="Add a description to your video"
                name="description"
              ></textarea>
              <section className="upload-page__last-row">
                <button className="upload-page__button">PUBLISH</button>
                <a className="upload-page__cancel" href="#">
                  CANCEL
                </a>
              </section>
            </form>
          </section>
        </section>
      </section>
    </>
  );
}
