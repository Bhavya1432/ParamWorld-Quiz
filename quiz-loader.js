/* =========================================================
   ParamWorld Quiz Data Loader
   Loads all quiz data files before the quiz application starts
   ========================================================= */

(function () {
    "use strict";

    /* GitHub Pages project root */
    var BASE_URL =
        "https://bhavya1432.github.io/ParamWorld-Quiz/";

    /* Quiz data files */
    var DATA_FILES = [
        "QUIZ_DATA/ASSISTANT_TEACHER/Hindi/PYQ_2023_SET_A.js",
        "QUIZ_DATA/ASSISTANT_TEACHER/CDP/PYQ_2023_SET_A_CDP.js"

    ];

    /*
     * Global quiz data object
     */
    window.ParamWorldQuizData =
        window.ParamWorldQuizData || {};

    /*
     * Load one JavaScript data file
     */
    function loadScript(url) {

        return new Promise(function (resolve, reject) {

            var script =
                document.createElement("script");

            script.src = url;
            script.async = false;

            script.onload = function () {

                /*
                 * Your data file currently creates:
                 *
                 * var QUIZ_DATA = {...};
                 *
                 * Copy that data into the engine's
                 * global data object.
                 */
                if (
                    typeof window.QUIZ_DATA !== "undefined" &&
                    window.QUIZ_DATA
                ) {

                    Object.assign(
                        window.ParamWorldQuizData,
                        window.QUIZ_DATA
                    );

                }

                resolve(url);
            };

            script.onerror = function () {

                reject(
                    new Error(
                        "Quiz data failed to load: " + url
                    )
                );

            };

            document.head.appendChild(script);

        });
    }

    /*
     * Load all configured quiz data files
     * sequentially.
     */
    window.PARAMWORLD_QUIZ_READY =
        DATA_FILES.reduce(

            function (promise, file) {

                return promise.then(
                    function () {

                        return loadScript(
                            BASE_URL + file
                        );

                    }
                );

            },

            Promise.resolve()

        );

    /*
     * Final status promise
     */
    window.PARAMWORLD_QUIZ_READY.then(

        function () {

            console.log(
                "ParamWorld Quiz Data Loaded Successfully"
            );

            console.log(
                "Total Quiz Sets:",
                Object.keys(
                    window.ParamWorldQuizData
                ).length
            );

        }

    ).catch(

        function (error) {

            console.error(
                "ParamWorld Quiz Data Loader Error:",
                error
            );

        }

    );

})();