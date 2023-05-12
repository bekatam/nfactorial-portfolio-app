import './Aboutme.css'
import ListItem from './ListItem'

export default function AboutMe() {
    const descr = ['Lorem ipsum dolor sit dolor.', 'Lorem ipsum dolor sit.dolor sit.', 'Lorem ipsum dolor sit.', 'Lorem ipsum dolor sit.']
    return (
        <div className="aboutme__wrapper" id='about'>
            <div className="aboutme__left">
                <div className="aboutme__left__title">About me</div>
                <div className="aboutme__left__descr">I'm software developer and this is my portfolio.<br/>I'm software developer and this is my portfolio. I'm software developer<br/>and this is my portfolio. I'm software developer and this is my portfolio.</div>
                <ul className="aboutme__left__ul">
                    {descr.map((item, index)=>{
                        return <ListItem descr = {item} key={index}/>
                    })}
                </ul>
            </div>
            <img src={require('../../img/girl.jpg')} alt="girl" className="aboutme__img" />
        </div>
    )
}