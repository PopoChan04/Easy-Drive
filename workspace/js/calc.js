//samen met ibi gemaakt om alles werkend te krijgen.

//total value
//prijzen auto
let theory = 120;
let seperate = 90;

//prijzen vrachtwagen
let vrachtTheory = 210;
let vrachtSeperate = 180;

//prijzen motor
let motorTheory = 100;
let motorSeperate = 70;


let discounts = [5, 9 , 15];
sum = 0;
var sumTwo=  0;
var total = "";
sumTwo = 0;



//motor
var motor = document.getElementById('qty4');

//vrachtwagen
var vrachtwagen = document.getElementById('qty3');

//auto
var arr = document.getElementById('qty2');


var sum = document.getElementById('total').value;

//vrachtwagen checkbox
var vrachtTheorie = document.getElementById('checkboxVrachtTheorie');
var vrachtLos = document.getElementById('checkboxVrachtLos') ;

// auto checkbox
var theoriePakket = document.getElementById('checkboxAutoTheorie');
var autoLos = document.getElementById('checkboxAutoLos') ;

//motor checkbox
var motorPakket = document.getElementById('checkboxMotorTheorie');
var motorLos = document.getElementById('checkboxMotorLos');


function rangeset(input , min, max){
    return input >= min && input <= max
  }



//korting function
function discount(total, percentage){
    var subtractor = (total / 100) * percentage;
    
    return subtractor;
}



// AUTO INPUT
function autoPakket() {

    
    if(arr.value === '0'){
       document.getElementById('total').value = sum; 
    }else {
        sum = arr.value * 50;
        if(theoriePakket.checked && autoLos.checked ){
          sumTwo = theory + seperate;
        }else if (theoriePakket.checked){
            sumTwo = theory;
        }else if (autoLos.checked){
            sumTwo = seperate;
        }


        let countdiscount = 0;
        
        if(rangeset(parseFloat(arr.value), 10, 19)){
            let shortdiscount = discounts[0];

             countdiscount = discount(sum, shortdiscount);
            sum = sum - countdiscount;
        }
        else if(rangeset(parseFloat(arr.value), 20, 49)){
            let middlediscount = discounts[1];
            countdiscount = discount(sum, middlediscount);
            sum = sum - countdiscount;
        }
        
        else if(arr.value >= 50 ){
            let highdiscount = discounts[2];
            countdiscount = discount(sum, highdiscount);
            sum = sum - countdiscount;


        }
     
        total = sum + sumTwo;
        document.getElementById('total').value = total ;
    }
}


//VRACHTWAGEN INPUT
function vrachtwagenPakket() {
    if(vrachtwagen.value === '0'){
       document.getElementById('totalVrachtwagen').value = sum; 
    }else {
        sum = vrachtwagen.value * 60;
        if(vrachtTheorie.checked && vrachtLos.checked  ){
          sumTwo = vrachtTheory + vrachtSeperate;
        }else if (vrachtTheorie.checked){
            sumTwo = vrachtTheory;
        }else if (vrachtLos.checked){
            sumTwo = vrachtSeperate;
        }


        let countdiscount = 0;
        
        if(rangeset(parseFloat(vrachtwagen.value), 10, 19)){
            let shortdiscount = discounts[0];

             countdiscount = discount(sum, shortdiscount);
            sum = sum - countdiscount;
        }
        else if(rangeset(parseFloat(vrachtwagen.value), 20, 49)){
            let middlediscount = discounts[1];
            countdiscount = discount(sum, middlediscount);
            sum = sum - countdiscount;
        }
        
        else if(vrachtwagen.value >= 50 ){
            let highdiscount = discounts[2];
            countdiscount = discount(sum, highdiscount);
            sum = sum - countdiscount;


        }
     
        total = sum + sumTwo;
        
      document.getElementById('totalVrachtwagen').value = total ;
    }
}


//motor INPUT
function motorPakketten() {
    if(motor.value === '0'){
       document.getElementById('totalMotor').value = sum; 
    }else {
        sum = motor.value * 50;
        if(motorPakket.checked && motorLos.checked ){
          sumTwo = motorTheory + motorSeperate;
        }else if (motorPakket.checked){
            sumTwo = motorTheory;
        }else if (motorLos.checked){
            sumTwo = motorSeperate;
        }


        let countdiscount = 0;
        
        if(rangeset(parseFloat(motor.value), 10, 19)){
            let shortdiscount = discounts[0];

             countdiscount = discount(sum, shortdiscount);
            sum = sum - countdiscount;
        }
        else if(rangeset(parseFloat(motor.value), 20, 49)){
            let middlediscount = discounts[1];
            countdiscount = discount(sum, middlediscount);
            sum = sum - countdiscount;
        }
        
        else if(motor.value >= 50 ){
            let highdiscount = discounts[2];
            countdiscount = discount(sum, highdiscount);
            sum = sum - countdiscount;


        }
     
        total = sum + sumTwo;
   
         document.getElementById('totalMotor').value = total ;
     
    }
}

