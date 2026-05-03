function incrementeAge(value,name){
    this.age+=value;
    this.name=name;
    console.log(this.age);
    console.log(this.name);
}
const user = {
    name:"POOJA",
    age:21,
}
const user2 = {
    name:"MISHRA",
    age:25

}

incrementeAge.apply(user2, [1, "JHA"]);