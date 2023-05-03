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
  class Marker {
    constructor(color, inkLevel) {
      this.color = color;
      this.inkLevel = inkLevel;
    }
  
    write(text) {
      const inkPerChar = 0.5;
      let inkUsed = 0;
      for (let i = 0; i < text.length; i++) {
        if (text[i] !== " ") {
          inkUsed += inkPerChar;
        }
        if (inkUsed > this.inkLevel) {
          alert("Маркер закінчився!");
          break;
        }
        alert(`%c${text[i]}`, `color: ${this.color}`);
      }
      this.inkLevel -= inkUsed;
    }
  
    refill() {
      this.inkLevel = 100;
    }
  }
  
  const txtItem = document.querySelector(".textarea__item");
  const txtCounter = document.querySelector(".textarea__counter span");
  const refillBtn = document.querySelector(".refill-btn");
  const colorPicker = document.querySelector("#marker-color-picker");
  
  // set initial color
  const initialColor = colorPicker.value;
  const myMarker = new Marker(initialColor, 100);
  txtItem.style.color = myMarker.color;
  
  txtCounter.innerHTML = txtItem.getAttribute("maxlength");
  txtItem.addEventListener("keyup", function(e) {
    if (e.code !== "Space") {
      const txtCounterResult = txtItem.getAttribute("maxlength") - txtItem.value.length;
      txtCounter.innerHTML = txtCounterResult;
      const inkUsed = (txtItem.value.replace(/\s/g, "").length) * 0.5;
      if (inkUsed > myMarker.inkLevel) {
        alert("Маркер закінчився!");
        txtItem.disabled = true;
        refillBtn.disabled = false;
      } else {
        myMarker.inkLevel -= inkUsed;
        alert(`Ink level: ${myMarker.inkLevel}%`);
        txtItem.style.color = myMarker.color;
      }
    }
  });
  
  colorPicker.addEventListener("change", function() {
    myMarker.color = colorPicker.value;
    txtItem.style.color = myMarker.color;
  });
  
  refillBtn.addEventListener("click", function() {
    myMarker.refill();
    alert("Маркер перезаповнено");
    txtItem.disabled = false;
    txtItem.value = "";
    txtCounter.innerHTML = txtItemLimit;
    txtItem.style.color = myMarker.color;
  });