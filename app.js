document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code here
const requestUrl = `https://api.github.com/users/hanzalla`;
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    let container = document.querySelector('.container');
    let image = document.querySelector('img');
   
    const userName = document.createElement('p');
    const followers = document.createElement('p');
    const following = document.createElement('p');
    console.log(image);
    console.log(container);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        image.src = data.avatar_url;
        userName.innerHTML = `<h2>User Name: ${data.name}</h2>`;
        followers.innerHTML = `<h2>Followers:<span>${data.followers}</span></h2>`
        following.innerHTML = `<h2>Following:<span>${data.following}</span></h2>`
        console.log(typeof data);
        console.log(`followers is/are ${data.followers}`);
    }
    container.appendChild(userName);
    container.appendChild(followers);
    container.appendChild(following);
    
}
xhr.send();


});
