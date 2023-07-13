var start = document.getElementById("start");
var endButton = document.getElementById("end");

var time = document.getElementById("time");

var box = document.querySelectorAll(".box");
var readyOrEnd = document.getElementById("ready");

var end = false;
var interval = false;

start.addEventListener("click", startGame);
endButton.addEventListener('click', endGame);



function startGame() {


    // display
    document.querySelector(".head__panel").style.backgroundColor = "rgb(61, 61, 61)";
    time.style.color = "White";
    start.innerHTML = "Start";
    readyOrEnd.style.display = "none";





    time.innerHTML = "0.0";
    var seconds = parseFloat(time.textContent);

    interval = setInterval(
        function timer() {
            if (interval === true) {
                clearInterval(interval);
                endGame();
            } else {
                seconds += 0.1;
                time.textContent = (seconds + 0.1).toFixed(1);
            }
        },
        100
    )

    boxRandomfor4on4();
}

function boxRandomfor4on4() {
    var selections;
    getRandoms(25);

    for (let i = 0; i < box.length; i++) {
        box[i].textContent = selections[i];
    }

    function getRandoms(numPicks) {
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
        selections = [];

        // рандомное число без повтора
        for (var i = 0; i < numPicks; i++) {
            var index = Math.floor(Math.random() * nums.length);
            selections.push(nums[index]);
            nums.splice(index, 1);
        }
        return (selections);
    }
    boxClick();
}

function boxClick() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 666];
    var minimal = Math.min.apply(Math, nums);
    for (let i = 0; i < box.length; i++) {
        box[i].onclick = function() {
            if (box[i].textContent == minimal) {
                box[i].classList.add("hide");
                box[i].textContent = "";
                nums.shift(minimal);
                minimal = Math.min.apply(Math, nums);
                if (nums[0] == 666) {
                    validateEnd();
                }
            }
        }
    }
}

function validateEnd() {
    endGame();
}


function endGame() {
    interval = true;
    document.querySelector(".head__panel").style.backgroundColor = "rgb(255, 255, 113)";
    time.style.color = "black";
    start.innerHTML = "Restart";
    readyOrEnd.style.display = "block";


    for (let i = 0; i < box.length; i++) {
        if (box[i].classList.contains("hide")) {
            box[i].classList.remove("hide");
        }
    }
}


function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


//