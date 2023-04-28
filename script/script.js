const apiBase = "http://eskiltorsetcom.local";
const postsBase = "/wp-json/wp/v2/posts";

const fullPageURL = apiBase + postsBase;

async function fetchPosts(){
    const response = await fetch(fullPageURL);
    const posts = await response.json();
    console.log(posts);
    return posts;
}

/*async function fetchPost(id){
    const response = await fetch(fullPageURL + `/${id}`);
    const post = await response.json();
    
    return post;
}*/

function renderPostHTML(post){
    const container = document.querySelector(".latest-posts");
 
    const postContainer = document.createElement("div");
    postContainer.classList.add("post");
    postContainer.id = post[0].id;
 
    const title = document.createElement("h2");
    title.innerText = post[0].title.rendered;
    postContainer.append(title);
 
    for (let i = 0; i < post[0]._links["wp:featuredmedia"].length; i++){
     const imgData = post[0].featured_media[i];
     const img = document.createElement("img");
     img.src = post[0].jetpack_featured_media_url;
     //img.alt = imgData.jetpack_featured_media_url;
     postContainer.append(img);
    }
 
    const content = document.createElement("h3");
    content.innerText = post[0].content.rendered;
    postContainer.append(content);
 
    /*const wrapper = document.createElement("a");
    wrapper.classList.add("details-btn");
    wrapper.href = `/details.html?id=${id}`;
    wrapper.innerText = "post Info"; 
    postContainer.append(wrapper);*/
 
 
    container.append(postContainer);
 
 }
 
 function renderPostsHTML(posts){
     for (let i = 0; i < posts.length; i++){
         const post = posts[i];
         renderPostHTML(post);
     }
 }

async function main() {
    const posts = await fetchPosts();
    //const post = await fetchPost();
    renderPostHTML(posts);
}

main();

/*function renderPostHTML(post){
    //const container = document.querySelector(".latest-posts");
    const id = post[0].id;

    console.log(id);
 
    const postContainer = document.createElement("div");
    postContainer.classList.add("post");
    postContainer.id = post.id;
 
    const title = document.createElement("h2");
    title.innerText = post.title;
    postContainer.append(title);
 
    for (let i = 0; i < post.images.length; i++){
     const imgData = post.images[i];
     const img = document.createElement("img");
     img.src = imgData.src;
     img.alt = imgData.alt;
     postContainer.append(img);
    }
 
    const content = document.createElement("h3");
    content.innerText = post.content.rendered;
    postContainer.append(title);
 
    const wrapper = document.createElement("a");
    wrapper.classList.add("details-btn");
    wrapper.href = `/details.html?id=${id}`;
    wrapper.innerText = "post Info"; 
    postContainer.append(wrapper);
 
 
    container.append(postContainer);
 
 }
 
 function renderPostsHTML(posts){
     for (let i = 0; i < posts.length; i++){
         const post = posts[i];
         createPostHTML(post);
     }
 }

console.log(fullPageURL);


renderPostHTML();*/

