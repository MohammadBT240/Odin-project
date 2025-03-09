import "./style.css";
import Project from "./modules/project";
import Storage from "./modules/storage";
import Modal from "./modules/modal";
import { format } from "date-fns";

const projectContainer = document.getElementById("project-container");
const projectModal = document.getElementById("project-modal");
const todoModal = document.getElementById("todo-modal");
const saveProjectBtn = document.getElementById("save-project-btn");
const saveTodoBtn = document.getElementById("save-todo-btn");
const newProjectBtn = document.getElementById("new-project-btn");
const newTodoBtn = document.getElementById("new-todo-btn");

let projects = Storage.loadProjects();

console.log(projects);

const renderProjects = () => {
  projectContainer.innerHTML = "";
  projects.forEach((project, projectIndex) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `
      <h3>${project.name}</h3>
      <button class="open-todo-modal" data-project="${projectIndex}">Add Todo</button>
      <ul>
        ${project
          .getTodos()
          .map(
            (todo, todoIndex) => `
          <li class="todo-item ${todo.priority}">
            ${todo.title} - Due: ${format(new Date(todo.dueDate), "yyyy-MM-dd")}
            <button data-project="${projectIndex}" data-todo="${todoIndex}" class="delete-todo-btn">Delete</button>
          </li>`
          )
          .join("")}
      </ul>
    `;
    projectContainer.appendChild(projectDiv);
  });
};

newProjectBtn.addEventListener("click", () => {
  Modal.openModal(projectModal);
});

const closeModals = () => {
  Modal.closeModal(projectModal);
  Modal.closeModal(todoModal);
};

document.querySelectorAll(".close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", closeModals);
});

saveProjectBtn.addEventListener("click", () => {
  const projectName = document.getElementById("project-name").value;
  if (projectName) {
    const newProject = Project(projectName);
    projects.push(newProject);
    Storage.saveProjects(projects);
    renderProjects();
    closeModals();
  }
});

projectContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-todo-btn")) {
    const projectIndex = e.target.getAttribute("data-project");
    const todoIndex = e.target.getAttribute("data-todo");
    projects[projectIndex].removeTodo(todoIndex);
    Storage.saveProjects(projects);
    renderProjects();
  }

  if (e.target.classList.contains("open-todo-modal")) {
    const projectIndex = e.target.getAttribute("data-project");
    todoModal.setAttribute("data-project", projectIndex);
    Modal.openModal(todoModal);
  }
});

saveTodoBtn.addEventListener("click", () => {
  const projectIndex = todoModal.getAttribute("data-project");
  const title = document.getElementById("todo-title").value;
  const description = document.getElementById("todo-description").value;
  const dueDate = document.getElementById("todo-dueDate").value;
  const priority = document.getElementById("todo-priority").value;

  if (title && dueDate) {
    const newTodo = { title, description, dueDate, priority };
    projects[projectIndex].addTodo(newTodo);
    Storage.saveProjects(projects);
    renderProjects();
    closeModals();
  }
});

renderProjects();
