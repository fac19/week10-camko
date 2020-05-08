const token = process.env.REACT_APP_GITHUB_TOKEN


const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    throw new Error('hey')
  }
  return response.json();
};

export const getUserData = username => {
  return fetch(`https://api.github.com/users/${username}?access_token=${token}`)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getUserData failed ${err}`);
    });
};