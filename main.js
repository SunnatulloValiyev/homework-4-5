// For + break/continue ga oid masalalar 

// ===================================

// 1-misol
// 1 dan 100 gacha bo‘lgan sonlarni ekranga chiqaring, lekin 50 ga yetganda tsiklni to‘xtating (break).

// for (let i = 1; i <= 100; i++){
//     console.log(i); 
//     if(i == 50){
//         break
//     }
// }

// ===================================

// 2-misol
// 1 dan 20 gacha bo‘lgan sonlarni ekranga chiqaring, lekin 3 ga bo‘linadigan sonlarni tashlab o‘ting (continue).

// for(let i = 1; i <= 20; i++){
//     if(i % 3 == 0){
//         continue
//     }
//     console.log(i);
// }

// ===================================

// 3-misol
// 1 dan 30 gacha bo‘lgan sonlarni chiqarib, faqat 5 ta son chiqargandan keyin tsiklni to‘xtating (break).

// for (let i = 1; i <= 30; i++){
//     console.log(i);
//     if (i >= 5){
//         break
//     }
// }

// ===================================

// 4-misol
// 1 dan 50 gacha bo‘lgan sonlar orasida 7 ga bo‘linadigan birinchi 3 ta sonni ekranga chiqaring, so‘ngra tsiklni to‘xtating.

// let count = 0

// for (let i = 1; i <= 50; i++){
//     if (i % 7 == 0) {
//         console.log(i);
//         count++
//     if (count == 3) {
//         break
//     }
//     }
// }

// Switch-case ga oid masalalar (4 ta):

// 1-misol
// Foydalanuvchi kiritgan haftaning raqamiga (1-7) mos ravishda haftaning kunini (dushanba-yakshanba) chiqarib bering.

// let MonthNum = +prompt("Son kiriting")

// switch (MonthNum) {
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break;
//     case 5:
//         console.log("Juma");
//         break;
//     case 6:
//         console.log("Shanba");
//         break;
//     case 7:
//         console.log("Yakshanba");
//         break;

//     default:
//         console.log("Siz kiritgan sonda hafta kuni yo'q");  
//         break;
// }

// ===================================

// 2-misol
// Foydalanuvchi kiritgan oy raqamiga (1-12) mos ravishda faslni (qish, bahor, yoz, kuz) aniqlang.

// let yearNum = +prompt("Son kiriting")

// switch (yearNum) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("spring");
//         break;

//     case 4:
//     case 5:
//     case 6:
//         console.log("summer");
//         break;

//     case 7:
//     case 8:
//     case 9:
//         console.log("autumn");
//         break;

//     case 10:
//     case 11:
//     case 12:
//         console.log("winter");
//         break;

//     default:
//         console.log("siz kiritgan sonda fasillar yo'q");    
//         break;
// }

// ===================================

// 3-misol

// Foydalanuvchi kiritgan songa mos ravishda “juft son” yoki “toq son” ekanligini aniqlang.

// let num = +prompt("Son kiriting");

// switch (num % 2) {
//     case 0:
//         console.log("Juft son");
//         break;
//     case 1:
//         console.log("Toq son");
//         break;
//     default:
//         console.log("Xato qiymat");
// }

// ===================================

// 4-misol

// Foydalanuvchi kiritgan baho (1-5) bo‘yicha izoh chiqarib bering. Masalan: 5 – “A’lo”, 4 – “Yaxshi”, va hokazo.

// let price = +prompt("1 dan 5 gacha baho kiriting")

// switch (price) {
//     case 1:
//         console.log("Qoniqarsiz baho");
//         break;

//     case 2:
//         console.log("Qoniqarsiz baho");
//         break;

//     case 3:
//         console.log("Yaxshi baho");
//         break;

//     case 4:
//         console.log("Qoniqarli baho");
//         break;

//     case 5:
//         console.log("Alo baho");
//         break;
//     default:
//         console.log("bu sonda baholash tartibi yo'q");
//         break;
// }

// ===================================

// While va do...while ga oid masalalar (15 ta):

// 1-misol
// 1 dan 10 gacha bo‘lgan sonlarni ekranga chiqaring.

// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++
// }

// ===================================

// 2-misol
// 10 dan 1 gacha bo‘lgan sonlarni ekranga chiqarib bering.

// let i = 10;

// while (i >= 1) {
//     console.log(i);
//     i--
// }

// ===================================

// 3-misol
// Foydalanuvchi 0 kiritmaguncha tsiklni davom ettiring va kiritilgan sonlarning yig‘indisini hisoblang.

// let num1 = +prompt("Son kirting:")

// let num2 = 0;

// while (true) {
//     num2 += num1;
//     num1 = +prompt("Son kiriting")
//     if(num1 == 0){
//         break
//     }
// }
// console.log(num2);

// ===================================

// 4-misol
// Foydalanuvchi musbat son kiritmaguncha tsiklni davom ettiring va oxirgi kiritilgan sonni chiqarib bering.

// let num1;

// while (true) {
//     num1 = +prompt("Son kiriting:")
//     if (num1 > 0) {
//         break        
//     }
// }
// console.log(num1);

// ===================================

// 5-misol
// Foydalanuvchidan raqam kiritishni so‘rang va raqamning raqamlar yig‘indisini hisoblang.

// let num1 = +prompt("Son kiriting")

// let num2 = 0;

// while (num1 >= 1) {
//     let Lastnum = num1 % 10
//     num2 += Lastnum
//     num1 = Math.trunc(num1 / 10)
// }
// console.log(num2);


// ===================================
// 6-misol
// Foydalanuvchi manfiy son kiritguncha tsiklni davom ettiring va kiritilgan juft sonlar sonini hisoblang.

// let num1;

// let num2 = 0;

// while (true) {
//     num1 = +prompt("Son kiriting:")
//     if (num1 < 0) {
//         break
//     }
//     if (num1 % 2 == 0) {
//         num2++
//     }
// }
// console.log(num2);

// ===================================

// 7-misol
// 1 dan 20 gacha bo‘lgan sonlarni ekranga chiqaring, lekin faqat toq sonlarni.

// let num = 1;
// let i = num
// while (i <= 20) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
//     i++;
// }


// ===================================

// 8-misol

// 1 dan 50 gacha bo‘lgan sonlardan 5 ga karrali sonlarni chiqaring.

// let num = 1;

// let i = num;

// while (i <= 50) {
//     if (i % 5 == 0) {
//         console.log(i);
//     }
//     i++
// }

// ===================================

// 9-misol

// Foydalanuvchidan butun son kiritishni so‘rang va bu sonni teskari ko‘rinishda chiqarib bering.

// let num = +prompt("butun son kirting")

// let reverse = 0;

// while (num != 0) {
//     let last = num % 10;
//     reverse = reverse * 10 + last;
//     num = Math.trunc(num / 10);
// }
// console.log(reverse);

// ===================================

// 10-misol

// 100 dan 1 gacha bo‘lgan sonlarni, faqat 10 ga bo‘linadiganlarini chiqaring.

// let num = 1;

// let i = num;

// while (i <= 100) {
//     if (i % 10 == 0) {
//         console.log(i);
//     }
//     i++
// }

// ===================================

// 11-misol

// 1 dan 100 gacha bo‘lgan barcha sonlarning kvadratini chiqarib bering.

// let num = 1;
// let i = num;

// while (i <= 100) {
//     console.log(i ** 2);
//     i++
// }

// ===================================

// 12-misol

// Foydalanuvchidan raqam kiritishni so‘rang. Agar kiritilgan son 5 ga bo‘linmasa, yana son kiritishni so‘rang.

// let num;

// while (true) {
//     num = +prompt("Son kiriting")
//     if (num % 5 == 0) {
//         break
//     }
// }
// console.log(num);

// ===================================

// 13-misol

// Foydalanuvchi 10 dan katta son kiritmaguncha davom eting. Oxirida kiritilgan sonni chiqaring.

// let num;

// while (true) {
//     num = +prompt("Son kirting>>")
//     if (num > 10) {
//         break
//     }
// }
// console.log(num);

// ===================================

// 14-misol

// Foydalanuvchi “stop” so‘zini yozmaguncha davom eting. Oxirida nechta son kiritganini hisoblang.

// let num = prompt("Son kirting");
// let sum = 0;

// while (num !== "stop") {
//     num = prompt("Son kiriting tsikl to'xtashi uchun stop so'zini yozing:")
//     sum++
// }
// console.log(sum);

// ===================================

// 15-misol

// Foydalanuvchi kiritgan sonlarning o‘rtacha qiymatini hisoblang (nol kiritilganda tsikl to‘xtaydi).

// let num;
// let sum = 0;

// while (num !== 0) {
//     num = +prompt("Son kirting:")
//     sum += num;
// }
// console.log(sum / 2);

// ===================================

// Ternary operator ga oid masalalar 

// 1-misol

// Foydalanuvchi kiritgan son musbat yoki manfiy ekanligini aniqlang.

// let num = +prompt("Son kiriting:");
// let res = num > 0 ? "Musbat" : "Manfiy son";
// console.log(res);

// ===================================

// 2-misol

// Foydalanuvchi kiritgan son juft yoki toq ekanligini aniqlang.

// let num = +prompt("Son kiriting:")
// let res = num % 2 == 0 ? "juft son" : "toq son";
// console.log(res);

// ===================================

// 3-misol

// Foydalanuvchi kiritgan son 100 dan katta yoki kichik ekanligini aniqlang.

// let num1 = +prompt("Son kiriting:");
// let result1 = num1 > 100 ? "100 dan katta" : "100 dan kichik yoki teng";
// console.log(result1);

// ===================================

// 4-misol

// Foydalanuvchidan ikkita son so‘rang va ularning kattasini aniqlang.

// let num2 = +prompt("Birinchi sonni kiriting:");
// let num3 = +prompt("Ikkinchi sonni kiriting:");
// let result2 = num2 > num3 ? `${num2} katta` : num2 < num3 ? `${num3} katta` : "Ikkala son teng";
// console.log(result2);

// ===================================

// 5-misol

// let num4 = +prompt("Son kiriting:");
// let result3 = (num4 % 3 === 0 && num4 % 5 === 0) 
//     ? "3 ga va 5 ga bo'linadi" 
//     : "3 ga yoki 5 ga bo'linmaydi";
// console.log(result3);

// Math methods ga oid masalalar

// 1-misol

// 0 dan 100 gacha tasodifiy son hosil qiling (Math.random) va uni ekranga chiqarib bering.

// let randomNumber = Math.floor(Math.random() * 101); 
// console.log(`Tasodifiy son: ${randomNumber}`);

// ===================================

// 2-misol

// Foydalanuvchidan haqiqiy son kiritishni so‘rang va uning faqat butun qismini chiqarib bering (Math.trunc).

// let Number = +prompt("Haqiqiy son kiriting:");
// let son = Math.trunc(Number); 
// console.log(`Butun qism: ${son}`);

// ===================================

// 3-misol

// Foydalanuvchidan haqiqiy son kiritishni so‘rang va uni yuqoriga qarab yaxlitlang (Math.ceil).

// let Number = +prompt("Haqiqiy son kiriting:");
// let round = Math.ceil(Number); 
// console.log(`Yuqoriga qarab yaxlitlangan: ${round}`);

// ===================================

// 4-misol

// Foydalanuvchidan son kiritishni so‘rang va uning modulini toping (Math.abs).    

// let number = +prompt("Son kiriting:");
// let absolute = Math.abs(number);
// console.log(`Modul qiymati: ${absolute}`);


// For ga oid masalalar

// 1-masala:
// 1 dan 50 gacha bo‘lgan sonlarni ekranga chiqaring.

// for (let i = 1; i <= 50; i++) {
//   console.log(i);
// }

// =======================
// 2-masala:
// 10 dan 1 gacha bo‘lgan sonlarni ekranga chiqaring.

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// =======================
// 3-masala:
// 1 dan 100 gacha bo‘lgan faqat toq sonlarni chiqarib bering.

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

// =======================
// 4-masala:
// 1 dan 50 gacha bo‘lgan faqat juft sonlarni chiqarib bering.

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// =======================
// 5-masala:
// 1 dan 100 gacha bo‘lgan barcha sonlarning yig‘indisini hisoblang.
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// =======================
// 6-masala:
// Foydalanuvchidan son kiritishni so‘rang va 1 dan shu songacha bo‘lgan barcha sonlarning ko‘paytmasini hisoblang.
// let num = +prompt("son kiriting:");
// let multiply = 1;

// for (let i = 1; i <= num; i++) {
//   multiply *= i;
// }
// console.log(multiply);

// =======================
// 7-masala:
// 1 dan 20 gacha bo‘lgan sonlarning kvadratini chiqarib bering.

// for (let i = 1; i <= 20; i++) {
//   console.log(i ** 2);
// }

// =======================
// 8-masala:
// Foydalanuvchi kiritgan sonning faktorialini hisoblang.

// let num = +prompt("son kiriting:");
// let factorial = 1;

// for (let i = 1; i <= num; i++) {
//   factorial *= i;
// }
// console.log(factorial);

// =======================
// 9-masala:
// 1 dan 100 gacha bo‘lgan barcha 5 ga karrali sonlarni chiqarib bering.

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 == 0) {
//     console.log(i);
//   }
// }

// =======================
// 10-masala:
// Foydalanuvchidan musbat son kiritishni so‘rang va 1 dan shu songacha bo‘lgan sonlarning kubini chiqarib bering.

// let num = +prompt("son kiriting:");

// if (num > 0) {
// }

// for (let i = 1; i <= num; i++) {
//   console.log(i ** 3);
// }

// =======================
// 11-masala:
// 1 dan 100 gacha bo‘lgan barcha juft sonlarning yig‘indisini hisoblang.

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// =======================
// 12-masala:
// 1 dan 50 gacha bo‘lgan sonlar orasida 3 ga bo‘linadigan birinchi 10 ta sonni ekranga chiqaring.

// let count = 0;

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0) {
//     console.log(i);
//     count++;
//   }
//   if (count == 10) {
//     break;
//   }
// }

// =======================
// 13-masala:
// Foydalanuvchidan musbat butun son kiritishni so‘rang va shu songacha bo‘lgan sonlar yig‘indisini toping.

// let num = +prompt("son kiriting:");
// let sum = 0;

// if (num > 0) {
// }

// for (let i = 1; i <= num; i++) {
//   sum += i;
// }
// console.log(sum);

// =======================
// 14-masala:
// 1 dan 10 gacha bolgan barcha sonlarning kvadratlar yigindisini toping.

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum += i ** 2;
// }
// console.log(sum);

// =======================
// 15-masala:
// Foydalanuvchi kiritgan musbat butun sonning barcha bo‘luvchilarini chiqarib bering.

// let num = +prompt("son kiriting:");

// if (num > 0) {
// }

// for (let i = 1; i <= num; i++) {
//   if (num % i == 0) {
//     console.log(i);
//   }
// }

// Barcha mavzularni qamrab oluvchi masalalar

// 1-masala:
// Foydalanuvchidan son kiritishni so‘rang va bu son 3 ga bo‘linadiganmi yoki yo‘qligini ternary operator yordamida aniqlang. Keyin 1 dan shu songacha bo‘lgan barcha sonlarni chiqarib bering.

// let num = +prompt("son kiriting:");

// num % 3 == 0 ? console.log("3ga bo'linadi") : console.log("3ga bo'linmaydi");

// for (let i = 1; i <= num; i++) {
//   console.log(i);
// }

// =======================
// 2-masala:
// Foydalanuvchi kiritgan oy raqamiga mos faslni (switch-case) aniqlang va 1 dan shu oy raqamigacha bo‘lgan sonlarni (for) ekranga chiqaring.

// let month = +prompt("oy raqamini kiriting:");

// switch (month) {
//   case 1:
//   case 2:
//   case 12:
//     console.log("Qish");
//     break;

//   case 3:
//   case 4:
//   case 5:
//     console.log("Bahor");
//     break;

//   case 6:
//   case 7:
//   case 8:
//     console.log("Yoz");
//     break;

//   case 9:
//   case 10:
//   case 11:
//     console.log("Kuz");
//     break;

//   default:
//     console.log("bunday oy mavjud emas");
//     break;
// }

// for (let i = 1; i <= month; i++) {
//   console.log(i);
// }

// =======================
// 3-masala:
// Tasodifiy son hosil qiling va bu son juft yoki toq ekanligini aniqlang. Agar son juft bo‘lsa, 1 dan 20 gacha bo‘lgan juft sonlarni chiqarib bering (for).

// let num = Math.floor(Math.random() * 50);

// if (num % 2 == 0) {
// }
// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// =======================
// 4-masala:
// Foydalanuvchidan musbat son kiritishni so‘rang va uning faktorialini hisoblang (while). Keyin sonning modul qiymatini toping (Math.abs).

// let num = +prompt("son kiriting:");

// let factorial = 1;
// let i = num;
// while (i > 1) {
//   factorial *= i;
//     i--;
// }

// console.log(factorial);
// console.log(Math.abs(num));

// =======================
// 5-masala:
// Foydalanuvchidan hafta kuni raqamini kiritishni so‘rang (switch-case) va unga mos kun nomini chiqaring. Agar kun raqami juft bo‘lsa, qo‘shimcha ravishda 1 dan 10 gacha bo‘lgan sonlarni chiqarib bering (for).

// let week = +prompt("hafta kuni raqamini kiriting:");

// switch (week) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;
//   case 7:
//     console.log("Yakshanba");
//     break;

//   default:
//     console.log("bunday hafta kuni mavjud emas!");
//     break;
// }

// if (week % 2 == 0) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }

// =======================
// 6-masala:
// Tasodifiy son hosil qilib, uni butun qismiga keltiring (Math.trunc) va bu songacha bo‘lgan barcha sonlarning yig‘indisini hisoblang (while).

// let num = Math.trunc(Math.random() * 10);
// console.log(num);

// let i = 1;
// let sum = 0;
// while (i <= num) {
//   sum += i;
//   i++;
// }
// console.log(sum);

// =======================
// 7-masala:
// Foydalanuvchi manfiy son kiritmaguncha sonlarni kiritishni davom ettiring (do...while). Yakunida barcha kiritilgan sonlarning o‘rtacha qiymatini hisoblang.

// let num = +prompt("son kiriting:");
// let sum = 0;
// let count = 0;

// do {
//     sum += num;
//     count++;
//     num = +prompt();
// } while (num > 0) 

// let average = sum / count;
// console.log(average);