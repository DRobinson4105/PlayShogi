import HomePageAppBar from '../../src/lib/components/HomePageAppBar.svelte';
import MainAppBar from '../../src/lib/components/MainAppBar.svelte';

export function getAppBar(url) {
  if (url.pathname === '/') {
    return HomePageAppBar;
  } else if (url.pathname === '/signup' || url.pathname === '/login') {
    return null;
  } else {
    return MainAppBar;
  }
}