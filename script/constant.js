const apiBase = "http://eskiltorsetcom.local";
const postsBase = "/wp-json/wp/v2/posts";

const fullPageURL = apiBase + postsBase;

async function getPost(id){
    const response = await fetch(fullPageURL + `/${id}`);
    const post = await response.json();
    return post;
}

function renderSinglePostHTML(post) {
    const id = post.id;
    const wrapper = document.createElement("div");
    wrapper.classList.add("contentmod");
    
    const heading = document.createElement("h2");
    const body = document.createElement("p");
    const image = document.createElement("img");
 
    wrapper.href = `blog-specific.html?id=${id}`;
    heading.innerText = post.title.rendered;
    body.innerText = post.content.rendered;

    const imgData = post.jetpack_featured_media_url;
    image.src = imgData;
    image.alt = imgData;
    
    wrapper.append( heading, image, body );
    return wrapper;
 }

 export {
    getPost,
    renderSinglePostHTML
}