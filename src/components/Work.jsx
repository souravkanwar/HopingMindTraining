import React from 'react'

function Work() {
    return (
      <div>
          <div className='heading'>
            <h2>OUR WORK</h2>
            <p>What We've Done Here People</p>
          </div>
          <div className='work_gallery'>
           <div className='work_items'>
           <img src='/public/Images/tech_camera.jpg' />
       </div>
       <div className='work_items'>
           <img src='/public/Images/tech_drone.jpg' />
       </div>
       <div className='work_items'>
           <img src='/public/Images/tech_mic.jpg' />
       </div>
       <div className='work_items'>
           <img src='/public/Images/tech_phone.jpg' />
       </div>
       <div className='work_items'>
           <img src='/public/Images/tech_sound.jpg' />
       </div>
       <div className='work_items'>
           <img src='/public/Images/tech_tablet.jpg' />
       </div>
       <div className='work_items'>
           <img src='/public/Images/tech_tableturner.jpg' />
       </div>
       <div className='work_items'>
           <img src='/public/Images/tech_typewriter.jpg' />
       </div>
       </div>
       <div className='work_desgin'>
                <div className='work_inner'>
                    <h2>Our Skills..</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    <p>tempor incididunt ut labore et dolore.</p>
                </div>
                <div className='work_skill'>
                    <p>Photography</p>
                    <progress id="file" value="32" max="100"> 32% </progress>
                    <p>Web Design</p>
                    <progress id="file" value="32" max="100"> 32% </progress>
                    <p>Photoshop</p>
                    <progress id="file" value="32" max="100"> 32% </progress>
                    <p>Illusrator</p>
                    <progress id="file" value="32" max="100"> 32% </progress>
                </div>
            </div>
       </div>
    )
}

export default Work;
