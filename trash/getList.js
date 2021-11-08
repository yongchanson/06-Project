const all = document.querySelector("#all");
const ing = document.querySelector("#ing");
const end = document.querySelector("#end");
const btn = document.querySelector("#deletebtn");
// const promotionList = document.querySelector("#promotionList");
// var addul = document.getElementById("promotionList");
var addul = document.querySelector(".content");
var addli = document.createElement("li");
const addclass = document.createElement("class");

const tabList = document.querySelectorAll(".inner .list .ison .content .addingclass");
const ison = document.querySelector("ison");


const imagesing = ["ing1.png", "ing2.png", "ing3.png"];
const stronging = 
[   "매콤하고 진한 찐 아케리칸 소울! NEW 스파이시 맥앤치즈 버거",
    "달콤! 바삭! 쫄깃! 츄러스 출시 새로운 해피 스낵 가을/겨울 시즌 오프!",
    "자두 칠러와 제주 한라봉 칠러로 상큼 충전!"
]

const imagesend = ["end1.png", "end2.png", "end3.png"];
const strongend = 
[   "맥도날드 앱에서 만나는 특별한 할로윈 혜택!",
    "1955버거와 함께 할로윈을 더 특별하게! 1955스모키 더블 베이컨 컴백!",
    "점심을 제대로! 굿런치 맥런치! 더블 에그 불고기 버거 출시!"
];

function deletetest() {
    // event.preventDefault();

    // addul.innerHTML = '';
    // addul.removeChild(addul.firstElementChild);

    // const addingli = document.querySelector("#addli");   
    // addingli.parentNode.removeChild(addingli);

    // document.getElementById("addli").remove(); 

    // event.target.parentElement.remove();

    // addul.classList.remove();
    // element.classList.remove("addingclass");

    tabList.classList.remove();
}



function IngClick(event) {
    event.preventDefault();
    // addclass.classList.toggle("addingclass");
    // var ul = document.getElementById("promotionList");
    // var li = document.createElement("li");
    
    for(var i=0; i<imagesing.length; i++) {
        const images = document.createElement("img");
            images.alt = stronging[i];
        const addspan = document.createElement("span");
            addspan.innerText = stronging[i];
        images.src = `images/menu/${imagesing[i]}`;
        // const adddiv = document.createElement("div");
        
        addclass.appendChild(document.body.appendChild(images));
        addclass.appendChild(document.body.appendChild(addspan));
        addclass.className = "addingclass"; 

        addli.appendChild(addclass);  
    } 
    addul.appendChild(addli);   
    
    
    // addli.classList.toggle("addclass");
}

function EndClick(event) {
    event.preventDefault();

    for(var i=0; i<imagesend.length; i++) {
        const images = document.createElement("img");
            images.alt = strongend[i];
        const addspan = document.createElement("span");
            addspan.innerText = strongend[i];
        images.src = `images/menu/${imagesend[i]}`;
        // const adddiv = document.createElement("div");
        
        addclass.appendChild(document.body.appendChild(images));
        addclass.appendChild(document.body.appendChild(addspan));
        addclass.className = "addingclass";

        addli.appendChild(addclass);  
    } 
    addul.appendChild(addli);   
  
}

function AllClick(event) {
    event.preventDefault();

    for(var i=0; i<imagesing.length; i++) {
        const images = document.createElement("img");
            images.alt = stronging[i];
        const addspan = document.createElement("span");
            addspan.innerText = stronging[i];
        images.src = `images/menu/${imagesing[i]}`;
        // const adddiv = document.createElement("div");
        
        addclass.appendChild(document.body.appendChild(images));
        addclass.appendChild(document.body.appendChild(addspan));
        addclass.className = "addingclass";

        addli.appendChild(addclass);  
    } 
        addul.appendChild(addli);   
    

        for(var i=0; i<imagesend.length; i++) {
            const images = document.createElement("img");
                images.alt = strongend[i];
            const addspan = document.createElement("span");
                addspan.innerText = strongend[i];
            images.src = `images/menu/${imagesend[i]}`;
            // const adddiv = document.createElement("div");
            
            addclass.appendChild(document.body.appendChild(images));
            addclass.appendChild(document.body.appendChild(addspan));
            addclass.className = "addingclass"; 
    
            addli.appendChild(addclass);  
        } 
        addul.appendChild(addli); 
}



all.addEventListener("click", AllClick);
ing.addEventListener("click", IngClick);
end.addEventListener("click", EndClick);
btn.addEventListener("click", deletetest);


//delete-btn 후 클릭시 삭제된 내용들이 출력됨
//All, Ing, EndClick - delete구현
//click 3개 통일(ing만 class상태)
//addli 분리

