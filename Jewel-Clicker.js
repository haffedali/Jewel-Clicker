var jewel1 = Math.floor(Math.random() * 20);
var jewel2 = Math.floor(Math.random() * 20);
var jewel3 = Math.floor(Math.random() * 20);
var jewel4 = Math.floor(Math.random() * 20);
var target = Math.floor(Math.random() * 200) + 21;
var score = 0;
$("#target").html(target);
$("#score").html(score);



// tried fetching values, but I couldn't get it to work
// click functions
$("#firstjewel").on("click", function() {
    valueDis("1");
});
$("#secondjewel").on("click", function() {
    valueDis("2");
});
$("#thirdjewel").on("click", function() {
    valueDis("3");
});
$("#fourthjewel").on("click", function() {
    valueDis("4");
});




// functions

function valueDis(chicken) {
    switch(chicken) {
        case "1":
            score += jewel1;
            $("#score").html(score);
            checker();
        case "2":
            score += jewel2;
            $("#score").html(score);
            checker();
        case "3":
            score += jewel3;
            $("#score").html(score);
            checker();
        case "4":
            score += jewel4;
            $("#score").html(score);
            checker();
    }
}

function checker() {
    if (score === target) {
        console.log('win');
        reset();
    }

    if (score > target) {
        console.log("loser");
    }
}

function reset() {
    jewel1 = Math.floor(Math.random() * 20);
    jewel2 = Math.floor(Math.random() * 20);
    jewel3 = Math.floor(Math.random() * 20);
    jewel4 = Math.floor(Math.random() * 20);
    target = Math.floor(Math.random() * 100);
    score = 0;
    $("#target").html(target);
    $("#score").html(score);
}