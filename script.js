document.getElementById("admissionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    alert(`Thank you, ${name}! Your application for ${course} has been submitted.`);
    saveData(name, email, course);

    document.getElementById("admissionForm").reset();
});

// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT.firebaseio.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.database();

function saveData(name, email, course) {
    let newApplicationRef = db.ref('applications').push();
    newApplicationRef.set({
        name: name,
        email: email,
        course: course
    });
}
