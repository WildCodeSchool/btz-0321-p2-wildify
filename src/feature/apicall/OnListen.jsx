let fetchObj;

function fetchAPI() {
  fetch('https://bazify-backend.basile.vernouillet.dev/api/v1/songs')
    .then((res) => res.json())
    .then(
      (result) => {
        fetchObj = result;

        return result;
      },

      (error) => {},
    );

  return fetchObj;
}

export default fetchAPI;
