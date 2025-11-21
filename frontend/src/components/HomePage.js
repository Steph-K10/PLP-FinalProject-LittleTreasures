import React, { useEffect }  from 'react';
import HeroSection from './HeroSection';
import ProblemStatement from './ProblemStatement';
import SolutionSection from './SolutionSection';
import VolunteerRegistration from './VolunteerRegistration';

const HomePage = () => {
  useEffect(() => {
    if (sessionStorage.getItem('scrollToVolunteer') === 'true') {
      const element = document.getElementById('volunteer');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      sessionStorage.removeItem('scrollToVolunteer');
    }
  }, []);
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