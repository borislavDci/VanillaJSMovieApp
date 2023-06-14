# Movie List

## Task:

In this assignment, your objective is to develop an engaging and user-friendly web application that allows users to create their own movie list. You'll be fetching movie data from the Open Movie Database (OMDb) API and displaying it on your page.

## Requirements:

- Create a JavaScript file, e.g., `app.js`, to write your main application logic.
- Connect with the [OMDb API](https://www.omdbapi.com/) to fetch movie data. Handle the returned promise and use the data to display the movie details on your page. Remember to add your API token to your API requests.
- Implement a feature that ensures a movie is only added to the list once. If a user attempts to add a duplicate movie, an alert message should inform them about the duplication.
- Add functionality that allows users to save their movie list. Implement a persistence mechanism so that the user's list remains available even after refreshing the page.
- Add a reset feature to the application. On using this, the user's movie list should be cleared entirely, and a page refresh should not bring back any previously listed movies.

## Additional Challenge:

- For an additional challenge, make your webpage responsive, ensuring it displays well on both desktop and mobile devices.

## Points to Consider:

- Learn about and work with promises in JavaScript as you'll need to use them when making requests to the API.
- Investigate how to persist data in a web application. Consider using the Web Storage API (localStorage or sessionStorage) for this purpose.
- Explore responsive design principles to make your application accessible across a range of devices.
- Prioritize user experience in your design. The application should be easy to use and visually appealing.

Example output:

![demo](./demo.png)