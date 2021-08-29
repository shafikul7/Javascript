//application programming interface (API) 
 // 1st api concept start
 function comment() {
     fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(json => loadData(json))
 }


 function loadData(data) {
     const ul = document.getElementById('users')
     for (const user of data) {
         const li = document.createElement('li');
         li.innerText = `name: ${user.name} gmail : ${user.gmail}`;
         ul.appendChild(li);
     }
 }
 // 1st api concept end


 // 2nd api concept start
 function loadPost() {
     fetch("https://jsonplaceholder.typicode.com/posts")
         .then(response => response.json())
         .then(data => displayPost(data))
 }


 function displayPost(data) {
     const PostContainer = document.getElementById('posts');
     for (const post of data) {
         const div = document.createElement('div');
         div.classList.add('post');
         div.innerHTML = `
        <h2> ${post.id}</h2>
        <h3> ${post.title}</h3>
        <p> ${post.body}</p>
       `
         PostContainer.appendChild(div);
     }
 }
 // 2nd api concept end js


 // 3rd api concept end js
 function addPost() {
     fetch('https://jsonplaceholder.typicode.com/posts', {
             method: 'POST',
             body: JSON.stringify({
                 title: 'foo',
                 body: 'bar',
                 userId: 1,
             }),
             headers: {
                 'Content-type': 'application/json; charset=UTF-8',
             },
         })
         .then((response) => response.json())
         .then((json) => console.log(json));
 }

 
