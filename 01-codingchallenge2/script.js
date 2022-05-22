function calcTip(bill){
    if(bill > 50 && bill < 300){
        console.log('15 %');
    }else{
        console.log('20 %');
    }
}

calcTip(10);

const bills = [125, 555, 44]