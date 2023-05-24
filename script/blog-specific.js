import { getPost, renderSinglePostHTML } from "./constant.js";

const apiBase = "http://eskiltorsetcom.local";
const postsBase = "/wp-json/wp/v2/posts";

const fullPageURL = apiBase + postsBase;

const mainWrapper = document.querySelector("main");
const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


async function renderPost(){
    const post = await getPost(id);
    const postHTML = renderSinglePostHTML(post);
    mainWrapper.textContent = "";
    mainWrapper.append(postHTML);
} 

renderPost();