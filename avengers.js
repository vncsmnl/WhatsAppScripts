async function enviarScript(scriptText) {
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
            await new Promise(resolve => setTimeout(resolve, 250));
        }
    }

    return lines.length;
}

enviarScript(`
OS VINGADORES

Escrito por

Joss Whedon                        

"E chegou um dia, um dia diferente de qualquer outro, quando a Terra
heróis e heroínas mais poderosos se viram unidos contra um
ameaça comum. Naquele dia, os Vingadores nasceram - para combater o
inimigos que nenhum super-herói poderia suportar! Através dos anos,
sua lista prosperou, mudando muitas vezes, mas sua glória
nunca foi negado! Atenda a ligação, então - por enquanto, os Vingadores
Montar!"

QUEIMANDO CHAMAS AZUL. Uma forma de cubo esfumaçado surge - O TESSERATO.
Preenchendo a tela com BLACKNESS.

CORTE PARA:

EXT. SALA DE TRONE, ESPAÇO � NOITE

Ajoelhado atrás de um THRONE, uma FIGURA ARMADA e ROUPADA conhecida como THE
OUTROS arcos.

O OUTRO ( V.O. )
O Tesseract despertou. Está em um
pequeno mundo. Um mundo humano. Eles fariam
exercer seu poder,...

CORTE PARA:
O OUTRO enfrenta uma SOMBRA DE FORMA CHIFRE. LOKI. Loki recebe o
CHITAURI SCEPTER, uma longa alça dourada, equipada com uma jóia azul
cercado por lâminas de prata.

O OUTRO ( V.O. )
Mas nosso aliado conhece seu funcionamento como eles
nunca será. Ele está pronto para liderar. E
nossa força, nosso Chitauri, seguirá.

ALTO LARGO: Dezenas de milhares de chitauri estão prontos em um
massa fervente de linhas e colunas organizadas .... o chão simplesmente

QUAKES.

O OUTRO ( V.O. )
O mundo será dele. O universo
seu. E os humanos, o que eles podem fazer
mas queimar?

CORTE PARA:

EXT. S.H.I.E.L.D. FACILIDADE DO PROJETO P.E.G.A.S.U.S � NOITE

No NOVO deserto do MÉXICO, uma instalação de pesquisa remota está em um
estado de pânico. É uma evacuação. Um helicóptero de SWOOPING voa
no.

CHAOS. Homens de terno correm como no típico nós temos que
deixe 'moda. Soldados a pé pulam em Humvees, acelerando
o inferno fora dali.Uma VOZ grita com alto - falantes ocultos.

EXT.PAIZINHO DO HELICÓPTERO � CONTÍNUO

A poucos metros da pista de pouso, um Fed de terno com
tons durões, colegas no helicóptero quando ele pousa.Isto é

AGENTE DE ESCUDO PHIL COULSON.

Saindo do helicóptero está o AGENTE SHIELD MARIA HILL, SEXY,
CAMPO E DETERMINADO.Seguindo - a, DIRETOR DE ESCUDO NICK FURY
sobe.Hill e Fury se aproximam do agente Coulson.

NICK FURY
Quão ruim é isso ?

AGENTE PHIL COULSON
Esse é o problema, senhor.Nós não sabemos.

INT.PISO DE INSTALAÇÃO � NOITE

O agente Coulson lidera Hill and Fury através da seção de radiação
da instalação.Centenas de técnicos e outros funcionários administram
ao redor, levando apenas o essencial.

AGENTE PHIL COULSON
Dr.Selvig leu um surto de energia de
o Tesseract há quatro horas.

NICK FURY
A NASA não autorizou Selvig a testar
fase.

AGENTE PHIL COULSON
Ele não estava testando, ele nem estava
o quarto.Avanço espontâneo.

AGENTE MARIA HILL
Apenas se ligou ?

NICK FURY
Quais são os níveis de energia agora ?

AGENTE PHIL COULSON
Escalada.Quando Selvig não conseguiu fechá - lo
abaixo, pedimos a evacuação.

NICK FURY
Quanto tempo leva todo mundo para sair ?

AGENTE PHIL COULSON
O campus deve ficar claro na próxima metade
hora.

NICK FURY
Faça melhor.

CONTINUAMENTE ATRAVÉS DO PISO DE FACILIDADE DE RADIAÇÃO

AGENTE MARIA HILL
Senhor, a evacuação pode ser inútil.

NICK FURY
Devemos dizer a eles para voltarem a
dormir ?

AGENTE MARIA HILL
Se não podemos controlar os Tesseract
energia, pode não haver um mínimo seguro
distância.

NICK FURY
Preciso que você verifique se a FASE 2
protótipos são enviados.

AGENTE MARIA HILL
Senhor, isso é realmente um direito prioritário
agora ?

NICK FURY
Até o fim do mundo,
vai agir como se pretendesse girar
em.Limpe a tecnologia abaixo.Todo
pedaço de PHASE 2 em um caminhão e se foi.

AGENTE MARIA HILL
Sim senhor.
(a agentes permanentes)
Comigo.

INT.FACILIDADE DE RADIAÇÃO ESPAÇO DA NASA, CÂMARA DE VÁCUO � CONTÍNUA

A fúria entra nas instalações do laboratório onde o Tesseract está sendo mantido
por uma CÂMARA DE CARREGAMENTO SOLENOID COMPACT.

NICK FURY
Fale comigo, doutor.
DR.O ERIK SELVIG emerge de trás da máquina CMS, em questão.
O Tesseract está brilhando extraordinariamente mais brilhante e anéis de sinalização
atirar aleatoriamente.

SELVIG
Diretor.

NICK FURY
Existe algo que sabemos com certeza ?

SELVIG
Tesseract está se comportando mal.

NICK FURY
Isso deveria ser engraçado ?

SELVIG
Não, não tem graça nenhuma.O
Tesseract não é apenas ativo,
ela está ... se comportando mal.

NICK FURY
Quanto tempo até você puxar o plugue ?

SELVIG
Ela é uma fonte de energia.Se desligarmos
o poder, ela liga novamente.Se ela
atinge o nível de pico...

NICK FURY
Nós nos preparamos para isso, doutor.
Aproveitando a energia do espaço.

SELVIG
Nós não temos o arnês.Nosso
os cálculos estão longe de estar completos.Agora
ela está jogando fora a interferência,
radiação.Nada prejudicial, baixos níveis
de radiação gama.

NICK FURY
Isso pode ser prejudicial.Cadê o Barton ?

SELVIG
O Hawk ? Em seu ninho, como sempre.
Vemos CLINT BARTON, vestido com equipamento tático preto,
os trilhos os observando abaixo, Fury chama Barton em seu
fone de ouvido.

NICK FURY
Agente Barton, relatório.
BARTON rapel da passarela.Anda até Fury.Eles
ambos andam pela instalação de maneira discreta.

NICK FURY
Eu lhe dei esse detalhe para que você pudesse
fique de olho nas coisas.

CLINT BARTON
Bem, vejo melhor à distância.

NICK FURY
Você está vendo algo que possa definir
essa coisa ?

CIENTIST

(PARA SELVIG)
Doutor, está aumentando novamente.

CLINT BARTON
Ninguém veio ou se foi.É forno é
limpo.Sem contatos, sem I.M.'s. Se houver
foi alguma adulteração, senhor, não foi em
esse fim.

NICK FURY
Nesse fim ?

CLINT BARTON
Sim, o cubo é uma porta para o
outro fim do espaço, certo ? As portas
aberto de ambos os lados.
DR.SELVIG se afasta do teclado e vê no
monitorando seus piores pesadelos.De repente, o Tesseract
COMEÇAS e AGITA toda a instalação.Grande o suficiente onde ambos
Agents Hill e Coulson podem sentir e estão em diferentes extremos
da instalação.
Os anéis de queima e o brilho do cubo jorram mais brilhantes e
mais alto, como uma panela fervente de água.A energia do Tesseract
se transforma em um BEAM muito parecido com a Ponte Bifrost, que HITS
no final de uma plataforma conectada ao dispositivo CMS.O
grande feixe de turbilhão FIRES a energia TESSERACT.O feixe então
forma um VORTEX, que abre um PORTAL.
UM FURO NEGRO É CRIADO.Do portal, a escuridão de
ESPAÇO, bonito e misterioso, repleto de um bilhão de estrelas
aparece e um GUSTO DE NUVENS DE ENERGIA AZUL enche a sala, cegando
todos.
A energia do Tesseract se forma em uma nuvem que chega ao
no topo do teto da câmara de vácuo da instalação.É anormalmente
quieto.Então... RESPIRAÇÃO PESADA é ouvida na plataforma.
GUARDA ESCURA se aproxima lentamente, armas nas mãos.Uma figura é
ajoelhado na plataforma, fumaça saindo dela.É LOKI.
Sorrindo de maneira travessa, ele levanta a cabeça.O sorriso
morre.Ele olha profundamente nos olhos de Fury, Barton e
Selvig.Ele se levanta, escondendo o cetro.

NICK FURY
Senhor, por favor, abaixe a lança!
Loki olha para sua lança e de repente aponta para onde Fury
e Barton está de pé e dispara uma luz azul de exploração
PARA ELES.BARTON TACKLES Fury e os dois mal sentem falta
O tiro de Loki.
TODOS OS QUEBRAM.O tiro de metralhadora é disparado em Loki, mas o
balas ricocheteiam nele como um chefe.Loki pula alto do
plataforma e ataca aqueles que atiram nele.
Em um piscar de olhos, Loki derruba vários guardas com seu
FACAS E BRILHAS ENERGIA DO cetro.Ele para e espera para
veja quem o atacará a seguir.Honestamente, todo o laboratório tem quase
foi para a merda.
Barton tenta se levantar.Loki caminha rapidamente em sua direção.Barton
levanta a arma, mas Loki agarra a mão de Barton.

LOKI
Você tem coração.
Loki aponta a cabeça de sua lança para a cabeça de Barton.Barton
olhos brilham repentinamente PRETOS.A capacidade de controlar a mente de Barton
está agora na mão de Loki.Barton coloca sua peça e fica de pé
direto.
Como Loki está ocupado usando suas habilidades para controlar as mentes de
vários S.H.I.E.L.D.pessoal, Fury leva o Tesseract,
colocando - o de volta no estojo e tenta sair do laboratório...

LOKI
Por favor não.Eu ainda preciso disso.

NICK FURY

(GIRAR)
Isso não precisa ficar mais confuso.

LOKI
Claro que sim.Eu vim longe demais
para qualquer outra coisa.Eu sou Loki de Asgard,
e eu estou sobrecarregado com glorioso
propósito.

SELVIG
Loki ? Irmão de Thor ?

NICK FURY
Não temos brigas com seu povo.

LOKI
Uma formiga não tem brigas com uma bota.

NICK FURY
Você está planejando pisar em nós ?

LOKI
Eu venho com boas novas, de um mundo
feito livre.

NICK FURY
Livre de quê ?

LOKI
Liberdade.Liberdade é a grande mentira da vida.
Depois de aceitar isso, em seu coração...
Como um pistoleiro, Loki se vira para enfrentar Selvig que
atrás dele e coloca sua lança contra o coração de Selvig.
Os olhos de Selvig brilham PRETOS.

LOKI
Você conhecerá a paz.

NICK FURY
Sim, você diz paz, eu meio que penso
você quer dizer a outra coisa.
Do teto da câmara de vácuo, a nuvem de energia da Tesseract
RAPIDAMENTE se transforma no que pode ser uma implosão.

CLINT BARTON
Senhor, o diretor Fury está parado.Este
lugar está prestes a explodir.Solte cem
pés de pedra sobre nós.Ele quer enterrar
nos.

NICK FURY
Como os faraós de Odin.

SELVIG
Ele tem razão.O portal está entrando em colapso
em si mesmo.Você tem talvez dois minutos
antes que isso seja crítico.

LOKI
Bem então...
Loki, olhando para Barton, que nem hesita, atira em peles
QUEM CAI NO TERRENO.Barton pega o caso que contém o
Tesseract e sai do laboratório com Loki, Selvig e o outro
O pessoal da S.H.I.E.L.D Loki está controlando.

INT.BUNKER DE P.E.G.A.S.U.S, ENTRADA DO TÚNEL DE SAÍDA � NOITE

Loki, Barton, Selvig e os outros funcionários da S.H.I.E.L.D estão em
o estacionamento da instalação, reunindo rapidamente algumas
armas.O agente Hill assiste em confusão, referindo - se a Loki.

CLINT BARTON
(apontando para a equipe Loki)
Precisa desses veículos.

AGENTE MARIA HILL
Quem é aquele ?

CLINT BARTON
Ele não me contou.
O agente Hill olha desconfiado para eles quando entram no caminhão
e se vira para sair, enquanto ela se afasta...

NICK FURY
(através do walkie - talkie )
Hill, você copia ? !
Loki e Barton SHARPLY olham para o agente Hill.

VOLTAR AO LABORATÓRIO
A fúria está sentada, puxando a bala, respirando pesadamente.

NICK FURY
Barton é...

INT.P.E.G.A.S.U.S BUNKER � NOITE

De repente, Hill vira para SHOOT AT BARTON, mas Barton já está
Pintando sua arma para ela e começa a atirar, ele move o
banco do motorista do caminhão e sai correndo como Hill mantém
tiro.

VOLTAR AO LABORATÓRIO
Fury está do lado dele, correndo.

NICK FURY
Ele tem o Tesseract! Encontre - o!
A energia está realmente produzindo uma tempestade de merda do
teto da câmara de vácuo.

INT.P.E.G.A.S.U.S BUNKER / TUNNEL � NOITE

Agent Hill entra em um JEEP e segue atrás de Barton
caminhão.Os caminhões de Loki giram pelo túnel.Vários SHIELD
caminhões puxam até eles.Um tiroteio acontece.
Loki, que fica em cima da cama do caminhão, usa seu
o cetro e o EMITS explodem energia, capotando sobre caminhões SHIELD.
Eles entram, os carros rugem atrás deles.Agent Hill coloca
ela mesma à distância.

INT.PISO DE INSTALAÇÃO � NOITE

A fúria sai do corredor, evitando a queda de canos.O
toda a instalação está agora em um terremoto.

INT.PISO DE INSTALAÇÃO, EM OUTRO LUGAR � CONTÍNUO

O agente Coulson e vários agentes da SHIELD caem da escada,
descartando CASOS DE PRATA de informações.Eles tentam agarrá - los,
mas...

AGENTE PHIL COULSON
Não! Deixar!
Eles saem dali como um morcego do inferno.

INT.TÚNEL P.E.G.A.S.U.S � NOITE

JEEP ROARS do agente Hill de um lado do caminhão e
puxa ao lado deles à esquerda.Ela vai muito à frente e
puxa o freio, deslizando para um 360, de frente para o caminhão de Barton e
dirigindo ao contrário.
Os BRAÇOS de Barton alcançam a janela aberta e ABRE FOGO.Agente
Hill calcula foda-se 'e atira seu pára-brisa ABERTURANDO FOGO em
Barton.

EXT. VAN � NOITE

O agente Coulson pula em uma VAN SHIELD. Em seu walkie:

AGENTE PHIL COULSON
Você está claro, senhor! Você precisa ir!

EXT. PAIZINHO DO HELICÓPTERO � CONTÍNUO

A fúria sai da instalação e pula em um helicóptero. O
a superfície da almofada cede, puxando o helicóptero através
a superfície. Mas o helicóptero de Fury, BARELY, consegue.

INT. TÚNEL P.E.G.A.S.U.S � NOITE

Ainda em uma sequência de perseguição e drive-by, Barton empurra o
pedalar mais, o que faz com que o JEEP do agente Hill saia e
coloque-a de volta para trás.

INT. FACILIDADE DE RADIAÇÃO, CÂMARA DE VÁCUO � NOITE

A nuvem de energia do Tesseract agora se transforma em uma pequena bola de
LUZ BRANCA. Então...

UMA NUVEM DE LUZ AZUL CONSUME A INTEIRA FACILIDADE E PEÇAS DE
O DESERTO. A fúria observa de baixo, um acúmulo RAPID no que
pode ser uma implosão. A vários quilômetros de distância, a van do agente Coulson
sente um JOLT da BLASTWAVE do Tesseract. TODA A FACILIDADE

SUAS PARTES EM SI - UMA IMPLOSÃO TERRIFICANTE E UNIMAGINÁVEL.

INT. TÚNEL P.E.G.A.S.U.S � NOITE

A onda do Tesseract faz com que o túnel o desmorone.
Como uma onda oceânica, migalhas ofuscantes de rochas caindo, caem sobre
JEEP da agente Hill, deixando-a quase presa sob este cobertor
de pedra.
No caminhão do Barton, eles escapam do túnel e entram no
paisagem deserta. O helicóptero de Fury percorre o caminhão de Barton.
Loki olha para cima.
Da porta do helicóptero, ela se abre e Fury fica lá,
segurando uma arma, atirando no Barton's, dando uma imagem honrosa de

JULES WINNFIELD.
Loki olha para Fury e em um ataque de RAGE, aponta seu cetro
TIRAR A LUZ AZUL. O helicóptero pega fogo, indo
EM BAIXA EM UMA BOLA DE CAMPO. Fúria, como o chefe que ele é, SALTA E
toca no chão do deserto. O helicóptero BARRELS ao longo
o chão.
Fúria, voltando aos seus sentidos, FIRES em Loki, mas eles são
muito longe e muito tarde. Loki olha para trás, sorrindo. Fúria permanece
lá, mente se recuperando. Então...

AGENTE PHIL COULSON

( WALKIE TALKIE )
Diretor? Diretor Fury, você copia?

NICK FURY
O Tesseract está com o hostil
força. Eu tenho homens caídos. Colina?

INT. TÚNEL P.E.G.A.S.U.S � NOITE

A agente Hill sobe seu JEEP, que está imprensado, mas
felizmente, não ela.

AGENTE MARIA HILL
Muitos homens ainda estão lá embaixo, não sabem
quantos sobreviventes.

EXT. DESERTO � NOITE


NICK FURY
Toque a chamada geral. Eu quero todo
alma viva não trabalhando resgate procurando
para esse breve caso.

AGENTE MARIA HILL

( WALKIE TALKIE )
Entendido.

NICK FURY
Coulson, volte para a base. Isto é um
NÍVEL SETE. A partir de agora, estamos em
guerra.
Uma batida.

AGENTE PHIL COULSON

( WALKIE TALKIE )
O que nós fazemos?
Fúria fica lá. Pensando. Ele olha para cima. Em seu rosto há sinal de
esperança.

OS AVENGERS

EXT. RÚSSIA, SOLENSKI PLAZA, 3o ANDAR � NOITE

Nos arredores, perto de uma ferrovia, ainda em construção
edifício está sendo ocupado por GEORGI LUCHKOV, um GRANDE, RUSSO
GERAL junto com seus bandidos.
THUG TALL está no meio de uma batida brutal na NATASHA
ROMANOFF, UM ESPIÃO DE SONO, FOXY, INDEPENDENTEMENTE SEXY. Ele retrocede
O rosto de NATASHA. Ela sente a dor, mas não quebra.
LUCHKOV, sorrindo, caminha até ela. O diálogo está no russo.

LUCHKOV
Não era assim que eu queria que a noite
vai.

NATASHA
Eu sei como você queria esta noite
vai. Acredite, isso é melhor.

LUCHKOV
Eu gostaria de saber por que eles te enviaram para
realizar um transportador, um vitral
e outros itens aleatórios.
THUG TALL balança a cadeira para trás, equilibrando-a na borda de um
andar aberto. Natasha agora está assustada.

NATASHA
Eu pensei que o general Soholob estava no comando
do negócio de exportação.

LUCHKOV
Soholob? Sua reputação é bastante
progressão. A FAMOSA SEGURA NEGRA.
Nada além de um rosto bonito.

NATASHA
Você realmente me acha bonita?
LUCHKOV caminha lentamente até uma mesa cheia de ferramentas. Ele escolhe
um alicate. THUG TALL abre a boca aberta.

LUCHKOV
Não precisamos do Lermontov para
transfira os tanques. Diga a ele, bem,...

( EM INGLÊS )
Você pode ter que anotá-lo.
De repente, o celular de WEASELLY THUG toca. Confuso, ele responde.

BATIDA
Ya?
( olha para LUCHKOV )
É para você.
LUCHKOV pega o telefone, chateado.

LUCHKOV
Quem diabos é...

AGENTE PHIL COULSON
Você está no 114 Solenski Plaza, 3o andar.
Temos um F22 exatamente a 13 quilômetros de distância. Colocar
a mulher no telefone ou eu vou explodir
suba o bloco antes que você possa fazer o
lobby.
MERDA SANTA. LUCHKOV coloca o telefone celular contra a orelha de Natasha
vendo como ela está amarrada a uma cadeira com as mãos amarradas atrás dela
de volta.

AGENTE PHIL COULSON
Precisamos que você entre.

NATASHA
Você está de brincadeira? Estou trabalhando!

AGENTE PHIL COULSON
Isso tem precedência.

NATASHA
Estou no meio de um interrogatório
e esse idiota está me dando tudo.

LUCHKOV
Eu não dou tudo.
Natasha dá uma olhada nele.

NATASHA
Olha, você não pode me tirar disso
agora mesmo.

AGENTE PHIL COULSON
Natasha. Barton foi comprometido.
Uma batida.

NATASHA
Deixe-me colocá-lo em espera.
Ela assente a LUCHKOV. Quando Luchkov vem tirar o telefone dela,
Natasha o bate com a perna e o mata. Como uma aranha,
ela se levanta elegantemente e começa a atacar o bandido
BALANÇANDO-O na cara.
Ainda amarrada, ela ROLA sobre o bandido pesadamente depois de tropeçar nele.
Ela então pisou no pé de bandido com um pino da cadeira, depois

Bate-o com a cabeça.
Sim, durante tudo isso, Coulson ainda está esperando na linha. Ela
então vira e cai com força em bandidos pesadamente, quebrando
A CADEIRA. Ela vê o THUG TALL.
Dando seu impulso, ela corre para ele DROP KICKING ele, CAI
BAIXO e vira de volta e agita suas pernas ao redor de seu pescoço

E o mata frio.
Ela agarra LUCHKOV, envolve a perna com uma corrente pendurada e
o deixa no chão aberto, balançando. Ela pega o telefone
e os calcanhares, como um chefe.

NATASHA
Onde está Barton agora?

AGENTE PHIL COULSON
Nós não sabemos.

NATASHA
Mas ele está vivo.

AGENTE PHIL COULSON
Achamos que sim. Vou informá-lo
tudo quando você voltar. Mas
primeiro, precisamos que você converse com os grandes
cara.

NATASHA
Coulson, você sabe que Stark confia em mim
tanto quanto ele pode me jogar.

AGENTE PHIL COULSON
Não, eu tenho Stark. Você fica grande
cara.

NATASHA
Bozhe moi.

EXT. SLUM INDIANO � NOITE

UMA MENINA PEQUENA atravessa a multidão, tentando forçar um caminho
através.

INT. SHACK � NOITE

Uma pequena cabana. A MENINA sobe as escadas, apenas para ser
parado por uma mulher assistente. Então, a MENINA O vê.
BRUCE BANNER, seu médico LOCAL.

ADICIONANDO MULHER
O que está fazendo aqui?! Saia! Você
não deveria estar aqui!

MENINA
Eu tenho que ver o médico! É meu
pai!

BANNER
Acalme-se. O que está errado?

MENINA
Meu pai...
Banner olha para trás, vendo como a garota está olhando para alguns
pessoas, deitadas, parecendo muito doentes.

BANNER
Ele é como eles?
A MENINA aguenta todo o dinheiro que tem no mundo.

MENINA
Por favor.

EXT. SLUMS � CONTÍNUO

Banner e a MENINA correm às pressas quase até a borda de
cidade. A MENINA fica à frente de si mesma. Locais de banner locais
carro do governo, ele se vira, bloqueando qualquer visão dele.

EXT / INT. SHACK DE MENINA PEQUENA � NOITE

Banner segue rapidamente a MENINA dentro de sua casa. Como ele
entra, a MENINA ESCAPA ATRAVÉS DA JANELA. Banner is
deixado parado ali como um idiota.

BANNER
Deveria ter sido pago antecipadamente, Banner.
Natasha então aparece por trás das cortinas. Viradas de banner
ao redor, silenciosamente.

NATASHA
Você sabe, para um homem que deveria
esteja evitando o estresse, você escolheu um inferno
de um lugar para se estabelecer.

BANNER
Evitar o estresse não é o segredo.

NATASHA
Então o que é isso? Yoga?

BANNER
Você me trouxe para os limites da cidade,
inteligente. Eu ... assumo o lugar todo
está cercado?

NATASHA
Só você e eu.

BANNER
E sua atriz amiga, ela é uma espiã
também? Eles começam tão jovens?

NATASHA
Eu fiz.

BANNER
Quem é Você?

NATASHA
Natasha Romanoff.

BANNER
Você está aqui para me matar, senhorita Romanoff?
Porque isso não vai dar certo
todos.

NATASHA
Não. Não. Claro que não. Estou aqui
nome da SHIELD.

BANNER
ESCUDO. Como eles me encontraram?

NATASHA
Nós nunca te perdemos, doutor. Nós mantivemos
nossa distância, até ajudou a manter um pouco
outras partes interessadas fora do seu
perfume.

BANNER
Por quê?

NATASHA
Nick Fury parece confiar em você. Mas agora eu
preciso que você entre.

BANNER
E se eu dissesse não?

NATASHA
Eu vou te convencer.

BANNER
E se o ... outro cara disser não?

NATASHA
Você passou mais de um ano sem um
incidente. Eu não acho que você quer quebrar
essa raia.

BANNER
Nem sempre consigo o que quero.

NATASHA
Doutor, estamos enfrentando um potencial global
catástrofe.

BANNER
Bem, aqueles que eu tento evitar ativamente.

NATASHA
Este é o Tesseract. Tem o
energia potencial para acabar com o
planeta.
Ela mostra uma foto do Tesseract em seu telefone celular. Banner
olha mais de perto.

BANNER
O que Fury quer que eu faça? Andorinha
isto?

NATASHA
Bem, ele quer que você encontre. Está
foi levado. Emite uma assinatura gama
isso é muito fraco para rastrearmos.
Não há ninguém que conheça gama
radiação como você faz. Se houvesse,
é onde eu estaria.

BANNER
Então Fury não está atrás do monstro?

NATASHA
Não que ele tenha me dito.

BANNER
E ele conta tudo?

NATASHA
Fale com Fury, ele precisa de você nisso.

BANNER
Ele precisa de mim em uma gaiola?

NATASHA
Ninguém vai te colocar em um...

BANNER

PARE DE mentir para mim!
O tom thundberous em sua voz faz Natasha agarrá-la rapidamente
arma e aponte para ele, mas agora algo está errado no
atmosfera. Banner se levanta, sorrindo.

BANNER
Me desculpe, isso foi cruel. Eu só queria
para ver o que você faria. Por que não fazemos
é assim que você não usa
isso, e o outro cara não faz um
bagunça? OK? Natasha...
Natasha, ainda cautelosa, não abaixa a arma. Ela abaixa a arma
e fala em seu fone de ouvido.

NATASHA
Afaste-se. Nós somos bons aqui.

EXT. FORA DO SALTO DA MENINA � NOITE

Surpreendentemente, DOZENS DE AGENTES ESCURADOS estão cercando a cabana
fora.

INT. SHACK DA MENINA � NOITE

Banner olha para Natasha, encantando um sorriso para ela.

BANNER
Só você e eu?
Natasha se mexe agora que expôs a guarda.

INT. SALA ANALÍTICA ESCURA � NOITE

Fury está enfrentando vários GRANDES MONITORES enquanto ele estava em conferência com
membros do CONSELHO MUNDIAL DE SEGURANÇA.

CONSELHO MUNDIAL DE SEGURANÇA # 1
Isso está fora de linha, diretor. Você é
lidando com forças que você não pode controlar.

NICK FURY
Você já esteve em uma guerra, vereador? No
um tiroteio? Você sentiu um
superabundância de controle?

CONSELHO MUNDIAL DE SEGURANÇA # 1
Você está dizendo que este Asgard tem
guerra declarada em nosso planeta?

NICK FURY
Não Asgard. Loki.

CONSELHO MUNDIAL DE SEGURANÇA # 2
Ele não pode estar trabalhando sozinho. E se
o outro? O irmão dele.

NICK FURY
Nossa inteligência diz que Thor não é um
hostil. Mas ele está a mundos de distância, não podemos
dependa dele para ajudar. Cabe a nós.

CONSELHO MUNDIAL DE SEGURANÇA # 1
É por isso que você deve se concentrar
fase 2, foi projetado para exatamente...

NICK FURY
A FASE 2 não está pronta, nosso inimigo está. Nós
precisa de uma equipe de resposta.

CONSELHO MUNDIAL DE SEGURANÇA # 1
A Iniciativa Vingadores foi encerrada.

NICK FURY
Isso não é sobre os Vingadores.

CONSELHO MUNDIAL DE SEGURANÇA # 1
Estamos executando o melhor do mundo
rede de segurança secreta e você é
vai deixar o destino da raça humana para um
punhado de malucos.

NICK FURY
Não vou deixar nada para ninguém. Nós
precisa de uma equipe de resposta. Essas pessoas
talvez isolado, desequilibrado, mas eu
acredite com o empurrão certo que eles podem ser
exatamente o que precisamos.

CONSELHO MUNDIAL DE SEGURANÇA # 2
Você acredita?

CONSELHO MUNDIAL DE SEGURANÇA # 1
A guerra não é vencida pelo sentimento, diretor.

NICK FURY
Não, é ganho por soldados.

INT. GINÁSIO DE BROOKLYN � NOITE

Em algum lugar de uma antiga academia de boxe quase da Segunda Guerra Mundial, STEVE ROGERS,
um homem sem tempo, O PRIMEIRO AVENGER, FUCKIN 'CAPAIN AMERICA é
PUMMELING um saco de pancadas. A cada balanço, é como uma memória
ele está tentando lutar e reprimir.

EXT. BASE DE HIDRA � DIA ( FLASHBACK )

O Capitão América está correndo pela floresta, esquivando-se dos morteiros,
tiros e armas de fogo energéticas do Tesseract.

STEVE ( V.O. )
Não há tempo suficiente! Eu tenho que colocar
ela na água!

INT. GINÁSIO DE BROOKLYN � NOITE

A raiva de Steve continua aumentando enquanto ele dá um soco na bolsa. Fica
mais difícil...

INT. HORTEN H.XVIII, NAVIO DE SKULL VERMELHO � DIA ( FLASHBACK )

Steve coloca seu COMPASS com uma imagem de PEGGY CARTER. A hora
está aqui para ele bater no avião.

INT. GINÁSIO DE BROOKLYN � NOITE

Steve fecha os olhos. Vai mais forte na bolsa.

PEGGY ( V.O. )
Você não estará sozinho.

INT. HORTEN H.XVIII, NAVIO DE SKULL VERMELHO � DIA ( FLASHBACK )

O CRÂNIO VERMELHO pega o TESSERATO.

INT. GINÁSIO DE BROOKLYN � NOITE

Steve abre os olhos e rasga a bolsa como a última
memória entra em ação. Eu não acho que ele pode parar fisicamente...

CIENTISTA ESCUDO ( V.O. )
Oh meu Deus!

INT. PROJETO P.E.G.A.S.U.S, ANTARCTICA � DIA ( FLASHBACK )

Steve Roger meio congelado está deitado em uma laje médica. Dois
CIENTISTAS DO ESCUDO atropelam dispositivos de alta tecnologia para ver se seus sinais vitais
estão de pé. E parece...

CIENTISTA ESCUDO
Esse cara ainda está vivo!

INT. GINÁSIO DE BROOKLYN � NOITE

Steve FUCKING rasga a bolsa, fora de sua corrente, derramando
a areia. Ele fica de pé, respirando com força, deixando escapar 70 anos de
sobre sentimento reprimido.
Depois de respirar, Steve pega outro soco
bolsa, que fica ao lado de outro saco doido. Ele engancha a bolsa
e começa a socar novamente. Fury entra.

NICK FURY
Problemas para dormir?

STEVE
Eu dormi por setenta anos, senhor. eu acho
Eu tive o meu preenchimento.

NICK FURY
Então você deveria estar comemorando,
vendo o mundo.
Steve para de socar e caminha até o banco, desvendando o
fita das mãos dele. Ele se senta.

STEVE
Eu afundei, o mundo estava em guerra, eu
acorde, eles dizem que vencemos. Eles não fizeram
diga o que perdemos.

NICK FURY
Cometemos alguns erros ao longo do caminho.
Alguns muito recentemente.

STEVE
Você está aqui com uma missão, senhor?

NICK FURY
Eu sou.

STEVE
Tentando me trazer de volta ao mundo?

NICK FURY
Tentando salvá-lo.
Fury entrega a Steve um arquivo no Tesseract, juntamente com outros arquivos
nos projetos da HYDRA.

STEVE
Arma secreta de Hydra.

NICK FURY
Howard Stark pescou isso fora do
oceano quando ele estava procurando por você. Ele
pensou o que pensamos, o Tesseract
poderia ser a chave para ilimitado
energia sustentável. Isso é algo
o mundo precisa muito.

STEVE
Quem tirou de você?

NICK FURY
Ele se chama Loki. Ele não é de todo
aqui. Temos que trazer muito
você até a velocidade se estiver dentro. O
mundo ficou ainda mais estranho que você
já sei.

STEVE
Neste ponto, duvido que algo faria
me surpreenda.

NICK FURY
Dez dólares dizem que você está errado. Há um
pacote de interrogatório esperando por você de volta
no seu apartamento.
Steve vira e pega um saco de pancadas. Começa a sair de
a academia.

NICK FURY
Existe algo que você possa nos contar
o Tesseract que devemos conhecer
agora?

STEVE
Você deveria ter deixado no oceano.

INT. OCEANO � NOITE

No Oceano Atlântico, TONY STARK, em seu traje IRON MAN, está
cortando um TRANSPORTE PIPELINE com um cortador a laser vindo de sua
mão. Ele então coloca um REATOR DE ENERGIA ESCURO. Acende. FERRO
O homem sai da água e voa em direção à STARK TOWER.

TONY
Você é bom nesse sentido. O resto está acabando
para você.

POTENCIAS DE PIMENTAÇÃO
( na outra linha )
Você desconectou as linhas de transição?
Estamos fora da grade?

DENTRO DO TERNO - O PEPPER APELA SEU MONITOR HUD.

TONY
Stark Tower está prestes a se tornar um farol
de energia limpa auto-sustentável.

PIMENTA
Uau. Então talvez nosso reator assuma
e realmente funciona?

TONY
Eu assumo. Acenda-a.
Enquanto o IRON MAN voa para o EDIFÍCIO DE CALÇAS, o poder é
ligado e o sinal STARK acende.

PIMENTA
Como fica?

TONY
Como o Natal, mas com mais ... eu.

PIMENTA
Tenho que ir mais longe na conscientização do público
campanha. Você precisa pressionar um pouco. eu
pode fazer mais um pouco amanhã. estou trabalhando
no zoneamento para os próximos outdoors.

TONY
Pepper, você está me matando. Lembrar?
Aproveite o momento.

PIMENTA
Então entre aqui e eu irei.
TONY chega à sua cobertura de arranha-céus e está em processo
de tirar seu traje IRON MAN através de uma manopla de alta tecnologia
gadgets.

JARVIS
Senhor, o agente Coulson da SHIELD está no
linha.

TONY
Eu não estou dentro. Na verdade, estou fora.

JARVIS
Senhor, receio que ele esteja insistindo.

TONY
Feche a linha Jarvis. Eu tenho um encontro.

INT. PENTHOUSE DE TONY � NOITE

O PEPPER POTTS olha para os monitores do dispositivo do reator.

PIMENTA
Os níveis estão se mantendo firmes... Eu acho que.

TONY
Claro que sim, eu estava diretamente
envolvido. O que me leva ao meu próximo
pergunta: como é ser um
gênio?

PIMENTA
Bem, ha, eu realmente não saberia agora,
eu faria?

TONY
O que você quer dizer? Tudo isso veio de
tu.

PIMENTA
Não. Tudo isso veio disso.
Aponta para a energia em sua placa torácica.

TONY
Dê a si mesmo algum crédito, por favor.
Stark Tower é seu bebê. Dê
você mesmo ... doze por cento do
crédito.

PIMENTA
Doze por cento?

TONY
Um argumento pode ser feito para quinze.

PIMENTA
Doze por cento? Para o meu bebê?

TONY
Bem, eu fiz todo o trabalho pesado.
Literalmente, levantei as coisas pesadas.
E desculpe, mas o segurança snafu? Que
estava com você.

PIMENTA
Oooooh.

TONY
Meu elevador particular...

PIMENTA
Você quer dizer o nosso elevador?

TONY
...estava repleto de trabalhadores suados. eu sou
vai pagar por esse comentário sobre
porcentagens de alguma maneira sutil depois,
não sou?
Pepper derrama a si mesma e a Tony uma taça de champanhe.

PIMENTA
Não vai ser tão sutil.

TONY
Eu vou te dizer uma coisa. Próximo edifício
vou dizer 'Potts' na torre.

PIMENTA
No arrendamento.

TONY
...Ligue para sua mãe, você pode beliche?

JARVIS
Senhor, o telefone. Eu tenho medo meu
protocolos estão sendo substituídos.

AGENTE PHIL COULSON
Stark, precisamos conversar. Tony pega
o telefone e olha para Coulson.

TONY
Você alcançou o modelo de vida chamariz
de Tony Stark, por favor, deixe uma mensagem.

AGENTE PHIL COULSON
Isso é urgente.

TONY
Então deixe com urgência.
Nesse momento, a porta do elevador se abre e Coulson aparece.

TONY
Violação de segurança.

( PARA PEPPER )
Isso é com você.

AGENTE PHIL COULSON
Sr. Stark.

PIMENTA
Phil! Entre.

TONY
Phil? O primeiro nome dele é agente.

PIMENTA
Entre, estamos comemorando.

TONY
É por isso que ele não pode ficar.

AGENTE PHIL COULSON
Precisamos que você examine isso.
( ele mantém um arquivo em direção a

STARK )
O mais rápido possível.

TONY
Eu não gosto de receber coisas.

PIMENTA
Está tudo bem, porque eu amo estar
coisas entregues. Então, vamos negociar.
Ela passa sua taça de champanhe para Coulson e pega o arquivo
dele, depois pega sua taça de champanhe de Coulson e
passa o arquivo para Stark.

PIMENTA
Obrigado.

TONY
O horário oficial de consultoria é entre
oito e cinco todas as quintas-feiras.

AGENTE PHIL COULSON
Esta não é uma consulta.

PIMENTA
Isso é sobre os Vingadores? Qual eu...eu
não sei nada sobre.

TONY
A Iniciativa Vingadores foi descartada, eu
pensamento. E eu nem me qualifiquei.

PIMENTA
Eu também não sabia disso.

TONY
Sim, aparentemente eu sou volátil, auto-
obcecado, não brinque bem com os outros.

PIMENTA
Que eu sabia.

AGENTE PHIL COULSON
Não se trata de perfis de personalidade
Mais.

TONY
Tanto faz. Senhorita Potts, tem um minuto?
Pepper caminha até Tony, que coloca os arquivos nos seus
bancos de dados.

TONY
Sabe, eu pensei que estávamos tendo um
momento.

PIMENTA
Eu estava tendo doze por cento de um
momento. Isso parece sério, Phil's
bem abalado.

TONY
Como você percebeu? Por que ele é Phil?

PIMENTA
O que é tudo isso?

TONY
Isto é...
Tony EXPANDE seus braços e perfis diferentes aparecem em
forma holográfica flutuando no ar na frente de Tony e
Pimenta.

TONY
Este.
As telas aparecem da AMÉRICA DO CAPITÃO EM AÇÃO, o HULK ROARING AS

ATAQUE O EXÉRCITO NA UNIVERSIDADE DE CULVER, COM LUTA
DESTROYER e outro é de Loki e o Tesseract, ao qual
Stark e Pepper olham admirados.

PIMENTA
Vou levar o jato para D.C.
esta noite.

TONY
Amanhã.

PIMENTA
Você tem lição de casa. Você tem muito
de lição de casa.

TONY
Bem, e se eu não fizesse?

PIMENTA
Se você não fez?

TONY
Sim.

PIMENTA
Você quer dizer se você terminou?
( Stark acena com a cabeça )
Bem, hum ... então...
Ela sussurra algo em seu ouvido. Tony GASPS. Looks de Coulson
longe em vergonha.

TONY
Oferta quadrada. É o último encontro.
Pepper o beija.

PIMENTA
Trabalhe duro.
Quando Pepper sai com o agente Coulson, Tony agarra o Tesseract em
forma de holografia, preocupada.

INT. QUINJET � DIA

Dentro do QUINJET, Steve está sentado, segurando um TABLET,
assistindo as imagens do ataque do Hulk ao exército em Culver
Universidade.

PILOTO
Estamos a cerca de quarenta minutos de
base, senhor.
O agente Coulson se levanta do assento e caminha até Steve.

STEVE
Então, este doutor Banner estava tentando
replicar o soro usado em
mim?

AGENTE PHIL COULSON
Muitas pessoas eram. Você era o
primeiro super-herói do mundo. Banner pensou
radiação gama pode conter a chave para
desbloqueando a fórmula original de Erskine.
O Hulk ruge de fúria enquanto bate um jipe à parte.

STEVE
Realmente não seguiu o seu caminho, não é?

AGENTE PHIL COULSON
Nem tanto. Quando ele não é essa coisa
no entanto, o cara é como um Stephen Hawking.
Steve parece confuso.

AGENTE PHIL COULSON
Ele é como uma pessoa inteligente. Eu tenho que dizer,
é uma honra conhecê-lo oficialmente.
Steve sorri para Coulson.

AGENTE PHIL COULSON
Eu meio que te conheci, quero dizer, eu assisti
você enquanto dormia.
Steve olha para baixo. Ele se levanta, fecha o laptop e caminha para
o lado com Coulson seguindo.

AGENTE PHIL COULSON
Quero dizer, eu estava... Eu estava presente enquanto
você estava inconsciente do gelo. Você
sabe, é realmente, é apenas um ... apenas
uma grande honra tê-lo a bordo.

STEVE
Bem, espero ser o homem para o trabalho.

AGENTE PHIL COULSON
Ah você é. Absolutamente. Uh ... nós temos
fez algumas modificações no uniforme.
Eu tinha um pouco de contribuição de design.

STEVE
O uniforme? Não são as estrelas e
listras um pouco ... antiquadas?

AGENTE PHIL COULSON
Com tudo o que está acontecendo, o
coisas que estão prestes a vir à tona,
as pessoas podem precisar de um pouco de idade
formado.
Steve absorve o sentimento de Coulson.

INT. LABORATÓRIO SUBTERRÂNEO � DIA

Vários soldados sob o controle mental de Loki correm, preparando
para se infiltrar no que Loki planejou. Loki se senta,
assistindo Selvig trabalhar com um dispositivo CMS. Loki medita, até...

EXT. SALA DE TRONE � NOITE

...o cetro o materializa de volta para a sala do trono do THE
OUTRO, totalmente armado em seu capacete e armadura com chifres. O OUTRO
aparece nas etapas.

O OUTRO
Os Chitauri ficam inquietos.

LOKI
Deixe-os ir para si mesmos. Eu vou liderar
eles em uma batalha gloriosa.

O OUTRO
Batalha? Contra o escasso poder de
Terra?

LOKI
Glorioso, não demorado. Se sua força é
tão formidável quanto você afirma.

O OUTRO
Você nos questiona? Você o questiona? Ele,
que colocou o cetro na sua mão, quem
deu-lhe conhecimentos antigos e novos
propósito quando você foi expulso,
derrotado?

LOKI
Eu era um rei! O legítimo rei de
Asgard! Traído!

O OUTRO
Sua ambição é pequena, nascida de
necessidade infantil. Nós olhamos além da Terra
para mundos maiores o Tesseract
revelar.

LOKI
Você ainda não tem o Tesseract.
O OUTRO corre para atacá-lo, mas para quando Loki aponta sua
cetro.

LOKI
Não ameacei, mas até abrir o
portas, até que sua força seja minha
comando, você é apenas palavras.

O OUTRO
Você terá sua guerra, Asgardian. Se
você falha, se o Tesseract for mantido em
nós, não haverá reino, não será estéril
lua, sem fenda onde ele não pode encontrar
tu. Você acha que conhece dor? Ele vai
fazer você desejar algo tão doce quanto
dor.
O OUTRO coloca a mão na cabeça de Loki e o transporta de volta
para a terra. Loki olha em volta, ameaçador.

EXT. LANÇAMENTO DE HELICARRE � DIA

O QUINJET pousa uma BATALHA MASSIVA conhecida como
HELICARRIER. Tem duas pistas. Um com acesso direto a um
o hangar na parte traseira está alinhado ao longo da coluna do navio.
O agente Coulson e Steve andam pela rampa, encontrando-se com
Natasha.

AGENTE PHIL COULSON
Agente Romanoff. Capitão Rogers.

STEVE
Senhora?

NATASHA
Oi.

( PARA COULSON )
Eles precisam de você na ponte. Hora de enfrentar.

AGENTE PHIL COULSON
Vejo você lá.
O agente Coulson vai embora deixando Steve com Natasha, andando
em direção à grade do navio.

NATASHA
Havia bastante agitação por aqui,
encontrando você no gelo. eu pensei
Coulson ia desmaiar. Ele perguntou a você
para assinar seu comércio com o Capitão América
cartões ainda?

STEVE
Cartões de negociação?

NATASHA
Eles são vintage, ele está muito orgulhoso.
Sem perceber, Banner não os percebe andando enquanto ele
é nervoso como o inferno. Ele se move enquanto as pessoas continuam andando
caminho.

STEVE
Dr. Banner.
Steve caminha até Banner e aperta as mãos.

BANNER
Oh sim. Oi. Eles me disseram que você estaria
chegando.

STEVE
Dizem que você pode encontrar o cubo.

BANNER
Essa é a única palavra em mim?

STEVE
Única palavra com a qual me preocupo.

BANNER
( assume o sentimento )
Deve ser estranho para você, tudo isso.

STEVE
Bem, isso é realmente meio que
familiar.

NATASHA
Senhores, você pode querer entrar
um minuto. Vai ficar um pouco difícil
respirar.
De repente, o HELICARRIER começa a AGITAR enquanto se prepara para voar
"vela."

STEVE
Este é um submarino?

BANNER
Mesmo? Eles me queriam submerso
recipiente de metal pressurizado?
Ambos se aproximam da borda do HELICARRIER. QUATRO ENORME

VENTIMENTOS MONTADOS NOS LADOS COMEÇA A ELEVAR NO AR
VTOL FLIGHT. Steve assiste em AWE enquanto Banner sorri.

BANNER

AH NÃO. ISSO É MUITO Pior.

INT. PONTE HELICARRIER � DIA

As portas se separam e entramos na PONTE DO NAVIO � uma enxurrada de
atividade � dezenas de agentes sentam-se na frente de seus VIEWSCREENS.
A agente Hill grita suas instruções para sair. Vira para NICK FURY,
quem está na cadeira de comando.

AGENTE MARIA HILL
Estamos trancados, senhor.

NICK FURY
Boa. Vamos desaparecer.

EXT. SKY

O HELICARRIER sobe alto nos céus. De repente, o
navio inteiro é coberto por espelhos refletores, que então
camuflagens no céu.

INT. PONTE HELICARRIER � CONTÍNUO

Steve e Banner atravessam a gloriosa ponte brilhante,
assumindo sua posição no SCIENCE CONSOLE.

NICK FURY
Cavalheiros.
Steve dá a Fury 10 dólares, referindo-se à sua declaração anterior
sobre nunca mais ser surpreendido. Fury caminha sobre Banner e
estende a mão dele. Banner, relutantemente sacode.

NICK FURY
Doutor, obrigado por ter vindo.

BANNER
Obrigado por perguntar bem. Então, como
por muito tempo eu vou ficar?

NICK FURY
Quando colocamos as mãos no Tesseract,
você está livre.

BANNER
Onde você está com isso?
Nick Fury se vira para o agente Coulson para explicar, enquanto Natasha
Romanoff vê uma imagem de Clint Barton na tela do computador.

AGENTE PHIL COULSON
Estamos varrendo todos os sem fio
câmera acessível no planeta.
Celulares, laptops. Se estiver conectado
para um satélite, são olhos e ouvidos para
nos.

NATASHA
Isso ainda não vai encontrá-los
Tempo.

BANNER
Você tem que restringir o campo. Quantos
espectrômetros aos quais você tem acesso?

NICK FURY
Quantos existem?

BANNER
Ligue para todos os laboratórios que você conhece, diga para eles
coloque os espectrômetros no telhado e
calibrá-los para raios gama. eu vou
desbaste de um algoritmo de rastreamento baseado em
reconhecimento de cluster. Pelo menos nós poderíamos
descartar alguns lugares. Você tem
algum lugar para eu trabalhar?

NICK FURY
Agente Romanoff, você mostraria
Dr. Banner para o laboratório, por favor.
Natasha assente e sai, levando Banner pelo corredor.

NATASHA
Você vai adorar, doutor. Temos tudo
os brinquedos.

INT. LABORATÓRIO SUBTERRÂNEO, SALA DE VÁCUO � DIA

Selvig e vários cientistas trabalham em torno do dispositivo CMS.
Bartonwalks entra, segurando um tablet.

SELVIG
Coloque ali!

( TO BARTON )
Onde você encontrou todas essas pessoas?

CLINT BARTON
SHIELD não tem escassez de inimigos,
Médico.
Ele segura uma tela mostrando informações sobre o IRIDIUM.

CLINT BARTON
É isso que você precisa?

SELVIG
Sim, irídio. É encontrado em
meteoritos, forma anti-prótons. Está
muito difícil de se apossar.

CLINT BARTON
Especialmente se SHIELD sabe que você precisa.

SELVIG
Bem, eu não sabia!
( vê Loki chegando )
Ei! O Tesseract está me mostrando isso
muito. É mais do que apenas conhecimento,
é verdade.

LOKI
Eu sei. O que isso mostrou a você, agente
Barton?

CLINT BARTON
Meu próximo alvo.

LOKI
Diga-me o que você precisa.

CLINT BARTON
Vou precisar de uma distração.
( agarra seu arco )
E um globo ocular.

INT. PONTE HELICARRIER � NOITE

Enquanto eles estão esperando para localizar Loki usando o rosto via satélite
reconhecimento, Coulson e Steve ficam lado a lado, esperando.

AGENTE PHIL COULSON
Quero dizer, se não for demais.

STEVE
Não não. Está bem.

AGENTE PHIL COULSON
É um conjunto vintage. Levei um par
de anos para coletar todos eles. Perto
hortelã, leve raposa nas bordas,
mas...

AGENT JASPER SITWELL
Temos um sucesso. Sessenta e sete por cento
partida. Peso, partida cruzada, setenta e
nove por cento.

AGENTE PHIL COULSON
Localização?

AGENT JASPER SITWELL
Estugarda, Alemanha. 28, Konigstrasse.
Ele não está exatamente se escondendo.

NICK FURY
Capitão, você acordou.
Steve assente. Folhas.

EXT. MUSEU STUTTGART � NOITE

Loki em frente ao museu, vestido no século XXI
vestuário e com o cetro, disfarçado de bengala, caminha até
a entrada da gala.

INT. STUTTGART GALA � NOITE

No interior, uma gala luxuosa com uma orquestra tocando, é
interrompido enquanto o médico caminha até o microfone.

INT. HELICARRIER, LOCKER DE STEVE � NOITE

Steve entra em seu próprio vestiário. Quando ele se aproxima do
armário de aço, as portas já revelam o CAPITÃO atualizado
UNIFORME DA AMÉRICA, juntamente com o famoso SHIELD. Ele fica em
silêncio.

EXT. MUSEU STUTTGART � NOITE

Fora do museu, os GUARDS ALEMÃES estão em suas posições. Um
deles está em pé no topo do telhado, em escopo. Ele então ouve um

THWACK!
Ele olha para baixo. Um de seus guardas é baleado com uma SETA. Ele
levanta a arma. Ele é morto a tiros por uma flecha. Cai. Barton
e sua tripulação chega às portas do prédio da ciência trancado.
Barton olha para o scanner da retina. Ele puxa um olho de SHIELD
instrumento scanner.

INT. STUTTGART GALA � NOITE

Loki olha de cima do museu e desce até onde
DOUTOR DA CABEÇA é. Quando ele desce e se aproxima do palco, ele pisca
sua bengala do outro lado. O guarda lá percebe ele, puxa para fora
sua arma, mas Loki bate a cabeça. CHAOS ERUPTS.
Os hóspedes começam a deixar o museu. Loki pega o médico e
vira-o sobre uma mesa de mármore das criaturas mitológicas
BILCHSTEIM. Loki pega um DISPOSITIVO DE TORTURA ÓPTICA. Ele joga
pelo olho do médico. O médico TWISTS com dor.

EXT. MUSEU STUTTGART � NOITE

De repente, do instrumento de Barton, um olho holográfico do
o médico chefe aparece e a imagem do médico aparece em
tela.
As portas da instalação se abrem. Barton entra e encontra em um
armário, uma garrafa térmica de vidro com um cilindro de irídio.

EXT. STUTTGART GALA � NOITE

Enquanto a multidão foge, Loki sai lentamente e se materializa
em sua armadura e capacete de ouro. A POLÍCIA chega e sem
hesitação, ele bate nos carros, pisando-os repetidamente.

LOKI
Ajoelhe-se diante de mim.
A multidão o ignora. Outro LOKI aparece, bloqueando a multidão.
Loki depois que Loki aparece, todos sorriem enquanto levantam
lanças, cercando a multidão.

LOKI
Eu disse. CABELO!!!
Todo mundo fica quieto e se ajoelha na frente dele. Loki abraçando
os braços dele, sorrindo.

LOKI
Isso não é mais simples? Isso não é seu
estado natural? É a verdade não dita
da humanidade, que você deseja
subjugação. A brilhante atração da liberdade
diminui a alegria da sua vida em um louco
luta pelo poder, pela identidade. Você
foram feitos para serem governados. No final, você
sempre se ajoelhará.
Enquanto as palavras ressoam para a multidão ajoelhada, um HOMEM ALEMÃO MAIS VELHO
se recusa a ajoelhar-se e fica, heróico.

HOMEM ALEMÃO MAIS VELHO
Não para homens como você.

LOKI
Não há homens como eu.

HOMEM ALEMÃO MAIS VELHO
Sempre há homens como você.

LOKI
Olhe para o seu ancião, pessoal. Deixe ele ser
um exemplo.
Loki está prestes a executá-lo com seu cetro como a luz GLOWS
azul. Assim como o feixe de energia dispara, o capitão do caralho
AMÉRICA chega! Ele mergulha bem a tempo e BLOQUEA a explosão
com seu SHIELD, derrubando Loki na bunda dele.

CAPITÃO AMÉRICA
Você sabe, a última vez que estive
Alemanha e viu um homem parado acima
todo mundo, acabamos
discordando.

LOKI

( SUBSTITUINDO )
O soldado. Um homem sem tempo.

CAPITÃO AMÉRICA
Não sou eu quem está sem tempo.
De cima de Cap, o QUINJET chega. Uma metralhadora é apontada
em direção a Loki.

NATASHA
Loki, largue a arma e abaixe-se.
Como iluminação untada, Loki envia um BLAST de azul no
QUINJET. Natasha MANEBE justamente a tempo, dando a Cap o tempo
para jogar seu escudo em Loki. Ambos começam a DUKE IT OUT.
Loki FLINGS Boné no chão. Cap então joga seu escudo, mas
Loki SWATS do jeito que. Cap, usando todos os movimentos de um boxeador, é
Batido por Loki. De pé sobre ele, ele aponta o cetro
ponta no capacete.

LOKI
Ajoelhe-se.

CAPITÃO AMÉRICA
Hoje não!
Cap FLIPS e o nocauteia com a perna. Loki o agarra e
VAI ele.

INT. QUINJET � NOITE


NATASHA
O cara está em todo lugar.
De repente, "Shoot to Thrill" do AC / DC ultrapassa o QUINJET'S
oradores.

HOMEM DE FERRO
Agente Romanoff, você sentiu minha falta?
Cap e Loki olham para o céu. Tony voa em seu
O traje do HOMEM DE FERRO e explode Loki de volta ao chão. HOMEM DE FERRO
toca para baixo. Ele se levanta e puxa cada pedaço de armamento
o terno tem.

HOMEM DE FERRO
Faça a sua jogada, Jogos de Rena.
Loki levanta as mãos e se rende. Sua armadura se materializa
longe.

HOMEM DE FERRO
Boa jogada.

CAPITÃO AMÉRICA
Sr. Stark.

HOMEM DE FERRO
Capitão.

INT. QUINJET � NOITE

Natasha observa os céus. THUNDER. Saindo do nada. Fúria
fala sobre o fone de ouvido.

PESQUISA DO NICK ( V.O. )
Disse alguma coisa?

NATASHA
Nem uma palavra.

PESQUISA DO NICK ( V.O. )
Apenas traga-o aqui. Estamos com pouco tempo.
Com Loki amarrado e algemado no assento, Tony e Steve assistem
à distância, sussurrando.

STEVE
Eu não gosto disso.

TONY
O que? Rocha das Eras desistindo tão facilmente?

STEVE
Eu não me lembro de ser sempre isso
fácil. Esse cara faz um golpe.

TONY
Ainda assim, você é muito espinhoso, por um
companheiro mais velho. Qual é a sua coisa?
Pilates?

STEVE
O que?

TONY
É como calistenia. Você pode ter
perdeu algumas coisas, você sabe, fazendo
tempo como um capsículo.
Steve olha para Tony, finalmente encontrando sua partida de ego.

STEVE
Fury não me disse que estava ligando para você
no.

TONY
Sim, há muitas coisas Fury
não te diz.
THUNDER e LIGHTNING quase atingiram o jato, fazendo-o tremer
violentamente.

NATASHA
De onde isso vem?
Trovão RUMBLES no alto. Loki olha pela janela atentamente.

STEVE
Qual é o problema? Com medo de um pouco
relâmpago?

LOKI
Não gosto muito do que se segue.
Que porra é essa? FORA DO JATO Uma LUZ Cega atinge o jato.
Não é uma luz. Um rei.
O PODEROSO. Thor ABRE a rampa e agarra Loki pelo
garganta e voa para fora. Steve e Tony ficam impressionados. Tony
coloca o capacete do IRON MAN.

HOMEM DE FERRO
Agora tem esse cara.

NATASHA
Outro asgardiano?

CAPITÃO AMÉRICA
Acha que o cara é amigável?

HOMEM DE FERRO
Não importa. Se ele liberta Loki ou
mata-o, o Tesseract está perdido.
Tony se vira e se prepara para pular do jato para perseguir
Thor.

CAPITÃO AMÉRICA
Stark, precisamos de um plano de ataque!

HOMEM DE FERRO
Eu tenho um plano. Ataque.
O HOMEM DE FERRO salta do jato e persegue Thor. Cap agarra um
pára-quedas a seguir.

NATASHA
Eu sentaria isso, cap.

CAPITÃO AMÉRICA
Não vejo como posso.

NATASHA
Esses caras vêm de lendas, são
basicamente deuses.

CAPITÃO AMÉRICA
Só existe um Deus, senhora. E eu sou
tenho certeza que ele não se veste assim.
Cap SALTA FORA do jato.

EXT. LEDGE DE MONTANHA � NOITE

Em algum lugar nas montanhas européias, Thor joga Loki em
o lado da montanha. Ele levanta o poderoso martelo, MJ � LNIR.
Ele olha para o irmão, que ele pensava estar morto e é
com raiva de vê-lo vivo dessa maneira.

THOR
Onde está o Tesseract?

LOKI

( RI )
Eu também senti sua falta.

THOR
Eu pareço estar com vontade de jogar?!

LOKI
Oh, você deveria me agradecer. Com o
Bifrost foi quanta energia escura fez
o Allfather tem que reunir para conjurar
você aqui? Sua preciosa Terra.
Thor derruba MJ � LNIR, fazendo com que a montanha trema. Ele pega
Loki. O irmão dele.
Embora Thor esteja chateado com o que fez, uma família é
tudo para um homem ou deus.

THOR
Eu pensei que você estava morto.

LOKI
Você chorou?

THOR
Todos nós fizemos. Nosso pai...

LOKI
Seu pai. Ele te disse minha verdade
paternidade, não foi?
Thor deixa Loki, que se afasta de Thor, causando um par
cunha maior entre eles.

THOR
Fomos criados juntos, tocamos
juntos, brigamos juntos. Você faz
lembra de nada disso?

LOKI

( GIRAR )
Eu lembro de uma sombra. Morando no
sombra da sua grandeza. Eu lembro de você
me jogando em um abismo. Eu era e
deveria ser rei!

THOR
Então você pega o mundo que eu amo como
recompensa por suas negligências imaginadas.
Não, a Terra está sob minha proteção,
Loki.

LOKI

( RI )
E você está fazendo um trabalho maravilhoso com
aquele. Os humanos se matam
em massa, enquanto você ameaça ociosamente. eu
significa governá-los. E por que eu deveria
não?

THOR
Você se pensa acima deles.

LOKI
Bem, sim.

THOR
Então você sente falta da verdade da decisão,
irmão. O trono serviria para você doente.
Com raiva, Loki empurra seu irmão para o lado. Ele volta para cima
para a borda. Vira-se.

LOKI
Eu já vi mundos que você nunca conheceu
sobre! Eu cresci, Odinson, no meu
exílio! Eu vi o verdadeiro poder de
o Tesseract, e quando eu o uso...

THOR
Quem lhe mostrou esse poder? Quem controla
o pretenso rei?

LOKI
Eu sou um rei!

THOR
Aqui não! Você desiste do Tesseract!
Você desiste desse sonho venenoso! Você
volte para casa.

LOKI
Eu não tenho isso. Você precisa do cubo para
me traga para casa, mas eu enviei
não sei onde.
Mj � lnir voa de volta ao seu alcance.

THOR
Você ouve bem, irmão. EU...

THOR É BATADO NA MONTANHA POR HOMEM DE FERRO QUE O LIGA

VÔO MÉDIO.

LOKI
Estou ouvindo.

EXT. FLORESTA � CONTÍNUO

HOMEM DE LIMPEZA CRASH na floresta. Thor se enrola.
O HOMEM DE FERRO ainda está de pé, mas mantém distância. O capacete
abre.

THOR
Não me toque de novo!

TONY
Então não pegue minhas coisas.

THOR
Você não tem ideia do que está lidando
com.

TONY
Shakespeare no parque? Mãe
sabe que você usa as cortinas dela?

THOR
Isso está além de você, homem do metal. Loki
enfrentará a justiça asgardiana!

TONY
Ele desiste do cubo, é todo seu.
Até lá, fique fora do meu caminho...
turista.
O capacete do IRON MAN se fecha e ele se afasta. Em um rápido
mova-se, Thor puxa Mj � lnir, joga-o e BATA O HOMEM DE FERRO
do outro lado de uma árvore.

DENTRO DO TERNO

TONY
OK.
Do lado da montanha, Loki assiste com diversão. Thor levanta
mão dele. Mj � lnir voa de volta para a mão. Thor BALA
martelo, convocando um raio de energia.
O HOMEM DE FERRO se levanta e de seus HAND BOOSTERS, uma explosão de energia
Bate o avivador poderoso na bunda dele. O HOMEM DE FERRO voa de volta e
bate Thor em uma árvore. De volta para você, vadia!
Thor, ajoelhado no chão, puxa Mj � lnir para a mão, levanta
para os céus e puxa LIGHTING e THUNDER! Pontos de Thor
o martelo no IRON MAN e a saída de parafusos de iluminação
aumenta de intensidade. O HOMEM DE FERRO recua.

DENTRO DO TERNO

JARVIS
Potência com 400% da capacidade.

TONY
Que tal isso?
O HOMEM DE FERRO SE LONGE DE SEUS BOOSTERS, empurrando Thor para sua mão
joelhos. Como dois pistoleiros prontos para desenhar, Thor e IRON
O HOMEM voa um em direção ao outro e se encontra no meio e sobe.

EXT. SKY � NOITE

As duas batalhas. O HOMEM DE FERRO agarra THOR, dando uma cotovelada nele e esmagando
ele no lado de uma montanha.
THOR SAI da montanha e leva o IRON MAN com ele.

EXT. FLORESTA � CONTÍNUO

THOR e IRON MAN caem de volta, esmagando todos os
árvore possível. O HOMEM DE FERRO GANHA Thor. Thor agarra os dois
MÃOS BOOSTERS e começa a esmagá-los. Tony rapidamente cobra como
muita energia possível e TIRA ENERGIA no rosto de Thor.
Thor recua, perdendo a posição. HOMEM DE FERRO, Thor,
com seu capacete de liga de ouro e titânio. Thor... O CABEÇA com ele
a cabeça dele e realmente envia o IRON MAN pela floresta.
HOMEM DE FERRO aumenta e voa de volta para Thor, agarrando-o pelo
braço e capa e o balança para outra árvore. Thor olha para cima,
pronto. Thor corre com toda a paciência pela janela. HOMEM DE FERRO
BALANÇAS e SENHORITAS, dando a Thor o momento de agarrá-lo, levante
ele e esmagá-lo com força.
Thor convoca Mj � lnir para a mão. Assim como ele está prestes a colocar
o martelo para baixo, o HOMEM DE FERRO usa seus BOOSTERS DE MÃO para SKID
o chão e tropeçar em Thor. De pé, Thor procura por ele,
mas por trás dele, o IRON MAN esmaga suas costas. Thor está
de frente para o IRON MAN. Pronto para atacar...
CAPITÃO O escudo da AMÉRICA RICOCHETS de Thor e IRON MAN,
parando-os. Eles olham para cima e vêem a AMÉRICA CAPITÃO em pé
topo de uma árvore caída com o escudo na mão.

CAPITÃO AMÉRICA
Ei! É o bastante!
( desce; olha para Thor )
Agora, não sei no que você planeja
fazendo aqui.

THOR
Eu vim aqui para acabar com o Loki's
esquemas!

CAPITÃO AMÉRICA
Então prove! Abaixe o martelo.

HOMEM DE FERRO
Hum, sim, não! Chamada ruim! Ele ama seu
martelo!

O IRON MAN COMO UM PIMP COM MJ � LNIR.
Thor, perdendo toda a tolerância com este SENTENCIAL DE LIBERDADE,
levanta o martelo.

THOR

( PARA CAP )
Você quer que eu abaixe o martelo?

POR ISSO, ALTO NO AR, LEVANTANDO ESSE CARALHO DO CARALHO.
O CAPITÃO AMÉRICA CHOUCHES PARA BAIXO e MANTÉM SEU ESCUDO. THOR
traz esse martelo para o escudo e uma IMPLOSÃO MASSIVA
OF LIGHT reage ao escudo vibranium, criando um MASSIVE

SHOCKWAVE QUE SOPRA QUALQUER COISA EM UMA MILE.
O HOMEM DE FERRO se levanta, olhando em volta como 'merda sagrada.' Mentindo certo
ao lado dele está Cap, que nunca tira os olhos de Thor. Thor parece
nos dois homens.

CAPITÃO AMÉRICA
Nós terminamos aqui?

A AMÉRICA DE CAPITÃO E O HOMEM DE FERRO ESTÃO LÁ.

INT. HELICARRIER HALLWAY � NOITE

DOZENS DA POLÍCIA ESCUDO escoltam Loki, que está algemado,
sorrindo. Ao passarem pelo LAB HELICARRIER, Banner para de trabalhar
no CHITAURI SCEPTER e olha para cima. Loki o vê enquanto caminha,
assentindo e sorrindo. BANNER esfrega a cabeça.

INT. SEÇÃO DE DETENÇÃO DO HELICARRE � NOITE

Loki agora está livre de suas algemas e está contido em um GRANDE
CÉLULA DE VIDRO realizada por RIGS HIDRÁULICOS. Fúria sobe no controle
painel da célula.

NICK FURY
Caso não esteja claro. Você tenta
fuga. Você arranha tanto que
copo.
Fury pressiona um botão que ABRE um HATCH embaixo de Loki's
célula. Loki espia o máximo que pode do copo.
Sem ver, os sons de GUSTING WIND fariam o homem cagar
as calças dele. Não é um deus, no entanto.

NICK FURY
Trinta mil pés, direto para baixo
uma armadilha de aço. Você entende como isso funciona?!
A fúria fecha a escotilha. Pontos em Loki.

NICK FURY
Formiga.
Em seguida, aponta para o botão que jogaria Loki no aço
armadilha.

NICK FURY
Inicializar.

LOKI

( MIRKING )
É uma gaiola impressionante. Não construído, eu
pense por mim.

NICK FURY
Construído para algo muito mais forte que
tu.

LOKI
Oh, eu ouvi.
Loki olha para a câmera.

INT. SALA DE BREVE � CONTÍNUO

Os outros assistem no monitor Loki sendo interrogado.
Banner olha para o monitor, atentamente.

INT. SEÇÃO DE DETENÇÃO DO HELICARRE � CONTÍNUO


LOKI
O animal irracional, faz brincar que ele é
ainda é um homem. Quão desesperado você está,
que você invoca essas criaturas perdidas
para te defender?

NICK FURY
Quão desesperado estou? Você ameaça meu
mundo com guerra. Você rouba uma força você
não posso esperar controlar.

( MAIS )

PESQUISA DO NICK ( CONT'D )
Você fala sobre paz e mata
porque é divertido. Você me fez muito
desesperado. Você pode não estar feliz que
você fez.

LOKI
Ooh. Queima você chegar tão perto. Para
tenha o Tesseract, para ter poder,
poder ilimitado. E para quê? Um calor
luz para toda a humanidade compartilhar, e
então, para ser lembrado o que é o poder real.

NICK FURY

( SMILING )
Bem, me avise se Real Power
quer uma revista ou algo assim.
Fury sai deixando Loki em sua cela de vidro. Loki olha para trás
na câmera, sorrindo.

INT. SALA DE BREVE � CONTÍNUO

Steve assiste até o monitor ficar preto. Thor, que não
até olhe, apenas ouça, fica lá, despedaçado. Todos eles
apenas fique lá em SILÊNCIO atordoado. Finalmente -

BANNER
Ele realmente cresce em você, não é?

STEVE
Loki vai arrastar isso para fora. Então, Thor,
qual é a peça dele?

THOR

( VINDO DEMAIS )
Ele tem um exército chamado Chitauri.
Eles não são de Asgard ou de qualquer mundo
conhecido. Ele quer liderá-los contra
seu povo. Eles vão ganhar o
terra. Em troca, suspeito, pelo
Tesseract.

STEVE

( SÉRIO )
Um exército? Do espaço sideral?

BANNER
Então ele está construindo outro portal. Isso é
para que ele precisa de Erik Selvig.

THOR
Selvig?

BANNER
Ele é um astrofísico.

THOR
Ele é um amigo.

NATASHA
Loki o tem sob algum tipo de feitiço,
junto com um dos nossos.

STEVE
Quero saber por que Loki nos deixou levá-lo.
Ele não está liderando um exército daqui.

BANNER
Eu não acho que deveríamos nos concentrar
Loki. O cérebro desse cara é uma bolsa cheia de
gatos, você pode sentir o cheiro de louco nele.

THOR
Tenha cuidado com o que você fala. Loki está além
razão, mas ele é de Asgard, e ele é
meu irmão.

NATASHA
Ele matou oitenta pessoas em dois dias.

THOR
Ele é adotado.

BANNER
Iridium, o que eles precisavam do Iridium
para?

TONY
É um agente estabilizador.
( entra com Coulson; para

COULSON )
Eu vou voar para você lá. Mantenha o amor
vivo. Significa que o portal não entrará em colapso
em si mesmo, como fez no SHIELD.

TONY ( CONT'D )

( PARA THOR )
Sem ressentimentos, Point Break. Você tem
tem um balanço médio.
( referente ao irídio )
Além disso, significa que o portal pode abrir como
amplo e fique aberto por tanto tempo, como Loki
quer.

( PARA TRIPULAÇÃO )
Levante o mastro médio, envie o topo
velas. Aquele homem está jogando GALAGA!
Pensei que não perceberíamos. Mas nós fizemos.
( cobrindo o olho, olha

AO REDOR )
Como Fury faz isso?

AGENTE MARIA HILL
Ele vira.
Tony olha em volta dos monitores e coloca um BUTTON SIZE HACKING
IMPLANTE embaixo da mesa de Fury, sem que ninguém perceba.

TONY
Bem, isso parece exaustivo. O resto
das matérias-primas, o agente Barton pode
coloque as mãos com bastante facilidade. Somente
componente principal que ele ainda precisa é de um
fonte de energia. Uma alta densidade de energia,
algo para chutar começar o cubo.

AGENTE MARIA HILL
Quando você se tornou um especialista em
astrofísica termonuclear?

TONY
Noite passada. O pacote, as anotações de Selvig,
os documentos da teoria da extração. Eu sou o
único que fez a leitura?

STEVE
Loki precisa de algum tipo específico de
fonte de energia?

BANNER
Ele tem que aquecer o cubo para um
cento e vinte milhões de Kelvin apenas
romper a barreira de Coulomb.

TONY
A menos que Selvig tenha descoberto como
estabilizar o efeito de encapsulamento quântico.

BANNER
Bem, se ele pudesse fazer isso, ele poderia
obter fusão de íons pesados em qualquer reator
no planeta.

TONY
Finalmente, alguém que fala inglês.

STEVE
Foi isso que aconteceu?
Tony e Banner apertam as mãos. Um vislumbre nos olhos brilha como
o respeito mútuo um pelo outro mostra.

TONY
É bom conhecê-lo, Dr. Banner.
Você trabalha em colisões anti-elétron
é incomparável. E eu sou um grande fã de
a maneira como você perde o controle e se transforma em
um enorme monstro de raiva verde.

BANNER

( OLHA PARA BAIXO )
Obrigado.

NICK FURY

( CAMINHANDO EM )
Dr. Banner está aqui apenas para rastrear o
cubo. Eu esperava que você se juntasse a ele.

STEVE
Vamos começar com esse pedaço dele. É
pode ser mágico, mas funciona muito
muito como uma arma HYDRA.

NICK FURY
Eu não sei sobre isso, mas é
alimentado pelo cubo. E eu gostaria de
saiba como Loki o usou para transformar dois dos
os homens mais afiados que conheço em seu
macacos voadores pessoais.

THOR
Macacos? Eu não entendo.

STEVE
Eu faço! Eu entendi essa referência.
Tony revira os olhos, enquanto Cap parece orgulhoso de si mesmo.

TONY
Vamos brincar, doutor?

BANNER
Vamos jogar um pouco.
Quando Banner e Tony saem, o GALAGA PLAYER se torna sempre
discretamente, observa como todo mundo se dispersa e volta para
jogando.

INT. LABORATÓRIO DE BANNER - NOITE ( MAIS TARDE )

O banner verifica continuamente com um scanner de detecção de raios gama em
o cetro para radiação.
Tony olha para seus monitores, mudando e resolvendo tantos
algoritmos e equações.

BANNER
As leituras gama são definitivamente
consistente com os relatórios de Selvig sobre o
Tesseract. Mas vai levar semanas para
processo.

TONY
Se ignorarmos o mainframe e o directo
uma redirecionamento para o cluster Homer, podemos
relógio isso em torno de seiscentos
teraflops.

BANNER
Tudo o que fiz foi uma escova de dentes.

TONY

( SMILES )
Você sabe, você deve vir por STARK
CIDADES em algum momento. Os dez andares superiores, todos
P&D. Você adoraria, é terra de doces.

BANNER
Obrigado, mas a última vez que estive em New
York eu meio que quebrei...Harlem.

TONY
Bem, prometo um estresse livre
meio Ambiente. Sem tensão. Sem surpresas.
De repente, Tony cutuca Banner com um PROD ELÉTRICO MINIATURA.
Steve entra neles, chateado com Tony.

BANNER

OW!
Tony olha para Banner de perto.

TONY
Nada?

STEVE

( PARA BANNER )
Ei! Você é louco?

TONY
Você realmente tem uma tampa,
você não? Qual é o seu segredo? Amarelo
jazz? Bateria de bongo? Enorme saco de maconha?

STEVE
Tudo é uma piada para você?

TONY
Coisas engraçadas são.

STEVE
Ameaçando a segurança de todos
este navio não é engraçado. Sem ofensa,
médico.

BANNER
Não, está tudo bem. Eu não teria vindo
a bordo se eu não pudesse lidar com pontudos
coisas.

TONY
Você está na ponta dos pés, grandão. Você precisa
suporte.

STEVE
E você precisa se concentrar no problema,
Sr. Stark.

TONY
Você acha que eu não sou? Por que Fury nos chamou
e por que agora? Por que não antes? O que não é
ele está nos dizendo? Eu não posso fazer a equação
a menos que eu tenha todas as variáveis.

STEVE
Você acha que Fury está escondendo alguma coisa?

TONY
Ele é um espião. Capitão, ele é o espião. Dele
segredos têm segredos.
( aponta para Banner )
Também está incomodando ele, não é?

BANNER
( balançando as palavras )
Uh...Eu só quero terminar meu trabalho aqui
e...

STEVE
Médico?
Uma batida.

BANNER
'Uma luz quente para toda a humanidade, Loki's
jab em Fury sobre o cubo.

STEVE
Eu ouvi.

BANNER
( apontando para Tony )
Bem, acho que isso foi feito para você.
Mesmo que Barton não tenha postado tudo isso
sobre as notícias.

STEVE
A torre Stark? Que grande feio
( Tony dá uma olhada )
...construção em Nova York?

BANNER
É alimentado por Stark Reactors, auto-
fonte de energia sustentada. Aquele prédio
vai correr por quê, um ano?

TONY
Esse é apenas o protótipo. Eu sou meio que
o único nome em energia limpa certo
agora.

BANNER
( referindo-se a Tony )
Então, por que SHIELD não o trouxe
o projeto Tesseract? Quero dizer, o que são
eles estão fazendo no negócio de energia em
o primeiro lugar?

TONY
Eu provavelmente deveria investigar isso uma vez
meu programador de descriptografia termina
invadindo todos os seguros da SHIELD
arquivos.

STEVE
( tomado por isso )
Me desculpe, você disse...?

TONY
Jarvis está executando desde que eu bati
a ponte. Dentro de algumas horas saberemos
todo SHIELD secreto sujo já
tentou se esconder.
( segura um saco de mirtilos )
Mirtilo?

STEVE
No entanto, você está confuso sobre o motivo deles
não queria você por perto?

TONY
Uma organização de inteligência que teme
inteligência? Historicamente, não
possível.

STEVE
Acho que Loki está tentando nos encerrar.
Este é um homem que pretende começar uma guerra,
e se não permanecer focado, ele
ter sucesso. Temos ordens, devemos
siga-os.

TONY
Seguir não é realmente o meu estilo.

STEVE

( SMILING )
E você é toda sobre estilo, não é?

TONY
( um nervo atingido )
Das pessoas nesta sala, qual
é; A. vestindo uma roupa esparramada e B.
não de uso?

BANNER
Steve, me diga que nada disso cheira a
um pouco descolado para você?
Steve aproveita a possibilidade, mas como um soldado obediente,
sacode.

STEVE
Basta encontrar o cubo.
Steve sai do laboratório. Ainda dilacerado pela possibilidade,
ele se afasta, em direção ao casco do navio.

VOLTAR NO LABORATÓRIO

TONY
Esse é o cara que meu pai nunca cala a boca
sobre? Querendo saber se eles não deveriam ter
o manteve no gelo.

BANNER
O cara não está errado sobre Loki. Ele faz
dê um pulo em nós.

TONY
O que ele tem é um kit de dinamite ACME.

TONY ( CONT'D )
Vai explodir na cara dele, e eu estou
estará lá quando acontecer.

BANNER
E eu vou ler tudo sobre isso.

TONY
Uh-huh. Ou você estará se adaptando como
o resto de nós.

BANNER
Ah, veja. Eu não entendo uma armadura.
Estou exposto, como um nervo. É um
pesadelo.

TONY
Você sabe, eu tenho um conjunto de
estilhaços, tentando cada segundo rastejar
seu caminho para o meu coração.
( aponta para o MINI-ARC
REATOR no peito )
Isso para. Este pequeno círculo de
luz. Faz parte de mim agora, não apenas
armadura. É um ... privilégio terrível.

BANNER
Mas você pode controlá-lo.

TONY
Porque eu aprendi como.

BANNER
É diferente.
Banner tenta ler a tela do computador, mas Tony desliza a
dados à parte com o dedo para que os dois possam ver cara a cara.

TONY
Ei, eu li tudo sobre o seu acidente.
Essa exposição gama deveria ter
te matou.

BANNER
Então você está dizendo que o Hulk ... o
outro cara ... salvou minha vida?

( MAIS )

BANNER ( CONT'D )
Isso é bom. É um sentimento agradável.
Salvou para quê?

TONY

( UM BEAT )
Acho que vamos descobrir.
Banner e Stark voltam ao trabalho em seus respectivos computadores.

BANNER
Você pode não gostar disso.

TONY
Você apenas pode.

INT. HANGAR HULL, ARMAZENAGEM SEGURA 10-C � NOITE

Steve, com todo o seu Might, desliza pela porta do HEAVY IRON e
STEALTHILY entra. A ARMAZENAGEM SEGURA 10-C é um grande armazém,
preenchido com caixas de metal empilhadas.
Steve olha para cima, vendo outro nível. Ele lidera alto e mantém
na passarela railing. Steve continua avançando.

INT. VAN � NOITE

Dentro desta van em particular, Selvig e alguns outros SOLDIERS estão
dirigindo dentro de um longo túnel. Com o dispositivo CMS dentro, Selvig
pega cuidadosamente o IRIDIUM de formato pequeno do cilindro com metal
pinos e levemente coloca um SLOT dentro do CMS. O CMS
ACEITA. Selvig olha para ele, sorrindo diabolicamente.

INT. SALA DE BREVE � NOITE

Em um monitor SHIELD, há uma foto e um registro de JANE FOSTER. Thor
olha para ela, lembrando. Com ele está o agente Coulson.

AGENTE PHIL COULSON
Assim que Loki levou o médico, nós
mudou-se Jane Foster. Temos um
excelente observatório em Traunsee. Ela
foi solicitado a consultar lá muito
de repente ontem. Taxa considerável,
avião particular, muito remoto. Ela será
seguro.

THOR
Obrigado. Não é por acaso que Loki está tomando
Erik Selvig. Eu temo o que ele planeja
ele uma vez que ele terminou. Erik é um bom homem.

AGENTE PHIL COULSON
Ele fala muito de você. Você mudou
a vida dele. Você mudou tudo ao redor
aqui.

THOR
Eles eram melhores como eram. Nós
finja que Asgard somos mais
avançado, mas nós ... viemos aqui
lutando como BILCHSTEIM.

AGENTE PHIL COULSON
Como o quê?

THOR
BILCHSTEIM? Você sabe; enorme, escamoso, grande
chifres. Você não tem isso?

AGENTE PHIL COULSON
Não pense assim.

THOR
Eles são repulsivos e pisam
tudo no caminho deles.
Thor caminha para o lado do navio e olha para fora
janela, lamentando o que aconteceu e o que pode vir.

THOR
Quando cheguei à terra, a raiva de Loki
me seguiu até aqui e seu povo pagou
o preço. E agora novamente. Na minha juventude eu
guerra cortejada.

PESQUISA DO NICK ( O.S. )
A guerra ainda não começou.

( CAMINHANDO EM )
Você acha que pode fazer Loki nos dizer
o que é o Tesseract?

THOR
Eu não sei. A mente de Loki está longe
afield, não é apenas o poder que ele deseja,
é vingança sobre mim. Não há dor
isso valorizaria sua necessidade dele.

NICK FURY
Muitos caras pensam isso, até o
a dor para.

THOR
O que você está me pedindo para fazer?

NICK FURY
Estou perguntando. O que você está preparado para
fazer?

THOR
Loki é um prisioneiro.

NICK FURY
Então por que eu sinto que ele é o único
pessoa neste barco que quer ser
aqui?
Thor não responde.

INT. SEÇÃO DE DETENÇÃO DO HELICARRE � NOITE

Loki anda de um lado para o outro dentro de sua cela de vidro. De repente, ele
pára.

LOKI
Não há muitas pessoas que possam se infiltrar
em mim.
( vira para ver NATASHA

SUPORTANDO LÁ )

NATASHA
Mas você imaginou que eu viria.

LOKI
Depois de. Depois de qualquer tortura que Fury possa
invoct, você apareceria como um amigo,
como um bálsamo. E eu cooperaria.

NATASHA
Quero saber o que você fez com o agente
Barton.

LOKI
Eu diria que expandi sua mente.

NATASHA
E uma vez que você ganhou. Uma vez que você é rei
da montanha. O que acontece com o dele
mente?

LOKI
Isso é amor, agente Romanoff?

NATASHA
O amor é para crianças. Eu devo a ele uma dívida.

LOKI

( ASSENTANDO )
Conte-me.

NATASHA
( ela puxa uma cadeira como

BEM )
Antes de trabalhar para a SHIELD, eu
Bem, eu fiz um nome para mim. eu
tem um conjunto de habilidades muito específico. eu não fiz
cuidado com quem eu usei ou por diante. Eu tenho
O radar de SHIELD de uma maneira ruim. Agente
Barton foi enviado para me matar, ele fez um
chamada diferente.

LOKI
E o que você fará se eu prometer poupar
ele?

NATASHA
Não te deixo sair.

LOKI

( RI )
Ah não. Mas eu gosto disso. Seu mundo em
o saldo e você negocia por um
cara?

NATASHA
Os regimes caem todos os dias. Eu tendem a não
choro por isso, sou russo ... ou era.

LOKI
O que você quer?

NATASHA
Realmente não é tão complicado. Eu tenho
ficou vermelho no meu livro, eu gostaria de limpar
fora.

LOKI
Você pode? Você pode acabar com tanto
vermelho? Filha de DRAKOV? S � O PAULO? O
FOGO HOSPITAL? Barton me disse
tudo. Seu livro está pingando,
está jorrando vermelho, e você acha que economiza
um homem não mais virtuoso que você
vai mudar alguma coisa?

( ESTÁGIO; IRRITADO )
Este é o sentimentalismo mais básico. Este
é uma criança em oração... PATÉTICO!

INTERCUTOS
- Tony e Banner trabalham continuamente em seus monitores.

LOKI ( V.O. )
Você mente e mata a serviço de
mentirosos e assassinos.
- O agente Hill verifica todas as vistas na ponte. Fúria
supervisiona.

LOKI ( V.O. )
Você finge estar separado, ter
seu próprio código, algo que compõe
pelos horrores. Mas eles fazem parte de
você, e eles nunca vão embora!
- Steve abre uma caixa de aço. Irritado, ele olha para trás e
olha de volta para a caixa. O CRATE ESTÁ CHEIO DE UM EXÉRCITO DE

ARMAS HIDRA.

INT. SEÇÃO DE DETENÇÃO DO HELICARRE � NOITE

Loki BAMA seu celular, fazendo Natasha FLINCH.

LOKI
Não vou tocar em Barton. Não até eu fazer
ele te mata! Lentamente. Intimamente. No
de todas as maneiras que ele sabe que você teme! E quando
ele acordará apenas o tempo suficiente para ver sua
bom trabalho, e quando ele gritar, eu vou
dividir seu crânio! Esta é a minha barganha,
você mewling quim!
NATASHA se vira, se afasta de Loki, com nojo.

NATASHA

( QUIETLY; DISTRAUGHT )
Você é um monstro.

LOKI

( RI )
Não, você trouxe o monstro.

NATASHA
( volta; equilibrado )
Então, Banner ... essa é a sua peça.

LOKI

( STAGGERED )
O que?

NATASHA

( EM EARPIECE )
Loki significa liberar o Hulk. Manter
Banner no laboratório, estou a caminho. Enviar
Thor também.

( TO LOKI )
Obrigado por sua cooperação.
Natasha sai rapidamente, deixando Loki congelado.

INT. LABORATÓRIO DE BANNER � MANHÃ

Fury caminha SURPRESO ao ver Tony e Banner pararem de trabalhar
o cetro.

NICK FURY

( IRRITADO )
O que você está fazendo, Sr. Stark?

TONY
Uh ... meio que estava pensando o mesmo
coisa sobre você.

NICK FURY
Você deveria estar localizando o
Tesseract.

BANNER
Nós estamos. O modelo está trancado e nós estamos
varrendo a assinatura agora. Quando nós
seja atingido, teremos o local
a 800 metros.

TONY
E você receberá seu cubo de volta, sem confusão,
sem barulho.
( de repente, seu monitor mostra um
coleção de ARQUIVOS SECRETOS )
O que é o PHASE 2?
De repente, Steve joga um RIFLE DE ASSALTO HYDRA na mesa, causando
Fury, Banner e Tony para se virar. Cap parece chateado.

STEVE
FASE 2 é SHIELD usa o cubo para fazer
armas.

( TO TONY )
Desculpe, o computador estava se movendo um pouco
lento.

NICK FURY
( tentando explicar )
Rogers, reunimos tudo relacionado
para o Tesseract. Isso não significa
que nós somos...

TONY
Sinto muito, Nick.
Tony move a tela do computador em direção a Fury, que mostra planos de

AS ARMAS.

TONY
O que você estava mentindo?

STEVE
Eu estava errado, diretor. O mundo não tem
mudou um pouco.
Nesse momento, Thor e Natasha entram no laboratório. Natasha
mantém os olhos em Banner. Banner olha para ela, chateado.

BANNER
Você sabia disso?

NATASHA
Você quer pensar em se remover
deste ambiente, doutor?

BANNER
Eu estava em Calcutá, estava muito bem
removido.

NATASHA
Loki está manipulando você.

BANNER
E você tem feito o que exatamente?

NATASHA
Você não veio aqui porque eu bati no meu
cílios para você.

BANNER
Sim, e eu não vou embora porque
de repente você fica um pouco nervoso. Eu
gostaria de saber por que o SHIELD está usando o
Tesseract para construir armas de massa
destruição.

NICK FURY
Por causa dele.
( apontando para Thor )

THOR

( IMPRESSIONANTE )
Eu?

NICK FURY
No ano passado, a Terra teve um visitante de
outro planeta que tinha uma partida de rancor
que nivelou uma cidade pequena. Nós aprendemos
que não apenas não estamos sozinhos, mas também
são irremediavelmente, hilariamente, superados.

THOR
Meu povo não quer nada além de paz com
seu planeta.

NICK FURY
Mas você não é a única pessoa a sair
aí está você? E você não é o
única ameaça. O mundo está enchendo
com pessoas que não podem ser comparadas, elas
não pode ser controlado.

STEVE
Como você controlou o cubo?

THOR
Você trabalha com o Tesseract é o que
chamou Loki para ele e seus aliados. Isto é
o sinal para todos os reinos que o
a terra está pronta para uma forma mais alta de
guerra.

STEVE
Uma forma mais alta?

NICK FURY
Você forçou nossa mão. Tivemos que subir
com alguma coisa.

TONY
Detenção nuclear. Porque isso sempre
acalma tudo.

NICK FURY
Lembre-me novamente como você fez seu
fortuna, Stark?

STEVE TONY
Tenho certeza que se ele ainda fez Wait! Esperar! Aguente! Como é
armas, Stark estaria no pescoço agora sobre mim?
profundo... Me desculpe, não é THOR
tudo?
Eu pensei que os humanos eram mais
evoluiu do que isso.

NICK FURY
Com licença, viemos ao seu planeta
e explodir coisas?

THOR
Você sempre deu a seus campeões
desconfiança?

NATASHA BANNER
Vocês são realmente que o Capitão América está
ingênuo? S.H.I.E.L.D monitora potencial de ameaça
ameaças? lista de observação?

TONY STEVE
( a Steve ) Juro por Deus, Stark, um
Você está nessa lista? Você é mais crack...
acima ou abaixo das abelhas raivosas?
Ameaçando! eu sinto
ameaçado!
Como argumenta a "equipe", eles não percebem o GEM AZUL no Loki's
cetro está brilhando intensamente.

INT. TRANSPORTADORA AERONAVES � DIA

Do lado de fora do HELICARRIER, um transportador solitário paira lentamente sobre o
navio.

VOZ BASE DE ESCUDO
661 Bravo, por favor, transmita seu código de acesso.
Qual é o seu casco?

BARTON
Armas para munição, acabaram.
Lá dentro, BARTON e sua equipe se vestem e se armam. Barton
puxa seu arco e flechas de alta tecnologia.

INT. LABORATÓRIO DE BANNER � MANHÃ

De volta ao laboratório, os egos dessas pessoas continuam se esfregando
um ao outro e a qualquer momento, a merda vai bater no ventilador.

THOR
Você fala de controle, mas você corteja
caos.

BANNER
É o M.O. dele, não é? Quero dizer, o que
somos nós, uma equipe? Não não não. Nós somos um
mistura química que faz o caos.
Nós somos ... somos uma bomba-relógio.

NICK FURY
Você precisa se afastar.

TONY
( coloca o braço em torno de Steve )
Por que o cara não deveria deixar um pouco
vapor?

STEVE
( empurra Tony para fora )
Você sabe muito bem o porquê! Recuar!

TONY
( fica cara a cara com Cap )
Estou começando a querer que você faça
mim.

STEVE
Grande homem de armadura. Pegue isso
fora, o que você é?

TONY
Gênio, bilionário, playboy,
filantropo.

STEVE
Eu conheço caras com nada disso no valor de dez
de você. Sim, eu vi as imagens.

( MAIS )

STEVE ( CONT'D )
A única coisa pela qual você realmente luta é
você mesmo. Você não é o cara a fazer
a peça de sacrifício, para deitar em um
ligue e deixe o outro cara rastejar
tu.

TONY
Eu acho que apenas cortaria o fio.

STEVE

( SMILING )
Sempre uma saída... Você sabe, você pode
não seja uma ameaça, mas é melhor você parar
fingindo ser um herói.

TONY
( que fez isso )
Um herói? Gosta de você? Você é um rato de laboratório,
Rogers. Tudo de especial em você
saiu de uma garrafa!

FORA DO HELICARRIER
A rampa da transportadora se abre. O transportador manobra ao lado de um
dos grandes motores de turbina. Barton fica na base, segurando
fora de seu arco. Ele puxa uma SETA TIPPED GRENADE. Ele aponta
bem no motor.
Então...Barton move seu AIM e aponta a flecha cerca de cem
pés do motor. Ele libera. A flecha voa para fora, mas depois
Cabeças de sharply para o motor. A seta é perfurada no
motor. Possui um temporizador visível que está chegando.

INT. LABORATÓRIO DE BANNER � MANHÃ

De volta ao laboratório, Steve incha o peito em Tony, que acabou de
fica lá, imóvel.

STEVE
Coloque o traje, vamos algumas rodadas.
Thor ri deles.

THOR
Vocês são tão mesquinhos ... e minúsculos.
Tony esfrega a cabeça. Afasta-se de Cap.

BANNER
Sim, isso é um tee...

NICK FURY
Agente Romanoff, você poderia escoltar
Dr.Banner de volta ao seu...

BANNER
Onde? Você alugou meu quarto.

NICK FURY
A célula estava apenas no caso...

BANNER
Caso você precise me matar, mas você
não pode! Eu sei! Eu tentei!

( UM BEAT )
Eu fiquei baixo. Eu não vi um fim, então eu
coloque uma bala na minha boca e a outra
cara cuspiu! Então eu segui em frente. eu
focado em ajudar outras pessoas. eu estava
bom, até você me arrastar de volta
esse show de horrores e colocar todos aqui
em risco!
Banner fica chateado lentamente enquanto olha para Romanoff, que fica
nervoso.

BANNER
Você quer saber meu segredo, agente
Romanoff? Você quer saber como eu fico
calma?
A Viúva NEGRA e a Fúria têm as mãos para baixo para pegar suas armas.

STEVE
Doutor Banner ... abaixe o cetro.

BANNER OLHA PARA BAIXO E É CHOCADO PARA VER QUE ESTÁ MANTENDO LOKI'S
PASSO. O computador emite um sinal sonoro. Todos eles se voltam para ele.

TONY
Entendi.
Banner abaixa o cetro e caminha até o computador.

BANNER
Desculpe crianças. Você não vê o meu
pequeno truque de festa, afinal.

THOR
Localizado o Tesseract?

TONY
Eu posso chegar lá mais rápido.

STEVE
Olha, todos nós...

THOR
O Tesseract pertence a Asgard, não
humano é uma combinação para isso.
Tony se vira para sair, mas Steve o impede.

STEVE
Você não vai sozinho!

TONY
Você vai me parar?

STEVE
Coloque o terno, vamos descobrir.

TONY
Não tenho medo de bater em um homem velho.

STEVE
Coloque o terno.
Naquele momento, Banner, que está olhando para os avisos do monitor
algo sobre o Tesseract.

BANNER
Oh meu Deus!

FORA DO HELICARRIER
Barton puxa o gatilho em sua bow. A seta então EXPLODI A

MOTOR DIREITO DO HELICARRIER!

INT. LABORATÓRIO DE BANNER � MANHÃ

Todo mundo é jogado em todas as direções. Steve, Fury, Thor e
Tony é jogado enquanto Natasha e Banner estão no
sala de equipamentos inferior. Steve olha para Tony.

STEVE
Coloque o terno!

TONY
Sim!
Steve ajuda Tony para sair do laboratório. A fúria se senta, segurando
as costelas dele. Ele coloca sua EARPIECE.

NICK FURY
Colina?!

INT. PONTE HELICARRIER � DIA

ERUPOS DE PANDEMÔNIO. Alarmes de emergência disparados, extintores de incêndio
ativar perto dos incêndios ao redor e todo agente está girando
lutam por suas posições e armamentos. Agent Hill mantém o
ponte o mais calmo possível.

AGENTE MARIA HILL
Ligue esse motor! O motor número 3 é
baixo! Podemos correr?
( vai até GALAGA PLAYER )
Fale comigo.

JOGADOR DE GALAGA
( aponta para monitorar )
A turbina está solta. Principalmente intacto, mas
é impossível chegar lá e
faça reparos enquanto estamos no ar.

AGENTE MARIA HILL
Perdemos mais um motor, não o seremos.
Alguém tem que entrar e remendar
aquele motor.

INT. LABORATÓRIO DE BANNER � MANHÃ


NICK FURY
Stark! Você copia isso?!

TONY ( V.O. )
Eu estou trabalhando nisso!

NICK FURY
Coulson! Iniciar bloqueio oficial em
a seção de detenção então chega ao
arsenal! Mudar!

INT. PONTE HELICARRIER � DIA

O agente Coulson sai correndo da ponte.

INT. SALA DE EQUIPAMENTO INFERIOR, TRANSPORTADORA � MANHÃ

Natasha olha para Banner, que está respirando pesado, tendo
pousou duro. Ele está segurando o chão ralado para manter
controle, mas seus olhos são verdes, seu rosto intenso.

NATASHA ( CONT'D )
( silenciosamente, para si mesma )
Estou bem. Estamos bem, certo?

EXT. DECK DO HELICARRIER � DIA

Barton leva seus homens para os dutos de ar do navio. Eles rappel
em um corredor.

BARTON
Abaixe esse motor! Detenção! Obter
ele através do escuro! Venha comigo.
Dois de seus homens o seguem. Eles vão em direção à ponte.

EXT. ND HALLWAY, TRANSPORTADORA � MANHÃ

Tony e Cap correm por um salão escuro e cheio de detritos.

TONY
Encontre o motor três. Encontro você lá.
Cap sai quando Tony se aproxima de uma sala de tecnologia. Por dentro, Tony's
O traje do HOMEM DE FERRO está esperando, iluminado acima em toda a sua glória.

INT. SALA DE EQUIPAMENTO INFERIOR, TRANSPORTADORA � CONTÍNUA

NO ROSTO DE BANNER na luz fraca enquanto ele luta para suprimir
a raiva, mas seu rosto está crescendo, mudando lentamente.
Natasha está se libertando dolorosamente, conversando com Banner...

NATASHA
Médico... Bruce, você precisa lutar contra isso.
É exatamente isso que Loki quer. Estavam
vai ficar bem. Me escute.
Dois soldados da SHIELD se aproximando chegam para checá-la. Ela
furiosamente os afasta. Eles saem dali.

NATASHA
Nós vamos ficar bem. Direita? Eu juro
minha vida eu vou tirar você disso, você
vai embora, e nunca...

BANNER
Sua vida?
Sua voz muda - a amarga diversão é
transformando-se em uma ameaça rosnada. Outra explosão sacode o
transportadora - e ele se vira para olhá-la, transformando-se exatamente como o
as luzes se apagam.

NATASHA

( LIMPEZA )
Bruce.
Banner de repente começa a se transformar em HULK e dá
Natasha um último olhar conhecedor. Natasha LIVRE DE LUGAS
escombros. Ela para.
O HULK, sentindo-a, vira a cabeça e coloca o rosto de um
perturbar monstro. Natasha JOLTS sobe as escadas com o HULK
perseguindo-a. Natasha manobra como uma viúva negra deveria.
Ela rola sob uma turbina, começa a rastejar dentro do labirinto de
canos. O HULK os puxa de cima da passarela.
Natasha cai sob as passarelas e de forma rápida e
escapa furtivamente. O HULK deixa escapar um ROAR OF RAGE diferente
qualquer coisa. PRIMAL. Não é humano.

INT. SEÇÃO DE DETENÇÃO DO HELICARRE � DIA

Loki olha para cima, sorrindo maliciosamente.

INT. PONTE HELICARRIER � DIA

A fúria corre e vê o caos aumentar ainda mais do que
antes. O HELMSMAN está completamente desarrumado.

NICK FURY
Traga o transportador para dentro e cabeça
sul. Leve-nos para a água.

HELMSMAN
Por que água? Navegações recalibradas
após a falha do motor.

NICK FURY
O sol está nascendo?!

HELMSMAN
Sim senhor.

NICK FURY
Então coloque à esquerda! Nos deixe
água! Mais uma turbina cai e
nós caímos.

EXT. LADO DO PORTO DO HELICARRE � DIA

CAPITÃO AMÉRICA, empurrando com toda a sua força a porta para
lado da porta, vê a tecnologia SHIELD em máscaras de oxigênio total disparar fogo
extintores e cobertura de faíscas - em grande parte incapazes de fazer
qualquer coisa.
O motor 3 está totalmente morto. UM GRANDE GRUPO do lado da porta em TORN

FORA.

CAPITÃO AMÉRICA
Stark, eu estou aqui!

TONY
Boa. Veja o que temos.
Tony voa em seu traje IRON MAN e se aproxima dos danos
motor.

DENTRO DO TERNO
Tony observa dentro de sua tela o motor danificado e
seus layouts.

TONY
Eu tenho que ter essa super condução
sistema de refrigeração novamente online antes que eu possa
acessar os rotores e trabalhar em
desalojando os detritos.

EXT. LADO DO PORTO DO HELICARRE � DIA

O HOMEM DE FERRO começa a puxar os rotores presos. Olha para Steve.

HOMEM DE FERRO
Eu preciso que você chegue a esse motor
painel de controle e me diga quais relés
estão na posição de sobrecarga.
O HOMEM DE FERRO voa para condutores de resfriamento gigantes. CAPITÃO AMÉRICA
SALTA para o outro lado do corrimão quebrado. CAPITÃO
A AMÉRICA chega ao painel de controle e o abre. Para um
homem que cresceu como um YANK, que porra é essa!

HOMEM DE FERRO
Como é lá?

CAPITÃO AMÉRICA
Parece funcionar em alguma forma de
eletricidade.

HOMEM DE FERRO
Bem, você não está errado.

INT. SALA DE EQUIPAMENTO INFERIOR, TRANSPORTADORA � DIA

Natasha rasteja continuamente sob a passarela. Ela para.
Então...BOOM. BOOM. BOOM. O quarto vibra. Ritmicamente.
Natasha puxa a arma e lentamente sai para a passarela
e giros.
...e depois um ROAR. O CABELO. Natasha dispara um tiro em um líquido
tubo de nitrogênio que atinge o casco na cara. O casco esmaga o
MERDA FORA DELE. Natasha começa a correr pelo labirinto de
corredores. O som do monstro está chegando.
Finalmente, ela alcança e um longo corredor. Enquanto ela corre, atrás
ela, o HULK LÁGRIMES pelo corredor, vindo para ela.
Natasha vira ver, mas o HULK a coloca na parede,

Smashing no chão.
O HULK marca seu território. Natasha olha para cima. Um medo que ela tem
nunca senti começa a vazar. O CAMINHO levanta a mão e IS
Bateu nos pés por quem o joga na sala ao lado.

INT. PORTO DE AERONAVE DO HELICARRIER � CONTÍNUO

Thor e HULK rolam pelo chão. Toda pessoa dirige o
inferno fora. Thor olha para esta besta magnífica. O CAMPO
levanta-se e se move como um boxeador, quer que Thor faça sua jogada.
O HULK faz sua jogada.
BALANÇO E SENHORITA. Thor balança a mão maciça e quase bate
Tire os pés dele. HULK continua balançando e desaparecendo, mijando-o
fora. Finalmente, ele abaixa o braço, mas Thor o agarra e
envolve em torno dele.

THOR
Nós não somos seus inimigos, Banner! Tente
pensar!
HULK levanta o braço, para surpresa de Thor, e ele o vê

VOANDO COMO PUNCHES O ROSTO COM SEU Punho.

EXT. LADO DO PORTO DO HELICARRE � DIA

HOMEM DE FERRO LIXA continuamente detritos quebrados da turbina
motor. É ruim, mas ainda corrigível.

CAPITÃO AMÉRICA ( V.O. )
Os relés estão intactos. Qual é o nosso próximo
mover?

TONY
Mesmo se eu limpar os rotores, essa coisa
não se envolverá novamente sem um salto. eu sou
vai ter que entrar lá e empurrar.

EXT. LADO DO PORTO DO HELICARRE � DIA


CAPITÃO AMÉRICA
Bem, se essa coisa se acelerar,
você vai ficar desfiado!

TONY
Então fique na unidade de controle e
reverter a polaridade por tempo suficiente para
mag de desengate...

CAPITÃO AMÉRICA
Fale inglês!

TONY
Vê aquela alavanca vermelha? Vai diminuir a velocidade
rotores para baixo por tempo suficiente para eu conseguir
Fora. Aguarde, espere minha palavra.
O CAPITÃO AMÉRICA olha para o outro lado onde ele estava. Ele
vê a alavanca vermelha e SALTA em sua direção.

INT. PORTO DE AERONAVE DO HELICARRIER � DIA

Thor esmaga em outra pilha de caixas. Como ele levanta sua
cabeça, ele sente algo nos lábios. SANGUE. Enquanto ele desliza
fora, o rugido do casco não está muito longe. Thor estende a mão
Fora.
O ROAR fica MAIS ALTO e MAIS PERTO. Thor se concentra. Sua mão se estica
em direção ao ar. Seus olhos estão apertados em concentração. O HULK corre
direto para ele. No último segundo, MJ � LNIR voa na mão
e Thor SUPERCUTA O CHURO, QUE SE ENCONTRA EM UM JATO MAIS LUGAR.
HULK se levanta, balançando a cabeça como que porra é essa
aconteceu.' Ele sacode e rasga com raiva a cauda do
jato, amarra seu corpo como uma multidão de discos gregos e...CAVALOS

A PLACA MASSIVA NO LADRÃO.
Thor SLIDES e PATOS sob a cauda.Saltando para cima, ele joga
Mj � lnir com toda a sua força, derrubando a cabeça do HULK
saltos.HULK cai, martelo na mão.Ele tenta levantá - lo, mas
não pode.Mj � lnir descansa em cima da mão.
Lute como ele pode, HULK envolve a mão em torno do martelo.O
martelo não se move.Sem sucesso - ele se esforça com todo o seu
pode, grita com o esforço, AMARELO.
Thor pula de novo, KNEEING HULK na cara.Thor agarra seu
martelo, pula nele, usando o martelo como uma fechadura para seu
CHOKEHOLD.Hulk tenta tirá - lo.

INT.PONTE HELICARRIER � DIA

Fury e Agent Hill examinam seus monitores.

NICK FURY
Precisamos de uma evacuação completa no hangar inferior
baía.
Agente Hill assente.Ela sai para sair, mas uma granada escorregadia
aparece.

AGENTE MARIA HILL

GRENADE!
A granada dispara, enviando - a pelos degraus.Fúria FIRES a
tiro na entrada aberta.Ele se move para trás do lado do
entrada.Um punhado de homens de Barton entra.Vigilante, pronto,
esperando... A fúria sai, sua arma desenhada.
Um tiro e mão - a - mão se segue, mas Fury é incapaz de parar
um deles, e é por isso que ele leva um tiro na cabeça pelo agente Hill,
que parece gostosa e sexy segurando sua arma.

INT.SEÇÃO DE ARMÓRIO DO HELICARRE � DIA

O agente Coulson sobe pela porta do arsenal.Ele coloca a cabeça
um SCANNER DE RECONHECIMENTO FACIAL.Entra na sala.

AGENTE JASPER SITWELL(V.O. )
Temos violação de perímetro! Hostis são
em equipamento SHIELD.Segure em todos
junção.

INT.PORTO DE AERONAVE DO HELICARRIER � DIA

BALANÇO PATRIMÔNIO debaixo do chão, enviando Thor na bunda.HULK
agarra - o pelo pescoço.

INT.PONTE HELICARRIER � DIA

Um tiroteio se abre.AGENTES trocam fogo brutalmente
soldados táticos eficientes.

AGENTE JASPER SITWELL(V.O. )
Senhor, o HULK e Thor estão no ônibus espacial
níveis 2, 3 e 4!

AGENTE MARIA HILL
Senhor, o Hulk vai destruir este lugar
à parte!

NICK FURY
Chame a atenção dele.

AGENTE MARIA HILL
(em sua EARPIECE)
Acompanhante 606, prossiga para 270 PRINCIPAL
SHUTTLE! Não chegue muito perto.

ESCORT 606 PILOT(V.O. )
Cópia de.

EXT.SKY � DIA

O jato ESCORT 606 BANKS para a direita, indo em direção ao
transporte.

EXT.FECHAMENTO FORA

ESCORT 606 PILOT entra lentamente.Vê a ação
entre Thor e o HULK.

ESCORT 606 PILOT
Alvo adquirido.Alvo envolvido.
(puxa o gatilho; incêndios
armas em HULK )
UM CHUVEIRO DE BALAS PASTA O CABELO EM TODA PARTE.Thor patos para
capa.O HULK se vira, soltando seu ANO PRIMAL.Ele
pula, leva um começo e picapes...

ESCORT 606 PILOT PARECE QUE ELE TOMAU UMA MERDA.

ESCORT 606 PILOT

ALVO IRRITADO! ALVO IRRITADO!
TERRAS DO CAMPO NO NARIZ DO JATO.O jato gira voluntariamente.Como o HULK
rasga - o, ESCORT 606 PILOT puxa seu assento de ejeção, mas

MANTENHA A PORTA DO CARALHO!

O casco o pega, o acena e depois o joga fora.
ESCORT 606 PILOT puxa seu pára - quedas.O jato explode.O CAMPO

PLUMMETS PARA A TERRA, RUGANDO SUA CANÇÃO DE SWAN.

EXT.LADO DO PORTO DO HELICARRE � DIA

O laser IRON MAN corta um grande pedaço de metal quebrado.Ele então pula
nele, aliviando os rotores.
Do outro lado, os homens de BARTON entram no lado da porta.CAPITÃO
A AMÉRICA olha para baixo, ponderando se são ajuda.Evidentemente não como
eles começam a atirar nele e jogar granadas.
CAPITÃO AMÉRICA pula para o outro corrimão e desce com
Homens de Barton.Ele começa a derrubá - los, chega até
jogando um fora.Mais alguns entram, FIRING.
CAPITÃO AMÉRICA pega um DIPLOMAT NOVESKE RIFLEWORKS(palavra grande
para uma grande arma) e salta de volta para sua posição, disparando
para eles.

INT.PONTE HELICARRIER � DIA

O tiroteio caiu, mas mais homens de Barton entram e
são levados por Fury, que está confuso sobre o motivo de continuarem chegando.

NICK FURY
Eles não estão passando por aqui, então
que diabos...
De repente, Barton perde uma flecha até a ponte e EXPLODE
pontos críticos.Barton lança uma flecha com vários pontas em direção a
Fúria, mas bate em seu comando, logo acima de um USB

RESULTADOS.
Fury FIRES em Barton, mas já se foi.A flecha então se auto -
ativa e se insere nas tomadas, invadindo todos
monitor único e quadro principal.O hacking faz com que o Engine 1
desligado.De repente, o HELICARRIER começa a PERIGOSAMENTE
para um lado.

AGENTE JASPER SITWELL(O.S. )
Senhor, perdemos toda a energia no Motor 1.

NICK FURY
É o Barton.Ele tirou nossos sistemas.
Ele está indo para o nível de detenção.
Alguém copia ?

INT.SALA DE EQUIPAMENTO INFERIOR, CARREIRA - DIA

Ainda abalada pela provação HULK, Natasha senta lá, balançando
para frente e para trás, depois de chorar por um tempo.Convocando de volta toda ela
frescura, ela toca sua EARPIECE.

NATASHA
Este é o agente Romanoff.Eu copio.
Natasha aparece e corre para Barton.

EXT.LADO DO PORTO DO HELICARRE � DIA

O HOMEM DE FERRO começa a empurrar o rotor usando BOOSTERS de suas botas.

PESQUISA DO NICK(V.O. )
Stark, estamos perdendo altitude.

HOMEM DE FERRO
Sim.Percebido.
Os rotores começam a impulsionar cada vez mais rápido como IRON MAN'S
Os boosters ficam cada vez mais brilhantes.
Por outro lado, o CAPTAIN AMERICA atira continuamente em
Homens de Barton.Piscando no momento errado, CAPITÃO AMÉRICA
perde a vantagem e desliza para fora do corrimão, mas agarra
um cabo solto.

INT.SEÇÃO DE DETENÇÃO DO HELICARRE � DIA

Thor corre para a seção de detenção onde encontra Loki,
escapando.

THOR

NÃO!
Thor CHARGES em seu irmão.Loki caminha até ele e chora
para baixo para atacar.O que só passa por ele.O falso Loki
se dissipa no nada.O LOKI REAL sai por trás
a porta da cela, que se fecha no THOR, trancando - o.Loki
sorri.

LOKI
Você nunca vai se apaixonar
aquele ?

INT.SALA DE EQUIPAMENTO INFERIOR, TRANSPORTADORA � DIA

Barton caminha sozinho pela passarela.Em um movimento relâmpago rápido,
Barton aperta uma flecha e aponta para NATASHA.Um corpo a corpo
luta segue.Natasha CRAWLS seu caminho em torno de Barton, fazendo
Barton deixa cair o arco, mas puxa uma faca para ela.

INT.SEÇÃO DE DETENÇÃO DO HELICARRE � DIA

Thor, em um acesso de raiva, coloca SLAMS MJ � LNIR na célula de vidro.Para
sua surpresa, a porta da cela apenas bate, mas bate violentamente
o navio.Loki fica lá com cautela, assim como sua GUARDA

SOLDADO.

LOKI
(sorri; caminha até o

PAINEL DE CONTROLE )
Os humanos nos acham imortais.Devemos
teste isso ?
De repente, GUARDING SOLDIER cai como uma árvore.CONVIDADES AGENTES
fica lá, segurando o PROTOTIPO DE ARMA PHASE 2.

AGENTE PHIL COULSON
Afaste - se, por favor.
Loki se afasta do interruptor.

AGENTE PHIL COULSON
Você gosta disso ? Começamos a trabalhar em
o protótipo depois que você enviou THE
DESTROYER.Mesmo eu não sei o que
faz.Você quer descobrir ?

UM GASP ALTO.O CONVIDADOR AGENTE É IMPALADO ATRAVÉS DO CORAÇÃO.O

LOKI REAL ESTÁ ATRÁS DE COULSON.

THOR
Nããão!
Loki envia o agente Coulson contra a parede.Agente Coulson cai
para baixo, respirando rápido.Loki segue para o interruptor de controle.
Ele dá ao irmão uma última olhada.Thor olha para ele, esperançoso.
Loki abre o HATCH.Thor ainda espera.LOKI BATA O BOTÃO E

CAI PARA FORA DO NAVIO.

INT.SALA DE EQUIPAMENTO INFERIOR, TRANSPORTADORA � DIA

Barton e Natasha continuam se atacando.Natasha
CAIXAS DO CAIXA O rosto de Barton.Sentindo isso, Barton dá um soco em
ela, mas ela agarra o braço dele, torcendo - o.BARTON ESCREVE NA DOR.
Usando o outro braço, ele joga a faca e começa a
SLASH em Natasha.Ela evita todos os movimentos, mas se encontra em um
BLOQUEIO MANTENHA com ele.Enquanto ele força a faca, ela morde a faca dele
pulso.Barton solta a faca.
Natasha agita as pernas em volta do pescoço, vira - o e arma
LOCKS ele.Ela enfia a cabeça em um trilho de tubos.Barton vai
para baixo, difícil.Ele a procura, quase voltando a si.

BARTON
Natasha...
Natasha o COLAÇA.Barton está fora.

EXT.SKY

Thor, preso na gaiola de vidro, BOUNNCES fora da célula JUMBLING
pod.À medida que se aproxima da terra, Thor tenta balançar no vidro,
mas erra.A terra se aproxima.
Em uma tentativa final antes de cair, Thor se posiciona
a porta de vidro e o LEAPFROGS quando a gaiola está prestes a bater
o chão.A célula bate na costa quando Thor cai
no prado.

INT.SEÇÃO DE DETENÇÃO DO HELICARRE � DIA

Loki não tem remorso ao olhar para baixo.Ele fecha a escotilha e
prossegue para sair.UMA VOZ FRACA.

AGENTE PHIL COULSON
Você vai perder.

LOKI

(GIRAR)
Eu sou ?

AGENTE PHIL COULSON
Está na sua natureza.

LOKI
Seus heróis estão espalhados, seus
fortaleza flutuante cai do
céu ... onde está minha desvantagem ?

AGENTE PHIL COULSON
Você não tem convicção.

LOKI
Eu não acho que eu...

AGENT COULSON SHOOTS LOKI COM SUA PROTOTIPO DE FASE 2 WEAPON,

CAUSANDO LOKI PARA SER SOPRADO PELA PAREDE ATRÁS DE ELE.

AGENTE PHIL COULSON
Então é isso que faz.

INT.PONTE HELICARRIER � DIA

De volta à ponte, Fury vê em sua VIEWSCREEN que a escotilha
foi aberto.Sabendo que o agente Coulson foi enviado para lá, ele vai.

EXT.LADO DO PORTO DO HELICARRE � DIA

O HOMEM DE FERRO GIRA continuamente o Motor 3, dando tudo o que ele tem.O
Os rotores estão se adaptando de maneira adequada e rápida.Os NÍVEIS DO HELICARRE
em si.

DENTRO DO TERNO

TONY
Cap, eu preciso da alavanca!

STEVE(V.O. )
Eu preciso de um minuto aqui!

TONY
Alavanca.Agora!
Tony solta os rotores.Eles giram sozinhos.Tony é
então pego em um.Ele agora está fodido.HOMEM DE FERRO entra no
rotores, sendo mastigados.

EXT.LADO DO PORTO DO HELICARRE � DIA

CAPITÃO AMÉRICA CLIMBS pelo cabo solto e atinge o
grade.
O HOMEM DE BARTON abre fogo mais uma vez.CAPITÃO AMÉRICA se puxa
para cima e finalmente puxa a alavanca.
Um VENT é aberto no Motor 3. HOMEM DE FERRO cai, mas o traje
fortemente danificado, dificilmente o mantendo acordado.O HOMEM DE FERRO vai para Cap.
O HOMEM DE BARTON transforma seu AIM em HOMEM DE FERRO, que o joga no
parede.HOMEM DE FERRO rola, cansado.Cap solta um suspiro de alívio.

FORA DO HELICARRIER
A transportadora que trouxe Barton e sua equipe agora sai, levando
Loki e seu cetro.O transportador voa para longe.

INT.SEÇÃO DE DETENÇÃO DO HELICARRE � DIA

Fury corre para encontrar o agente Coulson ainda vivo, apenas.

AGENTE PHIL COULSON
Desculpe chefe.Eles ficaram coelhos.

NICK FURY
Apenas fique acordado.OLHOS EM MIM!

AGENTE PHIL COULSON
Não.Estou com o relógio aqui.

NICK FURY
Não é uma opção.

AGENTE PHIL COULSON
Está tudo bem, chefe.Isso nunca estava indo
trabalhar ... se eles não tivessem
algo ... para...
O agente Coulson desvia o olhar.Suspira seu último suspiro.Nick Fury parece
sombriamente em Coulson.A equipe médica chega.

INT.PONTE HELICARRIER � DIA


PESQUISA DO NICK(V.O. )
O agente Coulson caiu.
A agente Hill está sendo tratada por um corte na cabeça, ouve
o fone de ouvido, de pé.

AGENTE DE AMIGO(V.O. )
Os paramédicos estão a caminho.

PESQUISA DO NICK(V.O. )
Eles estão aqui.

INT.LADO DO PORTO DO HELICARRE � DIA

Steve e Tony também ouvem.

PESQUISA DO NICK(V.O. )
Eles chamaram.

INT.PONTE HELICARRIER � MAIS TARDE

Fury reúne Tony e Steve de volta à sala de reuniões todos
parece que está atordoado.Uma aparência de choque entorpecido é mostrada
em seus rostos devastados.

NICK FURY
Estes estavam na jaqueta de Phil Coulson.
Acho que ele nunca fez você assinar
eles.
Fury joga os CARTÕES DE NEGOCIAÇÃO DE AMÉRICA DE Coulson na mesa
em direção a Steve.Steve os pega, manchado de sangue.

NICK FURY
Estamos mortos no ar aqui em cima.Nosso
comunicações, localização do cubo,
Banner, Thor.Eu não tenho nada para você.
Perdi meu único olho bom.Talvez eu tivesse isso
chegando.

(UM BEAT)
Sim, nós íamos construir um arsenal
com o Tesseract.Eu nunca coloquei todo o meu
fichas nesse número, porque eu
estava jogando algo ainda mais arriscado.
Houve uma ideia, Stark sabe disso,
chamado de INICIATIVO DOS AVENGERS.O
ideia era reunir um grupo de
pessoas notáveis, veja se elas poderiam
torne - se algo mais.Veja se eles
poderia trabalhar juntos quando precisávamos deles
para, para lutar as batalhas que nunca
poderia.Phil Coulson morreu ainda
acreditando nessa idéia, em heróis.
Tony se levanta e sai, não querendo mais ouvir.

NICK FURY
Bem, é uma noção antiquada.

EXT.MÉDIA � DIA

Thor sai para o prado.Ele olha para baixo.MJ � LNIR.

INT.EDIFÍCIO ABANDONADO � DIA

Banner acorda, na forma humana.Ele olha em volta e vê que ele é
EM UMA PILE DE RUBBLE e olha para o teto aberto que ele esmagou
EM.E é completamente nu.Um guarda de segurança está lá,
espantado.

GUARDA DE SEGURANÇA
Você caiu do céu.

BANNER

(VINDO PARA)
Eu machuquei alguém ?

GUARDA DE SEGURANÇA
Não há ninguém por aqui para se machucar.
Você assustou alguns
pombos embora.

BANNER
Por sorte.

GUARDA DE SEGURANÇA
Ou apenas uma boa mira.Você estava acordado quando
você caiu.

BANNER
Você viu ?

GUARDA DE SEGURANÇA
A coisa toda, através do
teto.Bunda grande e verde e buck
nu.Aqui...
Ele joga Banner um par de calças grandes.Banner puxa as calças.

GUARDA DE SEGURANÇA
Eu não acho que isso se encaixaria em você
até você diminuir para um tamanho normal
cara.

BANNER
Obrigado.
Uma batida.

GUARDA DE SEGURANÇA
Você é um alienígena ?

BANNER
O que ?

GUARDA DE SEGURANÇA
Do espaço sideral, um alienígena ?

BANNER
Não.

GUARDA DE SEGURANÇA
Bem, filho, você tem uma condição.

INT.SALA MÉDICA DO HELICARRIER � DIA

Barton está amarrado.Natasha o observa como Barton
tenta se livrar do controle mental de Loki.

NATASHA
Clint, você ficará bem.

CLINT BARTON
Você sabe disso ? É isso que você sabe ? eu
tenho...Eu tenho que entrar embora.eu tenho
expulsá - lo.

NATASHA
Nós não temos tanto tempo, vai
leve um tempo.

CLINT BARTON
Eu não entendo.Você já teve
alguém pega seu cérebro e brinca ? Puxar
você sai e envia outra coisa ? Faz
você sabe como é ser desfeito ?

NATASHA
Você sabe que eu faço.

CLINT BARTON
Por que estou de volta ? Como você o tirou ?

NATASHA
Recalibração cognitiva.Eu bati em você
muito difícil na cabeça.

CLINT BARTON
Obrigado.
(Natasha desaperta o

RESTRIÇÕES)
Tasha, quantos agentes ?

NATASHA
Não.Não faça isso consigo mesmo,
Clint.Este é o Loki.Isso é monstros
e magia e nada que éramos
treinado para.

CLINT BARTON
Loki, ele escapou ?

NATASHA
Sim.Suponho que você não sabe onde ?

CLINT BARTON
Eu não precisava saber.Eu não perguntei.
Ele vai fazer sua peça em breve.
Hoje.

NATASHA
Temos que detê - lo.

CLINT BARTON
Sim ? Quem somos nós ?

NATASHA
Eu não sei.Quem sobrou.

CLINT BARTON
Bem, se eu colocar uma flecha no Loki's
olho, eu dormia melhor, suponho.

NATASHA
Agora você parece com você.
Natasha senta ao lado de seu parceiro e amigo.

CLINT BARTON
Mas você não.Você é um espião, não um
soldado.Agora você quer entrar em um
guerra.Por quê ? O que Loki fez com você ?

NATASHA
Ele não fez, eu apenas...

(SHE PAUSES )

CLINT BARTON
Natasha.

NATASHA
Eu fui comprometido.Eu fiquei vermelho no meu
livro.Eu gostaria de acabar com isso.

INT.SEÇÃO DE DETENÇÃO DO HELICARRE � DIA

Tony olha para o recipiente de celular vazio.Ele não está dizendo um
palavra.Steve entra.

STEVE
Ele era casado ?

TONY
Não.Havia um violoncelista, eu acho.

STEVE
Eu sinto Muito.Ele parecia um bom homem.

TONY
Ele era um idiota.

STEVE
Por quê ? Por acreditar ?

TONY
Por enfrentar Loki sozinho.

STEVE
Ele estava fazendo seu trabalho.

TONY
Ele estava fora de sua liga.Ele deveria
esperou.Ele deveria ter...

STEVE
Às vezes não há saída, Tony.

TONY

(ANDA - SE)
Direita.Como isso funcionou para ele ?

STEVE
É a primeira vez que você perde um
soldado ?

TONY
(gira acentuadamente)
NÃO SOMOS SOLDADOS! Eu não estou marchando
para o pífano de Fury!

STEVE
Nem eu! Ele tem o mesmo sangue
em suas mãos como Loki faz.Agora mesmo
temos que deixar isso de lado e conseguir
isso feito.Agora Loki precisa de um poder
fonte, se pudermos montar uma
Lista...

TONY
(olhando para o sangue manchado

PAREDE)
Ele tornou pessoal.

STEVE
Esse não é o ponto.

TONY
Esse é o ponto.Esse é o ponto de Loki.
Ele nos bateu bem onde moramos.Por quê ?

STEVE
Para nos separar.

TONY
Ele teve que conquistar sua ganância, mas ele
sabe que ele tem que nos levar para vencer,
direita ? É isso que ele quer.Ele quer
para nos vencer e ele quer ser visto
fazendo isso.Ele quer uma audiência.

STEVE
Certo, peguei o ato dele em Stuttengard.

TONY
Sim.Isso é apenas uma visualização, isso é
noite de abertura.Loki é uma diva de inclinação total.
Ele quer flores, ele quer desfiles, ele
quer um monumento construído nos céus
com o nome estampado...

(PAUSA)
Sonofabitch!

EXT.TORRE ESCURA � DIA

O Selvig funciona em torno do dispositivo CMS que já foi configurado.
no telhado da torre de Tony.

INT.SALA MÉDICA DO HELICARRIER � DIA

Steve anda de uniforme completo.Natasha olha para ele, despreparada.

STEVE
Hora de ir.

NATASHA
Ir aonde ?

STEVE
Eu vou te contar no caminho.Você pode voar
um desses jatos ?
Barton sai do banheiro.Olha para Cap.

CLINT BARTON
Eu posso.
Steve olha para Natasha e ela acena com a cabeça para confirmar a de Barton
do lado deles.

STEVE
Você tem um terno ?

CLINT BARTON
Sim.

STEVE
Então vista - se.

MONTAGE
- KRAKAKABOOM! Um BOLT of Lightning of of LIGHT
acima, colidindo com MJ � LNIR.A explosão é enorme.O

PODEROSO.
- CAPITÃO AMÉRICA puxa seu capacete e seu SHIELD.
- Tony serve o capacete do IRON MAN.A luz desliza sobre o ferro
Buracos nos olhos do homem.
- A Viúva NEGRA anexa uma GAUNTLET GLOVE com suas rodadas
pulso.UMA LUZ AZUL ENCARGA.
- HAWKEYE escorrega em seu QUIVER de flechas.

EXT / INT.QUINJET � DIA

Cap, Widow e Hawkeye caminham em direção e para o QUINJET.UMA
O JOVEM PILOTO DE ESCUDO olha e fica no caminho deles.

PILOTO DE GAROTO
Você não está autorizado a estar aqui...

CAPITÃO AMÉRICA
Filho ... apenas não.

INT.PONTE HELICARRIER � DIA

Fúria olha a janela do navio, contemplando.Agente Hill
caminha até ele, sabendo.

AGENTE MARIA HILL
Senhor.

NICK FURY
Agente Hill ?

AGENTE MARIA HILL
Aqueles cartões estavam no Coulson's
armário, não em sua jaqueta.

NICK FURY
Eles precisavam do empurrão.
(segurando os cartões de Coulson)
UM RUÍDO ALTO GRITA.Fury olha para o IRON MAN voando
assim como o QUINJET.

NICK FURY
Eles encontraram.Obtenha nossas comunicações
faça backup, o que você tiver que fazer.eu
quer olhos em tudo.

AGENTE MARIA HILL
Sim senhor.

EXT.SKYLINE DA CIDADE DE NOVA IORQUE - TORRE ESCURA � DIA

IRON MAN chega a STARK TOWER, onde Selvig ATIVA o CMS
dispositivo, segurando o Tesseract.

JARVIS
Senhor, tirei o reator de arco.O
o dispositivo já é auto - sustentável.

TONY
Desligue, Dr.Selvig.

SELVIG
É tarde demais! Não pode parar agora.Ele
quer nos mostrar uma coisa! Um novo
universo.

HOMEM DE FERRO
OK.
O HOMEM DE FERRO aponta as mãos para o CMS e FIRES.A energia
de seus boosters SHATTERS com um CRACK ensurdecedor! Cai de Selvig
para trás.ABAIXO, CIDADÃOS DE NOVA IORQUE olham para STARK
TORRE.O HOMEM DE FERRO olha incrédulo para o CMS ...ileso.

JARVIS
A barreira é pura energia.Está
inacessível.A Marca VII não está pronta
para ser implantado.

TONY
Pule as jantes giratórias.Estamos no
relógio.
TONY pousa seu SUIT e passa pela manopla e sem roupa
ele.LOKI olha para ele, sorrindo.Eles continuam a entrar
a cobertura.

INT.ALMOFADA ESTARU � DIA

Loki entra, segurando o cetro.Tony anda casualmente pelo
passos, em direção ao bar.

LOKI
Por favor, diga - me que você vai apelar
para a minha humanidade.

TONY
Na verdade, estou planejando ameaçar
tu.

LOKI
Você deveria ter deixado sua armadura ligada para
aquele.

TONY
Sim, já viu um pouco de quilometragem.
Você tem o bastão azul do destino.
Gostaria de uma bebida ?

LOKI
Me parar não vai mudar nada.

TONY
Não não não! Ameaçando.Sem bebida ? Você
certo ? Eu estou tendo um.

LOKI
Os CHITAURI estão chegando, nada vai
mude isso.O que eu tenho a temer ?

TONY

OS AVENGERS.
(Loki olha para ele, confuso)
É o que nos chamamos, mais ou menos
como um time. HERÓIS MAIS MIGHTIEST DA TERRA'
tipo de coisa.

LOKI
Sim, eu os conheci.

TONY

( SMILING )
Sim, leva um tempo para conseguir
tração, eu vou te dar essa.

TONY ( CONT'D )
Mas vamos fazer uma contagem de cabeças aqui. Seu
irmão, o demi-Deus; um super soldado,
uma lenda viva que meio que vive até
a lenda; um homem de tirar o fôlego
problemas de controle da raiva; alguns
mestres assassinos, e você, grande amigo,
você conseguiu irritar todos
um deles.

LOKI
Esse era o plano.

TONY
Não é um ótimo plano. Quando eles vierem, e
eles vão, eles virão para você.
De baixo da mesa de bar, Tony puxa COLANTOTTE
BRACELETS, um dispositivo de afiação.

LOKI
Eu tenho um exército.

TONY
Nós temos um casco.

LOKI
Eu pensei que a fera tivesse se afastado.

TONY
Você está perdendo o objetivo. Não há
trono, não há versão disso,
onde você sai por cima. Talvez o seu
exército vem e talvez seja demais para
nós, mas é tudo sobre você. Porque se nós
não pode proteger a Terra, você pode ser
malditamente certo, vamos vingá-lo.

LOKI
( caminha lentamente até ele;
levantando o cetro )
Como seus amigos terão tempo para
eu, quando eles estão tão ocupados lutando com você?
Loki TAPS Tony no peito com seu cetro. PING! Nada.
Confuso, Loki se cansa novamente. PING! NADA.

LOKI
Deveria funcionar.

TONY
Bem, problemas de desempenho. Você sabe?
Com raiva, Loki agarra Tony pela garganta e o joga através
o quarto.

TONY
Jarvis. A qualquer momento.
Loki agarra Tony pela garganta novamente.

LOKI
Vocês todos cairão diante de mim.
LOKI JOGA TONY PARA FORA DA JANELA. Tony FREEFALLS abaixo da torre.
Por trás de Loki, um elevador se abre e um RED POD SHOOTS sai.
O pod LASER ASSINA os BRACELETS COLANTOTTE em Tony. O POD
começa a TRANSFORMAR no traje MARK VII.
Ele se aproxima de Tony. HOMEM DE FERRO. O terno voa antes que ele atinja
o chão ou as pessoas que olham. Loki olha para cima, com raiva.

HOMEM DE FERRO
E há outra pessoa que você irritou
fora! O nome dele era Phil.
Loki levanta o cetro. HOMEM DE FERRO EM Loki, enviando-o
a bunda dele.

EXT. TORRE ESCURA � DIA

Selvig olha para o céu. A energia do Tesseract entra em ação
o céu. O feixe forma um VORTEX, que se abre

OUTRO PORTAL.

EXT. VASTNESS DO ESPAÇO

Um buraco no espaço se abre e, a partir dele, o CHITAURI ARMY SPILLS
em CARIÕES DE VOAR, carregando RIFLES DE ENERGIA com uma baioneta
o fim.

DENTRO DO TERNO

TONY
Direita. Exército.
O HOMEM DE FERRO voa em direção ao portal. Dos ombros, um
lançador de foguetes em miniatura, sai e FIRES. Como o
JERICHO MISSILE, vários alvos são derrubados, ao contrário de nenhum
míssil. É inútil. MILHARES DE CHITAURI VOAM PARA FORA. HOMEM DE FERRO
voa em direção à cidade.

EXT. MANHATTAN � DIA

O CHITAURI DESCULPE. Os nova-iorquinos enchem as ruas, olhando para
o combate a incêndio à distância. BOOM!!! O CHITAURI desencadeia
BATERIAIS, explodindo carros, incendiando as fachadas das lojas.

UMA EXPLOSÃO RASGA AS JANELAS DO CANTO SUPERIOR DO

EDIFÍCIOS. Chama e pedra choram para baixo. UM EFEITO DOMINO DE

EXPLOSÕES RIPPLING ATRAVÉS DA PONTE.

EXT. TORRE ESCURA � DIA

Loki caminha para a varanda enquanto os sons dos anéis CHITAURI
Fora. Ele admira seu reino que logo será. TERRA NA TORRE.
Loki se vira para o seu INIMIGO.

THOR
Loki! Desligue o Tesseract ou eu vou
destrua-o!

LOKI
Você não pode. Não há como parar.
Existe apenas a guerra!

THOR
Que assim seja.
Loki e Thor se apressam um para o outro. Eles e suas armas
colidir. As duas batalhas - Loki desencadeando outra raiva reprimida
e ciúmes, Thor não tem escolha a não ser se defender.

EXT. MANHATTAN � DIA

SOLDADOS E COPS assumiram posições cobrindo as ruas.
Eles vêem do céu, o IRON MAN liderando uma trilha de CHITAURI
em direção à sua torre.

EXT. SKY � DIA

O QUINJET BOOMS para a cidade.

Viúva NEGRA ( V.O. )
Stark, estamos indo para o nordeste.

DENTRO DO TERNO

HOMEM DE FERRO
Você parou para dirigir?
Balance PARK, eu vou colocá-los para fora
para você.

EXT. TORRE ESCURA � DIA

O HOMEM DE FERRO BANCIA em torno de sua torre. Vê Thor e Loki ainda indo
nele. HOMEM DE FERRO BALA pela rua, causando um CHITAURI
acidente.
Voando, o IRON MAN coloca o seguinte CHITAURI em vista do
QUINJET. A AMPLA NEGRA tira a metralhadora e dispara no

CHITAURI.

DENTRO DO TERNO

JARVIS
Senhor, temos mais entrada.

TONY
Bem. Vamos mantê-los ocupados.
O HOMEM DE FERRO volta ao portal.

EXT. TORRE ESCURA � DIA

Thor e Loki lutam violentamente. Loki dispara ENERGY do
cetro, enviando Thor deslizando pelo chão.

INT. QUINJET � DIA

HAWKEYE olha para a janela esquerda, encontrando um alvo.

HAWKEYE
Sim.

Viúva NEGRA
Veja-os.
HAWKEYE BANCA o jato em direção à STARK TOWER. Visa o MINIGUN em
Loki. Loki AIMS o cetro no QUINJET e FIRES UMA EXPLORAÇÃO DE
ENERGIA. Thor se levanta, derrubando Loki com força.
O QUINJET logo é pego em chamas. HAWKEYE manobra uma asa
do jato. Eles giram e diminuem. CAI DO AR COMO
PASSA SOBRE SKYSCRAPERS. Então ... eles entram na rua.

INT. QUINJET � DIA

Com todo mundo bem, HAWKEYE e BLACK WIDOW desatam
cintos de segurança e abra a rampa. CAPITÃO AMÉRICA corre para baixo, seguido
por HAWKEYE e BLACK WIDOW. Cada um tem suas armas respeitadas
na mão.

EXT. RUA DE QUATRO CAMINHAS � DIA

O TRIO chega no meio de uma rua de quatro vias. De repente,
a cidade se arrasta para uma parada. UMA RAIVA PROFUNDA E PRIMAL SEGUINTE.
Com esse rugido, uma SOMBRA vem sobre eles.

EXT. VASTNESS DO ESPAÇO

Do portal, um CHITAURI LEVIATHAN DO CARALHO SAI!
Transportando centenas de soldados, o CHITAURI LEVIATHAN PASSES
SOBRE O TRIO.

EXT. RUA DE PONTE � DIA

Eles olham para cima, fora de seu elemento. De ambos os lados, CHITAURI
SOLDADOS QUE SE ENCONTRAM e se ligam aos lados do
edifícios, deslizando para baixo. Alguns batem nesses prédios e
comece a sair de seus rifles de energia em pessoas inocentes.

CAPITÃO AMÉRICA
Stark, você está vendo isso?

DENTRO DO TERNO

TONY
Estou vendo, ainda trabalhando em acreditar.
Cadê a Banner? Ele já apareceu?

CAPITÃO AMÉRICA ( V.O. )
Banner?

TONY
Apenas me mantenha informado. Jarvis, encontre-me um
ponto fraco.
O HOMEM DE FERRO voa silenciosamente para trás e paralelo com o CHITAURI

LEVIATHAN.

EXT. TORRE ESCURA � DIA

Thor segura o rosto de Loki em frente, forçando-o a assistir
a cidade caindo em cinzas.

THOR
Veja isso! Olhe ao seu redor! Você
pense que essa loucura terminará com o seu
regra?

LOKI
( tenta desviar o olhar )
É tarde demais. É tarde demais para parar.

THOR
Não. Nós podemos. Juntos.
Loki olha para o irmão, mostrando um sinal de esperança. Então... Loki
esfaqueia Thor com uma faca pequena. Thor cai.

LOKI
Sentimento.
Thor se levanta, chuta Loki e o levanta no ar. Thor então
Bate-o, com força. Loki, sangrando, rola sobre a borda. Thor
olha para baixo. LOKI ESTÁ MONTANDO EM UM CARIOTO VOANDO. DOZENS de
CHITAURI segue sua liderança.

EXT. RUA DE PONTE � DIA

O TRIO corre atrás de táxis de cabeça para baixo. Eles olham para cima e vêem Loki
levando sua banda pela rua e FIRES na rua EM A

CADEIA DE EXPLOSÕES. PEQUENO CARRO E ENCONTRAR PESSOAS À medida que avança

SAI EM UMA CONFLAGRAÇÃO FINAL.
PESSOAS TERRIFICADAS fugindo de Loki, olhando por cima de seus
ombros, vindo direto para nós. CAPITÃO AMÉRICA olha para baixo
ponte.

CAPITÃO AMÉRICA
Essas pessoas precisam de assistência
há.
SOLDADOS DE CHITAURI que pousaram perto deles e começam a FIRING em
eles. A Viúva NEGRA puxa as duas pistolas e os FIRES. Vira para Cap.

Viúva NEGRA
Nós entendemos isso. É bom. Vai!

CAPITÃO AMÉRICA

( AT HAWKEYE )
Você acha que pode segurá-los?

HAWKEYE
Capitão.
( puxa um gatilho em seu arco;
um estreito é mecanicamente

ESCOLHIDO )
Seria meu verdadeiro prazer.
HAWKEYE atira uma SETA na cabeça da criatura, ganhando alguns
segundos para a AMÉRICA CAPITÃO quando ele cai da ponte,
seguido de uma EXPLOSÃO.
Cap corre até a praça, pulando dezenas de EXPLODENTES
carros. O PRIMEIRO AVENGER FUNCIONA COMO UMA QUEIMA CHEEETAH.
HAWKEYE corre sobre um ônibus cheio de pessoas. Das janelas, PEQUENO
CRIANÇAS são mantidas por seus pais para que HAWKEYE os retire
para segurança. Ele corre até a porta atolada e JERKILY a abre.
As pessoas começam a acabar.
A Viúva NEGRA esvazia seus CLIPS. HAWKEYE dispara SETA para o
fileiras do CHITAURI, atingindo sua marca cada vez que ele atira.

Viúva NEGRA
Assim como o BUDAPEST novamente!

HAWKEYE
Você e eu lembramos de Budapeste
muito diferente.

EXT. MANHATTAN � DIA

O COPS dispara continuamente contra os carros voadores. É bonito
inútil. Um jovem policial corre para seu sargento de polícia.

JOVEM COP
Precisamos sair! Eles têm que trazer
a guarda nacional!

SERGENTE DE POLÍCIA
Guarda Nacional? O exército sabe
o que está acontecendo aqui?

JOVEM COP
Nós?
A AMÉRICA DO CAPITÃO pula na frente deles. Eles olham para isso
homem de aparência ridícula.

CAPITÃO AMÉRICA
Eu preciso de homens nesses prédios. Lá
são pessoas lá dentro que podem se deparar com o
linha de fogo. Você os leva através do
porão ou através do metrô. Você
mantenha-os fora das ruas. Eu preciso de um
perímetro já em 39o.

SERGENTE DE POLÍCIA
Por que diabos eu deveria receber ordens de
Vocês?
De repente, uma EXPLOSÃO surge por trás de Cap. Uma explosão de energia
é bloqueado pelo seu SHIELD. Dois soldados CHITAURI atacam. Os policiais
assista em choque enquanto CAPITÃO AMÉRICA OS LUTA com facilidade. O
O sargento se vira para o oficial.

SERGENTE DE POLÍCIA
Preciso de homens nesses prédios, lidero o
pessoas para baixo e para longe das ruas.
Eu preciso de um perímetro já na 39a.

EXT. LINHA DE CÉU � DIA

O HOMEM DE FERRO desvia em torno de um prédio e fica de frente para o CHITAURI
LEVIATHAN. Ele puxa seu lançador de foguetes em miniatura
e FIRES. O CHITAURI LEVIATHAN ROARS aborrecido. O
CHITAURI LEVIATHAN se vira para ele.

HOMEM DE FERRO

( PARA JARVIS )
Nós chamamos a atenção dele. Que diabos é
passo dois?!
O HOMEM DE FERRO voa para longe.

EXT. RUA DE PONTE � DIA

HAWKEYE VIA um CHITAURI SOLDIER e RAMS uma flecha abaixo
garganta. A Viúva NEGRA coloca as mãos em um RIFLE ENERGY e
FALTA o inferno fora deles.
CAPTAIN AMERICA se junta e usa seu SHIELD, SWAPS e
WHACKS que se aproximam CHITAURI SOLDIERS. É tudo demais neles,
até...
Um raio atinge o céu, canalizando a explosão,
disparando a eletricidade contra os soldados da CHITAURI ao seu redor.
Eles são destruídos em uma onda de choque maciça. O CHITAURI
SOLDADOS convulsionam, caem mortos no chão. THOR TOQUE PARA BAIXO.

CAPITÃO AMÉRICA
Qual é a história lá em cima?

THOR
Os poderes ao redor do cubo são
impenetrável.

HOMEM DE FERRO ( V.O. )
Thor está certo. Temos que lidar com isso
rapazes.

Viúva NEGRA
Como fazemos isso?

CAPITÃO AMÉRICA
Como uma equipe.

THOR
Tenho negócios inacabados com Loki.

HAWKEYE
Sim, entre na fila.

CAPITÃO AMÉRICA
Salve isso. Loki vai manter essa luta
focado em nós e é disso que precisamos.
Sem ele, essas coisas poderiam correr
selvagem. Temos Stark no topo, ele vai
precisa de nós...
Nesse momento, o BANNER CHEGA EM UM PEQUENO MOTORBIKE. Saindo, ele
olha pela cidade.

BANNER
Então, tudo isso parece horrível.

Viúva NEGRA
Eu já vi coisas piores.

BANNER
Desculpa.

Viúva NEGRA
Não. Poderíamos usar um pouco pior.

CAPITÃO AMÉRICA
Stark? Nós o pegamos.

HOMEM DE FERRO ( V.O. )
Banner?

CAPITÃO AMÉRICA
Assim como você disse.

DENTRO DO TERNO

TONY
Então diga a ele para se vestir. Estou trazendo
a festa para você.
O HOMEM DE FERRO sai de trás de um prédio. O CHITAURI
LEVIATHAN segue, impaciente.

EXT. RUA DE PONTE � DIA

O resto dos AVENGERS olha para cima, se preparando e em pé
ainda.

Viúva NEGRA
EU... Não vejo como é uma festa...
O HOMEM DE FERRO BALA pela rua. O CHITAURI LEVIATHAN também
desce, latindo pela rua como um trem de luta que
continua construindo e construindo sua intensidade. Banner olha para trás.
Cap olha para ele. Banner começa a andar em direção ao monstro.

CAPITÃO AMÉRICA
Dr. Banner. Agora pode ser muito bom
hora de você ficar com raiva.

BANNER
Esse é o meu segredo, capitão. Eu estou sempre
com raiva.
O corpo de Banner começa a inchar, esticar e endurecer. VERDE

TIRO ATRAVÉS DE SEU CORPO. O CABELO.
Aaaannndddd.........SSSMMAAASSSHHH!!!! HULK POPS the CHITAURI

LEVIATHAN NO NARIZ. A CRIATURA VIA MAIS DE 360.
O HOMEM DE FERRO, no meio do vôo, estende o braço para fora e um ROCKET, pronto
atirar. HOMEM DE FIRON - o foguete atinge um SPOT SOFT � GRANDE
CHITAURI LEVIATHAN SOPRADO COMPLETAMENTE LONGE. Dor real do
CHITAURI LEVIATHAN. Outros pedaços de carne CAPTURA DE FOGO e
retirar... TAMANHO quando atingem a calçada. CAPITÃO AMÉRICA
eleva seu SHIELD para bloqueá-los.
De cima e nos edifícios, o CHITAURI ARMY assiste
horror como um grupo dos heróis mais poderosos da terra se encontram

UNIDO CONTRA UMA AMEAÇA COMUM. PARA COMBATER OS ALIMENTOS SEM ÚNICO

SUPER HERO PODERIA SE ENTENDER! OS AVENGERS ASSEMBLE!

EXT. SKY � DIA

Loki assiste abaixo, imóvel.

LOKI
Envie o resto.

EXT. VASTNESS DO ESPAÇO

Do portal, mais milhares de soldados e até mesmo

MAIS LEVIATANTES DE CHITAURI VOAM PARA FORA!

EXT. RUA DE PONTE � DIA

OS AVENGERS olham para cima. Muito fora do elemento deles.

Viúva NEGRA
Rapazes.

HOMEM DE FERRO
Chame, cap.

CAPITÃO AMÉRICA
Tudo bem, ouça. Até que possamos fechar
esse portal lá em cima, vamos usar
contenção. Barton, eu quero você nisso
telhado, olhos em tudo. Chamada
padrões e desvios. Stark, você conseguiu o
perímetro. Qualquer coisa fica mais do que
três quarteirões fora, você vira de volta ou
você vira para cinzas.

HAWKEYE
Quer me dar uma carona?

HOMEM DE FERRO
Direita. Melhor se calar, LEGOLAS.
O HOMEM DE FERRO eleva o HAWKEYE até o prédio.

CAPITÃO AMÉRICA
Thor, você tem que tentar gargalo
esse portal. Devagar eles. Você tem
o raio. Acenda os bastardos.
( Thor voa; para Natasha )
Você e eu, ficamos aqui no chão,
mantenha a luta aqui. E Hulk.SMASH.

O CULTO SORRIU UM GRIN E LÍS MAIS MAGNIFICENTES, SOAR ALTO

NO EDIFÍCIO MAIS PRÓXIMO, O CAMINHÃO EXECUTA A PAREDE CHAMA VÁRIAS

SOLDADOS DE CHITAURI, SNAPPING EM MEIO.

MERGULHA EM BORDO NO OUTRO LADO DA RUA,
JOGANDO OS SOLDADOS MORTOS DE CHITAURI EM DIREÇÃO A OUTROS SOLDADOS. O
Os soldados de CHITAURI atiram nele. O casco os afunda, apreende

ELES E COM PODER CRU, JOGA-OS PARA BAIXO.

EM SEU LÍPULO MAIS PODEROSO AINDA, O CAMPO VAI E ESTÁ NO

MÉDIO DE UM JAM DE TRÁFEGO CHARIOT VOANDO, PARA O QUE ELE OS CHAMA

FORA DE ALTITUDE.

EXT. EDIFÍCIO DO ESTADO DE IMPÉRIO � DIA

Thor agarra a torre. Cria MJ � LNIR e KRAKAKABOOM! A
O rabo cego do raio atinge de cima, colidindo

MJ � LNIR. ENTÃO OBRIGADO ESTA SHOCKWAVE MASSIVA EM DIREÇÃO AO PORTAL.

OS CANAIS O EXPLORAÇÃO E EXECUTA A ELETRICIDADE NO

SOLDADOS DE CHITAURI QUE VOAM PARA FORA DO PORTAL. Eles estão de volta

EM UM SHOCWAVE MASSIVO. OS SOLDADOS DE CHITAURI CONVULSAM, GOTA

MORTO PARA O TERRENO. Ele até rasga a merda de um chita

LEVIATHAN, QUE ENTÃO FODA EXPLODI.

INT. PONTE HELICARRIER � DIA

De volta à ponte, Fury vê em sua VIEWSCREEN a destruição
acontecendo em NOVA IORQUE. O agente Hill caminha até ele.

AGENTE MARIA HILL
Senhor. O conselho está ligado.
OH MERDA. Fury pressiona sua tela.

EXT. EDIFÍCIO DE ROOFTOP � DIA

No topo do telhado, o HAWKEYE dispara SETA para o fluxo de streaming
dos CHITAURI RIDERS, atingindo sua marca a cada vez. Inferno, heeven
Aponta o arco atrás dele, SEM OLHAR e solta a flecha,
EXPLODINANDO UM RIDER.

HAWKEYE
Stark. Você tem muitas cordas
grudando no rabo.

HOMEM DE FERRO
Apenas tente mantê-los fora das ruas.

HAWKEYE
Bem, eles não podem pagar um banco.
Encontre um canto apertado.

HOMEM DE FERRO
Eu vou estragar isso.
O IRON MAN faz isso e leva a TIGHT CORNERS e em
A visão de HAWKEYE, que dispara flecha sobre e flecha, EXPLODINDO o
LIVROS DE CHITAURI. O IRON MAN mantém os principais governantes de CHITAURI SOB
TÚNELES, ATRAVÉS DE GARAGENS DE ESTACIONAMENTO ABERTAS. Ele olha para trás. Não sobrou.

DENTRO DO TERNO

TONY
Boa ligação. O que mais você tem?

HAWKEYE ( V.O. )
Bem, Thor está enfrentando um esquadrão
no dia 6.

TONY
E ele não me convidou?

EXT. EDIFÍCIO DE ESCRITÓRIO - SALA DE CONFERÊNCIA � DIA

Estamos olhando para uma sala de conferências onde os funcionários do escritório estão sentados
em torno de uma mesa. Mas o barulho chamou a atenção de um trabalhador, então
outro, e logo todos estão subindo, pisando na janela,
hipnotizado pelo que está além.
O POVA CHITAURI LEVIATHAN DOS TRABALHADORES BALANHA bem na frente deles.

EXT. EDIFÍCIO DE ESCRITÓRIO - SALA DE CONFERÊNCIA � DIA

De repente, outro barulho chama a atenção do trabalhador. O CAMPO

BATERIA ATRAVÉS DE SEU PISO. Bate a sala,

ENCONTRAR E SALTAR PARA A MESA DO CHITAURI

LEVIATHAN. O CHITAURI LEVIATHAN COMEÇA A CAIR, TENTANDO

ONDA DO CAMPO.

EXT. RUA DE PONTE � DIA

A Viúva NEGRA, usando o RIFLE ENERGY, é arrancada de seus pés por um
SOLDADO DE CHITAURI. Ela TIRESOMELY derruba cortando sua
garganta. Ela pega o RIFLE ENERGY, vira-se para atacar. Suportes para tampas
lá, segurando seu SHIELD. Ela recua, cansada.

Viúva NEGRA
Capitão, nada disso vai significar um
maldita coisa se não fecharmos isso
portal.

CAPITÃO AMÉRICA
Nossas maiores armas não conseguiram tocá-lo.

Viúva NEGRA
Bem, talvez não seja sobre armas.
( gera o vôo

PERIGOS )

CAPITÃO AMÉRICA
Você quer chegar lá em cima, você vai
preciso de uma carona.

Viúva NEGRA
Eu peguei uma carona. Eu poderia usar um elevador
Apesar.
BLACK WIDOW faz backup dando a si mesma um começo de corrida. Elevadores de tampa
e ângulos seu SHIELD.

CAPITÃO AMÉRICA
Você tem certeza disso?

Viúva NEGRA
Sim. Vai ser divertido.

A Viúva NEGRA FUNCIONA NA AMÉRICA DO CAPITÃO. A Viúva NEGRA FAZ UM PARKOR

MOVIMENTO, USANDO SEUS PÉS PARA EXECUTAR O CARRO E SALTAR NO CAP

SHIELD, QUE DÁ-LHE UM BOOST COM O SHIELD. Ela agarra em um

CARIOTO DE VOAR.
[ Nota: A sequência a seguir nos levará através da ação em
um tiro prolongado. ]
- A Viúva NEGRA sobe na carruagem e corta a torre
ligação do atirador a ele. Ela então pula no piloto e pisca
suas facas no sistema nervoso dele. Ela o leva a BANCAR por um
construção.
- HOMEM DE FERRO chega e atira em qualquer outro LÍDER DE CHITAURI
seguindo-a. Ele desce até a CAPITÃO AMÉRICA, que
luta contra mais SOLDADOS CHITAURI. HOMEM DE FERRO aponta sua mão
BOOSTERS em seu SHIELD. A energia sai e Cap a usa como
um feixe de reflexão e derruba o CHITAURI nas proximidades.
- De cima deles, o HAWKEYE envia as setas restantes. Ele envia
um do outro lado da rua, derrubando um RIDER CHITAURI seguindo

HOMEM DE FERRO.
- Finalmente, temos Luta THOR e HULK no topo das costas
CHITAURI LEVIATHAN, destruindo e combatendo SOLDIERS. HULK

QUEBRA UMA PARTE MASSIVA DE EXÉRCITO E BATA-A NO
ESPIÃO DO CHITAURI LEVIATHAN. Convocando toda a sua força, ele,

ENTÃO LEVANTA, DESENHANDO O ILUMINAÇÃO DE TODOS OS LADOS E TRAZ

COM UM SOPRO FINAL E TERRÍVEL--

INT. MUSEU HISTÓRIO � DIA

O CHITAURI LEVIATHAN CRASHES entra em um museu de história. MORTO. THOR
e HULK ficam na parte de trás do CHITAURI LEVIATHAN depois
derrubando. Eles ficam parados, admirando. HULK PUNCHES THOR

COM SUA MÃO ENORME. Então vai voar. SORTE SORTE.

EXT. TORRE ESCURA � DIA

SELVIG ACORDA COM O CONTROLE DA MENTE LOKI. Ele olha em volta,
confuso onde ele está. Ele olha para o céu, surpreso.

EXT. RUA DE PONTE � DIA

Vários HUMVEES apontam suas armas MOUNTED .50 Cal para o céu,
MONTANDO E MERTENDO OS LIVROS DE CHITAURI. CAPITÃO AMÉRICA luta contra um
SOLDADO que o está prendendo com seu rifle de energia. Cap
QUEBRA SUA PERNA. Ele se levanta, pegando seu SHILED.

HAWKEYE
Capitão, o banco no 42ndpast MADISON,
eles pegaram muitos civis lá.

CAPITÃO AMÉRICA
Eu estou trabalhando nisso.

INT. 42NDBANK � DIA

Dezenas de civis estão reunidos no banco. Tensão e
incerteza os rodeia. TRÊS SOLDADOS CHITAURI os supervisionam,
apontando suas armas para eles. Um deles cobra uma bomba. É

Bips.
CAPITÃO AMÉRICA pula pela janela e joga seu SHIELD
na BOMBA DE CHITAURI. Os dois soldados da CHITAURI visam seus
rifles, mas Cap se esconde debaixo de uma mesa, na qual ele chuta
eles.
CAPITÃO AMÉRICA pula sobre a mesa, HEADLOCKS A SOLDIER, enquanto
BACKHANDING outro sobre o corrimão. A multidão se afasta.
Um soldado de CHITAURI o ataca por trás e arranca sua
CAPACETE. A bomba está apitando mais rápido.

CAPITÃO AMÉRICA
Todos! Limpar!
CAPITÃO AMÉRICA vira sobre o SOLDIER, agarra seu SHIELD e
assim que a bomba está prestes a sair, a bomba de CHITAURI mergulha,
tentando impedi-lo, mas ele desaparece, enviando CAPITÃO AMÉRICA
pela janela, pousando com muita força em um carro. Os civis
olhe de baixo. Eles estão bem.

EXT. FORA DO BANCO � CONTÍNUO

Cap sai do carro, olha pela cidade. Destruído. O
policiais e bombeiros chegam, retirando os civis que ele salvou.
UMA ESCRAÇA olha para trás, agradecida.

INT. PONTE HELICARRIER � DIA

De volta à ponte, Fury vê em sua VISTA o MUNDO

CONSELHO DE SEGURANÇA.

CONSELHO MUNDIAL DE SEGURANÇA # 2
Diretor Fury, o conselho fez um
decisão.

NICK FURY
Reconheço que o conselho fez uma
decisão, mas dado que é um estúpido
decisão idiota, eu escolhi ignorar
isto.

CONSELHO MUNDIAL DE SEGURANÇA # 1
Diretor, você está mais perto do que qualquer um dos
nossos subs, você embaralha esse jato...

NICK FURY
Essa é a ilha de Manhattan,
Vereador. Até ter certeza de que minha equipe
não aguento, não vou pedir um
ataque nuclear contra um civil
população.

CONSELHO MUNDIAL DE SEGURANÇA # 1
Se não os seguramos no ar, nós
perder tudo.

NICK FURY
Eu mando esse pássaro, já temos.
Fury desliga sua tela.

EXT. MANHATTAN � DIA

A Viúva NEGRA, ainda dirigindo a carruagem com o RIDER, é atingida em
o lado dela. Ela olha, imaginando de quem era o ENERGY FIRE
ela olha para trás.

Viúva NEGRA
Oh. Vocês.
LOKI SEGUI EM PURSUIT QUENTE. Eles correm para baixo, seguindo
entre edifícios. Eles correm mal, dirigindo e se esquivando.

EXT. EDIFÍCIO DE ROOFTOP � DIA

HAWKEYE olha para BLACK WIDOW, surpreso.

HAWKEYE
Nat, o que você está fazendo?

Viúva NEGRA ( V.O. )
Uh ... uma ajudinha!
HAWKEYE puxa o gatilho duas vezes, bate uma flecha e aponta
em Loki, sorrindo.

HAWKEYE
Eu o peguei.

FOGOS. A SETA RUGA NA CIDADE, RETA NO LOKI'S

CABEÇA...

SNATCH! COMO UM GATO, LOKI PENHA A SETA RETA

AR...Parece reto em HAWKEYE, sorrindo...

BBOOOOMMM!!! A SETA EXPLODI NO ROSTO DE LOKI, ENGRENDO EM

O PAI ESCURO.
A Viúva NEGRA olha para baixo e constrói seu impulso, ela SALTA
a carruagem, cai em cima da STARK TOWER, rolando-se para o
borda.

EXT / INT. PENTHOUSE ESCURO � DIA

Enquanto Loki olha para cima, chocado com o que aconteceu, THE HULK IS
APROVANDO E CHUVES LOKI, DURANTE A JANELA VINDORA DE VIDRO. Ele
COLAPSES quando ele bate na parede. O CABELO pula, pronto para
ataque. Loki ROLLS-se em uma enxurrada de vidro quebrado,

SUBSTITUINDO AO CABELO.

LOKI

BASTANTE! VOCÊ É, TODOS VOCÊ SÃO BENEATH

MIM! EU SOU UM DEUS, VOCÊ CRIA CRIATURA E

Eu não serei intimidado...

PULTOS LOKI PELAS PERNAS E O PEIXE CONTRA O PISO

REPEATAMENTE E FINALMENTE O JOGA AO LADO DO TERRENO,

LOKI DE BATTENAGEM.

HULK

DEUS PUNY.

LOKI WHIMPERS EM DOR.

EXT. TORRE ESCURA � DIA

A Viúva NEGRA sobe na máquina CMS. Selvig, caiu,
enfraquecido, olha para ela desesperadamente. A energia do Tesseract é
disparando em direção ao portal, ganhando força, com o aumento de
energia se movendo pelo céu.

Viúva NEGRA
Médico.

SELVIG
Cetro de Loki, a energia ... o
Tesseract não pode lutar. Você não pode
proteja contra si mesmo.

Viúva NEGRA
Não é sua culpa. Você não sabia
o que você estava fazendo.

SELVIG
Bem, na verdade acho que sim. eu construí
em segurança para cortar a fonte de energia.

Viúva NEGRA
Cetro de Loki.

SELVIG
Pode ser capaz de fechar o portal.
( Selvig olha para baixo. Ele vê um

GLEAM DO OURO )
E eu estou olhando diretamente para isso.

EXT. MANHATTAN � DIA

TRISTE passeios em cima da carruagem, SMACKING RIDERS SEVERAL com o
martelo. Enquanto Thor toma as rédeas, um CHITAURI LEVIATHAN cai
através de um prédio, derrubando-o para onde Cap está, lutando
fora dos SOLDIERS.
O HOMEM DE FERRO voa ao lado do CHITAURI LEVIATHAN e visa seu
LASER BOOSTER nele. Nada.

JARVIS
Senhor, perderemos energia antes de você cortar
através daquela concha.
O HOMEM DE FERRO voa à frente, de frente para o monstro que se aproxima.

HOMEM DE FERRO
JARVIS. Você já ouviu a história de
Jonah?

JARVIS
Eu não o consideraria um modelo.

O HOMEM DE FERRO VOA PARA O CHITAURI LEVIATHAN, DESAPARECENDO TODOS
ARSENAL NO TERNO. O CHITAURI LEVIATHAN abre a boca.
O HOMEM DE FERRO voa e rebate para o outro lado, fazendo o
CHITAURI LEVIATHAN colapso. HOMEM DE FERRO rola pela rua. O
o vento é nocauteado dele. Ele olha para cima com um esmagador
suspiro como uma pequena faixa de soldados de CHITAURI corre em sua direção,
segurando seus rifles.

EXT. EDIFÍCIO DE ROOFTOP � DIA

HAWKEYE vira fogo SUA ÚLTIMA SETA. Usando o arco como uma equipe,
ele bate alguns soldados de CHITAURI, antes de arrancar sua última flecha
fora do cadáver um CHITAURI SOLDIERS.
HAWKEYE aperta sua flecha, MERECE NO EDIFÍCIO E FOI
GRAPLING SETA para o lado do edifício. Caindo,
HAWKEYE encontra o MOMENTUM e balança-se em um prédio
e CANNONBALLS em.

EXT. MANHATTAN � DIA

O HULK segura CHITAURI SOLDIERS pelo rosto e os BATA
baixo. Mais continuam chegando. HULK olha para cima. CAÇAS DE RIDERS HOVER
SOBRE ELE. Então ... eles começam a disparar BRASTAS ENERGÉTICAS. TOKES DE CHUVA

ELES GOSTAM QUE ESTÁ CORRENDO POR UMA CHUVA DE LUZ. BLOQUEANDO O ESTRELO

DE BASTANTES DE AUMENTO, COMO BALANÇAR EM ABELHAS.

EXT. DECK DO HELICARRIER � DIA

Um piloto solitário senta em seu cockpit, ouvindo.

CONSELHO MUNDIAL DE SEGURANÇA # 2
DIRETOR FURY não está mais no comando.
Ordem de substituição, 7 ALPHA 11.

7 ALPHA 11 PILOTO
7 ALPHA 11, confirmado. Prepare-se para
decolagem.
Ele acende o motor.

INT. PONTE HELICARRIER � DIA

De volta à ponte, a agente Hill vê em seu SCREEN 7 ALPHA 11
se preparando para sair.

AGENTE MARIA HILL
Senhor, temos um pássaro em movimento! Alguém
no convés, temos um pássaro desonesto! Nós
precisa desligá-lo! Repita! Decolar
não está autorizado!

EXT. DECK DO HELICARRIER � DIA


NICK FURY FUNCIONA AO DECK, MANTENDO UM RPG AERTRÔNICO PORRA
7). Ele pega AIM e FIRES, batendo no teto do jato. O
jet SKIDS OFF em direção à borda. PILOTO DESARMADO.
De repente, outros 7 ALPHA 11 JET FLIES desligados. Fúria fica lá,
sabendo que ele não pode fazer nada sobre isso.

NICK FURY
Stark, você está me ouvindo? Nós temos um
míssil foi direto para a cidade.

HOMEM DE FERRO ( V.O. )
Quão mais?

NICK FURY
Três minutos, na melhor das hipóteses. Fique abaixado e
acabe com o míssil.

EXT. MANHATTAN � DIA

O HOMEM DE FERRO luta contra tantos SOLDADOS DE CHITAURI quanto ele sustenta.

HOMEM DE FERRO
Jarvis, coloque tudo o que temos no
propulsores!

JARVIS
Eu acabei de fazer.
O HOMEM DE FERRO sai das ruas e voa para o céu.

EXT. SKY � DIA

7 ALPHA 11 chega fora da cidade. Ele vira o interruptor para
pressione o botão. Ele pressiona. O MÍSSEIS ESTÁ VOANDO PARA

MANHATTAN.

7 ALPHA 11
O destino é em 2 minutos, 30 segundos
marca.

EXT. MANHATTAN � DIA

CAPITÃO AMÉRICA E TRÁS MTD, LADO A LADO. Cap e Thor, ambos
jogue suas armas respeitadas. Thor pega MJ � LNIR, mas como Cap
vira, uma explosão de energia o derruba com força. Thor corre até
um carro quebrado, balança o martelo e vira o carro repetidamente
de lado, esmagando alguns soldados CHITAURI.
Cap tenta se levantar. Thor o ajuda a se levantar. Cap aumenta
seu SHIELD de volta.

THOR
Você está pronto para outra luta?

CAPITÃO AMÉRICA
O que? Você está ficando com sono?

EXT. TORRE ESCURA � DIA

Selvig, de volta ao modo cientista, ataca seu laptop.
Henods. A Viúva NEGRA agarra o cetro de Loki, lentamente se divide no
FORÇA CAMPO, quase tocando o Tesseract.

Viúva NEGRA
Eu posso fechá-lo! Alguém pode me ouvir? eu
pode desligar o portal!

EXT. MANHATTAN � DIA


CAPITÃO AMÉRICA
Faça!

HOMEM DE FERRO ( V.O. )
Não espera!

CAPITÃO AMÉRICA
Stark, essas coisas ainda estão chegando!

DENTRO DO TERNO

TONY
Eu tenho uma bomba nuclear chegando, vai explodir
em menos de um minuto. E eu sei apenas
onde colocá-lo.

EXT. SKY � DIA

O HOMEM DE FERRO alcança, agora chega ao míssil por trás. O
velocidade do míssil. O HOMEM DE FERRO agarra por trás, agarrando-o
firmemente.
Com um grande esforço, ele arranca o foguete de seu curso.
Dirigindo por trás, ele acelera rapidamente, voando direto
no céu, em direção ao portal.

DENTRO DO TERNO

CAPITÃO AMÉRICA ( V.O. )
Stark, você sabe que é uma viagem de ida?

TONY

( PARA JARVIS )
Guarde o resto para retornar, J.

JARVIS
Senhor. Devo ligar para a senhorita Potts?

HOMEM DE FERRO
Você também pode.

INT. JATO ESCURO � DIA

PEPPER, juntamente com sua equipe, assiste a TV, horrorizada, o
destruição em NOVA IORQUE. Em cima da mesa, seu celular está VIBRATING,
com a foto de Tony.

INT. PONTE HELICARRIER � DIA

De volta à ponte, todo agente prende a respiração como
eles também assistem o IRON MAN voar para o portal.

EXT. SKY � DIA

O HOMEM DE FERRO sobe cada vez mais sobre a cidade, ganhando velocidade,
de repente se lança através do portal. Comunicações morrem.
O traje começa a congelar. Tony parece horrorizado.

INT. PONTE HELICARRIER � DIA

Todo agente CHEERS. A fúria sorri. Ele tenta se comunicar
com Tony. NADA.

EXT. ESPAÇO

Então vemos o horror de Tony. UMA ARMADA. O céu preto está cheio
com o que deve ser noventa navios em um vago aglomerado. A maioria deles
fique quieto no ar. Alguns se movem nadando.
O HOMEM DE FERRO solta o míssil. Assobia para dentro do
a escuridão como o IRON MAN IDLY cai de volta na abertura do portal.
O míssil atinge o NAVIO PRINCIPAL. Os principais impactos de navio,
fazendo com que todo o ARMADA exploda em uma supernova, criando um
espetacular exibição celestial.

EXT. MANHATTAN � DIA

De repente, todos os CHITAURI SOLDIERS e CHITAURI LEVIATHANS
Aperte e comece a AGITAR, depois pare. Todos eles caem. O
Os vingadores olham para o seu CONSULTOR, não tenho certeza se ele conseguirá
através.

EXT. TORRE ESCURA � DIA

Ainda segurando o cetro na mão, o BLACK WIDOW muda,
esperando.

Viúva NEGRA
Vamos, Stark...

EXT. MANHATTAN � DIA

Thor e Cap veem a supernova vindo em sua direção. Thor assente a
Boné.

CAPITÃO AMÉRICA
( para SEGURA NEGRA )
Feche.

EXT. TORRE ESCURA � DIA

Sem hesitar, o BLACK WIDOW puxa o cetro para fora, o
O TESSERACT desliga seu feixe de energia. O PORTAL FECHA RAPIDAMENTE.
UMA PEQUENA FIGURA é lançada para trás na abertura agora fechada
portal. HOMEM DE FERRO. Desmoronando na terra.

EXT. MANHATTAN � DIA


CAPITÃO AMÉRICA

( SMILING )
Filho da arma!
À prova do homem do ferro: ele continua caindo. E caindo. E caindo.

EXT. MANHATTAN � DIA


THOR
Ele não está diminuindo a velocidade.
Thor balança Mj � lnir ao redor. Assim como Thor voa, THE HULK

SNAGS IRON MAN FORA DO AR, AMBOS BATIDOS E DESLIZANDO UM

EDIFÍCIO.

EXT. RUA DE PONTE � DIA

HULK joga o IRON MAN fora dele. Thor e Cap correram até ele. Thor
RIPS do capacete de Tony. Ele parece estar morto. Eles ficam por aí
não tenho certeza. Então... O casco grita de pelúcia. OS COMEÇOS DO RUÍDO

TONY ACORDADO.

TONY
Que diabos? O que aconteceu?
Por favor, diga-me que ninguém me beijou?

CAPITÃO AMÉRICA

( UM BEAT )
Nós ganhamos.

TONY
Bem. Ei. Bem. Bom trabalho, pessoal.
Vamos apenas não entrar amanhã. Vamos
apenas tire um dia. Você já tentou
shawarma? Há uma junta shawarma
cerca de dois quarteirões daqui. eu não
saiba o que é, mas eu quero tentar.

THOR
( olhando para Stark Tower )
Ainda não terminamos.
Uma batida.

TONY
E então shawarma depois.

INT. ALMOFADA ESTARU � DIA

Loki rasteja para a escada, parecendo um pedaço de pano de merda
boneca. Ele respira fundo, sente que alguém está atrás dele. Ele
vira-se para encontrar os vendedores que o atacam, irritados.

LOKI
Se é tudo a mesma coisa para você. Eu vou ter
aquela bebida.

O casco ronca para ele.

SEMANAS MAIS TARDE.

INT. SALA ANALÍTICA ESCURA � DIA

Na montagem de notícias na TV sobre THE AVENGERS, vemos vários relatórios de
o que aconteceu. Algumas pessoas concordam que os vingadores fizeram o bem,
protegendo a cidade. Outros acreditam que foi a causa deles.

HOMEM VELHO ( STAN LEE )
Super-heróis? Em Nova York? Me dê um
quebrar!

SENADOR BOYNTON
Esses chamados heróis devem ser mantidos
responsável pela destruição feita para
a cidade. Essa foi a luta deles. Onde
eles estão agora?

VELA
O que? Que isso era de alguma forma deles
falha? O capitão América salvou minha vida.
Onde quer que ele esteja, onde quer que esteja
sou, eu só quero dizer obrigado.

EXT. PARQUE CENTRAL � DIA

Os Vingadores levam Thor e Loki, que são algemados e amordaçados,
para uma área bloqueada. Thor aperta a mão de sua equipe e dá
Selvig um abraço. Tony abre o caso do Tesseract.
Banner pega e coloca dentro de um tubo de vidro, mantido por
Thor. Thor dá a Loki o outro lado, que relutantemente o leva.
Os asgardianos pulam no feixe de energia. FOI.
Então, um por um, o grupo se fragmenta, passeando
direções diferentes. Banner entra com Tony em seu
carro esportivo. Steve cavalga em sua Harley. Natasha e Clint
volte para carros SHIELD. Todos eles se separam. Por enquanto.

INT. SALA ANALÍTICA ESCURA � DIA

A fúria está enfrentando mais uma vez membros do CONSELHO MUNDIAL DE SEGURANÇA.

CONSELHO MUNDIAL DE SEGURANÇA # 3
Onde estão os Vingadores?

NICK FURY
No momento, não estou rastreando a
paradeiro. Eu diria que eles ganharam um
licença.

CONSELHO MUNDIAL DE SEGURANÇA # 2
E o Tesseract?

NICK FURY
O Tesseract é onde ele pertence: fora
do nosso alcance.

CONSELHO MUNDIAL DE SEGURANÇA # 1
Essa não é sua decisão.

NICK FURY
Eu não consegui. Eu simplesmente não discuti
com o deus que fez.

CONSELHO MUNDIAL DE SEGURANÇA # 1
Então você o deixa pegar e a guerra
criminoso, Loki, que deveria responder
por seus crimes?

NICK FURY
Acho que ele será.

CONSELHO MUNDIAL DE SEGURANÇA # 1
Eu não acho que você entende o que
você começou. Deixando os Vingadores
solto neste mundo. Eles são perigosos.

NICK FURY
Eles certamente são. E o mundo inteiro
sabe disso. Todo mundo sabe disso.

CONSELHO MUNDIAL DE SEGURANÇA # 1
Esse era o objetivo de tudo isso? A
declaração?

NICK FURY
Uma promessa.

A fúria sai em direção à ponte.

INT. PONTE HELICARRIER � DIA

Fury e Agent Hill andam juntos, em direção à janela olhando para fora
para o mundo.

AGENTE MARIA HILL
Senhor, como isso funciona agora? Eles se foram
seus caminhos separados, alguns bonitos
extremamente longe. Entramos em uma situação
assim novamente, o que acontece então?

NICK FURY
Eles vão voltar.

AGENTE MARIA HILL
Você realmente tem certeza disso?

NICK FURY
Eu sou.

AGENTE MARIA HILL
Por quê?

NICK FURY
Porque vamos precisar deles.

O agente Hill se vira. Fury olha para fora, sorrindo.

INT. ALMOFADA ESTARU � DIA

TONY E PEPPER ENVIAM UM NOVO PROJETO PARA A TORRE ESCURA. CAMERA
PULLS OUT, mostrando as letras de "STARK TOWER" foram sopradas
longe, e tudo o que resta é um gigante A.

O FIM

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error);