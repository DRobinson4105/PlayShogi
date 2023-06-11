import Footer from '$lib/components/Footer.svelte';


export function getFooter(url) {
  if (url.pathname === '/signup' || url.pathname === '/login') {
    return null;
  } else {
    return Footer;
  }
}