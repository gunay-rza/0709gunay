"use strict"

const sira1 = prompt('16:4=? (cavblari "*" sayi yazin)');

if (sira1 === '****') {
    console.log('****');
    const sira2 = prompt('12:4=? (cavblari "*" sayi ile yazin)');


    if (sira2 === '***') {
        console.log('***');

        const sira3 = prompt('8:4=? (cavblari "*" sayi ile yazin)');


        if (sira3 === '**') {
            console.log('**');
            const sira4 = prompt('10:10=? (cavblari "*" sayi ile yazin)');

            if (sira4 === '*') {
                console.log('*');
            }

            else {
                console.log('yalnis');
            }
        }
        else {
            console.log('yalnis');
        }


    }
    else {
        console.log('yalnis');
    }

}

else {
    console.log('yalnis');
}