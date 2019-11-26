chrome.commands.onCommand.addListener(command => {
	if(command=="open-extensions-tab") {
		chrome.tabs.query({url:"chrome://extensions/"}, tabs => {
			if(tabs.length) {
				chrome.windows.update(tabs[0].windowId, {focused: true});
				chrome.tabs.update(tabs[0].id, {active: true});
			}
			else chrome.tabs.create({url: "chrome://extensions/"});
		});
	}
});