import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, SetUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            // .then(result => {
            //     SetUser(result.user);
            // })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                SetUser(user);
            }
            else {
                SetUser({})
            }
            setIsLoading(false);

        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;