import centime_logo_white from '../../images/centime-logo-white.svg';
import './header.css';

function Header () {
  return (
    <header className="appHeader">
        <img src={centime_logo_white} width="139" height="59" className="appLogo" alt="logo" />
    </header>
  );
}

export default Header;
