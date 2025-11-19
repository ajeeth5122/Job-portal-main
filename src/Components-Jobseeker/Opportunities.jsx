import React, { useEffect } from 'react'
import './Opportunities.css'
import {OpportunitiesCard} from "./OpportunitiesCard";
import Apple from '../assets/Apple-Logo.png'
import Wipro from '../assets/WIT.png'
import CTS from '../assets/CTSH_BIG.png'
import Amazon from '../assets/AMZN_BIG.png'
import Google from '../assets/GOOG.png'
import Infy from '../assets/INFY_BIG.png'
import Tcs from '../assets/TCS.png'
import META from '../assets/META_BIG.png'
import { data, useNavigate } from "react-router-dom";

// export const jobs = [
//   {
//     id:"1",
//     title: "Data Analyst",
//     company: "Tech Solutions Inc.",
//     type: "3 months duration",
//     salary: "₹ 30,000/month",
//     experience: "0 to 1 year of experience",
//     location: "Coimbatore",
//     tags: ["Internship"],
//     posted: "2 days ago",
//     openings: 5,
//     applicants: 40,
//     logo: "",
//   },
//   {
//     id:"2",
//     title: "Marketing Manager",
//     company: "dell",
//     type: "3 months duration",
//     salary: "₹ 40,000/month",
//     experience: "2 to 3 years of experience",
//     location: "Chennai",
//     tags: ["Full-Time"],
//     posted: "1 week ago",
//     openings: 1,
//     applicants: 80,
//     logo: "",
//   },
//   {
//     id:"3",
//     title: "Senior Software Engineer",
//     company: "Amazon",
//     type: "Permanent",
//     salary: "₹ 60,000/month",
//     experience: "3 to 5 years of experience",
//     location: "Chennai",
//     tags: ["Full-Time"],
//     posted: "2 days ago",
//     openings: 2,
//     applicants: 50,
//     logo: Amazon,
//   },
//   {
//     id:"4",
//     title: "UX/UI Designer",
//     company: "creative minds studio",
//     type: "3 months duration",
//     salary: "Unpaid",
//     experience: "0 to 1 year of experience",
//     location: "Chennai",
//     tags: ["Internship"],
//     posted: "1 week ago",
//     openings: 1,
//     applicants: 80,
//     logo: "",
//   },
//   {
//     id:"5",
//     title: "Software Tester",
//     company: "Infosys",
//     type: "Full-Time",
//     salary: "₹ 35,000/month",
//     experience: "1 to 2 years of experience",
//     location: "Bangalore",
//     tags: ["Full-Time"],
//     posted: "5 days ago",
//     openings: 3,
//     applicants: 65,
//     logo: Infy,
//   },
//   {
//     id:"6",
//     title: "HR Intern",
//     company: "Wipro",
//     type: "3 months duration",
//     salary: "₹ 15,000/month",
//     experience: "0 to 1 year of experience",
//     location: "Hyderabad",
//     tags: ["Internship"],
//     posted: "3 days ago",
//     openings: 4,
//     applicants: 90,
//     logo: Wipro,
//   },
//   {
//     id:"7",
//     title: "Business Analyst",
//     company: "Cognizant",
//     type: "Full-Time",
//     salary: "₹ 45,000/month",
//     experience: "2 to 3 years of experience",
//     location: "Chennai",
//     tags: ["Full-Time"],
//     posted: "1 week ago",
//     openings: 2,
//     applicants: 70,
//     logo: CTS,
//   },
//   {
//     id:"8",
//     title: "Web Developer Intern",
//     company: "Startup Hub",
//     type: "6 months duration",
//     salary: "₹ 20,000/month",
//     experience: "0 to 1 year of experience",
//     location: "Remote",
//     tags: ["Internship"],
//     posted: "4 days ago",
//     openings: 2,
//     applicants: 45,
//     logo: "",
//   },
// ];

const jobdata= 

useEffect(()=>{
fetch("http://localhost:3000/jobs")
.then(Response=>Response.json())
.then(data=>jobdata(data))
.catch(error=>console.error("error:",error))
},[])



export const Opportunities = () => {
  const navigate = useNavigate();
  return (
    <section className='Opportunities-section'>
        <h2 className='Opportunities-title'>Opportunities Just For You</h2>
        <div className="Opportunities-job-list">
        { jobs.map((job, id) => (
          <OpportunitiesCard key={id} job={job} />
        ))}
      </div>
      <button onClick={() => navigate('/Job-portal/jobseeker/jobs')} className="Opportunities-view-more-btn">View More</button>
    </section>
  )
}
