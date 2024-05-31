function getPost (userid) {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId="+ userid)
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
    }else {
      alert("error in request")
    }
  }
}
function getUsera () {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users")
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
    }else {
      alert("error in request")
    }
  }
}
getUsera();
function userID(id, el) {
  getPost(id);
  let elements = document.querySelectorAll('.name_emile')
  for ( element of elements){
    element.classList.remove('sellected');
  }
  el.classList.add('sellected')
} 