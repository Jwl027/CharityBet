<<<<<<< HEAD
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
=======
function createCard() {
    var text = document.getElementById("descript").value;
    var text_2 = document.getElementById("moneyBet").value;
    var text_3 = document.getElementById("charity").value;
    $container = $("<div>", {"class": "container", "id": "container" + text})

    $card = $("<div>", {"class": "card", "id": "card" + text});

    $descriptDiv = $("<div>", {"class": "descriptDiv", "id": "descriptDiv" + text});
    $resolvedDiv = $('<div>', {"class": "resolvedDiv", "id": "resolvedDiv"+text});
    $div = $("<div>", {"class": "forgottenDiv", "id":"forgottenDiv" +text});
    $unresolvedDiv = $('<div>', {"class": "unresolvedDiv", "id": "unresolvedDiv"+text});
    $amountDiv = $("<div>", {"class": "amountDiv", "id": "amountDiv" + text});
    $charityDiv = $("<div>", {"class": "charityDiv", "id": "charityDiv" + text});

    $descriptText = $("<h1>", {"class": "h1UpText", "id":"h1UpText" + text});
    $amountText = $("<h1>", {"class": "h1MidText", "id":"h1MidText" + text});
    $chaityText = $("<h1>", {"class": "chaityText", "id":"chaityText" + text});
    $approve = $("<button>", {"class": "approve", "id":"approve" + text});
    $unapprove = $("<button>", {"class": "unapprove", "id":"unapprove" + text});

    // r str = $b1.attr('id');

    $approve.on("click", function(){
        // str = str.charAt(str.length - 1);
        $("#container" + text).remove();
    });
    $unapprove.on("click", function(){
        // str = str.charAt(str.length - 1);
        $("#container" + text).remove();
    });


    $approve.append("Completed");
    $unapprove.append("Quit");

    $descriptText.append(text);
    $amountText.append(text_2);
    $chaityText.append(text_3);


    $descriptDiv.append( $descriptText );
    $amountDiv.append( $amountText );
    $charityDiv.append( $chaityText );
    $resolvedDiv.append( $approve );
    $unresolvedDiv.append( $unapprove );
    $div.append($resolvedDiv);
    $div.append($amountDiv);
    $div.append($unresolvedDiv);

    $card.append($descriptDiv);
    $card.append($div);
    $card.append($charityDiv);

    $container.append($card);

    $("#box").append($container);



    console.log(text);
}

function countDown() {

    return 0;
}
>>>>>>> 9c367a50bb7a0085360398149442e181787321b7
