function Addchild(){
const parent = document.querySelector(".container");
const newChild = document.createElement("h2");
newChild.textContent = "New Box"
newChild.style.backgroundColor="green";
newChild.style.height="100px"
newChild.style.width="100px"
newChild.style.margin="10px"
parent.appendChild(newChild);

}


function Removechild(){
const parent2 = document.querySelector(".container");
const childToRemove = document.querySelector("h2");
parent2.removeChild(childToRemove); 
}

function myFunction() {
const parent = document.querySelector(".container");
    alert(`There are ${parent.childElementCount-6} Boxes ` );
  }
  const head=document.getElementById("header").textContent;
  function show(){
    
    alert(head);
  };

  function Links() {
    const anchor = document.getElementById("create");
    anchor.addEventListener("click", function() {
        const link = document.createElement("a");
        link.textContent = "Freshchat";
        link.setAttribute("href", "https://www.freshworks.com");
        link.target = "_blank"; // Open link in new tab
        document.querySelector(".container").appendChild(link);
    });
}