import React from "react";
import img1 from '../../assets/icons/github.gif'
import img2 from '../../assets/icons/linkedin.png'
import img3 from '../../assets/icons/slack.png'

function Footer() {
    return (
        <section className="flex-row icons">
            <div>
                <a>
                    <img className="footer-icon" src={img1} />
                </a>
            </div>
            <div>
                <a>
                    <img className="footer-icon" src={img2} />
                </a>
            </div>
            <div>
                <a>
                    <img className="footer-icon" src={img3} />
                </a>
            </div>
        </section>
    )
}

export default Footer;