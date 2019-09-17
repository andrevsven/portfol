new fullpage('#fullpage', {
  
});

//adding the action to the button
$(document).on('click', '#moveUp', function(){
  fullpage_api.moveSectionUp();
});
   


