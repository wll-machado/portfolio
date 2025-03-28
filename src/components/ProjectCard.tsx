
import { Col } from 'react-bootstrap'

function ProjectCard({ title, description, imgUrl,link,version }:any) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt='cover'/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span> <br />
          <a href={link} target='_blank'>Link</a> <br />
          <span>{version}</span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard
