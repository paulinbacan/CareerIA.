
const profissoes = [
    {
        nome: "Desenvolvedor de Software",
        interesse: "tecnologia",
        habilidade: "logica",
        ambiente: "computador",
        objetivo: "inovacao",
        formacao: ["faculdade", "tecnico", "livre"],
        area: "Tecnologia da Informação",
        atividades: "Criar aplicativos, sites, sistemas e programas.",
        habilidades: "Lógica, criatividade e resolução de problemas.",
        cursos: "Análise e Desenvolvimento de Sistemas, Ciência da Computação e cursos de programação.",
        mercado: "Empresas de tecnologia, bancos, startups e trabalho autônomo."
    },
    {
        nome: "Médico",
        interesse: "saude",
        habilidade: "cuidado",
        ambiente: "equipe",
        objetivo: "ajudar",
        formacao: ["faculdade"],
        area: "Saúde",
        atividades: "Diagnosticar doenças, orientar pacientes e realizar tratamentos.",
        habilidades: "Empatia, responsabilidade e capacidade de decisão.",
        cursos: "Graduação em Medicina e residência médica.",
        mercado: "Hospitais, clínicas, postos de saúde e consultórios."
    },
    {
        nome: "Professor",
        interesse: "educacao",
        habilidade: "comunicacao",
        ambiente: "equipe",
        objetivo: "ajudar",
        formacao: ["faculdade"],
        area: "Educação",
        atividades: "Ensinar, preparar aulas e acompanhar o desenvolvimento dos alunos.",
        habilidades: "Comunicação, paciência e organização.",
        cursos: "Licenciaturas em diferentes áreas do conhecimento.",
        mercado: "Escolas, universidades, cursos e plataformas de ensino."
    },
    {
        nome: "Designer Gráfico",
        interesse: "criatividade",
        habilidade: "criacao",
        ambiente: "computador",
        objetivo: "inovacao",
        formacao: ["faculdade", "tecnico", "livre"],
        area: "Comunicação e Design",
        atividades: "Criar logotipos, identidades visuais, ilustrações e materiais digitais.",
        habilidades: "Criatividade, senso estético e domínio de ferramentas digitais.",
        cursos: "Design Gráfico, Design Digital e cursos de edição e ilustração.",
        mercado: "Agências, empresas, estúdios e trabalho freelancer."
    },
    {
        nome: "Administrador",
        interesse: "negocios",
        habilidade: "organizacao",
        ambiente: "equipe",
        objetivo: "estabilidade",
        formacao: ["faculdade", "tecnico"],
        area: "Gestão e Negócios",
        atividades: "Planejar, organizar equipes, controlar recursos e administrar empresas.",
        habilidades: "Liderança, organização e planejamento.",
        cursos: "Administração, Gestão Financeira e Processos Gerenciais.",
        mercado: "Empresas privadas, órgãos públicos e empreendedorismo."
    },
    {
        nome: "Biólogo",
        interesse: "natureza",
        habilidade: "investigacao",
        ambiente: "externo",
        objetivo: "inovacao",
        formacao: ["faculdade"],
        area: "Ciências Biológicas e Meio Ambiente",
        atividades: "Estudar seres vivos, ecossistemas e conservação ambiental.",
        habilidades: "Observação, pesquisa e pensamento científico.",
        cursos: "Ciências Biológicas e especializações ambientais.",
        mercado: "Laboratórios, universidades, consultorias e instituições ambientais."
    },
    {
        nome: "Psicólogo",
        interesse: "saude",
        habilidade: "comunicacao",
        ambiente: "equipe",
        objetivo: "ajudar",
        formacao: ["faculdade"],
        area: "Saúde e comportamento humano",
        atividades: "Acompanhar pessoas, compreender comportamentos e realizar atendimentos psicológicos.",
        habilidades: "Escuta, empatia e comunicação.",
        cursos: "Graduação em Psicologia e registro profissional no CRP.",
        mercado: "Clínicas, hospitais, escolas, empresas e consultórios."
    },
    {
        nome: "Analista Financeiro",
        interesse: "negocios",
        habilidade: "logica",
        ambiente: "computador",
        objetivo: "estabilidade",
        formacao: ["faculdade", "tecnico", "livre"],
        area: "Finanças",
        atividades: "Analisar despesas, receitas, investimentos e resultados financeiros.",
        habilidades: "Raciocínio lógico, organização e atenção aos detalhes.",
        cursos: "Administração, Ciências Contábeis, Economia e cursos financeiros.",
        mercado: "Bancos, empresas, consultorias e instituições financeiras."
    }
];

const formulario = document.getElementById("careerForm");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const respostas = {
        interesse: document.getElementById("interesse").value,
        habilidade: document.getElementById("habilidade").value,
        ambiente: document.getElementById("ambiente").value,
        objetivo: document.getElementById("objetivo").value,
        formacao: document.getElementById("formacao").value
    };

    const recomendacoes = profissoes.map(profissao => {
        let pontos = 0;

        if (profissao.interesse === respostas.interesse) pontos += 3;
        if (profissao.habilidade === respostas.habilidade) pontos += 3;
        if (profissao.ambiente === respostas.ambiente) pontos += 2;
        if (profissao.objetivo === respostas.objetivo) pontos += 2;
        if (profissao.formacao.includes(respostas.formacao)) pontos += 1;

        return {
            ...profissao,
            pontos: pontos
        };
    });

    recomendacoes.sort((a, b) => b.pontos - a.pontos);

    mostrarResultados(recomendacoes.slice(0, 3));
});

function mostrarResultados(lista) {
    resultado.innerHTML = `
        <h2>✨ Resultado do seu perfil profissional</h2>
        <p>Com base nas suas respostas, nosso mentor encontrou estas profissões compatíveis com seu perfil:</p>
    `;

    lista.forEach((profissao, index) => {
        resultado.innerHTML += `
            <div class="profissao">
                <h3>${index + 1}º ${profissao.nome}</h3>
                <p class="pontuacao">Compatibilidade: ${profissao.pontos} de 11 pontos</p>
                <p><strong>Área de atuação:</strong> ${profissao.area}</p>
                <p><strong>Principais atividades:</strong> ${profissao.atividades}</p>
                <p><strong>Habilidades necessárias:</strong> ${profissao.habilidades}</p>
                <p><strong>Formação recomendada:</strong> ${profissao.cursos}</p>
                <p><strong>Mercado de trabalho:</strong> ${profissao.mercado}</p>
            </div>
        `;
    });

    resultado.innerHTML += `
        <p><strong>Conselho do CareerIA:</strong> Pesquise sobre as profissões sugeridas,
        converse com profissionais da área e considere seus objetivos antes de escolher
        uma carreira. Este resultado é uma orientação inicial, não uma decisão definitiva.</p>
        <button onclick="reiniciar()">Refazer questionário 🔄</button>
    `;

    resultado.scrollIntoView({ behavior: "smooth" });
}

function reiniciar() {
    formulario.reset();
    resultado.innerHTML = "";
    formulario.scrollIntoView({ behavior: "smooth" });
}
