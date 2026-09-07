/*
 * ParamWorld Quiz Engine
 * Main quiz logic
 */

(function () {
    "use strict";

    window.ParamWorldQuizEngine = {

        init: function (quizData) {
            if (!quizData) {
                console.error("Quiz data not found.");
                return;
            }

            console.log("ParamWorld Quiz Engine initialized.");
            console.log("Quiz data loaded:", quizData);

            this.quizData = quizData;
            this.currentQuestion = 0;
            this.score = 0;

            this.render();
        },

        render: function () {
            var container = document.getElementById("quiz-container");

            if (!container) {
                console.error("quiz-container not found in index.html");
                return;
            }

            container.innerHTML = `
                <div class="quiz-engine-status">
                    <h2>Quiz Engine Ready</h2>
                    <p>Quiz data successfully loaded.</p>
                    <button id="start-quiz-btn">Start Quiz</button>
                </div>
            `;

            var startButton = document.getElementById("start-quiz-btn");

            if (startButton) {
                startButton.addEventListener("click", function () {
                    window.ParamWorldQuizEngine.startQuiz();
                });
            }
        },

        startQuiz: function () {
            console.log("Quiz started.");

            var container = document.getElementById("quiz-container");

            if (!container) {
                return;
            }

            container.innerHTML = `
                <div class="quiz-started">
                    <h2>Quiz Started</h2>
                    <p>Question system is ready.</p>
                </div>
            `;
        }

    };

})();