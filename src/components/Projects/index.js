import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        Here are some of my projects, from web app to decentralized app.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'hackathons' ?
            <ToggleButton active value="hackathons" onClick={() => setToggle('hackathons')}>HACKATHON'S</ToggleButton>
            :
            <ToggleButton value="hackatons" onClick={() => setToggle('hackathons')}>HACKATHON'S</ToggleButton>
          }
          <Divider />
          {toggle === 'decentralized app' ?
            <ToggleButton active value="decentralized app" onClick={() => setToggle('decentralized app')}>DECENTRALIZED APP</ToggleButton>
            :
            <ToggleButton value="decentralized app" onClick={() => setToggle('decentralized app')}>DECENTRALIZED APP</ToggleButton>
          }
          <Divider />
           {toggle === 'program' ?
            <ToggleButton active value="program" onClick={() => setToggle('program')}>PROGRAM</ToggleButton>
            :
            <ToggleButton value="program" onClick={() => setToggle('program')}>PROGRAM</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
             .filter((item) => item.category.includes(toggle))
             .map((project) => (
               <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
             ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects