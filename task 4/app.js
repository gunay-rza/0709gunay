"use strict"


// TASK4.  1-den verilen edede qeder ededlerin hasili -=>  faktorial (5!= 1*2*3*4*5)



let hasil = 1;
const eded = +prompt('msg')
for (let i = 1; i <= eded; i++) {
    hasil = hasil * i;
    console.log(hasil);
}

