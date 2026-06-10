import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Info } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = 4;

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slidesCount - 1 ? 0 : prev + 1));
    }, 3000); // changes every 3 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slidesCount - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesCount - 1 : prev - 1));
  };

  const slideBaseStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: 'opacity 0.8s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '180px', borderRadius: '20px', overflow: 'hidden', marginBottom: '32px', boxShadow: '0 8px 24px rgba(15,23,42,0.1)' }}>
      
      {/* Slide 1: Static Image 1 */}
      <div style={{ ...slideBaseStyle, opacity: currentSlide === 0 ? 1 : 0, zIndex: currentSlide === 0 ? 10 : 1, background: '#f57c00' }}>
        <img 
          src="/slide1.png" // User's first attached image should be saved here
          alt="BPIS Banner 1" 
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      {/* Slide 2: Static Image 2 */}
      <div style={{ ...slideBaseStyle, opacity: currentSlide === 1 ? 1 : 0, zIndex: currentSlide === 1 ? 10 : 1, background: '#fff' }}>
        <img 
          src="/slide2.jpeg" // User's second attached image should be saved here
          alt="BPIS Governance Challenges" 
          style={{ width: '500px', height: '150px', objectFit: 'contain' }}
        />
      </div>

      {/* Slide 3: Theme background with link to Overview */}
      <div style={{ 
        ...slideBaseStyle, 
        opacity: currentSlide === 2 ? 1 : 0, 
        zIndex: currentSlide === 2 ? 10 : 1, 
        background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)', 
        color: '#fff', 
        flexDirection: 'column', 
        textAlign: 'center',
        padding: '12px'
      }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(234,88,12,0.15) 0%, transparent 60%)', borderRadius: '50%' }}></div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 900, margin: '0 0 6px 0', zIndex: 2 }}>Data is Scattered. Decisions are Delayed.</h2>
        <p style={{ fontSize: '0.85rem', color: '#cbd5e1', maxWidth: '500px', margin: '0 0 12px 0', zIndex: 2 }}>
          Experience the national demographic perspective through our real-time district tracking and decision intelligence platform.
        </p>
        <Link to="/overview" style={{ 
          display: 'inline-flex', alignItems: 'center', gap: '6px', 
          backgroundColor: '#ea580c', color: '#fff', padding: '8px 20px', 
          borderRadius: '999px', textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem',
          boxShadow: '0 4px 10px rgba(234, 88, 12, 0.4)', transition: 'transform 0.2s', zIndex: 2
        }}>
          Explore Dashboard <ArrowRight size={14} />
        </Link>
      </div>

      {/* Slide 4: Clickable About Us Slide */}
      <Link to="/about-us" style={{ 
        ...slideBaseStyle, 
        opacity: currentSlide === 3 ? 1 : 0, 
        zIndex: currentSlide === 3 ? 10 : 1, 
        background: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)', 
        color: '#fff', 
        flexDirection: 'column', 
        textAlign: 'center',
        padding: '12px',
        textDecoration: 'none',
        cursor: 'pointer' 
      }}>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 60%)', borderRadius: '50%' }}></div>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '8px', borderRadius: '50%', marginBottom: '6px', zIndex: 2, display: 'flex' }}>
            <Info size={20} color="#fff" strokeWidth={2} />
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 900, margin: '0 0 4px 0', zIndex: 2 }}>About Us</h2>
        <p style={{ fontSize: '0.85rem', color: '#e2e8f0', maxWidth: '450px', zIndex: 2, fontWeight: 500, margin: '0' }}>
          Discover the vision behind BPIS 2026 and how we're transforming administrative governance.
        </p>
        <div style={{ marginTop: '8px', fontWeight: 700, color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '6px', zIndex: 2, fontSize: '0.85rem' }}>
            Click to read more <ArrowRight size={14} />
        </div>
      </Link>

      {/* Navigation Controls */}
      <button onClick={prevSlide} style={{ position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%)', zIndex: 20, background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
        <ChevronLeft size={24} color="#0f172a" />
      </button>

      <button onClick={nextSlide} style={{ position: 'absolute', top: '50%', right: '20px', transform: 'translateY(-50%)', zIndex: 20, background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
        <ChevronRight size={24} color="#0f172a" />
      </button>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 20 }}>
        {[0, 1, 2, 3].map((idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            style={{ 
              width: currentSlide === idx ? '24px' : '8px', 
              height: '8px', 
              borderRadius: '999px', 
              background: currentSlide === idx ? '#ea580c' : 'rgba(255,255,255,0.5)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
