$(document).ready(function () {
    $("#start-button").on("click", function () {
        godzillaGame();
    })

    var questionsArr = [
        ques1 = {
            question: "What year did the first Godzilla film, Gojira, release?",
            answers: ["1956", "1998", "1954", "1964"],
            correctAns: "1954"
        },
        ques2 = {
            question: "Who was the first monster Godzilla fought in film?",
            answers: ["Anguirus", "King Ghidorah", "King Kong", "Mothra"],
            correctAns: "Anguirus"
        }

    ]

    var godzillaGame = function () {
        $("#game-container").empty();
        var number = 0;
        var currentQuestion = questionsArr[number];
        var ques = $("<h2>");
        ques.text(currentQuestion.question);
        $("#game-container").prepend(ques);
        for (var i = 0; i < currentQuestion.answers.length; i++) {
            var choices = $("<button>");
            choices.text(currentQuestion.answers[i]);
            choices.attr("data-name", currentQuestion.answers[i]);
            $("#game-container").prepend(choices);
            choices.on("click", function () {
                if ($(this).attr("data-name") === currentQuestion.correctAns) {
                    console.log("correct");
                } else {
                    console.log("incorrect")
                }
            });


        }



        console.log(questionsArr[0].question);

    }

































});