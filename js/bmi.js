var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
var resultPlaceholder = document.getElementById("result-placeholder");

function validateForm(){
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    alert("All fields are required!");
    document.getElementById("submit").removeEventListener("click", countBmi);
  }else{
    countBmi();
  }
}

document.getElementById("submit").addEventListener("click", validateForm);

function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }
  form.reset();
  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var resultText = '';
  if(bmi<18.5){
    resultText = 'Underweight';
  }else if(18.5<=bmi&&bmi<=24.9){
    resultText = 'Healthy';
  }else if(25<=bmi&&bmi<=29.9){
    resultText = 'Overweight';
  }else if(30<=bmi&&bmi<=34.9){
    resultText = 'Obese';
  }else if(35<=bmi){
    resultText = 'Extremely obese';
  }
  
  resultPlaceholder.innerHTML = `
    <div class="result-container" id="bmi-result">
        <h3>${resultText}</h3>
        <p>BMI: <span class="result-value">${parseFloat(bmi).toFixed(2)}</span></p>
    </div>
  `;
  
  document.getElementById("clear").addEventListener("click", function(){
    resultPlaceholder.innerHTML = '';
  });
}
