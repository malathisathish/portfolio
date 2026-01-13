import React, { useState } from 'react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Stock Price Prediction System",
            tech: "ML | Python | Streamlit | Yahoo Finance",
            github: "https://github.com/malathisathish",
            desc: "Advanced ML application for predicting stock prices using Random Forest, Gradient Boosting, and technical analysis indicators.",
            fullDetails: `
### 📈 Project Overview
A comprehensive machine learning application for predicting stock prices using advanced algorithms and technical analysis.

### 🚀 Key Features
- **Real-time Data**: Live stock data integration from Yahoo Finance.
- **ML Models**: Random Forest, Gradient Boosting, SVR, and Neural Networks comparison.
- **Technical Analysis**: 15+ indicators including SMA, EMA, MACD, RSI, and Bollinger Bands.
- **Forecasting**: Multi-day predictions (1-14 days) with confidence intervals.

### 💡 Technical Implementation
- **Data Engineering**: Sequential pattern recognition using lookback windows and normalization.
- **Performance**: Streamlit caching for efficient real-time predictions without retraining.
- **Evaluation**: R², RMSE, and MAE metrics with cross-validation.
            `
        },
        {
            title: "AdVision AI: Brand Detection",
            tech: "YOLO | YOLO11 | Python | PostgreSQL",
            github: "https://github.com/malathisathish",
            desc: "Intelligent brand detection system for cricket broadcasts using computer vision to track logo exposure and ROI.",
            fullDetails: `
### 🎯 AdVision AI Overview
End-to-end AI-powered brand detection system designed to analyze sponsor exposure in sports broadcasts.

### 🤖 Core Features
- **AI Detection**: 95.3% mAP@50 accuracy using YOLO-based vision for 24+ brand classes.
- **Real-time Processing**: Optimized pipeline delivering 30 FPS detection on video frames.
- **Data Management**: PostgreSQL backend storing 55,000+ detections with <100ms query response.

### 📊 Business Impact
- **ROI Measurement**: Automated brand performance dashboards and exposure tracking.
- **Efficiency**: 92% reduction in manual monitoring costs for broadcasting agencies.
            `
        },
        {
            title: "PhonePe Transaction Dashboard",
            tech: "PostgreSQL | Python | Streamlit | Plotly",
            github: "https://github.com/malathisathish",
            desc: "Interactive analytical dashboard exploring trends from the PhonePe Pulse dataset across Indian states and districts.",
            fullDetails: `
### 🧠 Problem Statement
Decoding digital financial patterns in India to understand transaction dynamics and user engagement.

### 🗺️ Features
- **Geographic Insights**: Interactive 2D Choropleth maps visualizing transaction value by state and district.
- **User Analytics**: Mapping brand penetration (Android vs iOS) and new user registration trends.
- **Infrastructure Scaling**: Identifying transaction overload zones to guide server scaling.

### 🛠️ Tech Stack
- **Database**: SQL querying via SQLAlchemy and PostgreSQL.
- **Visualization**: Rich interactive charts using Plotly and PyDeck.
            `
        },
        {
            title: "Luxury Housing Sales Analysis",
            tech: "Python | Power BI | SQL | DAX",
            github: "https://github.com/malathisathish",
            desc: "Data pipeline and BI dashboard analyzing luxury property patterns, buyer behavior, and market performance in Bengaluru.",
            fullDetails: `
### 🏠 Project Overview
Analytical dashboard empowering developers and investors with insights on luxury property sales and market performance.

### 📊 Key Insights
- **Buyer Behavior**: Segmenting NRI vs Domestic preferences and Investor vs End-user patterns.
- **Market Dynamics**: Correlation between locality infrastructure scores and property booking rates.
- **Infrastructure Impact**: Analysis showing 35% higher conversion for properties with <25 min traffic time.

### 🧮 Implementation
- **Data Pipeline**: 100,000+ records processed via Python and stored in a Star Schema SQL warehouse.
- **Advanced BI**: Custom DAX measures for real-time conversion efficiency and revenue tracking.
            `
        },
        {
            title: "Electricity Demand Forecasting",
            tech: "LSTM | ARIMA | Python | FastAPI",
            github: "https://github.com/malathisathish",
            desc: "End-to-end forecasting solution for intelligent power grid management using deep learning.",
            fullDetails: `
### ⚡ Executive Summary
Developed a robust forecasting engine to predict electricity demand with high accuracy.

### 🤖 Modeling Approach
- **Hybrid Methods**: Integration of LSTM for non-linear patterns and ARIMA for seasonal trends.
- **Predictive Power**: Managed grid load fluctuations effectively using high-precision probability distributions.

### 🌐 Deployment
- **Scalability**: High-performance API via FastAPI with a React-based live telemetry dashboard.
            `
        },
        {
            title: "Fish Species Classification",
            tech: "CNN | MobileNet | TensorFlow | Keras",
            github: "https://github.com/malathisathish",
            desc: "Deep learning system for multiclass fish species classification achieving 99.9% accuracy.",
            fullDetails: `
### 🐟 Project Overview
Implemented a multiclass classification system comparing various CNN architectures for marine research.

### 📈 Results
- **Peak Performance**: MobileNet achieved 99.9% accuracy with the most efficient model size.
- **Comparative Analysis**: Evaluated VGG16, ResNet50, InceptionV3, and a Custom CNN from scratch.

### 🚀 Innovation
- **Deployment**: Integrated with Streamlit for real-time predictions via drag-and-drop image uploads.
            `
        },
        {
            title: "Content Monetization Modeler",
            tech: "Streamlit | XGBoost | ML | Python",
            github: "https://github.com/malathisathish",
            desc: "Predictive dashboard estimating YouTube Ad Revenue based on engagement metrics and metadata.",
            fullDetails: `
### 📊 Project Goal
Empowering creators and businesses with data-driven insights into digital content monetization.

### 🤖 ML Strategy
- **Ensemble Models**: Trained Random Forest and XGBoost to predict revenue with high precision.
- **Feature Engineering**: Engineered engagement rates, watch completion %, and geographic CPM factors.

### 💡 Creator Insights
- **CPM Detection**: Identified that educational content and TV/Desktop device usage yield significantly higher revenue.
            `
        },
        {
            title: "Amazon Music Clustering",
            tech: "K-Means | DBSCAN | Cosine Similarity",
            github: "https://github.com/malathisathish",
            desc: "Intelligent recommendation system using clustering algorithms on 95,000+ Amazon Music tracks.",
            fullDetails: `
### 🎵 Recommendation Strategy
Identifying meaningful clusters of songs based on audio features (danceability, energy, acousticness) to enhance discovery.

### 🏗️ Algorithms
- **Multi-Clustering**: Applied K-Means, DBSCAN, and Hierarchical clustering for diverse grouping.
- **Content-Based Filtering**: Personalized recommendations using Cosine Similarity on song-level metadata.

### 📈 Scale
- **Dataset**: Processed 95,837 tracks from the early 20th century to 2020.
            `
        }
    ];

    return (
        <section id="projects" className="container" style={{ padding: '8rem 0' }}>
            <h2 className="section-title">High-Impact Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {projects.map((project, index) => (
                    <div key={index} className="glass" style={{ padding: '2.5rem', transition: 'transform 0.3s ease, border-color 0.3s ease', display: 'flex', flexDirection: 'column', border: '1px solid var(--glass-border)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = 'var(--accent-color)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}>
                        <div style={{ padding: '0.4rem 0.8rem', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid var(--accent-color)', borderRadius: '0.5rem', marginBottom: '1.5rem', alignSelf: 'flex-start' }}>
                            <span style={{ color: 'var(--accent-color)', fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase' }}>Selected Work</span>
                        </div>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem', fontWeight: '800' }}>{project.title}</h3>
                        <p style={{ color: 'var(--accent-secondary)', fontSize: '0.8rem', fontWeight: '700', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{project.tech}</p>
                        <p style={{ color: 'var(--text-primary)', marginBottom: '2rem', fontSize: '0.95rem', opacity: 0.9, lineHeight: '1.6' }}>{project.desc}</p>

                        <div style={{ marginTop: 'auto' }}>
                            <button onClick={() => setSelectedProject(project)} style={{ background: 'var(--gradient-primary)', border: 'none', color: 'white', fontWeight: '700', padding: '0.8rem 1.5rem', borderRadius: '0.5rem', cursor: 'pointer', transition: 'all 0.3s', width: '100%' }}>
                                EXPLORE DETAILS
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(3, 7, 18, 0.98)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', backdropFilter: 'blur(15px)' }}>
                    <div className="glass" style={{ maxWidth: '1000px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '4rem', position: 'relative', border: '1px solid var(--accent-color)', borderRadius: '1.5rem' }}>
                        <button onClick={() => setSelectedProject(null)} style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'white', fontSize: '2.5rem', cursor: 'pointer', opacity: 0.5 }}>×</button>

                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ marginBottom: '0.5rem', fontSize: '2.5rem', fontWeight: '800' }}>{selectedProject.title}</h2>
                            <p style={{ color: 'var(--accent-color)', fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase' }}>{selectedProject.tech}</p>
                        </div>

                        <div className="project-details-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            {selectedProject.fullDetails.split('\n').map((line, i) => {
                                if (line.startsWith('###')) {
                                    return <h3 key={i} style={{ color: 'white', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem' }}>{line.replace('### ', '')}</h3>
                                }
                                if (line.startsWith('- **')) {
                                    const parts = line.split('**:');
                                    return <p key={i} style={{ marginBottom: '0.75rem' }}><span style={{ color: 'var(--accent-secondary)', fontWeight: '700' }}>{parts[0].replace('- **', '')}</span>: {parts[1]}</p>
                                }
                                return <p key={i} style={{ marginBottom: '0.75rem' }}>{line}</p>
                            })}
                        </div>

                        <div style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem' }}>
                            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none', padding: '1rem 2.5rem' }}>View GitHub Repository</a>
                            <button onClick={() => setSelectedProject(null)} className="glass" style={{ padding: '1rem 2.5rem', color: 'white', cursor: 'pointer' }}>Close Case Study</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
