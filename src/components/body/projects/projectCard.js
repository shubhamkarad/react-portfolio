import React from 'react';
import './projectCard.css';
function ProjectCard({project}) {
    return (
        <div className='project-card'>
            <div className='project-info'>
                <label className='project-title'>{project.title}</label>
                <p className='project-about'>{project.about}</p>
                <div className='project-tags'>
                    {project.tags.map((tag)=> {
                        return <label className='tag'>{tag}</label>;
                    })}
                </div>
                <div className='project-links'>
                {project.demo && (
                    <a className='project-link' href={project.demo}>
                        <div className='link-button'>
                            <i className='fi-rr-globe link-icon'></i>Demo
                        </div>    
                    </a>
                )}
                {project.github && (
                    <a  className='project-link' href={project.github}>
                        <div className='link-button'>
                            <i class="devicon-github-original colored link-icon"></i>Github
                        </div>
                    </a>
                )}
            </div>
            </div>
            {/* <img src={project.image} className='project-picture'/> */}
        </div>
    );
}

export default ProjectCard;