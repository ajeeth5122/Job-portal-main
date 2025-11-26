import React, { useState } from 'react'
import Joblist from '../../data/dummydata'
import { useParams } from 'react-router-dom';
import { OpportunitiesCard } from './OpportunitiesCard';

const SearchbyCompany = () => {
    const {companyName}=useParams()

    const currentCompanyName = companyName;
    
    const filteredJobs = Joblist.filter(comp => comp.company === currentCompanyName);

    console.log(filteredJobs)

    
  return (
    <>
        <section className='Opportunities-section'>
        <h2 className='Opportunities-title'>{currentCompanyName}</h2>
        <div className="Opportunities-job-list">
        { filteredJobs.map((job, id) => (
          <OpportunitiesCard key={id} job={job}/>
        ))}
      </div>
      <button onClick={() =>navigate('/Job-portal/jobseeker/jobs')} className="Opportunities-view-more-btn">View More</button>
      {/* optional Notification for End of the List (No data Found) */}
      {/* {jobs.length < displayCount ? (<p> No more datas Found</p> ):(<div></div>)} */}
    </section>
    </>
  
  )
    
  
}

export default SearchbyCompany