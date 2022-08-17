- add users page button and update profile button on home page
- add event listeners
- create relative links for corresponding pages

## Users page

## HTML Elements update profile page
- Header (update or add profile)

## Form
- input for username
- button to change username
- input for avatar
- button to change avatar
- input for bio
- button to change bio

## HTML Elements users page
- Header (Users)
- li for each user showing username, avatar, bio
- rendered dynamically. Each user will use same render function

## Users page data
- will require profiles table from supabase
- will require user to have an account to view users page
- will require user id to match uid

## Users Page plan
- create getUsers function in fetch utils(no parameters)
- create renderUserInfo function in render utils
- create displayUsers function in users.js
- in displayUsers call getUsers, create variable. use variable to loop through all users in supabase
- call renderUserInfo in loop
- call displayUsers on load



