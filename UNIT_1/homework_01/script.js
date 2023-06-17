/*
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  getFullName() {
    return this.firstName + ' ' + this.lastName
  }
}

let person = new Person('Dan', 'Abramov')
person.getFullName() //> "Dan Abramov"
// Мы можем использовать акцессор или получить доступ напрямую
person.firstName //> "Dan"
person.lastName //> "Abramov"
*/
class News {
    constructor(news, task) {
        this.news = news;
        this.task = task;
    }
    getFullName() {
        return this.news + ' ' + this.task 
    }
}  



class Times extends News {
    constructor(news, task, title, out) {
        super(news, task)
        this.title = title 
        this.out = out 
    }
    getSecondName() {
        return this.title + ' ' + this.out
    } 
}  

let times = new Times('Ukrain', 'time', 'London is new old tawn', '03.06.2037')

console.log(times.news)
console.log(times.task)
console.log(times.title)
console.log(times.out)
