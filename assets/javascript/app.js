$(document).ready(function () {
    $("#start-button").on("click", function () {
        godzillaGame();
        clockFunc();
    });
    var number = 0;
    var wins = 0;
    var loses = 0;
    var questionsArr = [
        {
            question: "What year did the first Godzilla film, Gojira, release?",
            answers: ["1956", "1998", "1954", "1964"],
            correctAns: "1954",
            answerDesc: "Gojira, the first film in the Godzilla franchise was released in Nagoya, Japan, in October 27,1954.",
            gif: "assets/images/godzilla54.gif"
        },
        {
            question: "Who was the first monster Godzilla fought in film?",
            answers: ["Anguirus", "King Ghidorah", "King Kong", "Mothra"],
            correctAns: "Anguirus",
            answerDesc: "In Godzilla Raids Again (1956), Godzilla would fight his very first opponent, Anguirus.",
            gif: "assets/images/anguirus.gif"
        },
        {
            question: "Name a monster Godzilla fought that is NOT an alien",
            answers: ["King Ghidorah", "Megalon", "Mothra", "Gigan"],
            correctAns: "Mothra",
            answerDesc: "Mothra, in all of the Godzilla franchise, has only been an Earth-based monster",
            gif: "assets/images/mothra.gif"
        },
        {
            question: "Which out of these four films did Godzilla fight in space?",
            answers: ["Godzilla Vs Mothra", "Godzilla Vs SpaceGodzilla", "Invasion of the Astro Monster", "Godzilla: Tokyo S.O.S."],
            correctAns: "Invasion of the Astro Monster",
            answerDesc: "Godzilla made his first, and only, appearance in space in Invasion of the Astro Monster.",
            gif: "assets/images/astro.gif"
        },
        {
            question: "True or False: King Kong Vs Godzilla has two endings; the Japanese version where Godzilla wins, and the American version, where Kong wins.",
            answers: ["False", "True"],
            correctAns: "False",
            answerDesc: "Despite popular misconception, King Kong Vs Godzilla has only one ending, where Kong is the winner.",
            gif: "assets/images/kingkong.gif"
        },
        {
            question: "In the entire Godzilla film history, how many times has the monster died on screen",
            answers: ["Twice", "Four Times", "Once", "Never"],
            correctAns: "Four Times",
            answerDesc: "Godzilla has been killed off on screen a total of 4 times; in Gojira (1954), Godzilla Vs Mechagodzilla II, Godzilla Vs Destroyah, and Godzilla Mothra and King Ghidorah, Giant Monsters All Out Attack.",
            gif: "assets/images/death.gif"
        },
        {
            question: "Which one of these Godzilla monsters is born from Mutation",
            answers: ["Biollante", "Rodan", "MechaGodzilla", "Baragon"],
            correctAns: "Biollante",
            answerDesc: "Biollante, from Godzilla Vs Biollante, is a plant-based monster that was born by scientists mutating plant cells with Godzilla cells.",
            gif: "assets/images/biollante.gif"
        },
        {
            question: "True or False: In the first American Godzilla film, released in 1998, Godzilla is depicted WITHOUT his signature Atomic Breathe.",
            answers: ["False", "True"],
            correctAns: "True",
            answerDesc: "The first American Godzilla film, released in 1998 by TriStar, not only depicts Godzilla without Atomic Breathe, it's the only Godzilla film to have the monster without his signature move",
            gif: "assets/images/zilla.gif"
        },
        {
            question: "What were the monsters Godzilla fought in the 2014 American Godzilla film from Legendary Pictures",
            answers: ["Leviathans", "M.U.T.O.S", "Titans", "Behemaths"],
            correctAns: "M.U.T.O.S",
            answerDesc: "In Godzilla (2014), Godzilla fights two new monsters in the franchise, the M.U.T.O.S (Massive Unidentified Terestrial Organism)",
            gif: "assets/images/muto.gif"
        },
        {
            question: "Finally, Godzilla is often known as.....",
            answers: ["The King of the Monsters", "The King of the Monsters", "The King of the Monsters", "The King of the Monsters"],
            correctAns: "The King of the Monsters",
            answerDesc: "Godzilla has been killed off on screen a total of 4 times; in Gojira (1954), Godzilla Vs Mechagodzilla II, Godzilla Vs Destroyah, and Godzilla Mothra and King Ghidorah, Giant Monsters All Out Attack.",
            gif: "assets/images/king.gif"
        }

    ];

    var clockHeading = $("<h2 id=clock-heading>");
    var gameStarted = false;
    var clock = 21;
    var intervalId;
    var clockFunc = function () {
        if (gameStarted == false) {
            gameStarted = true;
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }

    };
    var resultsDiv = $("<div class=col-md-12></div>");
    var resultsNum = $("<div class=col-md-6></div>");
    var winningGif = $("<div class=col-md-6></div>");


    var decrement = function () {
        clock--;
        clockHeading.text(clock);
        $("#game-container").append(clockHeading);
        if (clock === 0) {
            $("#game-container").empty();
            $("#button-container").empty();
            answerRow1.empty();
            answerRow1.append("<h2 class=text-danger>Times Up</h2>");
            $("#game-container").append(answerRow1);
            $("#game-container").append(answerRow2);
            $("#game-container").append(gifDiv);
            $("#button-container").append(next);
            number++;
            loses++;
            stopclock();

        };
    };

    var stopclock = function () {
        gameStarted = false;
        clearInterval(intervalId);
        reset();
    }

    var reset = function () {
        clock = 21
    }
    var currentQuestion;
    var questionDiv = $("<div id=current-question><div>");
    var ques = $("<h2>");
    var answerRow2 = $("<div class=col-md-12></div>");
    var answerScreen = $("<h2>");
    var answerRow1 = $("<div class=col-md-12></div>");
    var next = $("<button>");
    var gifDiv = $("<div id=gif-div></div>");
    var answerGif = $("<img id=gif>");


    var godzillaGame = function () {
        $("#game-container").empty();

        currentQuestion = questionsArr[number]
        answerGif.attr("src", currentQuestion.gif);
        answerGif.attr("alt", "");
        gifDiv.append(answerGif);
        next.text("Next Question");
        answerScreen.text(currentQuestion.answerDesc);
        answerRow2.append(answerScreen);
        ques.text(currentQuestion.question);
        questionDiv.html(ques);
        $("#game-container").append(questionDiv);
        for (var i = 0; i < currentQuestion.answers.length; i++) {
            var choices = $("<button id=#button>");
            choices.text(currentQuestion.answers[i]);
            choices.attr("data-name", currentQuestion.answers[i]);
            choices.attr("class", "col-md-6");
            $("#button-container").prepend(choices);
            choices.on("click", function () {
                if ($(this).attr("data-name") === currentQuestion.correctAns) {
                    $("#game-container").empty();
                    $("#button-container").empty();
                    answerRow1.empty();
                    answerRow1.append("<h2 class=text-success>CORRECT</h2>");
                    $("#game-container").append(answerRow1);
                    $("#game-container").append(answerRow2);
                    $("#game-container").append(gifDiv);
                    $("#button-container").append(next);
                    number++;
                    wins++;
                    stopclock();
                    reset();

                } else if ($(this).attr("data-name") !== currentQuestion.correctAns || gameStarted == false) {
                    $("#game-container").empty();
                    $("#button-container").empty();
                    answerRow1.empty();
                    answerRow1.append("<h2 class=text-danger>WRONG</h2>");
                    $("#game-container").append(answerRow1);
                    $("#game-container").append(answerRow2);
                    $("#game-container").append(gifDiv);
                    $("#button-container").append(next);
                    number++;
                    loses++;
                    stopclock();
                    reset();
                }
            });


            next.on("click", function () {
                $("#game-container").empty();
                $("#button-container").empty();
                if (number === questionsArr.length) {
                    if (wins > loses) {
                        console.log("You win")
                    } else if (wins < loses) {
                        console.log("You Suck");
                    } else {
                        console.log("Dam you barely got half right");
                    }
                } else {
                    // number++
                    godzillaGame();
                    clockFunc();
                }
            })


        }
        // var winFun = function () {
        //     resultsDiv.append($("<h2 class=text-success>You Win!</h2>"));
        //     resultsNum.append($("<h2>" + wins + "/10</h2>"));
        //     winningGif.append($("<img src=assets/images/win.gif>"));
        //     $("#game-container").append(resultsDiv);
        //     $("#game-container").append(resultsNum);
        //     $("#game-container").append(winningGif);
        // }

    };


});