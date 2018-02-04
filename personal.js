function createCard() {
    var text = document.getElementById("descript").value;
    var text_2 = document.getElementById("moneyBet").value;
    $container = $("<div>", {"class": "container", "id": "container" + text})

    $card = $("<div>", {"class": "card", "id": "card" + text});

    $descriptDiv = $("<div>", {"class": "descriptDiv", "id": "descriptDiv" + text});
    $resolvedDiv = $('<div>', {"class": "resolvedDiv", "id": "resolvedDiv"+text});
    $unresolvedDiv = $('<div>', {"class": "unresolvedDiv", "id": "unresolvedDiv"+text});
    $amountDiv = $("<div>", {"class": "amountDiv", "id": "amountDiv" + text});
    $timeLeftDiv = $("<div>", {"class": "timeLeftDiv", "id": "timeLeftDiv" + text});

    $descriptText = $("<h1>", {"class": "h1UpText", "id":"h1UpText" + text});
    $amountText = $("<h1>", {"class": "h1MidText", "id":"h1MidText" + text});
    $timeLeftText = $("<h1>", {"class": "h1LowText", "id":"h1LowText" + text});
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
    $timeLeftText.append(countDown());


    $descriptDiv.append( $descriptText );
    $amountDiv.append( $amountText );
    $timeLeftDiv.append( $timeLeftText );
    $resolvedDiv.append( $approve );
    $unresolvedDiv.append( $unapprove );

    $card.append($descriptDiv);
    $card.append($resolvedDiv);
    $card.append($amountDiv);
    $card.append($unresolvedDiv);
    $card.append($timeLeftDiv);

    $container.append($card);

    $("#box").append($container);



    console.log(text);
}

function countDown() {

    return 0;
}
