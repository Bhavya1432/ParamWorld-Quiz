/*
 * ParamWorld Quiz
 * UI Controller
 */

(function () {
    "use strict";

    window.ParamWorldQuizUI = {

        language: "hi",

        setLanguage: function (language) {

            this.language = language === "en" ? "en" : "hi";

            document.dispatchEvent(
                new CustomEvent("paramworld:languagechange", {
                    detail: {
                        language: this.language
                    }
                })
            );
        },

        getQuestionText: function (question) {

            if (!question) {
                return "";
            }

            if (this.language === "en") {
                return (
                    question.questionEnglish ||
                    question.questionHindi ||
                    ""
                );
            }

            return (
                question.questionHindi ||
                question.questionEnglish ||
                ""
            );
        },

        getOptions: function (question) {

            if (!question) {
                return [];
            }

            if (this.language === "en") {
                return (
                    question.optionsEnglish ||
                    question.optionsHindi ||
                    []
                );
            }

            return (
                question.optionsHindi ||
                question.optionsEnglish ||
                []
            );
        },

        getCorrectAnswer: function (question) {

            if (!question) {
                return null;
            }

            return question.answer;
        }

    };

})();