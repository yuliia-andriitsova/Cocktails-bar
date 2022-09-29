// const screenWidth = window.screen.width;

// export const checkingScreenWidth = checkingScreenForWidth(screenWidth);

export class checkingScreenWidth {
  constructor() {
    this.screenWidth = window.screen.width;

    console.log(this.screenWidth);
  }

  checkingScreenForWidth() {
    let number = 0;
    if (this.screenWidth >= 320 && this.screenWidth < 768) {
      number = 3;
    } else if (this.screenWidth >= 768 && this.screenWidth < 1280) {
      number = 6;
    } else if (this.screenWidth >= 1280) {
      number = 9;
    }
    return number;
  }
}
