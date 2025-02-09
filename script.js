document.getElementById("admissionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    alert(`Thank you, ${name}! Your application for ${course} has been submitted.`);

    document.getElementById("admissionForm").reset();
});

function applyNow() {
    alert("Redirecting to the Admission Form...");
    document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
}
