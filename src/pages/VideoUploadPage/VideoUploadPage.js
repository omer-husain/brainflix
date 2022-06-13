import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";
import "./VideoUploadPage.scss";
import { postVideo } from "../../api/apiCalls";
import MyAlert from "../../components/MyAlert/MyAlert";
import { Component } from "react";
import publishIcon from "../../assets/icons/publish.svg";

//upload page used to pass information for POST request to back-end api.
//form using state to track inputs title and description along with upload status
//react control form

class VideoUploadPage extends Component {
  constructor(props) {
    super(props);

    //passing inputs into state
    this.state = {
      uploadStatus: null,
      title: "",
      description: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  //update title after first render
  componentDidMount() {
    document.title = "Upload Page";
  }

  alertMessages = {
    success: "Video Uploaded Successfully",
    error: "The video did not upload",
  };

  //handles multiple input onChange and sets new state
  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  //submit form handler
  handleSubmit = async (event) => {
    event.preventDefault();

    let payLoad = {
      title: event.target.title.value,
      description: event.target.description.value,
    };

    try {
      let response = await postVideo(payLoad);

      this.setState({ uploadStatus: true });
      setTimeout(() => {
        this.props.history.push({ pathname: "/" });
      }, 3000); //success on screen for 3 secs before redirect
    } catch (error) {
      this.setState({ uploadStatus: false });
      setTimeout(() => {
        this.setState({ uploadStatus: null });
      }, 5000); //error on screen for 5 secs
    }
  };

  render() {
    return (
      <section className="upload-page">
        <h1 className="upload-page__heading">Upload Video</h1>
        {this.state.uploadStatus && (
          <MyAlert message={this.alertMessages.success} status={"success"} />
        )}

        {this.state.uploadStatus === false && (
          <MyAlert
            message={this.alertMessages.error}
            status={"error"}
            errorDescription={this.alertMessages.description}
          />
        )}

        <section className="upload-page__columns">
          <section className="upload-page__col1">
            <h3 className="upload-page__thumbnail-label">VIDEO THUMBNAIL</h3>
            <img
              className="upload-page__image"
              src={thumbnail}
              alt="upload image"
            ></img>
          </section>

          <form onSubmit={this.handleSubmit} className="upload-page__col2">
            <label className="upload-page__title-label" htmlFor="videoTitle">
              TITLE YOUR VIDEO
            </label>
            <input
              className="upload-page__title-input"
              id="videoTitle"
              type="text"
              placeholder="Add a title to your video"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
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
              value={this.state.description}
              onChange={this.handleInputChange}
            ></textarea>
            <section className="upload-page__last-row">
              <button type="submit" className="upload-page__button">
                <img src={publishIcon} className="upload-page__icon"></img>
                PUBLISH
              </button>
              <Link to={"/"} className="upload-page__cancel">
                CANCEL
              </Link>
            </section>
          </form>
        </section>
      </section>
    );
  }
}

export default VideoUploadPage;
