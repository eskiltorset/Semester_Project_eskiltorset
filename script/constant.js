const apiBase = "https://www.eskiltorset.no";
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
    
    const label = document.createElement("label");
    const input = document.createElement("input");
    const heading = document.createElement("h2");
    const body = document.createElement("p");
    const image = document.createElement("img");

 
    wrapper.href = `blog-specific.html?id=${id}`;
    heading.innerText = post.title.rendered;
    body.innerText = post.content.rendered;
    input.type = "checkbox";
    input.id = "zoomCheck";
    label.htmlFor = input.id;
    document.title = "CryptoBlog | " + post.title.rendered;

    const imgData = post.jetpack_featured_media_url;
    image.src = imgData;
    image.alt = imgData;
    
    label.append( image );
    wrapper.append( heading, input, label, body );
    return wrapper;
 }

 export {
    getPost,
    renderSinglePostHTML
}