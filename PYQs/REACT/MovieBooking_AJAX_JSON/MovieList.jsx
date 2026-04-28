import { useState, useEffect } from "react";

export default function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Using fetch (AJAX) to load local JSON data
        fetch("/src/data/movies.json")
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.error("Error fetching movies:", error));
    }, []);

    return (
        <div>
            <h1>Available Movies</h1>
            <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>Movie Title</th>
                         <th>Rating</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie, index) => (
                        <tr key={index}>
                            <td>{movie.title}</td>
                            <td>{movie.rating}</td>
                            <td>{movie.duration}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
