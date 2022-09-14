/* 4. 다음 배열에서 제조사(manufacturer)와 모델명(model)을 분리해서
별도의 배열을 각각 만드세요.
 */

//내부 배열로 나누고 ' '을 기준으로 뒤로는 모델명으로 앞은 제조사로 나누면 될 거 같은데
const cars = ['buick skylark320','plymouth satellite','amc rabel sst','ford torino'];
let manufacturer = [];
let model = [];
for (i=0;i<=3;i++) {
    for (j=0;j<cars[i].split(' ').length;j++) {
        const a = cars[i].split(' ');
        if (j==0){
            manufacturer.push(a[j]);
        } else{
            model.push(a[j])
        }
    }
}
console.log(manufacturer)
console.log(model)
