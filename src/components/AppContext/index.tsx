import { createContext, useEffect, useState } from "react"
import { getAllStorage } from "../../service/Storage"
import {login} from "../../service/Login"
interface IAppContext {
    user: string | {},
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
}
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)

    const storage = getAllStorage()

    useEffect(() => {
      if(storage){
        const { login } = JSON.parse(storage)
        setIsLoggedIn(login)
      }
    }, [storage])

    const user = login
  
    return (
      <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
        { children }
      </AppContext.Provider>
    )
}