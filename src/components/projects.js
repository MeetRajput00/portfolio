import React from 'react';
import './projects.css';
import Card from './Card';
import discordSS from 'D:/projects/portfolio/portfolio/src/discord.png';
import faceDetectionSS from 'D:/projects/portfolio/portfolio/src/facedetection.jpg';
import ntaSS from 'D:/projects/portfolio/portfolio/src/networkTrafficAnalyzer.png';
function Projects() {
  return (
    <div className='project_Body'>
      <div className='title_heading'>
        <h1>Recent Projects</h1>
      </div>
    <div className='projectsBody'>
      <Card githubLink="https://github.com/MeetRajput00/discord-clone-final" imageLocation={discordSS} projectTitle="Discord Clone using React and Redux"/>
      <Card githubLink="https://github.com/MeetRajput00/network-traffic-analyzer" imageLocation={ntaSS} projectTitle="Network Traffic Analyzer using C#"/>
      <Card githubLink="https://github.com/MeetRajput00/Face-Detection" imageLocation={faceDetectionSS} projectTitle="Face Detection using OpenCV"/>
    </div>
    </div>
  );
}

export default Projects