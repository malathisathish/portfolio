import React from 'react';

const About = () => {
    return (
        <section id="about" className="container" style={{ padding: '8rem 0' }}>
            <h2 className="section-title">Professional Narrative</h2>
            <div className="glass" style={{ padding: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                <div>
                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-color)', fontSize: '1.8rem' }}>🌱 Career Evolution</h3>
                    <p style={{ color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: '600', marginBottom: '2rem', fontStyle: 'italic', lineHeight: '1.4' }}>
                        “The distance between dreams and reality is bridged by deliberate action.”
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        My career reflects a conscious evolution from **Senior Staff Nurse** to **Data Scientist & AI Engineer**, driven by curiosity, purpose, and impact. Working in high-pressure clinical environments strengthened my ability to interpret complex signals, act decisively, and rely on evidence over assumptions — a mindset that now defines my approach to data and artificial intelligence.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        This transition is not a departure from healthcare, but an expansion of it. I aim to fuse clinical insight with computational intelligence, transforming biological and operational complexity into intelligent systems that support better decisions, outcomes, and innovation.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Today, I focus on designing AI-driven solutions that are not only technically sound, but human-aware, explainable, and actionable, especially within healthcare, life sciences, and pharma-tech domains.
                    </p>
                </div>
                <div>
                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-color)', fontSize: '1.8rem' }}>🧠 Core Intelligence Focus</h3>
                    <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                        {[
                            "Artificial Intelligence & Agentic Workflows",
                            "Machine Learning (Supervised, Unsupervised & Ensemble Methods)",
                            "Deep Learning (CNNs, RNNs, Transformers)",
                            "Generative AI & LLM-Based Architectures",
                            "Natural Language Processing (NLP) & Text Intelligence",
                            "Computer Vision & Visual Pattern Recognition",
                            "Time Series Analysis & Predictive Modeling",
                            "Healthcare Analytics & Clinical Data Intelligence",
                            "Pharma-Tech & Bioinformatics Applications",
                            "Data Engineering & Feature Pipelines",
                            "Model Optimization & Performance Evaluation",
                            "Explainable AI (XAI) & Responsible AI",
                            "AI Deployment & Scalable Inference Systems"
                        ].map((focus, i) => (
                            <li key={i} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem', fontSize: '1.05rem' }}>
                                <span style={{ color: 'var(--accent-secondary)', fontSize: '1.2rem', lineHeight: '1.5' }}>▹</span>
                                <span>{focus}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
