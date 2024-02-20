import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDsralxVArog33vTrt_Kyha-9himL7Eiqg",
  authDomain: "restaurant-web-bdc23.firebaseapp.com",
  projectId: "restaurant-web-bdc23",
  storageBucket: "restaurant-web-bdc23.appspot.com",
  messagingSenderId: "430911610459",
  appId: "1:430911610459:web:13dee877048fc134e5a97e",
  measurementId: "G-GTSC1HZB2V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };  // Exporting auth, db, and storage for external usage
