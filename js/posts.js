
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (res => res.json())
    .then(data => displayPosts(data));
    
}

/* 
1. get the container element where you want to add the new element
2.create child element
3.set innerText or inHTML
4.appendChild
*/

function displayPosts(posts){
    // 1. get the container element where you want to add the new ele
    const postsContainer = document.getElementById('posts-container');

    for (const post of posts) {
        console.log(post)
    // 2.create child element 
    
    
    
    const postsDiv = document.createElement('div');

    // create a class for css and add the it below 
    postsDiv.classList.add('post');
    // 3.set innerText or inHTML
    postsDiv.innerHTML =`
      <h4> UserId:${post.userId} </h4>
      <h5> Title: ${post.title}</h5>
      <p> Body:${post.body} </p>
    
    `;  
    // 4.appendChild   
    postsContainer.appendChild(postsDiv)

        
    }
}


loadPosts()