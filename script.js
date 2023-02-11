const user = {
};
Object.defineProperty (user, 'name', {
  value: "Vasya",
  configurable: true,
  enumerable: true,
});
Object.defineProperty (user, 'age', {
  value: 30,
  configurable: true,
  enumerable: true,
});
Object.defineProperty (user, 'id', {
  value: 1053636,
  enumerable: true,
});
console.log(Object.getOwnPropertyDescriptor(user, 'id'));


const dataBase = {
  dbName: 'user',
  dbType: 'MySQL',
};

const configurateDB = {
  token: '123',
  password: '567',
  user: 'admin',
};

Object.freeze(dataBase);
Object.seal(configurateDB);


const salaries = {
  frontend: 2000,
  backend: 1500,
  design: 1000,
};

Object.defineProperty(salaries, 'sum',{
  get(){
    let sum = 0;
    for (let salary in this) {
      sum += this[salary];
    } console.log(sum);
  }, enumerable: false,
});

Object.defineProperty(salaries, 'addsalaries',{
  set(value) {
    let salary;
    for (let i = 0; i < value.length; i++){
      salary = value [i].split(' : ');
      this[salary[0]] = +salary[1];
    }
  }, enumerable:false,
});

console.log(salaries);
salaries.sum;
salaries.addSalaries = ["frontend : 5000", "design : 4000", "manager : 3000"];
console.log(salaries);
salaries.sum;
salaries.addSalaries = ["developer : 13000", "recruiter : 8000", "frontend : 10000"];
console.log(salaries);
salaries.sum;

const usver = {
  name: "Mike",
  surname: "Davis",
  age: 25,
};

Object.defineProperty(usver, "userInfo", {
  get() {
    let result = [];
    for (const key in this) {
      result.push(`${key} : ${this[key]}`);
    }
    return result.join(', ');
  },
  enumerable: false,
});
usver.userInfo;
usver.login = "MK_18";
console.log(usver.userInfo);