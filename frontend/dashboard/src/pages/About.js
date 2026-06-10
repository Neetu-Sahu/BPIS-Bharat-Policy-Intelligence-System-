import React from 'react';
import { ShieldCheck, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <div style={{ padding: '40px 28px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'inherit' }}>
      <div className="gov-card" style={{ padding: '48px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '24px' }}>
          About BPIS 2026
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#64748b', lineHeight: '1.8', margin: '0 auto 48px', maxWidth: '800px' }}>
          The Bharat Policy Intelligence System (BPIS) is India's first AI-powered policy intelligence platform designed for real-time administrative oversight. Our mission is to empower smarter governance through decision intelligence and data-driven resource allocation.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', textAlign: 'left' }}>
          
          <div style={{ padding: '24px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
            <div style={{ width: '48px', height: '48px', background: '#fff7ed', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: '#ea580c' }}>
              <ShieldCheck size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>Transparency</h3>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>
              Providing clear, accessible insights into policy execution and demographic needs across all districts.
            </p>
          </div>

          <div style={{ padding: '24px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
            <div style={{ width: '48px', height: '48px', background: '#fff7ed', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: '#ea580c' }}>
              <Target size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>Precision Targeting</h3>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>
              Utilizing AI algorithms to identify failing metrics and automatically surface relevant government schemes.
            </p>
          </div>

          <div style={{ padding: '24px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
            <div style={{ width: '48px', height: '48px', background: '#fff7ed', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: '#ea580c' }}>
              <Users size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>Citizen Centric</h3>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>
              Focused entirely on improving grassroots indicators like literacy, health, and urban management for citizens.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
