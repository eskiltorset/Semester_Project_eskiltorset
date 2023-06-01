import { getPost, renderSinglePostHTML } from "./constant.js";

const apiBase = "https://www.eskiltorset.no";
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

const contentMod = document.querySelector(".contentmod");
const loader = document.querySelector(".loader");

loader.style.display = "block";
contentMod.style.display = "none";

setTimeout(() => {
    contentMod.style.display = "block";
    loader.style.display = "none";
}, 1500);