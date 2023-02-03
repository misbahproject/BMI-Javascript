const bmiForm = document.getElementById("bmiForm");
const bmiContainer = document.getElementById("bmiContainer");
const nama = document.getElementById("nama");
const height = document.getElementById("height");
const weight = document.getElementById("weight");

// Konversi string ke objek
const bmi = JSON.parse(localStorage.getItem("bmi")) || [];

const addBmi = (nama, height, weight, hasil) => {
  bmi.push({
    nama,
    height,
    weight,
    hasil,
  });

  localStorage.setItem("bmi", JSON.stringify(bmi));

  return { nama, height, weight, hasil };
};

const createBmiElement = ({ nama, height, weight, hasil }) => {
  const bmiDiv = document.createElement("div");
  const bmiNama = document.createElement("h2");
  const bmiHeight = document.createElement("p");
  const bmiWeight = document.createElement("p");
  const bmiHasil = document.createElement("p");

  bmiNama.innerText = "Nama : " + nama;
  bmiHeight.innerText = "Height : " + height;
  bmiWeight.innerText = "Weight : " + weight;
  bmiHasil.innerText = "Hasil BMI : " + hasil;

  bmiDiv.append(bmiNama, bmiHeight, bmiWeight, bmiHasil);
  bmiContainer.appendChild(bmiDiv);

  bmiContainer.style.display = bmi.length === 0 ? "none" : "block";
};

bmiContainer.style.display = bmi.length === 0 ? "none" : "block";

bmi.forEach(createBmiElement);

bmiForm.onsubmit = (e) => {
  e.preventDefault();

  let vnama = nama.value;
  let vheight = height.value;
  let vweight = weight.value;
  let hasil = (vweight / ((vheight * vheight) / 10000)).toFixed(2);

  const newBmi = addBmi(vnama, vheight, vweight, hasil);

  createBmiElement(newBmi);

  nama.value = "";
  height.value = "";
  weight.value = "";
};
