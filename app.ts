import { Shoe } from './models/Shoe';
import { Person, User } from './models/Person';

let myShoe = new Shoe('Nike', 'Air Max', 10);
console.log(myShoe.display());

let person = new Person('Alan', 'Lee', '1987/5/4');
console.log(person.greet());
console.log(person.getAge());

let user = new User('James', 'Elderich', '1995/12/4', 'Elder J', 'elder_j@alanlai.name');
console.log(user.greet());