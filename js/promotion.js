const tabList = document.querySelectorAll('.tab_menu .list li');
const tab1 = document.querySelector('.tab_menu .list #tab1');
const tab2 = document.querySelector('.tab_menu .list #tab2');
const tab3 = document.querySelector('.tab_menu .list #tab3');
var addul = document.querySelector(".content");
var addli = document.createElement("li");
const addclass = document.createElement("class");
const addingclass = document.querySelector(".caddingclass");

const imagesing = ["ing1.png", "ing2.png", "ing3.png", "ing4.png", "ing5.png", "ing6.png"];
const stronging = 
[   "맥도날드 앱에서 만나는 달콤한 바닐라 라떼 무료 쿠폰!",
    "딸기의 상큼함을 한 잔에! 딸기 칠러가 돌아왔다!",
    "매콤하고 진한 찐 아케리칸 소울! NEW 스파이시 맥앤치즈 버거",
    "달콤! 바삭! 쫄깃! 츄러스 출시 새로운 해피 스낵 가을/겨울 시즌 오프!",
    "육즙도 3배! 진한 풍미도 3배! 트리플 치즈버거 컴백",
    "스트로베리 2종 아이스크림 출시!"
]

const imagesend = ["end1.png", "end2.png", "end3.png", "end4.png", "end5.png", "end6.png"];
const strongend = 
[   "맥도날드 앱에서 만나는 특별한 할로윈 혜택!",
    "1955버거와 함께 할로윈을 더 특별하게! 1955스모키 더블 베이컨 컴백!",
    "점심을 제대로! 굿런치 맥런치! 더블 에그 불고기 버거 출시!",
    "자두 칠러와 제주 한라봉 칠러로 상큼 충전!",
    "입안 가득 펼쳐지는 한국의 맛! 창녕 갈릭 버거",
    "서버 콜라보레이션 맥도날드XLCK 한정판 굿즈!"
];

for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.btn').addEventListener('click', 
  function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      tabList[j].classList.remove('is_on');
    }
    this.parentNode.classList.add('is_on');
    
  });
}
// document.querySelector("#tab1").style.display ='block';

function AllClick(e) {
    e.preventDefault();

    if(parseInt(tab1.innerHTML.length) < 10 ){
    
        for(var i=0; i<imagesing.length; i++) {
            tab1.innerHTML += `<img src=images/menu/${imagesing[i]}></img>` + stronging[i];    
        }
        for(var i=0; i<imagesend.length; i++) {
            tab1.innerHTML += `<img id="end" src=images/menu/${imagesend[i]}></img>` + strongend[i];      
        }
    }
    
}   

function IngClick(e) {
    e.preventDefault();

    if(parseInt(tab2.innerHTML.length) < 10 ){
    
        for(var i=0; i<imagesing.length; i++) {
        tab2.innerHTML += `<img src=images/menu/${imagesing[i]}></img>` + stronging[i];      
            }
        }  

}

function EndClick(e) {
    e.preventDefault();
//   tab3.innerHTML = '<img src="images/menu/end1.png"></img>' + strongend[0]
//    + '<img src="images/menu/end2.png"></img>' + strongend[1];
  
   // tab3.innerHTML = '<img src=images/menu/imagesend1></img>' + strongend[1];
  
  if(parseInt(tab3.innerHTML.length) < 10 ){ //형변환없어도 실행됨
    
    for(var i=0; i<imagesend.length; i++) {
  // // while(i<imagesing.length)  {
    tab3.innerHTML += `<img id="end" src=images/menu/${imagesend[i]}></img>` + strongend[i];      
      
      }
    } 
  //  + strongend[0];
  // const images = document.createElement("img");
  // images.src = `images/menu/${imagesing[i]}`;
  // tab3.innerHTML = images;
  
}

tab1btn.addEventListener('click', AllClick);
tab2btn.addEventListener('click', IngClick);
tab3btn.addEventListener('click', EndClick);

// AllClick();
// IngClick();
// EndClick();
