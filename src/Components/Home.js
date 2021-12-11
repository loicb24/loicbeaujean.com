// Home.js

import React, { Component } from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

import { ActivityTimeline, TimelineMarker } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {

  constructor(props) {
    super(props);
  }


  getEvents() {
    return {
      name: 'event1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
      user: 'Tahimi Leon',
      datetime: '11:00 AM, Today',
      details: {
        uid: '1610482374420',
        birthdate: 'January 12, 2021',
      },
    }
  }

  render() {

    return (
      <div>
        <h1 id="main_title">{`{`}Hello World!{`}`} I am Loïc 👨‍💻</h1>
        <h2 id="second_main_title">Enthousiast backend developer <span style={{ fontSize: "0.5em" }}> (and definitely not a front-end one)</span></h2>
        <hr style={{ color: "#ecf0f1" }} />

        <div style={{marginLeft : "7vw", marginRight : "7vw", marginTop : "55px"}}>

          <BootstrapCard className="main_card_style">
            <BootstrapCard.Body>
              <BootstrapCard.Text>
                <p className="content_justify"><i>Have you ever woken-up one morning and decided to change your life ? I have.</i></p>
                <p className="content_justify">In 2015, after my Bachelor graduation in Public Relations and Communication, I have decided to make a drastic change of my professional objectives. Ever since, I have spend more hours than I can count, writing code, learning new technologies and reading documentation to finally become the developer I am today.
                  I have no regret.
                </p>
                <p className="content_justify">After many years as Javascript developer, my objective is to move towards a carreer as a Golang developer. I am passionnate about business applications and solving business problems with code.</p>
              </BootstrapCard.Text>
            </BootstrapCard.Body>
          </BootstrapCard>

          <h2 className="main_second_title">My Journey</h2>

          <BootstrapCard className="main_card_style main_activity_timeline">
            <ActivityTimeline>

              <TimelineMarker
                label="Bachelor in Business IT"
                icon={<FontAwesomeIcon size="lg" color="#34495e" icon={faUserGraduate} />}
                datetime="2020 -"
                description="In 2020, I have decided to start a Bachelor in Business IT (Informatique de Gestion) in evening classes, at EPHEC University College (Brussels, Belgium). I want to benefit from a more theoretical approach of my daily work and want to reinforce skills I alreayd have."
              />

              <TimelineMarker
                label="Senior ERP Developer @Deloitte Belgium"
                icon={<FontAwesomeIcon size="lg" color="#34495e" icon={faBuilding} />}
                datetime="2019 -"
                description={`As a certified NetSuite Developer, I collaborates with Finance, Operations, Procurement and Sales to assess business requirements and formulate solutions.
              I design, develop, test and deploy NetSuite enhancements, I build customizations using extensions and scripts to meet business needs. JavaScript is the language used for most of the customizations but I had multiple opportunities to implement solutions using NodeJS & C# for integrations with other systems, using both SOAP and REST technologies.
              `}
              />

              <TimelineMarker
                label="CRM Analyst/Developer @Efficy"
                icon={<FontAwesomeIcon size="lg" color="#34495e" icon={faBuilding} />}
                datetime="2017 - 2019"
                description="This first exprience as developer pushed me to the wonderfull world of business application. The stack used was mosty Javascript and MSSQL (with a pinch of Delphi). At the end, I was responsible for my own project, from analysis to delivery."
              />

              <TimelineMarker
                label="Professional Certification (BES) in Web Developement"
                icon={<FontAwesomeIcon size="lg" color="#34495e" icon={faUserGraduate} />}
                datetime="2015 - 2019"
                description="In 2015, I have started evening classes in webdevelopement at EICVN (Namur, Belgium). My graduation project was the developement of a deskop application (Electron.js) and a server in PHP (Lumen). I recived my diploma with high distinction."
              />

              <TimelineMarker
                label="Bachelor in Public Relations and Corporate Communication"
                icon={<FontAwesomeIcon size="lg" color="#34495e" icon={faUserGraduate} />}
                datetime="2012 - 2015"
                description="Bachelor's degree at Condorcet University (Charleroi, Belgium). During my internships, I had the opportunity to meet developers and digital creators. This experiences pushed me towards the IT word. I was graduated with distinction after a final internship of 3 month in Antwerp."
              />
            </ActivityTimeline>
          </BootstrapCard>

          <h2 className="main_second_title">My Stack</h2>

          <BootstrapCard className="main_card_style">
            <BootstrapCard.Body>
              <p><i>Technical skills</i></p>
              <table style={{width : "100%"}}>
                <tr>
                  <td className="stack_table" style={{width : "5%", backgroundColor:"#3498db"}}>Go</td>
                  <td className="stack_table" style={{width : "55%", backgroundColor:"#f1c40f"}}>Javascript</td>
                  <td className="stack_table" style={{width : "25%", backgroundColor:"#95a5a6"}}>SQL (MSSQL, MySQL)</td>
                  <td className="stack_table" style={{width : "9%", backgroundColor:"#B0B3D6"}}>PHP</td>
                  <td className="stack_table" style={{width : "5%", backgroundColor:"Navy", color : "white"}}>C#</td>
                </tr>
              </table>
              <p style={{fontSize : "0.7em"}}>The objective : become a Go developer. I will give myself 1 year to increase my knowleage of Golang. I want GO to be equal to Javascript in 2022 !</p>

              <p><i>Operating System</i></p>
              <table style={{width : "100%"}}>
                <tr>
                  <td className="stack_table" style={{width : "20%", backgroundColor:"#d35400"}}>Debian</td>
                  <td className="stack_table" style={{width : "5%", backgroundColor:"#2980b9"}}>Windows</td>
                  <td className="stack_table" style={{width : "75%"}}></td>
                </tr>
              </table>

              <br />
              <p><i>Business Experience</i></p>
              <table style={{width : "100%"}}>
                <tr>
                  <td className="stack_table" style={{width : "45%", backgroundColor:"#e67e22"}}>ERP</td>
                  <td className="stack_table" style={{width : "30%", backgroundColor:"#2ecc71"}}>CRM</td>
                  <td className="stack_table" style={{width : "20%", backgroundColor:"#3498db"}}>Billing</td>
                  <td className="stack_table" style={{width : "15%", backgroundColor:"#34495e", color : "white"}}>Accounting</td>
                </tr>
              </table>

              <br />
              <p><i>Language</i></p>
              <table style={{width : "100%"}}>
                <tr>
                  <td className="stack_table" style={{width : "55%", backgroundColor:"#2c3e50", color : "white"}}>French (Native)</td>
                  <td className="stack_table" style={{width : "40%", backgroundColor:"#c0392b", color : "white"}}>English (Fluent)</td>
                  <td className="stack_table" style={{width : "5%", backgroundColor:"#e67e22"}}>Dutch</td>
                </tr>
              </table>

              <br />

            </BootstrapCard.Body>
          </BootstrapCard>


          <h2 className="main_second_title">My Plans for the Future</h2>

          <BootstrapCard className="main_card_style">
            <BootstrapCard.Body>
              <BootstrapCard.Text>
                <p className="content_justify">Never. Stop. Coding.</p>
                <p className="content_justify">I know what I want to do for the next 10 years. In short terms, I want to becomes a better backend developer and specialize myself in Go. I have a list of skills I want to improve and clear objectives.</p>
                <table style={{width : "100%"}}>
                  <tr className="tr_header">
                    <th style={{width : "80%"}}>Go</th>
                    <th style={{width : "20%"}}></th>
                  </tr>
                  <tr className="tr_not_header">
                    <td>(Udemy) Master Go Programming : the complete 2022 bootcamp</td>
                    <td>
                      <progress id="file" value="50" max="100"> 50% </progress>
                    </td>
                  </tr>
                  <tr className="tr_not_header">
                    <td>(Exercism) The complete Go Path</td>
                    <td>
                      <progress id="file" value="10" max="100"> 50% </progress>
                    </td>
                  </tr>
                  <tr className="tr_not_header">
                    <td>(Udemy) REST Based microservice API in Golang</td>
                    <td>
                    <progress id="file" value="0" max="100"> 0% </progress>
                    </td>
                  </tr>
                  <tr className="tr_not_header">
                    <td>(Udemy) Building Web Application with Go - Intermidiate level</td>
                    <td>
                      <progress id="file" value="0" max="100"> 0% </progress>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  <tr className="tr_header">
                    <th>Docker & Kubernetes</th>
                    <th></th>
                  </tr>
                  <tr className="tr_not_header">
                    <td>(Udemy) Docker and Kubernetes: The Complete Guide</td>
                    <td>
                      <progress id="file" value="0" max="100"> 0% </progress>
                    </td>
                  </tr>
                  <tr className="tr_header">
                    <th>gRPC</th>
                    <th></th>
                  </tr>
                  <tr className="tr_not_header">
                    <td>(Udemy) The complete gRPC course 2020 [Golang + Java + Protobuf]</td>
                    <td>
                      <progress id="file" value="0" max="100"> 0% </progress>
                    </td>
                  </tr>

                  <tr className="tr_header">
                    <th>AWS Cloud</th>
                    <th></th>
                  </tr>
                  <tr className="tr_not_header">
                    <td>(Udemy) Amazon DynamoDB: Build out NoSQL Databases in the AWS Cloud</td>
                    <td>
                      <progress id="file" value="0" max="100"> 0% </progress>
                    </td>
                  </tr>
                  <tr className="tr_not_header">
                    <td>(Udemy) Hands-on Serverless Computing with Go</td>
                    <td>
                      <progress id="file" value="0" max="100"> 0% </progress>
                    </td>
                  </tr>
                  
                </table>
              </BootstrapCard.Text>
            </BootstrapCard.Body>
          </BootstrapCard>


        </div>



      </div>
    );
  }
}

export default Home;