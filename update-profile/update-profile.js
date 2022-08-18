import { saveProfile, getProfile, checkAuth } from '../fetch-utils.js';

const formData = document.getElementById('update-form');
const usernameEl = document.getElementById('username');
const avatarEl = document.getElementById('avatar');
const bioEl = document.getElementById('bio');
const button = document.getElementById('update-create');

const user = checkAuth();

console.log(user);



async function populateForm() {
    const profile = await getProfile(user.id);
    if (user.id === profile.id) {
        usernameEl.value = profile.username;
        avatarEl.value = profile.avatar_url;
        bioEl.value = profile.bio;
        button.textContent = 'Update';
    }

}

populateForm();