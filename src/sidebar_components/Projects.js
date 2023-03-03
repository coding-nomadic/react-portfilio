import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt, faPlay} from "@fortawesome/free-solid-svg-icons";
import reactive from "../images/project/reactive.PNG"
import microservice from "../images/project/microservice.PNG"
import crypto from "../images/project/crypto.PNG"
import blog from "../images/project/blog.PNG"
import sigma from "../images/project/sigma.PNG"
import telegram from "../images/project/telegram.png"
import ReactPlayer from 'react-player'

const PROFESSIONAL_PROJECTS = [  
]

const PERSONAL_PROJECTS = [
    {
        title: "Microservices Spring Cloud",
        description: "A simple Rest Microservices built with Spring Cloud, Spring Boot and other Tech Stacks for the demo.",
        githubLink: "https://github.com/coding-nomadic/microservice-spring-cloud",
        image: microservice,
        video: "https://www.youtube.com/watch?v=-f-7gbZluaw",
        technologyUsed: [
            <p>Developed using <b>Microservices Architecture</b>.</p>,
            <p>Built with <b>Spring Boot</b> and <b>React</b>.</p>,
            <p><b>React-Redux</b> to maintain react states.</p>,
            <p>Designed in <b>Material UI</b> and <b>Semantic UI</b>.</p>,
            <p>Fetch images from <b>Cloudinary CDN</b>.</p>,
            <p>Stored user and product information in <b>MySQL</b> database.</p>,
            <p>Minimized network calls using <b>Redis cache</b>.</p>,
            <p>Used <b>Stripe API</b> to handle payment service.</p>,
            <p>Integrated <b>Google OAuth 2.0 API</b> for quick login.</p>,
            <p>Used <b>Redux-Form</b> for quick form validation.</p>,
            <p>Stored product buying information and authentication token in <b>JS-Cookies</b>.</p>,
            <p>Used <b>Docker Compose</b> to test for quick application deployment.</p>,
            <p>Deployed on <b>Heroku</b> using <b>Docker</b>.</p>,
        ]
    },
    {
        title: "Reactive User API",
        description: "Reactive API of users built with Spring webflux API and storing data in elastic search via elastic search APIs",
        githubLink: "https://github.com/coding-nomadic/reactive-user-service",
        image: reactive,
        video: "https://www.youtube.com/watch?v=-f-7gbZluaw",
        technologyUsed: [
            <p>Built with <b>NodeJS</b> and <b>React</b>.</p>,
            <p>Stored data in <b>MongoDB</b>.</p>,
            <p>Fetch data from server using <b>GraphQL</b>.</p>,
            <p>Established communication using <b>GraphQL Subscription</b> which is based
                on <b>WebSocket</b> technology.</p>,
            <p><b>React-Redux</b> to maintain react states.</p>,
            <p>Designed in <b>Material UI</b>.</p>,
            <p>Deployed on <b>Heroku</b> using <b>Docker</b>.</p>,
        ]
    },
    {
        title: "Crypto Currency Prices",
        description: "This application is built using Python, Web socket, Angular with Material UI for the User Interface.",
        githubLink: "https://github.com/coding-nomadic/crypto-currency-prices",
        image: crypto,
        video: "https://www.youtube.com/watch?v=-f-7gbZluaw",
        technologyUsed: [
            <p>Built with <b>Spring Boot</b> and <b>React</b>.</p>,
            <p>Used <b>RESTful</b> architecture to serve the client requests.</p>,
            <p>Used <b>Swagger UI</b> to for REST Api documentation.</p>,
            <p>Added <b>logback-spring</b> support to manage logs.</p>,
            <p><b>React-Redux</b> to maintain react states.</p>,
            <p>Designed in <b>Material UI</b> and <b>Bootstrap</b>.</p>,
            <p>Stored user and product information in <b>MySQL</b> database.</p>,
            <p>Stored authentication token in <b>JS-Cookies</b>.</p>,
            <p>Deployed on <b>AWS</b>.</p>,
        ]
    },
    {
        title: "Blog Service",
        description: "This is Backend for social media blog built in springboot, JWT Token and email service. Front end in Angular is coming in the future.",
        githubLink: "https://github.com/coding-nomadic/blog-service",
        image: blog,
        video: "https://www.youtube.com/watch?v=-f-7gbZluaw",
        technologyUsed: [
            <p>Built with <b>Spring Boot</b> and <b>React</b>.</p>,
            <p>Used <b>RESTful</b> architecture to serve the client requests.</p>,
            <p>Used <b>Swagger UI</b> to for REST Api documentation.</p>,
            <p>Added <b>logback-spring</b> support to manage logs.</p>,
            <p><b>React-Redux</b> to maintain react states.</p>,
            <p>Designed in <b>Material UI</b> and <b>Bootstrap</b>.</p>,
            <p>Stored user and product information in <b>MySQL</b> database.</p>,
            <p>Stored authentication token in <b>JS-Cookies</b>.</p>,
            <p>Deployed on <b>AWS</b>.</p>,
        ]
    },
    {
        title: "Order Manager App",
        description: "This is an android app buit with Java which calls Rest endpoints of Order management product and Spring Boot application",
        githubLink: "https://github.com/coding-nomadic/order-manager-app",
        image: sigma,
        video: "https://www.youtube.com/watch?v=SIInkm1SNIo",
        technologyUsed: [
            <p>Built with <b>HTML</b> and <b>CSS</b>.</p>,
            <p>Designed in <b>Materialize CSS</b>.</p>,
            <p>Deployed on <b>GitHub pages</b>.</p>,
        ]
    },
    {
        title: "Telegram Bot",
        description: "Fetch latest NSE stock price which notifies via Telegram bot every interval of time.",
        githubLink: "https://github.com/coding-nomadic/telegram-bot-stock-price",
        image: telegram,
        video: null,
        technologyUsed: [
            <p>Built with <b>Spring Boot</b>, <b>Angular</b>, and <b>MongoDB</b>.</p>,
            <p>Used <b>TypeScript</b> for strong typing.</p>,
            <p><b>NgRx</b> is used to maintain angular states.</p>,
            <p>Designed in <b>Angular Material</b>.</p>,
            <p>Data is scrape periodically/batch processing using <b>Multithreading</b> environment.</p>,
            <p>Stored scraped data in <b>MongoDB</b> database.</p>,
            <p>Used <b>JUnit</b> to write spring boot integration test.</p>,
            <p>Deployed on <b>Heroku</b> using <b>Docker</b>.</p>,
        ]
    },
];

class Projects extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectVideo: null
        }
    }

    componentDidMount() {
        const tooltipElem = document.querySelectorAll(".project-tooltip");
        M.Tooltip.init(tooltipElem, {
            enterDelay: 400,
            exitDelay: 200,
        });

        const modalElem = document.querySelectorAll('.modal');
        M.Modal.init(modalElem, {
            onCloseEnd: () => this.setState({selectVideo: null})
        });
    }

    render() {
        const renderTechnologyUsed = (sentences) => {
            if (!sentences) {
                return null
            }

            return sentences.map((sentence, index) => {
                return (
                    <li key={index} style={{listStyleType: "disc", display: "list-item"}}>
                        {sentence}
                    </li>
                )
            })
        }

        const playVideoHandler = (video) => {
            this.setState({selectVideo: video})
        }

        const renderSelectedVideo = () => {
            return (
                <div id="modal1" className="modal" style={{
                    maxWidth: "80%",
                    height: "fit-content",
                    maxHeight: "fit-content",
                    backgroundColor: "black"
                }}>
                    <ReactPlayer url={this.state.selectVideo}
                                 muted={true}
                                 className='react-player'
                                 width="inherit"
                                 controls={true} playing={this.state.selectVideo !== null}/>
                </div>
            )
        }

        const renderPersonalCards = () => {
            return PERSONAL_PROJECTS.map(data => {
                return (
                    <div key={data.title} className="col-md-6 col-lg-6 col-xl-4" style={{paddingBottom: 30}}>
                        <div className="card darken-1 sticky-action personal-card">
                            <div
                                className="project-tooltip card-image personal-card-image waves-effect waves-block waves-light mb-2"
                                data-position="top" data-tooltip="View Technology Used">
                                <img className="activator" src={data.image} alt="project-img"/>
                            </div>
                            <div className="card-content" style={{borderTop: "1px solid rgba(160, 160, 160, 0.2)"}}>
                                <div className="card-title activator teal-text">
                                    <div className="row align-items-center" style={{marginBottom: 0}}>
                                        <div className="col-10 justify-content-start activator">
                                            {data.title}
                                        </div>
                                        <div className="project-tooltip" data-tooltip="View Technology Used"
                                             data-position="left">
                                            <i className="material-icons right">more_vert</i>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-data">
                                    <p>{data.description}</p>
                                </div>
                            </div>

                            <div className="card-action" style={{backgroundColor: "white"}}>
                                {data.websiteLink ? <a href={data.websiteLink} target="_blank" rel="noopener noreferrer"
                                                       className="project-tooltip btn-floating btn-small waves-effect waves-light brown"
                                                       data-position="top" data-tooltip="View Demo"
                                                       style={{textAlign: "center"}}>
                                    <FontAwesomeIcon icon={faExternalLinkAlt} size="sm"/>
                                </a> : null}


                                {data.video ?
                                    // eslint-disable-next-line
                                    <a data-target="modal1" onClick={() => playVideoHandler(data.video)}
                                       className="modal-trigger project-tooltip btn-floating btn-small waves-effect waves-light brown"
                                       data-position="top" data-tooltip="Play Demo Clip"
                                       style={{textAlign: "center"}}>
                                        <FontAwesomeIcon icon={faPlay} size="sm"/>
                                    </a> : null}

                                {data.githubLink ? <a href={data.githubLink} target="_blank" rel="noopener noreferrer"
                                                      className="project-tooltip btn-floating btn-small waves-effect waves-light brown"
                                                      data-position="top" data-tooltip="View Source"
                                                      style={{textAlign: "center"}}>
                                    <FontAwesomeIcon icon={['fab', "github"]} size="sm"/>
                                </a> : null}

                            </div>

                            <div className="card-reveal">
                            <span className="card-title brown-text font-weight-light">Technology Used
                                <i className="material-icons right brown-text">close</i>
                            </span>
                                <div style={{paddingLeft: 12}}>
                                    <ul>
                                        {renderTechnologyUsed(data.technologyUsed)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })

        }

        

        const renderSubTitle = (subTitle) => {
            return <div className="teal white-text p-2 mb-3 font-weight-light">
                {subTitle}
            </div>
        }

        return (
            <div>
                <ComponentHeader heading={"Projects"}/>
                <div className="container flow-text project-container">
                    {renderSubTitle("PERSONAL PROJECTS")}
                    <div className="row justify-content-start">
                        {renderPersonalCards()}
                    </div>
                </div>
                
                {renderSelectedVideo()}
            </div>
        )
    }

}

export default Projects;
