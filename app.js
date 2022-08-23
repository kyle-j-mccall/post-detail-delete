// importing other stuff, utility functions for:
// working with supabase
import { checkAuth, signOutUser, getPosts, getPostsByCategory } from './fetch-utils.js';

import { renderPosts } from './render-utils.js';

const updateProfileLink = document.getElementById('update-profile-page');
const viewUsersLink = document.getElementById('users-page');
const signOutLink = document.getElementById('sign-out-link');
const categoryDropdown = document.getElementById('categories');
signOutLink.addEventListener('click', signOutUser);
// make sure we have a user
checkAuth();

// grab needed DOM elements on page
const bulletinBoard = document.getElementById('bulletin-board');

async function displayPosts() {
    const posts = await getPosts();
    bulletinBoard.textContent = '';
    const listEls = renderPosts(posts);
    bulletinBoard.append(listEls);
    
}

async function displayPostsByCategory(id) {
    
    const postsByCategory = await getPostsByCategory(id);
    const listEls = renderPosts(postsByCategory);
    bulletinBoard.textContent = '';
    bulletinBoard.append(listEls);
}

viewUsersLink.addEventListener('click', () => {
    window.location.replace('./users');
});

updateProfileLink.addEventListener('click', () => {
    window.location.replace('./update-profile');

});


categoryDropdown.addEventListener('change', (e) => {
    
    if (e.target.value) {
        displayPostsByCategory(e.target.value);

    } else {
        displayPosts();
    }
    
});
    

displayPosts();

