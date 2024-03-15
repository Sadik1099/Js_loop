// const number = [45,85,25,65,25,76,75,86,75];
// console.log(number);

// for(const num of number){
//     console.log(num);
// }

// ---------- while loop ------//
// let num =0;
// while(num < 5){
//     console.log('ffsdfsdfj');
//     num++;
// }

// -------- show number ----------//

// let num=1;
// let sum = 0;
// while(num <= 10){
//     console.log("Number is:", num);
//      console.log("sum of the number :", sum+=num, "\n");
//     num++;
// }

// -------- for loop -------//

// let num =0;
// for(num; num<5;num++){
//     console.log(num);
// }

// for(let num = 1; num<=20; num+=2){
//     console.log(num);
// }

// ----------differen way of represent loop -------//

// for(let i= 1; i<=30;i++){
//     if(i%3==0 || i%5==0){
//         console.log(i);
//     }
// }

// for(let i= 1; i<=30;i++){
//     if(i%3==0 && i%5==0){
//         console.log(i);
//     }
// }

let sum =0;
for(let i= 1; i<=30;i++){
    if(i%3==0 || i%5==0){
        sum +=i;
    }
}
console.log("sum of the given number divisor by 3 or 5 is: ",sum);


