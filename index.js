window.onload = function() {
    const firebaseConfig = {
        apiKey: "AIzaSyAV3uRh2qZxwtMcienX_2lUHNGq3_dXt6g",
        authDomain: "chat-809d3.firebaseapp.com",
        projectId: "chat-809d3",
        storageBucket: "chat-809d3.firebasestorage.app",
        messagingSenderId: "181382536090",
        appId: "1:181382536090:web:18dad2c4b4b4cc34c2f823",
        measurementId: "G-9N0C07XVX7"
    };
    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
}
