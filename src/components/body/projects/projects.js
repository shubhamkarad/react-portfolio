import React from 'react';
import { ProjectData } from '../../data/projects';
import ProjectCard from './projectCard';
import './project.css';
import Separator from '../../common/separator/separator';
function Projects(props) {
    const data = ProjectData;
    return (
        <div className='projects'>
            <Separator/>
            <label className='section-title'>Projects</label>
            <div className='project-section'>
                {data.map((project) => {
                    return <ProjectCard project={project}/>
                })}
            </div>
        </div>
    );
}

export default Projects;