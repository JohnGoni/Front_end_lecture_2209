//2.다음과 같은 문자열이 있다.
const text = `the grown-ups' response, this time, was to advise me to lay aside my drawings of 
boa constrictors, whether from the inside or the outside, and devote myself instead to geography, 
history, arithmetic, and grammar. That is why, at the, age of six, I gave up what might have been 
a magnificent career as a painter. I had been disheartened by the failure 
of my Drawing Number One and my Drawing Number Two. Grown-ups never understand anything by themselves, 
and it is tiresome for children to be always and forever explaining things to the.`;
/* 문자열에서 ‘the’의 개수를 출력하는 프로그램을 만드세요.
단, 모든 문자가 소문자인 ‘the’만 찾으면 되며
‘them’, ‘there’, ‘their’ 등은 포함하지 않아야 합니다. */
/* const count = text.match(/ the/g).filter(function(item) { return item !== ''; }).length;
console.log(count) 구글링으로 찾은 답 다른 답을 만들어보자*/
const change = text.replace(/[.]/g, ' ').replace(/[,]/g, ' ');
const find = change.split(' ')
let count = 0;
for (let i=0;i<=find.length;i++){
    if(find[i] === 'the') {
        count += 1;
    }
}
console.log(count)