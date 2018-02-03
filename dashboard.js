// betCount is number of bets currently active
function creator(){
	//Firebase code
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
  	var betArray =[];
  	var requestArray =[];
  	var ref='';
  	firebase.auth().onAuthStateChanged(firebaseUser=>{
  		if (firebaseUser) {
  			console.log(firebaseUser.email);
  			user = firebaseUser.email.substring(0,firebaseUser.email.length-4);
  			ref =firebase.database().ref().child('users').child(user);
  			ref.child('requests').once('value',snap=>{
  				console.log(snap.val());
                //RIght
  				var i = 0;

  				snap.forEach(function(child){
  				console.log(child.key+ "	got none");
  				//console.log(child.key);
  				requestArray.push(child.key);
  				console.log(1);

  				var $div = $("<div>", {"class": "requestedBets", "id": "reqBet" + i});
				var $div2 = $("<div>", {"class": "requestedBetsCard", "id": "reqBetCard" + i});
				var $div3 = $("<div>", {"class": "requestedBetsDetails", "id": "reqBetDetails" + i});
				var $div4 = $("<div>", {"class": "requestedBetsDecision", "id": "reqBetDecision" + i});
				var $div5 = $("<div>", {"class": "requestedBetsCharity", "id": "reqBetCharity" + i});



					//TODO: CHANGE .append text to bet description
					$($div3).append( $("<h1>", {"class": "requestedBetsDetailsText", "id" : "reqBetDetailsText" + i}).append(child.key)    );

                    var $b1 = $("<button>", {"class": "reqBetDecDecline", "id" : "reqBetDecDecline" + i});
                    var $b2 = $("<button>", {"class": "reqBetDecApprove", "id" : "reqBetDecApprove" + i});

                    var str = $b1.attr('id');
                    $b1.on("click", function(){
                        str = str.charAt(str.length - 1);
                        $("#reqBet" + str).remove();
                    });

                    function buttonDecline() {
                        console.log("reqBetDecApprove" + i);
                        $("#reqBet" + i).remove();
                    }

                    //TODO: MAKE BUTTON FCNS ACTUALLY WORK
					$($div4).append( $b2);
                    $($div4).append($b1);
                    // $div4.onclick = function() {
                    //     conosole.log("Onclick");
                    //     $("reqBetDecDecline" + i).remove();
                    // };
					//TODO: MAKE CHARITY NAME ACTUALLY APPEAR
					$($div5).append( $("<h1>", {"class": "requestedBetsCharityText", "id" : "requestedBetsCharityText" + i}).append("Charity Name")    );


				$div2.append($div3);
				$div2.append($div4);
				$div2.append($div5);

				$div.append($div2);

				$("#right").append($div);
  				i++;
  				});


  			});


  			ref.child('bets').once('value',snap=>{
  				console.log(snap.val());

  				snap.forEach(function(child){
  					console.log(child.val());
  					//console.log(child.key);
  					betArray.push(child.key);
  					console.log(1);


  					// var $divUserName = $("<div>", {"class": "userNameL"});
					// var $divOponentName = $("<div>", {"class": "userNameR"});
					var $divDescription = $("<div>", {"class": "description"});
					var $divMiddleMan = $("<div>", {"class": "middleMan"});
					// var $divAmount = $("<div>", {"class": "amount"});
					var $divDetails = $("<div>", {"class": "details"});

					var $userName = $("<h3>", {"class": "userNameText"});
					var $oponentName = $("<h3>", {"class": "oponentNameText"});
					var $middleManName = $("<h3>", {"class": "middleManText"});
					var $amount = $("<h3>", {"class": "amountText","id" : "amount" + i});
					var $description = $("<h3>", {"class" : "descriptionText", "id" : "description" + i});

					//TODO:CHANGE OPPONENT NAME and MIDDLE MAN NAME DYNAMIC
					$oponentName.append("OPPENT_NAME_AT_I");
					$userName.append('USERNAME');
					$middleManName.append("MIDDLE MAN" + i);
					$description.append("DESCRIPTION" + i);
					$amount.append("$ " + i);
					// $divUserName.append($userName);
					// $divOponentName.append($oponentName);
					$divDescription.append($description);
					// $divAmount.append($amount);
					$divMiddleMan.append($middleManName);

					//TODO: CHANGE DESCRIPTION DYNAMIC
					//		Change AMOUNT DYNAMIC

					$divDetails.append($userName);
					$divDetails.append($amount);
					$divDetails.append($oponentName);


					var $div = $("<div>", {id: "card" + i, "class": "card"});
					var $div2 = $("<div>", {id: "innerCard" + i, "class": "inner"});

					// $div2.append($divDescription);

					// $div2.append($divUserName);
					// $div2.append($divAmount);
					// $div2.append($divOponentName);


					$div2.append($divDescription);
					$div2.append($divDetails);
					$div2.append($divMiddleMan);
					$div.append($div2);
					$("#middle").append($div);






  				});




  			});
		//Leftside
		ref.child('middle').once('value',snap=>{
  			console.log(snap.val());

  			snap.forEach(function(child){

  				$container = $("<div>", {"class": "midManContain", "id" : "midManContain" + i});
		$card = $("<div>", {"class": "midManCard", "id": "midManCard" + i});
		$user1 = $("<div>", {"class": "minManUser1", "id": "minManUser1" + i});
		$approve = $("<div>", {"class": "minManApprove", "id": "minManApprove" + i});
		$user2 = $("<div>", {"class": "minManUser2", "id": "minManUser2" + i});

		//TODO Remove USER1Name  & 2 with actual username
		$user1.append( $("<h1>", {"class": "minManUser1Text", "id": "minManUser1Text" + i}).append("USER1Name") );
		$user1.append( $("<input>", {"type": "checkbox", "class": "CheckBox", "id" : "CheckBoxU1" + i}) );


		$user2.append( $("<h1>", {"class": "minManUser2Text", "id": "minManUser2Text" + i}).append("USER2Name") );
		$user2.append( $("<input>", {"type": "checkbox", "class": "CheckBox", "id" : "CheckBoxU2" + i}) );

		$approve.append( $("<button>", {"class": "ApproveButton", "id": "ApproveButton" + i}) );

		$card.append($user1);
		$card.append($approve);
		$card.append($user2);

		$container.append($card);

		$("#left").append($container);
  			});




  		});
		//end of left side

  		}
  		else{
  			console.log('not logged in');
  		}

  	});

  	//need to do async
  	//or put this user stuff inside of onAuthstatechanged



	//DYNAMICLLY CREATES CARDS FOR MIDDLE ACTIVE BETS
	//TODO
	//CHANGE I TO ARRAY SIZE OF ACTIVE BETS
	for (var i = 0; i < 0; i++) {
		// var $divUserName = $("<div>", {"class": "userNameL"});
		// var $divOponentName = $("<div>", {"class": "userNameR"});
		var $divDescription = $("<div>", {"class": "description"});
		var $divMiddleMan = $("<div>", {"class": "middleMan"});
		// var $divAmount = $("<div>", {"class": "amount"});
		var $divDetails = $("<div>", {"class": "details"});

		var $userName = $("<h3>", {"class": "userNameText"});
		var $oponentName = $("<h3>", {"class": "oponentNameText"});
		var $middleManName = $("<h3>", {"class": "middleManText"});
		var $amount = $("<h3>", {"class": "amountText","id" : "amount" + i});
		var $description = $("<h3>", {"class" : "descriptionText", "id" : "description" + i});

		//TODO:CHANGE OPPONENT NAME and MIDDLE MAN NAME DYNAMIC
		$oponentName.append("OPPENT_NAME_AT_I");
		$userName.append('USERNAME');
		$middleManName.append("MIDDLE MAN" + i);
		$description.append("DESCRIPTION" + i);
		$amount.append("$ " + i);
		// $divUserName.append($userName);
		// $divOponentName.append($oponentName);
		$divDescription.append($description);
		// $divAmount.append($amount);
		$divMiddleMan.append($middleManName);

		//TODO: CHANGE DESCRIPTION DYNAMIC
		//		Change AMOUNT DYNAMIC

		$divDetails.append($userName);
		$divDetails.append($amount);
		$divDetails.append($oponentName);


		var $div = $("<div>", {id: "card" + i, "class": "card"});
		var $div2 = $("<div>", {id: "innerCard" + i, "class": "inner"});

		// $div2.append($divDescription);

		// $div2.append($divUserName);
		// $div2.append($divAmount);
		// $div2.append($divOponentName);


		$div2.append($divDescription);
		$div2.append($divDetails);
		$div2.append($divMiddleMan);
		$div.append($div2);
		$("#middle").append($div);




	}



	//Left side
	for (var i = 0; i < 0; i++) {
		$container = $("<div>", {"class": "midManContain", "id" : "midManContain" + i});
		$card = $("<div>", {"class": "midManCard", "id": "midManCard" + i});
		$user1 = $("<div>", {"class": "minManUser1", "id": "minManUser1" + i});
		$approve = $("<div>", {"class": "minManApprove", "id": "minManApprove" + i});
		$user2 = $("<div>", {"class": "minManUser2", "id": "minManUser2" + i});

		//TODO Remove USER1Name  & 2 with actual username
		$user1.append( $("<h1>", {"class": "minManUser1Text", "id": "minManUser1Text" + i}).append("USER1Name") );
		$user1.append( $("<input>", {"type": "checkbox", "class": "CheckBox", "id" : "CheckBoxU1" + i}) );


		$user2.append( $("<h1>", {"class": "minManUser2Text", "id": "minManUser2Text" + i}).append("USER2Name") );
		$user2.append( $("<input>", {"type": "checkbox", "class": "CheckBox", "id" : "CheckBoxU2" + i}) );

		$approve.append( $("<button>", {"class": "ApproveButton", "id": "ApproveButton" + i}) );

		$card.append($user1);
		$card.append($approve);
		$card.append($user2);

		$container.append($card);

		$("#left").append($container);

	}

}

function buttonApprove() {
	console.log("Approve Bet");
}

function buttonDecline(str) {
    console.log("Decline");
    $(str).remove();
}
