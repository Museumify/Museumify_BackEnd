# Museumify Server

The Museumify Server is a Node.js server that provides REST API routes to interact with an art database and also fetches data from a third party API. It also serves as a backend for an art gallery website.

## Installation

To run the server, you need to have Node.js installed. First, clone the repository and navigate to the project directory. Then, install the necessary dependencies by running the following command: 
```npm i```

## Configuration

Before running the server, make sure to set up the necessary configuration. Create a `.env` file in the root directory and add the following environment variables:
DB_URL=your_postgresql_database_url
PORT=3001

## Running the Server

To start the server, use the following command:

``` npm start```


The server will start running on the specified port, and you should see a message indicating that the server is running.

## Routes

### General Routes

1. **GET /** This route renders the home page and fetches data from a third-party API. It maps through the data to render the necessary key values.

2. **GET /?artists=${artist}:** This route uses query parameters to allow the user to search for specific artists.

3. **GET /?culture=${place}:** This route uses query parameters to allow the user to search for specific culture/places.

4. **GET /favorite:** This route renders a page saying "Welcome to Favorite List."

5. **GET /::id:** This route uses URL parameters to send a request with an ID to render a specific art piece from API using its ID.

### Art API Routes

1. **GET /allArts:** This route returns all art pieces stored in the database.

2. **GET /getArt/::id:** This route uses the GET method will return a specific artpiece from the database using the id param.

3. **POST /addNewArt:** This route uses the POST method to allow users to enter and display their art pieces by adding the required data into our database.

4. **PUT /update/::id:** This route uses the PUT method to allow users to update their comments on a specific art piece using the id param.

5. **DELETE /delete/::id:** This route uses the DELETE method to allow users to delete their comments or art pieces using the id param.

## Database Schema

The schema for the art table in the PostgreSQL database is described in the `art.schema.sql` file in the `schemas` folder. It defines the structure of the table and the data types for each column.

## Error Handling

The server includes error handling for 404 (Not Found) and 500 (Internal Server Error) pages. Custom error handling is implemented in the `Error_handler` folder.

## client.js file

it contains the url for our database and export the client that has all the nesseccary values to connect to our database.