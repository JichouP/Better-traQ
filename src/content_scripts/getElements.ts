const classPrefix = {
  navigations: 'NavigationSelectorItem_container',
  channels: 'ChannelElementName_container',
  filterInputs: 'FilterInput_input',
  channelFilterStar: 'ChannelFilter_star',
  activityToggleButtons: 'ToggleButton_container',
  messageInput: 'MessageInputTextArea_container',
  messageInputInsertStampButton: 'MessageInputInsertStampButton_container',
  stamps: 'StampPickerStampList_stampListItem',
  messages: 'MessageElement_body',
  openSidebar: 'ChannelSidebarHidden_icon',
  closeSidebar: 'CloseButton_circle',
  sidebarContent: 'SidebarContentContainer_container',
  messageToolsIcon: 'MessageTools_icon',
  messageToolsMenu: 'MessageToolsMenu_text',
  messagesScroller: 'MessagesScroller_root',
};

const getAllElementByClassName = <T extends Element>(className: string) =>
  document.querySelectorAll<T>(`[class*=${className}]`);

export const getElements = {
  navigations: (): NodeListOf<HTMLDivElement> =>
    getAllElementByClassName(classPrefix.navigations),
  channels: (): NodeListOf<HTMLDivElement> =>
    getAllElementByClassName(classPrefix.channels),
  filterInputs: (): NodeListOf<HTMLInputElement> =>
    getAllElementByClassName(classPrefix.filterInputs),
  channelFilterStar: (): HTMLButtonElement =>
    getAllElementByClassName<HTMLButtonElement>(
      classPrefix.channelFilterStar
    )[0],
  activityToggleButtons: (): NodeListOf<HTMLButtonElement> =>
    getAllElementByClassName(classPrefix.activityToggleButtons),
  messageInput: (): HTMLTextAreaElement => {
    const els = getAllElementByClassName<HTMLTextAreaElement>(
      classPrefix.messageInput
    );
    return els[els.length - 1];
  },
  messageEditor: (): HTMLTextAreaElement | null => {
    const els = getAllElementByClassName<HTMLTextAreaElement>(
      classPrefix.messageInput
    );
    if (els.length === 1) return null;
    return els[els.length - 2];
  },
  messageInputInsertStampButton: (): HTMLDivElement =>
    getAllElementByClassName<HTMLDivElement>(
      classPrefix.messageInputInsertStampButton
    )[0],
  stamps: (): NodeListOf<HTMLImageElement> =>
    getAllElementByClassName(classPrefix.stamps),
  messages: (): NodeListOf<HTMLDivElement> =>
    getAllElementByClassName(classPrefix.messages),
  openSidebar: (): SVGElement =>
    getAllElementByClassName<SVGElement>(classPrefix.openSidebar)[0],
  closeSidebar: (): HTMLDivElement =>
    getAllElementByClassName<HTMLDivElement>(classPrefix.closeSidebar)[0],
  sidebarContent: (): NodeListOf<HTMLDivElement> =>
    getAllElementByClassName(classPrefix.sidebarContent),
  messageToolsIcon: (): NodeListOf<SVGElement> =>
    getAllElementByClassName(classPrefix.messageToolsIcon),
  messageToolsMenu: (): NodeListOf<HTMLSpanElement> =>
    getAllElementByClassName(classPrefix.messageToolsMenu),
  messagesScroller: (): HTMLDivElement =>
    getAllElementByClassName<HTMLDivElement>(classPrefix.messagesScroller)[0],
};
