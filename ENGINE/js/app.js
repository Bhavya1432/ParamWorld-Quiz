/*
 * ParamWorld Quiz
 * Application Controller
 */

(function () {
    "use strict";

    function startApplication() {

        console.log("ParamWorld Quiz App starting...");

        if (!window.ParamWorldQuizEngine) {
            console.error("Quiz Engine not loaded.");
            return;
        }

        if (window.ParamWorldQuizData) {
            window.ParamWorldQuizEngine.init(
                window.ParamWorldQuizData
            );
        } else {
            console.warn("Quiz data is not available yet.");
        }
    }

    /*
     * quiz-loader.js ke data load hone ke baad
     * application start hoga.
     */

    if (
        window.PARAMWORLD_QUIZ_READY &&
        typeof window.PARAMWORLD_QUIZ_READY.then === "function"
    ) {

        window.PARAMWORLD_QUIZ_READY
            .then(function () {
                startApplication();
            })
            .catch(function (error) {
                console.error(
                    "Quiz data loading failed:",
                    error
                );
            });

    } else {

        /*
         * Fallback
         */
        document.addEventListener(
            "DOMContentLoaded",
            function () {
                setTimeout(
                    startApplication,
                    500
                );
            }
        );
    }

})();