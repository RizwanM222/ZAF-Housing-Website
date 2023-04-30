import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/init";
import { collection, addDoc, getDocs, getDoc, doc, query, where, updateDoc } from "firebase/firestore"
import { onAuthStateChanged, signOut, updateCurrentUser } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { Route, Redirect } from 'react-router-dom';
import UrgentContact from "./UrgentContact";

const defaultPost = {
    title: '',
    content: ''
};

const Account = () => {

    /* CONFIRMING LOG IN AND LOG OUT & ACCOUNT PAGE */
        
    const navigate = useHistory();
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuthUser(user);
        } else {
            setAuthUser(null);
            navigate.push("/");
        }
        });
        return () => {
        listen();
        };
    }, []);

    const [noLogin, setNoLogin] = React.useState({});

    const userSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log("Successfully Signed Out");
            navigate.push("/");
        })
        .catch((error) => console.log(error));
    };

    /* CONFIRMING LOG IN AND LOG OUT & ACCOUNT PAGE */

    // INFO BY ID

    const [post, setPost] = useState(defaultPost);

    async function getInfoById () {
        if (!authUser) {
            return;
        }
        const infoId = authUser.uid;
        const postRef = doc(db, "users", infoId);
        const postSnap = await getDoc(postRef);
        const post = postSnap.data();
        setPost(post || defaultPost);
        return post;
    }

    useEffect(() => {
        getInfoById();
    }, []); // call getInfoById only when the component mounts

    // TESTING DISPLAY DATA

    // INFO BY UID

    async function getInfoByUid () {
        const postCollectionRef = await query(
            collection(db, "users"),
            where("uid", "==", authUser.uid)
        );
        const { docs } = await getDocs(postCollectionRef);
        console.log(docs.map(doc => doc.data()));
    }

    //UPDATING NAME

    async function getTestById(testId) {
        const postRef = doc(db, "users", testId);
        const postSnap = await getDoc(postRef);
        return postSnap.data();
    }

    const [updateName, setUpdateName] = useState('');
    const [updateEmail, setUpdateEmail] = useState('');
    const [updateNumber, setUpdateNumber] = useState('');

    async function setName() {
        const testId = authUser.uid;
        const postRef = doc(db, "users", testId);
        const post = await getTestById(testId);
    
        const newPost = {
          Name: updateName || post.Name,
          Email: post.Email,
          Number: post.Number
        };
    
        await updateDoc(postRef, newPost);
        console.log('works')
    }

    async function setEmail() {
        const testId = authUser.uid;
        const postRef = doc(db, "users", testId);
        const post = await getTestById(testId);
    
        const newPost = {
          Name: post.Name,
          Email: updateEmail || post.Email,
          Number: post.Number
        };
    
        updateDoc(postRef, newPost);
    }

    async function setNumber() {
        const testId = authUser.uid;
        const postRef = doc(db, "users", testId);
        const post = await getTestById(testId);
    
        const newPost = {
          Name: post.Name,
          Email: post.Email,
          Number: updateNumber || post.Number
        };
    
        updateDoc(postRef, newPost);
    }

    function extractUsername(email) {
        var index = email.indexOf("@");
        var username = email.slice(0, index);
        return username.toUpperCase();
    }

    const [openUrgent, setOpenUrgent] = useState(false);

    const [products, setProducts] = useState([]);

  return (

    <div id="account__body"> 

        <div id="account__main">

            <section>

                <div className="account__container">

                    <div className="row">

                        <div className="account__header">

                            <div className="section__title account__header--title">
                                Account
                            </div>

                            {authUser ? (
                            <>
                                <div className="hello__message">{`Welcome, Tenant of  ${extractUsername(authUser.email)}!`}</div>

                                <div className="account__update">

                                    <p className="account__value" ><b>Name:</b> {post.Name}</p>
                                    <div className="input__button">
                                        <input className="account__input" type="text" value={updateName} onChange={(e) => setUpdateName(e.target.value)}/>
                                        <button className="update__button" onClick={setName}>Update</button>
                                    </div>

                                </div>
                            
                                <div className="account__update">

                                    <p className="account__value" ><b>Personal E-mail:</b> {post.Email}</p>
                                    <div className="input__button">
                                        <input className="account__input" type="text" value={updateEmail} onChange={(e) => setUpdateEmail(e.target.value)}/>
                                        <button className="update__button" onClick={setEmail}>Update</button> 
                                    </div>
                                    
                                </div>

                                <div className="account__update">

                                    <p className="account__value" value={getInfoById()}><b>Number:</b> {post.Number}</p>
                                    <div className="input__button">
                                        <input className="account__input" type="number" value={updateNumber} onChange={(e) => setUpdateNumber(e.target.value)}/>
                                        <button className="update__button" onClick={setNumber}>Update</button>
                                    </div>

                                </div>

                                <div className="account__update">

                                    <p className="account__value" ><b>Rent per month:</b> £{post.Rent} per Month</p>
                                    <div className="input__button">
                                        <div className="paid__status">Rent Paid: No</div>
                                        {/* <button className="update__button">Pay Now</button> */}
                                        <a href="https://buy.stripe.com/test_cN2eVk3Z754d9dSaEE" className="update__button">Pay</a>
                                    </div>

                                </div>
                                
                                <div className="account__buttons--wrapper">
                                    
                                    <button className="urgent__contact--btn" onClick={() => {setOpenUrgent(true)}}>
                                        Urgent Contact
                                    </button>
                                    {openUrgent && <UrgentContact closeUrgent={setOpenUrgent}/>}

                                    <button className="signout__btn" onClick={userSignOut}>
                                        Sign Out
                                    </button>

                                </div>

                            </>
                            ) : (
                            <> </>
                            )}
                            
                        </div>
                        
                    </div>

                </div>

            </section>

        </div>

    </div>

  );
  
};

export default Account;
