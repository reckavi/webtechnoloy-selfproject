const arr=['ECE','CSE','AI&DS','AI&ML','CSD','EEE','CYBER SECURITY'];
const dro=document.getElementById('dropdown');
for(let key in arr){
    const opt=document.createElement('option');
    opt.innerText=arr[key];
    //opt.value=key;
    dro.add(opt)
}

// or using for each 

// arr.forEach(val => {
//     const opt=document.createElement('option');
//     opt.textContent=val;
//     opt.value=val;
//     dro.appendChild(opt);
// }

// )