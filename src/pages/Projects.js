import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Star Wars Components API",
      description: "A simple react application that fetches data from the Star Wars API and displays it in a list of cards created during coursework with Bloom Institute of Technology",
      thumbnail: "https://api.microlink.io/?url=https://star-wars-component-list.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
      liveUrl: "https://star-wars-component-list.vercel.app/",
      githubUrl: "https://github.com/SylvaDev/star_wars_component_list"
    },
    {
      id: 2,
      title: "Exovara Labs",
      description: "React and Vercel based Website for a startup company that develops video games. Built with Discord API integration for image carousel (WIP)",
      thumbnail: "https://api.microlink.io/?url=https://exovara-labs.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
      liveUrl: "https://exovara-labs.vercel.app/",
      githubUrl: "https://github.com/SylvaDev/exovara_labs"
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
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="preview-icon" />
                        <span>Live Demo</span>
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link github-link"
                      >
                        <FontAwesomeIcon icon={faGithub} className="preview-icon" />
                        <span>GitHub</span>
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