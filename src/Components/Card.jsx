import React from 'react'
import './card.css'
const Card = () => {
  return (
    <div className='card'>
        <div className="Container">
            <img src='https://media.istockphoto.com/id/1208414307/photo/happy-male-executive-in-office.jpg?s=612x612&w=0&k=20&c=3krD8gIdPmHFVwbcHGyQDXUGlcyzmcWQNyRMRp_93P8=' alt='logo' className='logo'/>
            <h3 className='name'>Dima Blover</h3>
            <h4 className='about'>UI/UX Designer</h4>
            <div className="followers">
                <div className="posts">
                    <h4 className='post'>172</h4>
                    <h4 className='post'>Posts</h4>
                </div>
                <div className="posts">
                    <h4 className='post'>47</h4>
                    <h4 className='post'>Followers</h4>
                </div>
                <div className="posts">
                    <h4 className='post'>20</h4>
                    <h4 className='post'>Following</h4>
                </div>
                
            </div>
          
        </div>
    </div>
  )
}

export default Card