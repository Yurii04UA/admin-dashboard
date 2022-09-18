import React from 'react';
import './Sitebar.scss';
import {Link} from 'react-router-dom'

const Sitebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/' className="logo">
        <div className="circle">
          <div className='square'></div>
        </div>
        <div>Dashboard Kit</div>
      </Link>
      <ul className="sidebar-content">
        <li>Overview</li>
        <li>Tickets</li>
        <li>Ideas</li>
        <li>Contacts</li>
        <li>Agents</li>
        <li>Articles</li>
        <li>Settings</li>
        <li>Subscription</li>
      </ul>
    </div>
  )
}

export default Sitebar