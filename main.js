// const username = prompt ('Введите имя')
// const lastname = prompt ('Введите фамилию')
// alert ('Здравствуйте ' + username) 
// console.log('Здравствуйте ' + username);

// 2 

// const nom1 = prompt ('Введите число')
// const nom2 = prompt ('Введите число')
// if (nom1 > nom2) {
//     alert ('первое больше')  
// }else if (nom1 < nom2){
//     alert ( 'первое меньше')
// }else  { 
//     alert ( 'равно')
// }

// 3

const color = prompt ('укажите цвет')

switch (color) {
    case ('yellow'):
        alert ('wait')
        break;
    case ('red') :
        alert ('stop')   
        break;
    case ('green') :
        alert ('go')
        break;
    default: 
        alert ('unknown color')   
        break;
}