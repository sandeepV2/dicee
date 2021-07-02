game_on();

function RolePlayer1(){
    var r_n = RoleDice();
    var dice_img = document.getElementsByClassName("dice")[0].getElementsByClassName("img1")[0]
    dice_img.src = "./images/dice" + r_n + ".png";
    return r_n;
}

function RolePlayer2(){
    var r_n = RoleDice();
    var dice_img = document.getElementsByClassName("dice")[1].getElementsByClassName("img2")[0]
    dice_img.src = "./images/dice" + r_n + ".png";
    return r_n;
}

function game_on(){
    var one = RolePlayer1();
    var two = RolePlayer2();
    if (one > two){
        var msg = "<i class='fas fa-trophy'></i> Munnu Wins";
        document.querySelector("h1").innerHTML = msg;
    } else if (two > one){
        var msg = "<i class='fas fa-trophy'></i> Pintu Wins";
        document.querySelector("h1").innerHTML = msg;
    } else {
        document.querySelector("h1").innerHTML = "Its Draw !!";
    }
}

function RoleDice(){
    var r_n = Math.random();
    r_n = r_n * 6 + 1;
    return Math.floor(r_n);
}
