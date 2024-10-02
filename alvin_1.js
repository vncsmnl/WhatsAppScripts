async function enviarScript(scriptText, delay = 1000) {
    const lines = scriptText.split('\n').map(line => line.trim()).filter(line => line);

    const main = document.querySelector("#main");
    const textarea = main.querySelector(`div[contenteditable="true"]`);

    if (!textarea) {
        throw new Error("Não há uma conversa aberta");
    }

    for (const line of lines) {
        console.log(line);
        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', { bubbles: true }));

        await new Promise(resolve => setTimeout(resolve, 100));

        const sendButton = main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`);
        sendButton.click();

        if (lines.indexOf(line) !== lines.length - 1) {
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    return lines.length;
}

const script = `
( os esquilos cantando "Bad Day" )

( Simon e Theodore vocalizando )

♪ Where is the moment we needed the most? ♪

♪ You kicked up the leaves and the magic is lost ♪

♪ They tell me your blue skies fade to gray ♪

♪ They tell me your passion's gone away ♪

♪ And I don't need no carryin' on ♪

♪ 'Cause you had a bad day ♪

♪ You're taking one down ♪

♪ You sing a sad song just to turn it around ♪

♪ You say you don't know ♪

♪ You tell me, "don't lie" ♪

♪ You work at a smile, and you go for a ride ♪

♪ You had a bad day ♪

♪ You see what you like ♪

♪ And how does it feel one more time? ♪

♪ You had a bad day ♪

♪ You had a bad day ♪

Alvin: Está indo, está indo! Woah!

Simon: E se foi.

Alvin: Tanto faz!

Theodore: Talvez devêssemos fazer uma pausa. Ai!

Alvin: É isso aí! Eu não aguento mais isso! Não posso, desisto! Estou farto de lutar pela sobrevivência! Competindo com esquilos e minhocas e aquele pardal perdedor que sempre pega minhas nozes, e eu estou especialmente cansado dessa árvore estúpida e estúpida!

Simon: Whoa, o que está acontecendo?

Teodoro: Pessoal, acho que ele ficou com raiva.


[ROUBO]

[NOTA ALTA]

David "Dave" Sevilha: Estou acordado! Estou acordado. E estou atrasado! Demonstração. Dave Sevilha. Chaves. Saco. Calças. Preciso de calças. As calças são essenciais. Claire!

Claire: Dave.

Dave: Ei. Como está a correr'? Não te vejo desde que disseste que nunca mais me querias ver.

Claire: Então eu acho que funcionou. Que dia divertido foi esse. Deixe-me adivinhar. Estás atrasado para outra coisa. O mesmo velho Dave.

Dave: Não te seguindo.

Claire: Você sabe, o cara que está sempre brincando que não consegue lidar com um relacionamento sério.

Dave: Esse era o velho Dave. Que tal nos reunirmos, conversarmos sobre o novo Dave?

Claire: EU…

Dave: Amanhã à noite, minha casa.

Claire: EU…

Dave: Ótimo!

Claire: Não.

Dave: Você parece bem, Claire!

Theodore: Onde estamos?

Alvin: Bem, acho que eles remodelaram nossa floresta. Eu gosto disso. Elegante, mas funcional —

Theodore: Uh, mas para onde foram as montanhas?

Simon: Me dê um tempo. Estamos em um prédio, Theodore.

Ian Hawke: Dave!

Dave: Ian.

Ian: Ei, grandalhão. Ei, você já viu a vista do 80o andar?

Dave: Não. Eles nunca me deixaram passar pelo saguão.

Ian: O que? Eu não posso ... Ei, recue, cara. Este é Dave Sevilha.

Sr. Sevilha, posso lhe oferecer alguns bolos, scones, doces?

Dave: Não. Eu odiaria ser um incômodo.

Não tem problema. Temos uma estação de omeletes.

Dave: Estação Omelete.

Posso pegar um pouco de água ou um café com leite de soja?

Que tal uma dose de suco de grama de trigo?

Dave: Talvez mais tarde. Obrigado.

Ian: Vamos falar sobre sua música, Dave.

Dave: Bem, por mais louco que pareça ... a inspiração original veio até mim--

Ian: A música é péssima, Dave.

Dave: O que?

Ian: Sua música? É horrível. Eu odeio isso. Quer dizer, quem vai cantar? Justin, Fergie? Sem chance. Preciso de algo novo, preciso de algo novo.

Dave: Isso é novo.

Ian: A próxima grande novidade. Dave, voltamos, está bem? E nós dois percorremos um longo caminho desde a faculdade. Vocês? Nem tanto. Eu queria gostar dessa música, mas você ouviu. Não é tão bom assim. Se eu não fosse seu amigo, diria: Dave, você volta logo fora deste escritório ... ... e você continua escrevendo música. Você chegará lá algum dia. Mas eu sou seu amigo, então vou lhe dizer ... ... que não faz sentido escrever músicas ... ... que ninguém nunca, sempre indo cantar.

Dave: Sempre? Com licença. Posso pegar um pouco dessa água?

Nós acabamos.

Ei!

-Fora do caminho. -Alvin ... -... devagar.

Alvin: Mova sua bunda, Theodore!

Theodore: Ai! Você pisou no meu rabo!

Alvin: O último a chegar é atropelar!

Simon: Estou dentro!

Theodore: Quais são essas coisas brilhantes?

Simon: Theodore, estamos saindo agora.

Theodore: Oh.

Alvin: OK. Esta não foi minha melhor ideia.

Simon: Tenha cuidado!

Alvin: Maníaco!

Simon: Caramba!

De volta à árvore! De volta à árvore!

Simon: De volta ao cachorro! De volta ao cachorro!

-Cesta, 3:00 -Qual o caminho são 3:00? -Por aqui!

Theodore: Gente, esperem por mim! Espere! Eu ainda tenho gordura de bebê, você sabe.

-Salte, Theodore! Você realmente quer isso. -Eu quero isso! -Eu quero isso! -Eu não posso ficar assim o dia todo. Você já vai pular? Ooh. Muffins.

Alvin: Bruto. Esta é a casa dele?

Simon: Não. É a lata de lixo dele.

Alvin: Oh!

Deve ser onde ele armazena sua comida para o inverno. Como se resumia a um-- Boa tem o mouse preso em um galho sem saída. Enquanto a jibóia se move para o ataque ... ... o rato parece estar enfrentando a morte certa. A língua sensível da jibóia tem gosto da presença da vítima. O mouse bate na folhagem. Vamos querida. Venha para o papai! Olá linda. Atingimos o filão da mãe. - floresta tropical onde a comida é abundante.

Theodore: Este é o melhor dia da minha vida!

Alvin: Eureka! Encontrei as bolas de queijo!

Simon: Alvin, o que você está fazendo? Não faça uma bagunça!

Alvin: Bala de canhão!

Simon: Rápido. Ocultar! Depressa, pessoal!

Dave: Eu coloquei isso aqui? Hã.

[ GRITOS DE ALVIN ]

[ DAVE GRITANDO ]

Dave: Tenho...

[ ALVIN GRUNTS ]

Dave: Ow! Ow!

[ ALVIN WHIMPERING ]

Dave: Ah!

[ ALVIN FARTS ]

Dave: Ugh! Ah. Aí está você. Entendi. Oh.

Simon: Hmm. Ele está fora há um bom tempo.

Theodore: Vocês, ele está morto!

Alvin: Não entre em pânico! Limpe tudo. Preciso de três sacos de lixo, uma pá, um desinfetante, luvas de látex e orégano. Vai.

Simon: Espere, Sherlock. Ele está vindo para.

Dave: Eu devo estar ouvindo coisas. Oh, isso é complicado.

Theodore: Senhor, você está bem?

Dave: [gritos] Volte! Esquilos não podem falar!

Alvin: Ei! Uau. Wap-ap-ap-ap-oh. Assista, gênio. Somos esquilos. Esquilos!

Dave: Os esquilos também não podem falar! [acende luzes]

Simon: Bem, nossos lábios estão se movendo e as palavras estão saindo.

Dave: Isso não está acontecendo. [fecha os olhos, falando consigo mesmo] Não estou falando com esquilos. Não estou falando com esquilos.

Alvin: Então, como isso está funcionando para você, Dave?

Dave: Como você sabe meu nome?

Alvin: Eu vou colocar esse. Lemos seu e-mail. Por acidente.

Simon: Você realmente deveria pagar essa conta de serviços públicos, Dave. Você já ouviu falar de uma classificação de crédito?

Theodore: [liga o processador de alimentos] O que é isso?

Dave: E-ei! Pare de fazer ... desligue isso!

Simon: [desliga o processador de alimentosDesculpe. Uh, [esfrega a cabeça de Theodore] ele caiu da árvore ao nascer.

Dave: C-todos os animais podem falar?

Simon: Bem, os peixes têm esse tipo de linguagem de sinais.

Alvin: Ei, Dave. Todos os humanos têm casas que cheiram a meias de suor? [cantando enquanto esguicha sabão para fora do dispensador de sabão] Dave gosta de usar roupas íntimas sujas, com pêlos pequenos...

Simon: Estamos saindo com o pé errado. Permita-nos nos apresentar. Olá. Eu sou o Simon. O esperto. Ele é Alvin...

Alvin: O mais impressionante.

Theodore: E eu sou Theodore.

Dave: Oh, que prazer em conhecê-lo. Agora saia da minha casa.

Theodore: Mas ... nós conversamos.

Dave: O que só me faz querer você fora da minha casa muito mais. É assustador, antinatural, um tanto mau.

Alvin: Eu meio que gostei mais dele quando ele estava inconsciente.

[Dave coloca uma tigela sobre os esquilos]

Dave: Peguei vocês!

Alvin: Ei!

Dave: Ha-ha-ha-ha-ha!

Simon: Uau!

Alvin: Não faça isso, Dave. Podemos roer por esta porta.

Theodore: Oi.

Alvin: ♪ Somente você ... ( oh oh oh ) ... pode fazer este mundo parecer certo. ( oh oh oh ) Oh, só você ... ( oh oh oh ) ...pode fazer a escuridão brilhar. ( oh oh oh ) ♪ Oh. Estávamos incomodando você?

Dave: Espere, vocês também podem cantar?

Alvin: Isso não está cantando. Isso está cantando.

Os esquilos: ♪ Wah-ah-ah-ow, ow-ow-ah-ah-ah-ow / Fale sobre, fale sobre como se mover' ♪

Alvin ( Simon & Theodore ): ♪ ( oh-oh-sim ) Você não vai me levar para ( oh-oh-sim ) Funkytown? ( oh-oh-sim ) Você não vai me levar para ( oh-oh-sim ) Funkytown? ( oh-oh-sim ) Você não vai me levar para ( oh-oh-sim ) Funkytown? ( oh-oh-sim ) Você não vai me levar para ( oh-oh-sim ) Funkytown? ♪

Os esquilos: ♪ Oh! ♪

Dave: Isso é incrível. Aqui, todo mundo lá dentro.

Simon: Uau! [rindo]

Dave: Lá vai você.

Simon: Obrigado.

Dave: Tudo bem, aqui está o acordo; vocês cantam minhas músicas, você dorme aqui.

Alvin: Não. Esperar! O café da manhã está incluído?

Dave: [pensa sobre isso] Eu posso viver com isso.

Simon: E os privilégios de TV?

Dave: [pensa sobre isso] Ok, mas não depois das 7.

Theodore: 8.

Dave: Feito. Não conte aos seus amigos animais, porque não quero voltar para casa e encontrar coelhos e gambás no meu sofá.

Simon: Criaturas sujas, Dave. Nunca se associe a eles.

Theodore: Sim, você é nosso único amigo.

Dave: Não, não, não, não, não vamos nos antecipar aqui. Vamos começar comigo sendo seu compositor.

Alvin: Hum, deixe-me perguntar. Você já escreveu uma música antes?

Dave: Sim.

Alvin: E ... isso é coisa da sua música lá fora?

Dave: Sim. [trovões roncam, lembrando a Dave que seu equipamento de composição está encharcado na chuva] Ah não!

Simon: Volte depressa.

Dave: Então, pessoal, tudo o que precisamos fazer é encontrar a música certa, ensaiar--

Simon: Ei, Dave.

Dave: Simon!

Simon: Whoopsie! Foi mal.

Dave: Esta é a minha partitura. [Alvin cantarolando "Aloha Oe"] Alvin!

Alvin: Ei!

Dave: Este não é um Hula-Hoop. É um suporte de toalhas.

Alvin: Killjoy.

Dave: Vocês são sempre assim?

Simon: Somos crianças, Dave.

Dave: Bem, onde estão seus pais?

Simon: Quando você é um esquilo, seus pais cuidam de você por uma semana. Então eles decolam.

Alvin: Nossos pais eram hippies. Eles saíram cedo para se juntar a uma comuna.

Robert, o robô: Eu sou Robert, o robô.

[Um robô de brinquedo persegue Theodore em um jogo de gato e rato]

Theodore: Socorro! Robô louco. Socorro! Está atrás de mim! Está atrás de mim.

Dave: Ei. Ei. Tenha cuidado com isso.

[Dave pega o robô quando Theodore pede desculpas]

Theodore: Desculpa.

Dave: É um colecionável. Eu comprei no Natal do ano passado.

Esquilos: Natal!

Alvin: Nós amamos o Natal.

Simon: Mesmo que nunca tenhamos comemorado.

Theodore: Mas nós queremos.

Dave: Sim, você nunca pode dar errado com o Natal.

Theodore: Ah, talvez possamos celebrar com você.

Dave: Sim talvez. Olha, eu tive um dia longo e estranho, então vou para a cama. Vamos. Começamos a trabalhar amanhã. Quero você de olhos brilhantes e cauda espessa por 8.

Alvin: Meu rabo não está espesso até as 9.

Dave: Não é problema meu. Agora vá dormir.

Alvin: Espero que o Natal chegue rápido.

Theodore: Eu também.

Dave: Duh-dum-duh ... dum-duh-duh-duh.... Quer um avião que faça um loop? Loop. Aro. Bambolê.

Capitão: [ Cantando ] Quem vive em um abacaxi no fundo do mar?

Crianças: [ Cantando ] Bob Esponja Calça Quadrada!

Capitão: [ Cantando ] Absorvente e amarelo e porus é ele!

Crianças: [ Cantando ] Bob Esponja Calça Quadrada!

[ Bip de alarme ]

Capitão: [ Cantando ] Se o absurdo náutico é algo que você deseja.

Crianças: [ Cantando ] Bob Esponja Quadrado-

Alvin: Aqui está o problema. Fogo no buraco!

Dave: O que vocês estão fazendo?

Alvin: Nada. O que você está fazendo?

Simon: Afaste-se, Dave. Ela vai explodir! Deixa comigo. Eu entendi, pessoal. Venha para o papai. Ei! Para onde foi?

Dave: Simon, isso pousou bem na sua frente. Você não viu? Quantos dedos estou segurando?

Simon: Quatro. Não, não, não, não, não, não, não. Oito? Contando seu polegar? Espere, espere, espere…

Dave: Espere um segundo.

Simon: Seis. A resposta final é seis.

Dave: Tente estes. Como é isso?

Simon: Uau! Alguém destruiu sua casa.

Dave: Bem, estava limpo quando fui dormir ontem à noite.

Theodore: Bem, nós colorimos por um tempo, mas depois ficamos com fome. Quer ver o que colorimos?

Dave: Na verdade, eu quero tocar uma coisa para você. Eu escrevi uma música para vocês cantarem, então vamos--

Simon: Colocamos algumas waffles de torradeira de lado no inverno.

Alvin: E não estamos compartilhando!

Dave: Gente, vamos comer comida durante todo o inverno, então se você começar a armazená-la ... vai ficar nojento e teremos roedores ... Mau, você sabe, roedores que não falam por aqui. Vamos lá. Vamos trabalhar. Tudo bem, seus esquilos. Pronto para cantar sua música?

Simon: Eu vou dizer que estamos.

Theodore: Sim! Vamos cantar agora!

Dave: Pronto, Simon?

Simon: OK.

Dave: Pronto, Theodore?

Theodore: OK.

Dave: Alvin? Alvin?

Alvin: Ooh! Isso chuta a bunda de uma roda de hamster.

Dave: Alvin!

Alvin: Uau! OK!

Esquilos: ♪ Natal, a época do Natal está próxima. Hora de brinquedos e tempo de alegria. Fomos bem, mas não podemos durar. Depressa, Natal, corra rápido. Quer um avião que faça um loop no loop. ♪

Alvin: ♪ Eu quero um Hula-Hoop. ♪

Esquilos: ♪ Mal podemos esperar. Por favor, Natal, não se atrase! ♪

Ian: O que?

Dave Sevilha está no saguão. Ele diz que não vai embora sem te ver.

Ian: Oh Deus. Aquele perdedor de novo? Dave!

Dave: Ian.

-OK.

-Eu tenho algo para você. É a sua próxima grande novidade.

-Dave. Não diga nada. O que...? Dave, não faça isso consigo mesmo, cara.

-Eles cantam.

-Não. Eles não.

-Eles fazem. Apenas me dê um segundo. Vamos lá pessoal. Quer um avião que me dê um loop, eu quero um Hula-Hoop

-Você sabe, Dave ... ... algumas pessoas podem dizer que é meio estranho ... ... que um homem adulto queira um Hula-Hoop. E outros diriam, Você sabe o que é mais estranho do que isso? Um homem adulto trazendo outro homem adulto ... ... uma caixa grande com um monte de esquilos ... ... que não apenas falam inglês, mas podem cantar.

-Eles cantam. Temos praticado a manhã toda.

Ian: Oh, você tem praticado. Eu nunca percebi. Ok, bem. Sim. Ok não. Dave, eu vou para fingir que eu tenho um almoço para ir. Opa. Eu tenho um almoço para ir.

Dave: O que foi isso?

Simon: Nada nada. Apenas um pouco de medo do palco. [choramingar]

Theodore: Eu pensei que meu coração iria explodir.

Alvin: Não estamos realizando macacos, Dave. Por que temos que cantar para esse cara, afinal?

Dave: Bem, como é isso? Finja que preciso do dinheiro e odeio meu trabalho e você fica na minha casa, então me deve.

Theodore: Desculpe, Dave.

Dave: Sim, isso ajuda. [suspira] Não importa. Estou atrasado para o trabalho.

Theodore: Ooh-ooh-ooh! Podemos ir com você?

Dave: O que, para que você possa estragar tudo também? Uh-uh. Você está indo para casa.

Posso ficar no seu colo e dirigir? Oh, podemos pelo menos tocar a buzina? Deixa pra lá. Sinto muito pelo atraso. Deve demorar mais alguns minutos. Mas estamos construindo o suspense. -Aqui está ele. -Desculpe, estou atrasado. Rapaz, estou entusiasmado com o nosso comercial de barras de energia capazes de Yum. É um comercial de barra de energia de boa capacidade. Certo, bom. Ok, aqui está o tom. Abrimos um grupo de crianças letárgicas. Close-up no rosto de uma garotinha. Ela está triste. Nossos clientes não gostam de pensar nos filhos como tristes. Ela poderia estar empinando pipa? Eu gosto de pipas. Boa. Ok, ótimo. Ela está empinando pipa. Ela está correndo com uma pipa. Ela está ficando sem vapor. Ela está cansada e solta a pipa. Ah não. Vemos o rosto dela, é triste. -Mas não muito triste. -Direita. Então ela pega seu Bar de Energia de Boa Vontade ... É minha mãe. Desculpa. -Oi mãe.

Simon: [no telefone para Dave] Uma pequena situação aqui, Dave. Theodore aspirou Alvin.

Theodore: [chama tubo de vácuo] Alvin!

Alvin: [gritos de dentro do vácuo] Dave, socorro!

Dave: [no telefone para Simon] O que?!

Simon: [no telefone para Dave] Bem, pelo menos não era o depósito de lixo. [ri nervosamente]

Theodore: [chama tubo de vácuo] Apenas fique calmo. [é sugado para o vácuo; gritos]

Simon: [no telefone para Dave] E lá vai Theodore.

Dave: Olha, eu não posso fazer isso agora, ok?

Simon: Eu entendo absolutamente, mas-- Desculpe, Dave? Pergunta rápida. Como você se sente em relação a uma piscina coberta?

Dave: Olha, se você inundar minha casa, você está morto. Na rua, capiche? Mães. Por que não viemos aqui e olhamos para as projeções de vendas? Sabe, quando vi esses números pela primeira vez, pensei que não havia como ... mas depois olhei novamente.

O tamanho da bunda de Theodore? Por que não voltamos a isso? De qualquer forma, há 10 anos, a participação de mercado para lanches saudáveis ... era imperceptível entre crianças de 6 a 12 anos. Quão inteligente Simon pensa que é? Sim, ao contrário de quão inteligente ele realmente é.

-Quem é o Simon? -Eu não ... - Apenas mova-o. Você sabe o que? Acho que vou limpar meu escritório.

-Parece bom.

Mr. Krabs: Bob Esponja, você está 15 minutos atrasado!

Bob Esponja: Desculpe, Sr. Krabs, fiquei a noite toda procurando por Gary. Veja bem, ele fugiu e bem-

Dave: Pessoal, o que é isso?

Simon: Obviamente, a bunda de Theodore.

Theodore: W-W-Nós dissemos que colorimos.

Dave: Nos meus quadros de apresentação? Você me despediu.

Theodore: Oh. Nós não sabíamos.

[Dave pega o controle remoto e desliga a TV]

Theodore: Desculpe, Dave.

Dave: Oh, você sente muito? Isso é fantástico! "Desculpe" não recebe meu emprego de volta, agora, Theodore? Por que minhas roupas estão por todo o lugar?

Simon: Nós os usamos para limpar a água. Boa ideia, certo?

Dave: Oh, meu Deus, Theodore, você acabou de?

Theodore: [nervosamente] Umm, umm.

Simon: [pega um pequeno pellet em forma de pele na frente de Theodore] É uma passa, Dave.

Dave: Prove.

Simon: [coloca na boca] Mmm-mmm.

Dave: Ok, você me pegou. Olha, eu quero falar com todos vocês. Cadê o Alvin? [segue em direção à cozinha] Alvin!

Simon: [cospe rapidamente e olha com severidade para Theodore] Você me deve muito!

Dave: Alvin!

Alvin: ♪ Vamos lá! Vamos! Você não gostaria que sua namorada fosse gostosa como eu? Não deseje que sua namorada seja uma aberração como eu... ♪

[Dave abre a máquina de lavar louça. Alvin grita.]

Alvin: Há uma coisa nova: é chamada de "batida".

Dave: Saia.

Alvin: Estou esperando o ciclo de enxágue.

Dave: Fora!

Alvin: Whoa, whoa! Estou tomando banho aqui!

Dave: Sabe, se eu fizesse uma lista dos meus piores dias de todos os tempos... Adivinha? Hoje estaria no topo da lista.

Alvin: E ainda é cedo.

Dave: Abra, sudsy. [suspira] Ok. Gente, deixe-me colocar assim para você, ok? Não tenho emprego, nem carreira, minha casa está sempre uma bagunça. Muito obrigado.

Claire: [Atendendo bipes de máquina] Olá Dave. É Claire Wilson ligando. E oh. Por que acabei de dizer meu sobrenome? Isso foi estranho. Acho que estou um pouco nervoso por vir jantar.

Dave: Jantar!

Claire: Então sim. Eu vou desligar agora. Eu estarei lá às 7. Tudo bem. Tchau.

[Bips de máquina]

Dave: Isso é meia hora!

Theodore: Quem é Claire?

Simon: Claire é a companheira de Dave. Ooh-la-la.

Dave: Ela não é minha companheira. Ela é minha ex-companheira. OK. Isso é ótimo.

Simon: Dave. Dave, relaxe. Você apenas vai pegar a comida. Nós vamos cuidar do resto. Tudo certo?

Dave: Não. Por que estou tendo dificuldade em acreditar em você?

Alvin: Isso dói, Dave. Isso realmente dói.

Simon: Sim. Estamos todos juntos nisso, Dave.

Theodore: Como uma família.

Dave: Não. Não é como uma família.

Alvin: Tick-tock, Dave. Melhor rebentar um movimento.

Dave: Certo. [Alvin ri] Uau!

Também fazemos escritórios e veículos recreativos. Que cheiro é esse? É a sua colônia. O que você fez? Despejar a garrafa inteira no tapete? Nós chamamos isso de perfumar a área. Tenho que admitir que estou surpreso. O lugar parece ótimo. Bem, Dave, nós esquilos somos notoriamente arrumados. Sim, eu vejo isso. -Os palitos de pão cheiram muito bem. -Sim. Então, quando é o jantar? Gente, eu não sei como te dizer isso ... ... mas seremos Claire e eu hoje à noite. Segure o telefone, Dave. -Você quer dizer que não podemos ter--? -Não. -Mesmo se nós--? -Não. -Mas nós pensamos que seria-- -E não. Olha, no outro quarto. Eita. Que buzzkill, cara. -Eu nunca soube que você poderia cozinhar isso bem. -É tudo sobre torrefação lenta. Leva mais tempo. Mas quando se trata de sabor, por que se apressar? Bem, estou impressionado. -Eu tenho visto suas fotos. Sim, está indo muito bem.E você, como está seu trabalho? Ótimo. Amando isso.

Teodoro: Como você acha que está indo?

Alvin: Terrível. Nem sequer se estão a cheirar um ao outro.

Simon: Alvin. O Dave disse que–

Alvin: Dave precisa de uma pequena ajuda do médico do amor.

Teodoro: E seu assistente.

Simon: Volte aqui.

Claire: Você sabe, isso é bom. Só dois amigos a jantar. Sair. Sem pressão. Nada estranho.

Dave: Hum, meu meu aparelho de som faz isso o tempo todo. É como se tivesse uma mente própria. Estavas a dizer?

Claire: Oh, nada. Estava um pouco nervoso por vir aqui. Não tinha a certeza se pensavas que isto era um encontro ou algo assim.

Dave: Uma data? Não. A fiação da minha unidade foi disparada.

Claire: Você deve pedir a um eletricista para consertar isso.

Dave: Não preciso de ninguém para consertar nada para mim.

Claire: [risadas] Ok.

Dave: Você poderia me dar licença por um momento? Vou checar a caixa de fusíveis. Ei! Olha, eu sei o que vocês estão fazendo. Alvin!

Theodore: Verificação da respiração.

Dave: Onde está Al – Ow! [gemidos]

Claire: Dave, você está bem?

Dave: [voz quebrando] Está tudo bem. Por que você fez isso!?

Theodore: Eu estava apenas tentando ajudar, Dave. Você tem hálito de alho.

Dave: Bem, pare de ajudar. Você está arruinando tudo. Acho que tenho algo nos meus olhos.

Claire: Aqui. Deixe-me ver. Sim. Parece realmente irritado. É tão vermelho. O que aconteceu?

Alvin: Ei!

Claire: O que foi isso?

Dave: Ah, pensei ter visto um rato.

Claire: Um rato?

Dave: Provavelmente nada. Aqui, vamos terminar de comer, não é? Amanhã vou ligar para o exterminador. Ow!

Alvin: ♪ Arco, pintinho-uau-uau, pintinho-uau-uau – ♪

Claire: -O que? O que – D-Dave!

Dave: Claire!

Claire: Dave!

Alvin: Diga a ela que ela completa você. Funciona.

Claire: O que você está fazendo?

Alvin: Você conseguiu, Dave.

Claire: Dave. Dave, deixe ir.

Dave: Sinto muito, Claire. É só que – eu perdi meu emprego, Claire. E acho que só precisava de um abraço.

Claire: Bem, por que você não disse isso? Diga-me o que aconteceu.

Dave: Bem, isso vai parecer realmente – estranho.

Claire: Sem jogos. Não brinque.

Dave: A verdade?

Claire: Por favor, estou te implorando.

Dave: Minha vida está sendo sabotada por esquilos falantes.

Claire: Sabe o que?

Dave: Eu não sou louco. Eu juro.

Claire: Você não mudou nada.

Dave: Esperar! Claire! Não vá! Eu posso explicar. [suspira] Esquilos. [fecha porta]

Alvin: [batendo na porta] Você deveria tê-la beijado, Dave! Ela queria você!

Simon: Alvin, você não está ajudando.

Alvin: Ah, não desista, Dave.

Dave: Vá embora! Me deixe em paz.

Theodore: Dave, você gostaria de um biscoito?

Dave: Eu disse, me deixe em paz! [suspira]

Alvin: Sou eu ou ele estava um pouco bravo?

Simon: Oh. Hmm. Hmm. Eu me pergunto. Dave está bravo? Sim!

Theodore: Ele realmente respirou alho.

Simon: Sim, bem jogado, pessoal.

Alvin: Idéia! Ding-ding-ding-ding! Quem tem tarifa de táxi?

Simon: Tarifa de táxi? Nem temos bolsos.

Dave: Caros rapazes, desculpe, mas isso não está realmente dando certo. Não sei o que me fez pensar que poderia lidar com vocês ... ... quando mal consigo administrar minha própria vida. Você deve voltar para sua casa real na floresta. É o melhor para todos nós. Me desculpe, tem que ser assim, mas.... Rapazes? Simon, Theodore? Rapazes? Alvin. Alvin.

Ian: Olá? Olá? Crianças.

Esquilos: ♪ Natal, a época do Natal está próxima. Hora de brinquedos e tempo de alegria. Mal podemos esperar. Por favor, Natal, não se atrase! ♪

Ian: Bem-vindo à Jett Records.

Capitão: [ Cantando ] Quem vive em um abacaxi no fundo do mar?

Crianças: [ Cantando ] Bob Esponja Calça Quadrada!

Capitão: [ Cantando ] Absorvente e amarelo e porus é ele!

Crianças: [ Cantando ] Bob Esponja Calça Quadrada!

Capitão: [ Cantando ] Se o absurdo náutico for algo que você deseja.

Crianças: [ Cantando ] Bob Esponja-

Dave: OK. Nova regra. Não sai depois das 9. E nem um pouco, a menos que eu saiba para onde você está indo.

Theodore: Você estava preocupado conosco, Dave?

Dave: Não. Eu só preciso saber, só isso.

Alvin: Esperar. Se você não está preocupado, por que precisa saber?

Dave: [Alto] Eu preciso saber, ok? Ow! Alvin!

Mãe na loja: [Pedindo desculpas por sua filha bater na cabeça de Dave com uma caixa enquanto faz compras em uma mercearia] Oh! Oh. Me desculpe por isso. Desculpa.

Dave: Crianças, hein?

Mãe na loja: Sim, eles mantêm você na ponta dos pés. Você tem algum?

Dave: Três meninos.

Mãe na loja: Alguns dias são melhores que outros.

Dave: ...e então alguns dias você só quer fechá-los em uma caixa, deixar a caixa no parque e fugir, sabe?

[A mãe na loja sai correndo com o carrinho]

Simon: Rápido! Ocultar!

Dave: Gente, o que é tudo isso?

Esquilos: Waffles de torradeira!

Dave: Você sabe, eu não posso pagar todas essas waffles de torradeira.

Esquilos: O que?

Dave: Bem, caso você não tenha notado, eu não tenho emprego nenhuma--

Esquilos: ♪ Natal, a época do Natal está próxima. Hora de brinquedos e tempo de alegria. Fomos bem, mas não podemos durar. Depressa, Natal, corra rápido. ♪

Dave: Minha música.

Alvin: Tudo bem!

Simon: Sim!

Dave: Olá?

Ian: Ei, Dave! Ei! Como está meu compositor favorito?

Dave: I-Ian?

Ian: Diga-me que você ouviu a música.

Dave: Sim. Estou ouvindo agora, mas quero dizer, como você – Quando foi –

Ian: Velocidade dos negócios, querida. É assim que fazemos. É assim que eu rolo. [risadas] Eu tenho um amigo no rádio via satélite, coloque-o em rotação imediata. E aquele vídeo dos seus rapazes? 10 milhões de acessos já no YouTube! Bingo, bango, bungo, bango, bonga! [rindo] É uma loucura! Eu tenho que ir. Ei, coloque algumas roupas nesses caras. É meio embaraçoso.

Alvin: Nós lhe devíamos, Dave. Então, estamos bem com os waffles da torradeira, certo?

Dave: Tudo bem, vocês esquilos!

Pronto para cantar a nova versão da sua música?

Alvin: Você sabe que somos!

Simon: Sim! Vamos cantar agora!

Dave: Tudo bem, Simon?

Simon: Tudo bem!

Dave: Tudo bem Theodore?

Theodore: Tudo bem!

Dave: Tudo certo. Alvin? Alvin? Alvin.

Alvin: Ah, sim!

Esquilos: ♪ Natal, a época do Natal está próxima. Hora de brinquedos e tempo de alegria. Fomos bem, mas não podemos durar. Depressa, Natal, corra rápido. Quer um avião que faça um loop no loop. ♪

Alvin: ♪ Eu quero um Hula-Hoop. ♪

Esquilos: ♪ Mal podemos esperar. Por favor, Natal, não se atrase, ei, ei! Ah, vamos lá! ♪

Dave: Gente, isso foi excelente. Simon, ótimo trabalho.

Simon: Naturalmente.

Dave: Theodore, bom trabalho. [Theodore rindo] Alvin, você estava um pouco plana. Assista. Alvin? Alvin!

Alvin: Dois, três, quatro!

Esquilos: ♪ Natal, a época do Natal está próxima. Hora de brinquedos e tempo de alegria. Fomos bem, mas não podemos durar. Depressa, Natal, corra rápido. Quer um avião que faça um loop! ♪

Alvin: * Eu ainda quero um bambolê! *

Esquilos:♪ Mal podemos esperar. Por favor, Natal, não se atrase! Mal podemos esperar. Por favor, Natal, não se atrase! Não se atrase! Não se atrase! Não se atrase!♪

Alvin: ♪ Não se atrase! ♪

Dave: Tudo bem. Escova de dentes, hein? OK. Não.

Theodore: Dave, você está acordado?

Dave: Eu sou agora.

Theodore: Eu tive um pesadelo. Posso dormir com você? Você nem saberá que estou aqui.

Dave: Ok, claro, mas fique aquilo lado da cama.

Ah, tudo bem. Theodore, esse não é o seu lado da cama. -Theodore, acorde! É Natal! -Vamos lá, cara. É Natal. Garoto. Oh garoto. Oh garoto. No primeiro dia de Natal, Dave acordou Vamos lá, cara, é Natal! Aleluia! Acorde, ossos preguiçosos! Oh sim. Natal. -Para eles. -Você pode dormir quando estiver morto! -Estou chegando. Vamos, Dave.

Theodore: Depressa, pai!

Dave: Papai?

Theodore: Dave. Eu disse Dave.

Isto está a moldar-se para ser o meu Natal favorito de sempre. - Queres abrir o meu primeiro. - Abrir o meu primeiro. - Não, Dave, o meu é melhor. - Vocês arranjaram-me presentes? Claro. Tudo bem. Simon? É uma bússola de clip de papel. Uma bússola de clipe de papel. Agora eu nunca vou me perder. Eu a seguir. Alvin. - A minha carteira. - Gostou? realmente? Queria arranjar-te algo que usasses todos os dias. E eu tenho usado isso há quase 10 anos. Muito atencioso, Alvin. Obrigado. Sim, o olhar na tua cara diz tudo, Dave. Muito bem, Theodore. Para Dav. Vamos ver, diz, Feliz Natal.Amor, Theodore. E tem uma bela foto de alguns abacaxis? Aqueles não são abacaxis. Essa é a nossa família. Olha, pessoal. Vamos garantir que nos entendamos aqui. Eu não sou seu.... Você sabe, seu pai ou algo assim, certo? Mas você é como um pai. Bem, na verdade não. Quero dizer, somos amigos, com certeza. E eu escrevo sua música, você sabe, gerencie sua carreira. -Faça-nos blusas. -Alimente-nos. Vamos dormir na sua cama quando tivermos pesadelos. É o que os amigos fazem. Então, quem quer abrir seus presentes? -Isso é uma pergunta complicada? Nós fazemos. -Sim. -Presentes. -Oh garoto. Presentes. Presentes. Presentes. Mal posso esperar para abrir o meu primeiro. Envelopes. São títulos de poupança. Legal. Você sabe, em sete anos, você poderá comprar algo muito bom. Você talvez tenha alguma que comprou há sete anos? -Alvin, boas maneiras. -Obrigado,Dave. Sim. Obrigado Dave. -Ian? -Quem quer presentes? -Tudo certo. -Legal. Ei, há muito mais de onde isso veio. Traga-os, pessoal. -Oh sim. -Jackpot. O que você está fazendo? -Cuidando dos meus meninos. Sim, é disso que estou falando. Esquisito. O que aconteceu com seus presentes? -Qual é o meu? -Essa grande é para mim, eu acho. O que você conseguiu com eles? Títulos de poupança. Ótimo. Exatamente o que toda criança sonha. Você está com sorte. Seu tio Ian apareceu. -Legal. -tio Ian? Isso é para mim? Não, é para Simon. -Teodore. -Oh garoto. -E Alvin. Obrigado Papai Noel. Isto é para você. Você gosta dos Oak Ridge Boys, certo? Sim, de nada. E adivinhem, pessoal. o tio Ian vai ter uma grande festa de lançamento para o novo CD. Está certo. Imprensa, paparazzi. Fotos de Hollywood. Os nove metros inteiros. -Impressionante. -Doce. Sim.Dave, você tem uma semana para me escrever um novo single de sucesso. Tudo certo? Algo descolado e fresco. -Paz. Nós saímos. -Tchau, tio Ian. -Feliz Natal. -Agora é realmente Natal. Mayday, mayday.

Ian: Por aqui, por aqui, por aqui. Tudo certo. Tudo certo. Acalme-se, acomode-se. Obrigado por ter vindo. É uma noite muito especial hoje à noite. Aqui na Jett Records, nos orgulhamos de trazer a música de amanhã hoje. Oh. E adivinhe. Eu fiz de novo! Senhoras e senhores, aqui para cantar seu novo hit, desista de Alvin... Simon ... e Theodore!

Sim, no lugar de serem Esquilos no M-I-C "Witch Doctor" Todos, podem fazê-lo? Eles podem fazer isso? Vá lá, pessoal, vamos lá Vamos lá Vamos lá Vamos lá Vá lá, agitar, vá lá, rolar Todo mundo bate no chão Vamos lá, agitar, vá lá, rolar Com os Esquilos, aqui vamos nós Eu disse ao feiticeiro que eu estava apaixonado por você Eu disse ao feiticeiro Você não me amava também E então o feiticeiro Ele me disse o que fazer Ele disse: Ooh para o eeh o ooh o ah ah Para o ting para o tang O wallawalla bingbang Ooh para o eeh o ooh o ah ah Ting tang wallawalla bingbang Ooh para o eeh ooh o ah ah Para o ting para o tang O wallawalla bingbang Ooh para o eeh o ooh o ah ah Ting tang wallawalla bingbang Yo, DJ, bombeie esta festa! Todo mundo, eles podem fazer isso? - Eles podem fazer isso? -Go! Vai! Vai! Vá lá, pessoal, vamos lá! Vai!Vai! Vamos, agite, vamos lá, role Todo mundo bate no chão Vamos, agite, vamos lá, role Com os esquilos, aqui vamos Alvin! Simon! Theodore! Eu disse ao feiticeiro Você não me amava de verdade Eu disse ao feiticeiro Você não me amava bem E então o feiticeiro Ele me deu esse conselho Ele me disse: Para o formigamento para o tang O wallawalla bingbang Ooh para o eeh ooh o ah ah Ting tang wallawallawalla bingbang Você tem mantido amor de mim -E isso não é muito inteligente -Não muito inteligente eu saí e me encontrei alguém que me dissesse como conquistar seu coração Meu amigo, o feiticeiro Ele me disse o que dizer Meu amigo, o feiticeiro Ele disse eu o que fazer Eu sei que você será minha Quando eu digo isso para você - Oh, baby, baby!-Ooh para o eeh ooh o ah ah Para o ting para o tang O wallawalla bingbang Ooh para o eeh ooh o ah ah Ting tang wallawallawalla bingbang Ooh para o eeh ooh o ah ah Para o formigamento para o tang A wallawalla bingbang Ooh para o eeh the ah ah ah Ting tang wallawallawalla bingbang Sim. Tudo bem, pessoal da festa. Você sabe como fazemos isso. Entre na pista de dança, deixe-me ver o que você conseguiu. -Obrigado. -Obrigado. -Você se importa se eu pegar algumas fotos? -Claire. -Nada. Dispare. -Ótimo. Eu tenho uma nova tarefa. Estou cobrindo sua ascensão à fama. -Ah, aqui são Alvin, Simon e Theodore. -Oi. -Olá. -Oi Claire. Você é gostosa. Esqueceu que vocês não se conheceram oficialmente. Então, Dave... ...Sinto muito por aquela noite. Eu realmente pensei que você ... Que eu era louco? Eu entendo totalmente. Falando esquilos. É muito para receber durante o jantar.Mas olhe para você agora. Você tem a carreira, prometendo futuro, crianças. Você é como uma família. Não diga famíliana frente de Dave. Isso lhe dá gás. -Como, gás claro no quarto. -Não faz. Ele não quer uma família. Por que vocês não vão brincar ou invadir a mesa de sobremesas? Não leve para o lado pessoal, pessoal. Algumas pessoas não sabem nada de bom quando a têm. Certo, Dave? Claire. Sem ofensa, grandalhão, mas você não é bom nisso. Ei, o que você acha disso? -O que é isso? -É o Alvin. Isso não se parece em nada com Alvin. Bem, sim. É um protótipo. Vamos vender um milhão dessas coisas. É ativado por voz. Aqui, diga algo a ele. Olá, boneca Alvin feia que não se parece em nada com Alvin. -Vejo? Você ama isso. É espanhol. -Você sabe o que? Isso é estranho. Vamos, Dave, Dave, Dave. Temos que expandir a base de fãs dos Munks. Quero dizer, esqueça a música. A música é apenas um meio para o grande dinheiro,OK? Estou falando de nossa própria linha de roupas de pele, colônia. -Quero dizer-- -Eles são apenas crianças. Não, eles são ratos. E eles poderiam ganhar muito dinheiro para nós dois ... -... se você me deixar trabalhar com eles. -Eu não consigo ouvir você, a música é muito alta. Não vá contra mim nisso, Dave. Eu nunca perco. Alguém já experimentou as almôndegas de chocolate? Provavelmente vou entrar em choque de insulina. Mas vale a pena. Oh, uma carne doce, doce e doce de melaço. Ei, alvster. Ame a música, mano. -Alto. -O que há, jogador? Então eu vejo que você está gostando da minha pequena propagação que eu coloquei para vocês. Do que estou falando? Você provavelmente come assim o tempo todo. Bem, Dave diz que não quer nos mimar. Cara, você é uma estrela do rock. Você deveria ser mimado. Quero dizer, você deveria estar andando de limusine e avião particular.E você deveria ir a festas como essa todas as noites. mesmo? Porque Dave diz que precisamos dormir. Alvin, isso é difícil de dizer, mas, quero dizer, tenho que ser sincero sobre isso. Dave está te segurando, você sabe. Eu poderia estar fazendo você 20 grandes por dia. -Isso é muito? -Sim. Outra coisa-- eu não vou te contar. Eu vou te contar. Olha, pelas suas costas, Dave liga para você... ...os ratos. -Ratos? -Sim. Tanto faz, certo? Eu sei. Bem, não deixe que isso o incomode. Quero dizer eu? Eu considero vocês meninos família. E se precisar de algo, alguma coisa ... ... ligue para seu tio Ian, está bem? -Ah, certo. -Ciao.

Alvin: Vamos, amigo! Você dirige como minha avó! Pegue uma cadeira de rodas! Mova-se!

Simon: Ei, pessoal, olhem para mim! Para cima, para cima e para longe! Uau! [gritando] Alvin! [gritando]

Alvin: Não posso ajudá-lo, Simon. Estou prestes a assumir a liderança aqui.

Dave: Ei, pessoal, eu tenho uma ideia para uma nova música.

Simon: [ gritando ] Whoa! Ei, Dave.

Dave: O que está acontecendo aqui? Eu pensei que tinha dito para vocês limparem.

Simon: Nós somos.

Dave: Hum, quem é esse?

Simon: O tio Ian contratou-nos uma governanta. Ela também é massagista. [ronronar]

Alvin: Vamos lá, passar por cima, porco da estrada. Conduza ou estacione, amigo. Entra na pista lenta.

Dave: Onde você conseguiu esse jogo?

Alvin: Uh, tio Ian. Mova-o ou perca-o! Arranja umas rodas de treino, amigo!

Dave: Ok. Sabes o quê? Já chega!

Alvin: O que você está fazendo?! Eu estava prestes a bater a minha pontuação alta!

Dave: Pena demais. Onde está Theodore? Eu Sei o que é o Theodore.

Teodoro: Mm-mmm.

Dave: Cuspa!

Teodoro: Não!

Dave: [olha para o cartão incluído na cesta de presentes] "Jett Records." Ok, é isso. Encontro. Agora. Todo mundo no sofá. Você poderia nos dar um minuto? Gente, olha, é difícil. Eu sei. Três meses atrás, você estava saindo em uma árvore em algum lugar e agora você está--

Alvin: [Voz baixa] PRINCIPAIS ESTRELAS DE ROCK.

Dave: Ok, tanto faz. O que quero dizer é que só porque você é--

Alvin: [Voz baixa] PRINCIPAIS ESTRELAS DE ROCK.

[ DERRODUÇÃO DE BALÃO ]

Dave: Não significa que você pode ter ou fazer o que quiser!

Simon: Bem, tio Ian diz que devemos sempre ser felizes.

Dave: Ok, você sabe o que? Ele não é seu tio!

Alvin: Ele também, David, disse que deveríamos fazer $ 20 por dia.

Dave: Bem, adivinhe. Você está fazendo muito mais do que isso. E porque eu me importo, estou guardando tudo para você. Assim como armazenar nozes para o inverno.

Alvin: Oh, o inverno é para perdedores.

Simon: Sim. não devemos ter voz sobre como construir nosso portfólio de investimentos?

Dave: De onde tudo isso vem? Vocês são apenas crianças.

Alvin: Crianças, Dave ou ratos?

Dave: O que?!

Theodore: Bem, o tio Ian diz que somos como a família dele.

Dave: Oh sim? Bem, se você ama tanto o tio Ian e não acha que estou cuidando de você, por que você não vai morar com o tio Ian?

Dave? Você ainda está com raiva de nós? Dave? Caros rapazes, me desculpe, mas.... Você deve voltar para sua casa real na floresta. Eu acho que ele realmente quer que a gente vá.

Ian: Eu te disse, Dave. Eu nunca perco. Meninos, sejam bem-vindos à sua nova casa.

Esquilos: Uau!

Alvin: Ah sim! Casa do papai!

Ian: Sim!

Theodore: Podemos brincar com tudo isso?

Ian: Certo. Por que não? É a sua casa.

Simon: Então, quais são as regras por aqui?

Ian: Oh. Eu tenho uma regra: que não há regras!

Esquilos: Legal!

Simon e Theodore: Uau!

[ SOLO ALTO ]

Simon: Elevação de quatro graus. Seis graus de azimute. Fogo! Whoo-hoo-hoo! Uau! [Gritos de karatê] Prepare-se para enfrentar a fúria da minha vingança.

Theodore: Ha ha ha! Não me faça rir!

Simon: Ore por uma morte rápida, jovem esquilo. Uppercut! Esquerda! Falsificação, falsificação!

Alvin: Hah! Hyee! Hah!

Simon e Theodore: Uau! [Gritos de karatê]

Alvin: Seu kung fu não é páreo para meus foguetes. Hee-yah! Hã?

Simon: Ataque de escárnio!

Alvin: Aaah!

Theodore: Uau! Ok, Simon, já chega! Eu terminei agora. Simon!

Alvin: Ei! Me dê isso!

Simon: Solte, Alvin!

Alvin: Oh vamos lá!

Theodore: Uau!! Socorro!

Alvin: Você teve uma vez!

Simon: Quem disse que você tem uma volta?

Alvin: Me dê isso!

Theodore: Waa! [gritando] Simon!

Alvin: Você tem que tentar!

Simon: Tire suas patas sarnentas!

Theodore: Socorro! Socorro! Uau!

Simon: Scram!

Alvin: Eu quero isso!

Simon: Eu quero tentar!

Theodore: Uau!

Alvin e Simon: Ah!

Theodore: Whooooaaa! Uau!

Alvin: Por que os airbags não foram implantados?

Simon: Theodore, não entre na luz!

Theodore: Ufa! Vamos fazer de novo!

Alvin: Impressionante!

Ian: Jogando duro?

Alvin: Ai sim!

Ian: Boa. Porque amanhã, você começa a trabalhar duro. Costa a costa em cinco dias.

Theodore: Bem, D-Dave diz que a turnê não é ao vivo para uma criança.

Ian: Para um normal criança. Vocês são superstars!

Alvin: Sim. Sim.

Ian: O que me lembra. Simon, vamos nos livrar desses óculos chatos e experimentar esses óculos super legais no momento. Oh, meu G – oh.

Simon: Seria ótimo se eu pudesse ver com eles.

Ian: Seus olhos vão se ajustar. Vamos lá rapazes. Vamos pegar a estrada.

-Shotgun. -Bata na estrada. Alvin-- Me dê um grande cara. Alvin, grande, grande. Sem esconder. Vamos! Vamos. Faça amor com a câmera. Venda. Grande sorriso. Sim. Theodore, queixo para fora. Sim. É isso aí. Coisas boas. Ai está. Venha, entre lá. Forte. Me dê um saque. Espanque. Aí está. Agora você entendeu. Se os esquilos gostam de petiscos crocantes, seu animal de estimação os amará. Cortar. Aqui estamos. OK? Tudo certo? Segure. Nós não terminamos. -Você me diz. -Me matando. -O que você quer?

Ian: Don, você está me matando!

Don: O que você quer que eu faça sobre eles? Não há botão que eu possa apertar que os acorde por tempo suficiente para cantar as notas certas.

Ian: Você está brincando? Há 5 mil botões aqui!

Don: Você me diz, que botão você –

Ian: Bem. Bem. Entendi. Tudo bem, pessoal. Adivinha o que seu tio Ian trouxe para você. Café.

Theodore: Hmm? eu amor caramelo!

Ian: Não, é "café", Theodore. Café. É um – como uma bebida de saúde com energia super fria com chantilly, caramelo e duas bombas de chocolate. Aproveitar. [alto] Isso deve mantê-los acordados.

Esquilos: [tudo soluçando; tagarelando; gritando; tagarelando]

Alvin: [gemendo]

Ian: [murmuradores] Oh, cara.

Seja munk'd -Vá, vá, vá Sim, esquilos Sempre pode ficar munk'd Ei, ei, ei Venha e se molhe Com os rugrats Chipmunk Venha e se envolva com os Munks Seja munk'd com os rugrats Chipmunk Venha e se divirta com os Munks

Ian: Corte, corte, corte. Pare. Pare. Vamos lá pessoal. Precisamos de mais energia, ok? Precisamos de mais gelo seco. Precisamos de mais, você sabe, uau! Tudo certo? Nós somos os esquilos, por chorar em voz alta!

Isso é absurdo. Eu me sinto como P. Tonto com pêlo. E para ser sincero, as novas músicas realmente não soam como nós. Bem, você sabe o que eu acho? Eu acho que a nova direção é perfeita, você sabe. É tudo sobre a vantagem de hoje. Dave sempre dizia que era tudo sobre a música. Dave sempre dizia.... Você sabe o que? Dave, Dave, Dave. Dave não está aqui, ok? Sou eu. É divertido tio Ian, está bem? OK? O que você é--? O que você vai dizer? Qual o seu nome? -Taffy. -Taffy? Que tipo de nome é Taffy? O que você faz? -Coreografia. -Eu não sei o que coreografia é. -O que é isso? -É dança. Oh, está dançando? Bem, da próxima vez diga, você sabe, Eu sou o cara da dança--Olá? Quem? Dave Sevilha. O nome toca uma campainha. Um sino morto ... quebrado. -Só me deixe falar com os caras. -Eu não acho que seja uma boa ideia, Dave. Os meninos ainda estão picando um pouco de você chutando-os pela porta. -Não foi o que aconteceu. -Negação. Então, o que é isso que eu ouvi sobre uma turnê européia? Você os leva embora por seis meses? Não, 12 na verdade. Se conseguirmos que a China fique esquilo. 12? Olha, eu só queria dizer oi. Veja como eles estão. Eles estão indo muito bem. Eles estão amando a vida. Vivendo grande. Encare isso, Dave. Eles seguiram em frente. -Eles estão felizes agora. Ian, eu quero falar com eles. Coloque-os no telefone. Sim, acho que isso não vai acontecer, Dave. Tenho uma turnê mundial, vou começar amanhã. E esses caras não precisam de pressão extra. -Nós lhe enviaremos um cartão postal. -Ian, você pode'faça isso. Eles não estão prontos para algo assim. Eles são apenas crianças. - Vou vê-los. - Olha, Dave, eu estou--Espere. -Eu sou? - Sim? O quê? - Ian. - Eu não posso - Ian... ...foi esse Dave? Sim. Sim, foi. Ele queria que eu te dissesse que ele é ótimo e que está feliz. Ele está muito, muito feliz. Então.... Tudo bem. E ele vem ao espectáculo? Sabes o quê? Mandei-lhe bilhetes. E aqui está a coisa, ele mandou-os de volta. Sim, eu sei. Acho que ele está ocupado, sabes. Tenho coisas melhores para fazer. Ei, vá lá. O que há com os rostos peludos? Vamos divertir-nos. Vamos ter um grande espectáculo. Digo-vos o quê, gostam de massagem profunda? Está bem? Conheço um tipo. Deixe-me chamar meu cara. Eu vou entrar nisso. Dave, eu estou ... Espere. -Ian? -Sim? O que? -Ian. -Eu não posso-- Ian ... ... era esse Dave? Sim. Sim, foi. Ele queria que eu soubesse que ele é ótimo e feliz. Ele é muito, muito feliz. Assim.... Tudo certo. E ele está vindo para o show? Você sabe o que? Enviei-lhe ingressos. E aqui está a coisa, ele os enviou de volta. Sim, eu sei. Eu acho que ele está ocupado, você sabe. Tem coisas melhores para fazer. Ei, vamos lá. O que há com os rostos peludos e longos? Nós vamos nos divertir. Nós vamos ter um grande show. Vou lhe dizer uma coisa, vocês gostam de massagem profunda? Tudo certo? Eu conheço um cara. Deixe-me ligar para o meu cara. Eu vou continuar com isso. Dave, eu estou ... Espere. -Ian? -Sim? O que? -Ian. -Eu não posso-- Ian ... ... era esse Dave? Sim. Sim, foi. Ele queria que eu soubesse que ele é ótimo e feliz. Ele é muito, muito feliz. Assim.... Tudo certo. E ele está vindo para o show? Você sabe o que? Enviei-lhe ingressos. E aqui está a coisa, ele os enviou de volta. Sim, eu sei. Eu acho que ele está ocupado, você sabe. Tem coisas melhores para fazer. Ei, vamos lá. O que há com os rostos peludos e longos? Nós vamos nos divertir. Nós vamos ter um grande show. Vou lhe dizer uma coisa, vocês gostam de massagem profunda? Tudo certo? Eu conheço um cara. Deixe-me ligar para o meu cara. Eu vou continuar com isso. E ele está vindo para o show? Você sabe o que? Enviei-lhe ingressos. E aqui está a coisa, ele os enviou de volta. Sim, eu sei. Eu acho que ele está ocupado, você sabe. Tem coisas melhores para fazer. Ei, vamos lá. O que há com os rostos peludos e longos? Nós vamos nos divertir. Nós vamos ter um grande show. Vou lhe dizer uma coisa, vocês gostam de massagem profunda? Tudo certo? Eu conheço um cara. Deixe-me ligar para o meu cara. Eu vou continuar com isso. E ele está vindo para o show? Você sabe o que? Enviei-lhe ingressos. E aqui está a coisa, ele os enviou de volta. Sim, eu sei. Eu acho que ele está ocupado, você sabe. Tem coisas melhores para fazer. Ei, vamos lá. O que há com os rostos peludos e longos? Nós vamos nos divertir. Nós vamos ter um grande show. Vou lhe dizer uma coisa, vocês gostam de massagem profunda? Tudo certo? Eu conheço um cara. Deixe-me ligar para o meu cara. Eu vou continuar com isso.

Ian: Ei, capitão, venha aqui. Ouço. Dave Sevilha. Aprenda o nome, procure o rosto. Se ele aparecer amanhã à noite, ele não se aproxima dos meus esquilos. Entendi?

Capitão: Entendi.

Ian: Tudo bem.

Theodore: Tio Ian?

Ian: [ofegante; murmurando; ofegante] O que você está fazendo aqui?

Theodore: Posso dormir com você? Eu tive um pesadelo.

Ian: Oh! Você teve um pesadelo? Eu também tive um pesadelo. No meu pesadelo, tive que montar 37 datas em 42 dias, em 16 países diferentes. E eu tive que coordenar 121 entrevistas diferentes de rádio e impressão em cinco idiomas diferentes! Mas você sabe o que, Theo? A única diferença é – no meu pesadelo, quando abro os olhos, isso não acaba!

Theodore: Então – isso é um não? Uau! [suspira] Ohh.

Simon: [zumbido] Hmm. Ahh.

Theodore: Gente, eu quero ir para casa.

Simon: O que você quer dizer? Você são casa.

Theodore: Não. Quero dizer casa casa. Você sabe. Com o Dave.

Alvin: Mas, Theodore, vamos lá. Acorde e cheire o caramelo. Dave nem nos quer. Ele não se importa o suficiente para vir ao nosso show.

Aqui está Julianne Reynolds com as notícias de entretenimento de hoje. Cansado demais para balançar? Os esquilos podem ser. Rumores de exaustão e tensão de voz estão girando em torno da sensação de canto. É por causa da sobrecarga de waffles da torradeira? Ou um cronograma rigoroso de turnê? É difícil dizer. Mas o gerente-produtor Ian Hawke garantiu à Fox ... ... o trio fará sua primeira parada hoje à noite ... ... em sua turnê mundial altamente antecipada no Orpheum Theatre em Los Angeles. É isso aí. OK.

Vocês três parecem ter gargalhado as unhas. -Eu vou te cobrir. -Obrigado. Podemos pegar guarda-roupa aqui embaixo, por favor? Bem? Eu poderia lhe dar muitos termos extravagantes, mas, na linha de fundo, eles estão exaustos. Certo, dê-lhes uma dose, um creme, uma pílula ou algo assim. Eu investi cada centavo que tenho nesses caras. Eles precisam de um longo descanso. Um longo descanso. Você está--? OK. Sim, um longo descanso, certo. Certo, sim. Eu não sou médico, então.... Vou descansar. Obrigado. Eu vou cuidar disso. Muito obrigado. Eu vou-- eu aprecio isso. Ei, ei, doutor. Febre de esquilo, pegue-a. Bata, bata. Então ouçam, pessoal, acabei de falar com o médico. E não me sinto bem em mandar vocês assim. Então você vai cancelar o show? Não. Não, então eu teria que dar reembolsos. Não. O que eu'Estou falando de sincronizar os lábios. Sim. Não é como trapacear? Não, não é como trapacear. É-- Trapacear está errado. Isso é mais como ajudar. Sim, todas as estrelas fazem isso. Apenas certifique-se de que você fale as palavras exatamente como as gravamos. Caso contrário, as pessoas saberão. -Que estamos trapaceando. -Não. -Gente, que outra escolha temos? Sim. Vejo? É por isso que ele é o único com a carta. Tudo bem, pessoal, apertem-se. E lembre-se, bale as palavras e ninguém saberá. Te amo. Você sabe que conseguiu Quando você deixa cair o seu Escalade Para o topo da gota Iced out, pedras quentes Droppin 'doll, grito de senhoras Ei, tem que pegar esse creme Você sabe que conseguiu Quando eles mandam um desfile Quando você cai Escreva um cheque na cidade Tudo por um dia Tenho que pegar esse creme -Não você sabe disso'é como eles rolam? -Rolo, rolo, rolo Você pode descer com o funk, funk, funk dos esquilos? Baby, você sabe Funk, funk, funk dos esquilos

Oh, vamos lá, você precisa ter mais um ingresso.

Desculpa.

Vamos lá, aqui está Theodore Você está aqui para ficar Quando você está sempre sendo pago E isso não para, nunca, não Não vai parar, não importa o que eles digam -Tem que viver o sonho -Pegue, Simon Você está aqui para ficar Quando seus méis pensam que você bate 'Porque nós entendemos Todo mundo assiste eu amo isso. Você ama isso? Febre de esquilo. Pegue, querida. Dave Sevilha. Não, não há Dave Sevilha nesta lista. Você sabe o que? Isso é bom. Eu sou o editor do L.A. Jornal de música. -Não, acho que não. -Ele está comigo. Ele é meu assistente. OK. Obrigado Claire.

O que está acontecendo, Dave? O que você é--?

Preciso recuperar meus meninos, mas Ian está tentando me manter de fora.

Seus meninos.

Eu sei que provavelmente parece estranho vindo de mim. É um bom estranho, no entanto. Porque depois de tudo o que fiz para estragar tudo, incluindo você-- -

Dave, seus meninos. Nós devemos ir.

-Direita. OK. Como rolamos Vamos lá, você consegue sentir? -Como rolamos -Sim, sim, vamos lá Se você vai fazer alguma coisa, faça rápido.

Aqui. -Você é imprensa, lembra?

Obrigado.

Roll

Vamos, amigo. Você está fora daqui.

Dave: Eu sou fotógrafo. Eu tenho um passe de imprensa! Alvin! Alvin! ALVINNN!!!

Alvin: Dave! Ele está aqui!

Simon: É o Dave!

Alvin: Whoo-hoo!

[ VOCALS CONTINUANDO ]

Cantor: O que?

[ BOOING DA MULTIDÃO ]

Ian: O que está acontecendo?

Simon: Alvin! O que você está fazendo?

Alvin: Estou enviando uma mensagem para o nosso querido velho tio Ian.

Simon: Parece um plano para mim.

Theodore: Eu também!

[ BOOING ALTO ]

Alvin On Tape: Vamos! ♪ Hey-ey-ey-yeah ♪

Alvin: Vamos lá pessoal! Ei, Ian! [mulher grita] Beije minhas bochechas peludas!

Ian: Sim. Aqui. Segure-se nisso. Ótimo.

Simon: [Sotaque irlandês] Topo da manhã para você!

["A lavadora irlandesa"]

Theodore: Uau! sim!

Baterista: Saia do meu set!

Simon: Você está pronto para o rock?? Aumente, meninas!

Cantores: ♪ Como rolamos / Como rolamos ♪

Alvin: Eu vou morder! Ho-ho-hoo!

Rapper: Ei ei! Não! Não!

Dave: Alvin! Simon, Theodore! Vamos lá pessoal, estamos indo para casa!

Ian: Mover! Mover!

[ BOOING CONTINUA ]

Alvin: Vamos lá!

Dave: Não!

Simon: Caramba!

Ian: Pegue eles!

Alvin: Tenha cuidado! Corre!!

Theodore: Oi! Tchau!

Alvin: Eenie, meenie, minie, moe! Perdeu esse esquilo porque você é lento! Yippee-ki-yay, mamacita.

Theodore: Assista seus joelhos! Desculpa!

Simon: Vamos, grande amigo. Vamos! Vamos! Um pouco mais perto. Vamos! Ali! Perfeito! Ele sentirá isso de manhã.

Dave: Rapazes!

Esquilos: Dave!

Guarda de segurança: Você não vai a lugar nenhum!

Esquilos: Ow!

Dave: O que você está fazendo?

Alvin: Nos abaixe!

Simon: Me deixar ir!

Theodore: Ei!

Ian: É melhor você estudar francês, porque vai a Paris hoje à noite. OK?

Alvin: Solte! Acabei de refeito meu rabo!

Dave: Não espera!

Ian: Pegue isso. Coloque com minhas coisas.

Alvin: Vamos sair daqui.

Dave: Não!

Alvin: Vamos sair daqui!

Dave: O que? Ian, eles não querem mais isso. Apenas deixe-os ir.

Ian: Mas o cara acabou de sair. Você deveria ter dito algo cerca de cinco segundos atrás. [levemente] Volte. Ehh.

Dave: Ian, eles precisam de uma vida real. Nem tudo isso. Além disso, eles acabaram de arruinar o show. A notícia sairá, ninguém virá vê-los.

Ian: Dave, eles são esquilos que falam. As pessoas virão. Cante comigo. ♪ Whoa-oh-whoa / É assim que rolamos ♪

Alvin: Você nunca vai nos levar vivos!

Simon: Eles apenas fez leve-nos vivos, Alvin.

Alvin: É uma figura de linguagem, Simon. Em vez de me criticar, por que não usar seu grande cérebro para pensar em uma saída?

Ian: Vai Vai Vai Vai. Vai!

[Dave segue Ian, pois ele não vai perder os esquilos novamente]

Dave: Vamos.

[Nesse momento, Alvin, Simon e Theodore aparecem secretamente no carro de Dave]

Alvin: Pise nisso, Dave. Você está perdendo ele.

[Dave para o carro e fica surpreso que Alvin, Simon e Theodore tenham escapado]

Dave: Como vocês...?

Simon: Estamos falando de esquilos, Dave. Podemos sair de um portador de gatos. Nem difícil de fazer.

Theodore: Você voltou para nós.

Dave: Bem, é claro que voltei. Nós somos uma família.

[Os esquilos ofegam]

Simon: Putas.

Alvin: O que? Estou ficando louco? Ou ele acabou de dizer "família"?

Dave: Eu sei, mas eu realmente senti falta de vocês.

Theodore: Eu também senti sua falta, Dave.

Simon: Eu também. Alvin também. Ele é legal demais para admitir. Sim, muito macho.

Alvin: *tosse * Também senti sua falta. Desculpe, eu tinha algum sentimentalismo preso na garganta. Eu apenas disse que também sentia sua falta.

Dave: Tanto faz. Quem são vocês para me julgar?

Alvin: Ok, você sabe o que? Sinto falta do meu amigo Dave, ok? Vou gritar dos telhados. E eu não tenho medo. Eu não tenho vergonha. Está certo. Eu te amo, Dave.

Dave: Venha aqui.

[Alvin chega até Dave e os esquilos abraçam Dave quando a família finalmente volta a se reunir novamente]

Alvin: Dave?

Dave: Sim, Alvin?

Alvin: Agora posso dirigir?

Theodore: Oh, por favor, por favor, por favor.

Simon: Eu quero trabalhar com os limpadores de pára-brisa.

Alvin: Ah, e eu gostaria de tocar a buzina.

Dave: Tenha isso, pessoal.

[Os esquilos assumem o controle da roda quando os quatro voltam para casa]

Theodore: Eu sou um bom bip.

Simon: Guarde um pouco de buzina para o resto de nós.

Alvin: Vamos, Dave, dirija mais rápido.

Simon: Não com você dirigindo.

Alvin: Dave, você dirige como um urso velho e sonolento.

Dave: Ok, Alvin, já chega.

Alvin: Chega de quê? De ser incrível?

Dave: Alvin, eu disse que basta.

Alvin: Ei, olhe, Dave, sem patas. Whoo-hoo!

Ian: Ei, se vocês se comportarem, talvez eu deixe você me ligar tio Ian de novo. Combinado?

Theodore Doll: [ JAPONÊS FALANDO ]

Simon Doll: Bonjour! Je m'appelle Simon.

Alvin Doll: Olá. Me llamo Alvin. Você é um Hula Hoop.

Ian: ¡Madre de Dios! NOOOOOOOOOO!

Dave: [campainha tocaClaire.

Claire: Ei.

Dave: Entre.

Alvin: Olá, Clarina.

Claire: Oi pessoal.

Dave: Espero que você goste de waffles de torradeira.

Alvin: E, para nós, esquilos elegantes, um pouco do espumante.

Claire: Ohhh.

Alvin: [tentando abrir uma garrafa] Estúpido ... cortiça ... não...

[A cortiça se solta e voa]

Alvin: Uau! [a cortiça esmaga o vidro em um armário de porcelana]

Claire: Oh!

Alvin: Caramba! [ri nervosamente] Opa.

Dave: Não vou dizer isso.

Alvin: Ah.

Simon: Que pena.

[Champanhe derrama por todo o chão]

Claire: Ainda não vai dizer isso?

Dave: Não. [Champanhe atinge a faixa de energia; zumbidos de eletricidade; problemas de fumaça da faixa de energia, causando um blecaute na casa ] Eu vou dizer isso. Alvin!!!

Alvin: OK!

Ian: Ok, pessoal, vamos lá, vamos tentar novamente. Aqui vamos nós e cantamos. Vamos, cante para o seu tio Ian. Vamos lá, cante. Por quê--? Por que você não canta? Você sabe, eu disse, cante. Cantar.
`;

enviarScript(script, 2000)
    .then(e => console.log(`Código finalizado, ${e} mensagens enviadas`))
    .catch(console.error);