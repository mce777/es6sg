const url = "https://jsonplaceholder.typicode.com/posts";

// fetch is automatically available to you
// but consider using axios, superagent
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
