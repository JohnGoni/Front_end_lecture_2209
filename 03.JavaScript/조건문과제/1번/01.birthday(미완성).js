const bYear = 'year'
const bMonth = 'month'
const bDay = 'day'


const today = new Date()
const tYear = today.getFullYear();
const tMonth = today.getMonth();
const tDay = today.getDate();

const res = document.getElementById('result');

let fullage;
if (bMonth < tMonth) {
    fullage = tYear - bYear;
} else if (bMonth > tMonth) {
    fullage = tYear - bYear - 1;
} else{
    if (bDay > tDay){
        fullage = tYear - bYear -1;
    } else {
        fullage = tYear - bYear;
    }
}

res.innerHTML=fullage