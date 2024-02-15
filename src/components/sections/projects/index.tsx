'use client';

import Container from '@/components/container';
import ProjectCard from '@/components/project-card';
import SectionTitle from '@/components/section-title';
import projects from '@/data/projects.json';
import { forwardRef } from 'react';

const ProjectsSection = forwardRef<HTMLDivElement>(function ProjectsSection(_, ref) {
    return (
        <div ref={ref}>
            <Container className="py-16 md:py-28">
                <SectionTitle>Projects</SectionTitle>
                <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </Container>
        </div>
    );
});

export default ProjectsSection;
