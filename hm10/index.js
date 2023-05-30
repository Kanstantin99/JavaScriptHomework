const friends = document.getElementById("friends");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
let writeFriend = document.getElementById("writeFriend");

let friendCount = 0;
const counter = document.getElementById("friendCount");

btn.onclick = () => {
  function addList() {
    let ul = document.getElementsByTagName("ul")[0];
    let li = document.createElement("li");
    li.textContent = writeFriend.value;
    ul.appendChild(li);
    friendCount++;
    counter.textContent = friendCount;
  }

  addList();
};
localStorage.getItem(addList(), (counter.textContent = friendCount));
