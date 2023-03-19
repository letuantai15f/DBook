
const firebase = require("firebase/app");

const {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    onAuthStateChanged,
    updateProfile,
} = require("firebase/auth");
const firebaseConfig = {
    apiKey: "AIzaSyBDc3BiVht3eLrFPOpRiPAIM1BjaakVFx4",
    authDomain: "dbook-5e323.firebaseapp.com",
    projectId: "dbook-5e323",
    storageBucket: "dbook-5e323.appspot.com",
    messagingSenderId: "1004453535137",
    appId: "1:1004453535137:web:4f24ab9319e6a6dbebffe0",
    measurementId: "G-N4JKNC7ZZB"
};
firebase.initializeApp(firebaseConfig);
const auth = getAuth();



const signUp = async (email, password) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, {
        displayName: "User",
    });
    await sendEmailVerification(result.user);
    return result;
}
const authEmail = async (email, password, req, res) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        if (result.user.emailVerified) {
            return {status:"Verified"}
        } else {
            return {status:"Unverified"};
        }
    } catch (error) {
        return {status:"Erro"};
    }
}

module.exports = { signUp,authEmail }
