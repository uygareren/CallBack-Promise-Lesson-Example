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
    }, 1000);

}

function toDoAdd(title, description){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
            todos.push({title: title, description:description});
            const e = false;

            if(!e){
                resolve("Succes");
            }else{
                reject("Error")
            }

        }, 2000);
    });
    
}

let title = prompt("Add new title")
let description = prompt("Add new description")

toDoAdd(title, description)
.then(response =>{
    console.log(response)
    toDoList();
})
.catch(e =>{
    console.log(e)
});



