import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Dialog, DialogContent } from '../components/ui/dialog';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1641123721394-9ea744927e35?w=800&q=80',
      category: 'Ants',
      description: 'Ants working together on plant stems'
    },
    {
      url: 'https://images.unsplash.com/photo-1570553613235-412575f3fb6a?w=800&q=80',
      category: 'Ants',
      description: 'Red ants in close-up macro photography'
    },
    {
      url: 'https://images.unsplash.com/photo-1588470045344-4393b295297c?w=800&q=80',
      category: 'Ants',
      description: 'Detailed view of an ant worker'
    },
    {
      url: 'https://images.unsplash.com/photo-1647427062468-74ff21e8934f?w=800&q=80',
      category: 'Bees',
      description: 'Bees on honeycomb showing colony structure'
    },
    {
      url: 'https://images.unsplash.com/photo-1581271064038-11cf1c43a0b2?w=800&q=80',
      category: 'Bees',
      description: 'Multiple bees working on honeycomb'
    },
    {
      url: 'https://images.unsplash.com/photo-1586943760662-9db9594a3a99?w=800&q=80',
      category: 'Wasps',
      description: 'Close-up view of a wasp'
    },
    {
      url: 'https://images.unsplash.com/photo-1504976462146-b05639c41c8c?w=800&q=80',
      category: 'Wasps',
      description: 'Wasp colony on their hive'
    },
    {
      url: 'https://images.unsplash.com/photo-1612960891902-b525d250aa89?w=800&q=80',
      category: 'Termites',
      description: 'Termites in their natural environment'
    }
  ];

  const categories = ['All', 'Ants', 'Bees', 'Wasps', 'Termites'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="gallery-page">
      {/* Header */}
      <section className="gallery-header">
        <div className="container-custom">
          <h1 className="page-title">Gallery</h1>
          <p className="page-subtitle">
            Explore our collection of stunning insect photography
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="gallery-filters">
        <div className="container-custom">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`filter-button ${activeCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="container-custom">
          <div className="gallery-masonry">
            {filteredImages.map((image, index) => (
              <Card 
                key={index} 
                className="gallery-card"
                onClick={() => setSelectedImage(image)}
              >
                <div className="gallery-card-image-wrapper">
                  <img 
                    src={image.url} 
                    alt={image.description}
                    className="gallery-card-image"
                  />
                  <div className="gallery-card-overlay">
                    <span className="gallery-card-category">{image.category}</span>
                    <p className="gallery-card-description">{image.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="gallery-modal">
          {selectedImage && (
            <>
              <button 
                className="modal-close-button"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </button>
              <img 
                src={selectedImage.url} 
                alt={selectedImage.description}
                className="modal-image"
              />
              <div className="modal-info">
                <span className="modal-category">{selectedImage.category}</span>
                <p className="modal-description">{selectedImage.description}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;