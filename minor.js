const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

xhr.responseType = 'json';

xhr.onload = function() {
  // const listOfPosts = JSON.parse(xhr.response);
  const listOfPosts = xhr.response;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    console.log(postEl);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listElement.append(postEl);
  }
};
console.log(listElement);
xhr.send();














/*


const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

xhr.responseType = 'json';

xhr.onload = function() {
  // const listOfPosts = JSON.parse(xhr.response);
  const listOfPosts = xhr.response;
  //console.log(listOfPosts)
  //const val=1;
  for (const post of listOfPosts) {
  	//if(val<7)
  	//{
	    const postEl = document.importNode(postTemplate.content, true);
	    postEl.querySelector('h2').textContent = post.title.toUpperCase();
	    postEl.querySelector('p').textContent = post.body;
	    listElement.append(postEl);
	    //val=val+1;
	//}
}

//document.getElementById('ask').textContent="asfvf";

};



xhr.send();



*/