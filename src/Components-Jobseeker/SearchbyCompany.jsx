import React, {  } from 'react'
import Joblist from '../../data/dummydata'
import { Link, useParams } from 'react-router-dom';
import { OpportunitiesCard } from './OpportunitiesCard';
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
import './SearchbyCompany.css'


const SearchbyCompany = () => {
    const {companyName}=useParams()

    const currentCompanyName = companyName;

    const filteredJobs = Joblist.filter(comp => comp.company === currentCompanyName);

    console.log(filteredJobs)

    
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
        <div className='job-search-companies'>
        <section className='Opportunities-section'>
        <h2 className='Opportunities-title'>{currentCompanyName}</h2>
        <div className="Opportunities-job-list">
        { filteredJobs.map((job, id) => (
          <OpportunitiesCard key={id} job={job}/>
        ))}
      </div>
        <button className='Opportunities-view-more-btn'>ViewMore</button>
    </section>
     </div>
    </>
  
  )
    
  
}

export default SearchbyCompany