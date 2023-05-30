const apiBase = "http://eskiltorsetcom.local";
const postsBase = "/wp-json/wp/v2/posts?per_page=12";

const fullPageURL = apiBase + postsBase;

async function fetchPosts(){
    const response = await fetch(fullPageURL);
    const posts = await response.json();
    console.log(posts);
    return posts;
}

async function fetchPost(id){
    const response = await fetch(fullPageURL + `/${id}`);
    const post = await response.json();
    
    return post;
}
 
 function renderPostsHTML(posts){
     for (let i = 0; i < posts.length; i++){
        const post = posts[i];
        //renderPostHTML(post);
     }

    const container = document.querySelector(".latest-posts");

     for (let i = 0; i < posts.length; i++){

        const postContainer = document.createElement("div");
        postContainer.classList.add("post");

        var post = posts[i];

        const id = post.id;

        postContainer.id = post.id;
    
        const title = document.createElement("h2");
        title.innerText = post.title.rendered;
        postContainer.append(title);
        
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("img-div");
        for (let i = 0; i < post._links["wp:featuredmedia"].length; i++){
        const img = document.createElement("img");
        img.src = post.jetpack_featured_media_url;
        img.alt = post.jetpack_featured_media_url;
        
        imgDiv.append(img);
        postContainer.append(imgDiv);
        
        }
    
        const content = document.createElement("p");
        content.classList.add("content-p");
        content.innerText = post.content.rendered;
        postContainer.append(content);

        const wrapper = document.createElement("a");
        wrapper.classList.add("details-btn");
        wrapper.href = `/blog-specific.html?id=${id}`;
        wrapper.innerText = "Read more >>>"; 
        postContainer.append(wrapper);

        container.append(postContainer);
    }
    
 }

async function main() {
    const posts = await fetchPosts();
    renderPostsHTML(posts);
}

main();



