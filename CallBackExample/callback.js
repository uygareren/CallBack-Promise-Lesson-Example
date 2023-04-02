const todos= [    
   {title: "Todo 1", description: "puresol bug temizligi.."},
   { title: "Todo 2", description: "video cekimi yap.."},
   { title: "Todo 3", description: "defne ile oyna.."  }
];

const Ul = document.getElementById("myH1");

function toDoList(){
    
    setTimeout(() => {
        let toDoTxt = "";
        todos.forEach(todo => {
            toDoTxt += `
            <li>
                <b>${todo.title}</b>
                <p>${todo.description}</p>
            </li>`;
        });

        Ul.innerHTML = toDoTxt;
    }, 5000);

}

function toDoAdd(title, description,callBack){
    setTimeout(() => {
        todos.push({title: title, description:description});
        callBack();

    }, 2000);
}

let title = prompt("Add new title")
let description = prompt("Add new description")

toDoAdd(title, description, toDoList)



