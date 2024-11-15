# Movie Database Application

This project is a RESTful API designed to manage a movie database stored in a JSON file. It allows users to browse, filter, and classify movies based on several attributes such as popularity, genres, cast, duration, and release year.

## Features
- Retrieve lists of movies based on:
  - Popularity (calculated using ratings, total votes, and viewer counts).
  - Similarity (based on genres, IMDB ratings, and cast).
  - Movies featuring the same actor.
  - Duration and release year.
- Navigate playlists with forward and backward controls.
- Developed using Object-Oriented Programming principles with design patterns.

## Tech Stack
- **Node.js**
- **Express**

## Project Structure

* routes, Endpoint definitions
* controllers, Handles HTTP requests
* services, Business logic and data processing
* repositories, Database access
* models, Data models
* utils, Helper functions
* data, datafiles

## Getting Started

### Prerequisites
Make sure you have **node.js** and **npm** installed on your system.

### Installation
1. Clone the repository:
```bash
git clone https://github.com/ozcodx/movie-database.git
cd movie-database
```

2. Install dependencies:
```bash
npm install
```

3. Add your movie database JSON file:
Place the `movies.json` file in the `/src/data/` directory.

### Running the Application
To start the application, run:
```bash
npm run start
```

Running Tests

To execute unit tests:
```bash
npm run test
```

### Endpoints

`GET /movies`
Retrieve the full list of movies.

```
[
  {
    "title": "Movie Title",
    "year": 2023,
    "genres": ["Action", "Adventure"],
    "cast": ["Actor 1", "Actor 2"],
    "duration": 120,
    "imdbRating": 8.5,
    "viewerCount": 1500
  }
]
```

### Future Improvements

- Dockerize the application.
- Add more endpoints for filtering and classifying movies.
- Implement playlist navigation.
- Optimize the performance of the classification algorithm.

### License

This project is licensed under the MIT License.

