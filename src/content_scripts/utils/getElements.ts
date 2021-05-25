const classPrefix = {
  navigations: 'NavigationSelectorItem_container',
  channelContainers: 'ChannelElement_container',
  channelNameContainers: 'ChannelElementName_container',
  channelHashContainers: 'ChannelElementHash_container',
  channelHashContainersHash: 'ChannelElementHash_hash',
  filterInputs: 'FilterInput_input',
  channelFilterStar: 'ChannelFilter_star',
  popupNavigatorButtons: 'PopupNavigator_popupNavigatorItem',
  activityToggleButtons: 'ToggleButton_container',
  activityContainer: 'MessagePanel_container',
  desktopNavigation: 'NavigationContent_container',
  headerContainer: 'MainViewHeader_container',
  headerChannelName: 'HeaderChannelName_container',
  messageInput: 'MessageInputTextArea_container',
  messageInputInsertStampButton: 'MessageInputInsertStampButton_container',
  stamps: 'StampPickerStampList_stampListItem',
  messages: 'MessageElement_body',
  unreadSeparator: 'MessagesScroller_unreadSeparator',
  nomoreSeparator: 'MessagesScroller_noMoreSeparator',
  openSidebar: 'ChannelSidebarHidden_icon',
  closeSidebar: 'CloseButton_circle',
  sidebarContent: 'SidebarContentContainer_container',
  messageToolsContainer: 'MessageTools_container',
  messageToolsIcon: 'MessageTools_icon',
  messageToolsMenu: 'MessageToolsMenu_text',
  messagesScroller: 'MessagesScroller_root',
  desktopToolBox: 'DesktopToolBox_container',
  spoiler: 'spoiler',
};

export const getAllElementsByClassName = <T extends Element>(
  className: string
): NodeListOf<T> => document.querySelectorAll<T>(`[class*=${className}]`);

export const getChannelsInView = <T extends Element>(
  className: string
): NodeListOf<T> => {
  const channelContainers = [
    ...document.querySelectorAll<HTMLDivElement>(
      `[class*="NavigationContent_content"]`
    ),
  ].find((e) => getComputedStyle(e).display !== 'none');
  if (!channelContainers) {
    return getAllElementsByClassName('AAA');
  }
  return channelContainers.querySelectorAll<T>(`[class*=${className}]`);
};

export const getElements = {
  navigations: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.navigations),
  channelContainers: (): NodeListOf<HTMLDivElement> =>
    getChannelsInView(classPrefix.channelContainers),
  channelNameContainers: (): NodeListOf<HTMLDivElement> =>
    getChannelsInView(classPrefix.channelNameContainers),
  channelHashContainers: (): NodeListOf<HTMLDivElement> =>
    getChannelsInView(classPrefix.channelHashContainers),
  channelHashContainersHash: (): NodeListOf<HTMLDivElement> =>
    getChannelsInView(classPrefix.channelHashContainersHash),
  filterInputs: (): NodeListOf<HTMLInputElement> =>
    getAllElementsByClassName(classPrefix.filterInputs),
  channelFilterStar: (): NodeListOf<HTMLButtonElement> =>
    getAllElementsByClassName(classPrefix.channelFilterStar),
  popupNavigatorButtons: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.popupNavigatorButtons),
  activityToggleButtons: (): NodeListOf<HTMLButtonElement> =>
    getAllElementsByClassName(classPrefix.activityToggleButtons),
  activityContainer: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName(classPrefix.activityContainer),
  desktopNavigation: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName<HTMLDivElement>(classPrefix.desktopNavigation),
  headerContainers: (): HTMLDivElement =>
    getAllElementsByClassName<HTMLDivElement>(classPrefix.headerContainer)[0],
  headerChannelName: (): HTMLDivElement =>
    getAllElementsByClassName<HTMLDivElement>(classPrefix.headerChannelName)[0],
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
  nomoreSeparator: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName<HTMLDivElement>(classPrefix.nomoreSeparator),
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
  spoilersInElement: (parent: HTMLDivElement): NodeListOf<HTMLSpanElement> => {
    return parent.querySelectorAll(`.${classPrefix.spoiler}`);
  },
};
