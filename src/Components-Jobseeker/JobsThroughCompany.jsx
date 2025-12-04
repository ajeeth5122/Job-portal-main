import React, { useState } from 'react'
import Joblist from '../../data/dummydata'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { OpportunitiesCard } from './OpportunitiesCard';
import breifcase from '../assets/header_case.png'
import chat from '../assets/header_message.png'
import bell from '../assets/header_bell.png'
import profile from '../assets/header_profile.png'
import TCS from '../assets/TCS.png'
import Apple from '../assets/Apple-Logo.png'
import Wipro from '../assets/WIT.png'
import starIcon from '../assets/Star_icon.png'
import CTS from '../assets/CTSH_BIG.png'
import Amazon from '../assets/AMZN_BIG.png'
import Infy from '../assets/INFY_BIG.png'
import META from '../assets/META_BIG.png'
import Google from '../assets/GOOG.png'

import './JobThroughCompany.css'
import { JHeader } from './JHeader';


const JobsThroughCompany = () => {

    const {companyId} =useParams()

    const currentCompanyId = companyId;

    const filteredJobs = Joblist.filter(comp => comp.companyId === currentCompanyId);

    console.log(filteredJobs)
    
    const findbyCompaniesNameList = [
      {companyId: "AIN001",
        name : "Apple IN",
        logo: Apple,
        rating: 4.3,
        reviews: "110k+",
        desc: "Step into the Real One",
      },
    {
        companyId: "WIB001",
        name: "Wipro",
        logo: Wipro,
        rating: 4.3,
        reviews: "55k+",
        desc: "Grow with us. Be bold.",
    },
    {
        companyId: "CTS001",
        name: "Cognizant",
        logo: CTS,
        rating: 3.7,
        reviews: "55k+",
        desc: "Leading ITeS company with global presence",
    },
    {
        companyId: "AMZ001",
        name: "Amazon",
        logo: Amazon,
        rating: 4.0,
        reviews: "27.5k+",
        desc: "World’s largest Internet company",
    },
    {
        companyId: "IST001",
        name: "Infosys",
        logo: Infy,
        rating: 4.1,
        reviews: "50k+",
        desc: "Navigate your next",
    },
    {
        companyId: "TCS001",
        name: "TCS",
        logo: TCS,
        rating: 4.2,
        reviews: "65k+",
        desc: "Building on belief",
    },
    {
        companyId: "MET001",
        name: "Meta",
        logo: META,
        rating: 4.4,
        reviews: "22k+",
        desc: "Bring the world closer together",
    },
     {
        companyId: "GGL001",
        name: "Google",
        logo: Google,
        rating: 4.4,
        reviews: "22k+",
        desc: "Bring the world closer together",
    }
];
     const CompanyTitle = findbyCompaniesNameList.find(comp => comp.companyId === currentCompanyId);
    const navigate =useNavigate();
    const displayCount = 10;

    const [currentPage, setCurrentPage]=useState(1);
        const indexofLastjob= currentPage * displayCount; 
        const indexoffirstjob = indexofLastjob - displayCount;
    
         const currentPost = findbyCompaniesNameList.slice(indexoffirstjob,indexofLastjob);
    
        const totalpages = Math.ceil(findbyCompaniesNameList.length/displayCount);
    
          const HandlePrev=()=>{
            setCurrentPage(currentPage-1)
        }
        const HandleNext=()=>{
            setCurrentPage(currentPage+1)   
        }
    
    
  return (

    <>
    
         {/* <header className="header">
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
            </header> */}
            <JHeader/>
        <div className='job-search-companies'>
        <section className='Opportunities-section'>
          <div className="company-header-container">
 
      <div className="company-details-section">
        <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
        <div className='company-main-section'>
          <div className='company-logo-container'>
          <img className='company-logo' src={CompanyTitle.logo} alt="logo"  />
          </div>
          
        <div className="company-info-card">
          
          <h2 className="company-name">{CompanyTitle.name}</h2>
          <div className="company-title-container">
            
           <span className="star"><img src={starIcon} /> {CompanyTitle.rating} ratings</span>  <span className="company-divider">|</span><span className="opp-reviews">{CompanyTitle.reviews}reviews</span>
          </div>
          
          
        </div>
        <div className='job-by-company-moto'>
            <p className="company-moto">{CompanyTitle.desc}</p>
          </div>
          </div>
      </div>
    </div>
      <div className="Opportunities-job-list">

         
        { filteredJobs.map((job, id) => (
          <OpportunitiesCard key={id} job={job}/>
        ))}
      </div>
        {/* <button className='Opportunities-view-more-btn'>ViewMore</button> */}
         <div className="Navigation-job-Tab" >
                <button onClick={()=>HandlePrev()} disabled={currentPage === 1} className='Navigation-btn'>Previous</button>
                <div className="page-numbers">
                {[...Array(totalpages)].map((_, i) => (
            <button
              key={i}
              className={ `page-btn ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(i + 1)}>
             {i + 1}
            </button>
          ))}
        </div>
            <button onClick={()=>HandleNext()}  disabled={currentPage === totalpages} className='Navigation-btn'>Next</button>
        </div>
    </section>
     </div>
    </>
  
  )
    
  
}

export default JobsThroughCompany