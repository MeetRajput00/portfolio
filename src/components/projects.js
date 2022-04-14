import React from 'react';
import './projects.css';
import Card from './Card';
import discordSS from 'C:/Users/Meet/Documents/GitHub/portfolio/src/discord.png';
import faceDetectionSS from 'C:/Users/Meet/Documents/GitHub/portfolio/src/facedetection.png';
import ntaSS from 'C:/Users/Meet/Documents/GitHub/portfolio/src/networkTrafficAnalyzer.png';
import flappyBirdSS from 'C:/Users/Meet/Documents/GitHub/portfolio/src/flappyBird.jpg';
import todolist from 'C:/Users/Meet/Documents/GitHub/portfolio/src/reactToDoList.png';
import spaceInvaders from 'C:/Users/Meet/Documents/GitHub/portfolio/src/spaceInvaders.png';
function Projects() {
  return (
    <div className='project_Body'>
      <div className='title_heading'>
        <h1>Recent Projects</h1>
      </div>
    <div className='projectsBody'>
      <Card githubLink="https://github.com/MeetRajput00/discord-clone-final" imageLocation={discordSS} projectTitle="Discord Clone using React"/>
      <Card githubLink="https://github.com/MeetRajput00/network-traffic-analyzer" imageLocation={ntaSS} projectTitle="Network Traffic Analyzer"/>
      <Card githubLink="https://github.com/MeetRajput00/Face-Detection" imageLocation={faceDetectionSS} projectTitle="Face Detection using OpenCV"/>
    </div>
    <div className='projectsBody'>
      <Card githubLink="https://github.com/MeetRajput00/Flappy-Bird" imageLocation={flappyBirdSS} projectTitle="Flappy Bird using PyGame"/>
      <Card githubLink="https://github.com/MeetRajput00/react-todolist" imageLocation={todolist} projectTitle="ToDoList using React"/>
      <Card githubLink="https://github.com/MeetRajput00/SpaceInvaders" imageLocation={spaceInvaders} projectTitle="SpaceInvaders using PyGame"/>
    </div>
    </div>
  );
}

export default Projects