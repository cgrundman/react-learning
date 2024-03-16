import { useState } from 'react';

import NewProjectModal from "./components/NewProject.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Hompage from "./components/Homepage.jsx";
import ActiveProject from './components/ActiveProject.jsx';

function App() {
  const [ projectsState, setProjectsState ] = useState({
    selectedProjectId: undefined,
    projects: [{
      description: "This is a test",
      dueDate: "2024-03-17",
      id: 0.41132088884960183,
      title: "Testing"
    },{
      description: "This is another test",
      dueDate: "2024-03-19",
      id: 0.13513581438138343,
      title: "Testing 2"
    }]
  }); 

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      };
    });
  };

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };

      return {
        ...prevState,
        selectedProjectId: projectId,
        projects: [...prevState.projects, newProject]
      };
    });
  };

  function handleActiveProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: 0.41132088884960183,
      };
    });
  };

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined
      };
    });
  };

  console.log(projectsState)

  let projectContent;

  if (projectsState.selectedProjectId === null) {
    projectContent = <NewProjectModal onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId) {
    projectContent = <ActiveProject />
  } else {
    projectContent = <Hompage onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar 
        onStartAddProject={handleStartAddProject}
        selectProject={handleActiveProject} 
        projects={projectsState.projects}
      />
      {projectContent}
    </main>
  );
}

export default App;
