const goalInput = document.getElementById("goal-box");
const goalList = document.getElementById("goal-list");

const goals = JSON.parse(localStorage.getItem('goals')) || [];

goals.forEach(goal => createGoalElement(goal));

goalInput.addEventListener("keydown",function(event){

    if (event.key === "Enter"){
        addGoal();
    }
});




function addGoal(){
    const goal = goalInput.value.trim();

    goals.push(goal);

    createGoalElement(goal);
    saveGoals();

    goalInput.value ="";
}

function createGoalElement(goal){
   

    const listitem = document.createElement("li");

    listitem.innerHTML = `
        <div class = "goalitem">
          <span class = "goal" contenteditable = "true">${goal}</span>
        </div>
        <span class = "goaldeletebutton">X</span>
    `;

    document.getElementById("goal-list").appendChild(listitem);

    listitem.querySelector(".goaldeletebutton").addEventListener("click",function(){
        listitem.remove();

        const index = goals.indexOf(goal);
        if(index >-1){
            goals.splice(index,1);
        }
        saveGoals();

    });
    listitem.querySelector(".goal").addEventListener("input",function(){
        saveGoals();

    });
}

function saveGoals() {
    const goalElements = document.querySelectorAll("#goal-list li .goal");
    const updatedGoals = [];
    goalElements.forEach(el => updatedGoals.push(el.textContent));
    localStorage.setItem("goals", JSON.stringify(updatedGoals));
}


    

    

    

    
