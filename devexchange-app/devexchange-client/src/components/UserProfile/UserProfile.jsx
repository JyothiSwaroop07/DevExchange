import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons'
import Avatar from '../Avatar/Avatar'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import moment from 'moment'
import { useState } from 'react'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import './UserProfile.css'

const UserProfile = () => {

    const {id }= useParams()
    const users = useSelector((state)=>state.usersReducer)
    const currentProfile = users.filter((user)=>user._id===id)[0]
    const currentUser = useSelector((state)=>state.currentUserReducer)
    const  [Switch,setSwitch] = useState(false)

  return (
    <div className='home-container-1'>
        <LeftSidebar/>
        <div className="user-profile-container">
            <section>
                <div className="user-details-container">
                    <div className='user-details' >
                        <Avatar backgroundColor="purple" color='white' fontSize='20px' px='38px' py='38px' >
                            {currentProfile?.name.charAt(0).toUpperCase()}
                        </Avatar>
                        <div className="user-name">
                            <h1>{currentProfile?.name}</h1>
                            <p><FontAwesomeIcon icon={faBirthdayCake}/> joined {moment(currentProfile?.joinedOn).fromNow()} </p>
                        </div>
                        <div className='edit'>
                            {
                                currentUser?.result._id === id &&(
                                    <button type="button" onClick={()=>setSwitch(true)} className = "edit-profile-btn" >
                                        <FontAwesomeIcon icon={faPen} /> Edit Profile
                                    </button>
                                )
                            }
                        </div>
                    </div>
                    <div>
                        {
                            Switch ? (
                                <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
                            ) : (
                                <ProfileBio currentProfile={currentProfile} />
                            )
                        }
                        </div>
                        
                        <>
                        
                        </>
                    </div>
                
            </section>
        </div>
    </div>
  )
}

export default UserProfile