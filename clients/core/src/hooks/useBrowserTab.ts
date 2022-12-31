import { useState, useEffect } from "react";

export const useBrowserTab = () => {
  const [currentTab, setCurrentTab] = useState<chrome.tabs.Tab | null>(null);

  return currentTab;
};
