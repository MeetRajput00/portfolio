import React from 'react';
import './skills.css';
function Skills() {
  return (
    <div className='skills_Body'>
      <h1>My Skills</h1>
      <div className='skills_info'>
      <div className='professional_strengths'>
        <h1>Professional Strengths</h1>
        <p><b>“I think one of my greatest strengths is as a problem solver. I have the ability to see a situation from different perspectives. I can get my work done even in the face of difficult obstacles and get feasible solutions.”</b></p>
      </div>
      <div className='skill_bar'>
        <p>C/C++</p>
      <div class="container">
        <div class="skills html">93%</div>
        </div>

        <p>Python</p>
        <div class="container">
          <div class="skills css">95%</div>
        </div>

        <p>ReactJS</p>
        <div class="container">
          <div class="skills js">93%</div>
        </div>

        <p>C#</p>
        <div class="container">
          <div class="skills php">92%</div>
        </div>
        <p>.NET Framework</p>
        <div class="container">
          <div class="skills net">91%</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills