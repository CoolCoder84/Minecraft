var canvas = new fabric.Canvas("myCanvas");

block_width = 30;
block_height = 30;

player_X = 10;
player_Y = 10;

var player_object = "";
var block_image = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);

        player_object.scaleToHeight(140);
        player_object.set({
            top: player_X,
            left: player_Y
        });
        canvas.add(player_object);

    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image = Img;

        block_image.scaleToWidth(block_width);
        block_image.scaleToHeight(block_height);
        block_image.set({
            top: player_X,
            left: player_Y
        });
        canvas.add(block_image);
    });
}
window.addEventListener("keydown", my_keyDown);

function my_keyDown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    //increase the size of block
    if (e.shiftKey == true && keypressed == '80') {
        console.log("P and shift pressed together");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    //decrease the size of block
    if (e.shiftKey == true && keypressed == '77') {
        console.log("M and shift pressed together");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    //To move up
    if (keypressed == '38') {
        up();
        console.log("up");
    }

    //To move down
    if (keypressed == '40') {
        down();
        console.log("down");
    }
    //To move left
    if (keypressed == '37') {
        left();
        console.log("left");
    }
    //To move right
    if (keypressed == '39') {
        right();
        console.log("right");
    }

    //wall
    if (keypressed == '87') {
        new_image('wall.jpg')
        console.log("w");
    }

    //ground
    if (keypressed == '71') {
        new_image("ground.png")
        console.log("g");
    }
    //roof
    if (keypressed == '82') {
        new_image('roof.jpg')
        console.log("r");
    }
    //light-green
    if (keypressed == '76') {
        new_image('light_green.png')
        console.log("l");
    }
    //trunk
    if (keypressed == '84') {
        new_image('trunk.jpg')
        console.log("t");
    }
    //yellow-wall
    if (keypressed == '89') {
        new_image('yellow_wall.png')
        console.log("y");
    }
    //dark green patch
    if (keypressed == '68') {
        new_image('dark_green.png')
        console.log("d");
    }
    //unique
    if (keypressed == '85') {
        new_image('unique.png')
        console.log("u");
    }
    //cloud
    if (keypressed == '67') {
        new_image('cloud.jpg')
        console.log("c");
    }
}

function up() {
    if (player_Y >= 0) {
        player_Y = player_Y - block_height;
        console.log("block image height = " + block_height);
        console.log("When Up arrow key is pressed, X =  " + player_X + " , Y = " + player_Y);
        canvas.remove(player_object);
        player_update();
    }

}
function down() {
    if (player_Y <= 500) {
        player_Y = player_Y + block_height;
        console.log("block image height = " + block_height);
        console.log("When Down arrow key is pressed, X =  " + player_X + " , Y = " + player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_X > 0) {
        player_X = player_X - block_width;
        console.log("block image width = " + block_width);
        console.log("When Left arrow key is pressed, X =  " + player_X + " , Y = " + player_Y);
        canvas.remove(player_object);
        player_update();
    }
}



function right() {
    if (player_X <= 850) {
        player_X = player_X + block_width;
        console.log("block image width = " + block_width);
        console.log("When Right arrow key is pressed, X =  " + player_X + " , Y = " + player_Y);
        canvas.remove(player_object);
        player_update();
    }


}