export default class Slider {
  constructor(page, btns) {
    this.page = document.querySelector(page);
    this.slides = this.page.children;
    this.btns = document.querySelectorAll(btns);
    this.slideIndex = 1;
  }
  //method control behaviour slides
  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    //remove 'block' for all slides
    this.slides.forEach((slide) => {
      slide.style.display = 'none';
    });
    //add 'block' only for currend slide
    this.slides[this.slideIndex - 1].style.display = 'block';
  }
  //method for swipe slider on the right and left
  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }
  //main methhod - include all methods abow
  render() {
    //event for btns for switching slides
    this.btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.plusSlides(1);
      });
      btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });
    this.showSlides(this.slideIndex);
  }
}
