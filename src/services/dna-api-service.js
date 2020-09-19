import TokenService from './token-service';
import config from '../config';

const DnaApiService = {
  stringifyData(data) {},
  getAllDna(userId) {
    return fetch(`${config.API_ENDPOINT}/dna/user/${userId}`, {
      headers: { authorization: `basic ${TokenService.getAuthToken()}` },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postDna(user_id, name, dna, comment) {
    console.log(user_id);
    return fetch(`${config.API_ENDPOINT}/dna`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        user_id: user_id,
        name: name,
        dna: dna,
        comment: comment,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default DnaApiService;
