import { React, useEffect } from 'react'
import './JHeader.css'
import { Link, NavLink, useLocation } from 'react-router-dom';
import breifcase from '../assets/header_case.png'
import chat from '../assets/header_message.png'
import bell from '../assets/header_bell.png'
import profile from '../assets/header_profile.png'
import { useState } from 'react';
import bell_dot from '../assets/header_bell_dot.png'
import { notificationsData } from './Afterloginlanding';
import { JNotification } from './JNotification';

export const JHeader = () => {
    // const [activeItem, setActiveItem] = useState("Home");

    const [showNotification, setShowNotification] = useState(false);
    const newNotificationsCount = notificationsData.filter(n => n.isNew).length;

    const Location = useLocation();


    const NavLinks = [
        { name: 'Home', path: '/Job-portal/jobseeker' },
        { name: 'Jobs', path: '/Job-portal/jobseeker/jobs' },
        { name: 'Companies', path: '/Job-portal/jobseeker/companies' },
    ];
    const NavIcons =[
        {image: breifcase, path: "/Job-portal/jobseeker/myjobs"},
        {image: chat},
        //  {image: bell},
        // {image: profile}
       
    ]

    const handleNavClick = (e) => {
        setActiveItem(e);
    }


    return (
        <header className="header">
            <div className="logo">job portal</div>
            <nav className="jheader-nav-links">
                {NavLinks.map((n)=>{
                    const isActive = Location.pathname===n.path
                    return(
                    <NavLink key={n.name} to={n.path} className={isActive ? 'jheader-nav-active' : 'jheader-nav-items'}>{n.name}</NavLink >)})}
                {/* <Link onClick={(e) => handleNavClick(Home)} to="/Job-portal/jobseeker/" className={activeItem ? 'nav-item' : 'nav-active'} >Home</Link>
                <Link onClick={(e) => handleNavClick(jobs)} to="/Job-portal/jobseeker/jobs" className={activeItem ? 'nav-item' : 'nav-active'} >Jobs</Link>
                <Link onClick={(e) => handleNavClick(Companies)} to="/Job-portal/jobseeker/companies" className={activeItem ? 'nav-item' : 'nav-active'} >Companies</Link> */}
            </nav>

            <div className="auth-links">
                {NavIcons.map((IC)=>{
                const isActive = Location.pathname===IC.path
                return(
                <Link className='nav-icons' to={IC.path}><img className={isActive? 'jheader-icons-active' : 'jheader-icons'} src={IC.image} alt='My Jobs' /></Link>
)})}
                {/* <Link to="/Job-portal/jobseeker/myjobs"><img className='header-icons' src={breifcase} alt='My Jobs' /></Link>
                <div><img className='header-icons' src={chat} alt='Messages' /></div> */}
                <div onClick={() => setShowNotification(!showNotification)}><img className='jheader-icons' src={newNotificationsCount > 0 ? bell_dot : bell} alt='Notifications' /></div>
                <Link className='nav-icons'to="/Job-portal/jobseeker/myprofile"><img className='jheader-icons' src={profile} alt='My Profile' /></Link>
            </div>
            <JNotification notificationsData={notificationsData} showNotification={showNotification} setShowNotification={setShowNotification} />
        </header>
    )
}
