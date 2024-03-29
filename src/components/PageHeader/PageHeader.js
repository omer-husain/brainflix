import "./PageHeader.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
import searchIcon from "../../assets/icons/search.svg";
import { Link } from "react-router-dom";

//PageHeader Component that serves as navigation for all pages. outside of react-router links
//renders on top of all pages

function PageHeader() {
  return (
    <section className="header">
      <nav className="header__nav">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo"></img>
        </Link>
      </nav>

      <form className="header__form1">
        <section className="header__row1">
          <input
            className="header__search"
            alt="Search"
            placeholder="Search"
          ></input>
          <img className="header__avatar" src={avatar} alt="avatar"></img>
        </section>
        <Link to="/upload">
          <button className="header__upload-button">
            <img
              className="header__upload-icon"
              src={uploadIcon}
              alt="Upload Icon"
            />
            UPLOAD
          </button>
        </Link>
      </form>
      <form className="header__form2">
        <input
          className="header__search"
          alt="Search"
          placeholder="Search"
        ></input>
        <Link className="header__link" to="/upload">
          <button className="header__upload-button">
            <img
              className="header__upload-icon"
              src={uploadIcon}
              alt="Upload Icon"
            />
            UPLOAD
          </button>
        </Link>

        <img className="header__avatar" src={avatar} alt="avatar"></img>
      </form>
    </section>
  );
}

export default PageHeader;
