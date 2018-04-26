
import axios from 'axios';
import { UPLOAD_IMAGE } from '../actions/types';

export const uploadImage = (fileData) => {
  console.log("File Data: " + fileData);
  return (dispatch) => {
    console.log("Inside dispatch");
    
    axios.post('/api/upload', fileData).then(res => {
      console.log("response" + res);
      
      return dispatch({
        type: UPLOAD_IMAGE,
        payload: res.data
      });
    });
  };
};
