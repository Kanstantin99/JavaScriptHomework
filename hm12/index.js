const input = document.getElementById("input");
const btn = document.getElementById("btn");
const postContainer = document.createElement("p");
const main = document.getElementById("main");

btn.addEventListener("click", () => {
  const postId = input.value;
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((post) => {
      postContainer.innerText = JSON.stringify(post);
      main.appendChild(postContainer);
    })
    .catch((error) => console.error(error));
});
