const paisesFemininos = ['Alemanha', 'Argentina', 'Austrália', 'Áustria', 'Bélgica', 'Bolívia', 'Colômbia', 'Coreia do Sul', 'Dinamarca', 'Escócia', 'Espanha', 'França', 'Grécia', 'Holanda', 'Hungria', 'Índia', 'Inglaterra', 'Irlanda', 'Itália', 'Noruega', 'Polônia', 'Portugal', 'Rússia', 'Suécia', 'Suíça', 'Turquia', 'Venezuela'];

    const bibliografias = {
      "Brasil": "A maior economia da América Latina...",
      "Alemanha": "A maior economia da Europa...",
      "Estados Unidos": "A maior economia do mundo...",
       "África do Sul": "Uma economia importante na África, com ricos recursos naturais e uma história complexa. Enfrenta desafios significativos de desigualdade, pobreza e desemprego. Tem um papel de liderança em questões africanas.",
  "Alemanha": " A maior economia da Europa, conhecida por sua forte indústria, especialmente nos setores automotivo, de engenharia e químico. É um importante exportador global e um motor da economia da União Europeia. Possui um forte sistema de bem-estar social e um compromisso com a sustentabilidade.",
  "Arábia Saudita": "A maior economia do Oriente Médio e um dos maiores produtores e exportadores de petróleo do mundo. Sua economia está em processo de diversificação, buscando reduzir a dependência do petróleo. Possui uma influência significativa no mundo islâmico.",
  "Argentina": "Uma nação sul-americana com uma rica história e cultura. Sua economia, embora significativa na região, tem enfrentado desafios recorrentes de instabilidade macroeconômica, incluindo inflação e dívida. O país é um importante produtor agrícola e possui recursos naturais.",
  "Austrália": "Uma nação insular desenvolvida com uma alta qualidade de vida. Sua economia é impulsionada pela abundância de recursos naturais (minerais, carvão, gás), um forte setor de serviços e uma agricultura eficiente. Possui laços estreitos com a região da Ásia-Pacífico.",
  "Brasil": " A maior economia da América Latina e um país com vasta diversidade geográfica e cultural. É um grande produtor e exportador de commodities agrícolas e minerais. Apesar de seu potencial, enfrenta desafios como desigualdade social e questões ambientais. Tem um papel de liderança na América do Sul.",
  "Canadá": "Uma economia desenvolvida e diversificada, com fortes laços comerciais e culturais com os Estados Unidos. Possui vastos recursos naturais, incluindo petróleo, gás e madeira. É conhecido por seu sistema de bem-estar social e multiculturalismo.",
  "China": "A segunda maior economia do mundo, com um crescimento exponencial nas últimas décadas, transformando-a em uma potência global. É um importante centro de manufatura e um mercado consumidor em expansão. Sua influência geopolítica e econômica continua a crescer.",
  "Coreia do Sul": "Uma economia desenvolvida que passou por uma transformação notável, focando em tecnologia, eletrônicos, automóveis e cultura popular (K-pop, dramas). É um importante ator no comércio internacional e possui uma forte orientação para a exportação.",
  "Estados Unidos": "A maior economia do mundo, com um sistema diversificado e inovador. É líder em tecnologia, finanças e pesquisa. Possui uma influência global significativa em termos econômicos, políticos e culturais.",
  "França": "Uma das maiores economias da Europa e um membro fundador da União Europeia. Possui uma economia diversificada, com setores fortes em manufatura, serviços (incluindo turismo) e agricultura. É uma potência cultural e política com um papel significativo na Europa e no mundo.",
  "Índia": "Uma economia emergente com uma população vasta e jovem. Tem experimentado um rápido crescimento econômico, impulsionado pelos setores de serviços, tecnologia da informação e manufatura. Apesar do crescimento, ainda enfrenta desafios significativos relacionados à pobreza e infraestrutura.",
  "Indonésia": "A maior economia do Sudeste Asiático e o país com a maior população muçulmana do mundo. Possui uma economia diversificada, com importantes setores de commodities, manufatura e serviços. Tem um papel crescente na política e economia regional.",
  "Itália": "Uma grande economia europeia com uma rica história e cultura. É conhecida por seus setores de manufatura (especialmente moda e automóveis), turismo e agricultura. Tem enfrentado desafios econômicos, mas continua sendo uma potência industrial e cultural.",
  "Japão": "Uma economia desenvolvida e tecnologicamente avançada. É líder em inovação e possui fortes setores de eletrônicos, automotivo e manufatura de alta tecnologia. Envelhecimento da população e desafios econômicos de longo prazo são questões importantes.",
  "México": "Uma grande economia da América do Norte, com fortes laços econômicos com os Estados Unidos e o Canadá (USMCA). Possui um setor manufatureiro significativo, além de recursos naturais e turismo. Enfrenta desafios relacionados à segurança e desigualdade.",
  "Reino Unido": "Uma grande economia europeia com um importante centro financeiro global (Londres). Possui setores fortes em serviços, manufatura e tecnologia. Sua saída da União Europeia (Brexit) gerou novas dinâmicas econômicas e políticas.",
  "Rússia": "Uma grande potência com vastos recursos naturais, especialmente petróleo e gás. Sua economia é fortemente dependente desses setores. Sua participação no G20 tem sido controversa devido a questões geopolíticas.",
  "Turquia": "Uma economia emergente localizada na encruzilhada entre a Europa e a Ásia. Possui um setor manufatureiro diversificado, além de agricultura e turismo. Sua posição geopolítica é estratégica.",
  "União Europeia": "Uma união política e econômica de 27 estados-membros localizados principalmente na Europa. Possui um mercado único, uma moeda comum para muitos membros (o euro) e coopera em diversas áreas políticas. Representa uma força econômica e política significativa no cenário global.",
  "União Africana": "Uma organização continental que reúne 55 estados-membros do continente africano. Seu objetivo é promover a unidade, a integração e o desenvolvimento socioeconômico do continente, além de defender seus interesses comuns. Sua participação no G20 como membro permanente a partir de 2023 reforça a representatividade africana no fórum."
};
    function capitalizar(palavra) {
      return palavra
        .toLowerCase()
        .split(' ')
        .map(p => p.charAt(0).toUpperCase() + p.slice(1))
        .join(' ');
    }

    function analisarPais() {
      const inputPais = document.getElementById('txtPais');
      const paisDigitado = inputPais.value.trim();
      const paisDiv = document.getElementById('pais');
      paisDiv.innerHTML = '';

      if (!paisDigitado) {
        const mensagemErro = document.createElement('p');
        mensagemErro.textContent = 'Por favor, digite um país.';
        mensagemErro.classList.add('error-message');
        paisDiv.appendChild(mensagemErro);
        paisDiv.style.display = "block";
        return;
      }

      const paisCapitalizadoSemAcento = capitalizar(paisDigitado.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
      const paisOriginalCapitalizado = capitalizar(paisDigitado);

      let artigo = 'no';
      if (paisesFemininos.some(p => p.toLowerCase() === paisCapitalizadoSemAcento.toLowerCase())) {
        artigo = 'na';
      }

      const mensagemNascimento = document.createElement('p');
      mensagemNascimento.textContent = `Você nasceu ${artigo} ${paisOriginalCapitalizado}.`;
      paisDiv.appendChild(mensagemNascimento);

      const mensagemNacionalidade = document.createElement('p');
      mensagemNacionalidade.classList.add('nationality-message');
      if (paisCapitalizadoSemAcento.toLowerCase() === 'brasil') {
        mensagemNacionalidade.textContent = 'Você é brasileiro(a).';
      } else {
        mensagemNacionalidade.textContent = 'Você é estrangeiro(a).';
      }
      paisDiv.appendChild(mensagemNacionalidade);

      const bibliografia = document.createElement('p');
      const bio = bibliografias[paisCapitalizadoSemAcento];
      if (bio) {
        bibliografia.textContent = `Sobre o país: ${bio}`;
      } else {
        bibliografia.textContent = 'Desculpe! Estamos em processo de atualização então no momento estaremos sem bibliografia disponível para este país.';
      }
      paisDiv.appendChild(bibliografia);

      paisDiv.style.display = "block";
      inputPais.value = '';
    }

    document.getElementById('verificarPais').addEventListener('click', analisarPais);
    document.getElementById('txtPais').addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        analisarPais();
      }
    });