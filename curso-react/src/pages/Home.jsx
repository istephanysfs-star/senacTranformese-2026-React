import { Link } from "react-router";
function Home() {
    return ( //*tudo aqui é html e do lado de fora da () é js*//
        <>
            <nav class="flex items-center py-3 px-4 shadow-lg fixed top-0 w-full bg-pink-200 rounded-full">
                <Link class="mr-2 p-3 hover:bg-pink-600 hover:text-white rounded-full" to="#about">Sobre</Link>
                <Link class="mr-2 p-3 hover:bg-pink-600 hover:text-white rounded-full" to="#prices">Preços</Link>
                <Link class="mr-2 p-3 hover:bg-pink-600 hover:text-white rounded-full" to="#features">Benefícios</Link>
                < Link class="mr-5 py-2 px-4 bg-pink-600 hover:shadow-inner rounded text-white ml-auto shadow rounded-full" to="/auth" >Acessar</Link>
            </nav>
            <div class="min-h-screen pt-24 pb-12 px-4  mx-auto py-5 max-w-lg">
                <div classname="bg-white rounded-3x1 shadow-2x1 shadow-pink-200 p-8 md:p-12 border border-pink-200">

                    <h1 class="text-center text-2x1 font-primary text-pink-800 mb-8">Sobre o Curso Popular</h1>

                    <p classname= "text-pink-900 leanding-relaxed mb-4 text-justify">
                        O <b>Curso Popular</b> é uma plataforma de estudos <em>100% gratuita</em>,
                        criada para ajudar estudantes a se organizarem melhor,
                        encontrarem oportunidades e se prepararem para processos seletivos,
                        vestibulares, bolsas, editais e outras oportunidades educacionais.
                    </p>

                    <p>
                        A proposta é reunir em um único lugar informações importantes,
                        ferramentas de organização e recursos de estudo para que você
                        tenha mais autonomia durante sua preparação.
                    </p>

                    <p>
                        Você poderá acompanhar oportunidades, organizar seus estudos,
                        praticar exercícios, realizar simulados e acompanhar sua evolução.
                    </p>

                    <h3>Educação gratuita de verdade</h3>

                    <p>
                        Não existe mensalidade, assinatura ou plano premium.
                        Todo o conteúdo da plataforma é <i>gratuito</i>.
                    </p>
                    <h2 className= " text-x1 font-semibold text-pink-700 mb-3 text-center">
                        Ajude o Curso Popular a continuar gratuito</h2>

                    <p>
                        O <b>Curso Popular</b> é um projeto <i>gratuito</i> e depende
                        da colaboração de pessoas que acreditam
                        que educação deve ser acessível para todos.
                    </p>

                    <p>
                        Se a plataforma ajudar você e estiver dentro das suas possibilidades,
                        você pode contribuir voluntariamente para ajudar
                        na manutenção e evolução do projeto.
                    </p>

                    <p>
                        <b>Contato para apoiar o projeto:</b>
                    </p>

                    <p>
                        A doação é totalmente opcional.
                        Você poderá utilizar a plataforma mesmo sem realizar qualquer contribuição.</p>
                    <h2 className= " text-x1 font-semibold text-pink-700 mb-3 text-center"
                    >O que você ganha usando a plataforma?</h2>
                    <article>
                        <h3>Não perca mais oportunidades</h3>

                        <p>
                            Acompanhe editais, datas de abertura, encerramento das inscrições,
                            pedidos de isenção e outros prazos importantes em um único lugar.
                        </p>

                        <p>
                            Assim, você consegue se organizar com antecedência
                            e reduz o risco de perder uma oportunidade simplesmente
                            porque não ficou sabendo do prazo.
                        </p>
                    </article>

                    <article>
                        <h3>Tenha clareza sobre o que estudar</h3>

                        <p>
                            Organize os conteúdos que precisam ser estudados
                            e marque aquilo que você já concluiu.
                        </p>

                        <p>
                            Em vez de estudar sem saber se está avançando,
                            você consegue visualizar seu progresso e identificar
                            quais assuntos ainda precisam de atenção.
                        </p>
                    </article>
                    <footer>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Home;
