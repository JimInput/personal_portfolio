import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Teaching Assistant',
      company: 'UConn Department of Engineering',
      location: 'Storrs, CT',
      duration: 'Aug 2025 - Present',
      type: 'Part-time',
      description: 'Lead review sessions and office hours for Discrete Systems and AI4ALL courses, focusing on logic, set theory, combinatorics in engineering contexts, and ethical AI use.',
      achievements: [
        'Head review sessions on logic, set theory, and combinatorics with engineering focus',
        'Instruct students in ethical use of AI regarding future technologies',
        'Conduct office hours to support student learning and comprehension',
        'Develop educational materials for engineering mathematics concepts'
      ],
      technologies: ['Logic Theory', 'Set Theory', 'Combinatorics', 'AI Ethics', 'Educational Technology']
    },
    {
      id: 2,
      title: 'Undergraduate Research Assistant',
      company: 'Connecticut Transportation Institute',
      location: 'Storrs, CT',
      duration: 'Jun 2025 - Aug 2025',
      type: 'Research',
      description: 'Conduct long-term research on infrastructure monitoring using Arduino, Raspberry Pi, and scheduler programming. Design and maintain remote IoT networks with AWS backend.',
      achievements: [
        'Design and maintain remote IoT network with AWS backend integration',
        'Implement 6TiSCH local wireless communication protocols',
        'Contribute to publications on intelligent sensing systems',
        'Develop IoT sensor networks for real-time data collection'
      ],
      technologies: ['Arduino', 'Raspberry Pi', 'AWS', '6TiSCH', 'IoT', 'Python', 'Sensor Networks']
    },
    {
      id: 3,
      title: 'Shift Supervisor',
      company: 'UConn Quantitative Learning Center',
      location: 'Storrs, CT',
      duration: 'Sep 2024 - Present',
      type: 'Part-time',
      description: 'Manage a team of 20 tutors, distributing manpower to necessary tasks and supporting undergraduate students in calculus, physics, and computer science.',
      achievements: [
        'Manage team of 20 tutors for optimal resource distribution',
        'Provide 1-on-1 and group tutoring sessions in STEM subjects',
        'Identify conceptual gaps and simplify complex topics',
        'Improve student comprehension in calculus, physics, and computer science'
      ],
      technologies: ['Team Management', 'STEM Education', 'Calculus', 'Physics', 'Computer Science']
    },
    {
      id: 4,
      title: 'Project Intern',
      company: 'Mathleague',
      location: 'Oviedo, FL',
      duration: 'Jul 2024 - Aug 2025',
      type: 'Internship',
      description: 'Produced and edited math competition exams in collaboration with 20+ interns for 4,000+ participants. Tutored advanced AIME students with personalized feedback.',
      achievements: [
        'Produced and edited 36 math competition exams annually',
        'Collaborated with 20+ interns serving 4,000+ participants',
        'Tutored 30+ advanced AIME students with personalized feedback',
        'Conducted life Q&A sessions and problem walkthroughs'
      ],
      technologies: ['Mathematical Problem Design', 'Educational Content', 'Competition Mathematics', 'Student Mentoring']
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science and Mechanical Engineering',
      school: 'University of Connecticut',
      location: 'Storrs, CT',
      duration: 'Aug 2024 - May 2028',
      gpa: '4.000/4.0',
      honors: 'UConn Honors Program, Presidential Scholarship for Valedictorians',
      relevant: ['Algorithms', 'Data Structures', 'Computer Architecture', 'Systems Programming', 'Digital Logic', 'Cybersecurity', 'Thermodynamics', 'Dynamics', 'Statics', 'Calculus/Linear Algebra/Differential Equations']
    }
  ];

  return (
    <div className="experience">
      <div className="page-container">
        <h1 className="section-title">Work Experience</h1>
        
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="job-title">{exp.title}</h3>
                  <div className="job-meta">
                    <span className="company">{exp.company}</span>
                    <span className="location">{exp.location}</span>
                    <span className="duration">{exp.duration}</span>
                    <span className={`job-type ${exp.type.toLowerCase()}`}>{exp.type}</span>
                  </div>
                </div>
                
                <p className="job-description">{exp.description}</p>
                
                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {exp.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="education-section">
          <h2 className="section-subtitle">Education</h2>
          <div className="education-grid">
            {education.map((edu) => (
              <div key={edu.id} className="education-card">
                <h3 className="degree">{edu.degree}</h3>
                <div className="school-info">
                  <span className="school">{edu.school}</span>
                  <span className="edu-location">{edu.location}</span>
                  <span className="edu-duration">{edu.duration}</span>
                  {edu.gpa && <span className="gpa">GPA: {edu.gpa}</span>}
                </div>
                {edu.honors && (
                  <div className="honors-section">
                    <h4>Honors & Awards:</h4>
                    <p>{edu.honors}</p>
                  </div>
                )}
                {edu.relevant && (
                  <div className="relevant-courses">
                    <h4>Relevant Coursework:</h4>
                    <div className="course-tags">
                      {edu.relevant.map((course, index) => (
                        <span key={index} className="course-tag">{course}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="skills-section">
          <h2 className="section-subtitle">Technical Skills</h2>
          <div className="skills-categories">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">Python</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">C/C++</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Java</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">JavaScript</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">MATLAB</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>Engineering & Design Tools</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">AutoCAD</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Fusion360</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Simulink</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3>Hardware & Systems</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">Arduino</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Raspberry Pi</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">AWS/IoT</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Experience;