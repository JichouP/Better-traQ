/*
 * デフォルトのキーコンフィグ
 *
 * 全般
 *  0-9: urisで指定したチャンネルへ移動
 *  Escape: テキストエリアの選択を解除（テキストエリア選択時），メニューを閉じる
 *
 * ナビゲーション
 *  q: ホーム
 *      w: ホームチャンネル
 *      e: 次の未読チャンネルを開く
 *  a: チャンネル
 *      s: 検索ボックス
 *      d: お気に入り
 *  z: アクティビティ
 *      x: 通知チャンネルのみを表示
 *      c: 同じチャンネルでは一つしかメッセージを表示しない
 *
 * メッセージ
 *  n: テキストエリアにフォーカ
 *  m: 絵文字ピッカーを開く
 *  Space: 先頭のスタンプを押す
 *  b: メッセージウィンドウ一番下にスクロール
 *  h: スタンプ検索にフォーカス
 *  ArrowUp: 編集
 *  p: 一番目のスタンプピッカーを開く
 *  o: 二番目のスタンプピッカーを開く
 *  i: 三番目のスタンプピッカーを開く
 *  u: 四番目のスタンプピッカーを開く
 *  y: 五番目のスタンプピッカーを開く
 *  t: 六番目のスタンプピッカーを開く
 * サイドバー
 *  l: サイドバー
 *  ;: 閲覧者一覧
 */

import { browser } from 'webextension-polyfill-ts';

const exec = (text: string) => {
  const th = document.getElementsByTagName('body')[0];
  const script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.textContent = `${text}`;
  th.appendChild(script);
  return th.removeChild(script);
};

const changeChannel = (path: string) => {
  return exec(`changeChannel("${path}")`);
};

const { head } = document;

const backgroundLinkElement = document.createElement('style');
backgroundLinkElement.type = 'text/css';

(async () => {
  // const storageKeys = new Array(10).fill(null).map((_, i) => `${i}`);
  // let urls = await browser.storage.sync.get(storageKeys);
  // if (!Array.isArray(urls) || urls.length < 10) {
  //     // "urls" is empty
  //     for (const storageKey of storageKeys) {
  //         await browser.storage.sync.set({ [storageKey]: '' });
  //     }
  // }

  const backgroundUrl: string = (await browser.storage.sync.get('10'))['10'];
  const filterColor: string = (await browser.storage.sync.get('11'))['11'];
  backgroundLinkElement.textContent = `
[class*=MainView_primary] {
    background: url(${backgroundUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
[class*=ChannelViewContent_container] {
    background: ${filterColor || 'rgba(255, 255, 255, 0.8)'};
}
[class*=ClipsView_container] {
    background: ${filterColor || 'rgba(255, 255, 255, 0.8)'};
}
[class*=MessageElement_body]:not([data-is-editing]):not([data-is-pinned]):not([data-is-entry]):hover {
    background: rgba(0, 0, 0, 0);
}
[class*=ClipElement_body]:not([data-is-editing]):not([data-is-pinned]):not([data-is-entry]):hover {
    background: rgba(0, 0, 0, 0);
}
`;
  head.appendChild(backgroundLinkElement);
  const classPrefix = {
    navigations: 'NavigationSelectorItem_container',
    channels: 'ChannelElementName_container',
    filterInputs: 'FilterInput_input',
    channelStar: 'ChannelFilter_star',
    toggleButtons: 'ToggleButton_container',
    messageInput: 'MessageInputTextArea_container',
    messageEditor: 'MessageEditor_inputTextArea',
    messageInputInsertStampButton: 'MessageInputInsertStampButton_container',
    // stampList: 'StampPickerStampList_container',
    stamps: 'StampPickerStampList_stampListItem',
    messages: 'MessageElement_body',
    openSidebar: 'ChannelSidebarHidden_icon',
    closeSidebar: 'CloseButton_circle',
    sidebarContent: 'SidebarContentContainer_container',
    messageToolsIcon: 'MessageTools_icon',
    messageToolsMenu: 'MessageToolsMenu_text',
  };

  const isNotSelectedInput = () => {
    const tagName = document.activeElement?.tagName;
    return tagName !== 'INPUT' && tagName !== 'TEXTAREA';
  };

  const getElementByPrefix = <T extends Element>(
    value: string,
    attr = 'class'
  ) => document.querySelector<T>(`[${attr}*=${value}]`);

  const getAllElementByPrefix = <T extends Element>(
    value: string,
    attr = 'class'
  ) => document.querySelectorAll<T>(`[${attr}*=${value}]`);

  const clickMessageTool = (i: number, stampOrDot: 0 | 1) => {
    exec(
      `(() => {
                const messages = document.querySelectorAll('[class*=${
                  classPrefix.messages
                }]');
                messages.forEach((el) => {
                    el.dispatchEvent(new Event('mouseleave'));
                });
                window.setTimeout(() => {
                    messages[messages.length - ${i}].dispatchEvent(new Event('mouseenter'));
                }, 0);
                window.setTimeout(() => {
                    document.querySelectorAll('[class*=${
                      classPrefix.messageToolsIcon
                    }]')[${stampOrDot}].__vue__.$listeners.click({ pageX: ${
        window.innerWidth
      }, pageY: ${window.innerHeight / 2} });
                }, 0);
                messages[messages.length - ${i}].dispatchEvent(new Event('mouseleave'));
            })()`
    );
  };

  window.addEventListener('keydown', async (ev) => {
    const { key } = ev;
    if (ev.altKey || ev.shiftKey || ev.ctrlKey || ev.metaKey) return;
    if (isNotSelectedInput()) {
      switch (key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0': {
          const url = await browser.storage.sync.get(key);
          if (typeof url[key] === 'string' && url[key]) {
            changeChannel(url[key]);
            // changeChannel(url[key]);
          } else {
            alert('チャンネルを設定してください');
          }
          break;
        }
        case 'Escape': {
          document.querySelector('body')?.click();
          const messages = document.querySelectorAll(
            `[class*=${classPrefix.messages}]`
          );
          messages.forEach((el) => {
            el.dispatchEvent(new Event('mouseleave'));
          });
          break;
        }
        case 'q':
          getAllElementByPrefix<HTMLDivElement>(
            classPrefix.navigations
          )[0]?.click();
          break;
        case 'w':
          getAllElementByPrefix<HTMLDivElement>(
            classPrefix.channels
          )[0]?.click();
          break;
        case 'e':
          getAllElementByPrefix<HTMLDivElement>(
            classPrefix.channels
          )[1]?.click();
          break;
        case 'a':
          getAllElementByPrefix<HTMLDivElement>(
            classPrefix.navigations
          )[1]?.click();
          break;
        case 's':
          ev.preventDefault();
          getAllElementByPrefix<HTMLInputElement>(
            classPrefix.filterInputs
          )[0]?.focus();
          break;
        case 'd':
          getAllElementByPrefix<HTMLButtonElement>(
            classPrefix.channelStar
          )[0]?.click();
          break;
        case 'z':
          getAllElementByPrefix<HTMLDivElement>(
            classPrefix.navigations
          )[2]?.click();
          break;
        case 'x':
          getAllElementByPrefix<HTMLDivElement>(
            classPrefix.toggleButtons
          )[0]?.click();
          break;
        case 'c':
          getAllElementByPrefix<HTMLDivElement>(
            classPrefix.toggleButtons
          )[1]?.click();
          break;
        case 'n':
          ev.preventDefault();
          getElementByPrefix<HTMLTextAreaElement>(
            classPrefix.messageInput
          )?.focus();
          break;
        case 'm':
          ev.preventDefault();
          getElementByPrefix<HTMLDivElement>(
            classPrefix.messageInputInsertStampButton
          )?.click();
          break;
        case ' ':
          // document.querySelectorAll<HTMLDivElement>(`[class*=${classPrefix.stampList}] [class*=${classPrefix.stamps}]`)[0]?.click();
          getAllElementByPrefix<HTMLImageElement>(
            classPrefix.stamps
          )[0]?.click();
          break;
        case 'b': {
          const messagesScroller = getElementByPrefix('MessagesScroller_root');
          if (!messagesScroller) {
            break;
          }
          messagesScroller.scrollTop = messagesScroller.scrollHeight;
          break;
        }
        case 'h':
          ev.preventDefault();
          getAllElementByPrefix<HTMLInputElement>(
            classPrefix.filterInputs
          )[2]?.focus();
          break;
        case 'p':
          ev.preventDefault();
          clickMessageTool(1, 0);
          break;
        case 'o':
          ev.preventDefault();
          clickMessageTool(2, 0);
          break;
        case 'i':
          ev.preventDefault();
          clickMessageTool(3, 0);
          break;
        case 'u':
          ev.preventDefault();
          clickMessageTool(4, 0);
          break;
        case 'y':
          ev.preventDefault();
          clickMessageTool(5, 0);
          break;
        case 't':
          ev.preventDefault();
          clickMessageTool(6, 0);
          break;
        case 'l':
          (
            getElementByPrefix<SVGElement>(classPrefix.openSidebar) ||
            getElementByPrefix<SVGElement>(classPrefix.closeSidebar)
          )?.dispatchEvent(new Event('click'));
          break;
        case ';':
          getAllElementByPrefix<HTMLDivElement>(
            classPrefix.sidebarContent
          )[0]?.click();
          break;
      }
    } else {
      switch (key) {
        case 'Escape':
          (
            (document.activeElement as HTMLInputElement) || HTMLTextAreaElement
          )?.blur();
          break;
        case 'ArrowUp': {
          const messageInput = getElementByPrefix<HTMLTextAreaElement>(
            classPrefix.messageInput
          );
          if (
            messageInput?.value === '' &&
            messageInput === document.activeElement
          ) {
            ev.preventDefault();
            clickMessageTool(1, 1);
            window.setTimeout(() => {
              if (
                getAllElementByPrefix<HTMLSpanElement>(
                  classPrefix.messageToolsMenu
                )[2].innerText !== '編集'
              ) {
                window.setTimeout(() => {
                  document.querySelector('body')?.click();
                }, 0);
                return;
              }
              getAllElementByPrefix<HTMLSpanElement>(
                classPrefix.messageToolsMenu
              )[2].click();
              document.querySelector('body')?.click();
              window.setTimeout(() => {
                getElementByPrefix<HTMLTextAreaElement>(
                  classPrefix.messageEditor
                )?.focus();
              }, 0);
            }, 0);
          }
          break;
        }
      }
    }
  });
})();
