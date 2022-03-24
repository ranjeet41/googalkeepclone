import React from "react";
import "../Css/Portfolio.css"
import profile from "../Images/profile.png";
import PortFolio1 from "../Images/PortFolio1.PNG";
import Portfolio2 from "../Images/Portfolio2.PNG";
import Portfolio3 from "../Images/Portfolio3.PNG";
import portfolio4 from "../Images/portfolio4.PNG";
import GitHub from "../Images/GitHub.png";
import Linkedlin from "../Images/Linkedlin.png";




const Portfolio = ()=>{
return(<>
    
   <div className="container-fluid PortFolioContainer">
         <div className="section1">
            <div class="centered">
                    <h1 className="Name">RANJEET KUMAR JAYSWAL</h1>
                    <h3 className="Qutes">My personal portfolio page.</h3>
                    <hr></hr>
            </div>
         </div>
       <div className="section2 ">
            <div class="row">
                    <div className="col-xl-6 col-lg-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-sm-12">
                        <div className="About"><h2>About me</h2></div>
                        <br/><br/>
                        <div className="Abouts text-left">
                            <h3>I Did Master Of Computer Appilication (MCA) From Lakshmi Narayan College Of TechNology in (2020).</h3>
                            <h5>I Did BACHLER  Of Computer Science(BSc[cs]) From New Science Govt College Rewa (M.P).</h5>
                            <h2>I love coding and mathematics!</h2>
                            <p><b>Tools & expertise:</b>
                            <li>Programming Languages : React js.(V.16.02)</li>
                            <li>Programming Languages : JavaScript,</li>
                            <li>Web Technologies : HTML, CSS, Material ui , </li>
                            <li>Library & Frameworks : React.js, Bootstrap, Express.js,WordPress</li>
                            <li>DBMS : Json Server apis , Local Storage.</li>
                            <li>IDE / Editors : Sublime Text, Visual Studio Code.</li>
                            <li>Versioning Tool : GIT</li>
                            <li>Build / Bundler Tool : Webpack, Babel</li>
                            <li>Web Services : Restful</li>
                            <li>Web Server : json Server & Nodejs</li>
                            <li>Other : Postman,Jesmin,jest. </li>
                            </p>
                           </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 align-self-center">
                   <img className="Profile"  src={profile} alt ="profile"></img>
                    </div>
                    
                      
            </div>
       </div>
       <div className="section3 ">
            <div class="row">
                    <div className="col-sm-12">
                        <div className="About"><h2>My web development portfolio</h2>
                        <h6>This is some of my work (most recent first):</h6></div>
                        <br/><br/>
                        
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 align-self-center text-center">
                   <a className="A" href="https://ranjeetportfolio.netlify.app/" target="/"><img className="PortFolio1 img-fluid"  src={PortFolio1} alt ="PortFolio"></img>
                     <h5> Google Keep Notes Clone(React Js)</h5>
                   </a>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 align-self-center text-center">
                    <a className="A" href="https://ranjeetportfolio.netlify.app/" target="/"><img className="PortFolio1 img-fluid"  src={Portfolio2} alt ="PortFolio"></img>
                    <h5> Data Storage using Local Storage (React Js)</h5>
                    </a>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 align-self-center text-center">
                    <a className="A" href="http://medwhiz.ml/?i=1" target="/"><img className="PortFolio1 img-fluid"  src={Portfolio3} alt="PortFolio1 "></img>
                    <h5> Clint Website Using wordpress And elementor (Wordpress )</h5>
                    </a>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 align-self-center text-center">
                    <a className="A" href="http://ashwinmohan.ga/" target="/"><img className="PortFolio1 img-fluid"  src={portfolio4} alt="PortFolio1 "></img>
                    <h5> Clint Website Using wordpress And elementor (Wordpress )</h5></a>
                    </div>
                   
            </div>
       </div>
       
       <div className="section4 ">
            <div class="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="About"><h2>Experience</h2></div>
                        <br/><br/>
                        <div className="Abouts text-left">
                            <h2>Company Name : Amci(Medwhiz.in)<b>Currently Working </b></h2>
                            <h3>Working as Front End Developer at Amci(Medwhiz), Bangalore with<b> (0.5) </b>  month  of experience </h3>
                            <h5> Start Date</h5>
                            <li>(15-11-2021)</li>
                            <h5>End Date  </h5>
                            <li>(01/04/2022) Currently i am working   </li>
                            <b>Tools & expertise:</b>
                            <li>Technologies :React js, javascript , Material ui , bootstrap 4.0 ,bootstrap 5.0, PostMan,Html , css , media quiries,styled compomnnent </li>    
                           </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="About"><h2>Project</h2></div>
                        <br/><br/>
                        <div className="Abouts text-left">
                            <h2>Project[LMS]</h2>
                            <h3>Web Application and Mobile Applicaiton both i have done Manual and automation testing  </h3>
                            <h5> Description</h5>                            
                            <p>Medwhiz is Live lectures with expert educators, 
                                mock examinations and quizzes,
                                and structured batch courses based on exam syllabuses ..</p> 
                                <a href="https://lms.medwhiz.in/" target="/">Lms.medwhiz.in</a>   
                           </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">                       
                        <div className="Abouts text-left">
                            <h2>Company Name : AMCI Private Limited Bangalore(amciedtec.com)</h2>
                            <h3>Working as Software Test Engineer at AMCI Private Limited, Bangalore with <b> (0.7) </b> Month of experience </h3>
                            <h5> Start Date</h5>
                            <li>(01-04-2021)</li>
                            <h5>End Date</h5>
                            <li>(12-011-2021)</li>
                            <b>Tools & expertise:</b>
                            <li>Technologies : jira , jest , enzyme , PostMan , </li>    
                           </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="Abouts text-left">
                            <h2>Project[PgPrep]</h2>
                            <h3>Web Application and Mobile Applicaiton both i have done Manual and automation testing  </h3>
                            <h5> Description</h5>                            
                            <p>pgprep  experience for the PG entrance examination,My Preparation provides live test series,
                            The application supplies previous years,study materials,users to access the audiobooks of their study materials,
                            </p> 
                                <a href="https://amciedtech.com/products/mypreparation.html" target="/">My Prepreation</a>   
                           </div>
                    </div>   
            </div>
            <div className="section5 text-left">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 m-0 p-0">
                        <div className="Contact"><h2>Contact me</h2>
                        <h6>Ranjeetkumarjayswal41@gmail.com</h6>
                        <hr style={{width:"20rem",color:"black",fontWeight:"1000",backgroundColor:"white"}}></hr>
                        <a className="btn " href="https://github.com/ranjeet41" target="_blank">
                                <img className="fa fa-github fa-2x" src={GitHub} style={{color:'#24292e',width:"100px"}}/>
                            </a>
                            <a className="btn " href="" target="_blank">
                               <a href="https://www.linkedin.com/in/ranjeet-jaiswal-b6061a184" target="/"> <img className="fa fa-github fa-2x" src={Linkedlin} style={{color:'#24292e',width:"100px"}}/></a>
                            </a>
                        </div>
                        <br/>     
                   </div></div>
       </div>
   </div>
  
    </>)
}
export default Portfolio;