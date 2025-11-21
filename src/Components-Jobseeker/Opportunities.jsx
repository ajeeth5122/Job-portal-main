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
    id: "1",
    title: "Data Analyst",
    company: "Tech Solutions Inc.",
    duration: "3 months duration",
    salary: "₹ 30,000/month",
    experience: "0 to 1 year of experience",
    location: "Coimbatore",
    tags: ["Internship"],
    posted: "2 days ago",
    openings: 5,
    applicants: 40,
    logo: "",
    Job_Highlights: [
      "Freshers can also apply",
      "Proven work experience as a UI/UX Designer",
      "Good time-management skills"
    ],
    companyOverview: "Finding customers made easy through the vast profile of database that we have through market research.Billions United is a brand that empowers other brand.Founded in 2010, Billions United is a preferred choice for data and marketing solutions We derive intelligence from our data to help brands maximize ROI",
    job_Description: "We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients.You will be responsible for gathering user requirements, designing graphic elements, and building navigation components.If you have experience with design software, wireframe tools, and a strong design portfolio, we would love to meet you Ultimately, you will create both functional and appealing features that address client needs and help grow our customer base.",
    Responsibilities: [
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
    Key_Details: {
      "Industry_Type": "IT Services",
      "Department": "UX, UI, Design",
      "Job_Type": "Internship",
      "Work_type": "On-site",
      "location": "Chennai",
      Key_Skills: ["UX Research", "Wireframes", "Figma", "Photoshop", "HTML", "CSS"]
    }
  },
  {
    id: "2",
    title: "Software Development Engineer (SDE) I",
    company: "Innovate Software Corp.",
    duration: "Permanent",
    salary: "₹ 8,00,000 - 12,00,000/year",
    experience: "1 to 3 years of experience",
    location: "Bangalore",
    tags: ["Full-Time"],
    posted: "5 days ago",
    openings: 10,
    applicants: 150,
    logo: "",
    Job_Highlights: [
      "Opportunity for career growth",
      "Competitive salary package",
      "Experience with cloud technologies preferred"
    ],
    companyOverview: "Innovate Software Corp. is a fast-growing tech firm specializing in cloud-based enterprise solutions. We are committed to building scalable, high-performance software that transforms how businesses operate. Join our team of passionate engineers!",
    job_Description: "We are seeking a motivated SDE I to join our core product development team. You will be involved in the full development lifecycle, from design and coding to deployment and maintenance. The ideal candidate has a strong foundation in data structures, algorithms, and object-oriented programming.",
    Responsibilities: [
      "Design, develop, and test high-quality software modules using Java/Python.",
      "Collaborate with senior engineers and product managers to define specifications and features.",
      "Participate in code reviews to maintain code quality and share knowledge.",
      "Write and maintain comprehensive unit and integration tests.",
      "Assist in troubleshooting and resolving production issues quickly.",
      "Optimize application for maximum speed and scalability."
    ],
    Key_Details: {
      "Industry_Type": "Software Product",
      "Department": "Engineering, IT",
      "Job_Type": "Full-Time",
      "Work_type": "Hybrid",
      "location": "Bangalore",
      Key_Skills: ["Java", "Python", "REST APIs", "SQL", "Git", "AWS"]
    }
  },
  {
    id: "3",
    title: "Digital Marketing Intern",
    company: "Global Connect Media",
    duration: "6 months duration",
    salary: "₹ 15,000/month stipend",
    experience: "Freshers Only",
    location: "Remote",
    tags: ["Internship", "Remote"],
    posted: "1 day ago",
    openings: 3,
    applicants: 85,
    logo: "",
    Job_Highlights: [
      "Work from anywhere",
      "Mentorship from industry experts",
      "Stipend provided"
    ],
    companyOverview: "Global Connect Media is a digital agency helping small to medium-sized businesses establish a strong online presence. We focus on data-driven strategies across SEO, SEM, and social media marketing.",
    job_Description: "We're looking for an enthusiastic Digital Marketing Intern to support our marketing campaigns. This role is perfect for someone looking to gain hands-on experience in content creation, SEO optimization, and social media management in a dynamic, remote environment.",
    Responsibilities: [
      "Assist in developing and scheduling content for social media platforms.",
      "Conduct keyword research and assist with SEO content optimization.",
      "Monitor and report on the performance of social media and email campaigns.",
      "Contribute ideas for new marketing strategies and campaigns.",
      "Assist in managing the company's content calendar.",
      "Perform competitive analysis to identify market trends."
    ],
    Key_Details: {
      "Industry_Type": "Marketing & Advertising",
      "Department": "Marketing, Communications",
      "Job_Type": "Internship",
      "Work_type": "Remote",
      "location": "Anywhere (Remote)",
      Key_Skills: ["SEO Basics", "Social Media Management", "Content Writing", "Google Analytics", "Canva"]
    }
  },
  {
    id: "4",
    title: "Senior Financial Analyst",
    company: "Apex Consulting Group",
    duration: "Permanent",
    salary: "₹ 15,00,000 - 20,00,000/year",
    experience: "4 to 7 years of experience",
    location: "Mumbai",
    tags: ["Full-Time"],
    posted: "10 days ago",
    openings: 2,
    applicants: 25,
    logo: "",
    Job_Highlights: [
      "Leadership opportunity in financial planning",
      "Generous performance bonus",
      "Mandatory experience in investment banking or consulting"
    ],
    companyOverview: "Apex Consulting Group provides strategic financial and operational consulting to Fortune 500 companies. Our mission is to drive profitability and operational efficiency for our high-profile clients.",
    job_Description: "The Senior Financial Analyst will be responsible for budgeting, forecasting, and financial modeling to support executive decision-making. This role requires advanced analytical skills and the ability to present complex financial data clearly to non-finance stakeholders.",
    Responsibilities: [
      "Manage the annual budgeting and long-term financial forecasting processes.",
      "Develop detailed financial models for new projects and strategic initiatives (DCF, valuation).",
      "Analyze current and past financial data to identify trends, opportunities, and risks.",
      "Prepare monthly/quarterly financial reports for senior management and the board.",
      "Conduct variance analysis between actual results and budget/forecast.",
      "Support the M&A due diligence process as required."
    ],
    Key_Details: {
      "Industry_Type": "Financial Services, Consulting",
      "Department": "Finance, Accounting",
      "Job_Type": "Full-Time",
      "Work_type": "On-site",
      "location": "Mumbai",
      Key_Skills: ["Financial Modeling", "Valuation", "Budgeting", "SAP/ERP", "Advanced Excel", "GAAP/IFRS"]
    }
  },
  {
    id: "5",
    title: "Product Manager (Associate)",
    company: "Ed-Tech Pioneers",
    duration: "Permanent",
    salary: "₹ 9,00,000 - 14,00,000/year",
    experience: "2 to 5 years of experience",
    location: "Pune",
    tags: ["Full-Time"],
    posted: "3 weeks ago",
    openings: 4,
    applicants: 70,
    logo: "",
    Job_Highlights: [
      "Work on high-impact educational products",
      "Cross-functional team collaboration",
      "Experience in Ed-Tech is a plus"
    ],
    companyOverview: "Ed-Tech Pioneers is revolutionizing online learning with interactive and personalized educational platforms. We are driven by a mission to make quality education accessible to everyone globally.",
    job_Description: "We are hiring an Associate Product Manager to define and execute the roadmap for one of our core learning modules. You will bridge the gap between business, technology, and design, ensuring we deliver maximum user value.",
    Responsibilities: [
      "Define product requirements and create user stories and acceptance criteria.",
      "Conduct market research and competitive analysis to identify opportunities.",
      "Prioritize features based on business value, technical effort, and user needs.",
      "Work closely with engineering, design, and marketing teams throughout the product lifecycle.",
      "Analyze product performance data to inform future iterations.",
      "Manage the product backlog and participate in Scrum ceremonies."
    ],
    Key_Details: {
      "Industry_Type": "Ed-Tech, Internet",
      "Department": "Product Management",
      "Job_Type": "Full-Time",
      "Work_type": "On-site",
      "location": "Pune",
      Key_Skills: ["Product Roadmap", "User Stories", "Agile/Scrum", "JIRA", "A/B Testing", "UX/UI Principles"]
    }
  },

  {
    id: "6",
    title: "Cloud Operations Specialist",
    company: "Digital Forge Systems",
    duration: "Permanent",
    salary: "₹ 7,50,000 - 11,00,000/year",
    experience: "2 to 4 years of experience",
    location: "Hyderabad",
    tags: ["Full-Time"],
    posted: "6 days ago",
    openings: 6,
    applicants: 65,
    logo: "",
    Job_Highlights: [
      "Focus on AWS and Azure platforms",
      "24/7 rotational shifts required",
      "Certification in cloud technologies is mandatory"
    ],
    companyOverview: "Digital Forge Systems provides mission-critical infrastructure management and DevOps solutions to large global enterprises. We ensure high availability and scalability for all cloud services.",
    job_Description: "We are looking for a Cloud Operations Specialist to monitor, maintain, and troubleshoot our global cloud infrastructure. This role is crucial for ensuring service reliability and implementing automated deployment pipelines.",
    Responsibilities: [
      "Monitor cloud environments (AWS, Azure) and respond to alerts and incidents.",
      "Manage and maintain container orchestration platforms (Kubernetes).",
      "Implement infrastructure as code (IaC) using Terraform or CloudFormation.",
      "Automate operational tasks and improve deployment processes using CI/CD tools.",
      "Ensure security best practices are followed across all cloud resources.",
      "Participate in on-call rotation for high-priority issues."
    ],
    Key_Details: {
      "Industry Type": "IT Services, Cloud Computing",
      "Department": "DevOps, Infrastructure",
      "Job_Type": "Full-Time",
      "Work_type": "On-site",
      "location": "Hyderabad",
      Key_Skills: ["AWS/Azure", "Kubernetes", "Terraform", "CI/CD", "Linux", "Scripting (Bash/Python)"]
    }
  },
  {
    id: "7",
    title: "Content Writer",
    company: "Marketing Zenith Agency",
    duration: "Permanent",
    salary: "₹ 4,00,000 - 6,00,000/year",
    experience: "1 to 3 years of experience",
    location: "Gurgaon",
    tags: ["Full-Time"],
    posted: "4 days ago",
    openings: 3,
    applicants: 120,
    logo: "",
    Job_Highlights: [
      "Portfolio of published work is essential",
      "Experience with B2B tech writing preferred",
      "Flexible work hours"
    ],
    companyOverview: "Marketing Zenith Agency is a premier content and SEO marketing firm dedicated to crafting compelling narratives that drive organic growth and client engagement.",
    job_Description: "We are seeking a creative and detail-oriented Content Writer to produce high-quality, engaging content across various formats, including blog posts, website copy, case studies, and email newsletters.",
    Responsibilities: [
      "Write, edit, and proofread content for grammatical and factual accuracy.",
      "Collaborate with the SEO team to optimize content using target keywords.",
      "Develop engaging copy for social media campaigns and advertisements.",
      "Conduct thorough research on industry-related topics and trends.",
      "Ensure all content adheres to brand voice and style guidelines.",
      "Manage and adhere to a strict content production schedule."
    ],
    Key_Details: {
      "Industry Type": "Marketing & Advertising",
      "Department": "Content, Editorial",
      "Job_Type": "Full-Time",
      "Work_type": "Hybrid",
      "location": "Gurgaon",
      Key_Skills: ["Content Strategy", "SEO Writing", "Grammarly", "WordPress", "Copywriting", "Research Skills"]
    }
  },
  {
    id: "8",
    title: "Research Associate (Pharmacology)",
    company: "BioGen Pharma Labs",
    duration: "Permanent",
    salary: "₹ 6,00,000 - 9,00,000/year",
    experience: "2 to 5 years of experience",
    location: "Pune",
    tags: ["Full-Time"],
    posted: "14 days ago",
    openings: 2,
    applicants: 30,
    logo: "",
    Job_Highlights: [
      "Master's degree in a relevant field required",
      "Experience with in-vivo studies is highly desirable",
      "Cutting-edge R&D facility access"
    ],
    companyOverview: "BioGen Pharma Labs is a leading pharmaceutical research firm focusing on the discovery and development of novel therapies for chronic diseases. We maintain stringent quality and ethical standards.",
    job_Description: "The Research Associate will be responsible for designing and executing laboratory experiments related to drug efficacy and safety. This is a hands-on role requiring meticulous attention to detail and strong scientific integrity.",
    Responsibilities: [
      "Plan and execute in-vitro and in-vivo pharmacology experiments.",
      "Analyze experimental data and present findings in written reports and presentations.",
      "Maintain detailed and accurate laboratory notebooks.",
      "Operate and maintain complex laboratory equipment (e.g., HPLC, mass spectrometer).",
      "Ensure compliance with all safety regulations and SOPs.",
      "Collaborate with cross-functional teams including chemistry and toxicology."
    ],
    Key_Details: {
      "Industry Type": "Pharmaceuticals, Biotechnology",
      "Department": "R&D, Science",
      "Job_Type": "Full-Time",
      "Work_type": "On-site",
      "location": "Pune",
      Key_Skills: ["Pharmacology", "Cell Culture", "ELISA", "Data Analysis", "HPLC", "Laboratory Techniques"]
    }
  },
  {
    id: "9",
    title: "Technical Support Engineer L2",
    company: "ConnectPro Telecom",
    duration: "Permanent",
    salary: "₹ 3,50,000 - 5,50,000/year",
    experience: "1 to 2 years of experience",
    location: "Chennai",
    tags: ["Full-Time", "Shift Work"],
    posted: "3 days ago",
    openings: 8,
    applicants: 95,
    logo: "",
    Job_Highlights: [
      "Customer-facing role, excellent communication skills a must",
      "Mandatory evening/night shift flexibility",
      "Fast-paced environment with performance incentives"
    ],
    companyOverview: "ConnectPro Telecom is a provider of advanced B2B networking and VOIP solutions. We pride ourselves on offering superior technical support to maintain client satisfaction and uptime.",
    job_Description: "We are seeking a skilled Level 2 Technical Support Engineer to diagnose and resolve complex hardware and software issues for our enterprise clients. The ideal candidate has strong networking fundamentals and excellent problem-solving abilities.",
    Responsibilities: [
      "Provide advanced technical support and troubleshooting via phone, email, and chat.",
      "Diagnose and resolve issues related to network connectivity, server, and application performance.",
      "Escalate unresolved issues to the L3 team and follow up on client cases.",
      "Create and update technical documentation and knowledge base articles.",
      "Assist in the deployment and configuration of client systems remotely.",
      "Maintain high customer satisfaction scores and adherence to SLAs."
    ],
    Key_Details: {
      "Industry Type": "Telecommunications, IT Services",
      "Department": "Technical Support, Customer Service",
      "Job_Type": "Full-Time",
      "Work_type": "On-site",
      "location": "Chennai",
      Key_Skills: ["Troubleshooting", "Networking (TCP/IP)", "Windows Server", "Ticketing Systems (e.g., Zendesk)", "VOIP", "Customer Service"]
    }
  },
  {
    id: "10",
    title: "Sales Executive (B2C)",
    company: "Future Mobility Autos",
    duration: "Permanent",
    salary: "₹ 3,00,000/year + High Incentives",
    experience: "0 to 3 years of experience",
    location: "Delhi",
    tags: ["Full-Time"],
    posted: "7 days ago",
    openings: 15,
    applicants: 180,
    logo: "",
    Job_Highlights: [
      "Target-driven role with uncapped incentives",
      "Prior experience in automobile sales preferred",
      "Training provided for freshers"
    ],
    companyOverview: "Future Mobility Autos is a rapidly expanding dealership chain specializing in electric vehicles and sustainable transportation solutions. We are pioneering the shift to green mobility.",
    job_Description: "We are seeking dynamic and persuasive Sales Executives to engage potential customers, provide product expertise on our range of electric vehicles, and close sales effectively. Success in this role depends on a consultative selling approach.",
    Responsibilities: [
      "Generate leads and manage the sales pipeline from initial contact to closing.",
      "Conduct vehicle demonstrations and test drives for prospective buyers.",
      "Explain financing and insurance options clearly to customers.",
      "Achieve monthly and quarterly sales targets consistently.",
      "Maintain excellent customer relations post-sale for referrals.",
      "Stay updated on product specifications, features, and competitor offerings."
    ],
    Key_Details: {
      "Industry Type": "Automotive, Retail",
      "Department": "Sales, Business Development",
      "Job_Type": "Full-Time",
      "Work_type": "On-site",
      "location": "Delhi",
      Key_Skills: ["B2C Sales", "Lead Generation", "Negotiation", "CRM Software", "Customer Relationship Management", "Product Knowledge"]
    }
  },
  {
    id: "11",
    title: "Machine Learning Intern",
    company: "AI Insights Hub",
    duration: "6 months duration",
    salary: "₹ 40,000/month stipend",
    experience: "Freshers/Students",
    location: "Remote",
    tags: ["Internship", "Remote"],
    posted: "2 days ago",
    openings: 5,
    applicants: 250,
    logo: "",
    Job_Highlights: [
      "Opportunity to work on real-world datasets",
      "Mentorship with PhD-level researchers",
      "Strong coding skills in Python are required"
    ],
    companyOverview: "AI Insights Hub develops advanced predictive models and natural language processing tools for financial analysis. We are committed to pushing the boundaries of artificial intelligence.",
    job_Description: "The Machine Learning Intern will assist our data science team in data preprocessing, model training, and performance evaluation. This is a hands-on learning opportunity for aspiring ML engineers.",
    Responsibilities: [
      "Clean, transform, and manage large structured and unstructured datasets.",
      "Implement and fine-tune various machine learning algorithms (e.g., classification, regression).",
      "Evaluate model performance using appropriate metrics and visualizations.",
      "Write efficient, well-documented, and production-ready Python code.",
      "Research and summarize academic papers on cutting-edge ML techniques.",
      "Contribute to documentation of model architecture and training process."
    ],
    Key_Details: {
      "Industry Type": "Artificial Intelligence, Data Science",
      "Department": "Data Science, Research",
      "Job_Type": "Internship",
      "Work_type": "Remote",
      "location": "Anywhere (Remote)",
      Key_Skills: ["Python", "TensorFlow/PyTorch", "Pandas/NumPy", "Scikit-learn", "Statistical Modeling", "Data Visualization"]
    }
  },
  {
    id: "12",
    title: "Civil Site Engineer",
    company: "Construct Mega Projects",
    duration: "Permanent",
    salary: "₹ 4,50,000 - 7,00,000/year",
    experience: "3 to 6 years of experience",
    location: "Bangalore",
    tags: ["Full-Time"],
    posted: "9 days ago",
    openings: 4,
    applicants: 50,
    logo: "",
    Job_Highlights: [
      "B.E/B.Tech in Civil Engineering is mandatory",
      "Experience supervising large commercial projects a must",
      "Travel to various construction sites required"
    ],
    companyOverview: "Construct Mega Projects is a premier infrastructure and real estate development company, renowned for completing projects ahead of schedule and under budget while maintaining the highest safety standards.",
    job_Description: "We are hiring an experienced Civil Site Engineer to manage day-to-day operations at our construction sites. You will be responsible for quality control, site safety, and coordination between various teams.",
    Responsibilities: [
      "Oversee all on-site construction activities and ensure adherence to blueprints and specifications.",
      "Manage and supervise contractors, laborers, and junior staff.",
      "Monitor work progress, manage project timelines, and report delays.",
      "Perform quality checks on materials and workmanship.",
      "Ensure strict compliance with safety regulations and environmental guidelines.",
      "Prepare site reports, progress documentation, and material procurement lists."
    ],
    Key_Details: {
      "Industry Type": "Construction, Real Estate",
      "Department": "Engineering, Projects",
      "Job_Type": "Full-Time",
      "Work_type": "On-site",
      "location": "Bangalore",
      Key_Skills: ["Site Supervision", "Quality Control", "AutoCAD", "Project Management", "Construction Safety", "Budgeting"]
    }
  },
  {
    id: "13",
    title: "HR Recruiter",
    company: "Talent Bridge Solutions",
    duration: "Permanent",
    salary: "₹ 3,00,000 - 4,50,000/year",
    experience: "0 to 2 years of experience",
    location: "Noida",
    tags: ["Full-Time"],
    posted: "1 day ago",
    openings: 7,
    applicants: 140,
    logo: "",
    Job_Highlights: [
      "Focus on IT and technical hiring",
      "Opportunity for freshers with excellent communication skills",
      "Performance-based incentives"
    ],
    companyOverview: "Talent Bridge Solutions is a recruitment process outsourcing (RPO) firm specializing in high-volume hiring for the technology sector across India. We connect top talent with leading companies.",
    job_Description: "The HR Recruiter will be responsible for managing the end-to-end recruitment process, from sourcing candidates to negotiating offers. A proactive approach and strong understanding of various sourcing channels are key.",
    Responsibilities: [
      "Source and screen candidates using job portals, social media, and internal databases.",
      "Conduct initial phone and video interviews to assess candidate suitability.",
      "Coordinate interview schedules between candidates and hiring managers.",
      "Negotiate salary and benefits packages and extend offer letters.",
      "Maintain and update candidate information in the Applicant Tracking System (ATS).",
      "Build talent pipelines for future hiring needs."
    ],
    Key_Details: {
      "Industry Type": "Recruitment, Human Resources",
      "Department": "Human Resources, Talent Acquisition",
      "Job_Type": "Full-Time",
      "Work_type": "On-site",
      "location": "Noida",
      Key_Skills: ["Sourcing", "Applicant Tracking Systems (ATS)", "Interviewing", "Technical Recruitment", "Negotiation", "LinkedIn Recruiter"]
    }
  },
  {
    id: "14",
    title: "Front-End Developer (React)",
    company: "Nexus Web Labs",
    duration: "Permanent",
    salary: "₹ 6,00,000 - 10,00,000/year",
    experience: "2 to 4 years of experience",
    location: "Mumbai",
    tags: ["Full-Time"],
    posted: "12 days ago",
    openings: 5,
    applicants: 90,
    logo: "",
    Job_Highlights: [
      "Strong proficiency in ReactJS and state management required",
      "Modern tech stack environment",
      "Flexible WFH policy post-probation"
    ],
    companyOverview: "Nexus Web Labs is a product-based company building scalable, high-performance SaaS applications for the financial technology (FinTech) sector. We prioritize clean code and exceptional user experience.",
    job_Description: "We are searching for a talented Front-End Developer with expertise in React to build responsive and highly interactive user interfaces. You will collaborate closely with the UI/UX and Back-End teams.",
    Responsibilities: [
      "Develop new user-facing features using React.js and its core principles.",
      "Build reusable components and front-end libraries for future use.",
      "Translate UI/UX designs and wireframes into high-quality code.",
      "Optimize components for maximum performance across a vast array of web-capable devices and browsers.",
      "Ensure technical feasibility of UI/UX designs.",
      "Integrate front-end logic with server-side APIs (REST/GraphQL)."
    ],
    Key_Details: {
      "Industry Type": "FinTech, Software Product",
      "Department": "Engineering, Development",
      "Job_Type": "Full-Time",
      "Work_type": "Hybrid",
      "location": "Mumbai",
      Key_Skills: ["ReactJS", "JavaScript (ES6+)", "HTML5/CSS3", "Redux/Context API", "Webpack/Babel", "RESTful APIs"]
    }
  },
  {
    id: "15",
    title: "Operations Manager",
    company: "Logistics Xpress",
    duration: "Permanent",
    salary: "₹ 8,00,000 - 13,00,000/year",
    experience: "5 to 8 years of experience",
    location: "Kolkata",
    tags: ["Full-Time"],
    posted: "15 days ago",
    openings: 2,
    applicants: 35,
    logo: "",
    Job_Highlights: [
      "Proven track record in supply chain or logistics management required",
      "P&L management experience is a plus",
      "Leadership role managing a large team"
    ],
    companyOverview: "Logistics Xpress is a leading national 3PL (Third-Party Logistics) provider offering end-to-end supply chain solutions, warehousing, and transportation services with a focus on speed and efficiency.",
    job_Description: "The Operations Manager will be responsible for overseeing all operational aspects of our regional hub, ensuring efficiency, cost-effectiveness, and compliance with all operational procedures and regulatory standards.",
    Responsibilities: [
      "Manage daily warehouse operations, including receiving, inventory, and dispatch.",
      "Develop and implement operational policies and procedures to optimize workflow.",
      "Monitor key performance indicators (KPIs) and implement corrective actions for performance gaps.",
      "Manage the operational budget and look for opportunities for cost reduction.",
      "Lead, mentor, and train a large team of supervisors and ground staff.",
      "Ensure compliance with transportation, safety, and labor regulations."
    ],
    Key_Details: {
      "Industry Type": "Logistics, Supply Chain",
      "Department": "Operations, Management",
      "Job_Type": "Full-Time",
      "Work_type": "On-site",
      "location": "Kolkata",
      Key_Skills: ["Supply Chain Management", "Warehouse Management", "Inventory Control", "Process Improvement", "Team Leadership", "Logistics Software (WMS)"]
    }
  },
  
  {
    id: "16",
    title: "Aerospace Stress Analyst",
    company: "AeroDynamics R&D",
    duration: "Permanent",
    salary: "₹ 10,00,000 - 16,00,000/year",
    experience: "3 to 6 years of experience",
    location: "Hyderabad",
    tags: ["Full-Time", "R&D"],
    posted: "18 days ago",
    openings: 3,
    applicants: 45,
    logo: "",
    Job_Highlights: [
      "Experience with finite element analysis (FEA) software essential",
      "Must have a B.E/M.Tech in Aerospace/Mechanical Engineering",
      "Opportunity to work on primary aircraft structures"
    ],
    companyOverview: "AeroDynamics R&D is a specialized firm providing critical engineering analysis and certification support for major aerospace and defense clients globally. We deliver structural integrity and reliability.",
    job_Description: "We are seeking a highly skilled Stress Analyst to perform detailed structural analysis on aircraft components and assemblies. The role involves using advanced FEA techniques to ensure designs meet airworthiness requirements.",
    Responsibilities: [
      "Perform static and fatigue stress analysis on metallic and composite structures.",
      "Develop and refine Finite Element Models (FEMs) using Nastran/Patran or Abaqus.",
      "Review engineering drawings and documentation to ensure compliance with stress requirements.",
      "Write comprehensive stress analysis reports and present findings to design teams.",
      "Collaborate with design engineers to optimize structures for weight and performance.",
      "Support testing activities and correlate test results with analytical models."
    ],
    Key_Details: {
      "Industry Type": "Aerospace & Defense",
      "Department": "Engineering, R&D",
      "Job_Type": "Full-Time",
      "Work_type": "On-site",
      "location": "Hyderabad",
      Key_Skills: ["FEA", "Nastran/Patran", "Abaqus", "Structural Analysis", "Fatigue & Damage Tolerance", "CAD Software"]
    }
  },
  {
    id: "17",
    title: "Registered Nurse (ICU)",
    company: "MedCare Multi-Specialty Hospital",
    duration: "Permanent",
    salary: "₹ 5,00,000 - 8,00,000/year",
    experience: "2 to 5 years of experience",
    location: "Kochi",
    tags: ["Full-Time", "Healthcare"],
    posted: "2 weeks ago",
    openings: 12,
    applicants: 60,
    logo: "",
    Job_Highlights: [
      "Valid state nursing license (B.Sc Nursing preferred)",
      "Mandatory experience in Intensive Care Unit (ICU)",
      "Shift work required (day/night rotation)"
    ],
    companyOverview: "MedCare is a leading multi-specialty hospital chain committed to delivering compassionate, patient-centered care using state-of-the-art medical technology.",
    job_Description: "We are seeking dedicated Registered Nurses for our Intensive Care Unit. The nurse will be responsible for providing critical care, monitoring patient vitals, administering medications, and collaborating with physicians.",
    Responsibilities: [
      "Provide comprehensive nursing care to critically ill patients in the ICU.",
      "Monitor, record, and interpret patient vital signs and clinical data.",
      "Administer medications and treatments as prescribed by physicians.",
      "Manage patient ventilation, central lines, and other critical care equipment.",
      "Educate patients and their families about health conditions and treatment plans.",
      "Maintain strict adherence to infection control and patient safety protocols."
    ],
    Key_Details: {
      "Industry Type": "Healthcare, Hospital",
      "Department": "Nursing, Medical",
      "Job_Type": "Full-Time",
      "Work_type": "On-site",
      "location": "Kochi",
      Key_Skills: ["Critical Care Nursing", "BLS/ACLS", "Medication Administration", "Patient Monitoring", "ICU Procedures", "Emergency Response"]
    }
  },
  {
    id: "18",
    title: "Financial Planning & Analysis (FP&A) Manager",
    company: "Consumer Goods Titans (CGT)",
    duration: "Permanent",
    salary: "₹ 18,00,000 - 25,00,000/year",
    experience: "7 to 10 years of experience",
    location: "Mumbai",
    tags: ["Full-Time", "Leadership"],
    posted: "20 days ago",
    openings: 1,
    applicants: 20,
    logo: "",
    Job_Highlights: [
      "Chartered Accountant (CA) or MBA in Finance mandatory",
      "Experience in the FMCG/CPG sector is strongly preferred",
      "High-impact strategic planning role"
    ],
    companyOverview: "Consumer Goods Titans (CGT) is one of the largest fast-moving consumer goods companies in the region, known for its iconic brands and vast distribution network.",
    job_Description: "The FP&A Manager will lead the financial planning, budgeting, forecasting, and performance reporting activities for a major business unit. This role provides strategic financial insights to executive leadership.",
    Responsibilities: [
      "Oversee the annual operating plan (AOP) and periodic forecasting cycles.",
      "Conduct complex financial modeling for business cases, investments, and cost-benefit analysis.",
      "Analyze business performance, providing variance explanations and actionable insights.",
      "Prepare and present detailed financial reports and dashboards to the senior management team.",
      "Drive continuous improvement in financial reporting and planning processes.",
      "Manage and develop a team of junior financial analysts."
    ],
    Key_Details: {
      "Industry Type": "FMCG, Consumer Goods",
      "Department": "Finance, Strategy",
      "Job_Type": "Full-Time",
      "Work_type": "On-site",
      "location": "Mumbai",
      Key_Skills: ["Budgeting & Forecasting", "Financial Modeling", "CA/MBA Finance", "P&L Management", "SAP/Hyperion", "Management Reporting"]
    }
  },
  {
    id: "19",
    title: "Power Plant Maintenance Technician",
    company: "Green Energy Solutions",
    duration: "Permanent",
    salary: "₹ 4,00,000 - 6,50,000/year",
    experience: "3 to 5 years of experience",
    location: "Visakhapatnam",
    tags: ["Full-Time", "Technical"],
    posted: "8 days ago",
    openings: 6,
    applicants: 40,
    logo: "",
    Job_Highlights: [
      "Diploma/ITI in Electrical/Mechanical required",
      "Experience in solar or thermal power generation is essential",
      "Mandatory physical fitness for site work"
    ],
    companyOverview: "Green Energy Solutions is a major player in the renewable energy sector, operating large-scale solar and wind farms aimed at sustainable power generation for industrial clients.",
    job_Description: "The Power Plant Maintenance Technician will be responsible for the preventive and corrective maintenance of electrical and mechanical equipment within our power generation facility to maximize uptime and efficiency.",
    Responsibilities: [
      "Perform routine maintenance checks and inspections on turbines, generators, and solar panels.",
      "Troubleshoot and repair electrical systems, including wiring, circuit breakers, and inverters.",
      "Maintain and calibrate mechanical components such as pumps, valves, and piping.",
      "Document all maintenance activities, repairs, and parts used accurately.",
      "Adhere to strict safety standards and operational procedures (LOTO).",
      "Respond promptly to system failures and emergencies."
    ],
    Key_Details: {
      "Industry Type": "Energy, Utilities, Renewable Power",
      "Department": "Maintenance, Operations",
      "Job_Type": "Full-Time",
      "Work_type": "On-site",
      "location": "Visakhapatnam",
      Key_Skills: ["Electrical Troubleshooting", "Preventive Maintenance (PM)", "SCADA Systems", "Renewable Energy", "Safety Protocols (LOTO)", "Mechanical Repair"]
    }
  },
  {
    id: "20",
    title: "Ethical Hacker / Penetration Tester",
    company: "SecureNet Consulting",
    duration: "Permanent",
    salary: "₹ 9,00,000 - 15,00,000/year",
    experience: "3 to 5 years of experience",
    location: "Pune",
    tags: ["Full-Time", "Cybersecurity"],
    posted: "11 days ago",
    openings: 4,
    applicants: 80,
    logo: "",
    Job_Highlights: [
      "Certifications like CEH, OSCP, or equivalent are highly valued",
      "Experience with web application and network penetration testing",
      "Opportunity for client-facing security assessments"
    ],
    companyOverview: "SecureNet Consulting is a premier cybersecurity firm dedicated to protecting clients from evolving digital threats through rigorous testing, advanced threat intelligence, and proactive defense strategies.",
    job_Description: "We are looking for an experienced Ethical Hacker/Penetration Tester to conduct comprehensive security assessments, identify vulnerabilities in client systems, and provide actionable remediation recommendations.",
    Responsibilities: [
      "Execute full-scope penetration tests for web applications, mobile apps, and networks.",
      "Conduct manual verification and exploitation of identified vulnerabilities.",
      "Develop detailed reports outlining security weaknesses, potential impact, and remediation steps.",
      "Stay current with the latest exploits, attack vectors, and security trends.",
      "Simulate real-world attacks to test organizational defenses (Red Teaming).",
      "Collaborate with development teams to ensure security is built into the SDLC."
    ],
    Key_Details: {
      "Industry Type": "Cybersecurity, IT Consulting",
      "Department": "Security, IT",
      "Job_Type": "Full-Time",
      "Work_type": "On-site",
      "location": "Pune",
      Key_Skills: ["Penetration Testing", "Ethical Hacking", "CEH/OSCP", "Burp Suite", "Kali Linux", "Vulnerability Assessment"]
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
