import React, { useEffect, useState } from 'react'
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

export const jobs = [
  {
    id:"1",
    title: "Data Analyst",
    company: "Tech Solutions Inc.",
    type: "3 months duration",
    salary: "₹ 30,000/month",
    experience: "0 to 1 year of experience",
    location: "Coimbatore",
    tags: ["Internship"],
    posted: "2 days ago",
    openings: 5,
    applicants: 40,
    logo: "",
    Job_Highlights:[
       "Freshers can also apply",
       "Proven work experience as a UI/UX Designer",
       "Good time-management skills"
    ],
     companyOverview:"Finding customers made easy through the vast profile of database that we have through market research.Billions United is a brand that empowers other brand.Founded in 2010, Billions United is a preferred choice for data and marketing solutions We derive intelligence from our data to help brands maximize ROI",
     job_Description :"We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients.You will be responsible for gathering user requirements, designing graphic elements, and building navigation components.If you have experience with design software, wireframe tools, and a strong design portfolio, we would love to meet you Ultimately, you will create both functional and appealing features that address client needs and help grow our customer base.",
     Responsibilities :[
        "Gather and evaluate user requirements in collaboration with product managers and engineers",
        "Illustrate design ideas using storyboards, process flows, and sitemaps",
        "Design graphic user interface elements such as menus, tabs, and widgets.",
        "Build page navigation buttons and search fields",
        "Develop UI mockups and prototypes that clearly illustrate site functionality and appearance.",
        "Create original graphic designs (e.g. images, sketches, and tables).",
        "Prepare and present rough drafts to internal teams and key stakeholders.",
        "Identify and troubleshoot UX problems (e.g. responsiveness issues)",
        "Conduct layout adjustments based on user feedback.",
        "Adhere to style standards on fonts, colors, and images."
    ] ,
    Key_Details:{
        // "Role": "UI/UX Designer",
        "Industry Type":"IT Services",
        "Department": "UX, UI, Design",
        // "Job_Type": "Full-Time - On-site - Permanent",
          "Job_Type": "Internship",
         "Work_type": "On-site",
          "Work_Category": "Permanent",
        "Location": "Chennai",
        Key_Skills:[
            "UX Research",
            "Wireframes",
            "Figma",
            "Photoshop",
            "HTML",
            "CSS"

        ]
    }
  },
  {
    id:"2",
    title: "Marketing Manager",
    company: "dell",
    type: "3 months duration",
    salary: "₹ 40,000/month",
    experience: "2 to 3 years of experience",
    location: "Chennai",
    tags: ["Full-Time"],
    posted: "1 week ago",
    openings: 1,
    applicants: 80,
    logo: "",
   Job_Highlights:[
       "Freshers can also apply",
       "Proven work experience as a UI/UX Designer",
       "Good time-management skills"
    ],
     companyOverview:"Finding customers made easy through the vast profile of database that we have through market research.Billions United is a brand that empowers other brand.Founded in 2010, Billions United is a preferred choice for data and marketing solutions We derive intelligence from our data to help brands maximize ROI",
     job_Description :"We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients.You will be responsible for gathering user requirements, designing graphic elements, and building navigation components.If you have experience with design software, wireframe tools, and a strong design portfolio, we would love to meet you Ultimately, you will create both functional and appealing features that address client needs and help grow our customer base.",
     Responsibilities :[
        "Gather and evaluate user requirements in collaboration with product managers and engineers",
        "Illustrate design ideas using storyboards, process flows, and sitemaps",
        "Design graphic user interface elements such as menus, tabs, and widgets.",
        "Build page navigation buttons and search fields",
        "Develop UI mockups and prototypes that clearly illustrate site functionality and appearance.",
        "Create original graphic designs (e.g. images, sketches, and tables).",
        "Prepare and present rough drafts to internal teams and key stakeholders.",
        "Identify and troubleshoot UX problems (e.g. responsiveness issues)",
        "Conduct layout adjustments based on user feedback.",
        "Adhere to style standards on fonts, colors, and images."
    ] ,
    Key_Details:{
        "Role": "UI/UX Designer",
        "Industry Type":"IT Services",
        "Department": "UX, UI, Design",
        // "Job_Type": "Full-Time - On-site - Permanent",
          "Job_Type": "Fulltime",
         "Work_type": "On-site",
          "Work_Category": "Permanent",
        "Location": "Chennai",
        Key_Skills:[
            "UX Research",
            "Wireframes",
            "Figma",
            "Photoshop",
            "HTML",
            "CSS"

        ]
    }
  },
  {
    id:"3",
    title: "Senior Software Engineer",
    company: "Amazon",
    type: "Permanent",
    salary: "₹ 60,000/month",
    experience: "3 to 5 years of experience",
    location: "Chennai",
    tags: ["Full-Time"],
    posted: "2 days ago",
    openings: 2,
    applicants: 50,
    logo: Amazon,
    Job_Highlights:[
       "Freshers can also apply",
       "Proven work experience as a UI/UX Designer",
       "Good time-management skills"
    ],
     companyOverview:"Finding customers made easy through the vast profile of database that we have through market research.Billions United is a brand that empowers other brand.Founded in 2010, Billions United is a preferred choice for data and marketing solutions We derive intelligence from our data to help brands maximize ROI",
     job_Description :"We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients.You will be responsible for gathering user requirements, designing graphic elements, and building navigation components.If you have experience with design software, wireframe tools, and a strong design portfolio, we would love to meet you Ultimately, you will create both functional and appealing features that address client needs and help grow our customer base.",
     Responsibilities :[
        "Gather and evaluate user requirements in collaboration with product managers and engineers",
        "Illustrate design ideas using storyboards, process flows, and sitemaps",
        "Design graphic user interface elements such as menus, tabs, and widgets.",
        "Build page navigation buttons and search fields",
        "Develop UI mockups and prototypes that clearly illustrate site functionality and appearance.",
        "Create original graphic designs (e.g. images, sketches, and tables).",
        "Prepare and present rough drafts to internal teams and key stakeholders.",
        "Identify and troubleshoot UX problems (e.g. responsiveness issues)",
        "Conduct layout adjustments based on user feedback.",
        "Adhere to style standards on fonts, colors, and images."
    ] ,
    Key_Details:{
        "Role": "UI/UX Designer",
        "Industry Type":"IT Services",
        "Department": "UX, UI, Design",
        // "Job_Type": "Full-Time - On-site - Permanent",
          "Job_Type": "Full-Time",
         "Work_type": "On-site",
          "Work_Category": "Permanent",
        "Location": "Chennai",
        Key_Skills:[
            "UX Research",
            "Wireframes",
            "Figma",
            "Photoshop",
            "HTML",
            "CSS"

        ]
    }
  },
  {
    id:"4",
    title: "UX-UI Designer",
    company: "creative minds studio",
    type: "3 months duration",
    salary: "Unpaid",
    experience: "0 to 1 year of experience",
    location: "Chennai",
    tags: ["Internship"],
    posted: "1 week ago",
    openings: 1,
    applicants: 80,
    logo: "",
    Job_Highlights:[
       "Freshers can also apply",
       "Proven work experience as a UI/UX Designer",
       "Good time-management skills"
    ],
     companyOverview:"Finding customers made easy through the vast profile of database that we have through market research.Billions United is a brand that empowers other brand.Founded in 2010, Billions United is a preferred choice for data and marketing solutions We derive intelligence from our data to help brands maximize ROI",
     job_Description :"We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients.You will be responsible for gathering user requirements, designing graphic elements, and building navigation components.If you have experience with design software, wireframe tools, and a strong design portfolio, we would love to meet you Ultimately, you will create both functional and appealing features that address client needs and help grow our customer base.",
     Responsibilities :[
        "Gather and evaluate user requirements in collaboration with product managers and engineers",
        "Illustrate design ideas using storyboards, process flows, and sitemaps",
        "Design graphic user interface elements such as menus, tabs, and widgets.",
        "Build page navigation buttons and search fields",
        "Develop UI mockups and prototypes that clearly illustrate site functionality and appearance.",
        "Create original graphic designs (e.g. images, sketches, and tables).",
        "Prepare and present rough drafts to internal teams and key stakeholders.",
        "Identify and troubleshoot UX problems (e.g. responsiveness issues)",
        "Conduct layout adjustments based on user feedback.",
        "Adhere to style standards on fonts, colors, and images."
    ] ,
    Key_Details:{
        "Industry Type":"IT Services",
        "Department": "UX, UI, Design",
        "Job_Type": "Internship",
         "Work_type": "On-site",
          "Work_Category": "Permanent",
        "Location": "Chennai",
        Key_Skills:[
            "UX Research",
            "Wireframes",
            "Figma",
            "Photoshop",
            "HTML",
            "CSS"

        ]
    }
  },
  {
    id:"5",
    title: "Software Tester",
    company: "Infosys",
    type: "Full-Time",
    salary: "₹ 35,000/month",
    experience: "1 to 2 years of experience",
    location: "Bangalore",
    tags: ["Full-Time"],
    posted: "5 days ago",
    openings: 3,
    applicants: 65,
    logo: Infy,
    Job_Highlights:[
       "Freshers can also apply",
       "Proven work experience as a UI/UX Designer",
       "Good time-management skills"
    ],
     companyOverview:"Finding customers made easy through the vast profile of database that we have through market research.Billions United is a brand that empowers other brand.Founded in 2010, Billions United is a preferred choice for data and marketing solutions We derive intelligence from our data to help brands maximize ROI",
     job_Description :"We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients.You will be responsible for gathering user requirements, designing graphic elements, and building navigation components.If you have experience with design software, wireframe tools, and a strong design portfolio, we would love to meet you Ultimately, you will create both functional and appealing features that address client needs and help grow our customer base.",
     Responsibilities :[
        "Gather and evaluate user requirements in collaboration with product managers and engineers",
        "Illustrate design ideas using storyboards, process flows, and sitemaps",
        "Design graphic user interface elements such as menus, tabs, and widgets.",
        "Build page navigation buttons and search fields",
        "Develop UI mockups and prototypes that clearly illustrate site functionality and appearance.",
        "Create original graphic designs (e.g. images, sketches, and tables).",
        "Prepare and present rough drafts to internal teams and key stakeholders.",
        "Identify and troubleshoot UX problems (e.g. responsiveness issues)",
        "Conduct layout adjustments based on user feedback.",
        "Adhere to style standards on fonts, colors, and images."
    ] ,
    Key_Details:{
        "Role": "UI UX Designer",
        "Industry Type":"IT Services",
        "Department": "UX, UI, Design",
        // "Job_Type": "Full-Time - On-site - Permanent",
        "Job_Type": "Full-Time",
         "Work_type": "On-site",
          "Work_Category": "Permanent",
        "Location": "Chennai",
        Key_Skills:[
            "UX Research",
            "Wireframes",
            "Figma",
            "Photoshop",
            "HTML",
            "CSS"

        ]
    }
  },
  {
    id:"6",
    title: "HR Intern",
    company: "Wipro",
    type: "3 months duration",
    salary: "₹ 15,000/month",
    experience: "0 to 1 year of experience",
    location: "Hyderabad",
    tags: ["Internship"],
    posted: "3 days ago",
    openings: 4,
    applicants: 90,
    logo: Wipro,
    Job_Highlights:[
       "* Freshers can also apply",
       "* Proven work experience as a UI/UX Designer",
       "* Good time-management skills"
    ],
     companyOverview:"Finding customers made easy through the vast profile of database that we have through market research.Billions United is a brand that empowers other brand.Founded in 2010, Billions United is a preferred choice for data and marketing solutions We derive intelligence from our data to help brands maximize ROI",
     job_Description :"We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients.You will be responsible for gathering user requirements, designing graphic elements, and building navigation components.If you have experience with design software, wireframe tools, and a strong design portfolio, we would love to meet you Ultimately, you will create both functional and appealing features that address client needs and help grow our customer base.",
     Responsibilities :[
        "Gather and evaluate user requirements in collaboration with product managers and engineers",
       "Illustrate design ideas using storyboards, process flows, and sitemaps",
        "Design graphic user interface elements such as menus, tabs, and widgets.",
        "Build page navigation buttons and search fields",
       "Develop UI mockups and prototypes that clearly illustrate site functionality and appearance.",
        "Create original graphic designs (e.g. images, sketches, and tables).",
        "Prepare and present rough drafts to internal teams and key stakeholders.",
        "Identify and troubleshoot UX problems (e.g. responsiveness issues)",
       "Conduct layout adjustments based on user feedback.",
        "Adhere to style standards on fonts, colors, and images."
     ],
    Key_Details:{
        "Role": "UI/UX Designer",
        "Industry Type":"IT Services",
        "Department": "UX, UI, Design",
        // "Job_Type": "Full-Time - On-site - Permanent",
        "Job_Type": "Internship",
         "Work_type": "On-site",
          "Work_Category": "Permanent",
        "Location": "Chennai",
        Key_Skills:[
            "UX Research",
            "Wireframes",
            "Figma",
            "Photoshop",
            "HTML",
            "CSS"

        ]
    }
  },
  {
    id:"7",
    title: "Business Analyst",
    company: "Cognizant",
    type: "Full-Time",
    salary: "₹ 45,000/month",
    experience: "2 to 3 years of experience",
    location: "Chennai",
    tags: ["Full-Time"],
    posted: "1 week ago",
    openings: 2,
    applicants: 70,
    logo: CTS,
    Job_Highlights:[
       "Freshers can also apply",
       "Proven work experience as a UI/UX Designer",
       "Good time-management skills"
    ],
     companyOverview:"Finding customers made easy through the vast profile of database that we have through market research.Billions United is a brand that empowers other brand.Founded in 2010, Billions United is a preferred choice for data and marketing solutions We derive intelligence from our data to help brands maximize ROI",
     job_Description :"We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients.You will be responsible for gathering user requirements, designing graphic elements, and building navigation components.If you have experience with design software, wireframe tools, and a strong design portfolio, we would love to meet you Ultimately, you will create both functional and appealing features that address client needs and help grow our customer base.",
     Responsibilities :[
        "Gather and evaluate user requirements in collaboration with product managers and engineers",
        "Illustrate design ideas using storyboards, process flows, and sitemaps",
        "Design graphic user interface elements such as menus, tabs, and widgets.",
        "Build page navigation buttons and search fields",
        "Develop UI mockups and prototypes that clearly illustrate site functionality and appearance.",
        "Create original graphic designs (e.g. images, sketches, and tables).",
        "Prepare and present rough drafts to internal teams and key stakeholders.",
        "Identify and troubleshoot UX problems (e.g. responsiveness issues)",
        "Conduct layout adjustments based on user feedback.",
        "Adhere to style standards on fonts, colors, and images."
    ] ,
    Key_Details:{
        "Role": "UI/UX Designer",
        "Industry Type":"IT Services",
        "Department": "UX, UI, Design",
        // "Job_Type": "Full-Time - On-site - Permanent",
        "Job_Type": "Full-Time",
         "Work_type": "On-site",
          "Work_Category": "Permanent",
        "Location": "Chennai",
        Key_Skills:[
            "UX Research",
            "Wireframes",
            "Figma",
            "Photoshop",
            "HTML",
            "CSS"

        ]
    }
  },
  {
    id:"8",
    title: "Web Developer Intern",
    company: "Startup Hub",
    type: "6 months duration",
    salary: "₹ 20,000/month",
    experience: "0 to 1 year of experience",
    location: "Remote",
    tags: ["Internship"],
    posted: "4 days ago",
    openings: 2,
    applicants: 45,
    logo: "",
    Job_Highlights:[
       "Freshers can also apply",
       "Proven work experience as a UI/UX Designer",
       "Good time-management skills"
    ],
     companyOverview:"Finding customers made easy through the vast profile of database that we have through market research.Billions United is a brand that empowers other brand.Founded in 2010, Billions United is a preferred choice for data and marketing solutions We derive intelligence from our data to help brands maximize ROI",
     job_Description :"We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients.You will be responsible for gathering user requirements, designing graphic elements, and building navigation components.If you have experience with design software, wireframe tools, and a strong design portfolio, we would love to meet you Ultimately, you will create both functional and appealing features that address client needs and help grow our customer base.",
     Responsibilities :[
        "Gather and evaluate user requirements in collaboration with product managers and engineers",
        "Illustrate design ideas using storyboards, process flows, and sitemaps",
        "Design graphic user interface elements such as menus, tabs, and widgets.",
        "Build page navigation buttons and search fields",
        "Develop UI mockups and prototypes that clearly illustrate site functionality and appearance.",
        "Create original graphic designs (e.g. images, sketches, and tables).",
        "Prepare and present rough drafts to internal teams and key stakeholders.",
        "Identify and troubleshoot UX problems (e.g. responsiveness issues)",
        "Conduct layout adjustments based on user feedback.",
        "Adhere to style standards on fonts, colors, and images."
    ] ,
    Key_Details:{
        "Role": "UI/UX Designer",
        "Industry Type":"IT Services",
        "Department": "UX, UI, Design",
        // "Job_Type": "Full-Time - On-site - Permanent",
        "Job_Type": "Internship",
         "Work_type": "On-site",
          "Work_Category": "Permanent",
        "Location": "Chennai",
        Key_Skills:[
            "UX Research",
            "Wireframes",
            "Figma",
            "Photoshop",
            "HTML",
            "CSS"

        ]
    }
  }
];

export const Opportunities = () => {
  const navigate = useNavigate();

  return (
    <section className='Opportunities-section'>
        <h2 className='Opportunities-title'>Opportunities Just For You</h2>
        <div className="Opportunities-job-list">
        { jobs.map((job, id) => (
          <OpportunitiesCard key={id} job={job}/>
        ))}
      </div>
      <button onClick={() => navigate('/Job-portal/jobseeker/jobs')} className="Opportunities-view-more-btn">View More</button>
    </section>
  )
}
