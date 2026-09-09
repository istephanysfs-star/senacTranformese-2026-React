import { Link } from "react-router";
import { useState } from 'react';
function Auth() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
     const [mensagem, setMensagem] = useState('')

    function handleLogin (){
      const users = JSON.parse(localStorage.getItem('users'))
       let user = users.find (u =>{
                return u.email == email 
            });
            if(!user){
                setMensagem ("usuario não encontrado")
                return
            }
            
            if(user.senha == pass){
                
            }else{ 
                setMensagem ("usuario não encontrado")

            }

    }
    return (
        <>
            <div className="h-full flex items-center justify-center min-h-screen bg-pink-100">
                <div className="w-1/5 max-w-sm my-auto p-8 bg-feature bg-pink-200 rounded-2x1 shadow-lg flex flex-col gap-5 border-pink-200 rounded-md">
                    
                    <Link className="py-1 rounded-full font-medium trasition-all text-white text-center bg-pink-500 hover:bg-pink-600 shadow-lg shadow-pink-300/40 hover:shadow-x1" 
                    to="/" > 
                    Voltar</Link>
                    
                    <form className="flex flex-col text-center gap-2">
                        <label className="text-pink-900 font-medium text-center">Email</label>
                         <input
                            id="iEmailLogin"
                            type="email"
                            value={email}
                            placeholder="Digite o seu email cadastrado"
                            className="w-full px-4 rounded-full py-3 border-2 border-pink-300 rounded-x1 text-center text-pink-900 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-pink-50"
                            onChange={(e) => setEmail(e.target.value)} /* target= alvo value=valor do alvo, sempre no input*/
                          />
                           {email} 

                        
                        <div className="flex flex-col text-center gap-2"></div>
                        <label className="text-pink-900 font-medium text-center">Senha</label>

                        <input
                            id="iPassLogin"
                            type="password"
                            value={senha}
                            placeholder="Digite sua senha cadastrada"
                            className="w-full px-4 rounded-full py-3 border-2 border-pink-300 rounded-x1 text-center text-pink-900 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-pink-50"
                             onChange={(e) => setSenha(e.target.value)}
                        />
                        <div className="h-2"></div>
                          {senha}

                        <a onClick={handlerLogin} className="py-1 rounded-full font-medium trasition-all text-white text-center bg-pink-500 hover:bg-pink-600" >Entrar</a>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Auth; 