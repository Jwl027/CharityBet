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

  	firebase.auth().onAuthStateChanged(firebaseUser=>{
  		if (firebaseUser) {
  			console.log(firebaseUser.email);
  			var user = firebaseUser.email.substring(0,firebaseUser.email.length-4);

  			document.getElementById('confirm').addEventListener('click',e=>{
  				console.log(document.getElementById('descript').value);
  				console.log(document.getElementById('moneyBet').value);

  				var ref = firebase.database().ref().child('users').child(user).child('resolutions');
  			ref.child(document.getElementById('descript').value).child('price').set(document.getElementById('moneyBet').value);


  			});







  		}
  		else{
  			
  		}
  	});

}());