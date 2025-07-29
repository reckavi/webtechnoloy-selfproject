// Function to add patient (Reception Page)
function addPatient() {
    let pname = document.getElementById("pname").value;
    let age = document.getElementById("age").value;
    let disease = document.getElementById("disease").value;

    if (pname === "" || age === "" || disease === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Create patient object
    let patient = { pname, age, disease };

    // Get existing patients from localStorage
    let patients = JSON.parse(localStorage.getItem("patients")) || [];

    // Add new patient
    patients.push(patient);

    // Save back to localStorage
    localStorage.setItem("patients", JSON.stringify(patients));

    // Clear form fields after adding
    document.getElementById("pname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("disease").value = "";

    alert("Patient added successfully!");
}

// Function to handle hospital login
function loginHospital() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        // Store login status in localStorage
        localStorage.setItem("hospitalLoggedIn", "true");

        // Reload page to show patient details
        location.reload();
    } else {
        alert("Invalid username or password!");
    }
}

// Function to display patients only if logged in
function displayPatients() {
    let hospitalTable = document.getElementById("hospitalTable");
    let loginSection = document.getElementById("loginSection");
    let patientSection = document.getElementById("patientSection");

    // Check if hospital is logged in
    let isLoggedIn = localStorage.getItem("hospitalLoggedIn");

    if (isLoggedIn === "true") {
        loginSection.style.display = "none"; // Hide login form
        patientSection.style.display = "block"; // Show patient table

        // Get patients from localStorage
        let patients = JSON.parse(localStorage.getItem("patients")) || [];

        // Clear existing table rows except headers
        hospitalTable.innerHTML = "<tr><th>Name</th><th>Age</th><th>Disease</th></tr>";

        // Append each patient to the table
        patients.forEach(patient => {
            let row = hospitalTable.insertRow();
            row.insertCell(0).innerText = patient.pname;
            row.insertCell(1).innerText = patient.age;
            row.insertCell(2).innerText = patient.disease;
        });
    } else {
        loginSection.style.display = "block"; // Show login form
        patientSection.style.display = "none"; // Hide patient table
    }
}

// Logout function
function logoutHospital() {
    localStorage.removeItem("hospitalLoggedIn");
    location.reload();
}

// Run display function only if on hospital page
if (window.location.pathname.includes("hospital.html")) {
    displayPatients();
}
