import Project from "./project"; // Ensure this import is present

const Storage = (() => {
  const saveProjects = (projects) => {
    localStorage.setItem(
      "projects",
      JSON.stringify(
        projects.map((project) => ({
          name: project.name,
          todos: project.getTodos(),
        }))
      )
    );
  };

  const loadProjects = () => {
    const projects = JSON.parse(localStorage.getItem("projects"));
    return projects ? projects.map((project) => Project(project.name)) : [];
  };

  return {
    saveProjects,
    loadProjects,
  };
})();

export default Storage;
