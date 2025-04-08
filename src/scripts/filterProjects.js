document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project");
  
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const selected = btn.dataset.filter;
  
        buttons.forEach((b) => b.classList.remove("bg-blue-500", "text-white"));
        btn.classList.add("bg-blue-500", "text-white");
  
        projects.forEach((project) => {
          const tags = project.dataset.tags;
          if (
            (selected === "fullstack" && tags.includes("php")) ||
            (selected === "react-ts" && tags.includes("javascript")) ||
            (selected === "vanilla-js" && tags.includes("html"))
          ) {
            project.style.display = "flex";
          } else {
            project.style.display = "none";
          }
        });
      });
    });
  });
  