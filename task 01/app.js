"use strict"

/*Task-01
İkirəqəmli ədədi üçrəqəmli olana qədər artırın.
İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin.
Bu rəqəmi üçrəqəmli olana kimi 7 - ədədi qədər artırın.
Son dəyəri konsola çıxarın.*/

let i = 0;
const eded = +prompt('iki reqemli eded yazin');
for (let i = eded; i <= 106; i += 7) {
    console.log(i)
}

