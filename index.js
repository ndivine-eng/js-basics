var firstName = "John";
var age = 36;
if (age < 13) {
    console.log(firstName + 'is a boy');
}
else if (age >=10 && age < 20) {
    console.log( firstName + 'is a teenager');
} else if(age > 20) {
    console.log (firstName + 'is a man');
}

// comment if john drink beer depending on his age

let lastName = 'Peter';
let underAge = 17

if (underAge < 18) {
    console.log( lastName + ' ' + "is not allowed to drink beer ")
}
 else if (underAge <= 18) {
    console.log (lastName + "can drink beer")
}

var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log(firstName + "teachs students how to code in simple way");
        break;
    case 'driver':
        console.log(firstName + "is aggod driver i have ever met");
        break;
    case 'disigner':
        console.log(firstName + 'disigns good web pages');
        break;
    default:
        console.log(firstName + 'does another thing else');   

}