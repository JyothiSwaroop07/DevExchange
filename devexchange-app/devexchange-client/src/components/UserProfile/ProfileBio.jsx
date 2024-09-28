import React from 'react'
import './UserProfile.css'


const ProfileBio = ({currentProfile}) => {
  return (
    <div>
        <div>
            {
                currentProfile?.about ?(
                    <>
                        <h4>About</h4>
                        <p>{currentProfile?.about}</p>
                    </>
                ) : (
                    <p>No Bio Found</p>
                )
            }
        </div>
        <div className='tags-container'>
            {
                currentProfile?.tags.length!==0 ? (
                    <>
                        <h4 style={{marginRight:"15px"}}>Tags Watched</h4>
                        {
                            currentProfile?.tags.map((tag)=>(
                                <div className="tags" key={tag}>{tag}</div>
                            ))
                        }
                    </>
                ) :     (
                    <p>0 tags watched</p>
                )
            }
        </div>
        
        

    </div>
  )
}

export default ProfileBio