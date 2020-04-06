import React, { Component } from 'react';
import './App.css';
import {Image} from 'react-bootstrap';
import { BrowserRouter, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <b>SUNDHARRAJAN</b>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">  <Link to="/">PROFILE</Link> </li>
            <li class="nav-item"><Link to="/EXPERIENCE">EXPERIENCE</Link> </li>
            <li class="nav-item"> <Link to="/PROJECTS">PROJECTS</Link> </li>
          </ul>
        </div>
</nav>

          <hr />
  
          <Route exact path="/" component={PROFILE} />
          <Route path="/EXPERIENCE" component={EXPERIENCE} />
          <Route path="/PROJECTS" component={PROJECTS} />
        </div>
      </BrowserRouter>
    );
  }
}

const PROFILE = () => 
<div class="container-fluid">
<div class="row profile_section">
    <div class="col-md-6 text-center profile_section_left">
      <Image src="Profile.jpg" width="250" height="300" roundedCircle/>
    </div>
    <div class="col-md-6 profile_section_right">
        <p><b>SUNDHARRAJAN </b> <br></br> SALEM,TamilNadu <br></br> 8344230573 <br></br> SundharAnnadurai@gmail.com <br></br></p>
    </div>
</div><br></br>
<div class="row objective_section">
  <div class="col-md-12">
      <h4>OBJECTIIVE </h4>           
  </div>
</div>
<div class="row">
  <div class="col-md-12 obj_text">
        <p>To join an organization and to work with my fullest dedication and thereby helping organization and myself to develop.</p>
  </div>
</div>

<h4>EDUCATION DETAILS</h4><br></br>
<section class="education_section">
<div class="row">
  <div class="col-md-6 text-center education_inner">
      <Image src="Sona_College_of_Technology_logo.png" alt="SONA-LOGO" width="32%" height="auto"></Image>
  </div>
  <div class="col-md-6 education_right_sona">
  <p><h6>Sona College of Technology, Salem</h6>
                B.E - CSE<br></br>
                2014 – 2017 <br></br>
                7.58 CGPA</p>
  </div>
</div>

<div class="row">
  <div class="col-md-6 text-center education_inner">
      <Image src="TPT-logo.png" alt="TPT-LOGO" width="28%" height="auto"></Image>
  </div>
  <div class="col-md-6 education_right_tpt">
  <p><h6>Thiagarajar Polytechnic College, Salem</h6>
             Diploma – CSE <br></br>
             2011 – 2014 <br></br>
             96.77%</p>
  </div>
</div>
</section><br></br>

<h4>SKILLS</h4>
<section class="Skills_section"><br></br>
<h6 style={{fontSize:"1.15rem"}}>WEB DEVELOPMENT :</h6>
<div class="row">
<div class="col-md-1"></div>
<div class="col-md-5"><p>HTML5</p></div>
<div class="col-md-6">
  <div class="progress">
  <div class="progress-bar progress-bar-striped active" style={{width:"98%"}}>
    98%
  </div>
</div>
</div>
</div>

<div class="row">
<div class="col-md-1"></div>
<div class="col-md-5"><p>CSS3</p></div>
<div class="col-md-6">
  <div class="progress">
  <div class="progress-bar progress-bar-striped active" style={{width:"95%"}}>
    95%
  </div>
</div>
</div>
</div>

<div class="row">
<div class="col-md-1"></div>
<div class="col-md-5"><p>JAVASCRIPT</p></div>
<div class="col-md-6">
  <div class="progress">
  <div class="progress-bar progress-bar-striped active"  style={{width:"90%"}}>
    90%
  </div>
</div>
</div>
</div>

<div class="row">
<div class="col-md-1"></div>
<div class="col-md-5"><p>JQUERY</p></div>
<div class="col-md-6">
  <div class="progress">
  <div class="progress-bar progress-bar-striped active" style={{width:"90%"}}>
    90%
  </div>
</div>
</div>
</div>

<div class="row">
<div class="col-md-1"></div>
<div class="col-md-5"><p>BOOTSTRAP 4</p></div>
<div class="col-md-6">
  <div class="progress">
  <div class="progress-bar progress-bar-striped active" style={{width:"95%"}}>
    95%
  </div>
</div>
</div>
</div>

<div class="row">
<div class="col-md-1"></div>
<div class="col-md-5"><p>LEARNING: REACT JS AND WORDPRESS</p></div>
<div class="col-md-6">
  <div class="progress">
  <div class="progress-bar progress-bar-striped active" style={{width:"90%"}}>
    90%
  </div>
</div>
</div>
</div><br></br>
<h6 style={{fontSize:"1.15rem"}}>DATABASE :</h6>
<div class="row">
<div class="col-md-1"></div>
<div class="col-md-5"><p>MySQL</p></div>
<div class="col-md-6">
  <div class="progress">
  <div class="progress-bar progress-bar-striped active"  style={{width:"92%"}}>
    92%
  </div>
</div>
</div>
</div>
<div class="row">
<div class="col-md-1"></div>
<div class="col-md-5"><p>SQL Server</p></div>
<div class="col-md-6">
  <div class="progress">
  <div class="progress-bar progress-bar-striped active" style={{width:"92%"}}>
    92%
  </div>
</div>
</div>
</div>
<div class="row">
<div class="col-md-1"></div>
<div class="col-md-5"><p>Learning: MongoDB</p></div>
<div class="col-md-6">
  <div class="progress">
  <div class="progress-bar progress-bar-striped active" style={{width:"90%"}}>
    90%
  </div>
</div>
</div>
</div><br></br>
<h6 style={{fontSize:"1.15rem"}}>SAP CLOUD APPLICATION STUDIO(SDK) :</h6>
<div class="row">
<div class="col-md-1"></div>
<div class="col-md-5"><p>BO, XBO, Screens, Process Extension Scenario and Adobe Live Cycle Designer – Forms Development</p></div>
<div class="col-md-6">
  <div class="progress">
  <div class="progress-bar progress-bar-striped active" style={{width:"90%"}}>
    90%
  </div>
</div>
</div>
</div><br></br>
</section><br></br>

</div>

const EXPERIENCE = () => 
<section class="experience_background">
                <div class="container">
                <div class="col-md-12">
                  <br></br><h4>WORK EXPERIENCE</h4>
                </div><br></br>
                 <table class="table">
                      <tbody>
                        <tr>
                          <td>December 2019 to Current</td>
                          <td><b>Web Developer</b><br></br>
                          SearchNScore Solutions Coimbatore,Tamil Nadu</td>                      
                        </tr>
                        <tr>
                          <td>September 2018 to November 2019</td>
                          <td><b>SAP Business ByDesign Consultant and Web Developer</b><br></br>
                          Nipurna IT Solutions Private Limited Salem, Tamil Nadu.</td>                        
                        </tr>
                        <tr>
                          <td>March 2018 to September 2018</td>
                          <td><b>Web Developer</b><br></br>Grosil,Salem, Tamilnadu</td>
                        </tr>
                      </tbody>
                  </table>
                  </div>
                  <div class="container cc_list">
                  <h4>CERTIFICATION COURSES</h4><br></br>
                  <ul class="container">
                    <li>Web Developer Boot Camp (<b>HTML5, Bootstrap4, CSS3, Java Script, Jquery</b>) – Udemy</li>
                    <li>Attended training course in “<b>C</b>” programming Language conducted by Canada India Institutional Co – operational Project.</li>
                    <li>Completed course in “<b>Graphics Designer</b>” in Image Institute at Salem.</li>
                  </ul>
                  </div>
                  <br></br>
                  </section>


const PROJECTS = () => 
<section class="Project_background">
              <div class="container">
                  <br></br><h5>WEB DEVELOPMENT PROJECTS</h5><br></br>
                  
                    <h6><b>Anna Land Developers (HTML5, CSS3, Javascript, Jquery and Boostrap):</b></h6>
                    <div class="container">
                  <ul>
                    <li>The Website provides functionalities to manage various modules as project module, services,contact, team and etc.</li>
                    <li>Covert <b>PSD TO HTML5</b></li>
                  </ul><br></br>
                  </div>
                  <h5>SAP BUSINESS BY DESIGN CUSTOMIZED PROJECTS:</h5><br></br>
                  <p>
                      <b>SAP C4C & ByD Integrations:</b><br></br><br></br>
                      <b>Customization 1:</b> Real time integration of Account Master and associated objects (Attachments and Sales activities, Involved parties) from C4C to ByD. Custom program was written at C4C to consume the SAP ByDstandard account master interface.<br></br>
                      <b>Customization 2:</b> Real time integration of Contact master from ByD to C4C, Custom program was written at C4C to consume the SAP ByD standard Contact master Web service.<br></br>
                      <b>Customization 3:</b>SAP ByD invoice requests are integrated with C4C invoice request. Sales users can trigger the release of invoice request from C4C to ByD via the custom interface.
                  </p>
                  <p>
                    <b>SAPByD – Selection of Identified Stock During Sales Quotation Process:</b><br></br><br></br>
                    <div class="container">
                    <ul>
                    <li><b>SAP ByD Customization -</b> Selection of Identified Stock during Sales Quotation and Sales Order Process and it is extended till outbound delivery.</li>
                    </ul>
                    </div>
                  </p> 
                  <p>
                    <b>Form Development:</b>
                    <div class="container">
                      <ul>
                        <li>Designing the Form for Meeting Report,Production Specification,Performa Invoice,Sales Order,Purchase Order etc.</li>
                      </ul>
                    </div>
                  </p>
                  <p>
                    <b>Freight List- MES Integration Custom Developments:</b>
                    <div class="container">
                      <ul>
                      <li>Custom Interface/ Webservice built to integrate MES system and Freight List of SAP and This Webservice captures all the information of shipping like Product, Pack Quantity, Trailer No. etc.</li>
                      <li>Custom development done to bring the sales order external reference no to Freight List Object. Also, Freight list output form was customized.</li>
                      </ul>
                    </div>
                  </p>
                  </div><br></br>
                  </section>

export default App;
