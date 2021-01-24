// alert("Hi");

function ageInDays(){
    var birthYear = prompt("Enter the year in which you were born?");
    if(birthYear){
    var numberOfDays = (2021 - birthYear)*365;
    var h2 = document.createElement('h2');
    var textAnswer = document.createTextNode("You are " + numberOfDays + " days old!");
    h2.setAttribute('id', 'ageInDays');
    h2.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h2);
    document.getElementById('flex-box-result').style.display = 'block';
    }
}

function reset(){
    document.getElementById('ageInDays').remove();
    document.getElementById('flex-box-result').style.display = 'none';
}

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}