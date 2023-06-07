import HomePageAppBar from '../routes/components/HomePageAppBar.svelte';
import MainAppBar from '../routes/components/MainAppBar.svelte';

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