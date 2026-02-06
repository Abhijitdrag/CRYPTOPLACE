import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Pricing.css'

const Pricing = () => {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const handleFreeSelect = () => {
    setShowModal(true)
    setTimeout(() => {
      setShowModal(false)
      navigate('/')
    }, 3000)
  }

  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      period: '',
      description: 'Perfect for beginners exploring crypto',
      features: [
        'Real-time price tracking',
        'Top 100 cryptocurrencies',
        'Basic charts',
        'Email support',
        '3 currency options'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: '/month',
      description: 'For serious crypto enthusiasts',
      features: [
        'Everything in Basic',
        'Unlimited cryptocurrencies',
        'Advanced charts & indicators',
        'Price alerts',
        'Portfolio tracking',
        'Priority support'
      ],
      buttonText: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$29.99',
      period: '/month',
      description: 'For teams and professionals',
      features: [
        'Everything in Pro',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced analytics',
        'White-label options'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <div className='pricing'>
      <div className="pricing-header">
        <h1>Simple Pricing</h1>
        <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={index}>
            {plan.popular && <span className="popular-badge">Most Popular</span>}
            <h3>{plan.name}</h3>
            <div className="price">
              <span className="amount">{plan.price}</span>
              <span className="period">{plan.period}</span>
            </div>
            <p className="plan-description">{plan.description}</p>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>✓ {feature}</li>
              ))}
            </ul>
            <button 
              className={plan.popular ? 'btn-primary' : 'btn-secondary'}
              onClick={plan.price === 'Free' ? handleFreeSelect : undefined}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      <div className="pricing-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>Can I cancel anytime?</h4>
            <p>Yes, you can cancel your subscription at any time with no hidden fees.</p>
          </div>
          <div className="faq-item">
            <h4>Is there a free trial?</h4>
            <p>Pro plan comes with a 14-day free trial. No credit card required.</p>
          </div>
          <div className="faq-item">
            <h4>What payment methods do you accept?</h4>
            <p>We accept all major credit cards, PayPal, and cryptocurrency payments.</p>
          </div>
          <div className="faq-item">
            <h4>Can I switch plans later?</h4>
            <p>Absolutely! You can upgrade or downgrade your plan at any time.</p>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon">🎉</div>
            <h2>Congratulations!</h2>
            <p>You've successfully selected the Free plan.</p>
            <p className="modal-redirect">Redirecting to home page...</p>
            <div className="modal-loader"></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Pricing
