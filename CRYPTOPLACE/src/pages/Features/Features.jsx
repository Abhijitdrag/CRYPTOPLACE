import React from 'react'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: '📊',
      title: 'Real-Time Price Tracking',
      description: 'Get instant updates on cryptocurrency prices with live market data from trusted sources.'
    },
    {
      icon: '📈',
      title: 'Interactive Charts',
      description: 'Visualize price trends with detailed historical charts and technical indicators.'
    },
    {
      icon: '🔍',
      title: 'Advanced Search',
      description: 'Quickly find any cryptocurrency from thousands of coins with our powerful search feature.'
    },
    {
      icon: '💱',
      title: 'Multi-Currency Support',
      description: 'View prices in USD, EUR, INR and more currencies for global accessibility.'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Access CryptoPlace seamlessly on any device - desktop, tablet, or mobile.'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Your data is protected with industry-standard security measures.'
    }
  ]

  return (
    <div className='features'>
      <div className="features-header">
        <h1>Our Features</h1>
        <p>Discover what makes CryptoPlace the best platform for tracking cryptocurrencies</p>
      </div>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="features-cta">
        <h2>Ready to Start?</h2>
        <p>Join thousands of traders who trust CryptoPlace for their crypto journey</p>
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default Features
