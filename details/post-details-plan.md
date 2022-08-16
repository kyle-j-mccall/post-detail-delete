## HTML Elements

* Post container div
* H3 for post title
* ptag for post detail
* Delete button that shows up if user made post

## Events

* hardcode details HTML
* on click of post in bulletin board user is redirected to post details page
* using urlsearchparams create link in renderPost function that makes each post clickable and will take user to details page for that post
* create a renderDetailPost function that renders hardcoded HTML dynamically on load of details page
* Call getPost function in renderDetailPost to get post from supabase
* create a condition statement in renderDetailsPost that only displays delete button to user that created post
* Delete button should be able to delete post
