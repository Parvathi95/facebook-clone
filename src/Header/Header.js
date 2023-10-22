import React from 'react'
import './Header.css'
import {AiOutlineSearch, AiOutlineWallet,AiFillHome} from 'react-icons/ai'
import {FaRegFlag,FaUsers,FaPlusCircle,FaBell,FaFacebookMessenger,} from 'react-icons/fa'
import {MdOndemandVideo} from 'react-icons/md' 
import Main from '../Main/Main'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='HomePage'>
     <div className="header">
     <div className="first-header">
         <div className="logo">
         <img src="https://th.bing.com/th/id/OIP.Ua5AXhtGRgPuisZVmetclQHaFL?w=274&h=192&c=7&r=0&o=5&pid=1.7" alt="facebook-logo" />
         </div>
         <div className="search">
            <AiOutlineSearch style={{height:"4rem"}}/>
            <input type="search" placeholder='Search Facebook' />
         </div>
         </div>
         <div className="middle-header">
            <div className="Icon">
                <Link to="home"><AiFillHome fontSize="2.3rem" color="#1877f2" /></Link>
            </div>
            <div className="Icon">
                <Link to="videos"><MdOndemandVideo fontSize="2.3rem"/></Link>
            </div>
            <div className="Icon">
                <Link to="users"><FaUsers fontSize="2.3rem"/></Link>
            </div>
         </div>
         <div className="third-header">
            <div className="plus">
                <FaPlusCircle fontSize="2rem"/>
            </div>
            <div className="plus">
                <FaFacebookMessenger fontSize="2rem"/>
            </div>
            <div className="plus">
                <FaBell fontSize="2rem"/>
            </div>
            <div className="plus">
                <img src='https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600' alt='db' style={{height:"25px",width:"30px"}}/>
            </div>
         </div>
        </div>
        <Main/>
     </div>
  )
}
