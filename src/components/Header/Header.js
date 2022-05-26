import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <section className="header">
      <nav className="header__nav">
        <img className="header__logo" src={logo}></img>
      </nav>

      <form className="header__form">
        <section className="header__row1">
          <input className="header__search"></input>
          <img className="header__avatar" src={avatar}></img>
        </section>

        <button className="header__upload-button">UPLOAD</button>
      </form>
    </section>
  );
}

export default Header;
