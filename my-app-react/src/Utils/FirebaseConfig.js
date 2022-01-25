
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'


const firebaseConfig = {
 /* configuração do firebase*/
};

// eslint-disable-next-line no-unused-vars
const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;

