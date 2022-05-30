import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
import searchIcon from "../../assets/icons/search.svg";

function Header() {
  return (
    <section className="header">
      <nav className="header__nav">
        <img className="header__logo" src={logo}></img>
      </nav>

      <form className="header__form">
        <section className="header__row1">
          <input
            className="header__search"
            alt="Search"
            placeholder="Search"
          ></input>
          <img className="header__avatar" src={avatar}></img>
        </section>

        <button className="header__upload-button">
          <img className="header__upload-icon" src={uploadIcon} />
          UPLOAD
        </button>
      </form>
    </section>
  );
}

export default Header;
