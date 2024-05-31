# User Posts Viewer

This is a simple web application that allows you to view users and their posts. The data is fetched from the JSONPlaceholder API. When you click on a user's name, their posts are displayed on the right side of the screen.

## Features

- Fetch and display a list of users.
- Fetch and display posts of a selected user.
- Highlight the selected user.

## Files

- `index.html`: The main HTML file that structures the web page.
- `main.js`: The JavaScript file that contains the logic for fetching and displaying data.

## Usage

1. Open `index.html` in your web browser.
2. The left side of the screen will display a list of users fetched from the API.
3. Click on a user's name to view their posts on the right side of the screen.

## Code Overview

### HTML Structure

The HTML file sets up the basic structure of the web page with two main sections: one for displaying the list of users and the other for displaying the posts.
### JavaScript Logic

The JavaScript file contains the functions to fetch and display data.

#### Fetching Users

The `getUsera` function fetches a list of users from the API and displays them on the left side of the screen.

```javascript
function getUsera () {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.responseType = "json";
  request.send();
  request.onload = () => {
    if(request.status >= 200 && request.status < 300) {
      let users = request.response;
      document.querySelector('.left_name').innerHTML = null;
      for (user of users) {
        let content = `<div class="name_emile" onclick="userID(${user.id}, this)">
          <h3 class="name">${user.name}</h3>
          <p class="email">${user.email}</p>
        </div>`;
        document.querySelector('.left_name').innerHTML += content;
        console.log(typeof request.response);
      }
    } else {
      alert("error in request");
    }
  }
}
```

#### Fetching Posts

The `getPost` function fetches posts of a selected user and displays them on the right side of the screen.

```javascript
function getPost (userid) {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId="+ userid);
  request.responseType = "json";
  request.send();
  request.onload = () => {
    if(request.status >= 200 && request.status < 300) {
      let posts = request.response;
      document.querySelector('.right_post').innerHTML = null;
      for (post of posts) {
        let content = `<div class="posts">
          <h3 class="title">${post.title}</h3>
          <p class="post_item">${post.body}</p>
        </div>`;
        document.querySelector('.right_post').innerHTML += content;
        console.log(typeof request.response);
      }
    } else {
      alert("error in request");
    }
  }
}
```

#### User Selection

The `userID` function is called when a user is clicked. It fetches the posts of the selected user and highlights the selected user.

```javascript
function userID(id, el) {
  getPost(id);
  let elements = document.querySelectorAll('.name_emile');
  for (let element of elements) {
    element.classList.remove('sellected');
  }
  el.classList.add('sellected');
}
```

#### Initial Load

The `getUsera` function is called when the page loads to fetch and display the list of users.

```javascript
getUsera();
```

## Note

Ensure you have an active internet connection to fetch data from the JSONPlaceholder API. The API is a free online REST API that you can use whenever you need some fake data.

## License

This project is open-source and available under the [MIT License](LICENSE).





