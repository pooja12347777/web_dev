class user{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayhi(){
        console.log("hi , i am" + this.name);
    }
    increasescore(){
        this.score++;
    }
}
const user1 = new user("pooja",21);
const user2 = new user("soni",23);
user1.sayhi();
console.log(user1.score);
user2.increasescore();
console.log(user2.score);
