# Client APP

In the project directory, you can run:
`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


# Task description

# Pages

Add two pages - "Posts" and "Single Posts", to this app using react-router library. 

# Requirements

- The "Posts" page contains a list of posts, that are fetched from the Server.

- Each post card is a link to the "Single Page" with full information about the SELECTED post.

- Posts whould be fetched by chanks - 9 posts per request

- Button at the bottom of the "Posts" page should trigger another request to the Server to fetch more data.

- Post card should contain - post title, post category, post descriptions and logo. All posts should have the same height - 200px, if the description is too long, you should cut off the text and display the dots at the end, like this

`too long descrip...`


# Design

The desing for the "Posts" page you can find here - `client/design/Posts_page.png`

The desing for the "Single Post" page you can find here - `client/design/Single_post_page.png`



