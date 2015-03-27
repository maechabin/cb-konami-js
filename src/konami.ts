"use strict";

class Konami {

  private command: number[];
  private key_array: number[];
  private key_count: number;

  constructor(cmd: number[]) {

    this.command = cmd;
    this.key_array = [];
    this.key_count = 0;

  }

  keyDown(e: any) {

    var i: number, c: number;
    var key: number = e.keyCode;

    this.key_array.push(key);
    i = this.key_array.length - 1;
    c = this.command.length;

    if (this.key_array[i] === this.command[i]) {

      this.key_count++;

    } else {

      this.reset();

    }

    console.log(this.key_array);
    console.log(this.key_count);

    if (this.key_count === c) {

      this.action();

    }

  }

  reset() {

    this.key_array = [];
    this.key_count = 0;

  }

  action() {

    alert("Yoo!! KONAMI!!!!");
    this.reset();

  }

  init(d: any) {

    try {

      d.addEventListener("keydown", (e: MouseEvent) => {

        this.keyDown.call(this, e);

      }, false);

    } catch (err) {

      d.attachEvent("keydown", (e: MouseEvent) => {

        this.keyDown.call(this, e);

      });

    }

  }

}

var konami = new Konami([38, 38, 40, 40, 37, 39, 37, 39, 66, 65]);
konami.init(window.document);
