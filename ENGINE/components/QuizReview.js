/*
 * ParamWorld Quiz
 * Answer Review Component
 */

(function () {
    "use strict";

    window.ParamWorldQuizReview = {

        render: function (container, questions, answers, language) {

            if (!container) {
                return;
            }

            questions = questions || [];
            answers = answers || [];
            language = language || "hi";

            container.innerHTML = "";

            questions.forEach(function (question, index) {

                var item = document.createElement("div");
                item.className = "review-item";

                var questionText =
                    language === "hi"
                        ? (question.questionHindi || question.questionEnglish || "")
                        : (question.questionEnglish || question.questionHindi || "");

                var options =
                    language === "hi"
                        ? (question.optionsHindi || question.optionsEnglish || [])
                        : (question.optionsEnglish || question.optionsHindi || []);

                var heading = document.createElement("h3");

                heading.textContent =
                    (index + 1) + ". " + questionText;

                item.appendChild(heading);

                var selected = answers[index];

                var userAnswer = document.createElement("p");

                if (selected === null || selected === undefined) {

                    userAnswer.textContent =
                        language === "hi"
                            ? "आपका उत्तर: नहीं दिया गया"
                            : "Your Answer: Not Attempted";

                } else {

                    userAnswer.textContent =
                        language === "hi"
                            ? "आपका उत्तर: " + options[selected]
                            : "Your Answer: " + options[selected];
                }

                item.appendChild(userAnswer);

                var correctAnswer = document.createElement("p");

                correctAnswer.textContent =
                    language === "hi"
                        ? "सही उत्तर: " + options[question.answer]
                        : "Correct Answer: " + options[question.answer];

                item.appendChild(correctAnswer);

                if (
                    selected !== null &&
                    selected !== undefined &&
                    selected === question.answer
                ) {
                    item.classList.add("correct");
                } else if (
                    selected !== null &&
                    selected !== undefined
                ) {
                    item.classList.add("wrong");
                } else {
                    item.classList.add("unattempted");
                }

                container.appendChild(item);
            });
        }

    };

})();