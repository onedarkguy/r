function fetchJSON() {
    fetch('data.json')
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json(); // Parse JSON 
        })
        .then(data => {
            const tbody = document.getElementById('json-body');
            tbody.innerHTML = ''; // Clear previous data
            data.forEach(item => {
                let row = `<tr><td>${item.name}</td><td>${item.age}</td><td>${item.city}</td></tr>`;
                tbody.innerHTML += row; // Render dynamically 
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
}
