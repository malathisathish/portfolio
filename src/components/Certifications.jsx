import React from 'react';

const Certifications = () => {
    const certs = [
        {
            name: "Certified Data Science Professional",
            org: "GUVI IITM Research Park",
            date: "Issued 2025",
            icon: "🧬"
        },
        {
            name: "Advanced Machine Learning & AI",
            org: "Zen Class - GUVI",
            date: "Issued 2025",
            icon: "🤖"
        },
        {
            name: "Data Visualization Specialist",
            org: "GUVI Certification",
            date: "Issued 2025",
            icon: "📊"
        },
        {
            name: "Big Data & SQL Expert",
            org: "HCL GUVI",
            date: "Issued 2025",
            icon: "💾"
        },
        {
            name: "Bachelor of Science in Nursing",
            org: "Sree Sastha College of Nursing",
            date: "Issued 2020",
            icon: "🏥"
        }
    ];

    return (
        <section id="certifications" className="container" style={{ padding: '8rem 0' }}>
            <h2 className="section-title">Certifications & Honors</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {certs.map((cert, index) => (
                    <div key={index} className="glass" style={{ padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{cert.icon}</div>
                        <h3 style={{ marginBottom: '0.75rem', fontSize: '1.3rem' }}>{cert.name}</h3>
                        <p style={{ color: 'var(--accent-color)', fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>{cert.org}</p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{cert.date}</p>
                    </div>
                ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                <a href="https://www.linkedin.com/in/malathi-sathish-016a03354/" target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '1rem 2rem', textDecoration: 'none', color: 'white', border: '1px solid var(--accent-secondary)' }}>
                    Verify all Credentials on LinkedIn
                </a>
            </div>
        </section>
    );
};

export default Certifications;
