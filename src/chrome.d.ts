declare namespace chrome {
  namespace contextMenus {
    type ContextType = 'selection';

    interface CreateProperties {
      id?: string;
      title: string;
      contexts?: ContextType[];
    }

    interface OnClickData {
      menuItemId: string | number;
      selectionText?: string;
    }

    interface MenuClickedEvent {
      addListener(callback: (info: OnClickData, tab?: tabs.Tab) => void): void;
    }

    function create(createProperties: CreateProperties, callback?: () => void): void;
    function removeAll(callback?: () => void): void;
    const onClicked: MenuClickedEvent;
  }

  namespace runtime {
    type OnInstalledReason = 'install' | 'update' | 'chrome_update' | 'shared_module_update';

    interface OnInstalledDetails {
      reason: OnInstalledReason;
    }

    interface RuntimeInstalledEvent {
      addListener(callback: (details: OnInstalledDetails) => void): void;
    }

    const onInstalled: RuntimeInstalledEvent;
  }

  namespace tabs {
    interface Tab {
      id?: number;
      index?: number;
    }

    interface CreateProperties {
      url?: string;
      index?: number;
      openerTabId?: number;
      active?: boolean;
    }

    function create(createProperties: CreateProperties, callback?: (tab: Tab) => void): void;
  }
}
