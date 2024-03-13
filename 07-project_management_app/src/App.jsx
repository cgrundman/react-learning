import NewProjectModal from "./components/NewProjectModal.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <NewProjectModal />
    </main>
  );
}

export default App;
