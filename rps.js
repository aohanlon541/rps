//database setup  
  var config = {
    apiKey: "AIzaSyCWSR8VIzdr2vr0ZxP6w7yIfBXLKAfZy7U",
    authDomain: "rps-multi-e340c.firebaseapp.com",
    databaseURL: "https://rps-multi-e340c.firebaseio.com",
    projectId: "rps-multi-e340c",
    storageBucket: "rps-multi-e340c.appspot.com",
    messagingSenderId: "895340324044"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var connectionsRef = database.ref("/connections");

  var connectedRef = database.ref(".info/connected");

connectedRef.on("value", function(snap) {

  $("#submitBtn").on("click", function() {
    event.preventDefault();
    var submittedName = $("#name-input").val().trim();
  if (snap.val()) {
    var con = connectionsRef.push({
      name: submittedName,
      wins: 0});
    con.onDisconnect().remove();
  }
});

connectionsRef.on("value", function(snap) {
  console.log(snap.numChildren());
  console.log(snap.val().name);

});



//on every click, sets up a player with an unique #
  // var playerOne = 0;

  // var playerNum = 0;


  //   playerNum++;
  //  
  //   return playerNum;
  // });

  // database.ref().on("value", function(childSnapshot) {
  //   console.log(childSnapshot.val());
  // });  

  $(".imgBtn1").on("click", function () {
    var player1choice = $(this).val();
    console.log(player1choice)

    $(".imgBtn2").on("click", function () {
    var player2choice = $(this).val(); 
    console.log(player2choice); 

    function erase() {
      $("#results").empty();
    }
  });

   if (player1choice === player2choice) {
      $("#results").append("Tie!");
      setTimeout(erase, 5000);
    }

    if (player1choice === "rock" && player2choice === "paper") {
     $("#results").append(player2choice + " wins!");
      setTimeout(erase, 5000);
    }

    if (player1choice === "rock" && player2choice === "scissors") {
     $("#results").append(player1choice + " wins!");
      setTimeout(erase, 5000);
    }

    if (player1choice === "paper" && player2choice === "rock") {
     $("#results").append(player1choice + " wins!");
      setTimeout(erase, 5000);
    }

    if (player1choice === "paper" && player2choice === "scissors") {
     $("#results").append(player2choice + " wins!");
      setTimeout(erase, 5000);
    }

    if (player1choice === "scissors" && player2choice === "rock") {
     $("#results").append(player2choice + " wins!");
      setTimeout(erase, 5000);
    }

    if (player1choice === "scissors" && player2choice === "paper") {
     $("#results").append(player1choice + " wins!");
      setTimeout(erase, 5000);
    }


    }); 
  });




  var wins1 = 0;
  var losses1 = 0;
  var ties1 = 0;

  var wins2 = 0;
  var losses2 = 0;
  var ties2 = 0;

