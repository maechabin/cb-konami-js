"use strict";

class Konami {

  constructor(cmd) {

    this.command = cmd;
    this.key_array = [];
    this.key_count = 0;

  }

  keyDown(e) {

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

  action() {

    alert("Yoo!! KONAMI!!!!");
    this.reset();

  }

  reset() {

    this.key_array = [];
    this.key_count = 0;

  }

  init(d) {

    try {

      d.addEventListener("keydown", (e) => {

        this.keyDown.call(this, e);

      }, false);

    } catch (err) {

      d.attachEvent("keydown", (e) => {

        this.keyDown.call(this, e);

      });

    }

  }

}

var konami = new Konami([38, 38, 40, 40, 37, 39, 37, 39, 66, 65]);
konami.init(window.document);
