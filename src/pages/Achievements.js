import React, { useState } from 'react';
import '../styles/Achievements.css';

function Achievements() {
  const [activeCategory, setActiveCategory] = useState('all');

  const achievements = [
    {
      id: 1,
      category: 'project',
      date: '2025',
      title: 'Portfolio Website',
      description: 'Designed and developed a responsive portfolio website showcasing my projects and skills.',
      icon: '💻'
    },
    {
      id: 2,
      category: 'career',
      date: '2024',
      title: 'Freelance Project Management',
      description: 'Started a Discord server where I help teach visual scripting and game development on Unreal Engine 5 to beginners.',
      icon: '🎓'
    },
    {
      id: 3,
      category: 'career',
      date: '2024',
      title: 'Freelance Web Development',
      description: 'Working with private clients to develop their websites and web applications using React, Node.js, and MongoDB.',
      icon: '🎓'
    },
    {
      id: 4,
      category: 'career',
      date: '2024',
      title: 'Career Transition',
      description: 'Successfully transitioned from maintenance management to software development.',
      icon: '🚀'
    },
    {
      id: 5,
      category: 'education',
      date: '2024',
      title: 'Passed the General Coding Assessment',
      description: 'Passed the General Coding Assessment on my second attempt',
      icon: '⚡'
    },
    {
      id: 6,
      category: 'education',
      date: '2023',
      title: 'GitHub Mastery',
      description: 'Achieved proficiency in version control and collaborative development using Git and GitHub.',
      icon: '📚'
    }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'education', label: 'Education' },
    { id: 'project', label: 'Projects' },
    { id: 'career', label: 'Career' }
  ];

  const filteredAchievements = activeCategory === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === activeCategory);

  return (
    <div className="achievements-section">
      <h1 className="section-title">My Journey</h1>
      
      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="achievements-container">
        <div className="timeline">
          {filteredAchievements.map((achievement, index) => (
            <div 
              key={achievement.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content">
                <div className="timeline-icon">{achievement.icon}</div>
                <div className="timeline-date">{achievement.date}</div>
                <h2>{achievement.title}</h2>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements; 