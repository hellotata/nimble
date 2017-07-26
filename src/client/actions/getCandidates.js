import { GET_CANDIDATES } from '../constants/actionTypes';

const getCandidates = () => dispatch => {
  fetch('/candidates', {
    credentials: 'include'
  })
  .then(res => res.json())
  .then(candidates => {
    dispatch({
      type: GET_CANDIDATES,
      payload: candidates
    });
  });
};

export default getCandidates;
