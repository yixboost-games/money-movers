console.l0g= console.log;
consolel0g= console.log;

GameAPI= {
  "loadAPI": function() {
  },
  "GameBreak": {
    "request": function(fn1, fn2) {
      fn1();
      fn2();        
    }
  },
  "Branding": {
    "getLink": function(args) {
      return {
        "action": function() {
          consolel0g("--fx--GameAPI--Branding--getLink--action--");
          window.open("http://yixboost.nl.eu.org/"+ (args?"?q="+args:""));
        }
      }      
    },
    "getLogo": function(){
      return {
        "image": "patch/images/null.png",
        "action": function() {
          consolel0g("--fx--GameAPI--Branding--getLogo--action--");
          window.open("http://yixboost.nl.eu.org/");
        }
      }
    }
  }
}

AudioMixer= {
  "isWebAudioSupport": function() {
    consolel0g("--fx--AudioMixer--isWebAudioSupport--");
    return false;
  }  
}
