import { getProfiles } from '../fetch-utils.js';
import { renderProfile } from '../render-utils.js';

const profilesContainer = document.getElementById('profiles-container');

async function displayProfiles() {
    const profiles = await getProfiles();
    
    for (let profile of profiles) {
        const renderedProfile = renderProfile(profile);
        renderedProfile.classList.add('post-it')
        profilesContainer.append(renderedProfile);
    }
}

displayProfiles();



