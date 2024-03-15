import { useState } from 'react';

import NewProjectModal from "./components/NewProjectModal.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Hompage from "./components/Homepage.jsx";

function App() {
  const [ projectsState, setProjectsState ] = useState({
    selectedProjectId: undefined,
    projects: []
  }); 

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    });
  }

  function handleAddProject({projectData}) {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  console.log(projectsState)

  let projectContent;

  if (projectsState.selectedProjectId === null) {
    projectContent = <NewProjectModal onAdd={handleAddProject}/>
  } else if (projectsState.selectedProjectId === undefined) {
    projectContent = <Hompage onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectsState.projects}
      />
      {projectContent}
    </main>
  );
}

export default App;
