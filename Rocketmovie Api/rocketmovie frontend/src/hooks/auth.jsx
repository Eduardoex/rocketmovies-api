import { createContext ,useContext, useState, useEffect } from "react";
import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [data, setData] = useState({})
 
 async function signIn({email, password}){
    try {
        const response = await api.post("/sessions", { email, password })
        const { user, token } = response.data;
    
          localStorage.setItem("@rocketmovie:user", JSON.stringify(user));
          localStorage.setItem("@rocketmovie:token", token);
    
          api.defaults.headers.common["authorization"] = `Bearer ${token}`
          setData({ user, token})
    

    }catch(error){
        if(error.response){
        alert(error.response.data.message)
    } else {
        alert("Não foi possivel entrar")
    }
    
   
    }
}
function signOut(){
    localStorage.removeItem("@rocketmovie:token")
    localStorage.removeItem("@rocketmovie:user")

    setData({});
  }

async function updateProfile({ user, avatarFile }){
  if(avatarFile){
    const fileUploadForm = new FormData()
    fileUploadForm.append("avatar", avatarFile)

    const response = await api.patch("/users/avatar", fileUploadForm)
    user.avatar = response.data.avatar
  }

    try{
        await api.put("/users", user)
        localStorage.setItem("@rocketmovie:user", JSON.stringify(user))

        setData({user, token: data.token});
        alert("perfil atualizado")
       

    }catch(error){



    if(error.response){

      alert(error.response.data.message)
    }else{
      alert("não foi possivel atualizar o perfil")
    }
  }

  }




useEffect (() => {
    const token = localStorage.getItem("@rocketmovie:token")
    const user = localStorage.getItem("@rocketmovie:user")

    if(token && user){
        api.defaults.headers.common["authorization"] = `Bearer ${token}`
        setData({
            token,
            user: JSON.parse(user)
        })
    }
}, [])
 return(
    <AuthContext.Provider value={{ 
        signIn, 
        updateProfile,
        signOut,
        user: data.user
         }}>
        {children}
      </AuthContext.Provider>
    )
}

function useAuth(){
const context = useContext(AuthContext)

return context;
}

export { AuthProvider, useAuth }
