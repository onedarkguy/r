function fetchXML() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.xml', true);
    
    xhr.onload = function() {
        if (this.status === 200) {
            const xmlDoc = this.responseXML; // Parse XML 
            const students = xmlDoc.getElementsByTagName('student');
            const tbody = document.getElementById('xml-body');
            tbody.innerHTML = '';

            for (let i = 0; i < students.length; i++) {
                let name = students[i].getElementsByTagName('name')[0].textContent;
                let age = students[i].getElementsByTagName('age')[0].textContent;
                let row = `<tr><td>${name}</td><td>${age}</td></tr>`;
                tbody.innerHTML += row;
            }
        }
    };
    xhr.onerror = () => console.error("Request failed");
    xhr.send();
}