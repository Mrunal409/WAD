let users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let user = { name, email, phone };

    // AJAX POST simulation
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function() {
        if (xhr.status === 201 || xhr.status === 200) {
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));

            showData();
        }
    };

    xhr.send(JSON.stringify(user));
});

function showData() {
    document.getElementById("formPage").classList.add("hidden");
    document.getElementById("dataPage").classList.remove("hidden");

    let table = document.getElementById("userTable");
    table.innerHTML = "";

    users.forEach(u => {
        let row = `
            <tr>
                <td>${u.name}</td>
                <td>${u.email}</td>
                <td>${u.phone}</td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

function goBack() {
    document.getElementById("dataPage").classList.add("hidden");
    document.getElementById("formPage").classList.remove("hidden");
}