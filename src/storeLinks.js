// module to save shortened links to local storage

const LOCAL_STORAGE_KEY = "FEM-URL-SHORTENING-LANDING-PAGE";

export function saveLinksToStore(links) {
  const linksStr = JSON.stringify(links);
  localStorage.setItem(LOCAL_STORAGE_KEY, linksStr);
}

export function getLinksFromStore() {
  let links = [];
  const linksStr = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (linksStr !== null) {
    links = JSON.parse(linksStr);
  }
  return links;
}
