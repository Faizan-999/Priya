

// var numbervalue = parseInt(56);
// var stringdatatype = "here is a string value";
// var one = true, zero = false;
// document.getElementById('javas').innerHTML = stringdatatype;
// document.getElementById('javas').style.textAlign = "center";
// console.log(stringdatatype);
// function letsmakeicridble() {
//     var age = prompt("Enter your age: ");
//     if(age > 18){
//         document.getElementById('image18').style.display = "inline-block";
//     }else {
//         document.getElementById('image18').style.display = "none";
//         alert("You are child Yet :");
//     }
// }
/*.....................................*/

function ShowForm() {
    document.getElementById('formlogin').style.display = "block";
    document.getElementById('close').style.display = "block";
    document.getElementById('gotologin').style.display = "none";

}
function closeForm() {
    document.getElementById('formlogin').style.display = "none";
    document.getElementById('gotologin').style.display = "block";

}

function login() {
    var fname = document.getElementById('name').value;
    var pasword = document.getElementById('password').value;
    
}





/*..............................*/


const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
    const updateCount = () => {
    const target = +counter.getAttribute('data-target');
const count = +counter.innerText;

// Lower inc to slow and higher to slow
const inc = target / speed;

// console.log(inc);
// console.log(count);

// Check if target is reached
if (count < target) {
    // Add inc to count and output in counter
    counter.innerText = count + inc;
    // Call function every ms
    setTimeout(updateCount, 1);
} else {
    counter.innerText = target;
}
};

updateCount();
});
