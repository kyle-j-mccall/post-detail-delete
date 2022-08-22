## HTML Elements
- select tag with an option that represents each category on bulletin page
- select tags have links to category id
- new HTML and js page for each category 
- use same styling as bulletin page

## Data 
- will need to fetch categories
- fetchPostsByCategory(cateforyId)

## User Events 
- on click of select option user is redirected to new bulletin board where selected category posts are displayed


# Plan
- build out categories HTML and CSS (use same HTML as bulletin)
- create categoies.js
- add an href for each category option
- use a renderCategory function to render specific categories on new page
- in categoires.js use NewUrlSearchParams to pass category id in fetchPostsByCategory();
- loop through array of posts and render and display