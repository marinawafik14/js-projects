let rowsInput = document.getElementById("rows");
let columnsInput = document.getElementById("cols");
let btn = document.querySelector("button");

btn.addEventListener('click',createTable)


function createTable(){
  let table = document.createElement("table");
  for (let i = 0; i < Number(rowsInput.value); i++) {
    let tr = document.createElement("tr") //<tr></tr>
    table.appendChild(tr);

  for (let j = 0; j < Number(columnsInput.value); j++) {
  let td = document.createElement("td"); //<td></td>
  let txt = document.createTextNode("items text")
  tr.appendChild(td);
  td.appendChild(txt);
  }    
}

document.body.appendChild(table);
}
