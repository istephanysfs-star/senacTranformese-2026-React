import { Link } from "react-router";
import { useState } from 'react';
function Painel() {
    const [modal, setModal] = useState(false) //bollean
    const [users, setUsers] = useState([])   //vetor 
    const [user, setUser] = useState({})  //objeto
        function handleRegister() {
            const newUsers = [...users, user]
            setUsers(newUsers);
            localStorange.setItem('users', JSON.stringify(newUsers));
            setModal(false)
            setUser({})
        }


    return (


        <>
            <h3 id="hello"></h3>
            {modal && (
                (<div
                    id="modalRegister"
                    className="fixed flex top-0 right-0 bottom-0 
            left-0 items-center justify-center bg-black/50 z-50 h-full flex items-center justify-center min-h-screen bg-pink-100">

                    <div className="relative max-w-md w-full p-5 bg-about rounded-lg 
            shadow-md flex flex-col bg-white">

                        <a id="btClose"
                            className="bg-prices absolute top-0 right-0 px-2 
                rounded-full cursor-pointer bg-pink-200 text-pink-900" onClick={() => setModal(false)}>
                            X
                        </a>
                        <h2 className="text-pink-900 font-medium text-center"> Cadastre um novo usuário</h2>
                        <p className="text-pink-400 font-medium text-center">Preencha as informações abaixo</p>

                        
                        <form className="flex flex-col text-center gap-2 ">
                            <label className="text-pink-900 font-medium text-center p-3">Nome</label>
                            <input onChange={(e) => setUser({ ...user, nome: e.target.value })}
                                id="iName"
                                type="text"
                                placeholder="Digite seu nome completo"
                                className="w-full px-4 rounded-full py-2 border-2 border-pink-300 rounded-x1 text-center text-pink-900 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-pink-50" />

                            <label className="text-pink-900 font-medium text-center p-3 ">Email</label>
                            <input onChange={(e) => setUser({ ...user, Email: e.target.value })}
                                id="iEmail"
                                type="email"
                                placeholder="Digite o seu melhor email"
                                className="w-full px-4 rounded-full py-2 border-2 border-pink-300 rounded-x1 text-center text-pink-900 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-pink-50" />

                            <label className="text-pink-900 font-medium text-center p-3">Senha</label>
                            <input onChange={(e) => setUser({ ...user, Senha: e.target.value })}
                                id="iPass"
                                type="password"
                                placeholder="Letra maiúscula e números"
                                className="w-full px-4 rounded-full py-2 border-2 border-pink-300 rounded-x1 text-center text-pink-900 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-pink-50" />

                            <label className="text-pink-900 font-medium text-center p-3">Data de Nascimento</label>
                            <input onChange={(e) => setUser({ ...user, Nascimento: e.target.value })}
                                id="iBirth"
                                type="date"
                                className="w-full px-4 rounded-full py-2 border-2 border-pink-300 rounded-x1 text-center text-pink-900 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-pink-50" />

                            <label className="p-4" ></label>
                            <a
                                id="formRegister"
                                onClick={handleRegister} className=" py-2 rounded-full font-medium trasition-all text-white text-center bg-pink-500 hover:bg-pink-600">Salvar</a>
                        </form>
                    </div>
                </div>)
            )}

            <table className="text-pink-900 font-medium text-center p-3 bg-pink-200 rounded-full" >
                <thead>
                    <th >Nome</th>
                    <th>Email</th>
                    <th>Ações</th>
                </thead>
                <tbody id="listUsers" className="font-secondary">

                </tbody>
            </table>

            <a onClick={()=> setModal(true)} className="rounded-full bg-pink-900 text-pink-200 px-6 py-0 fixed top-0 right-0 rounded-full "> + </a>
        </>
    )
}

export default Painel;