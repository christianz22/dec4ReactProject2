import MadeBy from './assets/madeby.png'
import Credits from './assets/rmcredits.png'
import './Footer.css'

function Footer() {
    return (
        <div className="footerContainer">

            <div className="madeBy">
                <img src={MadeBy}></img>

                <div className="ourNames">
                    <img src={Credits}></img>

                </div>

            </div>

        </div>
    )
}

export default Footer;