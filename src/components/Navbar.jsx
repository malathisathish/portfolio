import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        padding: scrolled ? '1rem 0' : '1.5rem 0',
        background: scrolled ? 'rgba(3, 7, 18, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none'
    };

    const linkStyle = {
        color: 'var(--text-primary)',
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: '500',
        transition: 'color 0.3s'
    };

    return (
        <nav style={navStyle}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#home" style={{ ...linkStyle, fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.02em' }}>MY.</a>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <a href="#about" style={linkStyle}>About</a>
                    <a href="#experience" style={linkStyle}>Experience</a>
                    <a href="#projects" style={linkStyle}>Projects</a>
                    <a href="#skills" style={linkStyle}>Skills</a>
                    <a href="#contact" className="btn-primary" style={{ ...linkStyle, padding: '0.5rem 1rem' }}>Hire Me</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
