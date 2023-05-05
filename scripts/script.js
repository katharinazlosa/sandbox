//1. dohvatiti box i promijeniti background color
const box = document.querySelector(".box");
box.style.backgroundColor = "red";

//2. dodati dodatnu klasu na box koja će povećati njegove dimenzije
const list = box.classList.add("dimension");

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
const sum = (num1, num2) => {
  let twoNumSum = num1 + num2;
  return twoNumSum;
};
box.innerHTML = sum(2, 5);

//5. animirati box dijagonalno do (30px, 30px) i nazad do 50px
let positionD = 0;
let horizonD = 0;
let reverseD = false;

const moveDiagonally = () => {
  positionD++;
  let id = setInterval(frame, 30);

  const frame = () =>{
    if
  }
};
//6. dodaj onclick event i smanji button
const handleClick = () => {
  const smallerBtn = document.querySelector(".btn").classList.add("smaller");
};
