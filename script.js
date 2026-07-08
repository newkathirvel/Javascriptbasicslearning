//Task 01

// 1) Javascript task marks problem 1st scenario

//Marks
let marks = 90;
let bonusMarks = 5;
// marks = marks + bonusMarks; (or)
marks += bonusMarks;
console.log(marks);
//Grade
let grade;
if(marks >= 90 && marks <=100)
{
grade = "Grade A";
}
else if(marks >= 70 && marks <=89)
{
grade = "Grade B";
}
else if(marks >= 50 && marks <=69)
{
grade = "Grade C";
}
else if(marks <= 49 && marks >=0)
{
grade = "Grade F";
}
else
{
grade = "Invalid Grade";
}
console.log(grade);
//Result
let Result;
Result = (marks >= 50 ? "Pass" : "Fail");
console.log(Result);
//Remarks
switch(grade)
{
case "Grade A":
remarks = "Excellent";
break;
case "Grade B":
remarks = "Good";
break;
case "Grade C":
remarks = "Average";
break;
case "Grade F":
remarks = "Worst";
break;
}
console.log(remarks);

// 2) Javascript task mark problem 2nd scenario 

//Marks
let mark = 30;
let bonusMark = 5;
mark = mark + bonusMark;
//  (or)  mark += bonusMark;
console.log(mark);
//Grade
let Grade;
if(mark >= 90 && mark <=100)
{
Grade = "grade A";
}
else if(mark >= 70 && mark <=89)
{
Grade = "grade B";
}
else if(mark >= 50 && mark <=69)
{
Grade = "grade C";
}
else if(mark <= 49 && mark >=0)
{
Grade = "grade F";
}
else
{
Grade = "invalid grade";
}
console.log(Grade);
//Result
let result;
result = (mark >= 50 ? "Pass" : "Fail");
console.log(result);
//Remarks
let Remarks;
switch(Grade)
{
case "grade A":
Remarks = "Excellent";
break;
case "grade B":
Remarks = "Good";
break;
case "grade C":
Remarks = "Average";
break;
case "grade F":
Remarks = "Worst";
break;
}
console.log(Remarks);

// 3) Javascript task mark1 problem 3rd scenario 

//Marks
let mark1 = -20;
let bonusMark1 = 5;
mark1 = mark1 + bonusMark1;
//  (or)  mark1 += bonusMark1;
console.log(mark1);
//Grade
let certificateGrade;
if(mark1 >= 90 && mark1 <=100)
{
certificateGrade = "Certificate Grade A";
}
else if(mark1 >= 70 && mark1 <=89)
{
certificateGrade = "Certificate Grade B";
}
else if(mark1 >= 50 && mark1 <=69)
{
certificateGrade = "Certificate Grade C";
}
else if(mark1 <= 49 && mark1 >=0)
{
certificateGrade = "Certificate Grade F";    
}
else
{
certificateGrade = "Invalid grade";
}
console.log(certificateGrade);
//Result
let result1;
result1 = (mark1 >= 50 ? "Pass" : "Fail");
console.log(result1);
//Remarks
let remark1;
switch(certificateGrade)
{
case "Certificate Grade A":
remark1 = "Excellent";
break;
case "Certificate Grade B":
remark1 = "Good";
break;
case "Certificate Grade C":
remark1 = "Average";
break;
case "Certificate Grade F":
remark1 = "Worst";
break;
}
console.log(remark1);


//-------------****-----------------

//Task 02

// 1) Javascript given problem using if else statement using simple calculator logic
//1) add

let a = 10;
let b = 5;
let operator = "+";
if(operator === "+")
{
console.log(a+b);
}
else if(operator === "-")
{
console.log(a-b);
}
else if(operator === "*")
{
console.log(a*b);
}
else if(operator === "/")
{
if(b !== 0)
{
console.log(a/b);
}
else
{
console.log("b cannot be zero");
}
}
else
{
console.log("Invalid operator");
}

//2) sub

let a1 = 20;
let b1 = 5;
let operator1 = "-";
if(operator1 === "+")
{
console.log(a1+b1);
}
else if(operator1 === "-")
{
console.log(a1-b1);
}
else if(operator1 === "*")
{
console.log(a1*b1);
}
else if(operator1 === "/")
{
if(b1 !== 0)
{
console.log(a1/b1);
}
else
{
console.log("b cannot be zero");
}
}
else
{
console.log("Invalid operator");
}

// 3) mul

let a2 = 10;
let b2 = 2;
let operator2 = "*";
if(operator2 === "+")
{
console.log(a2+b2);
}
else if(operator2 === "-")
{
console.log(a2-b2);
}
else if(operator2 === "*")
{
console.log(a2*b2);
}
else if(operator2 === "/")
{
if(b2 === 0)
{
console.log("b2 cannot be zero");
}
else
{
console.log(a2/b2);
}
}
else
{
console.log("Invalid operator");
}

// 4) div

let a3 = 10;
let b3 = 0;
let operator3 = "/";
if(operator3 === "+")
{
console.log(a3+b3);
}
else if(operator3 === "-")
{
console.log(a3-b3);
}
else if(operator === "*")
{
console.log(a3*b3);
}
else if(operator3 === "/")
{
if(b3 !== 0)
{
console.log(a3/b3);
}
else
{
console.log("b3 cannot be zero");
}
}
else
{
console.log("Invalid operator");
}

// 5) div

let a4 = 10;
let b4 = 0;
let operator4 = "/";
if(operator4 === "+")
{
console.log(a4+b4);
}
else if(operator4 === "-")
{
console.log(a4-b4);
}
else if(operator4 === "*")
{
console.log(a4*b4);
}
else if(operator4 === "/")
{
if(b4 === 0)
{
console.log("b4 cannot be zero");
}
else
{
console.log(a4/b4);
}
}
else
{
console.log("Invalid operator");
}






