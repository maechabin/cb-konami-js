export default class Konami {
  keys: number[] = [];
  keyCount = 0;
  command: number[] = [];
  callback = () => {
    let msg = "Hello Konami.";
    alert(`${msg}`);
  };

  constructor(
    command = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
  ) {
    this.command = command;
  }

  handleKeyDown(event: KeyboardEvent): void {
    const keyCode = event.keyCode;
    console.log(keyCode);
    const currentKeyCount = this.keys.length;
    let index = 0;
    let commandCount = 0;

    this.keys[currentKeyCount] = keyCode;
    index = currentKeyCount - 1;
    commandCount = this.command.length;

    if (this.keys[index] === this.command[index]) {
      this.keyCount++;
    } else {
      this.reset();
      return;
    }

    if (this.keyCount === commandCount) {
      this.action();
    }
  }

  eventListener(): void {
    let document = window.document;

    try {
      document.addEventListener("keydown", (event: KeyboardEvent) => {
        this.handleKeyDown(event);
      }, false);
    } catch (error) {
      (document as any).attachEvent("keydown", (event: KeyboardEvent) => {
        this.handleKeyDown(event);
      });
    }
  }

  action(): void {
    this.callback();
    this.reset();
  }

  reset(): void {
    this.keys = [];
    this.keyCount = 0;
  }

  init(callback = this.callback): void {
    this.callback = callback;
    setTimeout(() => {
      this.eventListener();
    }, 0);
  }
}
