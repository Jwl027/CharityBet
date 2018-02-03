(function(){
	var config = {
    	apiKey: "AIzaSyBPUnQS_FdP70ras4xGGB20GCezMuy2_kY",
    	authDomain: "charitybet-c4eb6.firebaseapp.com",
    	databaseURL: "https://charitybet-c4eb6.firebaseio.com",
    	projectId: "charitybet-c4eb6",
    	storageBucket: "",
    	messagingSenderId: "545734531716"
  	};
  	firebase.initializeApp(config);

  	var user ="";

  	firebase.auth().onAuthStateChanged(firebaseUser=>{
  		if (firebaseUser) {
  			console.log(firebaseUser.email);
  			user = firebaseUser.email.substring(0,firebaseUser.email.length-4);
  		}
  		else{
  			console.log('not logged in');
  		}

  	});

  	


  	//Storage Firebase!
  	var dbRefObject = firebase.database().ref().child('object');

  	//First lets do your bet info
  	//on final button click of the last person it makes a tab for it


  	//request  - hard cause access others 
  	//middleman


  	//Bet portion
  	var titleBet = document.getElementById('betTitle');
  	var requestButton = document.getElementById('b3');
  	var middleman =document.getElementById('middleManName');
  	var betty =document.getElementById('bettyName');
  	var moneyBet = document.getElementById('moneyBet');
  	var percentageBet =document.getElementById('');
  	var charityOfChoice =document.getElementById('');
  	
  	//Click part of request
  	requestButton.addEventListener('click',e=>{
  		console.log(user);
  		var auth = firebase.auth();
  		var ref = firebase.database().ref().child('users').child(user);
            //Sets up money side of bet
            ref.child("bets").child(titleBet).child('price').child('each').set(moneyBet);
            ref.child("bets").child(titleBet).child('price').child('percent').set(percentageBet);

            //Check if betty and middle are true for both
            //One false kicks out from the list
            //betty
			ref.child("bets").child(titleBet).child('betty').child('name').set(betty);  
			ref.child("bets").child(titleBet).child('betty').child('accept').set('pending');

			//middle
			ref.child("bets").child(titleBet).child('middle').child('name').set(middleman); 
			ref.child("bets").child(titleBet).child('middle').child('accept').set('pending');

			//Finally add sending the requests!
		ref = firebase.database().ref().child('users').child(middleman);
			ref.child("requests").child(titleBet).child('price').child('each').set(moneyBet);
			ref.child("requests").child(titleBet).child('price').child('percent').set(percentageBet);
			//set the better and betty for middleman to see
			ref.child("requests").child(titleBet).child('better').set(currentEmail);
			ref.child("requests").child(titleBet).child('betty').set(betty);
			ref.child("requests").child(titleBet).child('pending').set('pending');

		ref = firebase.database().ref().child('users').child(betty);
			ref.child("requests").child(titleBet).child('price').child('each').set(moneyBet);
			ref.child("requests").child(titleBet).child('price').child('percent').set(percentageBet);
			ref.child("requests").child(titleBet).child('better').set(currentEmail);
			ref.child("requests").child(titleBet).child('middle').set(middleman);
			ref.child("requests").child(titleBet).child('pending').set('pending');

  	});
  	//Need a checker for the pending requests!
  	//Or we can check 

  	//Requests

  	//Middle

}());