const classPrefix = {
  navigations: 'NavigationSelectorItem_container',
  channelContainers: 'ChannelElement_container',
  channelNameContainers: 'ChannelElementName_container',
  channelHashContainers: 'ChannelElementHash_container',
  filterInputs: 'FilterInput_input',
  channelFilterStar: 'ChannelFilter_star',
  activityToggleButtons: 'ToggleButton_container',
  activityContainer: 'MessagePanel_container',
  desktopNavigation: 'NavigationContent_container',
  messageInput: 'MessageInputTextArea_container',
  messageInputInsertStampButton: 'MessageInputInsertStampButton_container',
  stamps: 'StampPickerStampList_stampListItem',
  messages: 'MessageElement_body',
  unreadSeparator: 'MessagesScroller_unreadSeparator',
  openSidebar: 'ChannelSidebarHidden_icon',
  closeSidebar: 'CloseButton_circle',
  sidebarContent: 'SidebarContentContainer_container',
  messageToolsContainer: 'MessageTools_container',
  messageToolsIcon: 'MessageTools_icon',
  messageToolsMenu: 'MessageToolsMenu_text',
  messagesScroller: 'MessagesScroller_root',
  desktopToolBox: 'DesktopToolBox_container',
};

export const getAllElementsByClassName = <T extends Element>(
  className: string
): NodeListOf<T> => document.querySelectorAll<T>(`[class*=${className}]`);

export const getElements = {
  navigations: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.navigations),
  channelContainers: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.channelContainers),
  channelNameContainers: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.channelNameContainers),
  channelHashContainers: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.channelHashContainers),
  filterInputs: (): NodeListOf<HTMLInputElement> =>
    getAllElementsByClassName(classPrefix.filterInputs),
  channelFilterStar: (): NodeListOf<HTMLButtonElement> =>
    getAllElementsByClassName(classPrefix.channelFilterStar),
  activityToggleButtons: (): NodeListOf<HTMLButtonElement> =>
    getAllElementsByClassName(classPrefix.activityToggleButtons),
  activityContainer: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.activityContainer),
  desktopNavigation: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName<HTMLDivElement>(classPrefix.desktopNavigation),
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
  unreadSeparator: (): HTMLDivElement =>
    getAllElementsByClassName<HTMLDivElement>(classPrefix.unreadSeparator)[0],
  openSidebar: (): NodeListOf<SVGElement> =>
    getAllElementsByClassName(classPrefix.openSidebar),
  closeSidebar: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.closeSidebar),
  sidebarContent: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.sidebarContent),
  messageToolsContainer: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.messageToolsContainer),
  messageToolsIcon: (): NodeListOf<SVGElement> =>
    getAllElementsByClassName(classPrefix.messageToolsIcon),
  messageToolsMenu: (): NodeListOf<HTMLSpanElement> =>
    getAllElementsByClassName(classPrefix.messageToolsMenu),
  messagesScroller: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.messagesScroller),
  desktopToolBox: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.desktopToolBox),
};
