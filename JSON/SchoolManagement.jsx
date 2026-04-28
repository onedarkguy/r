import React, { useState, useEffect } from 'react';

export default function SchoolManagement() {
  const studentsJSON = [
    { name: "John", rollno: 101, subjects: { Math: 85, Science: 92 }, grades: "A" },
    { name: "Bob", rollno: 102, subjects: { Math: 78, Science: 81 }, grades: "B" },
    { name: "Ana", rollno: 103, subjects: { Math: 95, Science: 89 }, grades: "A+" }
  ];

  return (
    <div>
      <table border="1" cellPadding="10">
        <thead>
          <tr><th>Name</th><th>Roll No</th><th>Grades</th><th>Math Marks</th></tr>
        </thead>
        <tbody>
          {studentsJSON.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.rollno}</td>
              <td>{student.grades}</td>
              <td>{student.subjects.Math}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}