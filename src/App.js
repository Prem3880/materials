import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const materials = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop',
      name: 'Wedding Decoration',
      type: 'sale',
      price: 5000,
      description: 'Beautiful wedding stage decoration with flowers'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop',
      name: 'Sound System',
      type: 'rent',
      price: 2500,
      description: 'Professional sound system for events'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop',
      name: 'Baloons',
      type: 'rent',
      price: 50,
      description: 'Elegant chairs for wedding ceremonies'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
      name: 'Lighting Setup',
      type: 'rent',
      price: 3000,
      description: 'Professional lighting for wedding functions'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400&h=300&fit=crop',
      name: 'Catering Equipment',
      type: 'rent',
      price: 1500,
      description: 'Complete catering setup for events'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop',
      name: 'Flower Arrangements',
      type: 'sale',
      price: 2000,
      description: 'Fresh flower arrangements for decoration'
    }
  ];

  const openImageModal = (material) => {
    setSelectedImage(material);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const scrollToFooter = () => {
    document.querySelector('.footer-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <div className="header-section">
        <div className="contact-btn" onClick={scrollToFooter}>
          <span className="contact-text">Contact Info</span>
          <span className="arrow">☎️ ↓</span>
        </div>
        <div className="header-overlay"></div>
        <div className="container text-center py-4 position-relative header-content">
          <h1 className="main-heading">BALU FUNCTIONAL MATERIALS</h1>
          <p className="header-subtitle">Your Perfect Wedding & Event Partner</p>
        </div>
      </div>
      
      <div className="content-section">
        <div className="container py-5">
          <div className="row g-4">
            {materials.map((material) => (
              <div key={material.id} className="col-6 col-lg-4">
                <div className="card material-card h-100">
                  <div className="card-img-container" onClick={() => openImageModal(material)}>
                    <img 
                      src={material.image} 
                      className="card-img-top material-image" 
                      alt={material.name}
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">{material.name}</h4>
                    <p className="card-description">{material.description}</p>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className={`badge ${material.type === 'rent' ? 'bg-warning' : 'bg-success'} fs-6 px-3 py-2`}>
                        {material.type === 'rent' ? 'For Rent' : 'For Sale'}
                      </span>
                    </div>
                    <div className="text-center">
                      <h3 className="price-text mb-0">
                        ₹{material.price}{material.type === 'rent' ? '/day' : ''}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeImageModal}>&times;</span>
            <img src={selectedImage.image} alt={selectedImage.name} className="modal-image" />
            <div className="modal-info">
              <h3>{selectedImage.name}</h3>
              <p>{selectedImage.description}</p>
              <h4 className="text-success">₹{selectedImage.price}{selectedImage.type === 'rent' ? '/day' : ''}</h4>
            </div>
          </div>
        </div>
      )}      

      <footer className="footer-section">
        <div className="container text-center py-3">
          <p className="footer-text">For any negotiations, contact admin: 9876543210</p>
          <p className="footer-text">Admin Name: BALU</p>
          <p className="footer-text">Location: Tirupati, MR PALLI, 3 rd road</p>
          
        </div>
      </footer>
    </div>
  );
}

export default App;
