import { useState } from 'react';

import NewProjectModal from "./components/NewProject.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Hompage from "./components/Homepage.jsx";
import ActiveProject from './components/ActiveProject.jsx';

function App() {
  const [ projectsState, setProjectsState ] = useState({
    selectedProjectId: undefined,
    projects: [{
      description: "This is an example project. ",
      dueDate: "2025-01-31",
      id: 0.41132088884960183,
      title: "Example Project"
    },{
      description: "This is another example project.",
      dueDate: "2026-03-19",
      id: 0.13513581438138343,
      title: "Example Project 2"
    }],
    tasks: []
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

  function handleActiveProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
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

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        )
      };
    });
  };

  function handleAddTask(text) {
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    });
  };

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      };
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let projectContent = (
    <ActiveProject 
      project={selectedProject} 
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  )

  if (projectsState.selectedProjectId === null) {
    projectContent = <NewProjectModal onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    projectContent = <Hompage onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar 
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleActiveProject} 
        projects={projectsState.projects}
      />
      {projectContent}
    </main>
  );
}

export default App;
