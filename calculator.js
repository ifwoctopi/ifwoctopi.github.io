var int1 = ""
var op =  ""
var int2 = ""
var result = ""
var i = 0
const all_results = []
const valid_results = []
const x = []
const ops = []
const y = []



function operate(num1, num2, op){
    switch (op){
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case "/":
            if (num2 != 0){
                return num1 / num2
            }
            else{
                return "Error: Division By Zero"
            }
        case "%":
            return num1 % num2
        default:
            return "Computation Error"
    }

}

function getTotal(valid_results){
    total = 0
    for (i = 0; i < valid_results.length; i++){
        total +=valid_results[i]
    }
    return total
}


function getAvg(valid_results){
    return getTotal(valid_results)/(valid_results.length)
}

while (true){
    int1 = prompt("Enter a number: ")
    if (int1 == null){
        break;
    }
    
    op = prompt("Enter an operation: ")
    if (op == null){
        break
    }

    int2 = prompt("Enter a number: ")
    if (int2 == null){
        break
    }

    x.push(int1)
    ops.push(op)
    y.push(int2)
}

document.write('<table>')
document.write('<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>');

while (i < x.length){

    if(isNaN(parseFloat(x[i])) || isNaN(parseFloat(y[i]))){
        result = "Input Not A Number"
    }
    else{
        result = operate(parseFloat(x[i]),parseFloat(y[i]),ops[i])
        if (!isNaN(result)){
            valid_results.push(result)
        }
    }
    all_results.push(result)
    document.write('<tr><td>' + x[i] + "</td><td>" + ops[i] + "</td><td>" + y[i] + "</td><td>" + all_results[i] + "</td></tr>");
    i++
}
document.write('</table>')


document.write('<table>')
document.write('<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>');
if (valid_results.length == 0){
    document.write('<tr><td>None</td><td>None</td><td>None</td><td>None</td></tr>');
}
else{
    document.write('<tr><td>' + Math.min(...valid_results) + "</td><td>" + Math.max(...valid_results) + "</td><td>" + getAvg(valid_results)+ "</td><td>" + getTotal(valid_results) + "</td></tr>");
}
document.write('</table>')




    

