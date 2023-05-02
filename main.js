/* 1) Реалізуй клас, що описує коло.*/

class Circle {
    constructor(radius) {
      this.radius = radius;
    }

    get radius() {
      return this._radius;
    }

    set radius(radius) {
      if (radius <= 0) {
        throw new Error("Radius should be a positive number.");
      }
      this._radius = radius;
    }

    get diameter() {
      return this.radius * 2;
    }

    get area() {
      return Math.PI * this.radius ** 2;
    }

    get circumference() {
      return 2 * Math.PI * this.radius;
    }
  }

  const calculateButton = document.querySelector('#calculate-button');
  const radiusInput = document.querySelector('#radius-input');
  const resultParagraph = document.querySelector('#result');

  calculateButton.addEventListener('click', () => {
    const radius = Number(radiusInput.value);
    const circle = new Circle(radius);
    const result = `Радіус: ${circle.radius}, Діаметр: ${circle.diameter}, Площа: ${circle.area}, Довжина: ${circle.circumference}`;
    resultParagraph.textContent = result;
  });

