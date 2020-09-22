import React from 'react'

const ProjectSummary = ({ project }) => {
  return (
    <div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content Grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>{project.authorFirstName} {project.authorLastName}</p>
          <p className="grey-text">3rd September, 2am</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary
