var targetLink = document.querySelectorAll('.historyTab a');
var tabContent = document.querySelectorAll('#tab-content > div');

for(var i=0; i< targetLink.length; i++){
  targetLink[i].addEventListener('click', function(e){
    e.preventDefault();
    var orgTarget = e.target.getAttribute('href');
    
    var tabTarget = orgTarget.replace('#','');
      for(var j=0; j < tabContent.length; j++){
        tabContent[i].style.display = 'none';
      }
    document.getElementById(tabTarget).style.display ='block';

    for(var z=0; z<targetLink.length; z++){
      targetLink[i].classList.remove('active');
      e.target.classList.add('active');
    }

  });
  document.getElementById('tba1').style.display ='block';


}
//   for(var i = 0; i < tabListt.length; i++){
//     tabListt[i].querySelector('.btnn').addEventListener('click', 
//     function(e){
//       e.preventDefault();
//       for(var j = 0; j < tabListt.length; j++){
//         tabListt[j].classList.remove('is_onn');
//       }
//       this.parentNode.classList.add('is_onn');
      
//     });
//   }  

  // tabToggle : function()
  // {

  //   document.querySelector('.tabMn,.subtabMn').each(function()
  //   {
  //     this.on('click','li>a',function( evt )
  //     {

  //       evt.preventDefault();
  //       var _this = this;
  //       this.attr('aria-selected',true).
  //       closest('li').addClass('on').
  //       siblings('li').removeClass('on').find('a').attr('aria-selected',false);
  //       var ul = _this.closest('ul , ol');
  //       if( ul.hasClass('tabMn') )
  //       {
  //         document.querySelector('.tabCont').hide();
  //         var _href = document.querySelector( _this.attr('href')  ).find('>ul>li>a[aria-selected=true]').attr('href');
  //         var _href = document.querySelector( _this.attr('href')  ).find('>ul>li>a[aria-selected=true],>ol>li>a[aria-selected=true]').attr('href');
  //         document.querySelector( _href  ).show();	
  //       } else if( ul.hasClass('subtabMn') ){
  //         document.querySelector('.subtabCont').hide();
  //       }
  //       document.querySelector( _this.attr('href')  ).show();

  //     });

  //   });

  // }