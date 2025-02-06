const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("task-list"); // Fix the correct ID
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

function addTask() {
    const task = inputBox.value.trim();

    if (!task) {
        alert("Please write down a task");
        return;
    }

    // Create task item
    const li = document.createElement("li");

    li.innerHTML = `
        <label>
          <input type="checkbox">
          <span>${task}</span>
        </label>
        <span class="edit-btn">Edit</span>
        <span class="delete-btn">Delete</span>
    `;

    // Append task to the list
    listContainer.appendChild(li);
    inputBox.value = "";

    // Select elements within the created `li`
    const checkbox = li.querySelector("input");
    const editBtn = li.querySelector(".edit-btn");
    const taskSpan = li.querySelector("span");
    const deleteBtn = li.querySelector(".delete-btn");

    // Toggle completed state
    checkbox.addEventListener("click", function () {
        li.classList.toggle("completed", checkbox.checked);
        updateCounters();
    });

    // Edit task
    editBtn.addEventListener("click", function () {
        const update = prompt("Edit task:", taskSpan.textContent);
        if (update !== null) {
            taskSpan.textContent = update;
            li.classList.remove("completed");
            checkbox.checked = false;
            updateCounters();
        }
    });

    // Delete task
    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateCounters();
    });

    // Update counters after adding task
    updateCounters();
}

function updateCounters() {
    const completedTasks = document.querySelectorAll("li.completed").length;
    const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTasks;
}

// Initial counter update
updateCounters();
