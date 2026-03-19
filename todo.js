
let button = document.getElementById("button");
let input= document.getElementById("input");
let str = input.value;
let box1=document.getElementById("box1")
function addtask()
{
         box1.insertAdjacentHTML(
            "beforeend",
            `<div class="container">
            <label>
                <div>
                <input class="check" type="checkbox">
                </div>
                <div class="note">
                ${input.value}
                </div>
                <div>
                <button class="button">Delete</button>
                </div>
            </label>
        </div>`
        )
        input.value = "";
}
button.addEventListener("click",addtask);
document.addEventListener("click",
    function(event)
    {
        if(event.target.classList.contains("button"))
        {
            let container=event.target.closest(".container");
            container.remove();
        }
    }
)
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addtask();
    }
}
);
document.addEventListener("change",
    function(event)
    {
        if(event.target.classList.contains("check"))
        {
            let note= event.target.closest(".container").querySelector(".note");
            note.classList.toggle("done");
        }
    }
);
// function savetasks()
// {
//     let tasks = [];
//     document.querySelectorAll(".container").forEach(function(task){

//         let text = task.querySelector(".note").textContent;
//         let done = task.querySelector(".check").checked;

//         tasks.push({
//             text: text,
//             done: done
//         });

//     });

//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }
// function loadtasks()
// {
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//     tasks.forEach(function(task){

//         box1.insertAdjacentHTML(
//         "beforeend",
//         `<div class="container">
//         <label>
//             <input class="check" type="checkbox" ${task.done ? "checked" : ""}>
//             <div class="note ${task.done ? "done" : ""}">
//                 ${task.text}
//             </div>
//             <button class="delete">Delete</button>
//         </label>
//         </div>`
//         );

//     });

// }
// loadtasks();
// function addtask()
// {
//     if(input.value.trim() === "") return;

//     box1.insertAdjacentHTML(
//         "beforeend",
//         `<div class="container">
//         <label>
//             <input class="check" type="checkbox">
//             <div class="note">${input.value}</div>
//             <button class="delete">Delete</button>
//         </label>
//         </div>`
//     );

//     input.value = "";
//     savetasks();
// }
// document.addEventListener("click", function(event)
// {
//     if(event.target.classList.contains("delete"))
//     {
//         event.target.closest(".container").remove();
//         savetasks();
//     }
// });
// document.addEventListener("change", function(event)
// {
//     if(event.target.classList.contains("check"))
//     {
//         let note = event.target.closest(".container").querySelector(".note");
//         note.classList.toggle("done");
//         savetasks();
//     }
// });