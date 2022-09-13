// Product 클래스를 정의(속성: 이름, 가격, toString메쏘드)
// 5가지의 상품을 만들 것(인스턴스)

// Cart(속성 : 상품, 수량/ 메쏘드: add(),sum())
// Cart 의 총 가격을 구할 것

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    };
    toString() {
        console.log(`본 상품은 ${this.name}이며 가격은 ${this.price}원 입니다.`)
    }
}

망고=new Product('망고',4000)
사과=new Product('사과',2000)
배=new Product('배', 5000)
수박=new Product('수박', 20000)
포도=new Product('포도', 7000)

class Cart{
    constructor(상품, 수량, 가격){
        this.상품 = 상품;
        this.수량 = 수량;
        this.가격 = 가격;
    }
    add(){
        console.log(`${this.상품}은/는 ${this.수량}개 담겨있습니다.`)
    }
    sum(){
        console.log(`${this.상품}의 총 가격은 ${this.수량*this.가격}원 입니다.`)
    }
}

망고=new Cart('망고', 30, 4000)
사과=new Cart('사과',50,2000)
배=new Cart('배', 20,5000)
수박=new Cart('수박',10, 20000)
포도=new Cart('포도', 15,7000)

망고.add()
망고.sum()

사과.add()
사과.sum()

배.add()
배.sum()

수박.add()
수박.sum()

포도.add()
포도.sum()

