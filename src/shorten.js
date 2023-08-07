// sample URL
// https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html

const API_URL = "https://api.shrtco.de/v2/shorten?url=";

const buildRequestUrl = (linkToShorten) => {
  const requestUrl = `${API_URL}${linkToShorten}`;
  return requestUrl;
};

// calls shrtco API with specified link
// sohrtens the link
// returns value or error wrapped in an object
export async function getShortenedLink(linkToShorten) {
  const url = buildRequestUrl(linkToShorten);
  let result;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`shrtco request failed with error: ${response.status}`);
    }
    const shrtcoResult = await response.json();
    result = { isOk: true, value: shrtcoResult };
    return result;
  } catch (error) {
    result = { isOk: false, error: error.message };
    return result;
  }
}
