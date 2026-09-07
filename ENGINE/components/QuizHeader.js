/*
 * ParamWorld Quiz
 * Quiz Header Component
 */

(function () {
    "use strict";

    window.ParamWorldQuizHeader = {

        render: function (container, data) {

            if (!container) {
                return;
            }

            var title =
                data && (
                    data.titleHindi ||
                    data.titleEnglish ||
                    data.title
                );

            if (!title) {
                title = "ParamWorld Quiz";
            }

            container.innerHTML = "";

            var header = document.createElement("div");

            header.className = "quiz-header";

            var heading = document.createElement("h1");

            heading.textContent = title;

            header.appendChild(heading);

            container.appendChild(header);
        }

    };

})();