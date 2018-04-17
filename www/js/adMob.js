admobid = {
      banner: 'ca-app-pub-3940256099942544/6300978111'
    };

AdMob.createBanner({
  adId: admobid.banner,
  position: AdMob.AD_POSITION.TOP_CENTER,
  autoShow: true });

document.write("works");