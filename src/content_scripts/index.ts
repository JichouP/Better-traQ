import { browser } from 'webextension-polyfill-ts';
import { handler } from '@/content_scripts/keyDownHandler';
import { updateBackground } from '@/content_scripts/updateBackground';

updateBackground();
window.addEventListener('keydown', handler);

browser.storage.onChanged.addListener((changes) => {
  if (
    Object.keys(changes).some(
      (v) => v.includes('background') || v.includes('filter')
    )
  ) {
    updateBackground();
  }
});
