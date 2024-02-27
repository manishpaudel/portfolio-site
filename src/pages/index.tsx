import React from 'react';
import Home from '../components/Home'; // Replace "Home" with the actual component

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Home /> // Render the Home component
  );
};

export default HomePage;
