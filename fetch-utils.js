const SUPABASE_URL = 'https://fjaehedvvvybjlsfvqgr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqYWVoZWR2dnZ5Ympsc2Z2cWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA2MDg0ODUsImV4cCI6MTk3NjE4NDQ4NX0.dsN_ILXjZ95_XQNLlQmEOYG7ESTTWsf3gGjyev7SX-I';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}



export function checkAuth() {
    const user = getUser();
    if (!user) location.replace(`/auth/?redirectUrl=${encodeURIComponent(location)}`);
    return user;
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({ email, password });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({ email, password });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

export async function deletePost(id) {
    return await client.from('posts').delete().match({ id: id });

    
}

/* Helper for logging errors */

function checkError({ data, error }) {
    // eslint-disable-next-line no-console
    return error ? console.error(error) : data;
}

/* Categories */

export async function getCategories() {
    const response = await client.from('categories').select('*');
    return checkError(response);
}

/* Posts */

export async function getPosts() {
    const response = await client.from('posts').select(`
        *,
        category:categories(*)
    `);
    return checkError(response);
}

export async function getPost(id) {
    const response = await client.from('posts').select(`
    *,
    category: categories(*)`).match({ id }).single();
    
    return response.data;
}

export async function createPost(post) {
    return await client.from('posts').insert(post);
}

export async function getProfile(id) {
    const response = await client.from('profiles').select('*').match({ id }).single();

    return checkError(response);
}

export async function saveProfile(profile) {
    return await client.from('profiles').upsert(profile).single();

    
}

export async function getProfiles() {
    const response = await client.from('profiles').select('*');

    return checkError(response);
}

export async function getPostsByCategory(category_id) {
    const response = await client.from('posts').select('*, category: categories(*)').match({ category_id });
    
    return response.data;
}

