import { getPost } from "../fetch-utils.js";
import { renderDetailPost } from "../render-utils.js";

const params = new URLSearchParams(window.location.search);
const mainEl = document.getElementById('main-container');

const postId = params.get('id');

async function displayDetailPost() {
    const post = await getPost(postId);
    const detailPost = renderDetailPost(post);
    mainEl.append(detailPost);

}

displayDetailPost();



