import { getPost, checkAuth, getUser } from "../fetch-utils.js";
import { renderDetailPost, renderUserDetailPost } from "../render-utils.js";

const params = new URLSearchParams(window.location.search);
const mainEl = document.getElementById('main-container');

const postId = params.get('id');
console.log(postId);
 
const user = checkAuth();
const loggedIn = getUser();

async function displayDetailPost() {
    const post = await getPost(postId);
    
    if (user === loggedIn) {
        const userDetailPost = renderUserDetailPost(post);
        mainEl.append(userDetailPost);
    } else {
        const detailPost = renderDetailPost(post);
        mainEl.append(detailPost);
    }
    

}



displayDetailPost();





