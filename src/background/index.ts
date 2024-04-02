import browser from 'webextension-polyfill';

browser.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === "install" || reason === "update") {
    browser.runtime.openOptionsPage();
    // Page actions are disabled by default and enabled on select tabs
    browser.action.disable();
  }

  // Clear all rules to ensure only our expected rules are set
  browser.declarativeContent.onPageChanged.removeRules(undefined, () => {
    // Declare a rule to enable the action on example.com pages
    const exampleRule = {
      conditions: [
        new browser.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: process.env.HOST },
        }),
        new browser.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: browser.runtime.id },
        }),
      ],
      actions: [new browser.declarativeContent.ShowAction()],
    };

    // Finally, apply our new array of rules
    const rules = [exampleRule];
    browser.declarativeContent.onPageChanged.addRules(rules);
  });
});

if (process.env.BROWSER !== 'firefox') {
  browser.action.onClicked.addListener(() => {
    browser.runtime.openOptionsPage();
  });
} else {
  browser.browserAction.onClicked.addListener(() => {
    browser.runtime.openOptionsPage();
  });
}
