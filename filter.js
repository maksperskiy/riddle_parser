var accept_btn = document.getElementById("accept");
var decline_btn = document.getElementById("decline");
var start_btn = document.getElementById("start");
var lines;
var counter = 0;
var output = document.getElementById("output");
var last_accepted = false;
var can_cancel = false;

function start() {
    text = document.getElementById("lines").value;

    decline_btn.disabled = false;
    accept_btn.disabled = false;
    start_btn.disabled = true;

    text = text.split("\n");
    console.log(text)


    lines = text.map(el => {
        line = el.split("; ");
        return [line[0], line[1]];
    });
    console.log(lines)

    question = document.getElementById("question");
    answer = document.getElementById("answer");

    question.innerText = lines[counter][0];
    answer.innerText = lines[counter][1];
}

function accept_riddle() {
    question = document.getElementById("question");
    answer = document.getElementById("answer");

    output.innerText += "\n" + lines[counter][0] + "; " + lines[counter][1];

    counter++;

    question.innerText = lines[counter][0];
    answer.innerText = lines[counter][1];

    last_accepted = true;
    can_cancel = true;
}

function decline_riddle() {
    question = document.getElementById("question");
    answer = document.getElementById("answer");

    counter++;

    question.innerText = lines[counter][0];
    answer.innerText = lines[counter][1];

    last_accepted = false;
    can_cancel = true;
}

function cancel() {
    if (can_cancel == true){
        question = document.getElementById("question");
        answer = document.getElementById("answer");
    
        counter--;
    
        question.innerText = lines[counter][0];
        answer.innerText = lines[counter][1];
    
        if (last_accepted == true) {
            output.innerText = output.innerText.replace(/\n.*$/, '');
        }
    
        last_accepted = false;
        can_cancel = false;
    }
}