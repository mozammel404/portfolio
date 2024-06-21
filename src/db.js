import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let initDB = async () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCe91oZSIBBzv8ZAg0PvJLbPMYyEHHPCQg",
        authDomain: "portfolio-6305d.firebaseapp.com",
        projectId: "portfolio-6305d",
        storageBucket: "portfolio-6305d.appspot.com",
        messagingSenderId: "77422019771",
        appId: "1:77422019771:web:a0f823fdec0513c166959e"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
}

export default initDB;