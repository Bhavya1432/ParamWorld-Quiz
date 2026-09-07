/* ParamWorld Quiz Data Loader
   ONE-TIME SETUP: change BASE_URL after GitHub Pages is ready.
*/

(function () {

  var BASE_URL = "https://YOUR-USERNAME.github.io/ParamWorld-Quiz/";

  var DATA_FILES = [
    "QUIZ_DATA/ASSISTANT_TEACHER/Hindi/PYQ_2023_SET_A.js"
  ];

  window.ParamWorldQuizData = window.ParamWorldQuizData || {};

  function loadScript(url) {
    return new Promise(function (resolve, reject) {

      var s = document.createElement("script");

      s.src = url;
      s.async = false;

      s.onload = resolve;

      s.onerror = function () {
        reject(
          new Error("Quiz data failed to load: " + url)
        );
      };

      document.head.appendChild(s);
    });
  }

  window.PARAMWORLD_QUIZ_READY = DATA_FILES.reduce(
    function (promise, file) {

      return promise.then(function () {

        return loadScript(BASE_URL + file);

      });

    },
    Promise.resolve()
  );

})();