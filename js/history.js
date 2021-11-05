const tabList = document.querySelectorAll('.tab_menu .list li');
const tabListt = document.querySelectorAll('.tab_menu .listt li');
const tab1 = document.querySelector('.tab_menu .list #tab1');
const tab2 = document.querySelector('.tab_menu .list #tab2');
const tab3 = document.querySelector('.tab_menu .list #tab3');

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

  for(var i = 0; i < tabListt.length; i++){
    tabListt[i].querySelector('.btnn').addEventListener('click', 
    function(e){
      e.preventDefault();
      for(var j = 0; j < tabListt.length; j++){
        tabListt[j].classList.remove('is_onn');
      }
      this.parentNode.classList.add('is_onn');
      
    });
  }  