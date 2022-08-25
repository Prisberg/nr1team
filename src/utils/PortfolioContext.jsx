import { createContext, useContext, useState } from "react";

export const PortfolioContext = createContext({
    username: '',
    setUsername: () => false,
    password: '',
    setPassword: () => false,
})

export default function PortfolioProvider(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(false);

    return (
        <PortfolioContext.Provider
            value={{
                username,
                setUsername,
                password,
                setPassword
            }}
            {...props} />
    )
}

export const usePortfolioContext = () => useContext(PortfolioContext)