const allbtn = document.querySelector("#allbtn");
const ingbtn = document.querySelector("#ingbtn");
const endbtn = document.querySelector("#endbtn");
const btnMore = document.querySelector("#btnMore");

let ingmenu = document.querySelectorAll("#ingmenu li");
let endmenu = document.querySelectorAll("#endmenu li");
// let a = 6; //한페이지에 나타낼 메뉴개수

let ccnt = 0;

function moreClick(){
    // e.preventDefault();
    // let className ="";
    // let endmenu6 = endmenu[6].className
    // let endmenu12 = endmenu[12].className
    console.log(ccnt)
    // let ecN = endmenu[i].className ="end"
    
//allbtn on
if(allbtn.className === "TrueRed") {
    if(ccnt == 0) {
        for(i=6; i<ingmenu.length; i++) {
            ingmenu[i].className ="ing" 
        } ccnt++;
    } else if (ccnt == 1) {
        for(i=0; i<6; i++) {
            endmenu[i].className ="end"    
        } ccnt++;
    } else if (ccnt == 1) {
        for(i=6; i<12; i++) {
            endmenu[i].className ="end"    
        } ccnt++;
    } else if (ccnt == 2) {
        for(i=12; i<18; i++) {
            endmenu[i].className ="end"    
        } ccnt++;
    } else if (ccnt == 3) {
        for(i=18; i<24; i++) {
            endmenu[i].className ="end"    
        } ccnt++;
    } else if (ccnt == 4) {
        for(i=24; i<30; i++) {
            endmenu[i].className ="end"    
        } ccnt++;
    } else if (ccnt == 5) {
        for(i=30; i<36; i++) {
            endmenu[i].className ="end"    
        } ccnt++;
    } else if (ccnt == 6) {
        for(i=36; i<42; i++) {
            endmenu[i].className ="end"    
        } ccnt++;
    } else if (ccnt == 7) {
        for(i=42; i<endmenu.length; i++) {
            endmenu[i].className ="end"    
        } ccnt++; 
            btnMore.style = "display : none"
    }

}

//ingbtn on
if(ingbtn.className === "TrueRed") {
    if(ccnt == 0){
        for(i=6; i<ingmenu.length; i++) {
            ingmenu[i].className ="ing" 
        } ccnt++;
            btnMore.style = "display : none"
    }
}
//endbtn on
if (endbtn.className === "TrueRed") {     
    if(ccnt == 0){
        for(i=6; i<12; i++) {
            endmenu[i].className ="end"   
        } ccnt++;
    } else if (ccnt == 1) {
        for(i=12; i<18; i++) {
            endmenu[i].className ="end"    
        } ccnt++;
    } else if (ccnt == 2) {
        for(i=18; i<24; i++) {
            endmenu[i].className ="end"    
        } ccnt++;
    } else if (ccnt == 3) {
        for(i=24; i<30; i++) {
            endmenu[i].className ="end"    
        } ccnt++;
    } else if (ccnt == 4) {
        for(i=30; i<36; i++) {
            endmenu[i].className ="end"    
        } ccnt++;
    } else if (ccnt == 5) {
        for(i=36; i<42; i++) {
            endmenu[i].className ="end"    
        } ccnt++;
    } else if (ccnt == 6) {
        for(i=42; i<endmenu.length; i++) {
            endmenu[i].className ="end"    
        } ccnt++;
            btnMore.style = "display : none" 
    }
            
}



}
    
    
function AllClick(e) {
    e.preventDefault();

    ccnt = 0;
    for(i=0; i<6; i++){
        ingmenu[i].classList = "ing";
    }
    for(i=6; i<ingmenu.length; i++){
        ingmenu[i].classList = "none";
    }
    for(i=0; i<endmenu.length; i++){
        endmenu[i].classList = "none";
    }
    allbtn.className = "TrueRed"
    ingbtn.className = "FalseRed"
    endbtn.className = "FalseRed"

    btnMore.style = "display : block;"
}

function IngClick(e) {
    e.preventDefault();

    ccnt = 0;
    for(i=0; i<6; i++){
        ingmenu[i].classList = "ing";
    }
    for(i=6; i<ingmenu.length; i++){
        ingmenu[i].classList = "none";
    }
    for(i=0; i<endmenu.length; i++){
        endmenu[i].classList = "none";
    }
    allbtn.className = "FalseRed";
    ingbtn.className = "TrueRed"
    endbtn.className = "FalseRed"

    btnMore.style = "display : block;"
}

function EndClick(e) {
    e.preventDefault();

    ccnt = 0;
    for(i=0; i<6; i++){
        endmenu[i].classList = "end";
    }
    for(i=0; i<ingmenu.length; i++){
        ingmenu[i].classList = "none";
    }
    allbtn.className = "FalseRed";
    ingbtn.className = "FalseRed"
    endbtn.className = "TrueRed"

    btnMore.style = "display : block;"
}


allbtn.addEventListener('click', AllClick);
ingbtn.addEventListener('click', IngClick);
endbtn.addEventListener('click', EndClick);
btnMore.addEventListener('click', moreClick);

