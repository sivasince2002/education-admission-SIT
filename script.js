document.getElementById("admissionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    alert(`Thank you, ${name}! Your application for ${course} has been submitted.`);
    saveData(name, email, course);

    document.getElementById("admissionForm").reset();
});

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs8zP1O0wcZzDxo9twW1_3FntpPCb7cC8",
  authDomain: "education-admission-2025.firebaseapp.com",
  databaseURL: "https://education-admission-2025-default-rtdb.firebaseio.com",
  projectId: "education-admission-2025",
  storageBucket: "education-admission-2025.firebasestorage.app",
  messagingSenderId: "248055776639",
  appId: "1:248055776639:web:046f5fcbd76a2b5594064a",
  measurementId: "G-WGXSG2F0H4"
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
