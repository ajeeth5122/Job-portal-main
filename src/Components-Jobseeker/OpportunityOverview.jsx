import React from 'react'
import { JHeader } from './JHeader';
import { Footer } from '../Components-LandingPage/Footer';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './OpportunityOverview.css'
import breifcase from '../assets/header_case.png'
import chat from '../assets/header_message.png'
import bell from '../assets/header_bell.png'
import profile from '../assets/header_profile.png'
import search from '../assets/icon_search.png'
import location from '../assets/icon_location.png'
import tick from '../assets/icon_tick.png'
import starIcon from '../assets/Star_icon.png'
import time from '../assets/opportunity_time.png'
import experience from '../assets/opportunity_bag.png'
import place from '../assets/opportunity_location.png'
import twitter from '../assets/socials-x.png'
import linkedin from '../assets/socials-linkedin.png'
import facebook from '../assets/socials-facebook.png'
import { jobs } from './Opportunities';

export const OpportunityOverview = () => {
  const navigate = useNavigate();

  const { id } = useParams()
  const job = jobs[id - 1]
  console.log(jobs)

  
  return (
    <>
      <header className="header">
              <div className="logo">job portal</div>
              <nav className="nav-links">
                <Link to="/Job-portal/jobseeker/" className="nav-item" >Home</Link>
                <Link to="/Job-portal/jobseeker/jobs" className="nav-item" >Jobs</Link>
                <Link to="/Job-portal/jobseeker/companies" className="nav-item" >Companies</Link>   
              </nav>
      
              <div className="auth-links">
                <Link to="/Job-portal/jobseeker/myjobs"><img className='header-icons' src={breifcase} alt='My Jobs' /></Link>
                <div><img className='header-icons' src={chat} alt='Messages' /></div>
                <div><img className='header-icons' src={bell} alt='Notifications' /></div>
                <div><img className='header-icons' src={profile} alt='My Profile' /></div>
              </div>
            </header>
      
            <div className='opp-overview-content'>
              <div className='search-backbtn-container'>
                <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      
                <div className="search-bar">
                  <div className="search-field">
                    <span><img src={search} className="icon-size" alt="search_icon" /></span>
                    <input type="text" placeholder="Search by Skills, company or job title" />
                  </div>
                  <div className="separator"></div>
      
                  <div className="search-field">
                    <span><img src={location} className="icon-size" alt="location_icon" /></span>
                    <input type="text" placeholder="Enter Location" />
                  </div>
                  <div className="separator"></div>
      
                  <div className="search-field">
                    <span><img src={tick} className="icon-size" alt="search_tick" /></span>
                    <select defaultValue="" required>
                      <option value="" disabled hidden>Enter Experience</option>
                      <option value="fresher">Fresher</option>
                      <option value="1-3">1-3 Years</option>
                      <option value="3-5">3-5 Years</option>
                      <option value="5+">5+ Years</option>
                    </select>
                  </div>
      
                  <button className="search-button">Search</button>
                </div>
              </div>
      
              <div key={job.id} className='opp-overview-main'>
                <div className="opp-job-main">
                  {/* Job Header  */}
                  <div className="opp-overview-job-card">
                    <div className="Opportunities-job-header">
                      <div>
                        <h2 className="opp-topcard-job-title">{job.title}</h2>
                        <h5 className="Opportunities-job-company">{job.company}<span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.4 <span className="Opportunities-divider">|</span><span className="opp-reviews"> 522 Reviews</span></h5>
                      </div>
                      <div className="Opportunities-job-logo-placeholder">{job.company.charAt(0).toUpperCase()}</div>
                    </div>
      
                    <div className="Opportunities-job-details">
                      <p className='Opportunities-detail-line'><img src={time} className='card-icons' />{job.type}<span className="Opportunities-divider">|</span>₹ 20,000 - 25,000/month</p>
                      <p className='Opportunities-detail-line'><img src={experience} className='card-icons' />{job.experience}</p>
                      <p className='Opportunities-detail-line'><img src={place} className='card-icons' />{job.location}</p>
                    </div>
      
                    <div className='Opportunities-details-bottom'>
                      <div className="Opportunities-job-tags">
                        {job.tags.map((tag, id) => (
                        <span key={id} className={`Opportunities-job-tag ${tag.toLowerCase()}`}>
                          {job.tags}
                        </span>
                        ))}
                      </div>
                      <a href="#" className="suggest-link">
                        Suggest more roles like this
                      </a>
                    </div>
      
                    <hr className="Opportunities-separator" />
      
                    <div className="Opportunities-job-footer">
                      <div className="Opportunities-job-meta">
                        <p>Posted: {job.posted} <span className="Opportunities-divider">|</span> Openings: {job.openings} <span className="Opportunities-divider">|</span> Applicants: {job.applicants}</p>
                      </div>
      
                      <div className="Opportunities-job-actions">
                        <button className="Opportunities-save-btn">Save</button>
                        <button className="Opportunities-apply-btn">Apply</button>
                      </div>
                    </div>
                  </div>
      
                  {/* Job Description */}
                  <div className="opp-job-details-card">
                    {/* Job Highlights */}
                    <div className="opp-job-highlights">
                      <h3>Job Highlights</h3>
                      <ul>
                      
                        {job.Job_Highlights.map((high,index)=>
                        <li key={index}>{high}</li>)}
                        </ul>
                        {/* <li>Proven work experience as a UI/UX Designer.</li>
                        <li>Good time-management skills.</li> */}
                      
                    </div>
      
                    <h3>Company Overview</h3>
                    <p>
                      {job.companyOverview}
                    </p>
      
                    <h3>Job Description</h3>
                    <p>
                      {job.job_Description}
                    </p>
      
                    <h3>Responsibilities</h3>
                    
                    <ul  >
                      {job.Responsibilities.map((resp,index)=> 
                      <li key={index}>{resp}</li>)}
                      {/* <li>Illustrate design ideas using storyboards, process flows, and sitemaps.</li>
                      <li>Design graphic user interface elements such as menus, tabs, and widgets.</li>
                      <li>Build page navigation buttons and search fields.</li>
                      <li>Develop UI mockups and prototypes that clearly illustrate site functionality and appearance.</li>
                      <li>Create original graphic designs (e.g. images, sketches, and tables).</li>
                      <li>Prepare and present rough drafts to internal teams and key stakeholders.</li>
                      <li>Identify and troubleshoot UX problems (e.g. responsiveness issues).</li>
                      <li>Conduct layout adjustments based on user feedback.</li>
                      <li>Adhere to style standards on fonts, colors, and images.</li> */}
                    </ul>
                    
                    <h3>Key Details</h3>
                    <p><strong>Role:</strong> {job.title}</p>
                    <p><strong>Industry Type:</strong>{job.Key_Details['Industry Type']}</p>
                    <p><strong>Department:</strong> {job.Key_Details.Department}</p>
                    <p><strong>Job Type:</strong> {job.Key_Details.Job_Type} | {job.Key_Details.Work_type} | {job.Key_Details.Work_Category}</p>
                    <p><strong>Location:</strong> {job.Key_Details.Location}</p>
      
                    <h3>Key Skills</h3>
                    <div className="opp-key-skills-container">
                      {job.Key_Details.Key_Skills.map((skill,index)=>
                      <span key={index}> {skill}</span>)}
                      {/* <span>Wireframes</span>
                      <span>Figma</span>
                      <span>Photoshop</span>
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>Illustrator</span>
                      <span>wireframe</span>
                      <span>prototype</span>
                      <span>problem solving</span>
                      <span>interactions</span>
                      <span>xd</span> */}
                    </div>
      
                    <hr className="Opportunities-separator" />
      
                    <div className="opp-share-job">
                      <div>
                        <p>Share This job</p>
                        <div className='opp-socials'>
                          <div><img src={linkedin} className='opp-socials-icon' alt="linkedin" /></div>
                          <div><img src={facebook} className='opp-socials-icon' alt="facebook" /></div>
                          <div><img src={twitter} className='opp-socials-icon' alt="twitter" /></div>
                        </div>
                      </div>
                      <button className="opp-report-btn">Report this job</button>
                    </div>
                  </div>
                </div>
                {/* Similar Jobs */}
                <div className="opp-job-sidebar">
                  <h3>Similar Jobs</h3>
                  <div className="opp-similar-job">
                    <div className="Opportunities-job-header">
                      <div>
                        <h2 className="similar-job-title">UI/UX Designer</h2>
                        <p className="similar-job-company">Creative Minds Studio <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.4 <span className="Opportunities-divider">|</span><span> 522 Reviews</span></p>
                      </div>
                      <div className="similar-job-logo-placeholder">C</div>
                    </div>
                    <div className="Opportunities-job-details">
                      <p className='Opportunities-detail-line'>Full-time . Hybrid, Permanent</p>
                      <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Chennai</p>
                    </div>
                    <div className="similar-job-footer">
                      <a href="#" className="suggest-link">
                        View details
                      </a>
                      <p className='similar-job-footer-posted'>
                        Posted 2 days ago
                      </p>
                    </div>
                  </div>
      
                  <div className="opp-similar-job">
                    <div className="Opportunities-job-header">
                      <div>
                        <h2 className="similar-job-title">UI Designer</h2>
                        <p className="similar-job-company">Tech Solutions Inc. <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.2 <span className="Opportunities-divider">|</span><span> 1k Reviews</span></p>
                      </div>
                      <div className="similar-job-logo-placeholder">T</div>
                    </div>
                    <div className="Opportunities-job-details">
                      <p className='Opportunities-detail-line'>Full-time . On-Site, Permanent</p>
                      <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Chennai</p>
                    </div>
                    <div className="similar-job-footer">
                      <a href="#" className="suggest-link">
                        View details
                      </a>
                      <p className='similar-job-footer-posted'>
                        Posted 2 days ago
                      </p>
                    </div>
                  </div>
      
                  <div className="opp-similar-job">
                    <div className="Opportunities-job-header">
                      <div>
                        <h2 className="similar-job-title">UI/UX Designer</h2>
                        <p className="similar-job-company">Creative Minds Studio <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.4 <span className="Opportunities-divider">|</span><span> 522 Reviews</span></p>
                      </div>
                      <div className="similar-job-logo-placeholder">C</div>
                    </div>
                    <div className="Opportunities-job-details">
                      <p className='Opportunities-detail-line'>Full-time . Hybrid, Permanent</p>
                      <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Chennai</p>
                    </div>
                    <div className="similar-job-footer">
                      <a href="#" className="suggest-link">
                        View details
                      </a>
                      <p className='similar-job-footer-posted'>
                        Posted 2 days ago
                      </p>
                    </div>
                  </div>
      
                  <div className="opp-similar-job">
                    <div className="Opportunities-job-header">
                      <div>
                        <h2 className="similar-job-title">UI/UX Designer</h2>
                        <p className="similar-job-company">Creative Minds Studio <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.4 <span className="Opportunities-divider">|</span><span> 522 Reviews</span></p>
                      </div>
                      <div className="similar-job-logo-placeholder">C</div>
                    </div>
                    <div className="Opportunities-job-details">
                      <p className='Opportunities-detail-line'>Full-time . Hybrid, Permanent</p>
                      <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Chennai</p>
                    </div>
                    <div className="similar-job-footer">
                      <a href="#" className="suggest-link">
                        View details
                      </a>
                      <p className='similar-job-footer-posted'>
                        Posted 2 days ago
                      </p>
                    </div>
                  </div>
      
                  <div className="opp-similar-job">
                    <div className="Opportunities-job-header">
                      <div>
                        <h2 className="similar-job-title">UI/UX Designer</h2>
                        <p className="similar-job-company">Creative Minds Studio <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.4 <span className="Opportunities-divider">|</span><span> 522 Reviews</span></p>
                      </div>
                      <div className="similar-job-logo-placeholder">C</div>
                    </div>
                    <div className="Opportunities-job-details">
                      <p className='Opportunities-detail-line'>Full-time . Hybrid, Permanent</p>
                      <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Chennai</p>
                    </div>
                    <div className="similar-job-footer">
                      <a href="#" className="suggest-link">
                        View details
                      </a>
                      <p className='similar-job-footer-posted'>
                        Posted 2 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>

  )
}
