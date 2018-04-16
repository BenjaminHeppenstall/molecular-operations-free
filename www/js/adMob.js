document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	admob.initAdmob("ca-app-pub-6191068143145161/7360233749", /* "ca-app-pub-INTERSTITIALID" */ );            // replace with own id from admob
}


// cache interstitial ad

/*document.addEventListener(admob.Event.onInterstitialReceive, this.onInterstitialReceive, false);
admob.cacheInterstitial();*/

admob.showBanner(admob.BannerSize.BANNER, admob.Position.BOTTOM_APP);