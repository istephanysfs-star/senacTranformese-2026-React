import { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabase';

function Painel() {
    const [modal, setModal] = useState(false) //bollean
    const [users, setUsers] = useState([])   //vetor 
    const [user, setUser] = useState({})  //objeto
    const [logged, setLogged] = useState({})
    const [spiner, setSpiner]= useState (false);
    const [msg, setMsg] = useState('');

    useEffect(
        () => {
            const logged = JSON.parse(localStorage.getItem('logado'))
            setLogged(logged)
        },
        []
    );

    useEffect(() => {
        const userTemp = JSON.parse(localStorage.getItem('users'))
        if (userTemp) setUsers(userTemp)
    }, []);

    async function handleRegister() {
        setSpiner (true)
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email: user.email,
            password: user.senha
        });
        if(authError){
            //console.log(authError)
            setMsg(authError.message)
            setSpiner (false)
            return;
        }
        if(!authData){
            setMsg("não foi possivel cadastrar, verifique a internet")
            setSpiner(false)
            return;

        }
        
        const { data:loginData, error: loginError} = await supabase.auth.signInWithPassword({
            email: user.email,
            password: user.senha
        });
        const {error: profileError } = await supabase
        .from('profiles')
        .insert({
            user_id: loginData.user.id,
            full_name: user.nome,
            birth: user.nascimento,
            cpf: user.cpf
        });
        if(profileError){
            //console.log(authError)
            setMsg(profileError.message)
            setSpiner (false)
            return;
        }
        setSpiner(false)
    }

    function updateUser(pUser) {
        setModal(true)
        setUser(pUser)
    }

    return (
        <>
            <h3 className="text-pink-900 font-medium text-center p-3 ">Bem vindo {logged?.nome}</h3>

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
                            <input value={user.nome} onChange={(e) => setUser({ ...user, nome: e.target.value })}
                                id="iName"
                                type="text"
                                placeholder="Digite seu nome completo"
                                className="w-full px-4 rounded-full py-2 border-2 border-pink-300 rounded-x1 text-center text-pink-900 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-pink-50" />

                            <label className="text-pink-900 font-medium text-center p-3 ">Email</label>
                            <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}
                                id="iEmail"
                                type="email"
                                placeholder="Digite o seu melhor email"
                                className="w-full px-4 rounded-full py-2 border-2 border-pink-300 rounded-x1 text-center text-pink-900 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-pink-50" />
                            
                            <label className="text-pink-900 font-medium text-center p-3">Senha</label>
                            <input onChange={(e) => setUser({ ...user, senha: e.target.value })}
                                id="iPass"
                                type="password"
                                placeholder="Letra maiúscula e números"
                                className="w-full px-4 rounded-full py-2 border-2 border-pink-300 rounded-x1 text-center text-pink-900 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-pink-50" />

                             <label className="text-pink-900 font-medium text-center p-3">CPF</label>
                            <input value={user.cpf} onChange={(e) => setUser({ ...user, cpf: e.target.value })}
                                type="text"
                                placeholder="000.000.000 - 00"
                                className="w-full px-4 rounded-full py-2 border-2 border-pink-300 rounded-x1 text-center text-pink-900 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-pink-50" />

                               <label className="text-pink-900 font-medium text-center p-3">Nº de telefone</label>
                            <input onChange={(e) => setUser({ ...user, telefone: e.target.value })}
                                type="text"
                                 placeholder= "(00)00000-0000"
                                className="w-full px-4 rounded-full py-2 border-2 border-pink-300 rounded-x1 text-center text-pink-900 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-pink-50" /> 

                            <label className="text-pink-900 font-medium text-center p-3">Data de Nascimento</label>
                            <input onChange={(e) => setUser({ ...user, Nascimento: e.target.value })}
                                id="iBirth"
                                type="date"
                                className="w-full px-4 rounded-full py-2 border-2 border-pink-300 rounded-x1 text-center text-pink-900 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-pink-50" />

                            <label className="p-4" ></label>
                            <a
                                id="formRegister"
                                onClick={handleRegister} className=" py-2 rounded-full font-medium trasition-all text-white text-center bg-pink-500 hover:bg-pink-600">
                                    {spiner? '...':'salvar'}

                                    </a>
                                    {msg}
                        </form>
                    </div>
                </div>)
            )}

            <table className="text-pink-900 font-medium text-center p-3 bg-pink-200 rounded-full" >
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody id="listUsers" className="font-secondary">
                    {users.map(u => (
                        <tr>
                            <td>{u.nome}</td>
                            <td>{u.email}</td>
                            <a className="cursor-point px-3 mx-4 hover-shadow shador-md text-white rounded-full bg-pink-500"
                                onClick={() => updateUser(u)}
                            >V</a>
                            <a className="cursor-point px-3 mx-4 hover-shadow shador-md text-white rounded-full bg-pink-900"
                                onClick={() => removerU(u)}>X</a>
                        </tr>
                    ))}
                </tbody>
            </table>

            <a onClick={() => setModal(true)} id="addUser" className="rounded-full bg-pink-900 text-pink-200 px-6 py-0 fixed top-0 right-0 rounded-full ">Cadastre-se</a>
        </>
    )
}

export default Painel;