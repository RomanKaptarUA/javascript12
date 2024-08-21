1
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'Happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}:${user[key]}`);
}

//2 
const countProps = function (obj) {
  return Object.keys
};

console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2}));

console.log(countProps({mail: 'romankaptar82@gmail.com', isOnline: true, score: 500}));

//3

const findBestEmployee = function (employees) {
    let bestEmployee = '';
    let maxTast = 0;
    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTask) {
            maxTask = tasks;
            bestEmployee = name;
        }
    }
    return bestEmployee;
};

console.log(
    findBestEmployee({
        ann: 29,
        david: 21,
        yura: 15,
        roma: 51,
        nazar: 50,
    })
)


//4
// const countTotalSalary = function (employees) {
//     let totalSalary = 0;
//     for (const salary of Object.values(employees)) {
//         totalSalary += salary;
//     }
//     return totalSalary;
// }







/////5
// const products = [
// { name: 'Радар', price: 1300, quantity: 4 },
// { name: 'Сканер', price: 2700, quantity: 3 },
// { name: 'Дроїд', price: 400, quantity: 7 },
// { name: 'Захоплення', price: 1200, quantity: 2 },      
// ];


// const getAllPropValues = function (arr, prop) {
//     const values = [];
//     for (const item of arr) {
//         if (item.hasOwnProperty(prop)) {
//             values.push(item[prop]);
//         }
//     }
//     return values;
// }

// console.log(getAllPropValues(products, 'name'));

// console.log(getAllPropValues(products, 'quantity'));

// console.log(getAllPropValues(products, 'category'));

///////////////6
const products2 = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },      
    ];

    const calculateTotalprice = function (allProducts, productName) {
      for (const product of allProducts) {
        if (product.name === productName) {
            return product.price * product.quantity;
        }
      }
      return 0;
    };
    console.log(calculateTotalprice(products2, 'Радар')); 

    console.log(calculateTotalprice(products2, 'Дроїд'));


