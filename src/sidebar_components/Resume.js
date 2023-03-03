import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";
import resume from '../images/resume/Capture.PNG';
import Pdf from '../images/resume/Resume.pdf';
const RESUME_DATA = [
    {
        image: resume,
        websiteLink: "",
        descriptionPoints: [
        ],
        date: "Last updated March 2023 | Bangalore",
        tooltip: ""
    },
]
class Resume extends React.Component {
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
        return RESUME_DATA.map(data => {
            return (
                <div key={data.professionTitle} className="row justify-content-center">
                    <div className="col-12 col-lg-11 col-xl-10">
                        <div className="card darken-1">
                            <div className="card-content common-attributes">
                                <div className="row align-items-center experience-header justify-content-center">
                                    <div className="col-10 pb-2 col-sm-4 mr-sm-auto">
                                        <a href={Pdf} target="_blank" rel="noopener noreferrer"
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
                <ComponentHeader heading={"Resume"}/>
                <div className="container flow-text experience-container">
                    {this.renderCards()}
                </div>
            </div>
        )
    }
}
export default Resume;
