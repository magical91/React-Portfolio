import React from "react";
import img1 from "../../assets/portfolio/sc1.png"
import img2 from "../../assets/portfolio/group-project.png"
import img3 from "../../assets/portfolio/screenS.png"
import img4 from "../../assets/portfolio/screenshot1.png"
import img5 from "../../assets/portfolio/budget-tracker-screenshot.jpg"
import img6 from "../../assets/portfolio/sc.png"

function Portfolio() {
    return (
        <section>
        <h1>Portfolio</h1>
            <div>
                <div>
                    <a href="https://magical91.github.io/Weather-App/">
                        <img src={img1} className="img-thumbnail mx-1" alt="screenshot of weather app" />
                    </a>
                </div>
                <div>
                    <a href="https://magical91.github.io/dinner-and-drinks-1/">
                        <img src={img2} className="img-thumbnail mx-1" alt="screenshot of my dinner-and-drinks project" />
                    </a>
                </div>
                <div>
                    <a href="https://sheltered-crag-40772.herokuapp.com/login">
                        <img src={img3} className="img-thumbnail mx-1" alt="screenshot of my doggy hotel project" />
                    </a>
                </div>
                <div>
                    <a href="https://rocky-sands-30313.herokuapp.com/login">
                        <img src={img4} className="img-thumbnail mx-1" alt="screenshot of tech blog web application" />
                    </a>
                </div>
                <div>
                    <a href="https://glacial-depths-14664.herokuapp.com/">
                        <img src={img5} className="img-thumbnail mx-1" alt="screenshot of my budget tracker application"/>
                    </a>  
                </div>
                    <div>
                        <a href="https://secure-cliffs-65748.herokuapp.com/">
                            <img src={img6} className="img-thumbnail mx-1" alt="screenshot of my note taker web application" />
                        </a>  
                </div>
            </div>
        </section>
    )
}

export default Portfolio