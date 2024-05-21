// 1. Select all elements
const form = document.querySelector("#todo-form");
const list = document.querySelector("#task-list");
const input = document.querySelector("#task-input");

// 2. When the form is submitted, add a new task item
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // 2.1. Create a new task item
  const item = document.createElement("li");
  item.classList.add("list-item");

  // 2.2. Create a span to hold the task text
  const taskText = document.createElement("span");
  taskText.innerText = input.value;
  item.appendChild(taskText);

  // 2.3. Create a container for buttons
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");
  item.appendChild(buttonContainer);

  // 2.4. Create and append an edit button
  const editButton = document.createElement("button");
  editButton.classList.add("edit-btn");
  editButton.textContent = "Edit";
  buttonContainer.appendChild(editButton);

  // 2.5. Create and append a delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.textContent = "Delete";
  buttonContainer.appendChild(deleteButton);

  // 2.6. Add the new task item to the list
  list.appendChild(item);

  // 3. Clear the input field after submitting
  input.value = "";

  // 4. Add functionality to edit the task item
  editButton.addEventListener("click", () => {
    const editText = prompt("Edit task:", taskText.innerText);

    if (editText !== null) {
      taskText.innerText = editText;
    }
  });

  // 5. Add functionality to delete the task item
  deleteButton.addEventListener("click", () => {
    const confirmed = confirm("Are you sure you want to delete?");
    if (confirmed) {
      item.remove();
    }
  });
});
