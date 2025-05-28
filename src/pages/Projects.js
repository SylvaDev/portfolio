import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "My Demo App",
      description: "A simple demo application built on React and deployed on Vercel for debugging purposes.",
      thumbnail: "https://my-demo-ayn9ylgcp-sylvadevs-projects.vercel.app/public/images/my-demo-app.png",
      liveUrl: "https://my-demo-ayn9ylgcp-sylvadevs-projects.vercel.app/",
      githubUrl: "https://github.com/SylvaDev/my-demo-app"
    },
    {
      id: 2,
      title: "Project Two",
      description: "Description of the second project highlighting its main functionalities.",
      thumbnail: "https://via.placeholder.com/400x300",
      liveUrl: "https://project-two-url.com",
      githubUrl: "https://github.com/yourusername/project-two"
    },
    {
      id: 3,
      title: "Project Three",
      description: "Overview of the third project and its unique aspects.",
      thumbnail: "https://via.placeholder.com/400x300",
      liveUrl: "https://project-three-url.com",
      githubUrl: "https://github.com/yourusername/project-three"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="projects-section">
      <h1 className="section-title">Projects</h1>
      <div className="projects-container">
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="project-slide">
              <div className="project-card">
                <div className="project-thumbnail">
                  <img src={project.thumbnail} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link live-link"
                      >
                        Live Demo
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link github-link"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Projects; 