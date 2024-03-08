import React from 'react'
import backgroundImage from '../images/coding.jpg'

const Home = () => {
  return (
    <>
      <div className="background-image-container">

        <img src={backgroundImage} alt="Background" className="background-image" />

        <div className="overlay"></div>

      </div>

      <div className="content">
         
        <h1>Huzaifa Bin Shahid</h1>
        <p>FRONTEND DEVELOPER</p>
        <p>As an experienced developer specializing in React and Node.js, I bring 1 year of expertise in crafting robust web applications. With a keen eye for detail, I am proficient in React for front-end development and Node.js for back-end solutions, excelling in translating complex requirements into efficient code. With a proven track record of leading development teams, I ensure alignment with industry best practices and the latest technologies to deliver exceptional solutions.

        </p>
        <button className="custom-button mx-3">Hire Me</button>
        <button className="custom-button mx-3">Download Resume</button>

      </div>



    </>
  );
}

export default Home;