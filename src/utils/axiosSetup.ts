import axios from 'axios'

axios.defaults.baseURL = 'https://paper-app-8a138.firebaseio.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
