const apiBase = "http://eskiltorsetcom.local";
const postsBase = "/wp-json/wp/v2/posts";

const fullPageURL = apiBase + postsBase;

async function fetchLimitedPosts(){
    const response = await fetch(fullPageURL + `?per_page=12`);
    const posts = await response.json();
    console.log(posts);
    return posts;
}

function renderPostsHTML(posts){
    for (let i = 0; i < posts.length; i++){
       const post = posts[i];
    }

   const container = document.querySelector(".latest-posts");

    for (let i = 0; i < 10; i++){

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
       //const imgData = post.featured_media[i];
       const img = document.createElement("img");
       img.src = post.jetpack_featured_media_url;
       //img.alt = imgData.jetpack_featured_media_url;
       
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

   const showMoreBtn = document.getElementById('show_more');

   showMoreBtn.onclick = function() {

    showMoreBtn.style.display = 'none';
   

    for (let i = 0; i < posts.length; i++){
        const post = posts[i];
     }
 
    const container = document.querySelector(".latest-posts");
    for (let i = 0; i < 12; i++){

        if (i < 10) { continue; }

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
}

async function main() {
    const posts = await fetchLimitedPosts();
    renderPostsHTML(posts);
}

main();