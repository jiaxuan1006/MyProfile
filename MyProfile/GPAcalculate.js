/*
********************************************************
* Individual Assignment (JS)				   		   *
* 			                                           *
* Name: Tan Jia Xuan              		               *
* Matric Number: A20EC0154                             *
* Section: 09                                          *
********************************************************
*/





/*Assessment item - Task 1*/
/*Based on your understanding, provide a detailed description of how function addNewSubject() works

This function is mainly used to add new subject by adding three new columns in one row and append to 
correct variables respectively.
addnewSubject() function is link to GPAcalculator.html with method onclick. It means that when 
the user clicks the 'Add Subject' button, it will link to addNewSubject() function in javascript 
and perform the statement declared inside the function. In this function, there are some variables 
declared with var keyword.The 'tbody' variable declared assigned to reference the <table_body> element.
'tr' element is created and appended to variable 'newTr'. The loop below will execute three times to 
create new subject with three columns which assigned  to 'Class', 'Credits' and 'Marks' respectively. 
'td' element is created and appended to variable 'td' to create new column. 'input' element is created 
to append to variable 'input' to enable user input new data. There are some limit for user input new data
type. When i = 1 or 2, the input type is assigned to number only and the size is limited to 5. Else,the 
input type is assigned to text mode and the input size is limited to 15. The maximum length also assigned 
to 8. After new element created in the loop, the 'input' element created will be append to 'td' and the 
'td' element will be append to 'newTr'. The new row is created and we can ready to append the 'newTr' to 
'tbody'.

*/
function addNewSubject() {
    var tbody = document.getElementById("table_body");
    var newTr = document.createElement("tr");
    for (var i = 0; i < 3; ++i) {
        var td = document.createElement("td");
        var input = document.createElement("input");

        if (i == 2 || i == 1) {  
            input.type = "number";
            input.size = "5";
        }else{
            input.type = "text";
            input.size = "15";
            input.maxLength = "8";
        }

        td.appendChild(input);
        newTr.appendChild(td);
    }
    tbody.appendChild(newTr);
}




/*Assessment item - Task 2*/
/*Based on your understanding, provide a detailed description of how function deleteLastSubject() works

This function is mainly used to delete the subject in last row of the GPAcalculator.
deleteLastSubject() function is link to GPAcalculator.html with method onclick. It means that 
when  the user clicks the 'Delete last Subject' button, it will link to deleteLastSubject() function 
in javascript and perform the statement declared inside the function. In this function, The 'x' 
variable declared assigned to reference the length of rows in <myTable> element. The function will 
delete the last row in <myTable> element by using deleteRow(). x-1 is refer to the last row in <myTable>
element. When the x equal to 1,  the function will return false and will not perform delete row.

*/
function deleteLastSubject() {
   
    var x = document.getElementById("myTable").rows.length;
    if (x == 1) {
        return false;
    }
    document.getElementById("myTable").deleteRow(x-1);
}




/*Assessment item - Task 3*/
/*Based on your understanding, provide a detailed description of how function sendElementToCalculate() works

This function is mainly used to send the element in GPAcalculator.html to Calculate function to calculate 
the GPA result.sendElementToCalculate() function is link to GPAcalculator.html with method onclick. It 
means that when the user clicks the 'Calculate' button, it will link to sendElementToCalculate() function 
in javascript and perform the statement declared inside the function. The variable 'tbody' with keyword var 
is declared assigned to reference the <table_body> element. After that, the variable 'elements' with keyword 
var is declared with getElementsByTagName() function to get all the elements in GPAcalculator.html by tag name
<input>. Then, the elements append to variable <elements> in GPAcalculator.html will be brought to fucntion 
CalculateGPA to use the elements to calculate the GPA result.

*/
function sendElementToCalculate(){
    var tbody = document.getElementById("table_body");
    var elements = tbody.getElementsByTagName("input");
    CalculateGPA(elements);
}





/*Assessment item - Task 4*/
/*Based on your understanding, provide a detailed description of how function CalculateGPA() works.


This function is mainly used calculate the GPA result by using elements passed from sendElementToCalculate().
There are some variables declared with keyword var which are the totalCredits, totalPoints, allOK which initialized
with 0 and variable length assigned with the length of elements passed. 

There are some validation in order to ensure the input inserted by user is valid to calculate GPA. The loop will go through 
each row's column one by one to validate every data inserted is in correct format. For element [i], if the value is empty, 
then the function will return false  generate alert message to notify the user enter the name of the subject. the border color 
of element[i] also will set to red. Else, the border color of element[i] will set to green and the function will continue to 
execute the next instruction. Next, there are two condition set to element[i+1] which is corresponding to the credit variable 
in the row. First,if the element[i+1] is empty, the function will return false and generate alert message to alert the user to 
insert the value for credit and the border color of element[i+1] will also set to red color. Another condition is when the element[i+1] 
is not a whole number, the function will generate alert message to notify the user with red border color. Once the conditions fullfil, 
the element [i+1] will set to border green color and continue to execute the next instruction. The next instruction ask to parses
a value in element [i+1] and returns with the first number. After that, the current credit will be added in the total credit. 
Another variable 'grade' assigned with the value stored in element [i+2]. If the value of element[i+1] is empty the function will return
false and generate alert message to remind the user insert the with correct input. Else, the function will continue to execute the next 
instruction.

After all the validation have been passed with correct format, the function will calculate the total points by adding current GPA points  
of the last element[i+2] in the 'total points' variable.Then, the current GPA point is calculated by multiply the current credit with current 
gpa point value which can be get by passing the grade value to function getPoint(). The loop will continue to execute until reach the last
element.

After finish looping, the final GPA point can be calculated by dividing totalPoints with totalCredits. The result calculated is 
assigned to variable GPA. The calculated result of total credits and gpa will be return to the total_credits and gpa respectively to
be appeared to the user once they click the 'calculate' button.


*/
function CalculateGPA(elements) {

    var totalCredits = 0;
    var totalPoints = 0;
    var allOK = 0;
    var length = elements.length;
    
    

    for (var i = 0; i < length; i += 3) {
        
        if (elements[i].value == "") {
            alert("Please Enter The Name of The Subject!");
            elements[i].style.borderColor = 'red';
            return false;
        }
        else{
            elements[i].style.borderColor = 'green';
            
        }  
        
        if (elements[i+1].value == ""){
            alert("Please Insert Value of The Credit");
            elements[i+1].style.borderColor = 'red';
            return false;
        }else if (elements[i+1].value%1 != 0) {
            alert("The Value of Credit Must Be In Whole Number!");
            elements[i+1].style.borderColor = 'red';
             
        }
        else{
            elements[i+1].style.borderColor = 'green';
            var credit = parseFloat(elements[i+1].value); 
            totalCredits += credit;
        }  

        
        
        var grade = elements[i+2].value;
        if (grade == "") {
            alert("Please fill in the point");
            elements[i+2].style.borderColor = 'red';
            return false;
        }
        else{
            elements[i+2].style.borderColor = 'green';
        }
        totalPoints += credit*getPoint(grade);
        
       
    }
    var GPA = totalPoints/totalCredits;
      
    document.results.total_credits.value = totalCredits;
    document.results.gpa.value = GPA.toPrecision(3);
     
    
   
}


function getPoint(grade) {
    
    if (grade >= 80) {
        return 4.00;
    }
    else if (grade >= 75){
        return 3.67;
    }
    else if (grade >= 70){
        return 3.33;
    }
    else if (grade >= 65){
        return 3.00;
    }
    else if (grade >= 60){
        return 2.67;
    }
    else if (grade >= 55){
        return 2.33;
    }
    else if (grade >= 50){
        return 2.00;
    }
    else if (grade >= 45){
        return 1.67;
    }
    else if (grade >= 40){
        return 1.33;
    }
    else if (grade >= 35){
        return 1.00;
    }
    else if (grade >= 30){
        return 0.67;
    }
    else if (grade >= 0){
        return 0.00;
    }
}