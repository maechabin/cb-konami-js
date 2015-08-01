export default class Konami {

  constructor(cmd) {

    const def = {

      callback() {

        let msg = "Hello Konami.";

        if (typeof window === "undefined") {
          console.log(msg);
        } else {
          alert(msg);
        }

      },
      command: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

    };

    this.key_array = [];
    this.key_count = 0;
    this.callback = def.callback;
    this.command = cmd || def.command;

  }

  keyDown(e) {

    let i, c;
    let key = e.keyCode;

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

  init(callback) {
    this.callback = callback || this.callback;
    this.eventListener();
  }

}
