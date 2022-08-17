


import { getPost, checkAuth } from '../fetch-utils.j';

import { renderDetailPost, renderUserDetailPost } from '../render-utils.js';

const params = new URLSearchParams(window.location.search);
const mainEl = document.getElementById('main-container');

const postId = params.get('id');


const user = checkAuth();



async function displayDetailPost() {
    const post = await getPost(postId);
    
    
    if (user.id !== post.user_id) {
        const detailPost = renderDetailPost(post);
        mainEl.append(detailPost);
        
        
    } else {
        const userDetailPost = renderUserDetailPost(post);
        mainEl.append(userDetailPost);
    }
    

}





displayDetailPost();





