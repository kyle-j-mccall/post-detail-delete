import { deletePost } from '../fetch-utils.js';

export function renderCategoryOptions(categories) {
    // document fragment is a "bag" for elements
    const fragment = document.createDocumentFragment();

    for (const category of categories) {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = `${category.emoji} ${category.name}`;
        fragment.append(option);
    }

    return fragment;
}

export function renderPosts(posts) {
    const fragment = document.createDocumentFragment();

    for (const post of posts) {
        const li = document.createElement('li');
        li.classList.add('post-it');

        const link = document.createElement('a');
        link.href = `/details/?id=${post.id}`;

        const titleEl = document.createElement('h2');
        titleEl.textContent = post.title;

        const categoryEl = document.createElement('span');
        categoryEl.classList.add('category');
        categoryEl.title = post.category.name;
        categoryEl.textContent = post.category.emoji;

        const descriptionEl = document.createElement('p');
        descriptionEl.classList.add('description');
        descriptionEl.textContent = post.description;

        const contactEl = document.createElement('p');
        contactEl.textContent = post.contact;

        link.append(titleEl, categoryEl, descriptionEl, contactEl);

        li.append(link);

        

        fragment.append(li);
    }

    return fragment;
}

export function renderUserDetailPost(post) {
    const div = document.createElement('div');
    const postTitleEl = document.createElement('h3');
    const postDescription = document.createElement('p');
    const contact = document.createElement('p');
    const deleteButton = document.createElement('button');

    deleteButton.addEventListener('click', async () => {
        await deletePost(post.id);
        location.href = `../`;
    });

    postTitleEl.textContent = post.title;
    postDescription.textContent = post.description;
    contact.textContent = post.contact;
    deleteButton.textContent = 'delete';

    div.classList.add('post-it');

    
    div.append(postTitleEl, postDescription, contact, deleteButton);

   


    return div;
}

export function renderDetailPost(post) {
    const div = document.createElement('div');
    const postTitleEl = document.createElement('h3');
    const postDescription = document.createElement('p');
    const contact = document.createElement('p');
    

    postTitleEl.textContent = post.title;
    postDescription.textContent = post.description;
    contact.textContent = post.contact;
    

    div.classList.add('post-it');

    
    div.append(postTitleEl, postDescription, contact);

   


    return div;
}


