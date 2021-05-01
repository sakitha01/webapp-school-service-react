import axios from 'axios';

export default
   axios.create({
      baseURL: 'localhost:8090',
      timeout: 2000
   });