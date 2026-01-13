import React from 'react';

const Skills = () => {
    const skillGroups = [
        {
            category: "Data Science & AI",
            skills: [
                "Artificial Intelligence", "YOLO (Object Detection)", "Machine Learning",
                "Deep Learning (CNN)", "LLM RAGs", "Agentic AI",
                "XGBoost", "Random Forest", "Time Series Forecasting",
                "Computer Vision", "Statistics & Probability"
            ]
        },
        {
            category: "Programming & Frameworks",
            skills: ["Python", "SQL", "JavaScript", "FastAPI", "Flask", "Streamlit", "HTML/CSS"]
        },
        {
            category: "Tools & Libraries",
            skills: [
                "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy",
                "Pickle", "Joblib", "NLTK", "OpenCV", "Plotly", "PyDeck"
            ]
        },
        {
            category: "Databases & Cloud",
            skills: ["PostgreSQL", "MySQL", "MongoDB", "AWS S3", "Azure"]
        },
        {
            category: "Data Visualization",
            skills: ["Power BI (DAX)", "Tableau", "Plotly", "Matplotlib", "Seaborn"]
        },
        {
            category: "Domain Knowledge",
            skills: ["Healthcare", "Pharma", "FinTech", "Real Estate", "Content Monetization", "Sports Analytics"]
        },
        {
            category: "Workflow & Communication",
            skills: ["Git/GitHub", "Jupyter", "VS Code", "English (Proficient)", "Tamil (Native)"]
        }
    ];

    return (
        <section id="skills" className="container" style={{ padding: '8rem 0' }}>
            <h2 className="section-title">Technical Expertise</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {skillGroups.map((group, index) => (
                    <div key={index} className="glass" style={{ padding: '2rem', border: '1px solid var(--glass-border)' }}>
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: 'var(--accent-color)', fontWeight: '800' }}>{group.category}</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                            {group.skills.map((skill, sIndex) => (
                                <span key={sIndex} style={{ padding: '0.4rem 0.8rem', background: 'rgba(59, 130, 246, 0.05)', border: '1px solid var(--glass-border)', borderRadius: '2rem', fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '500' }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
