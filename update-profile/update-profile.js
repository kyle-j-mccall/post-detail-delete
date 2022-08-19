import { saveProfile, getProfile, checkAuth } from '../fetch-utils.js';

const form = document.getElementById('update-form');
const usernameEl = document.getElementById('username');
const avatarEl = document.getElementById('avatar');
const bioEl = document.getElementById('bio');
const button = document.getElementById('update-create');

const user = checkAuth();
console.log(user.id);


async function populateForm() {
    const profile = await getProfile(user.id);
    console.log('profile', profile);
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

    const profile = await getProfile(user.id);
    console.log(profile);
    
    
    
    form.reset();

    populateForm();
});

populateForm();