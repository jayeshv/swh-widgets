const baseURL = 'https://archive.softwareheritage.org/api/1/';
const auth = '';

// function http() {
// }

export async function ApiGet(api) {
  return await fetch(baseURL + '/' + api);
}
