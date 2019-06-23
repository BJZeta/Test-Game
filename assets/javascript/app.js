$(document).ready(function () {
    $("#start-button").on("click", function () {
        godzillaGame();
    })
    var number = 0;
    var wins = 0;
    var loses = 0;
    var questionsArr = [
        {
            question: "What year did the first Godzilla film, Gojira, release?",
            answers: ["1956", "1998", "1954", "1964"],
            correctAns: "1954",
            answerDesc: "Gojira, the first film in the Godzilla franchise was released in Nagoya, Japan, in October 27,1954."
        },
        {
            question: "Who was the first monster Godzilla fought in film?",
            answers: ["Anguirus", "King Ghidorah", "King Kong", "Mothra"],
            correctAns: "Anguirus",
            answerDesc: "In Godzilla Raids Again (1956), Godzilla would fight his very first opponent, Anguirus."
        },
        {
            question: "Name a monster Godzilla fought that is NOT an alien",
            answers: ["King Ghidorah", "Megalon", "Mothra", "Gigan"],
            correctAns: "Mothra",
            answerDesc: "Mothra, in all of the Godzilla franchise, has only been an Earth-based monster"
        },
        {
            question: "Which out of these four films did Godzilla fight in space?",
            answers: ["Godzilla Vs Mothra", "Godzilla Vs SpaceGodzilla", "Invasion of the Astro Monster", "Godzilla: Tokyo S.O.S."],
            correctAns: "Invasion of the Astro Monster",
            answerDesc: "Godzilla made his first, and only, appearance in space in Invasion of the Astro Monster."
        },
        {
            question: "True or False: King Kong Vs Godzilla has two endings; the Japanese version where Godzilla wins, and the American version, where Kong wins.",
            answers: ["False", "True"],
            correctAns: "False",
            answerDesc: "Despite popular misconception, King Kong Vs Godzilla has only one ending, where Kong is the winner."
        },
        {
            question: "In the entire Godzilla film history, how many times has the monster died on screen",
            answers: ["Twice", "Four Times", "Once", "Never"],
            correctAns: "Four Times",
            answerDesc: "Godzilla has been killed off on screen a total of 4 times; in Gojira (1954), Godzilla Vs Mechagodzilla II, Godzilla Vs Destroyah, and Godzilla Mothra and King Ghidorah, Giant Monsters All Out Attack."
        },
        {
            question: "Which one of these Godzilla monsters is born from Mutation",
            answers: ["Biollante", "Rodan", "MechaGodzilla", "Baragon"],
            correctAns: "Biollante",
            answerDesc: "Biollante, from Godzilla Vs Biollante, is a plant-based monster that was born by scientists mutating plant cells with Godzilla cells."
        },
        {
            question: "True or False: In the first American Godzilla film, released in 1998, Godzilla is depicted WITHOUT his signature Atomic Breathe.",
            answers: ["False","True"],
            correctAns: "True",
            answerDesc: "The first American Godzilla film, released in 1998 by TriStar, not only depicts Godzilla without Atomic Breathe, it's the only Godzilla film to have the monster without his signature move"
        },
        {
            question: "What were the monsters Godzilla fought in the 2014 American Godzilla film from Legendary Pictures",
            answers: ["Leviathans", "M.U.T.O.S", "Titans", "Behemaths"],
            correctAns: "M.U.T.O.S",
            answerDesc: "In Godzilla (2014), Godzilla fights two new monsters in the franchise, the M.U.T.O.S (Massive Unidentified Terestrial Organism)"
        },
        {
            question: "Finally, Godzilla is often known as.....",
            answers: ["The King of the Monsters", "The King of the Monsters", "The King of the Monsters", "The King of the Monsters"],
            correctAns: "The King of the Monsters",
            answerDesc: "Godzilla has been killed off on screen a total of 4 times; in Gojira (1954), Godzilla Vs Mechagodzilla II, Godzilla Vs Destroyah, and Godzilla Mothra and King Ghidorah, Giant Monsters All Out Attack."
        }

    ]

    var godzillaGame = function () {
        $("#game-container").empty();
        var currentQuestion = questionsArr[number];
        var ques = $("<h2>");
        var answerRow2 = $("<div class=col-md-12></div>");
        var answerScreen = $("<h2>");
        var answerRow1 = $("<div class=col-md-12></div>");
        var next = $("<button>");
        next.text("Next Question");
        answerScreen.text(currentQuestion.answerDesc);
        answerRow2.append(answerScreen);
        ques.text(currentQuestion.question);
        $("#game-container").append(ques);
        for (var i = 0; i < currentQuestion.answers.length; i++) {
            var choices = $("<button id=#button>");
            choices.text(currentQuestion.answers[i]);
            choices.attr("data-name", currentQuestion.answers[i]);
            choices.attr("class", "col-md-6");
            $("#button-container").prepend(choices);
            choices.on("click", function () {
                if ($(this).attr("data-name") === currentQuestion.correctAns) {
                    console.log("correct");
                    $("#game-container").empty();
                    $("#button-container").empty();
                    answerRow1.prepend("<h2 class=text-success>CORRECT</h2>");
                    $("#game-container").append(answerRow1);
                    $("#game-container").append(answerRow2);
                    $("#button-container").append(next);
                    number++;
                    wins++;



                } else if ($(this).attr("data-name") !== currentQuestion.correctAns) {
                    console.log("incorrect");
                    $("#game-container").empty();
                    $("#button-container").empty();
                    answerRow1.prepend("<h2 class=text-danger>WRONG</h2>");
                    $("#game-container").append(answerRow1);
                    $("#game-container").append(answerRow2);
                    $("#button-container").append(next);
                    number++;
                    loses++;
                }
            });

            // var next = $("<button>");
            // next.text("Next Question");

            next.on("click", function () {
                $("#game-container").empty();
                $("#button-container").empty();
                if(number === questionsArr.length){
                    if(wins>loses) {
                        console.log("Winner Winner Chicken Dinner");
                    } else if(wins<loses){
                        console.log("You Suck");
                    } else {
                        console.log("Dam you barely got half right");
                    }
                } else {
                    godzillaGame();
                }                
                console.log(number)
            })


        }



        // console.log(questionsArr[0].question);

    }

































});