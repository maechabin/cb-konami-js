/**
 * cb-konami-js - konami code
 * @version v0.1.1
 * @author maechabin mail@chab.in http://mae.chab.in/
 * @license mit
 * @repository https://github.com/maechabin/cb-konami-js.git
 */
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Konami = (function () {
  function Konami() {
    var cmd = arguments[0] === undefined ? [38, 38, 40, 40, 37, 39, 37, 39, 66, 65] : arguments[0];

    _classCallCheck(this, Konami);

    var def = {

      callback: function callback() {
        var msg = "Hello Konami.";
        if (typeof window === "undefined") {
          console.log("" + msg);
        } else {
          alert("" + msg);
        }
      }

    };

    this.key_array = [];
    this.key_count = 0;
    this.callback = def.callback;
    this.command = cmd;
  }

  _createClass(Konami, {
    keyDown: {
      value: function keyDown(e) {

        var l = this.key_array.length,
            i = 0,
            c = 0,
            key = e.keyCode;

        this.key_array[l] = key;
        i = l - 1;
        c = this.command.length;

        if (this.key_array[i] === this.command[i]) {
          this.key_count++;
        } else {
          this.reset();
          return;
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
            _this.keyDown(e);
          }, false);
        } catch (err) {

          d.attachEvent("keydown", function (e) {
            _this.keyDown(e);
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
        var _this = this;

        var callback = arguments[0] === undefined ? this.callback : arguments[0];

        this.callback = callback;
        setTimeout(function () {
          _this.eventListener();
        }, 0);
      }
    }
  });

  return Konami;
})();

module.exports = Konami;