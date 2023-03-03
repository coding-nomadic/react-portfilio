import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";
import sigma from '../images/experience/sigma.png';
import cognizant from '../images/experience/cognizant.jpg';
import harman from '../images/experience/harman.png';

const EXPERIENCE_DATA = [
    {
        image: harman,
        websiteLink: "https://en.wikipedia.org/wiki/Harman_International",
        professionTitle: "Senior Software Engineer",
        descriptionPoints: [
        ],
        date: "Dec 2019 - Present | Bangalore, India",
        tooltip: "Look at the company's website"
    },
    {
        image: cognizant,
        websiteLink: "https://www.cognizant.com/in/en",
        professionTitle: "Software Developer",
        descriptionPoints: [
           
        ],
        date: "July 2018 - Dec 2019 | Bangalore, India",
        tooltip: "Look at the company's website"
    },
    {
        image: sigma,
        websiteLink: "https://www.hansencx.com/",
        professionTitle: "Software Engineer",
        descriptionPoints: [
            
        ],
        date: "July 2015 - July 2018 | Pune, India",
        tooltip: "Look at the university's website"
    }
    
]

class Experience extends React.Component {
    componentDidMount() {
        const elem = document.querySelectorAll(".experience-tooltip");
        M.Tooltip.init(elem, {
            margin: 50,
            enterDelay: 400,
            exitDelay: 200,
        });
    }

    renderHtmlList(descriptionPoints) {
        let count = 0
        return descriptionPoints.map(point => {
            ++count
            return <li key={count}> {point}</li>
        })
    }

    renderCards() {
        return EXPERIENCE_DATA.map(data => {
            return (
                <div key={data.professionTitle} className="row justify-content-center">
                    <div className="col-12 col-lg-11 col-xl-10">
                        <div className="card darken-1">
                            <div className="card-content common-attributes">
                                <div className="row align-items-center experience-header justify-content-center">
                                    <div className="col-10 pb-2 col-sm-4 mr-sm-auto">
                                        <a href={data.websiteLink} target="_blank" rel="noopener noreferrer"
                                           className="experience-tooltip" data-position="top"
                                           data-tooltip={data.tooltip}>
                                            <img src={data.image} className="responsive-img"
                                                 style={{height: "auto", maxWidth: "100%"}}
                                                 alt={data.professionTitle}/>
                                        </a>
                                    </div>
                                    <div className="card-title brown-text align-header pr-1 pr-sm-4">
                                        {data.professionTitle}
                                    </div>
                                </div>

                                <ul>
                                    {this.renderHtmlList(data.descriptionPoints)}
                                </ul>
                                <div className="card-action brown-text">
                                    <span>{data.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                <ComponentHeader heading={"Experience"}/>
                <div className="container flow-text experience-container">
                    {this.renderCards()}
                </div>
            </div>
        )
        }
    }
export default Experience;
