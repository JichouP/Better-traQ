import { migrate } from '@/background/migrate';
import { HOST } from '@/env';

chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
  chrome.declarativeContent.onPageChanged.addRules([
    {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: HOST },
        }),
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()],
    },
  ]);
});

// migrate to V2

chrome.runtime.onInstalled.addListener(migrate);
