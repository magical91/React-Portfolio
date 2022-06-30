import React from 'react'
import img from '../../assets/about/mm.jpg'

function About() {

    return (
        <section className="my-5" >
            <h1 id="about">About me</h1>
            <div className="my-2 wp">
                <img src={img} className="img-thumbnail mx-1" alt="Avatar used for my portfolio" />
                <p className='p-about'>
                    Hello my name is Marissa Martinez. I am a software developer currently enrolled in a coding boot camp through Michigan
                    State University. After a long period of working minimum wage jobs I finally decided to go back to school. Not just to
                    learn something new but to open new opportunities for me and my future. I have tons of aspirations to achieve my goals,
                    and through coding I have finally found the motivation that I needed in my life. Check out my porfolio which includes
                    my work projects, a contact form to reach me, and my resume.
                </p>
            </div>
        </section>
    )
}

export default About