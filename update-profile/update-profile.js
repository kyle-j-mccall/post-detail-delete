import { saveProfile, getProfile, checkAuth, signOutUser } from '../fetch-utils.js';

const form = document.getElementById('update-form');
const usernameEl = document.getElementById('username');
const avatarEl = document.getElementById('avatar');
const bioEl = document.getElementById('bio');
const button = document.getElementById('update-create');
const signOutLink = document.getElementById('sign-out-link');

const user = checkAuth();

checkAuth();



async function populateForm() {
    const profile = await getProfile(user.id);
    if (profile) {
        usernameEl.value = profile.username;
        avatarEl.value = profile.avatar_url;
        bioEl.value = profile.bio;
        button.textContent = 'Update';
    }   
    
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const username = data.get('username');
    const bio = data.get('bio');
    const avatar = data.get('avatar');
    
    await saveProfile({ id: user.id, username: username, bio: bio, avatar_url: avatar });
    
    form.reset();

    populateForm();
});

populateForm();

signOutLink.addEventListener('click', signOutUser);
// make sure we have a user
checkAuth();