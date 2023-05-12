import './Main.css';
import '../../Title.css';

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
        <input type='file' id="getFile" style={{display: 'none'}}></input>
        <label htmlFor="getFile" className='main__upload'>Check out my CV</label>
      </button>
    </div>
  );
}
