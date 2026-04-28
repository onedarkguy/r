import { useState, useEffect } from "react";
import rawData from "../data/students.json";

export default function StudentDetails() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const jsonString = JSON.stringify(rawData);
        const parsedData = JSON.parse(jsonString);

        // Filter students with marks > 75
        const filteredStudents = parsedData.filter(student => student.marks > 75);
        setStudents(filteredStudents);
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Student Details</h1>
            <h3>Students with marks &gt; 75</h3>
            <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.rollNo}>
                            <td>{student.name}</td>
                            <td>{student.rollNo}</td>
                            <td>{student.marks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}