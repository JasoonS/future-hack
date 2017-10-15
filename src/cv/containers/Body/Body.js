import React from 'react';
import TechExperience from '../../components/TechExperience';
import WorkExperience from '../../components/WorkExperience';
import Education from '../../components/Education';
import Social from '../../components/Social';

const Body = ({ profile: { techExperience, workExperience, education, social } }) => (
  <div>
    <WorkExperience experience={workExperience} />
    <Education creds={education} />
    <TechExperience experience={techExperience} />
    <Social accounts={social} />
  </div>
);

export default Body;
