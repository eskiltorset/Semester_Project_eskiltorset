const apiBase = "https://www.eskiltorset.no";
const postsBase = "/wp-json/wp/v2/posts?_embed&per_page=100";

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

const latestPosts = document.querySelector(".slider-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const loader = document.querySelector(".loader");

loader.style.display = "block";
latestPosts.style.display = "none";
prevBtn.style.display = "none";
nextBtn.style.display = "none";

setTimeout(() => {
    latestPosts.style.display = "block";
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
    loader.style.display = "none";
}, 1500);
 
 function renderPostsHTML(posts){
     for (let i = 0; i < posts.length; i++){
        const post = posts[i];
        
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
        
        img.src = post._embedded['wp:featuredmedia']['0'].source_url;
        img.alt = post._embedded['wp:featuredmedia']['0'].source_url;
        
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



