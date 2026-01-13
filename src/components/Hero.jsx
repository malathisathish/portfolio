import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 0 80px' }}>
            <div className="hero-content">
                <div style={{ marginBottom: '2rem', position: 'relative', display: 'inline-block' }}>
                    <div style={{ width: '220px', height: '220px', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--accent-color)', boxShadow: '0 0 50px rgba(59, 130, 246, 0.4)' }}>
                        <img src="/profile.png" alt="Malathi Y" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
                    </div>
                </div>
                <span style={{ color: 'var(--accent-color)', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
                    Data Scientist / AI/ML Engineer
                </span>
                <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem', lineHeight: '1', fontWeight: '800' }}>
                    Malathi Y
                </h1>
                <p style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2.5rem', fontWeight: '400' }}>
                    Engineering Intelligence. Shaping the Future of Data & Healthcare.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <a href="#projects" className="btn-primary" style={{ textDecoration: 'none', padding: '1rem 2rem' }}>Explore Projects</a>
                    <a href="#contact" className="glass" style={{ padding: '1rem 2rem', textDecoration: 'none', color: 'white', fontWeight: '600' }}>Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
