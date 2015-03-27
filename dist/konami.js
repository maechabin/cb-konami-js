"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Konami = (function () {
  function Konami(cmd) {
    _classCallCheck(this, Konami);

    this.command = cmd;
    this.key_array = [];
    this.key_count = 0;
  }

  _createClass(Konami, {
    keyDown: {
      value: function keyDown(e) {

        var i, c;
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
    action: {
      value: function action() {

        alert("Yoo!! KONAMI!!!!");
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
      value: function init(d) {
        var _this = this;

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
    }
  });

  return Konami;
})();

var konami = new Konami([38, 38, 40, 40, 37, 39, 37, 39, 66, 65]);
konami.init(window.document);