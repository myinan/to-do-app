const projectsInnerContainer = document.querySelector("#projects-inner-container");
const createProjectButton = document.querySelector(".project-add-button");
const form = document.querySelector("#project-form");

function createProject() {
    form.classList.remove("hidden");
}

export function addProjectOnClick() {
    createProjectButton.addEventListener("click", createProject);
}


