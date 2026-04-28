const mysql = require('mysql2');
const readline = require('readline');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Asus@260326",
    database: "student_db" 
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to the MySQL database.");
    startApp();
});

function startApp() {
    console.log("\n--- CRUD Operations ---");
    console.log("1. Insert Student Record");
    console.log("2. Display All Records");
    console.log("3. Update Age (id=2)");
    console.log("4. Delete Students (Age < 18)");
    console.log("5. Delete Student by ID");
    console.log("6. Exit");
    
    rl.question("Select an option (1-6): ", (choice) => {
        switch(choice) {
            case '1':
                insertStudent();
                break;
            case '2':
                displayRecords();
                break;
            case '3':
                updateAge();
                break;
            case '4':
                deleteUnderage();
                break;
            case '5':
                deleteById();
                break;
            case '6':
                db.end();
                rl.close();
                break;
            default:
                console.log("Invalid option.");
                startApp();
        }
    });
}

// 1. Insert multiple student records. Take name and age from user. Auto increment ID. [cite: 21, 22]
function insertStudent() {
    rl.question("Enter student name: ", (name) => {
        rl.question("Enter student age: ", (age) => {
            const sql = "INSERT INTO students (name, age) VALUES (?, ?)";
            db.query(sql, [name, age], (err, result) => {
                if (err) throw err;
                console.log(`Record inserted. Inserted ID: ${result.insertId}`);
                startApp();
            });
        });
    });
}

// 2. Display all records from the students table. [cite: 23]
function displayRecords() {
    const sql = "SELECT * FROM students";
    db.query(sql, (err, results) => {
        if (err) throw err;
        console.log("\n--- Student Records ---");
        console.table(results);
        startApp();
    });
}

// 3. Update student age where id=2. [cite: 24]
function updateAge() {
    // Assuming updating to a specific age for demonstration
    const newAge = 20; 
    const sql = "UPDATE students SET age = ? WHERE id = 2";
    db.query(sql, [newAge], (err, result) => {
        if (err) throw err;
        console.log(`Updated ${result.affectedRows} record(s). Age for ID=2 is now ${newAge}.`);
        startApp();
    });
}

// 4. Delete all students whose age < 18. [cite: 25]
function deleteUnderage() {
    const sql = "DELETE FROM students WHERE age < 18";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(`Deleted ${result.affectedRows} student(s) under 18.`);
        startApp();
    });
}

// 5. Take student ID from user and delete the record. [cite: 26]
function deleteById() {
    rl.question("Enter Student ID to delete: ", (id) => {
        const sql = "DELETE FROM students WHERE id = ?";
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            if(result.affectedRows > 0) {
                 console.log(`Record with ID ${id} deleted.`);
            } else {
                 console.log(`No record found with ID ${id}.`);
            }
            startApp();
        });
    });
}