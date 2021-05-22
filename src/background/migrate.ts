import { browser } from 'webextension-polyfill-ts';
import { getSyncConfig, setData } from '@/utils/storage';

export const migrate: (details: chrome.runtime.InstalledDetails) => void =
  async (details) => {
    if (details.reason === 'update') {
      const isSync = await getSyncConfig();
      const get = isSync ? browser.storage.sync.get : browser.storage.local.get;
      const remove = isSync
        ? browser.storage.sync.remove
        : browser.storage.local.remove;

      get('0').then((v) => {
        const data = v['0'];
        if (data) {
          setData({ channel0: data });
        }
        remove('0');
      });
      get('1').then((v) => {
        const data = v['1'];
        if (data) {
          setData({ channel1: data });
        }
        remove('1');
      });
      get('2').then((v) => {
        const data = v['2'];
        if (data) {
          setData({ channel2: data });
        }
        remove('2');
      });
      get('3').then((v) => {
        const data = v['3'];
        if (data) {
          setData({ channel3: data });
        }
        remove('3');
      });
      get('4').then((v) => {
        const data = v['4'];
        if (data) {
          setData({ channel4: data });
        }
        remove('4');
      });
      get('5').then((v) => {
        const data = v['5'];
        if (data) {
          setData({ channel5: data });
        }
        remove('5');
      });
      get('6').then((v) => {
        const data = v['6'];
        if (data) {
          setData({ channel6: data });
        }
        remove('6');
      });
      get('7').then((v) => {
        const data = v['7'];
        if (data) {
          setData({ channel7: data });
        }
        remove('7');
      });
      get('8').then((v) => {
        const data = v['8'];
        if (data) {
          setData({ channel8: data });
        }
        remove('8');
      });
      get('9').then((v) => {
        const data = v['9'];
        if (data) {
          setData({ channel9: data });
        }
        remove('9');
      });
      get('10').then((v) => {
        const data = v['10'];
        if (data) {
          setData({ background0: data });
        }
        remove('10');
      });
      get('11').then((v) => {
        const data = v['11'];
        if (data) {
          setData({ filterColor0: data });
        }
        remove('11');
      });
    }
  };
