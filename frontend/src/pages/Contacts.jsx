import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - in real app would send to backend
    toast.success('Reservation request sent! We will contact you shortly to confirm.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      guests: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contacts-page">
      {/* Header */}
      <section className="contacts-header">
        <div className="container-custom">
          <h1 className="page-title">Contact & Reservations</h1>
          <p className="page-subtitle">
            Book your visit or get in touch with us
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container-custom">
          <div className="contact-info-grid">
            <Card className="contact-info-card">
              <CardContent className="contact-info-content">
                <div className="contact-icon-wrapper">
                  <Phone className="contact-icon" />
                </div>
                <h3 className="contact-info-title">Phone</h3>
                <p className="contact-info-text">+351 XXX XXX XXX</p>
                <p className="contact-info-subtext">Call us for reservations</p>
              </CardContent>
            </Card>

            <Card className="contact-info-card">
              <CardContent className="contact-info-content">
                <div className="contact-icon-wrapper">
                  <Mail className="contact-icon" />
                </div>
                <h3 className="contact-info-title">Email</h3>
                <p className="contact-info-text">info@cappasinsectozoo.pt</p>
                <p className="contact-info-subtext">Send us your questions</p>
              </CardContent>
            </Card>

            <Card className="contact-info-card">
              <CardContent className="contact-info-content">
                <div className="contact-icon-wrapper">
                  <MapPin className="contact-icon" />
                </div>
                <h3 className="contact-info-title">Location</h3>
                <p className="contact-info-text">Vila Ruiva, Cuba</p>
                <p className="contact-info-subtext">Portugal</p>
              </CardContent>
            </Card>

            <Card className="contact-info-card">
              <CardContent className="contact-info-content">
                <div className="contact-icon-wrapper">
                  <Clock className="contact-icon" />
                </div>
                <h3 className="contact-info-title">Opening Hours</h3>
                <p className="contact-info-text">7 days a week</p>
                <p className="contact-info-subtext">By reservation only</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="reservation-section">
        <div className="container-custom">
          <div className="reservation-wrapper">
            <Card className="reservation-card">
              <CardContent className="reservation-content">
                <h2 className="reservation-title">Request a Reservation</h2>
                <p className="reservation-subtitle">
                  Fill out the form below and we'll contact you to confirm your visit
                </p>
                
                <form onSubmit={handleSubmit} className="reservation-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+351 XXX XXX XXX"
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Preferred Date *</label>
                      <Input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Number of Guests *</label>
                    <Input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder="Max 15 people"
                      min="1"
                      max="15"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any special requests or questions?"
                      rows={4}
                      className="form-textarea"
                    />
                  </div>

                  <Button type="submit" size="lg" className="form-submit-button">
                    Submit Reservation Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info Box */}
            <div className="info-box">
              <Card className="info-box-card">
                <CardContent className="info-box-content">
                  <h3 className="info-box-title">Reservation Information</h3>
                  <ul className="info-list">
                    <li className="info-list-item">
                      All visits are by reservation only
                    </li>
                    <li className="info-list-item">
                      We accommodate groups of up to 15 people
                    </li>
                    <li className="info-list-item">
                      Tours typically last 60-90 minutes
                    </li>
                    <li className="info-list-item">
                      Perfect for families with children
                    </li>
                    <li className="info-list-item">
                      Please arrive 10 minutes before your scheduled time
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;