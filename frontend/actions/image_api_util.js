const cloudinary = require('cloudinary');
const keys = require('../../config/keys');
import axios from 'axios';
import { UPLOAD_IMAGE } from './types';

export const uploadImage = () => {
  return (dispatch) => {
    axios.post('/api/upload').then(res => dispatch({
      type: UPLOAD_IMAGE,
      payload: res.data
    }));
  };
};

cloudinary.config(keys.cloudinaryKey);

