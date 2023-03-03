import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";

const EDUCATION_DATA = [
  
    {
        title: "Rajiv Gandhi Technical University",
        titleLink: "https://www.rgpv.ac.in/",
        degree: "B.E. in Computer Science & Engineering",
        gpa: "GPA: 7.6/10",
        date: "Jun 2011 - Jun 2015 | Jabalpur, India"
    }
]

class Education extends React.Component {
    componentDidMount() {
        const elem = document.querySelectorAll(".education-tooltip");
        M.Tooltip.init(elem, {
            margin: 15,
            enterDelay: 400,
            exitDelay: 200,
        });
    }

    renderCards() {
        return EDUCATION_DATA.map(data => {
            return (
                <div key={data.title} className="row justify-content-center">
                    <div className="col-sm-12 col-lg-10">
                        <div className="card darken-1">
                            <div className="card-content common-attributes">
                                <a href={data.titleLink} target="_blank" rel="noopener noreferrer"
                                   className="education-tooltip" data-position="top"
                                   data-tooltip="Look at the university website">
                                    <span className="card-title teal-text">{data.title}</span></a>
                                <div className="container pt-4">
                                    <div className="row">
                                        <div className="mr-auto">
                                            <li>
                                                {data.degree}
                                            </li>
                                        </div>
                                        <div className="justify-content-end">
                                            {data.gpa}
                                        </div>
                                    </div>
                                </div>
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
            <div className="webpage-height">
                <ComponentHeader heading={"Education"}/>
                <div className="container flow-text education-container">
                    {this.renderCards()}
                </div>
            </div>
        )
    }

}

export default Education;
