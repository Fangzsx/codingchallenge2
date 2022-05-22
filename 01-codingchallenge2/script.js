function calcTip(bill){
    if(bill >= 50 && bill <= 300){
        return bill * 0.15;
    }else{
        return bill * 0.20;
    }
}

calcTip(10);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]),];

console.log(tips);

function getBillPlusTip(bill, tip){
    return bill + tip;
}

const totals = [
    getBillPlusTip(bills[0], tips[0]),
    getBillPlusTip(bills[1], tips[1]),
    getBillPlusTip(bills[2], tips[2])];

console.log(totals);