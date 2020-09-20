  
const listElement2 = document.querySelector('.posts');
const postTemplate2 = document.getElementById('sel');

const xhr2= new XMLHttpRequest();

xhr2.open('GET', 'http://127.0.0.1:5000/get_all_colleges');

xhr2.responseType = 'json';


xhr2.onload = function() {
  // const listOfPosts = JSON.parse(xhr.response);
  const listOfPosts = xhr2.response;
  const varw=0;
  console.log(listOfPosts)
  for (const post of listOfPosts) {
    //console.log(post);
    //console.log("sdv");
    //document.getElementById("name").innerHTML =post;

    //var element = document.getElementById("toset");
    postTemplate2.querySelector('option').textContent = post;
    /*
    const postEl = document.importNode(postTemplate2, true);
    console.log(postEl);
    const title=varw;
    postEl.getElementById('name').textContent = post;
    //postEl.querySelector('p').textContent = post.body;
    listElement2.append(postEl);
    varw= varw+1;
    */
  }
  
  //console.log(listOfPosts);
};
//console.log(listElement2);
xhr2.send();

