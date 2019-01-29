const BASE_URL = 'https://randomuser.me/api/';

/*
  https://github.com/RandomAPI/Randomuser.me-Node/issues/103
  Id is not returned consistently from the API unless US natinality is used
*/
export const fetchContacts = () => {
  return fetch(BASE_URL + '?seed=123&results=100&exc=login&noinfo&nat=us')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
    .then(res => res.results)
};
