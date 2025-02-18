const goalInput = document.getElementById("goal-box");
const goalList = document.getElementById("goal-list");


goalInput.addEventListener("keydown",function(event){

    if (event.key === "Enter"){
        addGoal();
    }
});




function addGoal(){
    const goal = goalInput.value.trim();

    const li = document.createElement("li");

    li.innerHTML = `
        <div id = "goalitem">
          <span contenteditable = "true">${goal}</span>
        </div>
    `;

    // Append task to the list
    listContainer.appendChild(li);
    goalInput.value = "";

    

    
}