
// import hotReload from "@/utils/hotReload";


// hotReload()

const color = '#3aa757';
 /* eslint-disable */
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});