
var CloseTimer;
function AutoCloseFunction() {
  CloseTimer = setTimeout(function () {
    // Adform.sendEvent(['1', 'AutoClose 10s']);
    mraid.close();
    //alert("AutoClose 10s");
  }, 10000);
}

AutoCloseFunction();

var closebtn = document.getElementById('closeBtn');

      addEventListener('click', fl_closeBanner);
      function fl_closeBanner() {
        //	AC_StopFunction();
        mraid.close(); // sends event automatically [23, Close Button Press];
      }

      function fl_ctag() {
        window.mraid
          ? mraid.open(Adform.getClickURL('clickTAG'))
          : window.open(
              dhtml.getVar('clickTAG', 'http://www.adform.com'),
              dhtml.getVar('landingPageTarget', '_blank')
            );
      }


    //   GSAP
     

      gsap.from('#bg', {
        opacity: 0,
        ease: 'power1.out',
        duration: 0.5,
        delay: 0,
      });

      gsap.from('.anim', {
        opacity: 0,
        left: -1000,
        ease: 'power1.out',
        duration: 1,
        delay: 0,
        stagger: 0.2,
      });


      var tl = gsap.timeline({
        repeat: 10,
        delay: 2,
        repeatDelay: 0,
        yoyo: true,
      });
      tl.to('.books', { scale: 1.1, ease: 'easeInOut', duration: 3, delay: 0 });

      mraid.useCustomClose(true);