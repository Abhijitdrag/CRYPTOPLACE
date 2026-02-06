import React, { useState } from 'react'
import './Blog.css'

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const categoryInfo = [
    {
      name: 'Market Analysis',
      icon: '📊',
      description: 'Expert insights on price movements, market trends, and trading patterns to help you make informed decisions.',
      color: '#ff6b6b'
    },
    {
      name: 'Education',
      icon: '📚',
      description: 'Learn cryptocurrency fundamentals, blockchain technology, and trading strategies from beginner to advanced levels.',
      color: '#4ecdc4'
    },
    {
      name: 'Technology',
      icon: '⚡',
      description: 'Deep dives into blockchain innovations, protocol upgrades, smart contracts, and emerging crypto technologies.',
      color: '#45b7d1'
    },
    {
      name: 'Investment',
      icon: '💰',
      description: 'Portfolio strategies, risk management, and expert picks to help you build long-term crypto wealth.',
      color: '#96ceb4'
    },
    {
      name: 'Security',
      icon: '🔐',
      description: 'Protect your assets with best practices for wallet security, scam prevention, and safe trading habits.',
      color: '#dda0dd'
    },
    {
      name: 'News',
      icon: '📰',
      description: 'Breaking news, regulatory updates, and major announcements shaping the cryptocurrency landscape.',
      color: '#f9ca24'
    }
  ]

  const posts = [
    {
      id: 1,
      category: 'Market Analysis',
      title: 'Bitcoin Hits New All-Time High: What It Means for Investors',
      excerpt: 'An in-depth look at the factors driving Bitcoin\'s recent surge and what experts predict for the future of the leading cryptocurrency.',
      author: 'Alex Chen',
      date: 'Feb 5, 2026',
      readTime: '5 min read',
      image: '📈'
    },
    {
      id: 2,
      category: 'Market Analysis',
      title: 'Weekly Market Recap: Bulls Take Control',
      excerpt: 'A comprehensive analysis of this week\'s market movements, key support levels, and what to expect next.',
      author: 'Alex Chen',
      date: 'Feb 4, 2026',
      readTime: '6 min read',
      image: '📊'
    },
    {
      id: 3,
      category: 'Education',
      title: 'Understanding DeFi: A Beginner\'s Guide to Decentralized Finance',
      excerpt: 'Learn the basics of DeFi, how it works, and why it\'s revolutionizing the traditional financial system.',
      author: 'Sarah Miller',
      date: 'Feb 3, 2026',
      readTime: '8 min read',
      image: '📚'
    },
    {
      id: 4,
      category: 'Education',
      title: 'What Are NFTs? Complete Guide for Beginners',
      excerpt: 'Everything you need to know about Non-Fungible Tokens, how they work, and why they matter.',
      author: 'Sarah Miller',
      date: 'Feb 2, 2026',
      readTime: '7 min read',
      image: '🎨'
    },
    {
      id: 5,
      category: 'Technology',
      title: 'Ethereum 2.0: Everything You Need to Know About the Upgrade',
      excerpt: 'A comprehensive overview of Ethereum\'s transition to proof-of-stake and its implications for the network.',
      author: 'Mike Johnson',
      date: 'Feb 1, 2026',
      readTime: '6 min read',
      image: '⚡'
    },
    {
      id: 6,
      category: 'Technology',
      title: 'Layer 2 Solutions Explained: Scaling the Blockchain',
      excerpt: 'How Layer 2 solutions like Polygon, Arbitrum, and Optimism are solving blockchain scalability issues.',
      author: 'Mike Johnson',
      date: 'Jan 30, 2026',
      readTime: '8 min read',
      image: '🔗'
    },
    {
      id: 7,
      category: 'Investment',
      title: 'Top 10 Altcoins to Watch in 2026',
      excerpt: 'Our analysts pick the most promising alternative cryptocurrencies that could see significant growth this year.',
      author: 'Emma Wilson',
      date: 'Jan 28, 2026',
      readTime: '7 min read',
      image: '🚀'
    },
    {
      id: 8,
      category: 'Investment',
      title: 'Building a Balanced Crypto Portfolio',
      excerpt: 'Learn how to diversify your cryptocurrency investments for optimal risk-adjusted returns.',
      author: 'Emma Wilson',
      date: 'Jan 27, 2026',
      readTime: '6 min read',
      image: '💼'
    },
    {
      id: 9,
      category: 'Security',
      title: 'How to Secure Your Crypto Wallet: Best Practices',
      excerpt: 'Essential security tips to protect your cryptocurrency investments from hackers and scams.',
      author: 'David Park',
      date: 'Jan 25, 2026',
      readTime: '4 min read',
      image: '🔐'
    },
    {
      id: 10,
      category: 'Security',
      title: 'Common Crypto Scams and How to Avoid Them',
      excerpt: 'Identify and protect yourself from phishing, rug pulls, pump-and-dumps, and other crypto scams.',
      author: 'David Park',
      date: 'Jan 24, 2026',
      readTime: '5 min read',
      image: '🛡️'
    },
    {
      id: 11,
      category: 'News',
      title: 'Major Banks Now Offering Crypto Services to Customers',
      excerpt: 'Traditional financial institutions are embracing cryptocurrency. Here\'s what it means for mainstream adoption.',
      author: 'Lisa Brown',
      date: 'Jan 22, 2026',
      readTime: '5 min read',
      image: '🏦'
    },
    {
      id: 12,
      category: 'News',
      title: 'New Crypto Regulations: What You Need to Know',
      excerpt: 'Breaking down the latest regulatory developments and their impact on crypto traders and investors.',
      author: 'Lisa Brown',
      date: 'Jan 20, 2026',
      readTime: '6 min read',
      image: '⚖️'
    }
  ]

  const categories = ['All', 'Market Analysis', 'Education', 'Technology', 'Investment', 'Security', 'News']

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory)

  return (
    <div className='blog'>
      <div className="blog-header">
        <h1>CryptoPlace Blog</h1>
        <p>Stay updated with the latest news, insights, and educational content about cryptocurrency</p>
      </div>

      <div className="category-info-grid">
        {categoryInfo.map((cat, index) => (
          <div 
            className="category-info-card" 
            key={index}
            onClick={() => setActiveCategory(cat.name)}
          >
            <div className="category-info-icon" style={{background: `${cat.color}20`}}>
              {cat.icon}
            </div>
            <div className="category-info-content">
              <h4>{cat.name}</h4>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="blog-categories">
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <article className="blog-card" key={post.id}>
            <div className="blog-card-image">{post.image}</div>
            <div className="blog-card-content">
              <span className="blog-category">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <span className="author">{post.author}</span>
                <span className="dot">•</span>
                <span className="date">{post.date}</span>
                <span className="dot">•</span>
                <span className="read-time">{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="blog-newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest crypto news and insights delivered to your inbox weekly</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Blog
