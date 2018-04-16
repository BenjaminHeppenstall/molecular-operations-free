document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	admob.initAdmob("ca-app-pub-3940256099942544/6300978111" /* , "ca-app-pub-INTERSTITIALID" */ );            // replace with own id from admob (this is test ad)
}


// cache interstitial ad

/*document.addEventListener(admob.Event.onInterstitialReceive, this.onInterstitialReceive, false);
admob.cacheInterstitial();*/

admob.showBanner(admob.BannerSize.BANNER, admob.Position.BOTTOM_APP);