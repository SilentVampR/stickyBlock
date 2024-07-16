class StickyToParent {
  stickyWidth;
  parent;
  toTopPosition = 0;
  toBottomPosition = 0;
  scrollPosition = window.scrollY;

  constructor(params) {
    this.element = document.querySelector(`${params.element}`);
    this.offset = Number.isInteger(params.offset) ? params.offset : 0;
    this.stickyWidth = this.element?.offsetWidth;
    this.parent = this.element?.parentNode;
  }

  #setStyle(value) {
    if (value === false) {
      this.element.setAttribute(
        "style",
        "position: absolute; top: auto; bottom: 0; width:" +
          this.stickyWidth +
          "px"
      );
    } else {
      this.element.setAttribute(
        "style",
        "position: fixed; top: " +
          value +
          "px; width:" +
          this.stickyWidth +
          "px"
      );
    }
  }

  stickTheBlock() {
    if (this.element) {
      this.stickyHeight = this.element.offsetHeight;
      var topPosition = 0,
        parentTop = this.parent?.getBoundingClientRect().top,
        parentHeight = this.parent?.getBoundingClientRect().height;
      if (parentTop < 0 && this.stickyHeight < parentHeight) {
        var blockOffset = this.stickyHeight > window.innerHeight ? window.innerHeight - this.stickyHeight : 0;
        if (window.innerHeight - parentTop >= parentHeight && this.stickyHeight >= window.innerHeight) {
          this.#setStyle(false);
        } else if (window.innerHeight - parentTop >= parentHeight && this.stickyHeight < window.innerHeight &&
          parentHeight + parentTop + this.offset <= this.stickyHeight) {
          this.#setStyle(false);
        } else {
          topPosition =
            parentTop + Math.abs(blockOffset) < Math.abs(blockOffset) &&
            parentTop + Math.abs(blockOffset) > 0
              ? parentTop
              : blockOffset;
          if (this.scrollPosition > window.scrollY) {
            //Goes UP
            this.toBottomPosition = this.offset;
            this.toTopPosition =
              this.toTopPosition + (this.scrollPosition - window.scrollY);
            topPosition =
              this.toTopPosition > blockOffset &&
              this.toTopPosition < this.offset
                ? this.toTopPosition
                : this.offset;
          } else if (this.scrollPosition < window.scrollY) {
            //Goes DOWN
            this.toTopPosition = blockOffset;
            this.toBottomPosition =
              this.toBottomPosition - (window.scrollY - this.scrollPosition);
            topPosition =
              this.toBottomPosition > blockOffset - this.offset &&
              this.toBottomPosition < this.offset
                ? this.toBottomPosition
                : blockOffset - this.offset;
          }
          this.#setStyle(topPosition);
        }
      } else {
        this.element.style = "";
      }
      this.scrollPosition = window.scrollY;
    }
  }
}