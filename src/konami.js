/*!
  * cb-konami-js v0.0.1
  * Auther: maechabin mail@chab.in http://mae.chab.in/ 
  * @lisence: license
  * https://github.com/maechabin/cb-konami-js.git
  */
"use strict";

class Konami {

  constructor(cb, cmd) {

    const def = {

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

  eventListener() {

    let d = window.document;

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

  action() {

    this.callback();
    this.reset();

  }

  reset() {

    this.key_array = [];
    this.key_count = 0;

  }

  init() {

    this.eventListener();

  }

}
