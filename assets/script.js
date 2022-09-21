questions = [
question1 = {
    question: "Commonly used data types DO NOT include: ",
    options: ["strings", "booleans", "alerts", "numbers"],
    correct: "alerts"
},

question2 = {
    question: "The condition in an if / else statement is enclosed within ______.",
    options: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correct: "parentheses"
},

question3 = {
    question: "Arrays in JavaScript can be used to store ______.",
    options: ["numbers and strings", "other arrays", "booleans", "All of the above"],
    correct: "All of the above"
},

question4 = {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    options: ["commas", "curly brackets", "quotes", "parentheses"],
    correct: "quotes"
},

question5 = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    options: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    correct: "console.log"
}];

startButton = $(".start");
startButton.on('click', function() {
    var timerEl = $(".time");
    var timeLeft = 70;
    function countdown () {
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.text('Time: ' + timeLeft);
            timeLeft--;
        }
    }, 1000);
    }
    countdown();
    var title = $(".title");
    var h1 = $("#h1");
    startButton.text('');
    title.text('');
    h1.text('');
    var quizQ = $("#quiz");
    var quizOptions = $("#options");
    quizQ.text(questions[0].question);
    quizOptions.append('<li>' + '<button class = "buttons1">' + questions[0].options[0] + '</button>' + '</li>');
    quizOptions.append('<li>' + '<button class = "buttons1">' + questions[0].options[1] + '</button>' + '</li>');
    quizOptions.append('<li id = "right">' + '<button class = "buttons1">' + questions[0].options[2] + '</button>' + '</li>');
    quizOptions.append('<li>' + '<button class = "buttons1">' + questions[0].options[3] + '</button>' + '</li>');
    buttons = $('.buttons1');
    result = $('#result');
    score = $('#score');
    input = $('#input');
    buttons.on('click', function(event) {
        var answer = $(event.target).text();
        if (answer !== questions[0].correct) {
            timeLeft -= 10;
            result.text('Incorrect!');
            quizQ.text(questions[1].question);
            quizOptions.empty();
            quizOptions.append('<li>' + '<button class = "buttons2">' + questions[1].options[0] + '</button>' + '</li>');
            quizOptions.append('<li>' + '<button class = "buttons2">' + questions[1].options[1] + '</button>' + '</li>');
            quizOptions.append('<li id = "right">' + '<button class = "buttons2">' + questions[1].options[2] + '</button>' + '</li>');
            quizOptions.append('<li>' + '<button class = "buttons2">' + questions[1].options[3] + '</button>' + '</li>');
        } else {
            result.text('Correct!')
            quizQ.text(questions[1].question);
            quizOptions.empty();
            quizOptions.append('<li>' + '<button class = "buttons2">' + questions[1].options[0] + '</button>' + '</li>');
            quizOptions.append('<li>' + '<button class = "buttons2">' + questions[1].options[1] + '</button>' + '</li>');
            quizOptions.append('<li id = "right">' + '<button class = "buttons2">' + questions[1].options[2] + '</button>' + '</li>');
            quizOptions.append('<li>' + '<button class = "buttons2">' + questions[1].options[3] + '</button>' + '</li>');
        }
        buttons2 = $(".buttons2");
            buttons2.on('click', function(event) {
                var answer = $(event.target).text();
                if (answer !== questions[1].correct) {
                    timeLeft -= 10;
                    result.text('Incorrect!');
                    quizQ.text(questions[2].question);
                    quizOptions.empty();
                    quizOptions.append('<li>' + '<button class = "buttons3">' + questions[2].options[0] + '</button>' + '</li>');
                    quizOptions.append('<li>' + '<button class = "buttons3">' + questions[2].options[1] + '</button>' + '</li>');
                    quizOptions.append('<li>' + '<button class = "buttons3">' + questions[2].options[2] + '</button>' + '</li>');
                    quizOptions.append('<li id = "right">' + '<button class = "buttons3">' + questions[2].options[3] + '</button>' + '</li>');
                } else {
                    result.text('Correct!')
                    quizQ.text(questions[2].question);
                    quizOptions.empty();
                    quizOptions.append('<li>' + '<button class = "buttons3">' + questions[2].options[0] + '</button>' + '</li>');
                    quizOptions.append('<li>' + '<button class = "buttons3">' + questions[2].options[1] + '</button>' + '</li>');
                    quizOptions.append('<li>' + '<button class = "buttons3">' + questions[2].options[2] + '</button>' + '</li>');
                    quizOptions.append('<li id ="right">' + '<button class = "buttons3">' + questions[2].options[3] + '</button>' + '</li>');
                }
                buttons3 = $(".buttons3");
                buttons3.on('click', function(event) {
                    var answer = $(event.target).text();
                    if (answer !== questions[2].correct) {
                        timeLeft -= 10;
                        result.text('Incorrect!');
                        quizQ.text(questions[3].question);
                        quizOptions.empty();
                        quizOptions.append('<li>' + '<button class = "buttons4">' + questions[3].options[0] + '</button>' + '</li>');
                        quizOptions.append('<li>' + '<button class = "buttons4">' + questions[3].options[1] + '</button>' + '</li>');
                        quizOptions.append('<li id = "right">' + '<button class = "buttons4">' + questions[3].options[2] + '</button>' + '</li>');
                        quizOptions.append('<li>' + '<button class = "buttons4">' + questions[3].options[3] + '</button>' + '</li>');
                    } else {
                        result.text('Correct!')
                        quizQ.text(questions[3].question);
                        quizOptions.empty();
                        quizOptions.append('<li>' + '<button class = "buttons4">' + questions[3].options[0] + '</button>' + '</li>');
                        quizOptions.append('<li>' + '<button class = "buttons4">' + questions[3].options[1] + '</button>' + '</li>');
                        quizOptions.append('<li id = "right">' + '<button class = "buttons4">' + questions[3].options[2] + '</button>' + '</li>');
                        quizOptions.append('<li>' + '<button class = "buttons4">' + questions[3].options[3] + '</button>' + '</li>');
                    }
                    buttons4 = $(".buttons4");
                    buttons4.on('click', function(event) {
                        var answer = $(event.target).text();
                        if (answer !== questions[3].correct) {
                            timeLeft -= 10;
                            result.text('Incorrect!');
                            quizQ.text(questions[4].question);
                            quizOptions.empty();
                            quizOptions.append('<li>' + '<button class = "buttons5">' + questions[4].options[0] + '</button>' + '</li>');
                            quizOptions.append('<li>' + '<button class = "buttons5">' + questions[4].options[1] + '</button>' + '</li>');
                            quizOptions.append('<li>' + '<button class = "buttons5">' + questions[4].options[2] + '</button>' + '</li>');
                            quizOptions.append('<li id = "right">' + '<button class = "buttons5">' + questions[4].options[3] + '</button>' + '</li>');
                        } else {
                            result.text('Correct!')
                            quizQ.text(questions[4].question);
                            quizOptions.empty();
                            quizOptions.append('<li>' + '<button class = "buttons5">' + questions[4].options[0] + '</button>' + '</li>');
                            quizOptions.append('<li>' + '<button class = "buttons5">' + questions[4].options[1] + '</button>' + '</li>');
                            quizOptions.append('<li>' + '<button class = "buttons5">' + questions[4].options[2] + '</button>' + '</li>');
                            quizOptions.append('<li id = "right">' + '<button class = "buttons5">' + questions[4].options[3] + '</button>' + '</li>');
                        }
                        buttons5 = $(".buttons5");
                        buttons5.on('click', function done (event) {
                            var answer = $(event.target).text();
                            if (answer !== questions[4].correct) {
                                timeLeft -= 10;
                                quizQ.text('');
                                quizOptions.empty();
                                result.text('All done!');
                                score.text('Your final score is: ' + timeLeft);
                            } else {
                                quizQ.text('');
                                quizOptions.empty();
                                result.text('All done!');
                                score.text('Your final score is: ' + timeLeft);
                            }
                        });
                    })
                })
            })
        
    });
})