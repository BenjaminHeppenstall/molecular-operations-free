document.addEventListener('onAdFailLoad', function(e){
  var alertTxt = "for offline usage please donwload ";
  var alertBold = "Molecular operations (0.59€)"
  var alertTxt2 = " in the google play store";
  alert(alertTxt + alertBold + alertTxt2)
  navigator.app.exitApp();
});