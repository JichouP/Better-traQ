const classPrefix = {
  navigations: '_item_', // _container_zd9i2_1
  channelContainers: '_container_clmmo_',
  channelNameContainers: '_container_sfb6m_1',
  channelHashContainers: '_channelHash_clmmo_',
  channelHashContainersHash: '_hash_',
  filterInputs: '_input_',
  channelFilterStar: '_star_',
  popupNavigatorButtons: '_popupNavigatorItem_',
  activityToggleButtons: 'ToggleButton_container',
  activityContainer: 'MessagePanel_container',
  desktopNavigation: 'NavigationContent_container',
  headerContainer: '_headerContainer_',
  headerChannelName: '_header_',
  messageInput: '_textarea_',
  messageInputInsertStampButton: '_container_155zf_1',
  stamps: 'StampPickerStampList_stampListItem',
  messages: '_body_',
  unreadSeparator: 'MessagesScroller_unreadSeparator',
  nomoreSeparator: 'MessagesScroller_noMoreSeparator',
  userContainers: 'UsersElement_container',
  openSidebar: 'ChannelSidebarHidden_icon',
  closeSidebar: 'CloseButton_circle',
  sidebarContent: 'SidebarContentContainer_container',
  messageToolsContainer: '_tools_',
  messageToolsIcon: '_icon_924z4_46',
  messageToolsMenu: 'MessageToolsMenu_text',
  messagesScroller: 'MessagesScroller_root',
  desktopToolBox: 'DesktopToolBox_container',
  spoiler: 'spoiler',
};

export const getAllElementsByClassName = <T extends Element>(
  className: string,
  element?: Element
): NodeListOf<T> =>
  element
    ? element.querySelectorAll<T>(`[class*=${className}]`)
    : document.querySelectorAll<T>(`[class*=${className}]`);

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
    getAllElementsByClassName(classPrefix.channelNameContainers),
  // getChannelsInView(classPrefix.channelNameContainers),
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
    getAllElementsByClassName<HTMLDivElement>(classPrefix.headerContainer)[1],
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
  userContainers: (): NodeListOf<HTMLDivElement> =>
    getAllElementsByClassName<HTMLDivElement>(classPrefix.userContainers),
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
