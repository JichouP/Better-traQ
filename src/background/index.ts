import browser from 'webextension-polyfill';

// browser.declarativeContent.onPageChanged.removeRules(undefined, () => {
//   browser.declarativeContent.onPageChanged.addRules([
//     {
//       conditions: [
//         new browser.declarativeContent.PageStateMatcher({
//           pageUrl: { hostEquals: process.env.HOST },
//         }),
//       ],
//       actions: [new browser.declarativeContent.ShowAction()],
//     },
//   ]);
// });

browser.action.onClicked.addListener(() => {
  browser.runtime.openOptionsPage();
});
