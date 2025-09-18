var int1 = ""
var op =  ""
var int2 = ""
var result = ""
const results = []


function operate(num1, num2, op){
    switch (op){
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case "/":
            return num1 / num2
        case "%":
            return num1 % num2
        default:
            return "Computation Error"
    }

}
while (true){
    int1 = parseFloat(prompt("Enter a number: "))
    if (int1 == null){
        break
    }
    op = prompt("Enter an operation: ")
    if (op == null){
        break
    }
    int2 = parseFloat(prompt("Enter a number: "))
    if (int2 == null){
        break
    }

    if(int1 == "NaN" || int2 == "NaN"){
        result = "Input Not A Number"
    }
    else{
        result = operate(num1,num2,op)
        results.push(result)
    }

}




    

