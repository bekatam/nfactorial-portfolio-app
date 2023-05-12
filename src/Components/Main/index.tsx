import './Main.css';
import '../../Title.css';
import { Link } from 'react-router-dom';
export default function Main() {

  return (
    <div className="main">
      <div className="title">
        Hi, I'm Adilbek, <br />
        I build things for the web.
      </div>
      <div className="title__subtitle">
        I'm a software developer, and this is my portfolio.
      </div>
      <button className="btn">
        <Link to="https://github.com/bekatam" target="_blank" className="btn_link">Check my CV</Link>
      </button>
    </div>
  );
}
