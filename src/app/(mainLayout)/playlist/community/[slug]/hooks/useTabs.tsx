import { useState } from "react";
import { ReactNode } from "react";
export type Tab = { id: string, slug:string, title:string, hasBadge:boolean, icon:ReactNode};
//returns info on tabs
//sets tab
export function useTabs({
  tabs,
  initialTabId,
  onChange,
}: {
  tabs: Tab[];
  initialTabId: string;
  onChange?: (id: string) => void;
}) {
  const [[selectedTabIndex], setSelectedTab] = useState(() => {
    const indexOfInitialTab = tabs.findIndex((tab) => tab.id === initialTabId);
    return [indexOfInitialTab === -1 ? 0 : indexOfInitialTab, 0];
  });

  return {
    tabProps: {
      tabs,
      selectedTabIndex,
      onChange,
      setSelectedTab,
    },    
  };
}