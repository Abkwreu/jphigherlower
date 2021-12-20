var cl;
var cln;
var cr;
var crn;
var minDiff = 1000;
var decreaseBy = 100;
var score = 0;
var state = false;
var moreCorrect = false;
var lessCorrect = true;

window.onload = function () {
    next = document.getElementById("next");
    more = document.getElementById("more");
    less = document.getElementById("less");

    next.style.display = "none"
    cl = randInt(data.length);
    cln = data[cl];
    data.splice(cl, 1);
    setupQuizzes();
    refreshHtml();

    document.getElementById("next").onclick = function () {
        cl = cr;
        cln = crn;
        state = false;
        setupQuizzes();
        refreshHtml();
        more.style.display = "inline-block";
        less.style.display = "inline-block";
        next.style.display = "none";
    }

    document.getElementById("more").onclick = function () {
        if (moreCorrect) {
            score++;
            state = true;
            refreshHtml();
            more.style.display = "none";
            less.style.display = "none";
            next.style.display = "inline-block";
            if (minDiff > 0) {
                minDiff -= decreaseBy;
            }
        } else {
            state = true;
            refreshHtml();
            gameOver();
        }
    }

    document.getElementById("less").onclick = function () {
        if (lessCorrect) {
            score++;
            state = true;
            refreshHtml();
            more.style.display = "none";
            less.style.display = "none";
            next.style.display = "inline-block";
            if (minDiff >= 0) {
                minDiff -= decreaseBy;
            }
        } else {
            state = true;
            refreshHtml();
            gameOver();
        }
    }
};

function setupQuizzes() {
    cr = cl;
    while (Math.abs(cr - cl) <= minDiff) {
        cr = randInt(data.length);
    }
    crn = data[cr];
    data.splice(cr, 1);
    moreCorrect = (crn[1] >= cln[1]);
    lessCorrect = (crn[1] <= cln[1]);
}

function refreshHtml() {
    document.getElementById("quizl").innerHTML = cln[0];
    let tl = cln[1];
    document.getElementById("takesl").innerHTML = tl.toLocaleString("en-US") + " takes";
    document.getElementById("quizr").innerHTML = crn[0];
    if (state) {
        let tr = crn[1];
        document.getElementById("takesr").innerHTML = tr.toLocaleString("en-US") + " takes";
    } else {
        document.getElementById("takesr").innerHTML = "?";
    }
    document.getElementById("score").innerHTML = "Score: " + score;
}

function gameOver() {
    more.style.display = "none";
    less.style.display = "none";
    document.getElementById("buttons").innerHTML = "Game Over";
}
