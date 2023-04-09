const firebaseConfig = {
    apiKey: "AIzaSyD861ysCRXLpDd_5054qUocn_cleYnRzIg",
    authDomain: "medcare-rats.firebaseapp.com",
    projectId: "medcare-rats",
    storageBucket: "medcare-rats.appspot.com",
    messagingSenderId: "945587451123",
    appId: "1:945587451123:web:079e258c9203da9d2b3386",
    measurementId: "G-WXJ51H6JFN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = firebase.auth();
  const database = firebase.database()

  function register(){

    NIC = document.getElementById("NIC").value

    auth.createUserwithNIC(NIC)
    .then(function(){

        var user = auth.currentUser

        // Add this user to Firebase Database
        var database_ref = database.ref()

        // Create user Database
        var user_data = {
            NIC : NIC,
            last_logn : Date.now()
        }

        database_ref.child('users/' + user.uid).set(user_data)



        alert("User Created")

    })

    .catch(function(error)
    {
        var error_code = error.code
        var error_message = error.message

        alert(error_message)
    })
  }