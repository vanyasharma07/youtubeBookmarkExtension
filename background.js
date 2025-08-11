chrome.tabs.onUpdate.addListener((tabId, tab) =>{c
  if(tab.url && tab.url.includes("youtube.com/watch")){
    const queryParameters = tab.url.split("?")[1];//? why [1]
    const urlParameters = new URLSearchParams(queryParameters);//?

    chrome.tabs.sendMessgae(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v")//
    })
  }
})