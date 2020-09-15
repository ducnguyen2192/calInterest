
let p = 10
let i=0
while(p<=300){
    p=p*1.08
    i +=1
}
document.getElementById("result").innerHTML = i

// for (let i =1;; i ++){
//     p = p*1.08
//     if(p>30){
//         document.getElementById("result").innerHTML = "number of years to exceed 300 is " + i;
//         break
//     }
// }
