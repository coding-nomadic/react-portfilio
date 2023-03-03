import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";

const CERTIFICATE_DATA = [
    {
        title: "Android Programming Course",
        titleLink: "https://www.justdial.com/Delhi/HCL-Career-Development-Centre-South-Extension-1/011PXX11-XX11-100318190733-P7L5_BZDET",
        description: "Major Training from HCL Career Development Center, Southex, New Delhi",
        date: "April-May 2014",
        tooltip: "Look at the Certificate"
    },
]

class Certification extends React.Component {
    componentDidMount() {
        const elem = document.querySelectorAll(".certificate-tooltip");
        M.Tooltip.init(elem, {
            margin: 15,
            enterDelay: 400,
            exitDelay: 200,
        });
    }

    renderCards() {
        return CERTIFICATE_DATA.map(data => {
         return (
                <div key={data.title} className="row justify-content-center">
                    <div className="col-12 col-md-12 col-sm-12 col-lg-10 col-xl-10">
                        <div className="card darken-1">
                            <div className="card-content common-attributes">
                                <a href={data.titleLink} target="_blank" rel="noopener noreferrer"
                                   className="certificate-tooltip" data-position="top"
                                   data-tooltip={data.tooltip}>
                                    <span className="card-title teal-text">{data.title}</span></a>
                                <p className="py-4">{data.description}</p>
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
                <ComponentHeader heading={"Certification"}/>
                <div className="container flow-text certificate-container">
                    {this.renderCards()}
                </div>
            </div>
        )
    }

}

export default Certification;