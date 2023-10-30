const requestUrl = `https://api.github.com/users/hanzalla`;
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    let container = document.querySelector('.container');
    let image = document.querySelector('img');
   
    const userName = document.createElement('p');
    const followers = document.createElement('p');
    console.log(image);
    console.log(container);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        image.src = data.avatar_url;
        userName.innerHTML = `<h2>${data.name}</h2>`;
        let general = null;
         for (let index = 0; index < 3; index++) {
             general = document.createElement('p');
            //  general.setAttribute('value', index);
            //  console.log(general);
             container.appendChild(general);
            }
            general.innerHTML = `<br><h1>User Name: ${data.name}</h1><b>followers:${data.followers}</b><br><br><b>followings:${data.following}</b><br>`;
        // container.appendChild(userName);
        console.log(typeof data);
        console.log(`followers is/are ${data.followers}`);
    }
    
}
xhr.send();



