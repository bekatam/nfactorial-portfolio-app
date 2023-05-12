import { Link } from "react-scroll";
import './Footer.css'
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__love">Made with ❤️ in 2023.</div>
            <div className="footer__credits">Credits: photos from <a href='https://unsplash.com/@surface' target="_blank" rel="noreferrer">Unsplash.com</a>, icons from <a href='https://www.icons8.com/' target='_blank' rel="noreferrer">Icons8.</a></div>
        </footer>
    )
}