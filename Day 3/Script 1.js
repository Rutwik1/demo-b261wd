
//for loop;-
var obj = [
{ person: "Rahul", age: "2", company: "GUVI" },
{ person: "Rohit", age: "5", company: "GUVI geek" },
{ person: "Rakesh", age: "8", company: "GUVI geek network" },
]
for(let i =0;i<obj.length;i++)
{
console.log(obj[i]);
}


//for of loop:-
var obj = [
{ person: "Rahul", age: "2", company: "GUVI" },
{ person: "Rohit", age: "5", company: "GUVI geek" },
{ person: "Rakesh", age: "8", company: "GUVI geek network" },
]
for(var property of obj)
{
console.log(property);
}


//for in loop:-
var obj = [
{ person: "Rahul", age: "2", company: "GUVI" },
{ person: "Rohit", age: "5", company: "GUVI geek" },
{ person: "Rakesh", age: "8", company: "GUVI geek network" },
]
for(var property in obj)
{
console.log(obj[property]);
}


//for each loop:-
var obj = [
{ person: "Rahul", age: "2", company: "GUVI" },
{ person: "Rohit", age: "5", company: "GUVI geek" },
{ person: "Rakesh", age: "8", company: "GUVI geek network" },
]
obj.forEach(key => console.log(key));
