export default class Konami {

  constructor(cmd = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]) {

    const def = {

      callback() {
        let msg = "Hello Konami.";
        if (typeof window !== "undefined") {
          alert(`${msg}`);
        }
      }

    };

    this.key_array = [];
    this.key_count = 0;
    this.callback = def.callback;
    this.command = cmd;

  }

  keyDown(e) {

    let l = this.key_array.length,
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
    return;

  }

  eventListener() {

    let d = window.document;

    try {

      d.addEventListener("keydown", (e) => {
        this.keyDown(e);
      }, false);

    } catch (err) {

      d.attachEvent("keydown", (e) => {
        this.keyDown(e);
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

  init(callback = this.callback) {
    this.callback = callback;
    setTimeout(() => {
      this.eventListener();
    }, 0);

  }

}
