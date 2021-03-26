function calculate(string) {
    let str = string;
    let total = 0;
    let currentOp = "+";
    let strCon = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "+") {
            if (currentOp === "+") {
                total += parseInt(strCon);
            } else {
                total -= parseInt(strCon);
            }
            currentOp = "+";
            strCon = "";
            continue;
        }

        if (str[i] == "-") {
            if (currentOp == "+") {
                total += parseInt(strCon);
            } else {
                total -= parseInt(strCon);
            }
            currentOp = "-";
            strCon = "";
            continue;
        }

        strCon += str[i];
    }

    if (currentOp == "+") {
        total += parseInt(strCon);
    } else {
        total -= parseInt(strCon);
    }
    return total;
}

module.exports = calculate