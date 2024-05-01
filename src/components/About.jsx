import React from "react";

function About() {
    return (
        <>
            <div className="about">
                <h2>About The Company</h2>
                <p>Key Features Of The Company</p>

                <div className="about_card">
                    <div className="about_card_item">

                        <img src="/public/Images/responsive.png" alt="responsive"></img>
                        <p>Responsive</p>
                        <p>lorem ipsum dolor sit amet</p>
                    </div>

                    <div className="about_card_item">
                        <img src="/public/Images/heart.png" alt="responsive"></img>
                        <p>Passion</p>
                        <p>lorem ipsum dolor sit amet</p>
                    </div>

                    <div className="about_card_item">
                        <img src="/public/Images/diamond.png" alt="responsive"></img>
                        <p>Design</p>
                        <p>lorem ipsum dolor sit amet</p>
                    </div>

                    <div className="about_card_item">
                        <img src="/public/Images/settings.png" alt="responsive"></img>
                        <p>Support</p>
                        <p>lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>

            <div className="about_design">
                <div>
                    <h2>We Know Design..</h2>
                    <p>lorem ipsum dolor sit amet</p>
                </div>
                <div>
                    <img src="/public/Images/pexels-valentin-antonucci-1653327-scaled.jpg" alt="phone"></img>
                </div>
            </div>
        </>
    )

}
export default About;