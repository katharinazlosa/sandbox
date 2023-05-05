//1. dohvatiti box i promijeniti background color
const box = document.querySelector(".box");
// box.style.backgroundColor = "red";

//2. dodati dodatnu klasu na box koja će povećati njegove dimenzije
// const list = box.classList.add("dimension");

//3. na klik animirati box do 30px i nazad

// let position = 0;
// let reverse = false;

// useEffect(() => {
//   const box = document.getElementsByClassName("box")[0] as HTMLDivElement;

//   const frame = () => {
//     if (reverse) {
//       position--;
//     } else {
//       position++;
//     }
//     const currentPosition = position + "px";

//     if (position == 30) {
//       reverse = true;
//     }
//     if (position == 0) {
//       reverse = false;
//     }

//     box.style.marginLeft = currentPosition;
//   };
//   setInterval(frame, 30);
// }, []);

//4. kreirati funkciju koja će imati lokalnu varijablu u kojoj ćemo izračunati sumu dva parametra i rezultat ispisati unutar box-a
// const sum = (num1, num2) => {
//   let twoNumSum = num1 + num2;
//   return twoNumSum;
// };
// box.innerHTML = sum(2, 5);

//5. animirati box dijagonalno do (30px, 30px) i nazad do 50px

const container = document.querySelector(".container");

// let positionD = 0;
// let test = true;

// const moveDiagonally = () => {
//   box.style.left = positionD + "px";
//   box.style.top = positionD + "px";

//   if (test) {
//     positionD++;
//   } else {
//     positionD--;
//   }

//   if (positionD >= 150) {
//     test = false;
//   } else if (positionD <= 0) {
//     test = true;
//   }
// };

// let t = setInterval(moveDiagonally, 1);

//6. dodaj onclick event i smanji button
// const handleClick = () => {
//   const smallerBtn = document.querySelector(".btn").classList.add("smaller");
// };

//Create a class Dog
class Dog {
  constructor(hasSat, bark, doSit, standUp) {
    this.hasSat = hasSat;
    this.bark = bark;
    this.doSit = doSit;
    this.standUp = standUp;

    this.hasSat = false;
    this.bark = function () {
      return console.log("vau vau");
    };
    this.doSit = function () {
      this.hasSat = true;
    };
    this.standUp = function () {
      this.hasSat = false;
    };
  }
}
//Create an instance of Dog class
const dog = new Dog();
console.log(dog.hasSat);
dog.bark();
dog.doSit();
console.log(dog.hasSat);
dog.bark();

//7. Zadatak kreiraj klasu Room koja će imati vrijednosti
//širina, visina i dužina i metode za racunanje površine
//i prostora sobe. Dodati još vrijednost je li upaljeno
//svjetlo i metodu koja će nam u konzolu ispisati trenutno
//stanje svjetla

class Room {
  constructor(width, height, length, light) {
    this.width = width;
    this.height = height;
    this.length = length;
    this.light = light;
  }
  light = false;

  calcArea() {
    return console.log(this.height * this.width);
  }
  calcSpace() {
    return console.log(this.height * this.width * this.length);
  }
  showLight() {
    if (this.light == true) {
      return console.log("The light is on.");
    } else {
      return console.log("The light is off.");
    }
  }
}

const room = new Room(10, 3, 6);

room.calcArea();
room.calcSpace();
room.showLight();
