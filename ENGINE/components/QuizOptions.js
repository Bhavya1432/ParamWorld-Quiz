/*
 * ParamWorld Quiz
 * Options Component
 */

(function () {
    "use strict";

    window.ParamWorldQuizOptions = {

        render: function (container, options, selectedIndex, onSelect) {

            if (!container) {
                return;
            }

            options = options || [];

            container.innerHTML = "";

            options.forEach(function (option, index) {

                var button = document.createElement("button");

                button.type = "button";
                button.className = "question-option";

                if (selectedIndex === index) {
                    button.classList.add("selected");
                }

                button.textContent =
                    String.fromCharCode(65 + index) +
                    ". " +
                    option;

                button.addEventListener("click", function () {

                    if (typeof onSelect === "function") {
                        onSelect(index);
                    }

                });

                container.appendChild(button);
            });
        }

    };

})();