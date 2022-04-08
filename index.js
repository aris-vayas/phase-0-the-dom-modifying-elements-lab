// Write your code here!
const element = document.getElementById("main")
element.remove("main")
const newHeader = document.createElement("h1")
newHeader.setAttribute('id',"victory")
newHeader.textContent ="is the champion"
document.body.append(newHeader)




// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
// }

// element.append(ul)