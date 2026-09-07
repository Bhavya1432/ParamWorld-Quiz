/*
 * ParamWorld Quiz
 * Result Component
 */

(function () {
    "use strict";

    window.ParamWorldQuizResult = {

        render: function (container, result, callbacks) {

            if (!container) {
                return;
            }

            result = result || {};
            callbacks = callbacks || {};

            container.innerHTML = "";

            var wrapper = document.createElement("div");
            wrapper.className = "quiz-result";

            var title = document.createElement("h2");
            title.textContent = "Quiz Result";

            var score = document.createElement("div");
            score.className = "result-score";
            score.textContent =
                "Score: " +
                (result.score !== undefined ? result.score : 0);

            var summary = document.createElement("div");
            summary.className = "result-summary";

            summary.innerHTML =
                "<p>Total Questions: " +
                (result.total || 0) +
                "</p>" +

                "<p>Attempted: " +
                (result.attempted || 0) +
                "</p>" +

                "<p>Correct: " +
                (result.correct || 0) +
                "</p>" +

                "<p>Wrong: " +
                (result.wrong || 0) +
                "</p>" +

                "<p>Unattempted: " +
                (result.unattempted || 0) +
                "</p>";

            wrapper.appendChild(title);
            wrapper.appendChild(score);
            wrapper.appendChild(summary);

            var reviewButton = document.createElement("button");

            reviewButton.type = "button";
            reviewButton.className = "result-review-btn";
            reviewButton.textContent = "Review Answers";

            reviewButton.addEventListener("click", function () {

                if (typeof callbacks.onReview === "function") {
                    callbacks.onReview();
                }

            });

            wrapper.appendChild(reviewButton);

            var restartButton = document.createElement("button");

            restartButton.type = "button";
            restartButton.className = "result-restart-btn";
            restartButton.textContent = "Restart Quiz";

            restartButton.addEventListener("click", function () {

                if (typeof callbacks.onRestart === "function") {
                    callbacks.onRestart();
                }

            });

            wrapper.appendChild(restartButton);

            container.appendChild(wrapper);
        }

    };

})();