/*
 * ParamWorld Quiz
 * Navigation Component
 */

(function () {
    "use strict";

    window.ParamWorldQuizNavigation = {

        render: function (container, currentIndex, totalQuestions, callbacks) {

            if (!container) {
                return;
            }

            callbacks = callbacks || {};

            container.innerHTML = "";

            var wrapper = document.createElement("div");
            wrapper.className = "quiz-navigation";

            var previousButton = document.createElement("button");

            previousButton.type = "button";
            previousButton.className = "quiz-nav-btn";
            previousButton.textContent = "← Previous";

            previousButton.disabled = currentIndex <= 0;

            previousButton.addEventListener("click", function () {

                if (typeof callbacks.onPrevious === "function") {
                    callbacks.onPrevious();
                }

            });

            var nextButton = document.createElement("button");

            nextButton.type = "button";
            nextButton.className = "quiz-nav-btn";
            nextButton.textContent =
                currentIndex >= totalQuestions - 1
                    ? "Finish"
                    : "Next →";

            nextButton.addEventListener("click", function () {

                if (typeof callbacks.onNext === "function") {
                    callbacks.onNext();
                }

            });

            wrapper.appendChild(previousButton);
            wrapper.appendChild(nextButton);

            container.appendChild(wrapper);
        }

    };

})();