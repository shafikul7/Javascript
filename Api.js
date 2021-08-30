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

// 4th api concept start js
const kanyeQuoted = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayKane(data))
}


const displayKane = (data) => {
    const quoteId = document.getElementById('quote');
    const p = document.createElement('p');
    p.innerText = data.quote;
    quoteId.appendChild(p);


}
// 5th api concept start js random
const buddiesFunction = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => randomUser(data))
}

const randomUser = (data) => {
    const trversedUsers = data.results;
    const buddiesId = document.getElementById('buddies');
    for (const buddie of trversedUsers) {
        const div = document.createElement('div');
        div.innerHTML = `
        <h2> ${buddie.gender}</h2>
        <h3> ${buddie.name.first}</h3>
        <p> ${buddie.email}</p>
        <p> ${buddie.location.street.number}</p>
        `
        buddiesId.appendChild(div)
    }
}

// 6th api concept start js restCountries
const restCountriesApi = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => restApiShow(data))
}

const restApiShow = (data) => {
    const counterDiv = document.getElementById('restCountries')
    data.forEach(counter => {
        counterDiv.innerHTML = `
            <h2> ${counter.name}</h2>
            <h3> ${counter.region}</h3>
            <p> ${counter.area}</p>
            <img scr="${counter.flags}">
            `
    })
}
 
