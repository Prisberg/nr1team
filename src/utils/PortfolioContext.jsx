import { createContext, useContext, useEffect, useState } from "react";

export const PortfolioContext = createContext({
    username: '',
    setUsername: () => false,
    password: '',
    setPassword: () => false,
    extractLocalStorage: () => false,
})

export default function PortfolioProvider(props) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    // const [lName, setLName] = useState('');
    const [password, setPassword] = useState('');

    function extractLocalStorage() {
        //Function for getting localstorage data. To be used when account created and on first load.
        setEmail(localStorage.getItem('email').replace(/['"]+/g, ''));
        setUsername(localStorage.getItem('fName').replace(/['"]+/g, ''));
        // setLName(localStorage.getItem('lName').replace(/['"]+/g, '')); Use this to autofill email form?
        setPassword(localStorage.getItem('password').replace(/['"]+/g, ''));
    }

    useEffect(() => {
        extractLocalStorage();
    }, [])

    return (
        <PortfolioContext.Provider
            value={{
                email,
                username,
                password,
                extractLocalStorage
            }}
            {...props} />
    )
}

export const usePortfolioContext = () => useContext(PortfolioContext)