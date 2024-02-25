function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() === "") {
      alert("Please enter a task.");
      return;
    }
    
    var li = document.createElement("li");
    li.textContent = taskInput.value;
    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function() {
      taskList.removeChild(li);
    };
    
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");
    editButton.onclick = function() {
      var newTask = prompt("Edit the task:", li.textContent);
      if (newTask !== null && newTask.trim() !== "") {
        li.textContent = newTask;
        li.appendChild(deleteButton); // Re-add delete button after editing
        li.appendChild(editButton); // Re-add edit button after editing
      }
    };
    
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    taskList.appendChild(li);
    
    taskInput.value = "";
  }