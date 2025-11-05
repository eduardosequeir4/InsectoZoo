import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Bug, Users, Calendar, MapPin } from 'lucide-react';

const Home = () => {
  const species = [
    {
      name: 'Ants',
      description: 'Watch fascinating ant colonies at work, building intricate tunnels and foraging for food.',
      icon: Bug
    },
    {
      name: 'Bees',
      description: 'Observe the incredible world of bees, their hive organization, and honey production.',
      icon: Bug
    },
    {
      name: 'Wasps',
      description: 'Learn about wasp colonies and their important role in the ecosystem.',
      icon: Bug
    },
    {
      name: 'Termites',
      description: 'Discover the complex social structure of termite colonies and their engineering marvels.',
      icon: Bug
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">
            Cappas Insectozoo
          </h1>
          <p className="hero-subtitle">
            Discover the Fascinating World of Social Insects
          </p>
          <p className="hero-description">
            Live colonies of ants, bees, wasps, and termites in Vila Ruiva, Cuba, Portugal
          </p>
          <div className="hero-buttons">
            <Link to="/contacts">
              <Button size="lg" className="cta-button">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Visit
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="learn-more-button">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="info-section">
        <div className="container-custom">
          <div className="info-grid">
            <Card className="info-card">
              <CardContent className="info-card-content">
                <Calendar className="info-icon" />
                <h3 className="info-title">Open 7 Days</h3>
                <p className="info-text">Reservations available every day of the week</p>
              </CardContent>
            </Card>
            <Card className="info-card">
              <CardContent className="info-card-content">
                <Users className="info-icon" />
                <h3 className="info-title">Small Groups</h3>
                <p className="info-text">Perfect for families and groups up to 15 people</p>
              </CardContent>
            </Card>
            <Card className="info-card">
              <CardContent className="info-card-content">
                <MapPin className="info-icon" />
                <h3 className="info-title">Vila Ruiva, Cuba</h3>
                <p className="info-text">Located in beautiful Portugal</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Species Section */}
      <section className="species-section">
        <div className="container-custom">
          <h2 className="section-title">Our Live Colonies</h2>
          <p className="section-subtitle">
            Experience the wonder of social insects in their living habitats
          </p>
          <div className="species-grid">
            {species.map((item, index) => (
              <Card key={index} className="species-card">
                <CardContent className="species-card-content">
                  <div className="species-icon-wrapper">
                    <item.icon className="species-icon" />
                  </div>
                  <h3 className="species-title">{item.name}</h3>
                  <p className="species-description">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="gallery-preview-section">
        <div className="container-custom">
          <h2 className="section-title">Gallery Preview</h2>
          <p className="section-subtitle">Get a glimpse of the amazing insects you'll encounter</p>
          <div className="gallery-preview-grid">
            <div className="gallery-item" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1641123721394-9ea744927e35?w=800&q=80)' }}>
              <div className="gallery-overlay">
                <span className="gallery-label">Ants</span>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1647427062468-74ff21e8934f?w=800&q=80)' }}>
              <div className="gallery-overlay">
                <span className="gallery-label">Bees</span>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586943760662-9db9594a3a99?w=800&q=80)' }}>
              <div className="gallery-overlay">
                <span className="gallery-label">Wasps</span>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1612960891902-b525d250aa89?w=800&q=80)' }}>
              <div className="gallery-overlay">
                <span className="gallery-label">Termites</span>
              </div>
            </div>
          </div>
          <div className="gallery-cta">
            <Link to="/gallery">
              <Button size="lg" className="view-gallery-button">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container-custom">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Explore?</h2>
            <p className="cta-description">
              Book your visit today and embark on an educational journey into the world of social insects
            </p>
            <Link to="/contacts">
              <Button size="lg" className="cta-button-large">
                <Calendar className="mr-2 h-5 w-5" />
                Reserve Your Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;