/*
 * ParamWorld Quiz
 * Question Component
 */

(function () {
    "use strict";

    window.ParamWorldQuizQuestion = {

        render: function (container, question, index, language) {

            if (!container || !question) {
                return;
            }

            language = language || "hi";

            var questionText =
                language === "hi"
                    ? (question.questionHindi || question.questionEnglish || "")
                    : (question.questionEnglish || question.questionHindi || "");

            var options =
                language === "hi"
                    ? (question.optionsHindi || question.optionsEnglish || [])
                    : (question.optionsEnglish || question.optionsHindi || []);

            container.innerHTML = "";

            var wrapper = document.createElement("div");
            wrapper.className = "quiz-question";

            var number = document.createElement("div");
            number.className = "question-number";
            number.textContent = "Question " + (index + 1);

            var title = document.createElement("div");
            title.className = "question-text";
            title.textContent = questionText;

            var optionsBox = document.createElement("div");
            optionsBox.className = "question-options";

            options.forEach(function (option, optionIndex) {

                var button = document.createElement("button");

                button.type = "button";
                button.className = "question-option";

                button.dataset.index = optionIndex;

                button.textContent =
                    String.fromCharCode(65 + optionIndex) +
                    ". " +
                    option;

                optionsBox.appendChild(button);
            });

            wrapper.appendChild(number);
            wrapper.appendChild(title);
            wrapper.appendChild(optionsBox);

            container.appendChild(wrapper);
        }

    };

})();