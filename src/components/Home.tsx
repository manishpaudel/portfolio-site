import React from 'react';
import Image from 'next/image'; // Import for using images
import bannerImage from "@/public/banner.jpg";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="container">
      <h1>Your Website Title</h1>
      <p>Welcome to your website!</p>
      <Image
        src={bannerImage}
        alt="Your image description"
        width={500}
        height={300}
      />
    </div>
  );
};

export default HomePage;
