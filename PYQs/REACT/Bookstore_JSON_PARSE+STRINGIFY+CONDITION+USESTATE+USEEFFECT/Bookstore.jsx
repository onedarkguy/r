import { useState, useEffect } from "react";
import rawData from "../data/books.json";

function BookStore() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const jsonString = JSON.stringify(rawData); // Converting to string first
        const parsedData = JSON.parse(jsonString);   // Then parsing it back
        
        // Now filter the parsed data
        const filteredBooks = parsedData.filter(book => book.price > 500);
        setBooks(filteredBooks);
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Bookstore</h1>
            <h3>Books with price &gt; 500 (Filtered using JSON.parse)</h3>
            <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={index}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookStore;