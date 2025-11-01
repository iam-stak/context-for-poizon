const CONTEXT_MENU_ID = "poizon-context-search";
const SEARCH_BASE_URL = "https://seller.poizon.com/main/goods/search?articleNumList=";

function createOrUpdateContextMenu() {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: CONTEXT_MENU_ID,
      title: 'POIZONバックオフィスで「%s」を検索',
      contexts: ['selection']
    });
  });
}

chrome.runtime.onInstalled.addListener(() => {
  createOrUpdateContextMenu();
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== CONTEXT_MENU_ID) {
    return;
  }

  const selection = (info.selectionText || '').trim();
  if (!selection) {
    return;
  }

  const encodedSelection = encodeURIComponent(selection);
  const url = `${SEARCH_BASE_URL}${encodedSelection}`;

  chrome.tabs.create({
    url,
    index: tab?.index !== undefined ? tab.index + 1 : undefined,
    openerTabId: tab?.id
  });
});
