import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="container" style={{ padding: '8rem 0' }}>
            <div className="glass" style={{ padding: '4rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Interested in collaborating?</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                    I'm always open to discussing data-driven projects, healthcare innovations, or networking with fellow tech enthusiasts.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <a href="mailto:malathisathish2228@gmail.com" className="btn-primary" style={{ textDecoration: 'none' }}>Email Me</a>
                    <a href="https://www.linkedin.com/in/malathi-sathish-016a03354" target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '0.75rem 1.5rem', textDecoration: 'none', color: 'white', fontWeight: '600' }}>LinkedIn</a>
                    <a href="https://github.com/malathisathish" target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '0.75rem 1.5rem', textDecoration: 'none', color: 'white', fontWeight: '600' }}>GitHub</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
