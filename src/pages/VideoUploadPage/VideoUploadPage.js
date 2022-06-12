import { useState } from "react";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { useHistory } from "react-router-dom";
import "./VideoUploadPage.scss";
import { postVideo } from "../../api/apiCalls";
import MyAlert from "../../components/MyAlert/MyAlert";

function VideoUploadPage() {
  const [uploadStatus, setUploadStatus] = useState(null);
  const history = useHistory();
  let alertMessages = {
    success: "Video Uploaded Successfully",
    error: "The video did not upload",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let payLoad = {
      title: event.target.title.value,
      description: event.target.description.value,
    };

    try {
      let response = await postVideo(payLoad);
      console.log(response);
      setUploadStatus(true);
      setTimeout(() => {
        history.push("/");
      }, 3000); //success on screen for 3 secs before redirect
    } catch (error) {
      setUploadStatus(false);
      setTimeout(() => {
        setUploadStatus(null);
      }, 5000); //error on screen for 5 secs
    }
  };

  return (
    <>
      <section className="upload-page">
        <h1 className="upload-page__heading">Upload Video</h1>
        {uploadStatus && (
          <MyAlert message={alertMessages.success} status={"success"} />
        )}

        {uploadStatus === false && (
          <MyAlert
            message={alertMessages.error}
            status={"error"}
            errorDescription={alertMessages.description}
          />
        )}

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
                <button type="submit" className="upload-page__button">
                  PUBLISH
                </button>
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

export default VideoUploadPage;
