import { getProfiles, checkAuth, signOutUser } from '../fetch-utils.js';
import { renderProfile } from '../render-utils.js';
const signOutLink = document.getElementById('sign-out-link');

const profilesContainer = document.getElementById('profiles-container');

async function displayProfiles() {
    const profiles = await getProfiles();
    
    for (let profile of profiles) {
        const renderedProfile = renderProfile(profile);
        renderedProfile.classList.add('post-it');
        profilesContainer.append(renderedProfile);
    }
}

displayProfiles();

signOutLink.addEventListener('click', signOutUser);
// make sure we have a user
checkAuth();



