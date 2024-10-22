const button = document.querySelector("button");
const input = document.querySelector("input");
const form = document.querySelector("form");
const container = document.getElementById("container");

container.addEventListener("click", (e) => {
  if (e.target.className == "icon-trash icon") {
    e.target.parentElement.parentElement.remove();
  } else if (e.target.className == "icon-angry2 icon") {
    e.target.classList.add("dn");
    const heart = `<span class="icon-heart">  </span>`;

    e.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.add("finish");

    e.target.parentElement.innerHTML += heart;
  } else if (e.target.className == "icon-heart") {
    e.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.remove("finish");

    e.target.classList.add("dn");
    const addAngry = `<span class="icon-angry2 icon"></span>`;

    e.target.parentElement.innerHTML += addAngry;
    
  } else if (e.target.className == "icon-star icon") {
    e.target.classList.add("orange");

    container.prepend(e.target.parentElement);
  } else if (e.target.className == "icon-star icon orange") {
    e.target.classList.remove("orange");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = `   
  
  <div class="task">
    <span class="icon-star icon"> </span>
    <p lang="ar"  class="task-text"> ${input.value} </p>
    <div>
      <span class="icon-trash icon"> </span>
      <span class="icon-angry2 icon"> </span>
    </div>
  </div>`;

  container.innerHTML += task;

  input.value = "";
});
