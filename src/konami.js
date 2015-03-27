"use strict";
var Konami = (function () {
    function Konami(cmd) {
        this.command = cmd;
        this.key_array = [];
        this.key_count = 0;
    }
    Konami.prototype.keyDown = function (e) {
        var i, c;
        var key = e.keyCode;
        this.key_array.push(key);
        i = this.key_array.length - 1;
        c = this.command.length;
        if (this.key_array[i] === this.command[i]) {
            this.key_count++;
        }
        else {
            this.reset();
        }
        console.log(this.key_array);
        console.log(this.key_count);
        if (this.key_count === c) {
            this.action();
        }
    };
    Konami.prototype.reset = function () {
        this.key_array = [];
        this.key_count = 0;
    };
    Konami.prototype.action = function () {
        alert("Yoo!! KONAMI!!!!");
        this.reset();
    };
    Konami.prototype.init = function (d) {
        var _this = this;
        try {
            d.addEventListener("keydown", function (e) {
                _this.keyDown.call(_this, e);
            }, false);
        }
        catch (err) {
            d.attachEvent("keydown", function (e) {
                _this.keyDown.call(_this, e);
            });
        }
    };
    return Konami;
})();
var konami = new Konami([38, 38, 40, 40, 37, 39, 37, 39, 66, 65]);
konami.init(window.document);
