import { useState } from "react";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Register user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth,email, password);
            // Create user document in Firestore
            await db.collection('users').doc(userCredential.user.uid).set({
                //displayName: displayName,
                email: email,
                shoppingCart: {},
                // You can add more user data here
            });       

            // Clear form fields
            setEmail('');
            setPassword('');
            setDisplayName('');
            setError(null);
        } catch (err) {
            console.error('Error registering user:', err);
        }
    }

    
    return (
        <div className="login">
            <form onSubmit={handleRegister}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="text" // Change type to text for display name
                    placeholder="Display Name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)} // Capture display name input
                />
                <button type="submit">Register</button>
                {error && <span>Not valid</span>}
            </form>
        </div>
    );
};

export default Register;
