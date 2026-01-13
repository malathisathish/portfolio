import React from 'react';

const Experience = () => {
    const experiences = [
        {
            title: "Data Science Specialization",
            company: "GUVI (Learner & Scholar)",
            date: "06.2025 - 10.2025",
            description: "Intensive training in Data Science, Machine Learning, and AI. Developed hands-on projects including PhonePe visualization and electricity demand forecasting.",
            type: "tech"
        },
        {
            title: "Senior Staff Nurse",
            company: "Rela Institute",
            date: "01.2021 - 12.2023",
            description: "Managed critical healthcare operations, demonstrating high-level analytical and leadership skills in clinical research and patient care.",
            type: "clinical"
        }
    ];

    const education = [
        {
            degree: "Certified Data Scientist",
            school: "HCL GUVI IITM",
            date: "2025"
        },
        {
            degree: "B.Sc Nursing",
            school: "Sree Sastha College of Nursing",
            date: "2020"
        }
    ];

    return (
        <section id="experience" className="container" style={{ padding: '8rem 0' }}>
            <h2 className="section-title">Milestones</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                <div>
                    <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        Professional Path
                    </h3>
                    {experiences.map((exp, index) => (
                        <div key={index} className="glass" style={{ padding: '1.5rem', marginBottom: '1.5rem', borderLeft: `4px solid ${exp.type === 'tech' ? 'var(--accent-color)' : 'var(--accent-secondary)'}` }}>
                            <h4 style={{ color: 'var(--text-primary)' }}>{exp.title}</h4>
                            <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{exp.company} | {exp.date}</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{exp.description}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <h3 style={{ marginBottom: '2rem' }}>Academic Foundation</h3>
                    {education.map((edu, index) => (
                        <div key={index} className="glass" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                            <h4 style={{ color: 'var(--text-primary)' }}>{edu.degree}</h4>
                            <p style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem' }}>{edu.school}</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{edu.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
