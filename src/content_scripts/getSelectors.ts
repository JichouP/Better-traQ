// regex \.\w+

/**
 * Selectorのリストを返す関数
 */
const getSelectors = (): Record<SelectorEnum, string | null> => {
  /**
   * ホームチャンネルが存在するかどうか
   */
  const homeChannelExists: boolean =
    document.querySelector(
      "#app > div > div > div > div > div > div > div > div > div:nth-child(1) > div > h3"
    )?.innerHTML === "ホームチャンネル";

  return {
    popupNavigator:
      "#app > div > div > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)",
    previousPage: "#popup-navigator > div > div:nth-child(1)",
    nextPage: "#popup-navigator > div > div:nth-child(2)",
    navigationSelectorHomeTab:
      "#app > div > div > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)",
    navigationBarHomeHomeChannel: homeChannelExists
      ? "#app > div > div > div > div > div > div > div > div > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1)"
      : null,
    navigationBarHomeTopUnreadChannel: homeChannelExists
      ? "#app > div > div > div > div > div > div > div > div > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2)" // ホームチャンネルが存在する場合は2番目
      : "#app > div > div > div > div > div > div > div > div > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1)", // ホームチャンネルが存在しない場合は1番目
    navigationSelectorChannelsTab:
      "#app > div > div > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)",
    navigationSelectorActivityTab:
      "#app > div > div > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(4)",
    navigationSelectorUsersTab:
      "#app > div > div > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(5)",
    navigationSelectorClipTab:
      "#app > div > div > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(6)",
    sidebarOpener: "#sidebar-opener > div > svg",
  };
};

export default getSelectors;
