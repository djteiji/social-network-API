# social-network-API
Weekly Challenge 18

## Purpose

Build an API for a social network web application using Express.js for routing, a MongoDB database, and the Mongoose ODM. Users can share their thoughts, react to friends’ thoughts, and create a friend list. 

- After running npm install, run npm start. Server is started and the Mongoose models are synced to the MongoDB database

- When API GET routes are tested in Insomnia for users and thoughts,
the data for each of these routes is displayed in a formatted JSON

- When testing API POST, PUT, and DELETE routes in Insomnia your are able to successfully create, update, and delete users and thoughts in the database.

- When testing API POST and DELETE routes in Insomnia , you are able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

- When a user is deleted, their existing thoughts in the database are also deleted.

## Application Screenshots

![Getting Started](./assets/images/Screen%20Shot%202022-07-02%20at%204.16.48%20AM.png)
![Getting Started](./assets/images/Screen%20Shot%202022-07-02%20at%204.16.59%20AM.png)
![Getting Started](./assets/images/Screen%20Shot%202022-07-02%20at%204.17.07%20AM.png)

Video Demonstration [Part 1 (Models, Connections, User & Friend Routes)](https://drive.google.com/file/d/18zshCbz935pt0l_k_Ot9RixykkMnHHAO/view)

Video Demonstration [Part 2 (Thoughts & Reactions Routes)](https://drive.google.com/file/d/1d7q5jJfP9X70ZQa4AwDMZdite19vzYz1/view)

Video Demonstration [Part 3 (Deleting User Deletes Their Thoughts)](https://drive.google.com/file/d/1dJo1h0wgIzq153ZhUngcHh4Mca-93lxc/view)


## Built With

- MongoDB
- Mongoose
- Node.js
- Express.js


## Contribution
Made with ❤️ by Teiji Malkine