const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("task-list"); 


inputBox.addEventListener("keydown",function(event) {
    if (event.key === "Enter") {
        
        addTask();

    }
});

function addTask() {
    const task = inputBox.value.trim();

    if (!task) {
        alert("Please write down a task");
        return;
    }

    // Create task item
    const li = document.createElement("li");

    li.innerHTML = `
        <div id = "list-item">
          <span contenteditable = "true">${task}</span>
        </div>
        <span class="delete-btn">X</span>
    `;

    // Append task to the list
    listContainer.appendChild(li);
    inputBox.value = "";



    const deleteBtn = li.querySelector(".delete-btn");

    // Delete task
    deleteBtn.addEventListener("click", function () {
        li.remove();
        
    });

    
}

