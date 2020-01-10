chrome.browserAction.onClicked.addListener(function(tab) {
    var code;
    try{
    code = 'hello!'+ chrome.contentSettings.location.get({}); 

    }catch(e){

        code =e
    }

    // chrome.contentSettings.location.set({
    //     code: code
    // });


    chrome.browserAction.setBadgeText({
        tabId: tab.id,
        text: code,
    });
    setTimeout(function(){
        chrome.browserAction.setBadgeText({
            tabId: tab.id,
            text: ''
        });
    }, 1000);

});