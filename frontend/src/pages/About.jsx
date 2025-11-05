import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Bug, Users, Award, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Bug,
      title: 'Living Collections',
      description: 'Our museum features active, living colonies of four types of social insects: ants, bees, wasps, and termites.'
    },
    {
      icon: Users,
      title: 'Educational Experience',
      description: 'Perfect for families, school groups, and nature enthusiasts. Learn about insect behavior and ecology.'
    },
    {
      icon: Award,
      title: 'Expert Guidance',
      description: 'Our knowledgeable staff provides insights into the fascinating world of social insects.'
    },
    {
      icon: Heart,
      title: 'Conservation Focus',
      description: 'We promote understanding and appreciation of insects and their vital role in our ecosystems.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <h1 className="page-title">About Cappas Insectozoo</h1>
          <p className="page-subtitle">Where nature's tiniest engineers come to life</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content-section">
        <div className="container-custom">
          <div className="about-intro">
            <h2 className="section-title">Welcome to Our Museum</h2>
            <p className="about-text">
              Located in the charming village of Vila Ruiva, Cuba, Portugal, Cappas Insectozoo is a unique living museum dedicated to the fascinating world of social insects. Our facility houses active colonies of ants, bees, wasps, and termites, offering visitors an unprecedented opportunity to observe these incredible creatures in carefully maintained habitats.
            </p>
            <p className="about-text">
              Whether you're a curious child, a nature enthusiast, or a researcher, our museum provides an educational and engaging experience that reveals the complex social structures and behaviors of these often-overlooked members of our ecosystem.
            </p>
          </div>

          {/* Features Grid */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card">
                <CardContent className="feature-card-content">
                  <div className="feature-icon-wrapper">
                    <feature.icon className="feature-icon" />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="mission-section">
            <Card className="mission-card">
              <CardContent className="mission-content">
                <h2 className="mission-title">Our Mission</h2>
                <p className="mission-text">
                  At Cappas Insectozoo, we believe that understanding and appreciating insects is essential for environmental education and conservation. Our mission is to inspire curiosity, foster learning, and promote respect for all living creatures, no matter how small.
                </p>
                <p className="mission-text">
                  Through hands-on observation and expert interpretation, we aim to bridge the gap between humans and the insect world, revealing the remarkable intelligence, cooperation, and ingenuity of social insect colonies.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Visit Info */}
          <div className="visit-info-section">
            <h2 className="section-title">Visit Information</h2>
            <div className="visit-info-grid">
              <Card className="visit-info-card">
                <CardContent className="visit-info-content">
                  <h3 className="visit-info-title">Location</h3>
                  <p className="visit-info-text">Vila Ruiva, Cuba, Portugal</p>
                </CardContent>
              </Card>
              <Card className="visit-info-card">
                <CardContent className="visit-info-content">
                  <h3 className="visit-info-title">Availability</h3>
                  <p className="visit-info-text">7 days a week, by reservation only</p>
                </CardContent>
              </Card>
              <Card className="visit-info-card">
                <CardContent className="visit-info-content">
                  <h3 className="visit-info-title">Group Size</h3>
                  <p className="visit-info-text">Perfect for families or groups up to 15 people</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;