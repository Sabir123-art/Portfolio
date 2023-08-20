"use strict";

var tablinks = document.getElementsByClassName('tab-links');
var tabcontants = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = tablinks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var tablink = _step.value;
      tablink.classList.remove("active-links");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = tabcontants[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var tabcontant = _step2.value;
      tabcontant.classList.remove("active-tab");
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  event.currentTarget.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");
} // var sidemenu = document.getElementById("sidemenu");
// function openmenu(){
//     sidemenu.style.right = "0";
// }
// function closemenu(){
//     sidemenu.style.right = "-200px";
// }


var scriptURL = 'https://script.google.com/macros/s/AKfycbyDxGpi3dzbqd7-ey8ZPrv1ymT7C4pPrKgyg18Ia706fGibXj_MgDUgyy49niCut3w3xA/exec';
var form = document.forms['submit-to-google-sheet'];
var msg = document.getElementById("msg");
form.addEventListener('submit', function (e) {
  e.preventDefault();
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  }).then(function (response) {
    console.log('hello', response);
    msg.innerHTML = "Messae Sent Successfully";
    setTimeout(function () {}, 2000);
  });
  form.reset()["catch"](function (error) {
    return console.error('Error!', error.message);
  });
});