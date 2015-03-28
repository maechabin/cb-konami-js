/*!
  * cb-konami-js v0.0.1
  * Auther: maechabin mail@chab.in http://mae.chab.in/ 
  * @lisence: license
  * https://github.com/maechabin/cb-konami-js.git
  */
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Konami = (function () {
  function Konami(cb, cmd) {
    _classCallCheck(this, Konami);

    var def = {

      callback: function () {
        alert("Hello Konami.");
      },
      command: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

    };

    this.key_array = [];
    this.key_count = 0;
    this.callback = cb || def.callback;
    this.command = cmd || def.command;
  }

  _createClass(Konami, {
    keyDown: {
      value: function keyDown(e) {

        var i = undefined,
            c = undefined;
        var key = e.keyCode;

        this.key_array.push(key);
        i = this.key_array.length - 1;
        c = this.command.length;

        if (this.key_array[i] === this.command[i]) {

          this.key_count++;
        } else {

          this.reset();
        }

        if (this.key_count === c) {

          this.action();
        }
      }
    },
    eventListener: {
      value: function eventListener() {
        var _this = this;

        var d = window.document;

        try {

          d.addEventListener("keydown", function (e) {

            _this.keyDown.call(_this, e);
          }, false);
        } catch (err) {

          d.attachEvent("keydown", function (e) {

            _this.keyDown.call(_this, e);
          });
        }
      }
    },
    action: {
      value: function action() {

        this.callback();
        this.reset();
      }
    },
    reset: {
      value: function reset() {

        this.key_array = [];
        this.key_count = 0;
      }
    },
    init: {
      value: function init() {

        this.eventListener();
      }
    }
  });

  return Konami;
})();