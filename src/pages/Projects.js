import React, { useState } from 'react';
import './Projects.css';
import combatRobotImage from './combat_robot_test_bench.png';
import shmProjectImage from './shm_project_image.png';
import selfBalancingBotImage from './self_balancing_bot_in_progress.png';

function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 3,
      title: 'MeltyBrain Combat Robot',
      category: 'Robotics',
      image: combatRobotImage,
      description: 'A competition-grade combat robot designed and built for FROST Robotics team, featuring advanced gyroscope-based control systems.',
      longDescription: 'Co-designed and built a combat robot as part of a 5-person team using Fusion360 for mechanical design and Arduino for control systems. The robot features precise differential drive control with integrated gyroscope and motor encoders for improved rotational stability and maneuverability during competition scenarios.',
      technologies: ['Fusion360', 'Arduino', 'C++', 'Gyroscope Integration', 'Motor Control'],
      liveUrl: null,
      githubUrl: null,
      features: [
        'Gyroscope-based stabilization system',
        'Precise differential drive control',
        'Motor encoder feedback integration',
        'Competition-grade mechanical design',
        'Improved rotational stability',
        'Enhanced maneuverability for combat scenarios'
      ],
      status: 'completed'
    },
    {
      id: 4,
      title: '6TiSCH Remote Structural Health Monitoring',
      category: 'Research',
      image: shmProjectImage,
      description: 'Research project developing IoT sensor networks for infrastructure monitoring using wireless communication and cloud computing.',
      longDescription: 'Conducting long-term research on infrastructure monitoring at Connecticut Transportation Institute. Designed and maintained a remote IoT network with AWS backend and 6TiSCH local wireless communication protocol. Contributing to publications on intelligent sensing systems and IoT network architectures.',
      technologies: ['Arduino', 'Raspberry Pi', 'AWS', '6TiSCH', 'IoT', 'Python', 'Sensor Networks'],
      liveUrl: null,
      githubUrl: null,
      features: [
        'Real-time sensor data collection',
        'AWS cloud backend integration',
        '6TiSCH wireless communication protocol',
        'Long-term monitoring capabilities',
        'Intelligent sensing systems',
        'Research publication contributions'
      ],
      status: 'completed'
    },
    {
      id: 2,
      title: 'Personal Portfolio Website',
      category: 'Web Development',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8Y2lyY2xlIGN4PSIzMDAiIGN5PSI2MCIgcj0iNDAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxODAiIHI9IjMwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+CjxyZWN0IHg9IjEwMCIgeT0iMTAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiByeD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+CjxyZWN0IHg9IjEyMCIgeT0iMTIwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiByeD0iNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIi8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSI0IiByeD0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjIpIi8+CjxyZWN0IHg9IjUwIiB5PSI3MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSI0IiByeD0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE1KSIvPgo8dGV4dCB4PSIyMDAiIHk9IjIwNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjgpIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5KaW1teSBQYWRpbGxhPC90ZXh0Pgo8dGV4dCB4PSIyMDAiIHk9IjIyNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuNikiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBvcnRmb2xpbyBXZWJzaXRlPC90ZXh0Pgo8ZGVmcz4KPHN0eWxlPi5jbGF1ZGUtYnJhbmRpbmd7Zm9udC1mYW1pbHk6QXJpYWwsc2Fucy1zZXJpZjt9PC9zdHlsZT4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2MTM2ZmYiLz4KPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiM0Yzc5ZmYiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNGZiZmZmIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+',
      description: 'Modern, responsive portfolio website built with React and enhanced using Claude Code for rapid development.',
      longDescription: 'A professional portfolio website showcasing projects, experience, and skills. Built with React and modern web technologies, this site demonstrates proficiency in frontend development while utilizing Claude Code for efficient development workflows and code optimization.',
      technologies: ['React', 'JavaScript', 'CSS3', 'React Router', 'Claude Code', 'Responsive Design'],
      liveUrl: window.location.origin,
      githubUrl: 'https://github.com/JimInput/personal_portfolio',
      features: [
        'Responsive design for all devices',
        'Interactive project showcase',
        'Professional contact form',
        'Modern UI/UX design',
        'Optimized performance',
        'Enhanced with Claude Code assistance'
      ],
      status: 'in-progress'
    },
    {
      id: 1,
      title: 'Self-Balancing Robot',
      category: 'Robotics',
      image: selfBalancingBotImage,
      description: 'An autonomous self-balancing robot project showcasing dynamical control systems, sensor fusion, and real-time feedback control.',
      longDescription: 'Currently developing a self-balancing robot that demonstrates advanced dynamical control theory principles. The project involves implementing PID control algorithms, sensor fusion techniques, and real-time feedback systems to achieve stable autonomous balance. This project combines mechanical engineering principles with embedded systems programming and control theory.',
      technologies: ['Arduino', 'C++', 'PID Control', 'Gyroscope', 'Accelerometer', '3D Printing', 'Control Theory'],
      liveUrl: null,
      githubUrl: 'https://github.com/JimInput/self_balancing_robot',
      features: [
        'PID control algorithm implementation',
        'Real-time sensor data fusion',
        'Gyroscope and accelerometer integration',
        'Custom mechanical design',
        'Autonomous balance maintenance',
        'Real-time feedback control system'
      ],
      status: 'in-progress'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Robotics', label: 'Robotics' },
    { id: 'Research', label: 'Research' },
    { id: 'Web Development', label: 'Web Development' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getStatusClass = (status) => {
    switch(status) {
      case 'completed': return 'status-completed';
      case 'in-progress': return 'status-progress';
      case 'planned': return 'status-planned';
      default: return '';
    }
  };

  const getStatusLabel = (status) => {
    switch(status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'planned': return 'Planned';
      default: return '';
    }
  };

  return (
    <div className="projects">
      <div className="page-container">
        <h1 className="section-title">My Projects</h1>
        <p className="projects-intro">
          Here's a collection of projects I've worked on, showcasing my skills in robotics, 
          research, and engineering development. Each project demonstrates different aspects 
          of modern engineering and technology integration.
        </p>

        <div className="filter-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-tab ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`project-status ${getStatusClass(project.status)}`}>
                    {getStatusLabel(project.status)}
                  </span>
                </div>
                
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      GitHub
                    </a>
                  )}
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found for the selected category.</p>
          </div>
        )}

        <section className="project-stats">
          <h2 className="section-subtitle">Project Statistics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{projects.length}</div>
              <div className="stat-label">Total Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{projects.filter(p => p.status === 'completed').length}</div>
              <div className="stat-label">Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{projects.filter(p => p.status === 'in-progress').length}</div>
              <div className="stat-label">In Progress</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{new Set(projects.flatMap(p => p.technologies)).size}</div>
              <div className="stat-label">Technologies Used</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;