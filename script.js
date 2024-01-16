var rand = 0;
var level = 0;
var orderList = [];
var alive = false;
var index = 0;
var colors = ["green", "red", "yellow", "blue"];


$("body").on("keydown", function () { // bhai hamesha chote rehte hai not camel case
    if (!alive) {
        alive = true;
        console.log("key pressed")
        level++;
        $("h1").text("Level " + level);

        rand = Math.floor(Math.random() * 4);
        orderList.push(rand);
        console.log(rand);

        var aud = new Audio("./sounds/" + rand + ".mp3");
        aud.play();
        $("#" + colors[rand]).addClass("pressed");


        setTimeout(function () {
            $("#" + colors[rand]).removeClass("pressed");

        }, 100);


    }

})

// function playList(){

// }


function incLevel() {
    index = 0;
    level++;
    // var i =0;
    // inter = setInterval(function(){

    //     i++;


    //     if(i==n){
    //         clearInterval(inter);
    //         console.log("interval cleared")
    //     }
    // },1000);

    index = 0;
    console.log("increasing level");
        $("h1").text("Level " + level);


        rand = Math.floor(Math.random() * 4);
        orderList.push(rand);
        console.log(rand);

        setTimeout(() => { // next level delay ke baad play hoga
                    var aud = new Audio("./sounds/" + rand + ".mp3");
        aud.play();
        $("#" + colors[rand]).addClass("pressed");

        setTimeout(function () {
          $("#" + colors[rand]).removeClass("pressed");
        }, 100);
    }, 500);
}


$(".btn").on("click", function () {


    if (alive && index < orderList.length) {
        var num = colors.indexOf(this.id);
        if (num == orderList[index]) { // sahi dabaya;
            index++;

            var aud = new Audio("./sounds/" + num + ".mp3");
            aud.play();
            $("#" + colors[num]).addClass("pressed");

            setTimeout(function () {
                $("#" + colors[num]).removeClass("pressed");
            }, 100);
            console.log("sahi hai");
        }

        else {
            aud = new Audio("./sounds/wrong.mp3");
            aud.play();
        $("body").addClass("game-over");

        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 100);


        // yaha se reset karna hai game : 
        level = 0;
        alive = false;
        index = 0;
        orderList = []; // change2
            
        $("#level-title").text("Game Over");
        setTimeout(() => {
            $("#level-title").text("Press A Key to Start");
        }, 1000);


    }
}

    if (index == orderList.length && alive) {
        // console.log("under sec if");
        incLevel();


    // yahaa se level badh jaega oor index = 0 ;

    

}
    
});
$(".touch").on("click",function () { // same code as key down code
    if (!alive) {
      alive = true;
      console.log("key pressed");
      level++;
      $("h1").text("Level " + level);

      rand = Math.floor(Math.random() * 4);
      orderList.push(rand);
      console.log(rand);

      var aud = new Audio("./sounds/" + rand + ".mp3");
      aud.play();
      $("#" + colors[rand]).addClass("pressed");

      setTimeout(function () {
        $("#" + colors[rand]).removeClass("pressed");
      }, 100);
    }
})
