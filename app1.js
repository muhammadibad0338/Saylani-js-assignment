/*
//cahpter 1
//question 1
alert("hello world");

//question 2
alert("Error! Please enter a valid password");

//question 3
alert("welcome to js Land....\nHappy Coding!");


//question 4
alert("Welcome to js Land....");
alert("Happy coding!");

//question 5
alert("hello, i can run JS through web browser console!");


//chaprer 2
//question 1
var username = 

//question 2
var myname ="Muhammad Ibad Ur Rehman";

//question 3
var message ="hello world";
alert(message)


//question 4

var name ="sMuhammad Ibad Ur Rehman";
var age = "20 year old";
var course = "certified web app dev";
alert(name);
alert(age);
alert(course);


//question 5
var name = "pizza";
alert(name+"\n"+name.slice(0,4)+"\n"+name.slice(0,3)+"\n"+name.slice(0,2)+"\n"+name.slice(0,1));

//question 6
var email = "mibad0338@gmail.com"
alert("my email address is "+email);


//Question 7
var book = "A smarter way to learn JavaScript";
alert("i am trying to learn from the book "+book);

//question 8
document.write("yeah i can write HTML content through javascript");

//question 9
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");





// chapter 3

//question 1
var age = 20;
alert("i am "+age +" years old")




//question 2
var visit = 1;

alert("you have visit this site "+visit+" time");



//question 3
n=1999;
document.write("My birthday year is "+n);
document.write("<br>");
document.write("Data type of my declared variable is number");




//question 4 
var visitorname ="<strong>Muhammad Ibad</strong>";
var producttitle ="<strong>T-shirts</strong>";
var quatity = 5;
document.write( visitorname+" ordered "+quatity+" "+producttitle+" on XYZ Clothing store");


//chapter 4
var one,_1,$hello;
var one,ONE,_1,$1,oneTwo,x,X;
var 1,var,1one,1_,#_;



//chapter 5
//question 1
var a = prompt("enter first number");
var b = prompt("enter second number");
var sum = a+b;
document.write("Sum of "+a+" and "+b+" is "+sum);


//question 2
var a = prompt("enter  first number");
var b = prompt("enter second number");
var sub = a-b;
var multi = a*b;
var divd = a/b;
var Mod = a%b;
document.write("Subtarction of "+a+" and "+b+" is "+sub+"<br>");
document.write("Multiplication of "+a+" and "+b+" is "+multi+"<br>");
document.write("Division of "+a+" and "+b+" is "+divd+"<br>");
document.write("Modulus of "+a+" and "+b+" is "+Mod+"<br>");


//question 3
var a ;
document.write("Value after variable declaration is "+a+"<br>");
a=5;
document.write("initial value : "+a+"<br>");
a++;
document.write("value after increment is : "+a+"<br>");
a=a+7
document.write("value after addition is : "+a+"<br>");
a--;
document.write("value after decrement is : "+a+"<br>");
a=a%3;
document.write("The remainder is : "+a+"<br>");


//question 4
var price = 5;
tp=price*600;
document.write("Total cost to buy "+price+" tickets to a movie is "+tp+"PKR")

//question 5
document.write("Table of 4 <br>")
for(var i=1;i<=10;i++){
	document.write(4 +" X "+i+" = "+4*i);
	document.write("<br>");
}

//question 6
var c=25;
var f=70;
var ctf = (c*9/5)+32;
var ftc = (f-32)*5/9;
document.write(c+"<sup>o</sup>C is "+ctf+"<sup>o</sup>F<br>");
document.write(f+"<sup>o</sup>F is "+ftc+"<sup>o</sup>C")


//question 7
var firstItem = 650;
var fq = 3;
var a = firstItem*fq; 
var secondItem = 100;
var sq = 7;
var b =secondItem*sq;
var sc = 100;
var total = a+b+sc;
document.write("<h1>Shopping Cart</h1><br><br>")
document.write("Price of item 1 is "+firstItem+"<br>");
document.write("Quantity of item 1 is "+fq+"<br>");
document.write("Price of item 2 is "+secondItem+"<br>");
document.write("Quantity of item 2 is "+sq+"<br>");
document.write("Shipping Charges "+sc+"<br>")
document.write("Total cost of your oeder is "+ total);


//Question 8
document.write("<h1>Mark Sheet</h1><br><br>");
var tm = 980;
var mo = 804;
var per = (mo*100)/tm;
document.write("Total Marks : "  +tm+"<br>");
document.write("MArks obtained : "  +mo+"<br>");
document.write("Percentage : "  +per+"%");


//question 9
document.write("<h1>Currency in PKR</h1><br><br>");
var d=104.80;
var nod = 10;
var td = d*nod;
var r=28;
var nor = 25;
var tr = r*nor;
tc = td + tr;
document.write("Total Currency in PKR: "+tc)


var a = 10;
((a+5)*10)/2;


//question 11
document.write("<h1>Age calculator</h1><br><br>");
var cy = 2016;
var By =  1992;
var age = cy-By;
document.write("Current year : "+cy+"<br>");
document.write("Birth year : "+By+"<br>");
document.write("Yor age is : "+age);



//question 12
document.write("<h1>The Geometrizer</h1><br><br>");
var r = 20;
var c = 6.284*r;
var a = 3.142*(r*r);
document.write("Radius of circle: "+r+"<br>")
document.write("The cicumference is : "+c+"<br>");
document.write("The area is : "+a)


//question 13
document.write("<h1>The Lifetime Supply calculator</h1><br><br>");
var fav = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var amount = 3;
var total = (maxAge-currentAge)*amount;
document.write("Favourite Snacks : "+fav+"<br>");
document.write("Current age : "+currentAge+"<br>");
document.write("Estimated Maximum Age : "+maxAge+"<br>");
document.write("amount of snacks per day : "+amount+"<br>");
document.write("you will need "+total+" "+fav+" to last you until the ripe old age of "+maxAge);



//chapter 6-9
//question 1
var a=10;
document.write("Result:"+"<br>");
document.write("The value of a is : "+a+"<br>");
document.write("------------------------------"+"<br>");
++a;
document.write("The value of ++a is : "+a+"<br>");
document.write("Now The value of a is : "+a+"<br><br>");
document.write("The value of a++ is : "+(a++)+"<br>");
document.write("Now The value of a is : "+a+"<br><br>");
--a;
document.write("The value of --a is : "+a+"<br>");
document.write("Now The value of a is : "+a+"<br><br>");
document.write("The value of a-- is : "+(a--)+"<br>");
document.write("Now The value of a is : "+a+"<br><br>");





//question 2
var a = 2;
var b= 1;
var result = --a - --b + ++b + b--;
--a;
var num1 = (--a - --b );
var num2 = (--a - --b + ++b);
var rsult = (--a - --b + ++b +b--);
document.write("a is "+num1);
document.write("<br>b is "+num2);
document.write("<br>result is "+rsult);




//question 3
 var name = prompt("enter your name");
 alert("welcome "+name+" to your website");





//queston 4
var n = prompt("Please enter a number");
if (n==0){
	tabel(5);
}
else{
	tabel(n)
}
function tabel(a){
	for (var i = 1; i <= 10; i++) {
		document.write(a+" X "+i+" = "+(a*i)+"<br>")
	}

}




//question 5
var a =prompt("enter 1st subject name"); 
var b =prompt("enter 2nd subject name");
var c =prompt("enter 3rd subject name");
var d = +prompt("enter "+a+ " subject marks");
var e = +prompt("enter "+b+ " subject marks");
var f = +prompt("enter "+c+ " subject marks");
var t = d+e+f;
document.write("Subject Totaal Marks Obtained Marks Percentage"+"<br>");
document.write(a+"  100 "+"\t"+d+"\t"+d+"%"+"<br>");
document.write(b+"  100 "+"\t"+e+"\t"+e+"%"+"<br>");
document.write(c+"  100 "+"\t"+f+"\t"+f+"%"+"<br>");
var per = (t/300)*100;
document.write("<br>\t\t"+300+"\t\t"+t+"\t\t"+per+"%");



//chapter 9-11
//question 1
var a = prompt("Please enter city name ");
if (a == "karachi"){
	document.write("welcome to city of light");
}

//question 2
 var a = prompt("Please enter your gender ");
if (a == "male"){
	document.write("Good Morning Sir.");
}
else{
	document.write("Good Morning Ma'am.");
}



//question 3
var a = prompt("enter signal light");
if (a == "red"){
	document.write("Must Stop");
}
else if (a == "yellow"){
	document.write("Ready to move");
}
else{
	document.write("Move Now");
}

//question 4
var a =prompt("enter your fuel");
if (a < 0.25){
	document.write("Please refill the fuel in your car");
}



 //question 5
 a. var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
b. var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
c. var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
d. var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
e. if (true){
alert("True");
}
if (false){
alert("False");
}
f. if("car" < "cat"){
alert("car is smaller than cat");
}
//                 This code will not compiel becoz of syntax error in js we can't declare variable like this



//question 6
var a = +prompt("enter your subject 1 Marks");
var b = +prompt("enter your subject 2 Marks");
var c = +prompt("enter your subject 3 Marks");
var t = a+b+c;
var per = (t/300)*100;
document.write("<h1>Marks Sheet</h1>");
if (per >= 80 && per <=100){
	document.write("Total marks : 300"+"<br>");
	document.write("Mark Obtained : "+ t+"<br>");
	document.write("Percentage : "+per+"%<br>");
	document.write("Grade : A-One"+"<br>");
	document.write("Remarks : Excellent"+"<br>");
}
else if(per >=70 && per<80){
	document.write("Total marks : 300"+"<br>");
	document.write("Mark Obtained : "+ t+"<br>");
	document.write("Percentage : "+per+"%<br>");
	document.write("Grade : A"+"<br>");
	document.write("Remarks : Good"+"<br>");
}
else if (per >=60 && per<70 ){
	document.write("Total marks : 300"+"<br>");
	document.write("Mark Obtained : "+ t+"<br>");
	document.write("Percentage : "+per+"%<br>");
	document.write("Grade : B"+"<br>");
	document.write("Remarks : You need to improve"+"<br>");
}
else if(per < 60 ){
	document.write("Total marks : 300"+"<br>");
	document.write("Mark Obtained : "+ t+"<br>");
	document.write("Percentage : "+per+"%<br>");
	document.write("Grade : Fail"+"<br>");
	document.write("Remarks : Sorry"+"<br>");
}
else{
	document.write("Please enter correct Marks")
}

//question 7
var secret=8;

	var b = +prompt("Guess the number");
	var c = secret-b;
	if ( b == secret){
		document.write("Bingo! Correct answer");
		a=false;
	}
	else if (c == 1){
		document.write("Close enough to the correct answer");
	}
	else{
		document.write("<br>Sorry TRY Again!");
	}



//question 8
var a =+prompt("enter number");
if (a%3 ==0 ){
	document.write("yes "+a+" is divisible by 3");
}


//question 9
var a=+prompt("enter a number");
if (a%2 ==0){
	document.write(a+" is even number");
}
else{
	document.write(a+" is odd number");
}



//question 10
 var T =prompt("enter temperature");
if (T > 40) {
	document.write("It is too hot outside.");
}
else if (T > 30 && T < 40){
	document.write("The Weather today is Normal.");
}
else if (T > 20 && T < 30){
	document.write("Today’s Weather is cool.");
}
else if (T > 10 && T <20 ){
	document.write("OMG! Today’s weather is so Cool.");
}



//question 11
var a = +prompt("eneter 1st Number");
var b = +prompt("eneter 2nd Number");
var c = prompt("enter a operator");
if (c == "+"){
	document.write(a+b)
}
else if (c == "-"){
	document.write(a-b)
}
else if (c == "*"){
	document.write(a*b)
}
else if (c == "/"){
	document.write(a/b)
}
else if (c == "%"){
	document.write(a%b)
}

//chapter 12-13
//question 1
var ab =  prompt("Enter a character");
var a = ab
var b = a.charCodeAt(0)
if(ab > 0){
	document.write("given character is NUMBER");
}
else if(b >=65 && b<=90){
	document.write("given character is UPPERCASE");
}
else if (b >=97 && b<=122){
	document.write("given character is LOWERCASE");
}

//question 2
var a = +prompt("Enter 1st numnber");
var b = +prompt("Enter 2nd numnber");
if (a > b){
	document.write(a);
}
else if(a == b){
	document.write("1st Integer : "+a+" and 2nd Integer : "+b+" are equal")
}
else{
	document.write(b)
}

//question 3
var a = prompt("Enter a numnber");
if (a==0){
	document.write("ZERO")
}
else if (a>0){
	document.write("POSITIVE");
}
else if (a <0){
	document.write("NEGATIVE");
}

//question 4
var a = prompt("Enter a character");
a = a.toLowerCase();
if (a=="a" || a=="e" || a=="i" || a=="o"){
	document.write("Vowel")
}
else{
	document.write("False")
}




//question 5
var a = "asdf";
var b = prompt("Enter a password");
if (b=="" || b==" "){
	document.write("Please enter your password")
}
else{
	if (a == b){
		document.write("Correct! The password you entered matches the original password")
	}
	else{
		document.write("Incorrect password");
	}
}



//question 6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
document.write(greeting)



//question 7
var time = prompt("Enter a time");
if (time >= 0000 && time < 1200){
	document.write("Good Morning")
}
else if (time >= 1200 && time < 1700){
	document.write("Good Afternoon")
}
else if (time >= 1700 && time < 2100){
	document.write("Good Evening")
}

else if (time >= 2100 && time < 2359){
	document.write("Good Night")
}



// chapter 14-16
// question 1
var myArray = new Array(); 


//question 2
var obj ={

};


//question 3
var arr1 = ["appel","banana","mango","cheery"];


//question 4
var arr1 =[1,2,3,4,5];


//question 5
var arr1 = [true,false,false,true];



//question 6
var arr1 = ["Muhammad Ibad",1,true,0.5]





//question 7
var arr1 =["SSC","HSC","BSC","BS","BCOM","MS","M.PHIL..","PHD"];
//a= arr1.length;
//document.write(a)
document.write("<h1>Qualification</h1>"+"<br>")
for (var i=0 ; i<arr1.length ; i++){
	document.write((i+1)+") "+arr1[i]+"<br>");
}



//question 8
var arr1 =["Michael","John","Tony"];
var arr2 =[320,230,480];
for(var i = 0; i<arr1.length;i++){
	document.write("Score of "+arr1[i]+" is "+arr2[i]+" Percentage "+(arr2[i]/500)*100)
	document.write("%<br>")
}



//question 9
arr1 = ["blue","red","voilet"];
document.write(arr1+"<br>");
var a = prompt("enter colour name");
arr1.unshift(a);
document.write(arr1+"<br>"); 
var b = prompt(" what color he/she wants to add to the end ");
arr1.push(b);
document.write(arr1+"<br>"); 
arr1.unshift("Dark green","light green");
document.write(arr1+"<br>"); 
arr1.shift();
document.write(arr1+"<br>"); 
arr1.pop();
document.write(arr1+"<br>"); 
var c = prompt(" which index you wants to add a color ");
var d = prompt("Enter Color ");
arr1[c]=d;
document.write(arr1+"<br>"); 
var e = prompt("Enter  start Position for deletion");
var f = prompt("Enter end Position for deletion");
for(var i = e; i<=f ;i++){
	delete arr1[i]
}
document.write(arr1+"<br>"); 





//question 10
arr1 = [320,230,480,120]
document.write("Scores of Students : "+ arr1+"<br>");
arr1.sort()
document.write("Ordered Scores of Students : "+ arr1+"<br>");



//question 11
var arr1 = ["karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("Cities list:<br>");
document.write(arr1+"<br>"); 
document.write("<br>")
var arr2= arr1.slice(2,4);
document.write("Selected Cities list:<br>");
document.write(arr2+"<br>"); 




//question 12
var arr1 = ["this ","is ","my ","cat "];
document.write("Array:<br>");
document.write(arr1+"<br>"); 
var a =arr1.join(" ");
document.write("String:<br>");
document.write(a);




//question 13
var arr1 =[]
arr1[0]="keyboard"
arr1[1]="Mouse"
arr1[2]="printer"
arr1[3]="monitor"
document.write("Devices:<br>");
document.write(arr1+"<br>");
for (var i =0; i<=arr1.length+2; i++){
	a=arr1.shift();
	document.write("Out :<br>");
	document.write(a+"<br>")
}



//question 14
var arr1 =[]
arr1[0]="keyboard"
arr1[1]="Mouse"
arr1[2]="printer"
arr1[3]="monitor"
document.write("Devices:<br>");
document.write(arr1+"<br>");
for (var i =0; i<=arr1.length+2; i++){
	a=arr1.pop();
	document.write("Out :<br>");
	document.write(a+"<br>")
}



//chapter17-20
// Question 1
var Arr=[[1,2],[3,4],[5,6]];

// Question 2
var Arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];





// Question 3

for (let index = 1; index < 11; index++) {
    console.log(index);
     }







// Question 4

var num=prompt("Enter Number");
var len=prompt("Enter Length");

for (let index = 1; index <= len; index++) {
    console.log(num," * ",index," = ",num*index);
}








// Question 5

var fruits=["apple","banana","mango","orange","strawberry"]
for (let index = 0; index < fruits.length; index++) {
    console.log("Element at Index ",index," is ",fruits[index]);
    
}





// Question 6


console.log("Counting : \n");
var Result="";
for (let index = 1; index < 16; index++) {
    Result=Result+index;   
    Result=Result+", "
}
console.log(Result);

Result="";
console.log("Reversed Counting : \n");
for (let index = 10; index > 0; index--) {
    Result=Result+index;   
    Result=Result+", "
}
console.log(Result);

Result="";
console.log("Even Counting : \n");
for (let index = 0; index <= 20; index++) {
    if (index%2==0) {
    Result=Result+index;   
    Result=Result+", ";   
    }
}
console.log(Result);

Result="";
console.log("Odd Counting : \n");
for (let index = 0; index <= 20; index++) {
    if (index%2!=0) {
    Result=Result+index;   
    Result=Result+", ";   
    }
}
console.log(Result);

Result="";
console.log("Series : \n");
for (let index = 2; index <= 20; index++) {
    if (index%2==0) {
    Result=Result+index;   
    Result=Result+"k, ";   
    }
}
console.log(Result);






// QUESTION 7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var B=prompt("What u want in our Bakery"); 
var flag=0;
for (let index = 0; index < A.length; index++) {
    if (A[index]==B) {
        console.log(B," is available at index ",index);
        flag=1;
        break
    } 
}
if (flag==0) {
    console.log(B," is not available at out store");
}







// QUESTION 8
var A = [24, 53, 78, 91, 12];
var a=0;
for (let index = 0; index < A.length; index++) {
    if (A[index]>a) {
        a=A[index]
    }
    
}
console.log("The Largest Number is ",a);


// QUESTION 9
var A = [24, 53, 78, 91, 12];
var a=1000;
for (let index = 0; index < A.length; index++) {
    if (A[index]<a) {
        a=A[index]
    }
    
}
console.log("The Smallest Number is ",a);


// QUESTION 10
var Result="";
for (let index = 1; index <= 100; index++) {
    if (index%5==0) {
    Result=Result+index;   
    Result=Result+", "   
    }
}
console.log(Result);

*/