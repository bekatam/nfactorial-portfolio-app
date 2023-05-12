import './Nav.css'
import {Link} from 'react-scroll'

export default function Nav() {
    const sections = ['About', 'Experience', 'Projects', 'Contacts'];
    
    return (
        <div className="nav__wrapper">
            <div className="nav__name">Adilbek</div>
            <div className="nav__wrapper__items">
                {sections.map((item, index)=>{
                    return <Link key={index} className="nav__wrapper__item" to={item.toLowerCase()} smooth={true} duration={1000}>{item}</Link>
                })}
            </div>
        </div>
        
    )
}