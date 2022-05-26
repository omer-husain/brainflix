
import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <section className="header">
      <h1 className="header__heading">BrainFlix</h1>
      <img className="header__logo" src={logo}></img>

      <form className="header__form">
        <input className="header__search"></input>
        <img className="header__avatar" src={avatar}></img>
        <button className="header__upload-button">UPLOAD</button>
      </form>
    </section>
  );
}

export default Header;
