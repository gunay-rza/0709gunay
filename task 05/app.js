"use strict"

/*Task-05
İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın.
Proqram istifadəçidən ədəd daxil etməyi xahiş edir. Bundan sonra proqram konsolda bu rəqəmin
bölünəni olan bütün üçrəqəmli ədədlərin cəmini çıxarır.*/

let cem = 0;
const eded = +prompt("fikrinizde tutdugunuz ededi yazin ");


for (let i = 100; i <= 999; i++) {


    if (i % eded === 0) {
        cem += i
    }

}
console.log(cem);
