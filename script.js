console.log("connected");


/// Background colour cycle 
// let pinks = ["#E7A1B0", "#E38AAE", "#C25283", "#A24857", "#B3446C"];
// let second = 0;
// function doColorChange() {
//     document.body.style.background = pinks[second];
//     second += 1;
//     if (second >= pinks.length) 
//         second = 0;
// }

// setInterval(doColorChange, 1000);

// let blues = ["#3B9C9C", "#008B8B", "#00827F", "#008080", "#007C80"];
// let second1 = 0;
// function doColorChange1() {
//     document.querySelector('h1').style.color = blues[second1];
//     second1 += 1;
//     if (second1 >= blues.length) 
//         second1 = 0;
// }

// setInterval(doColorChange1, 1000);

// // let blues = ["#3B9C9C", "#008B8B", "#00827F", "#008080", "#007C80"];
// let second2 = 0;
// function doColorChange2() {
//     document.querySelector('p').style.color = blues[second2];
//     second2 += 1;
//     if (second2 >= blues.length) 
//         second2 = 0;
// }

// setInterval(doColorChange2, 1000);

let blues = ["#9AFEFF", "#4EE2EC", "#16E2F5", "#50EBEC", "#A0CFEC"];
let second3 = 0;
function doColorChange3() {
    document.body.style.color = blues[second3];
    second3 += 1;
    if (second3 >= blues.length) 
        second3 = 0;
}

setInterval(doColorChange3, 1000);

const follow = document.getElementById('follow');
let count = 6;
count = 2680;
follow.textContent = `Twitch follower count ${count}`
