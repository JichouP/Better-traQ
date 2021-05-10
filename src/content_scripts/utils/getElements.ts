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
  desktopToolBox: 'DesktopToolBox_container',
};

const getAllElementsByClassName = <T extends Element>(className: string) =>
  document.querySelectorAll<T>(`[class*=${className}]`);

export const getElements = {
  navigations: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.navigations),
  channels: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.channels),
  filterInputs: (): NodeListOf<HTMLInputElement> =>
    getAllElementsByClassName(classPrefix.filterInputs),
  channelFilterStar: (): NodeListOf<HTMLButtonElement> =>
    getAllElementsByClassName(classPrefix.channelFilterStar),
  activityToggleButtons: (): NodeListOf<HTMLButtonElement> =>
    getAllElementsByClassName(classPrefix.activityToggleButtons),
  messageInput: (): HTMLTextAreaElement => {
    const els = getAllElementsByClassName<HTMLTextAreaElement>(
      classPrefix.messageInput
    );
    return els[els.length - 1];
  },
  messageEditor: (): HTMLTextAreaElement | null => {
    const els = getAllElementsByClassName<HTMLTextAreaElement>(
      classPrefix.messageInput
    );
    if (els.length === 1) return null;
    return els[els.length - 2];
  },
  messageInputInsertStampButton: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.messageInputInsertStampButton),
  stamps: (): NodeListOf<HTMLImageElement> =>
    getAllElementsByClassName(classPrefix.stamps),
  messages: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.messages),
  openSidebar: (): NodeListOf<SVGElement> =>
    getAllElementsByClassName(classPrefix.openSidebar),
  closeSidebar: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.closeSidebar),
  sidebarContent: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.sidebarContent),
  messageToolsIcon: (): NodeListOf<SVGElement> =>
    getAllElementsByClassName(classPrefix.messageToolsIcon),
  messageToolsMenu: (): NodeListOf<HTMLSpanElement> =>
    getAllElementsByClassName(classPrefix.messageToolsMenu),
  messagesScroller: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.messagesScroller),
  desktopToolBox: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.desktopToolBox),
};
