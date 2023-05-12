import '../../Title.css'
import './Contacts.css'
import { Link } from 'react-router-dom'
export default function Contacts() {
    return (
        <div className='contacts'>
            <div className="title">Say Hello</div>
            <div className="title__subtitle">I'm software developer and this is my portfolio.</div>
            <button className="btn">
                <Link to="https://www.t.me/beqatam" target="_blank" className="contacts__link">Get in Touch</Link>
            </button>
        </div>
    )
}