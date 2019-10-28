var Konami = /** @class */ (function () {
    function Konami(command) {
        if (command === void 0) { command = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; }
        this.keys = [];
        this.keyCount = 0;
        this.command = [];
        this.callback = function () {
            var msg = "Hello Konami.";
            alert("" + msg);
        };
        this.command = command;
    }
    Konami.prototype.handleKeyDown = function (event) {
        var keyCode = event.keyCode;
        console.log(keyCode);
        var currentKeyCount = this.keys.length;
        var index = 0;
        var commandCount = 0;
        this.keys[currentKeyCount] = keyCode;
        index = currentKeyCount - 1;
        commandCount = this.command.length;
        if (this.keys[index] === this.command[index]) {
            this.keyCount++;
        }
        else {
            this.reset();
            return;
        }
        if (this.keyCount === commandCount) {
            this.action();
        }
    };
    Konami.prototype.eventListener = function () {
        var _this = this;
        var document = window.document;
        try {
            document.addEventListener("keydown", function (event) {
                _this.handleKeyDown(event);
            }, false);
        }
        catch (error) {
            document.attachEvent("keydown", function (event) {
                _this.handleKeyDown(event);
            });
        }
    };
    Konami.prototype.action = function () {
        this.callback();
        this.reset();
    };
    Konami.prototype.reset = function () {
        this.keys = [];
        this.keyCount = 0;
    };
    Konami.prototype.init = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = this.callback; }
        this.callback = callback;
        setTimeout(function () {
            _this.eventListener();
        }, 0);
    };
    return Konami;
}());
//# sourceMappingURL=konami.js.map