import HomePageAppBar from '../../src/lib/components/HomePageAppBar.svelte';
import MainAppBar from '../../src/lib/components/MainAppBar.svelte';

// @ts-ignore
export function getAppBar(url) {
  console.log(url.pathname);
  if (url.pathname === '/') {
    return HomePageAppBar;
  } else if (url.pathname === '/signup' || url.pathname === '/login') {
    return MainAppBar;
  } else {
    return HomePageAppBar;
  }
}