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
            // var i = 0;
            ref.child('requests').once('value',snap=>{
  				console.log(snap.val());
                //RIght
  				var i = 0;

  				snap.forEach(function(child){

		          requestArray.push(child.key);


				 //Structure
				 var $divContainer = $("<div>", {"class": "rContainerDiv", "id": "reqBet" + i});

				 var $divCard = $("<div>", {"class": "rCardDiv", "id": "reqBetCard" + i});

				 //Sub Structures
				 var $divDescription = $("<div>", {"class": "rDescriptionDiv", "id": "reqBetDetails" + i});
				 var $divDetails = $("<div>", {"class": "rDetailDiv", "id": "reqBetDecision" + i});
				 var $divMidMan = $("<div>", {"class": "rMinManDiv", "id": "reqBetCharity" + i});

				 //Components
				 var $description = $("<h1>", {"class": "rDescriptionText", "id" : "reqBetDetailsText" + i})

				 var $userName = $("<div>", {"class": "rUserName", "id": "rUserName" + i});
				 var $amount = $("<div>", {"class": "rAmount", "id": "rAmount" + i});
				 var $opponent = $("<div>", {"class": "rOpponent", "id": "rOpponent" + i});


                    var $b1 = $("<button>", {"class": "reqBetDecDecline", "id" : "reqBetDecDecline" + i});
                    var $b2 = $("<button>", {"class": "reqBetDecApprove", "id" : "reqBetDecApprove" + i});
                    $b1.append('Decline');
                    $b2.append('Approve');
                    //Deletes Cards
                    var str = $b1.attr('id');
                    $b1.on("click", function(){
                        str = str.charAt(str.length - 1);
                        $("#reqBet" + str).remove();

                        //Need a way to see if this is a middle or a
                        if(child.child('middle').val()==null){
                        	console.log("this is the mid");
                        	var bettyMan=child.child('betty').val().substring(0,child.child('betty').val().length-4);
                        	var betterMan =child.child('better').val().substring(0,child.child('better').val().length-4);
                        firebase.database().ref().child('users').child(user).child('requests').child(child.key).remove();
                        firebase.database().ref().child('users').child(betterMan).child('bets').child(child.key).remove();
                        firebase.database().ref().child('users').child(bettyMan).child('requests').child(child.key).remove();
                        }
                        else{
							console.log("this is not the mid");
							var midMan = child.child('middle').val().substring(0,child.child('middle').val().length-4);
							var betterMan =child.child('better').val().substring(0,child.child('better').val().length-4);
                        firebase.database().ref().child('users').child(user).child('requests').child(child.key).remove();
                        firebase.database().ref().child('users').child(betterMan).child('bets').child(child.key).remove();
                        firebase.database().ref().child('users').child(midMan).child('requests').child(child.key).remove();

                        }







                    });

					$b2.on("click", function(){
						str = str.charAt(str.length - 1);
                        $("#reqBet" + str).remove();



                        var betterMan =child.child('better').val().substring(0,child.child('better').val().length-4);

                        if(child.child('middle').val()==null){
                        	console.log("this is the mid");

                        	var bettyMan = child.child('betty').val().substring(0,child.child('betty').val().length-4);
                        	//If both true for pending then go through this
                        	console.log(betterMan);
                        	var getTruth = firebase.database().ref().child('users').child(betterMan);
							getTruth.once("value")
  							.then(function(innerSnap) {
    							//var key = snapshot.key; // "ada"

    							if(innerSnap.child('bets').child(child.key).child('betty').child('accept').val()=='pending'){
    								console.log('pending	of mid');
    								firebase.database().ref().child('users').child(betterMan).child('bets').child(child.key).child('middle').child('accept').set('true');
    								firebase.database().ref().child('users').child(user).child('requests').child(child.key).remove();
    							}
    							//else not pending and we do all the work
    							else
    							{
    								console.log('not pending	of mid');
    								//Have to switch the grey ones to not pending
    								// mid setup own data!
    								//firebase.database().ref().child('users').child(bettyMan);
    								//move bettys data to and actual one
    								firebase.database().ref().child('users').child(user).child('middleWork').child(child.key).child('better').child('name').set(child.child('better').val());
    								firebase.database().ref().child('users').child(user).child('middleWork').child(child.key).child('better').child('pending').set('true');

    								firebase.database().ref().child('users').child(user).child('middleWork').child(child.key).child('betty').child('name').set(child.child('betty').val());
    								firebase.database().ref().child('users').child(user).child('middleWork').child(child.key).child('betty').child('pending').set('true');

    								//price
    								firebase.database().ref().child('users').child(user).child('middleWork').child(child.key).child('price').child('percent').set(child.child('price').child('percent').val());
    								firebase.database().ref().child('users').child(user).child('middleWork').child(child.key).child('price').child('each').set(child.child('price').child('each').val());
    								//remove from the request block after!
    								//firebase.database().ref().child('users').child(midMan).child('requests').child(child.key).remove();

    								firebase.database().ref().child('users').child(bettyMan).child('bets').child(child.key).child('middle').child('accept').set('true');

    								//move bettys data to and actual one
    								firebase.database().ref().child('users').child(bettyMan).child('bets').child(child.key).child('betty').child('name').set(betterMan);
    								firebase.database().ref().child('users').child(bettyMan).child('bets').child(child.key).child('betty').child('pending').set('true');

    								firebase.database().ref().child('users').child(bettyMan).child('bets').child(child.key).child('middle').child('name').set(user);
    								firebase.database().ref().child('users').child(bettyMan).child('bets').child(child.key).child('middle').child('pending').set('true');

    								//price
    								firebase.database().ref().child('users').child(bettyMan).child('bets').child(child.key).child('price').child('percent').set(child.child('price').child('percent').val());
    								firebase.database().ref().child('users').child(bettyMan).child('bets').child(child.key).child('price').child('each').set(child.child('price').child('each').val());


    								firebase.database().ref().child('users').child(user).child('requests').child(child.key).remove();



    								//We are mid so move onto the mid stack!
    							}
                        	//remove self
                        	//firebase.database().ref().child('users').child(user).child('requests').child(child.key).remove();
                        	});
                        }
                        else{
							console.log("this is not the mid");
							var midMan = child.child('middle').val().substring(0,child.child('middle').val().length-4);
							//remove self
							console.log(betterMan + "	better man");
							var getTruth = firebase.database().ref().child('users').child(betterMan);
							getTruth.once("value")
  							.then(function(innerSnap) {
    							//var key = snapshot.key; // "ada"

    							if(innerSnap.child('bets').child(child.key).child('middle').child('accept').val()=='pending'){
    								console.log('pending	in not mid');
    								console.log(innerSnap.child('bets').child(child.key).child(user).child('accept').val());
    								console.log(innerSnap.key);
    								firebase.database().ref().child('users').child(betterMan).child('bets').child(child.key).child('betty').child('accept').set('true');
    								firebase.database().ref().child('users').child(user).child('requests').child(child.key).remove();
    								//firebase.database().ref().child('users').child(user).child('requests').child(child.key).remove();
    							}
    							//else not pending and we do all the work
    							else
    							{
    								console.log("not pending in not mid");
    								//Have to switch the grey ones to not pending
    								// mid setup own data!
    								firebase.database().ref().child('users').child(betterMan).child('bets').child(child.key).child('middle').child('accept').set('true');
    								firebase.database().ref().child('users').child(midMan);
    								//move bettys data to and actual one
    								firebase.database().ref().child('users').child(user).child('bets').child(child.key).child('betty').child('name').set(child.child('better').val());
    								firebase.database().ref().child('users').child(user).child('bets').child(child.key).child('betty').child('pending').set('true');

    								firebase.database().ref().child('users').child(user).child('bets').child(child.key).child('middle').child('name').set(child.child('middle').val());
    								firebase.database().ref().child('users').child(user).child('bets').child(child.key).child('middle').child('pending').set('true');

    								//price
    								firebase.database().ref().child('users').child(user).child('bets').child(child.key).child('price').child('percent').set(child.child('price').child('percent').val());
    								firebase.database().ref().child('users').child(user).child('bets').child(child.key).child('price').child('each').set(child.child('price').child('each').val());
    								//remove from the request block after!

    								firebase.database().ref().child('users').child(midMan).child('middleWork').child(child.key).child('better').child('name').set(child.child('better').val());
    								firebase.database().ref().child('users').child(midMan).child('middleWork').child(child.key).child('better').child('pending').set('true');

    								firebase.database().ref().child('users').child(midMan).child('middleWork').child(child.key).child('betty').child('name').set(user);
    								firebase.database().ref().child('users').child(midMan).child('middleWork').child(child.key).child('betty').child('pending').set('true');

    								//price
    								firebase.database().ref().child('users').child(midMan).child('middleWork').child(child.key).child('price').child('percent').set(child.child('price').child('percent').val());
    								firebase.database().ref().child('users').child(midMan).child('middleWork').child(child.key).child('price').child('each').set(child.child('price').child('each').val());



    								//firebase.database().ref().child('users').child(midMan).child('requests').child(child.key).remove();
    								//firebase.database().ref().child('users').child(user).child('requests').child(child.key).remove();
    								firebase.database().ref().child('users').child(user).child('requests').child(child.key).remove();
    							}
  							});

							//console.log(+"		HEY");

							//firebase.database().ref().child('users').child(user).child('requests').child(child.key).remove();
                        }


                        /*
                        firebase.database().ref().child('users').child(user).child('requests').child(child.key).remove();
                        if(midMan==null){
                        	firebase.database().ref().child('users').child(betterMan).child('bets').child(child.key).child('betty').child('accept').set('true');
                        	if(firebase.database().ref().child('users').child(betterMan).child('bets').child(child.key).child('middle').child('accept').val()=='true'){
                        		console.log("true");
                        	}
                        }
                        else{
							firebase.database().ref().child('users').child(betterMan).child('bets').child(child.key).child('midMan').child('accept').set('true');
							if(firebase.database().ref().child('users').child(betterMan).child('bets').child(child.key).child('middle').child('accept').val()=='true'){
                        		console.log("true");

                        	}
						}*/


					});

				 var $midMan = $("<div>", {"class": "rMidMan", "id": "rMidMan" + i});
				 var $charity = $("<div>", {"class": "rCharity", "id": "rCharity" + i});

				 //Init
				 $userName.append( $("<h1>", {"class": "rUser", "id": "rUser" + i}) );
				 $amount.append( $("<h1>", {"class": "rAmountValue", "id": "rAmountVale" + i}) );
				 $opponent.append( $("<h1>", {"class": "rOp", "id": "rOp" + i}) );


				 $midMan.append( $("<h2>", {"class": "rMidM", "id": "rMidM" + i}) );
				 $charity.append( $("<h2>", {"class": "rChar", "id": "rChar" + i}) );



				 $description.append(child.key);

				 $userName.append("U1");
				 $amount.append("$Amount");
				 $opponent.append("O1");

				 $midMan.append("MM1");
				 $charity.append("Chartiy");

				 //Connecting
				 $divDescription.append($description);

				 $divDetails.append($userName);
				 $divDetails.append($amount);
				 $divDetails.append($opponent);

				 $divMidMan.append($midMan);
				 $divMidMan.append($charity);

				 $divCard.append($divDescription);
				 $divCard.append($divDetails);
				 $divCard.append($divMidMan);

				 $divContainer.append($divCard);

				$("#right").append($divContainer);
      				i++;
  				});


  			});


			//MIDDLE
			ref.child('bets').once('value',snap=>{
			    console.log(snap.val());

			    snap.forEach(function(child){
			        console.log(child.val());


			        console.log(child.child('middle').child('name').val());


			        // var $divUserName = $("<div>", {"class": "userNameL"});
			        // var $divOponentName = $("<div>", {"class": "userNameR"});
			        var $divDescription = $("<div>", {"class": "description"});
			        var $divMiddleMan = $("<div>", {"class": "middleMan"});
			        // var $divAmount = $("<div>", {"class": "amount"});
			        var $divDetails = $("<div>", {"class": "details"});

			        var $userName = $("<div>", {"class": "userNameDiv"});
			        var $oponentName = $("<div>", {"class": "oponentNameDiv"});
			        var $middleManName = $("<h4>", {"class": "middleManText", "id": "oponentNameTextInner" + i} );
			        var $amount = $("<div>", {"class": "amountDiv","id" : "amountDiv" + i});
			        var $description = $("<h3>", {"class" : "descriptionText", "id" : "description" + i});

			        $userName.append( $("<h1>"), {"class": "userNameTextInner",
			    "id": "userNameTextInner" + i} );
			        $oponentName.append( $("<h1>"), {"class": "oponentNameText",
			    "id": "oponentNameTextInner" + i} );
			// 		$middleManName.append( $("<h3>"), {"class": "middleManText",
			// "id": "middleManText" + i} );
			        $amount.append( $("<h1>"), {"class": "amountText",
			    "id": "amountText" + i} );
			        //TODO:CHANGE OPPONENT NAME and MIDDLE MAN NAME DYNAMIC
			        $oponentName.append(child.child('betty').child('name').val());
			        $userName.append('USERNAME');
			        $middleManName.append(child.child('middle').child('name').val() );
			        $description.append(child.key);
			        $amount.append("$ " + child.child('price').child('each').val());
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
		ref.child('middleWork').once('value',snap=>{
  			console.log(snap.val());
			var i = 0;

  			snap.forEach(function(child){

                console.log(child.key);

  				$container = $("<div>", {"class": "lContainer", "id": "lContainer" + i});

				$card = $("<div>", {"class": "lCard", "id": "lCard" + i});

				$divDescription = $("<div>", {"class": "lDivDescription", "id": "lDivDescription" + i});
				$divBottomDiv = $("<div>", {"class": "lBottomDiv", "id": "lBotttomDiv" + i});

				$description = $("<h1>", {"class": "lDescriptionText", "id" : "lDescriptionText" + i});

				$bottomL = $("<div>", {"class": "bottomL" , "id": "bottomL" + i});
				$bottomR = $("<div>", {"class": "bottomR" , "id": "bottomR" + i});

				$buttonL = $("<button>", {"class": "buttonL" , "id":"buttonL" + i});
				$buttonR = $("<button>", {"class": "buttonR" , "id":"buttonR" + i});

				$buttonL.append("<h3>", {"class":"rButtonText", "id": "rButtonText" + i}).append(child.child('better').child('name').val());
				//Replace last append with datbase info
				$buttonR.append("<h3>", {"class":"rButtonText", "id": "rButtonText" + i}).append(child.child('betty').child('name').val());

				var i = $buttonL.attr('id');
				console.log("WHAT THE " + i);
				i = i.charAt(i.length - 1);

				$buttonL.on("click", function() {
					var del = window.confirm("Are you sure  is the winner?");
					console.log(del);
					if(del == true) {
						console.log("here" + i);
						$($container).remove()
					}
				});

				$buttonR.on("click", function() {
					var del = window.confirm("Are you sure  is the winner?");
					console.log(del);
					if(del == true) {
						console.log("here" + i);
						$($container).remove()
					}
				});


				
				$buttonL.append("<h3>", {"class":"rButtonText", "id": "rButtonText" + i}).append(child.child('better').child('name').val());
				//Replace last append with datbase info
				$buttonR.append("<h3>", {"class":"rButtonText", "id": "rButtonText" + i}).append(child.child('betty').child('name').val());


				$bottomL.append($buttonL);
				$bottomR.append($buttonR);

				$description.append(child.key);

				$divBottomDiv.append($bottomL);
				$divBottomDiv.append($bottomR);

				$divDescription.append($description);

				$card.append($divDescription);
				$card.append($divBottomDiv);

				$container.append($card);


				$("#left").append($container);

				i++;
				// var str = $approve.attr('id');
				// var i = str.charAt(str.length-1);
				// document.getElementById('buttonL' + i).onclick = function() {
				// 	window.confirm("Are you sure this user is the winner?");
				// }


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
	document.getElementById('logOutFromDash').addEventListener('click',e=>{
  		var auth = firebase.auth();
  		firebase.auth().signOut();
  		document.location.href='./index.html';
  	});

  	document.getElementById('newbetButton').addEventListener('click',e=>{

  		document.location.href='./betting.html';
  	});

}

function buttonApprove() {
	console.log("Approve Bet");
}

function buttonDecline(str) {
    console.log("Decline");
    $(str).remove();
}
