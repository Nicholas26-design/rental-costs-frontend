document.addEventListener("DOMContentLoaded", () => {
    fetch('/api/costs')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('costs-table-body');
            tableBody.innerHTML = ''; // Clear existing rows
            data.forEach(cost => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${cost.month}</td>
                    <td>${cost.category}</td>
                    <td>${cost.amount}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching costs:', error));
});