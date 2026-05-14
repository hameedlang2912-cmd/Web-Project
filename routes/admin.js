
async function loadPortfolios() {
    try {
        const response = await fetch('/auth/all-users'); 
        const users = await response.json();
        
        const tableBody = document.getElementById('portfolioTableBody');
        tableBody.innerHTML = users.map(user => `
            <tr>
                <td>${user.username}</td>
                <td>${user.skills}</td>
                <td><button onclick="viewDetails('${user._id}')">View</button></td>
            </tr>
        `).join('');
    } catch (err) {
        console.error("Could not load portfolios", err);
    }
}