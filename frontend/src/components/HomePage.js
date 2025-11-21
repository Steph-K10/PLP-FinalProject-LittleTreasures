import React from 'react';
import HeroSection from './HeroSection';
import ProblemStatement from './ProblemStatement';
import SolutionSection from './SolutionSection';
import VolunteerRegistration from './VolunteerRegistration';

const HomePage = () => {
  return (
    <div className="home-page" style={{ backgroundColor: 'lightblue' }}>
      <HeroSection />
      <ProblemStatement />
      <SolutionSection />
      <VolunteerRegistration />
    </div>
  );
};

export default HomePage;