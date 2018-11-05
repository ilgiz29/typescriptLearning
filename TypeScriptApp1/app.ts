class User {
	name: string;
	age: number;
	constructor(_name: string, _age: number) {

		this.name = _name;
		this.age = _age;
	}
}

var tom: User = new User("Tom", 26);
console.log("Name: " + tom.name + ", Age: " + tom.age);