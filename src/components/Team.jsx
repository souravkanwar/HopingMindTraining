import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Team(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
    return(
        <>
       <Carousel
       showDots={true}
       infinite={true}
       autoPlay={true}
       swipeable={true}

        responsive={responsive}>
        <div className="team_inner">
        <img src="/public/Images/team2.jpg"/>
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <p><button>Contact</button></p>
        </div>
        <div className="team_inner">
        <img src="/public/Images/team2.jpg"/>
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <p><button>Contact</button></p>
        </div>
        <div className="team_inner">
        <img src="/public/Images/team2.jpg"/>
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <p><button>Contact</button></p>
        </div>
        <div className="team_inner">
        <img src="/public/Images/team2.jpg"/>
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <p><button>Contact</button></p>
        </div>
        <div className="team_inner">
        <img src="/public/Images/team2.jpg"/>
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <p><i className="fa fa-envolpe"></i> <button>Contact</button></p>
        </div>
        <div className="team_inner">
        <img src="/public/Images/team2.jpg"/>
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <p><button>Contact</button></p>
        </div>
        <div className="team_inner">
        <img src="/public/Images/team2.jpg"/>
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <p><button>Contact</button></p>
        </div>
        <div className="team_inner">
        <img src="/public/Images/team2.jpg"/>
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <p><button>Contact</button></p>
        </div>
        
      </Carousel>;
        </>
    )

}
export default Team;