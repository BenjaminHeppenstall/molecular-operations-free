// select the right Ad Id according to platform
/*var admobid = {
    banner: 'ca-app-pub-3940256099942544/6300978111',       // add id, this is the testing one
    interstitial: 'ca-app-pub-3940256099942544/1033173712', // add id, this is the testing one
    rewardvideo: 'ca-app-pub-3940256099942544/5224354917',  // add id, this is the testing one
  };


// it will display smart banner at top center, using the default options
if(AdMob) AdMob.createBanner({
  adId: admobid.banner,
  position: AdMob.AD_POSITION.TOP_CENTER,
  isTesting: true,
  autoShow: true 
});
*/

function onLoad() {
  document.addEventListener("deviceready", initApp, false);
}

// select the right Ad Id according to platform
var admobid = { // for Android
  banner: 'ca-app-pub-6191068143145161/1430227559',
  //interstitial: 'ca-app-pub-3940256099942544/1033173712', 
  //rewardvideo: 'ca-app-pub-3940256099942544/5224354917',
};

function initApp() {
  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

  // this will create a banner on startup
  AdMob.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    overlap: false,
    offsetTopBar: false,
    bgColor: 'black'
  } );

  // this will load a full screen ad on startup
  /*AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    isTesting: true, // TODO: remove this line when release
    autoShow: false
  });*/
}

/*function showInterstitialAd() {
  AdMob.showInterstitial();
}*/

document.addEventListener('onAdFailLoad', function(e){
  var alertTxt = "for offline usage please donwload ";
  var alertBold = "Molecular operations (0.59€)"
  var alertTxt2 = " in the google play store";
  alert(alertTxt + alertBold + alertTxt2)
  navigator.app.exitApp();
});

/*document.write("works ok");

var backBtn = document.getElementById("backBtn");

backBtn.setOnClickListener(new OnClickListener() {
   public void onClick(View v) {
   view=(WebView) findViewById(R.id.w);
   view.loadUrl("https://play.google.com/store/apps");
}
});*/