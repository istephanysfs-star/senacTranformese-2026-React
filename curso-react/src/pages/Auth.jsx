import { Link } from "react-router";
import { useState } from 'react';
function Auth() {
    const [melancia, setMelancia] = useState(2);
    function sub() {
        setMelancia(melancia - 1)
    }
    return (
        <>
            <div className="h-full flex items-center min-h-screen bg-pink-50">
                <div className="w-1/6 mx-auto my-auto p-5 bg-feature rounded-lg shadow-md flex flex-col border-pink-100">

                    <Link className="mb-3 bg-primary text-white text-center rounded-md bg-pink-500" to="/" > Voltar</Link>
                    <div className="bg-red-100 rounded-full p-2" onClick={sub}>-</div>
                    {melancia}
                    <div className="bg-green-100 rounded-full p-2" onClick={ () => setMelancia(melancia + 1)}>+</div>
                    <form className="flex flex-col text-center">
                        Email: <input id="iEmailLogin" type="email" placeholder="Digite o seu email cadastrado" />

                        Senha: <input id="iPassLogin" type="password" placeholder="Digite sua senha cadastrada" />

                        <Link id="btLogin" className="mt-5 bg-primary text-white text-center rounded-md py-1" >Entrar</Link>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Auth; 