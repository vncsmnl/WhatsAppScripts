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
RETORNO DO JEDI

por Lawrence Kasdan & George Lucas

Do romance por George Lucas

Terceiro projeto

Propriedade da Lucasfilm Ltd.

Data de conclusão 1 de dezembro de 1981

1 ESPAÇO

Os céus sem limites servem de pano de fundo para o TÍTULO PRINCIPAL, seguidos
por um ROLL-UP, que rasteja para o infinito.

Episódio VI RETORNO DO JEDI

Luke Skywalker voltou ao seu planeta natal, Tatooine, em um
tentar resgatar seu amigo Han Solo das garras da vilã
gangster Jabba the Hutt. Pouco Luke sabe que o IMPÉRIO GALÁTICO
secretamente começou a construção em uma nova estação espacial blindada
mais poderoso que a primeira temida Estrela da Morte. Quando concluído, este
arma definitiva significará certa desgraça para a pequena faixa de rebeldes
lutando para restaurar a liberdade da galáxia...

PAN DOWN para revelar uma monstruosa Estrela da Morte semi-completa, sua enorme
superestrutura se afastando da seção concluída como os braços de
um polvo gigante. Além, em contraste benevolente, flutua o pequeno,
lua verde do ENDOR.

Um Destruidor Imperial de Estrelas se move acima em direção à enorme blindada
estação espacial, seguida por dois caças TIE com zíper. Um pequeno imperial
foguetes de transporte da baía principal do navio e agita em direção ao
Estrela da Morte.

2 FECHAS IMPERIAIS INT - COCKPIT
O capitão do ônibus faz contato com a Estrela da Morte.

CAPITÃO DE SHUTTLE
Estação de comando, aqui é ST 321. Code Clearance Blue. Estamos começando
nossa abordagem. Desative o escudo de segurança.

CONTROLADOR DE ESTRELA DE MORTE ( VO filtrado )
O escudo do defletor de segurança será desativado quando tivermos
confirmação da sua transmissão de código. Espera... Você é claro para
prossiga.

CAPITÃO DE SHUTTLE
Estamos começando nossa abordagem.

3 INT DEATH STAR - SALA DE CONTROLE

Os operadores se movem entre os painéis de controle. Um OPERADOR DE ESCUDO atinge
muda ao lado de uma tela grande, na qual há uma exibição da Morte
Estrela, a lua Endor e uma teia brilhante delineando o invisível
escudo defletor.

Um oficial de controle corre para o operador do escudo.

OFICIAL
Informe ao comandante que o ônibus de Lord Vader chegou.

OPERADOR
Sim senhor.

O oficial de controle se move para um porto de visão e observa como o Imperial
o ônibus pousa na enorme baía de ancoragem. Um esquadrão do Imperial
stormtroopers se move para a formação antes da nave.

4 INT DEATH STAR - PRINCIPAL DOCKING BAY

O COMANDANTE DE ESTRELA DA MORTE, MOFF JERJERROD, um tecnocrata alto e confiante,
caminha pelas tropas reunidas até a base da rampa de transporte.
As tropas chamam a atenção; muitos estão preocupados com a nova chegada.
Mas o comandante da Estrela da Morte permanece arrogantemente alto.

A escotilha de saída do ônibus abre com um WHOOSH, revelando apenas
escuridão. Em seguida, PASSO A PASSO E RESPIRAÇÃO MECÂNICA. Disso
vazio preto aparece DARTH VADER, SENHOR DO SITH. Vader olha por cima do
montar enquanto ele caminha pela rampa.

JERJERROD
Lorde Vader, este é um prazer inesperado. Estamos honrados por sua
presença.

VADER
Você pode dispensar as gentilezas, comandante. Estou aqui para te colocar
de volta
horário.

O comandante vira cinza e começa a tremer.

JERJERROD
Garanto-lhe, lorde Vader, que meus homens estão trabalhando o mais rápido possível.

VADER
Talvez eu possa encontrar novas maneiras de motivá-los.

JERJERROD
Eu lhe digo, esta estação estará operacional conforme o planejado.

VADER
O Imperador não compartilha sua avaliação otimista da situação.

JERJERROD
Mas ele pergunta o impossível. Eu preciso de mais homens.

VADER
Então talvez você possa contar a ele quando ele chegar.

JERJERROD ( aghast )
O imperador está vindo para cá?

VADER
Está correto, comandante. E ele está mais descontente com o seu
aparente falta de progresso.

JERJERROD
Dobraremos nossos esforços.

VADER
Espero que sim, comandante, por sua causa. O imperador não é tão perdoador quanto
Eu sou.

5 ESTRADA EXTIDA AO PALÁCIO DE JABBA - TATOOINE

Uma estrada solitária e varrida pelo vento serpenteia através do desolado Tatooine
terreno. Ouvimos um apito familiar e uma resposta distinta antes
avistando ARTOO-DETOO e SEE-THREEPIO, avançando
a estrada em direção ao palácio sinistro de Jabba, o Hutt.

THREEPIO
Claro que estou preocupada. E você deveria estar também. Lando Calrissian e
o pobre Chewbacca nunca voltou deste lugar horrível.

Artoo assobia timidamente.

THREEPIO
Não tenha tanta certeza. Se eu te dissesse metade das coisas que ouvi sobre isso
Jabba, o Hutt, você provavelmente entraria em curto-circuito.

Os dois dróides se aproximam com medo do portão maciço do palácio.

THREEPIO
Artoo, você tem certeza de que este é o lugar certo? É melhor eu bater, suponho.

6 PALÁCIO EXT JABBA - GATE

Threepio procura algum tipo de dispositivo de sinalização e, em seguida, timidamente
bate na porta de ferro.

THREEPIO ( instantaneamente )
Parece não haver ninguém lá. Vamos voltar e contar ao Mestre
Lucas.

Uma pequena escotilha no meio da porta se abre e uma fiação mecânica
braço, com um grande globo ocular eletrônico no final, sai e inspeciona
os dois dróides.

VOZ ESTRANHA
Tee chuta hhat yudd!

THREEPIO
Meu Deus!

Threepio aponta para Artoo, depois para si mesmo.

THREEPIO
Artoo Detoowha bo Seethreepiowha ey toota mischka Jabba du Hutt.

O olho olha de um robô para o outro, há uma risada e depois o
olho volta para a porta. A escotilha bate fechada. Artoo apita seu
preocupação.

THREEPIO
Eu não acho que eles vão nos deixar entrar, Artoo. É melhor irmos.

Artoo emite um sinal sonoro quando Threepio se vira para sair. De repente o
porta maciça começa a subir com um horrível SCREECH metálico. O
robôs voltam e enfrentam uma infinidade de cavidade negra. Os dróides olham para
um ao outro, com medo de entrar.

Artoo começa a avançar na escuridão. Threepio corre atrás de seu atarracado
companheiro. A porta abaixa ruidosamente atrás deles.

THREEPIO
Artoo, espera. Oh céus! Artoo. Artoo, eu realmente não acho que deveríamos
corra para tudo isso.

Artoo continua pelo corredor, com Threepio a seguir.

THREEPIO
Ah, Artoo!  Artoo, espere por mim!

7 PALÁCIO DE INT JABBA - HALLWAY

A porta bate com um estrondo alto que ecoa por todo o escuro
passagem. Os robôs assustados são recebidos por dois gigantescos e verdes GAMORREAN
GUARDA, que caem atrás deles. Threepio olha rapidamente de volta para o
dois brutos pesados, depois de volta para Artoo. Um guarda grunhe uma ordem.
Artoo emite um sinal sonoro.

THREEPIO
Apenas entregue a mensagem do mestre Luke e tire-nos daqui. Oh meu!
Oh! Ah não.

Caminhando em direção a eles para fora da escuridão está BIB FORTUNA, um ser humano
alienígena com longos tentáculos saindo de seu crânio.

BIB
Die Wanna Wanga!

THREEPIO
Oh meu! Die Wanna Wauaga. Nós - trazemos uma mensagem para o seu mestre,
Jabba, o Hutt.

Artoo solta uma série de bipes rápidos.

THREEPIO ( cont )
...e um presente.
( pensa um momento, depois para Artoo )
Presente, que presente?

Bib balança a cabeça negativamente.

BIB
Nee Jabba no badda. Me chaade su goodie.

Bib estende a mão em direção a Artoo e o pequeno dróide recua um pouco,
deixando escapar uma série de gritos de protesto. Threepio vira para o
alienígena de aparência estranha.

THREEPIO
Ele diz que nossas instruções são dar apenas ao próprio Jabba.

Bib pensa nisso por um momento.

THREEPIO
Sinto muito. Receio que ele seja tão teimoso sobre esse tipo
das coisas.

Gestos de babador para os dróides seguirem.

BIB
Nudd Chaa.

Os dróides seguem o alienígena alto e tentáculo na escuridão, arrastado
pelos dois guardas.

THREEPIO
Artoo, tenho um mau pressentimento sobre isso.

QUARTO DE TRONE DE 8 INT JABBA

A sala do trono está cheia das criaturas mais vis e grotescas
já concebido no universo. Artoo e Threepio parecem muito pequenos
eles param na porta da câmara pouco iluminada. Eixos de luz
ilumine parcialmente os cortesãos bêbados enquanto Bib Fortuna atravessa o
espaço para a plataforma sobre a qual repousa o líder deste nauseante
multidão: JABBA THE HUTT. O monarca do submundo galáctico é um
blob repulsivo de gordura inchada com um sorriso maníaco. Acorrentado ao
criatura horrível é a bela dançarina alienígena chamada OOLA. At
o pé do estrado senta-se uma criatura desagradável como um pássaro, SALÁCIA
CRUMB. Bib sussurra algo no ouvido degenerado. Jabba
ri horrivelmente, dos dois dróides aterrorizados diante dele. Arcos de tremo
educadamente.

THREEPIO
Bom Dia.

JABBA
Bo Shuda!

Os robôs saltam para a frente para ficar diante do repulsivo, de pele solta
vilão.

THREEPIO
A mensagem, Artoo, a mensagem.

Artoo assobia e um feixe de luz projeta de sua cabeça abobadada,
criando um holograma de LUKE no chão. A imagem cresce para mais de dez
pés de altura, e os jovens Jedi se erguem sobre os bandidos espaciais.

LUKE
Saudações, Exaltado. Permita-me me apresentar. Eu sou Luke
Skywalker, Jedi Knight e amigo do capitão Solo. Eu sei que você é
Jabba poderoso e poderoso, e que sua raiva com Solo deve ser igualmente
poderoso. Eu procuro uma audiência com Sua Grandeza para barganhar por Solo
vida.
A multidão de ( Jabba ri )
Com sua sabedoria, tenho certeza de que podemos elaborar um acordo que
será mutuamente benéfico e nos permitirá evitar qualquer desagradável
confronto. Como sinal da minha boa vontade, apresento a você um presente:
esses dois dróides.

Threepio fica surpreso com este anúncio.

THREEPIO
O que ele disse?

LUKE ( cont )
... Ambos são trabalhadores e o servirão bem.

THREEPIO
Isso não pode ser! Artoo, você está jogando a mensagem errada.

O holograma de Luke desaparece.

Jabba ri enquanto Bib fala com ele em Huttese.

JABBA ( em Huttese legendado )
Não haverá barganha.

THREEPIO
Estamos condenados.

JABBA ( em Huttese legendado )
Não vou desistir da minha decoração favorita. Eu gosto do capitão Solo onde ele
é.

Jabba ri horrivelmente e olha para uma alcova ao lado do trono.
Pendurado alto, contra a parede, exatamente como o vimos pela última vez, é um
HAN SOLO carbonizado.

THREEPIO
Artoo, olhe! Capitão Solo. E ele ainda está congelado em carbonita.

9 CORREDOR DE DUNGEON INT

Um dos guardas gamorreanos de Jabba marcha Artoo e Threepio por um dank,
passagem sombria alinhada com células de retenção. Os gritos de indizível
criaturas ricocheteiam nas paredes frias de pedra. Ocasionalmente, um braço repulsivo
ou tentáculo agarra através das barras nos dróides infelizes. Bips de artoo
lamentavelmente.

THREEPIO
O que poderia ter acontecido com o mestre Luke. Foi algo que eu fiz?
Ele nunca expressou nenhuma infelicidade com o meu trabalho. Oh! Oh! Segure! Ohh!

Um grande tentáculo envolve o pescoço de Threepio. Ele consegue quebrar
livre, e eles passam para uma porta no final do corredor.

SALA DE 10 INT BOILER

A porta se abre, revelando uma sala cheia de vapor e barulhenta
maquinaria. O guarda os leva para a sala das caldeiras, onde estão
encontrado por um robô humano alto e fino chamado EV-9D9. Atrás da lata do robô
ser visto um rack de tortura puxando as pernas de um trabalho de bebê gritando
dróide. Um segundo dróide de potência está de cabeça para baixo.  Como fumar ferros de marca
são pressionados em seus pés, o robô atarracado deixa escapar um agonizado
grito eletrônico. Artoo e Threepio se encolhem enquanto o guarda grunhe para EV-
9D9.

NINEDENINA
Ah bom. Novas aquisições. Você é um dróide de protocolo, não é?

THREEPIO
Eu sou See-Threepio, humano-cy...

NINEDENINA
Sim ou não serve.

THREEPIO
Oh. Bem, sim.

NINEDENINA
Quantos idiomas você fala?

THREEPIO
Sou fluente em mais de seis milhões de formas de comunicação e posso
prontamente...

NINEDENINA
Esplêndido! Ficamos sem intérprete desde que nosso mestre ficou
zangado com o nosso último protocolo dróide e o desintegrou.

THREEPIO
Desintegrado?

NINEDENINA ( a um guarda gamorreano )
Guarda! Este dróide de protocolo pode ser útil. Encaixe-o com uma restrição
tranca e leve-o de volta à câmara principal de audiência de Sua Excelência.

O guarda empurra Threepio em direção à porta.

THREEPIO ( desaparecendo )
Artoo, não me deixe! Ohhh!

Artoo solta um grito lamentoso quando a porta se fecha. Então ele apita
com raiva.

NINEDENINA
Você é um pequenino mal-humorado, mas logo aprenderá um pouco de respeito. eu tenho
precisa de você na barcaça de vela do mestre. E acho que você vai se encaixar
bem.

O pobre dróide de trabalho ao fundo deixa outro torturado
grito eletrônico.

11 QUARTO DE TRONE DE JABBA

A corte de Jabba, o Hutt, está no meio de um bêbado e estridente
festa. Monstros desleixados e fedorentos aplaudem e fazem barulhos rudes como Oola e um
dançarina gorda se apresenta em frente ao trono de Jabba.

Jabba se inclina para os dançarinos e com um brilho lascivo nos olhos acena
Oola para vir e sentar com ele. Ela para de dançar e recua,
balançando a cabeça. Jabba fica com raiva e aponta para um lugar ao lado dele.

JABBA
Da Eitha!

O adorável alienígena balança a cabeça novamente e grita.

OOLA
Na Chuba negatorie Na! Na! Natoota...

Jabba está furiosa e a puxa em sua direção, puxando a corrente.

JABBA
Boscka!

Ele aperta um botão e, antes que o dançarino possa fugir, um alçapão no
as molas do chão se abrem e a engolem. Quando a porta se fecha, um
rosnado abafado é seguido por um grito hediondo. Jabba e seu monstruoso
amigos riem histericamente e vários foliões se apressam para vê-la
destino através de uma grade.

Threepio se encolhe e olha melancolicamente para a forma de carbonita de Han
Solo, mas é imediatamente distraído por um tiro na tela.� An
silêncio antinatural varre a reunião barulhenta. No outro lado do
sala, a queda dos debochers se afasta para permitir a aproximação de dois
guardas seguidos por BOUSHH, um caçador de recompensas estranhamente encoberto, liderando sua
cativo, copiloto de Han Solo, CHEWBACCA THE WOOKIEE.

Bib toma seu lugar ao lado de seu mestre nojento e sussurra
o ouvido, apontando para Chewbacca e o caçador de recompensas. Jabba ouve
intensamente, então o caçador de recompensas se curva diante do gangster e fala um
saudação em uma língua estranha processada eletronicamente ( Ubese ).

BOUSHH ( em Ubese legendado )
Eu vim para a recompensa neste Wookiee.

THREEPIO
Ah não! Chewbacca!

JABBA ( em Huttese legendado )
Finalmente temos o poderoso Chewbacca.

Jabba solta uma risada alta, longa e cheia de sangue e se vira para
Threepio, acenando para ele mais perto. O dróide relutante obedece.

THREEPIO
Sim, estou aqui, Sua Adoração. Sim!

Jabba continua falando, como Threepio traduz nervosamente. Boushh
ouve, estudando as criaturas perigosas ao redor da sala. Ele percebe
BOBA FETT parado perto da porta.

THREEPIO
Oh. O ilustre Jabba oferece as boas-vindas e terá prazer em pagar a você
recompensa de vinte e cinco mil.

BOUSHH ( em Ubese legendado )
Eu quero cinquenta mil. Não menos.

Jabba imediatamente fica furioso, derrubando o dróide de ouro do
trono elevado em uma pilha barulhenta no chão. Boushh ajusta seu
arma como Jabba delira em Huttese e Threepio luta de volta para o
trono. O dróide desgrenhado tenta se recompor.

THREEPIO
Ah, mas o que eu disse?
( para Boushh )
O poderoso Jabba pergunta por que ele deve pagar cinquenta mil.

O caçador de recompensas segura uma pequena bola de prata na mão. Threepio
olha para ele, depois olha para Jabba e depois volta para o caçador de recompensas. O
dróide está muito nervoso e Jabba está ficando muito impaciente.

THREEPIO
Porque ele está segurando um detonador térmico.

Os guardas recuam instantaneamente, assim como a maioria dos outros monstros no
sala. Jabba olha para a bola de prata, que começa a brilhar no
mão de caçador de recompensas. A sala caiu em um silêncio tenso. Jabba
olha para o caçador de recompensas malévolamente até que um sorriso malicioso rasteje
sua boca vasta e ele começa a rir.

JABBA ( em Huttese legendado )
Esse caçador de recompensas é meu tipo de escória. Destemido e inventivo.

Jabba continua.

THREEPIO
Jabba oferece a soma de trinta e cinco. E eu sugiro que você aceite.

Bib e os outros monstros estudam o caçador de recompensas e esperam por sua
reação. Boushh lança um interruptor no detonador térmico e ele continua
morto.

BOUSHH
Zeebuss.

THREEPIO
Ele concorda!

A multidão estridente de monstros entra em erupção em uma sinfonia de aplausos e
aplausos quando a festa volta ao seu tom barulhento. Chewbacca
rosna. Quando ele é levado, encontramos LANDO CALRISSIAN, disfarçado de
guarda de esquife em uma máscara facial parcial. A banda começa e dança
as meninas tomam o centro do chão, para as vaias do alto
criaturas apreciativas.

Boushh se inclina contra uma coluna com o pistoleiro fresco e examina o
cena, seu olhar parando apenas quando se conecta com um brilho do outro lado
o quarto. Boba Fett está olhando para ele. Boush muda um pouco, embalando
sua arma com amor. Boba Fett muda com arrogância igualmente ameaçadora.

CORREDOR DE 12 INT DUNGEON E CÉLULA

Guardas gamorreanos levam Chewie pelo mesmo corredor que vimos antes. Quando
um tentáculo chega ao Wookiee, os ferozes ecos ROAR de Chewie
contra as paredes e o tentáculo volta para sua cela aterrorizado.
São necessários todos os guardas para lançar Chewie aproximadamente em uma cela, batendo
a porta atrás dele. Chewie deixa escapar um uivo patético e bate no
porta de ferro.

13 PALÁCIO EXT JABBA

O palácio está sentado à luz do pôr do sol duplo. Na estrada em
frente, uma grande criatura parecida com um sapo sacode a língua para um deserto
roedor e arrotos de satisfação.

QUARTO DE TRONE DE 14 INT JABBA - NOITE

Silêncio. A sala está deserta, apenas os terríveis detritos do alienígena
celebração dando testemunho mudo da atividade aqui antes. Vários
criaturas bêbadas ficam inconscientes ao redor da sala, roncando alto.

Uma figura sombria se move furtivamente entre as colunas no perímetro de
a sala e é revelado ser Boushh, o caçador de recompensas. Ele escolhe o seu
bem com cuidado através do ronco, monstros bêbados.

Han Solo, o pirata espacial congelado, está no centro das atenções na parede
caso de caixão suspenso por um campo de força. O caçador de recompensas
desativa o campo de força lançando uma chave de controle para um lado de
o caixão. O estojo pesado abaixa lentamente para o chão da alcova.

Boushh vai até o caso, estudando Han, e depois vira para o
controles na lateral do caixão. Ele ativa uma série de interruptores
e, depois de uma última olhada hesitante em Han, desliza a descarbonização
alavanca. O caso começa a emitir um som como a concha dura que cobre o
contornos do rosto de Han começam a derreter. O caçador de recompensas assiste
como o corpo de Han é libertado de seu casaco metálico e de seus antebraços e mãos,
anteriormente criado em protesto reflexivo, cai lentamente para o lado dele. Dele
os músculos do rosto relaxam com sua máscara de horror. Ele parece bastante morto.

O capacete feio de Boushh se inclina para perto do rosto de Han ouvindo a respiração
da vida. Nada. Ele espera. Os olhos de Han se abrem com um começo e ele
começa a tossir. O caçador de recompensas firma o recém-nascido impressionante.

BOUSHH
Apenas relaxe por um momento. Você está livre da carbonita.

Han toca o rosto com a mão e geme.

BOUSHH
Shhh. Você tem doença de hibernação.

HAN
Eu não consigo ver.

BOUSHH
Sua visão retornará a tempo.

HAN
Onde estou?

BOUSHH
Palácio de Jabba.

HAN
Quem é Você?

O caçador de recompensas alcança e levanta o capacete da cabeça,
revelando o lindo rosto de PRINCESS LEIA.

LEIA
Alguém que te ama.

HAN
Leia!

LEIA
Eu tenho que tirar você daqui.

Como Leia ajuda seu amante enfraquecido a se levantar, o relativo silêncio é
perfurado por um cacKLE HUTTESE obsceno do outro lado da alcova.

HAN
O que é isso? Eu conheço essa risada.

A cortina do outro lado da alcova se abre, revelando Jabba o
Hutt, cercado por Bib e outros alienígenas. Ele ri de novo e seu
companheiros grosseiros se juntam a uma cacofonia de alegria alienígena.

HAN
Ei, Jabba. Olha, Jabba, eu estava a caminho de pagar de volta, mas eu
ficou um pouco desviado. Não é minha culpa.

Jabba ri.

JABBA ( em Huttese legendado )
É tarde demais para isso, Solo. Você pode ter sido um bom contrabandista, mas
agora você é a forragem Bantha.

HAN
Veja...

JABBA ( cont Huttese legendado )
Leve-o embora!

Os guardas agarram Han e começam a levá-lo embora.

HAN
Jabba... Eu pago o triplo! Você está jogando fora uma fortuna aqui.
Não seja tolo!

Han é arrastado, enquanto Lando avança rapidamente e tenta liderar
Leia longe.

JABBA ( em Huttese legendado )
Traga-a para mim.

Jabba ri como Lando e um segundo guarda arrastam os jovens bonitos
princesa em sua direção. Threepio espreita por trás de um monstro e rapidamente
se afasta com nojo.

LEIA
Temos amigos poderosos. Você vai se arrepender disso...

JABBA ( em Huttese legendado )
Tenho certeza.

Inexoravelmente, seu rosto adorável se move a alguns centímetros do feio de Jabba
blob de uma cabeça, e Leia se afasta com nojo.

LEIA
Ugh!

THREEPIO
Ohhh, eu não suporto assistir.

CÉLULA DE 15 ÍNDICE

A porta de metal pesado da masmorra geme e se abre lentamente. A
guarda joga o capitão estrela cego na cela escura e a porta
bate atrás dele, deixando apenas uma fina lasca de luz de uma rachadura
na porta. Han está tentando se recompor quando de repente um rosnado é
ouvido do outro lado da cela. Ele pula de volta contra a cela
porta e ouve.

HAN
Chewie? Chewie, é você?

A figura sombria solta um grito louco e corre em direção a Han, levantando
ele do chão com um grande abraço que os carrega para a luz,
revelando Chewie.

HAN
Ah! Mastigue - Chewie!

O gigante Wookiee late com alegria.

HAN
Esperar. Não vejo, amigo. O que está acontecendo?

Chewie late uma faixa azul animada.

HAN
Lucas? Luke é louco. Ele não pode nem se cuidar, muito menos
resgatar alguém.

Chewie late uma resposta.

HAN
UMA...Jedi Knight? Eu - estou fora disso por um tempo, todo mundo fica
ilusões de grandeza.

Chewie rosna insistentemente. Ele segura Han no peito e acaricia a cabeça.

HAN
Estou bem, amigo. Estou bem.

16 PRINCIPAL GATE E HALL - PALÁCIO DE JABBA

Noisily, o portão principal se eleva para inundar a escuridão com um brilho ofuscante
e revele a figura em silhueta de LUKE SKYWALKER. Ele está vestido em um
manto semelhante ao de Ben e não usa pistola nem espada a laser. Lucas
caminha propositadamente para o corredor. Dois guardas gigantes se movem para bloquear
O caminho de Luke. Luke para.

Luke levanta a mão e aponta para os guardas intrigados, que imediatamente
abaixe as lanças e recue. O jovem Jedi abaixa a mão e
segue pelo corredor.

Bib Fortuna aparece fora da escuridão. Ele fala com Luke enquanto eles
se aproximam, mas Luke não para e Bib deve reverter sua
direção e apresse-se ao lado do jovem Jedi para continuar o
conversa. Vários outros guardas caem atrás deles na escuridão.

LUKE
Eu devo falar com Jabba.

Bib responde em Huttese, balançando a cabeça em negação. Luke para e
olha para Bib; ele levanta a mão um pouco.

LUKE
Você vai me levar para Jabba agora!

Bib se vira em resposta hipnótica ao comando de Luke, e Luke o segue
na escuridão.

LUKE
Você serve bem ao seu mestre.

Bib responde.

LUKE
E você será recompensado.

17 QUARTO DE TRONE DE JABBA

Jabba está dormindo em seu trono, com Leia deitada na frente dele.
Salaz senta-se ao lado da cauda de Jabba, vendo-a se contorcer. Leia está agora
vestido com o traje acanhado de uma dançarina; uma corrente corre de
manáculo / colar na garganta para seu novo mestre, Jabba, o Hutt.
Threepio fica atrás de Jabba quando Bib chega à lesma de gângster.

THREEPIO
Finalmente! Mestre Luke veio me resgatar.

BIB
Mestre.

Jabba acorda com um começo e Bib continua, em Huttese.

BIB
...Luke Skywalker, Jedi Knight.

JABBA ( em Huttese legendado )
Eu disse para você não admiti-lo.

LUKE
Eu devo ter permissão para falar.

BIB ( em Huttese legendado )
Ele deve ter permissão para falar.

Jabba, furioso, derruba Bib e o empurra para longe.

JABBA ( em Huttese legendado )
Seu tolo de mente fraca! Ele está usando um velho truque mental Jedi.

Luke olha duro para Jabba.

LUKE
Você trará o capitão Solo e os Wookiee para mim.

JABBA ( em Huttese legendado )
Seus poderes mentais não funcionarão em mim, garoto.

LUKE
No entanto, estou levando o capitão Solo e seus amigos. Você pode
lucre com isso ... ou seja destruído! A escolha é sua. Mas eu aviso que você não
subestimar meus poderes.

A risada de Jabba é má e alta. Threepio tenta avisar Luke sobre
o poço.

THREEPIO
Mestre Luke, você está de pé...

JABBA ( em Huttese legendado )
Não haverá barganha, jovem Jedi. Vou gostar de ver você morrer.

Luke estende a mão e uma pistola salta do coldre de um guarda e voa
na mão de Luke. O guarda perplexo agarra-o enquanto Jabba levanta sua
mão.

JABBA
Bascka!

O chão de repente cai, enviando Luke e o infeliz guarda para
o poço. A pistola dispara, abrindo um buraco no teto. Jabba
ri e seus cortesãos se juntam. Leia começa para frente, mas é contido
por um guarda humano ... Lando, reconhecível por trás de sua máscara. Ela olha para
ele e ele balança a cabeça "não."

18 INT RANCOR PIT

Luke e o guarda caíram 25 metros de uma rampa para dentro
gaiola de masmorra. Luke se levanta quando o guarda grita histericamente
para ajuda. Uma multidão se reúne ao redor da borda do poço como a porta
o lado do poço começa a se abrir. O guarda grita em pânico.
Luke olha calmamente para um meio de fuga.

THREEPIO
Ah não! O rancor!

Ao lado do poço, uma porta de ferro ronca para cima e um gigante, com presas
RANCOR surge. O guarda corre para o lado do poço e tenta
futilmente para correr para o topo. O animal hediondo se aproxima dele.

O rancor passa por Lucas e, enquanto o guarda continua a se mexer, o
Rancor o pega e o coloca em suas mandíbulas escravizantes. Alguns
grita, e o guarda é engolido com um gole. O público aplaude
e ri do destino do guarda.

O monstro vira e começa para Luke. O jovem Jedi corre para longe
à frente do golpe do monstro para ele, e pega o longo osso do braço de
uma vítima anterior. O monstro agarra Luke e o leva até sua
boca salivante. No último momento, Luke afunda o osso no
boca do monstro e é jogada no chão. O monstro entra
raiva e lampejos, atingindo a lateral do poço, causando um
avalanche.

O monstro esmaga o osso em suas mandíbulas e vê Luke, que aperta
em uma fenda na parede do poço. Luke olha além do monstro para o
segurando caverna além. No outro lado da caverna de retenção há uma utilidade
porta - se ele conseguir chegar lá. O Rancor vê Luke e alcança
a fenda para ele. Luke agarra uma pedra grande e a levanta, esmagando-a
no dedo do rancor.

19 TÚNEL DE MANUAL - RANCOR PIT

O Rancor solta um uivo alto enquanto Luke corre para a exploração
caverna. Ele chega à porta e aperta um botão para abri-la. Quando ele
consegue, ele vê um portão barrado pesado entre ele e a segurança. Além
o portão dois guardas olham para cima do jantar. Luke se vira para ver o
monstro indo para ele e puxa com todas as suas forças no portão. O
os guardas se movem para o portão e começam a cutucar os jovens Jedi com lanças,
rindo.

Luke agacha ( contra a parede ) quando o monstro começa a alcançar
ele. De repente, ele percebe um painel principal de controle da porta na metade da parede.
Enquanto o Rancor se move para a matança, Luke pega um crânio do
piso da caverna e o lança no painel. A porta gigante vem
batendo na cabeça da besta, esmagando-a como uma marreta
um ovo.

Um suspiro assustado é ouvido no tribunal atordoado. Há consternação
nesta virada de eventos. Cabeças olham para Jabba, que está realmente virando
vermelho de raiva. Leia não pode suprimir sua alegria. Jabba profere duro
comandos para seus guardas e eles se apressam.

JABBA ( em Huttese legendado )
Traga-me Solo e os Wookiee. Todos eles sofrerão por esse ultraje.

21 INT RANCOR PIT

Os Rancor KEEPERS entraram na gaiola e estão examinando seus mortos
besta. Um deles quebra e chora. O outro olha ameaçadoramente
em Luke, que está preocupado. Vários guardas correm para o túnel de espera
e leve Luke embora.

QUARTO DE 22 INT THRONE

A multidão de partes assustadoras dos cortesãos como Han e Chewie é trazida para
a sala do trono e outros guardas arrastam Luke pelos degraus.

LUKE
Han!

HAN
Lucas!

LUKE
Você está bem?

HAN
Bem. Juntos de novo, hein?

LUKE
Não sentiria falta disso.

HAN
Como estamos indo?

LUKE
O mesmo de sempre.

HAN
Que ruim, hein? Cadê a Leia?

Luke olha para Leia.

LEIA
Estou aqui.

Threepio está de pé atrás do gangster grotesco enquanto acaricia Leia
como um gato de estimação. Vários dos guardas, incluindo Lando, trazem Luke de
o outro lado da sala. Boba está de pé atrás de Jabba.

Threepio dá um passo à frente e se traduz para os cativos.

THREEPIO
Oh céus. Seu alto exaltado, o grande Jabba, o Hutt, decretou
que você deve ser encerrado imediatamente.

HAN
Bom, eu odeio longas esperas.

THREEPIO
Você será levado ao mar das dunas e lançado no poço de
Carkoon, o local de nidificação do todo-poderoso Sarlacc.

HAN ( para Luke )
Não parece tão ruim.

THREEPIO
Na barriga dele, você encontrará uma nova definição de dor e sofrimento, como
você está digerido lentamente ao longo de mil anos.

HAN
Pensando bem, vamos passar adiante, não é?

Chewie late seu acordo.

LUKE
Você deveria ter barganhado, Jabba. Esse é o último erro que você jamais
fazer.

Jabba gargalha mal nisso.

Enquanto os guardas arrastam os prisioneiros da sala do trono, uma alegria alta
sobe da multidão. Leia e Chewie trocam olhares preocupados, mas
Luke Skywalker, guerreiro Jedi, não pode suprimir um sorriso.

23 MAR EXT TATOOINE - SKIFF

O enorme SAIL BARGE de Jabba se move acima da superfície do deserto, acompanhado por
dois Skiffs menores. Um dos esquifes desliza para perto, revelando Luke,
Han e Chewie - todos em laços - cercados por guardas, um dos quais
Lando disfarçado.

HAN
Eu acho que meus olhos estão melhorando. Em vez de um grande borrão escuro, vejo um
grande desfoque leve.

LUKE
Não há nada para ver. Eu morava aqui, você sabe.

HAN
Você vai morrer aqui, você sabe. Conveniente.

LUKE
Apenas fique perto de Chewie e Lando. Eu cuidei de tudo.

HAN
Oh ... ótimo!

24 DECK DE OBSERVAÇÃO DE BARGAS INT

Jabba, o Hutt, cavalga como um sultão no enorme navio antigravitacional. Dele
todo o séquito está com ele, bebendo, comendo e se divertindo.
Leia está assistindo suas amigas no esquife quando a corrente se prende a
seu pescoço está apertado e Jabba puxa a princesa com pouca roupa para
ele.

JABBA ( em Huttese legendado )
Em breve você aprenderá a me apreciar.

Threepio vagueia entre os alienígenas da Barcaça de Vela, esbarrando em um
dróides servindo bebidas, derramando-as por todo o lugar. O atarracado
droid solta uma série furiosa de bipes e assobios.

THREEPIO
Oh, eu sou terrivelmente triste... Artoo! O que você está fazendo aqui?

Artoo emite uma resposta rápida.

THREEPIO
Bem, posso ver que você está servindo bebidas, mas este lugar é perigoso.
Eles vão executar o Mestre Luke e, se não tomarmos cuidado, nós também!

Artoo assobia uma resposta de canto.

THREEPIO
Hmm.  Eu gostaria de ter sua confiança.

25 PIT EXT SARLACC

O comboio se move sobre um enorme poço de areia. A Barcaça de Vela para para um
lado da depressão, assim como o esquife da escolta. Mas o prisioneiro
esquife se move diretamente sobre o centro e paira. Na parte inferior de
o cone profundo de areia é um buraco repulsivo e revestido de muco, cercado por
milhares de dentes afiados por agulha. Este é o SARLACC. Uma prancha é
estendido da borda do esquife do prisioneiro. Guardas liberam Luke's
amarra e empurra-o para a prancha acima da boca do Sarlacc.

26 DECK DE OBSERVAÇÃO DE ESCADA EXT

Jabba e Leia estão agora no trilho, assistindo. Threepio se inclina para a frente
e o vilão babando murmura algo para ele. Como passos de Threepio
até um comlink, Jabba levanta o braço e a matriz heterogênea de
piratas intergalácticos ficam em silêncio. A voz de Threepio é amplificada através
alto-falantes.

THREEPIO
Vítimas do todo-poderoso Sarlacc: Sua Excelência espera que você morra
honrosamente. Mas se algum de vocês quiser implorar por misericórdia, o grande Jabba
o Hutt agora ouvirá seus pedidos.

27 SKIFF EXT

Han avança arrogantemente e começa a falar.

HAN
Threepio, você diz àquele pedaço viscoso de ... sujeira cheia de vermes que ele receberá
não há tanto prazer de nós. Direita?

Chewie cresce seu acordo.

LUKE
Jabba! Esta é sua última chance. Liberte-nos ou morra.

Lando se move discretamente ao longo do esquife enquanto Luke dá uma olhada rápida
de conspiração para ele.

28 DECK DE OBSERVAÇÃO DE SALVA

Os monstros reunidos balançam com risadas zombeteiras enquanto Artoo fecha
despercebido na rampa até o convés superior. O riso de Jabba desaparece como
ele fala no comlink.

JABBA ( em Huttese legendado )
Mova-o para a posição.

Jabba faz um gesto de polegar para baixo. Leia parece preocupada.

29 EXT BARGE - DECK SUPERIOR

Artoo aparece de baixo e passa para o trilho de frente para o poço.
Abaixo, no esquife, Luke é cutucado por um guarda até a borda do
prancha sobre o Sarlacc aberto. Luke olha para Artoo, depois dá uma
saudação alegre: o sinal que o pequeno dróide estava esperando. Uma aba
abre na cabeça abobadada de Artoo.

JABBA ( em Huttese legendado )
Coloque-o dentro.

30 EXT SKIFF - PLANK

Luke é cutucado e pula da prancha para os aplausos do
espectadores sanguinários. Mas, antes que alguém possa perceber o que é
acontecendo, ele gira e agarra o fim da prancha por sua
pontas dos dedos. A prancha se dobra descontroladamente de seu peso e o catapulta
para o céu. No ar, ele faz um giro completo e cai no final de
a prancha no mesmo local que ele acabou de desocupar, mas de frente para o esquife. Ele
estende casualmente uma palma aberta e - seu sabre de luz, que Artoo tem
enviou arco em sua direção, cai em sua mão.

Com a velocidade do samurai, Luke a acende e ataca o guarda que cutucou
ele fora da prancha, enviando o monstro infeliz gritando ao mar. O
outros guardas enxameiam em direção a Luke. Ele entra neles, sabre de luz
piscando. Lando luta com outro guarda na parte de trás do esquife.

31 PIT EXT SARLACC

Um guarda perplexo pousa na encosta macia e arenosa do poço, e
começa a deslizar. Ele arranha desesperadamente quando um tentáculo de Sarlacc o agarra
e o puxa gritando na boca viscosa.

32 INT SAIL BARGE

Jabba observa isso e explode de raiva. Ele late comandos e os
guardas ao seu redor correm para cumprir suas ordens. As criaturas escamosas
assistir a ação da janela está em tumulto.

33 SKIFF EXT

Luke bate outro guarda do esquife e entra na boca que espera
o Sarlacc. Ele começa a desatar os laços de Chewie.

LUKE
Calma, Chewie.

Naquele momento, os pistoleiros do convés na barcaça desencadeiam uma série de explosões
de um grande canhão no convés superior. Lando é jogado do convés de
o esquife de balanço. Ele consegue pegar uma corda e balança desesperadamente
acima do poço de Sarlacc.

LANDO
Uau! Uau! Socorro!

34 DECK EXT SUPERIOR - SALA DE SALA

Com dois passos rápidos, o perigoso Boba Fett acende seu foguete
embalar, pular no ar e voar da barcaça até o esquife.

35 SKIFF EXT

Boba cai no esquife e começa a apontar sua arma laser para Luke, que
libertou Han e Chewie de seus laços. Mas antes que Boba possa disparar,
o jovem Jedi gira sobre ele, sabre de luz varrendo e corta a recompensa
arma do caçador ao meio.

Imediatamente, o esquife leva outro golpe direto do convés da barcaça
arma. Fragmentos de mosca do convés do esquife. Chewie e Han são jogados contra o
trilho.

HAN
Chewie, você está bem? Onde ele está?

O Wookiee está ferido e uiva de dor.

HAN
Estou bem, amigo.

Por um momento, Luke está distraído e, nesse momento, Boba dispara um
cabo da manga blindada. Instantaneamente, Luke está envolvido em um forte
cabo, os braços presos contra o lado, o braço da espada livre apenas de
o pulso para baixo.  Luke dobra o pulso para que o sabre de luz aponte diretamente
até alcançar o laço de arame e cortar. Luke encolhe os ombros
e fica livre.

Outra explosão da pistola de convés da Barcaça atinge perto de Boba e ele é
inconsciente no convés, ao lado de onde Lando está pendurado.

LANDO
Han! Chewie?

HAN
Lando!

Luke está um pouco abalado, mas permanece em pé como um suporte de fusilada
ele. O segundo esquife, carregado de guardas disparando suas armas, se move
em Luke rápido. Luke pula em direção ao segundo esquife que chega. Os jovens
Jedi pula no meio do segundo esquife e começa a dizimar
os guardas do meio deles.

Chewie, ferido, tenta se levantar enquanto late instruções para Han,
guiando-o em direção a uma lança que foi derrubada por um dos guardas.
Han procura no convés enquanto Chewie late as direções; finalmente ele agarra
da lança.

Boba Fett, muito abalada, sobe do convés. Ele olha para o
outro esquife, onde Luke está chicoteando uma massa de guardas. Boba levanta sua
braço e visa seu apêndice letal.

Chewie late desesperadamente para Han.

HAN
Boba Fett?! Boba Fett?! Onde?

O pirata espacial vira às cegas e a longa lança na mão
bate diretamente no meio do foguete de Boba.

O impacto do balanço faz com que o foguete acenda. Boba explode
voando sobre o segundo esquife como um míssil, esmagando contra o
lado da enorme barcaça de vela e deslizando para dentro do poço. Ele grita
como seu corpo blindado faz seu último vôo além de Lando e diretamente para
a boca mucosa do Sarlacc. O Sarlacc arrota. Chewie rosna um
parabéns fracos a Han.

36 INT SAIL BARGE

Leia vira do espetáculo do lado de fora, pula no trono de Jabba e
joga a corrente que a escraviza sobre a cabeça ao redor de seu bulbous
pescoço. Então ela mergulha do outro lado do trono, puxando o
corrente violentamente ao seu alcance. O pescoço flácido de Jabba se contrai sob
a corrente de aperto. Seus enormes olhos brilham de suas órbitas e dele
a língua revestida de escória cai. Os enormes espasmos de cauda do Exaltado Hutt
através de sua agonia e depois bate na quietude final. Leia
luta para se libertar de sua escravidão.

37 SKIFF EXT

Luke continua a destruir os alienígenas no esquife dos guardas, como Han
estende sua lança para baixo até Lando, que ainda está balançando precariamente
de uma corda no esquife do prisioneiro.

HAN
Lando, pegue!

LANDO
Abaixe!

HAN
Estou tentando!

Um grande golpe da pistola de convés de barcaça bate no esquife de lado. Han
e quase todo o resto a bordo desliza ao mar. A corda quebra,
e Lando cai ao lado do poço de Sarlacc. Felizmente, o pé de Han
pega no trilho do esquife e ele balança acima de Lando e do poço.
O ferido Wookiee segura o esquife por uma vida querida como outro golpe
da pistola de convés balança o esquife violentamente.

HAN
Uau! Uau! Me pegue, Chewie! Estou escorregando.

Chewie agarra os pés de Han, segurando-o de cabeça para baixo, como Han
estende a lança em direção a Lando, que está segurando o lado do
poço.

HAN
Pegue! L - Lando. Pegue!

Luke termina a última guarda no segundo esquife. Ele vê o convés
arma disparando contra seus companheiros desamparados. Luke pula do
esquife, através de um abismo de ar, para o lado metálico da vela
Barcaça. Mal capaz de pegar um dedo, ele começa uma subida dolorosa
o casco, quando de repente um machado esmaga uma janela a uma polegada de sua
cabeça. Com agilidade Jedi, Luke agarra o pulso segurando o machado e os puxões
o guarda desamparado pela janela quebrada e para o poço mortal.

O ferido Chewie está alcançando o trilho para o Han, que está balançando
por sua vez, está alcançando cegamente o desesperado Lando. O Barão
parou seu deslizamento pela encosta arenosa do poço Sarlacc
deitado muito quieto. Toda vez que ele tenta alcançar Han, a areia solta
o aproxima de sua recompensa final.

HAN
Pegue! Quase... Você quase conseguiu!

Outra explosão atinge a frente do esquife inclinado, fazendo com que Lando deixe
vá da lança.

LANDO
Segure! Uau!

Mais uma vez, Han estende a lança em direção a Lando.

HAN
Gentilmente agora. Tudo bem. Agora fácil, fácil. Me abrace, Chewie.

Lando grita. Um dos tentáculos de Sarlacc se envolveu firmemente
ao redor do tornozelo, arrastando-o para o lado do poço.

HAN
Chewie! Chewie, me dê a arma. Não se mexa, Lando.

LANDO
Não espera! Eu pensei que você era cego!

HAN
Está tudo bem. Confie em mim. Não se mexa.

LANDO
Tudo certo! Um pouco mais alto! Apenas um pouco mais alto!

Han ajusta sua mira quando Lando abaixa a cabeça e o pirata de olhos nebulosos
dispara no tentáculo. Acerto direto. O tentáculo libera Lando, e
Chewie começa a puxá-los a bordo do esquife.

HAN
Chewie, puxe-nos para cima! Vamos! Ok ... Chewie, para cima!

38 DECK SUPERIOR EXT

Os artilheiros do convés têm Chewie e a desesperada cadeia humana em perigo
suas miras quando algo no convés chama sua atenção:
Lucas, diante deles como um rei pirata, acende seu sabre de luz.
Os artilheiros do convés mal pegaram suas pistolas diante dos jovens
Jedi os demoliu. Imediatamente, Luke vira para ver mais dois
artilheiros ( que descobriram uma arma gigante no final da barcaça )
correndo para ele, disparando suas pistolas a laser.

39 INT SAIL BARGE - DECK DE OBSERVAÇÃO

Leia está lutando contra suas correntes em desespero enquanto Artoo fecha
através do tumulto de monstros confusos para o resgate; o atarracado
o pequeno dróide estende uma pequena pistola a laser e destrói a corrente.

LEIA
Vamos. Temos que sair daqui rápido.

Artoo e Leia correm para a saída, passando por Threepio, que está chutando e
gritando como migalha espaçosa, o monstro reptiliano de macacos escolhe
um dos olhos do dróide de ouro.

THREEPIO
Não são meus olhos! Artoo, socorro! Rapidamente, Artoo. Oh! Ohhh! Seu animal!

Artoo se aproxima e zapeia Salaz, enviando-o para o céu com um grito,
colidindo com as vigas como Artoo, Leia e Threepio ( com o olho
pendurado em um fio ), corra.

40 EXT UPPER DECK - SALA BARGE

Luke está apagando as explosões a laser com seu sabre de luz, cercado por
guardas e lutando como um demônio. Leia emerge no convés como Luke
vira para enfrentar outro guarda.

LUKE ( para Leia )
Pegue a arma! Aponte para o convés!

Leia vira em direção ao canhão da barcaça, sobe na plataforma e gira
a arma ao redor.

LUKE
Aponte para o convés!

Uma explosão a laser atinge a mão mecânica de Luke e ele se inclina com dor,
mas consegue balançar o sabre de luz para cima e tirar o último dos
guardas. Ele olha para a mão ferida, que revela o mecanismo. Ele
flexiona a mão; ainda funciona.

Perto do trilho do andar superior, Artoo e Threepio se firmam
quando Threepio se prepara para pular. Artoo emite um sinal sonoro.

THREEPIO
Artoo, para onde estamos indo? Eu não poderia pular.

Artoo derruba o dróide de ouro sobre a borda e sai de si mesmo,
caindo em direção à areia.

Luke corre ao longo do convés vazio em direção a Leia e a pistola de barcaça, que ela
trouxe para apontar para o convés.

LUKE
Vamos!

Luke segurou uma das cordas de cordame do mastro. Ele reúne
Leia em seu outro braço e chuta o gatilho da pistola de convés. A arma
explode no convés enquanto Luke e Leia se movem em direção ao esquife.

41 SKIFF EXT

Han se inclina ofegante contra o trilho enquanto Chewie ajuda Lando a entrar no convés.
Luke e Leia pousam no esquife com um toque.

LUKE
Vamos lá! E não esqueça os dróides.

LANDO
Estamos a caminho.

A Barcaça de Vela está explodindo em estágios à distância. Metade do enorme
artesanato está pegando fogo.

42 EXT SAND DUNE

As pernas de Threepio grudam direto da duna onde ele pousou. Próximo
para ele, o periscópio de Artoo é a única coisa acima da areia. O esquife
flutua acima deles e dois grandes eletroímãs caem sobre um fio.
Com um CLANG alto, os dois dróides são puxados
da areia.

43 MAR EXT DUNE

O pequeno esquife pula em torno da barcaça de vela em chamas, que continua
sua cadeia de explosões. Enquanto o esquife navega pelo deserto, o
barcaça se instala na areia e desaparece em uma conflagração final.

44 MAR EXT DUNE - ÁREA DE TERRA

Uma tempestade de areia feroz bloqueia nossa visão. Então, através do ROAR, ouvimos
AS VOZES dos nossos heróis. Eles emergem lentamente do véu da areia,
pressionando contra o vento. Primeiro vêm Artoo e Threepio, seguidos
por Leia guiando Han, então Luke e Lando aparecem, cada
apoiando um lado do imponente Chewbacca, que mancava de sua
ferida.

Logo, eles podem distinguir grandes formas vagas na areia soprada. É
é o Millennium Falcon e, estacionado ao lado, a fiel asa X de Luke
e uma asa Y de dois lugares. Eles devem gritar para serem ouvidos.

HAN
Eu não sei. Tudo o que posso ver é muita areia soprada!

LEIA
É tudo o que qualquer um de nós pode ver.

HAN ( piscando )
Então acho que estou melhorando.

Assim que o grupo se amontoa sob a maior parte do Falcon, o vento
morre para algo mais descritível como uma condição climática grave.
Threepio bate em um interruptor, e a prancha baixa com um HUM.

HAN ( voltando-se para Lucas )
Eu tenho que entregar a você, garoto, você era muito bom por aí.

LUKE ( encolhendo-o )
Eu tive muita ajuda. Não pense em nada disso.

HAN
Não, estou pensando muito sobre isso. Esse congelamento de carbono foi o mais próximo
coisa a morta existe. E não estava apenas dormindo'. Era uma grande largura
nada acordado!

Luke assente, enquanto Chewie rosna carinhosamente no jovem guerreiro Jedi,
bagunçando o cabelo como um tio orgulhoso. E Leia o abraça calorosamente.

LUKE ( movendo-se para seu navio )
Vejo você de volta à frota.

HAN
Por que você não deixa essa caixa e vem conosco?

LUKE
Tenho uma promessa que tenho que manter primeiro ... para um velho amigo.

Luke e Artoo decolam em sua espaçonave.

HAN
( olhando duvidosamente para Lando, obviamente lembrando o amigo
traição e assessor subsequente )
Acho que devo alguns agradecimentos também, Lando.

LANDO
Imaginei que se eu deixasse você congelado assim, você me daria azar
resto da minha vida, então é melhor eu descongelar você mais cedo ou mais tarde.

LEIA
Ele quer dizer "De nada."

LANDO
Vamos lá, vamos sair dessa miserável bola de poeira.

44A ESPAÇO EXT ACIMA DE TATOOINE

O planeta amarelo desolado enche a tela, a asa X de Luke aparece e
descasca para a esquerda. Um momento depois, o FALCON aparece como um ponto e
cresce enorme, para rugir diretamente sobre a CAMERA.

X-WING DE 45 INT - COCKPIT

Luke está no controle, com Artoo preso atrás dele fora do
dossel. Lucas fala em seu comlink para os outros, no MILLENNIUM
FALCON.

LUKE
Encontro você na frota.

LEIA ( sobre comlink )
Pressa. A Aliança deve estar reunida agora.

LUKE
Eu vou.

HAN ( sobre comlink )
Ei, Luke, obrigado. Obrigado por vir atrás de mim. Agora eu te devo uma.

Uma mensagem de Artoo aparece na tela do monitor pequeno em frente a
Lucas. Ele sorri para o monitor e fala com Artoo, enquanto puxa um preto
luva para cobrir sua mão mecânica ferida.

LUKE
Está certo, Artoo. Nós estamos indo para o sistema Dagobah. Eu tenho um
prometo manter ... um velho amigo.

46 ESPAÇO EXT - ESTRELA DE MORTE E ENDOR

Um Super Star Destroyer e vários navios da Frota Imperial descansam em
espaço acima da Estrela da Morte semi-concluída e seu vizinho verde,
Endor. Quatro esquadrões de combatentes do TIE escoltam um ônibus imperial em direção a
a estrela da morte.

47 INT DEATH STAR - CORREDOR PARA DOCKING BAY

Lord Vader caminha pelo corredor, acompanhado por um caminho muito nervoso
Comandante da Estrela da Morte.

48 INT DOCKING BAY - ESTRELA DE MORTE

Milhares de tropas imperiais em formação apertada enchem o mamute
baía de ancoragem. Vader e o oficial caminham para a plataforma de pouso, onde
o ônibus está chegando para descansar.

A rampa do ônibus espacial abaixa e os guardas reais do imperador saem e
crie um perímetro letal. As tropas reunidas passam a uma atenção rígida
com um SNAP importante.

Então, no enorme SILÊNCIO que se segue, o EMPEROR aparece. Ele é um
velho bastante pequeno e murcho. Seu quadro dobrado lentamente abre caminho
descendo a rampa com a ajuda de uma bengala retorcida. Ele usa uma capa com capuz
semelhante ao que Ben veste, exceto que é preto. O Imperador
o rosto está envolto e difícil de ver, exceto pelo amarelo penetrante
olhos. O comandante Jerjerrod e Darth Vader se ajoelham para ele. O Supremo
O governante da galáxia acena para o Lorde das Trevas.

EMPEROR ( para Vader )
Levante-se, meu amigo.

Vader sobe e cai ao lado do imperador enquanto ele lentamente segue seu caminho
ao longo das fileiras de tropas. Jerjerrod e os outros comandantes ficam
ajoelhado até o Supremo Governante e Vader, seguido por vários
dignitários imperiais, passam; só então eles se juntam ao
procissão.

VADER
A Estrela da Morte será concluída dentro do prazo.

EMPEROR
Você fez bem, lorde Vader. E agora sinto que você deseja continuar
sua busca pelo jovem Skywalker.

VADER
Sim meu mestre.

EMPEROR
Paciência, meu amigo. Com o tempo ele irá procurá-lo. E quando ele faz,
você deve trazê-lo
antes de mim. Ele cresceu forte. Somente juntos podemos transformá-lo no
lado escuro do
Força.

VADER
Como você deseja.

EMPEROR
Tudo está acontecendo como eu previ.

Ele ri de si mesmo quando eles passam pela vasta linha do Imperial
tropas.

49 EXT YODA'S HOUSE - DAGOBAH

Mais uma vez, Artoo se vê esperando nos arredores úmidos de
o planeta do pântano, e ele não está muito feliz com isso. Ele apita
desconsolado para si mesmo e vira-se para olhar para a cabana de Yoda. Quente
a luz amarela escapa das janelas de formas estranhas para combater a escuridão.

50 INT YODA'S HOUSE

A ponta de uma bengala bate hesitantemente no chão de terra de
a casa. Nossa visão viaja até a pequena mão verde que
agarra-o e depois para o rosto familiar de YODA, O MESTRE JEDI.
Sua maneira é frágil e sua voz, embora alegre, parece mais fraca.

YODA
Hmm. Essa cara que você faz. Olha, eu sou tão velha para os olhos jovens?

Luke está sentado em um canto do espaço apertado e, de fato, seu olhar
tem sido lamentável. Pego, ele tenta esconder.

LUKE
Não ... claro que não.

YODA ( articulado, risadas )
Sim, sim!  Eu fiquei doente. Velho e fraco.
( Aponta um dedo torto )
Quando você tiver novecentos anos, pareça tão bom que não o fará. Hmm?

Yoda ri disso, tosse e mancava em direção à cama.

YODA
Em breve vou descansar. Sim, durma para sempre. Ganhei, eu tenho.

Yoda senta-se em sua cama, com grande esforço.

LUKE
Mestre Yoda, você não pode morrer.

YODA
Sou forte com a Força ... mas não tão forte! Crepúsculo está sobre mim
e logo a noite deve cair. Esse é o caminho das coisas ... o caminho do
Força.

LUKE
Mas preciso da sua ajuda. Voltei para concluir o treinamento.

YODA
Você não precisa de mais treinamento. Já te conheço o que você precisa.

Yoda suspira e deita de volta em sua cama.

LUKE
Então eu sou um Jedi?

YODA ( balança a cabeça )
Ohhh. Ainda não. Uma coisa permanece: Vader. Você deve enfrentar Vader. Então,
só então, um Jedi você será. E confrontá-lo, você o fará.

Luke está em agonia. Ele fica em silêncio por um longo momento, estragando sua
coragem. Finalmente ele é capaz de perguntar.

LUKE
Mestre Yoda ... Darth Vader é meu pai?

Os olhos de Yoda estão cheios de cansaço e compaixão. Um sorriso estranho e triste
vinca o rosto. Ele se vira dolorosamente de lado, longe de Luke.

YODA
Mmm ... descanso que eu preciso. Sim ... descanse.

Lucas o observa, a cada momento uma eternidade.

LUKE
Yoda, eu devo saber.

YODA
Seu pai ele é.

Luke reage como se fosse cortado.

YODA
Te disse, contou?

LUKE
Sim.

Um novo olhar de preocupação cruza o rosto de Yoda.  Ele fecha os olhos.

YODA
Inesperado, isso é, e infeliz...

LUKE
Lamentável que eu saiba a verdade?

Yoda abre os olhos novamente e estuda a juventude.

YODA ( reunindo todas as suas forças )
Não. Lamentável que você tenha corrido para enfrentá-lo ... que incompleto era o seu
Treinamento. Não
pronto para o fardo você estava.

LUKE
Bem, me desculpe.

YODA
Lembre-se, a força de um Jedi flui da Força.  Mas cuidado.  Raiva,
medo, agressão.
O lado sombrio são eles.  Depois de começar o caminho sombrio, para sempre
vai dominar o seu
destino.

Ele acena para o jovem Jedi mais perto dele.

YODA
Lucas...Lucas...Não...Não subestime os poderes do imperador,
ou sofrer o destino de seu pai, você o fará. Luke, quando eu me for
( tosse ),
o último dos Jedi você será. Luke, a Força corre forte em seu
família. Passe o que aprendeu, Luke...
( com grande esforço )
Há ... outro...Céu...Sky ... caminhante.

Ele prende a respiração. Um arrepio atravessa o verde antigo
criatura, e ele morre. Luke olha para seu mestre morto quando ele desaparece
na frente dos olhos dele.

51 EXT DAGOBAH SWAMP - X-WING

Luke volta para onde seu navio está sentado. Artoo emite uma saudação,
mas é ignorado por seu mestre deprimido. Luke se ajoelha, começa a
ajude Artoo com o navio, depois pare e balance a cabeça com desânimo.

LUKE
Eu não posso fazer isso, Artoo. Eu não posso continuar sozinho.

BEN ( OS )
Yoda estará sempre com você.

Luke olha para cima para ver a imagem cintilante de BEN KENOBI.

LUKE
Obi-Wan! Por que você não me contou?

O fantasma de Ben Kenobi se aproxima dele através do pântano.

LUKE
Você me disse que Vader traiu e matou meu pai.

BEN
Seu pai foi seduzido pelo lado sombrio da Força. Ele deixou de ser
Anakin Skywalker
e se tornou Darth Vader. Quando isso aconteceu, o bom homem que era seu
pai foi destruído. Então o que eu disse a você era verdade ... de um
certo ponto de vista.

LUKE ( virando para longe, irônico )
Um certo ponto de vista!

BEN
Luke, você verá que muitas das verdades que nos apegamos dependem
muito por conta própria
ponto de vista.

Luke não responde. Ben o estuda em silêncio por um momento.

BEN
Não culpo você por estar com raiva. Se eu estava errado no que fiz
certamente não teria sido pela primeira vez. Você vê, o que aconteceu
para o seu pai foi minha culpa.

Ben faz uma pausa triste.

BEN
Anakin era um bom amigo.

Luke se vira com interesse nisso. Enquanto Ben fala, Luke se instala em um
toco, hipnotizado. Artoo vem oferecer sua presença reconfortante.

BEN
Quando o conheci, seu pai já era um grande piloto. Mas eu estava
espantado com a força que a Força estava com ele. Eu assumi isso
treiná-lo como um Jedi. Eu pensei que poderia instruí-lo também
como Yoda. Eu estava errado. Meu orgulho teve consequências terríveis para o
galáxia.

Luke está encantado.

LUKE
Ainda há bom nele.

BEN
Eu também pensei que ele poderia voltar ao lado bom. Não poderia ser
feito. Ele é mais máquina agora que o homem. Torcido e mal.

LUKE
Eu não posso fazer isso, Ben.

BEN
Você não pode escapar do seu destino.

LUKE
Eu tentei detê-lo uma vez. Eu não poderia fazer isso.

BEN
Vader humilhou você quando o conheceu, Luke ... mas essa experiência
fazia parte do seu treinamento. Ensinou-lhe, entre outras coisas, o valor
de paciência. Se você não estivesse tão impaciente para derrotar Vader, então você
poderia ter terminado seu treinamento aqui com Yoda. Você teria sido
preparado.

LUKE
Mas eu tive que ajudar meus amigos.

BEN ( sorrindo para a indignação de Luke )
E você os ajudou? Foram eles que tiveram que te salvar. Você conseguiu
pouco correndo de volta prematuramente, eu temo.

LUKE ( com tristeza )
Eu descobri que Darth Vader era meu pai.

BEN
Para ser um Jedi, Luke, você deve enfrentar e depois ir além do lado sombrio
- o lado que seu pai não conseguiu superar. A impaciência é a mais fácil
porta - para você, como seu pai. Só que seu pai foi seduzido pelo que
ele encontrou do outro lado da porta e você se manteve firme. Você é
não é mais tão imprudente agora, Luke. Você é forte e paciente. E agora,
você deve enfrentar Darth Vader novamente!

LUKE
Eu não posso matar meu próprio pai.

BEN
Então o imperador já venceu. Você era nossa única esperança.

LUKE
Yoda falou de outro.

BEN
O outro de quem ele falou é sua irmã gêmea.

LUKE
Mas eu não tenho irmã.

BEN
Hmm. Para proteger vocês dois do Imperador, vocês estavam escondidos do seu
pai quando você nasceu. O imperador sabia, como eu, se Anakin estivesse
para ter filhos, eles seriam uma ameaça para ele. Esse é o
razão pela qual sua irmã permanece anônima com segurança.

LUKE
Leia! Leia é minha irmã.

BEN
Sua visão serve bem a você. Enterre seus sentimentos no fundo, Luke. Eles
você credita.
Mas eles poderiam ser feitos para servir o Imperador.

Luke olha para longe, tentando compreender tudo isso.

BEN ( continuando sua narrativa )
Quando seu pai foi embora, ele não sabia que sua mãe estava grávida. Seu
mãe e eu sabíamos que ele descobriria eventualmente, mas queríamos continuar
vocês dois o mais seguro possível, pelo maior tempo possível.  Então eu te levei
morar com meu irmão Owen em Tatooine ... e sua mãe levou Leia
viver como filha do senador Organa, em Alderaan.

Luke se vira e se instala perto de Ben para ouvir a história.

BEN ( tentando consolar com suas palavras )
A família Organa era nascida e politicamente bastante poderosa em
esse sistema. Leia se tornou uma princesa em virtude da linhagem ... ninguém sabia
ela foi adotada, é claro. Mas era um título sem poder real,
desde Alderaan havia sido uma democracia.  Mesmo assim, a família
continuou a ser politicamente poderoso, e Leia, seguindo em seu adotivo
caminho do pai, tornou-se senador também.  Isso não é tudo o que ela se tornou, de
claro ... ela se tornou a líder de sua cela na Aliança contra a
Império corrupto. E porque ela tinha imunidade diplomática, ela era uma
link vital para obter informações sobre a causa rebelde.  É isso que ela
estava fazendo quando o caminho dela cruzou o seu ... pois seus pais adotivos tinham
sempre dizia para ela entrar em contato comigo em Tatooine, se seus problemas se tornassem
desesperado.

Lucas está sobrecarregado com a verdade e de repente protege sua
irmã.

LUKE
Mas você não pode deixá-la se envolver agora, Ben. Vader a destruirá.

BEN
Ela não foi treinada nos caminhos dos Jedi do jeito que você tem,
Luke ... mas a Força é forte com ela, como acontece com todos os seus
família. Não há como evitar a batalha. Você deve enfrentar e destruir
Vader!

52 ESPAÇO EXT - LIMPETA DE REBEL

A vasta frota rebelde se estende até onde os olhos podem ver. Overhead a
dezenas de pequenos navios de guerra coreanos voam em formação. Lutadores e
cruzadores de batalha cercam o maior dos Rebel Star Cruisers, os
SEDE FRIGA.

53 SEDE FRIGATE - QUARTO PRINCIPAL DE BREVE

Centenas de comandantes rebeldes de todas as raças e formas são reunidos em
a sala de guerra. A CAMINHO está entre eles. No centro da sala é um
modelo holográfico que descreve a Estrela da Morte Imperial incompleta, a
Lua de Endor, nas proximidades, e o escudo defletor protetor.

MON MOTHMA, o líder da Aliança, entra na sala. Ela é uma popa
mas mulher bonita na casa dos cinquenta. Conferindo-se a ela há vários
líderes militares, incluindo MADINA GERAL e ACKBAR ADMIRAL ( a
Mon Calamari cor de salmão ). Lando se move pela multidão até ele
encontra Han e Chewie, ao lado de Leia e os dois dróides.

Han espia as novas insígnias de Lando no peito e se diverte.

HAN
Bem, olhe para você, general, não é?

 LANDO
 Oh, bem, alguém deve ter contado a eles sobre minha pequena manobra no
batalha de Taanab.

HAN ( sarcástico )
Bem, não olhe para mim, amigo. Acabei de dizer que você era um piloto justo. eu
não sabia que eles eram
procurando alguém para liderar esse ataque louco.

LANDO ( sorrindo )
Estou surpreso que eles não tenham pedido para você fazer isso.

HAN
Bem, quem disse que não.  Mas eu não sou louco. Você é o respeitável
um lembra?

Mon Mothma sinaliza por atenção, e a sala fica em silêncio.

MON MOTHMA
O Imperador cometeu um erro crítico e o tempo para o nosso ataque
venha.

Isso causa um rebuliço. Mon Mothma se volta para um modelo holográfico do
Estrela da Morte, a lua Endor e o escudo defletor protetor no
centro da sala.

MON MOTHMA
Os dados trazidos para nós pelos espiões de Bothan apontam a localização exata
da nova estação de batalha do imperador. Também sabemos que a arma
os sistemas desta Estrela da Morte ainda não estão operacionais. Com o imperial
Frota espalhada por toda a galáxia em um esforço inútil para nos envolver, é
relativamente desprotegido. Mas o mais importante de tudo, aprendemos que
o próprio imperador supervisiona pessoalmente os estágios finais do
construção desta Estrela da Morte.

Uma saraivada de conversas espirituosas surge da multidão. Han vira para Leia
como Chewie late sua surpresa.

MON MOTHMA ( cont )
Muitos bothans morreram para nos trazer essa informação. Almirante Ackbar, por favor.

O almirante Ackbar avança e aponta para o campo de força da Estrela da Morte
e a lua de Endor.

ACKBAR
Você pode ver aqui a Estrela da Morte orbitando a floresta Moon of Endor.
Embora a arma
sistemas nesta Estrela da Morte ainda não estão operacionais, a Estrela da Morte
tem um forte mecanismo de defesa. É protegido por um escudo de energia,
que é gerado a partir da floresta próxima Moon of Endor. O escudo
deve ser desativado se algum ataque for tentado. Uma vez o escudo
está inoperante, nossos cruzadores criarão um perímetro, enquanto os lutadores voam
na superestrutura e tente derrubar o reator principal.

Há um murmúrio preocupado.

ACKBAR ( cont )
O general Calrissian se ofereceu para liderar o ataque de caça

Han se vira para Lando com um olhar de respeito.

HAN
Boa sorte.

Lando concorda com seus agradecimentos.

HAN
Você vai precisar disso.

ACKBAR
General Madine.

Madine se move no centro do palco.

MADINA GERAL
Roubamos um pequeno ônibus imperial. Disfarçado como navio de carga, e
usando um segredo
Código imperial, uma equipe de ataque pousará na lua e desativará o
gerador de escudo.

A assembléia começa a murmurar entre si.

THREEPIO
Parece perigoso.

LEIA ( para Han )
Eu me pergunto quem eles encontraram para fazer isso.

MADINA GERAL
General Solo, sua equipe de ataque está montada?

Leia, assustada, olha para Han, surpresa mudando para admiração.

HAN
Minha equipe está pronta. Não tenho uma equipe de comando para o ônibus espacial.

Chewbacca levanta a pata peluda e os voluntários.  Han olha para ele.

HAN
Bem, vai ser difícil, amigo. Eu não queria falar por você.

Chewie acena com um enorme CRESCIMENTO.

HAN ( sorri )
Esse é um.

LEIA
General ... conte comigo.

VOZ ( OS )
Eu também estou com você!

Eles se viram nessa direção e espiam a multidão, pois há mais
Felicidades. Os comandantes se separam, e lá atrás está Luke. Han e
Leia está surpresa e encantada.

Leia se muda para Luke e o abraça calorosamente. Ela sente uma mudança nele
e olha nos olhos dele questionando.

LEIA
O que é isso?

LUKE ( hesitante )
Pergunte-me novamente algum dia.

Han, Chewie e Lando se aglomeram em torno de Luke quando a assembléia se separa.

HAN
Lucas.

LUKE
Olá Han... Chewie.

Artoo emite um sinal sonoro para um Threepio preocupado.

THREEPIO
"Encitar" dificilmente é a palavra que eu usaria.

54 SEDE FRIGA - PRINCIPAL DOCKING BAY

O Millennium Falcon repousa além da ESCUTA IMPERIAL roubada, que
parece anômalo entre todos os navios rebeldes na vasta baía de ancoragem.
Chewie se despede de Lando e leva Artoo e Threpio
o ônibus espacial, agora lotado com a equipe de ataque rebelde carregando armas e
suprimentos. Lando se vira para enfrentar Han. Luke e Leia disseram que são bons.
adeus e inicie a rampa.

HAN
Veja. Eu quero que você a leve. Quero dizer. Leve-a. Você precisa de todo o
ajuda que você pode obter. Ela é
o navio mais rápido da frota.

LANDO
Tudo bem, velho amigo. Você sabe, eu sei o que ela significa para você. Eu vou levar
bom cuidado com ela.
Ela não vai arranhar. Tudo certo?

HAN ( olha para ele calorosamente )
Direita. Eu tenho sua promessa agora. Nem um arranhão.

LANDO
Olha, você iria, seu pirata.

Han e Lando param e depois trocam saudações.

LANDO
Boa sorte.

HAN
Você também.

Han sobe a rampa. Lando o observa ir e depois se afasta lentamente.

55 FECHAMENTO IMPERIAL DE INT - COCKPIT

Luke está trabalhando em um painel de controle traseiro quando Han entra e pega o
assento do piloto. Chewie, no assento ao lado dele, está tentando descobrir
todos os controles imperiais.

HAN
Você a aqueceu?

LUKE
Sim, ela está chegando.

Chewie faz uma reclamação.

HAN
Não. Eu não acho que o Império tinha Wookiees em mente quando eles projetaram
ela, Chewie.

Leia vem do porão e senta-se perto de Luke.

Chewie late e bate alguns interruptores. O olhar de Han se manteve
algo pela janela: o Millennium Falcon. Leia o cutuca
gentilmente.

LEIA
Ei, você está acordado?

HAN
Sim, eu tenho um sentimento engraçado. Como se eu não fosse vê-la novamente.

Chewie, ouvindo isso, interrompe sua atividade e olha ansiosamente para o
Falcão também. Leia coloca a mão no ombro de Han.

LEIA ( suavemente )
Vamos, general, vamos nos mudar.

Han volta à vida.

HAN
Direita. Chewie, vamos ver o que esse pedaço de lixo pode fazer. Pronto,
todo mundo?

LUKE
Tudo pronto.

THREEPIO
Aqui vamos nós novamente.

HAN
Tudo bem, espere.

56 ESPAÇO EXT - A FROTA DE REBEL

O ônibus imperial roubado deixa a principal baía de ancoragem do
Fragata da sede, abaixa as asas na posição de vôo e aumenta o zoom
para o espaço.

SALA DE TRONE DE 57 INT

A sala de controle convertida está pouco iluminada, exceto por uma piscina de luz em
o fim distante. Lá, o Imperador senta-se em uma cadeira de controle elaborada
diante de uma grande janela com vista para a morte semi-completa
Estrela para a gigante lua verde de Endor.

Darth Vader, de pé com outros membros do conselho imperial,
aborda cautelosamente seu mestre. As costas do governante são para Vader. Depois de
vários momentos tensos, a cadeira do imperador gira para encará-lo.

VADER
Qual é a tua oferta, meu mestre?

EMPEROR
Envie a frota para o outro lado de Endor. Lá vai ficar até
pediu.

VADER
E os relatórios da frota rebelde que se acumula perto de Sullust?

EMPEROR
Não é motivo de preocupação. Em breve a rebelião será esmagada e jovem
Skywalker será um de nós! Seu trabalho aqui terminou, meu amigo. Vai
para o navio de comando e aguarde minhas ordens.

VADER
Sim meu mestre.

Vader se curva, depois vira e sai da sala do trono enquanto o Imperador caminha
em direção aos membros do conselho em espera.

58 ESPAÇO EXT - ESTRELA DA MORTE - LUA

Há muito tráfego imperial na área como construção
prossegue na Estrela da Morte. Transportes, caças TIE e algumas estrelas
Destruidores se movem. Agora, o enorme Super Star Destroyer anuncia
ele próprio com um rugido baixo e logo preenche o quadro.

59 FECHAMENTO IMPERIAL INTERNO - COCKPIT

Han olha para Luke e Leia enquanto Chewie aciona vários interruptores.
Através da tela, a Estrela da Morte e a enorme Super Estrela
Destruidor pode ser visto.

HAN
Se eles não fizerem isso, teremos que sair daqui muito bem
rápido, Chewie.

Chewie cresce seu acordo.

CONTROLADOR ( sobre rádio )
Temos você em nossa tela agora. Por favor identifique.

HAN
Shuttle Tydirium solicitando a desativação do escudo defletor.

CONTROLADOR ( sobre rádio )
Shuttle Tydirium, transmita o código de folga para a passagem do escudo.

HAN
Transmissão começando.

Leia e Chewbacca ouvem tensamente como o som de uma velocidade alta
a transmissão começa.

LEIA
Agora descobrimos se esse código vale o preço que pagamos.

HAN
Vai funcionar. Vai funcionar.

Chewie lamenta nervosamente. Luke olha para o enorme super estrela destruidor
que aparece cada vez maior diante deles.

LUKE
Vader está naquele navio.

HAN
Agora não fique nervoso, Luke. Existem muitos navios de comando. Manter
sua distância, Chewie, mas não parece que você está tentando manter
sua distância.

Chewie late uma pergunta.

HAN
Eu não sei.  Voe casual.

LUKE
Estou colocando em risco a missão. Eu não deveria ter vindo.

HAN
É a sua imaginação, garoto. Vamos. Vamos manter um pouco de otimismo aqui.

Chewie late suas preocupações à medida que o Super Star Destroyer cresce
a janela.

DESTRUÍDO DE ESTRELA DE 60 INT VADER - PONTE

Lorde Vader está de volta para nós, olhando pela janela a Estrela da Morte.
Agora, alguma vibração sentida apenas por ele faz com que ele se vire. Depois de um momento
de quietude, ele caminha pela fila de controladores para onde ADMIRAL
O PIETT está debruçado sobre a tela de rastreamento do controlador que vimos
mais cedo. Piett endireita a abordagem de Vader.

VADER
Para onde está indo esse ônibus?

PIETT ( no comlink )
Shuttle Tydirium, qual é a sua carga e destino?

VOZ PILOTO ( HAN ) ( filtrada )
Peças e equipe técnica para a lua da floresta.

O Bridge Commander procura Vader por uma reação.

VADER
Eles têm uma autorização de código?

PIETT
É um código mais antigo, senhor, mas dá uma olhada. Eu estava prestes a limpá-los.

Vader olha para cima, enquanto sente a presença de Luke.

PIETT
Devo segurá-los?

VADER
Não. Deixe-os comigo. Eu vou lidar com eles eu mesmo.

PIETT ( surpreendido )
Como quiser, meu senhor.
( para controlador )
Continue.

Piett assente no controlador, que liga seu comlink.

61 FECHAMENTO IMPERIAL INTERNO - COCKPIT

O grupo espera tensamente.

HAN
Eles não estão fazendo isso, Chewie.

CONTROLADOR ( filtrado )
Shuttle Tydirium, a desativação do escudo começará imediatamente.
Siga seu
curso atual.

Todo mundo respira um suspiro de alívio. Todos, menos Luke, que parece
preocupado. Chewie late.

HAN
OK! Eu te disse que ia funcionar. Sem problemas.

62 ESPAÇO EXT - FECHAMENTO IMPERIAL ROUBADO - ENDOR

O ônibus imperial roubado se move em direção à lua verde do santuário.

63 SITE EXT FOREST LANDING - ENDOR

O ônibus imperial roubado fica em uma clareira do escuro da lua,
floresta primitiva, anã pelas antigas árvores altas.

Em uma colina adjacente, o contingente rebelde com capacete sobe
trilha íngreme. Leia e Han estão um pouco à frente de Chewie e Luke. O
tropas da equipe de ataque seguem, com Artoo e Threepio
trazendo a parte traseira. Artoo emite um sinal sonoro.

À frente, Chewie e Leia alcançam uma crista na colina e caem de repente
no chão, sinalizando para o resto do grupo parar. Han e Luke
rasteje para dar uma olhada.

THREEPIO
Eu te disse que era perigoso aqui.

SEU POV. Não muito abaixo deles, dois SCOUTS IMPERIAIS estão vagando
através de arbustos no vale abaixo. Seus dois BICKES DE ROCKET estão estacionados
perto.

LEIA
Vamos tentar dar a volta?

HAN
Vai levar tempo. Toda essa festa será por nada se eles nos virem.

Leia moções para a equipe ficar parada, então ela, Han, Luke e Chewie
comece silenciosamente.

64 EXT FOREST CLEARING - CAMPSITE

Os quatro amigos seguem para a beira da clareira não muito longe
dos dois batedores imperiais.

HAN
Chewie e eu vamos cuidar disso. Você fica aqui.

LUKE
Silenciosamente, pode haver mais deles por aí.

HAN ( sorrisos )
Ei ... sou eu.

Han e Chewie se viram e começam pelos arbustos em direção aos batedores.
Luke e Leia trocam sorrisos.

Han se aproxima atrás de um dos batedores, pisa em um galho e o batedor
gira, derrubando Han em uma árvore. O batedor grita por seu companheiro.

SCOUT # 1
Vá em busca de ajuda! Vai!

O segundo batedor pula em sua bicicleta de velocidade e decola, mas Chewie
dispara sua arma laser de besta, fazendo com que o batedor
colidir com uma árvore. Han e Scout # 1 estão em uma briga empolgante.

LUKE ( sarcástico )
Ótimo. Vamos.

Luke começa a brigar, seguido por Leia com sua pistola a laser
desenhado. Enquanto correm pelos arbustos, Leia para e aponta para onde
mais dois batedores estão sentados em suas motos de velocidade, com um desocupado
bicicleta estacionada nas proximidades.

LEIA
Lá! Mais dois deles!

LUKE
Eu os vejo. Espere, Leia!

Mas Leia não o ouve e corre para a bicicleta speeder restante. Ela
começa e decola quando Luke pula na bicicleta atrás dela.

LUKE ( apontando para os controles )
Rápido! Atolem seu comlink. Interruptor central!

Luke e Leia aceleram para a densa folhagem em perseguição a quente, mal
evitando duas árvores enormes.

HAN
Ei, espera! Ahhh!

Ele vira o batedor restante para o chão.

65 EXT FOREST - A BASE DE BICICLETA

Os dois batedores imperiais em fuga têm uma boa liderança como Luke e Leia
perseguir através das árvores gigantes a 200 milhas por hora, o fogo de
o canhão a laser da bicicleta atingindo inofensivamente perto dos alvos em movimento.

LUKE
Aproxime-se!

Leia arma, fechando a lacuna, enquanto os dois batedores se desviam imprudentemente
através de uma estreita lacuna nas árvores. Uma das motos raspa uma árvore,
diminuindo a velocidade do batedor.

LUKE
Fique ao lado desse!

Leia puxa sua bicicleta de velocidade tão perto da bicicleta do batedor que a
palhetas de direção SCRAPE ruidosamente. Luke pula de sua bicicleta para a traseira de
o batedor, agarra o guerreiro imperial em volta do pescoço e o vira
fora da bicicleta, em um tronco de árvore grosso. Luke ganha o controle da bicicleta
e segue Leia, que avançou. Eles arrancam depois do
escoteiro restante.

LUKE
Pegue ele!

A perseguição por excesso de velocidade passa mais duas cenas importantes. Esses dois balanços
em perseguição, perseguindo Luke e Leia, disparando com seu laser
canhão. Os dois rebeldes olham para trás, assim como a bicicleta de Luke leva
golpe de olhar.

LUKE ( indicando o que está à frente )
Continue nessa! Eu vou levar esses dois!

Com Leia atirando à frente, Luke de repente bate as palhetas da direção
o modo de frenagem. A bicicleta de Luke é um borrão para os dois escoteiros perseguidores como
eles passam por ele de ambos os lados. Luke bate sua bicicleta para a frente e
começa a disparar, tendo trocado de lugar com seus perseguidores em um
maneira de segundos. O objetivo de Luke é bom e a bicicleta de um batedor é destruída
fora de controle. Explode contra um tronco de árvore.

A coorte do batedor dá uma olhada no flash e muda para
turbo drive, indo ainda mais rápido. Luke continua em seu rabo.

MUITO À FRENTE, Leia e o primeiro batedor estão fazendo um slalom de alta velocidade
através dos troncos que lidam com a morte. Agora Leia aponta sua bicicleta para o céu e
sai da vista.

O batedor fica confuso, incapaz de ver seu perseguidor. De repente, Leia
mergulha sobre ele de cima, disparando canhões. A bicicleta do batedor leva
um golpe de olhar.

Leia se muda para o lado dele. O batedor a vê ao lado dele, alcança
para baixo e puxa uma pistola. Antes que Leia possa reagir, o batedor
explodiu sua bicicleta, enviando-a para fora de controle. Leia mergulha enquanto sua bicicleta
explode contra uma árvore. O batedor feliz olha para a explosão.
Mas quando ele avança novamente, ele está em rota de colisão com um
árvore caída gigante. Ele pisou no freio sem sucesso e desaparece em um
conflagração.

OUTRA PARTE DA FLORESTA: Lucas e o último batedor restante continuam
sua perseguição pelas árvores. Agora Luke se aproxima. O
o escoteiro responde batendo sua bicicleta na casa de Luke. Uma árvore caída forma um
ponte através do caminho. O batedor fecha. Luke passa por cima
e bate a bicicleta no batedor. Ambos os pilotos olham para o futuro - um
tronco largo aparece diretamente no caminho de Luke, mas a bicicleta do batedor ao lado
ele torna quase impossível para ele evitá-lo. Luke bancos com todos
seu poder, inclinado quase na horizontal sobre a bicicleta do batedor, e é capaz
para fazer isso, apenas cortando a árvore. Quando ele endireita, ele e o
escoteiro descobrir que suas duas motos trancaram as palhetas dianteiras e são
movendo-se como um.

Outra grande árvore aparece no caminho de Lucas. Ele reage instintivamente e
mergulha em sua bicicleta. As duas motos se separam um segundo antes de Luke
explode contra uma árvore. O batedor varre e volta para encontrar
Lucas.

Lucas se levanta da vegetação rasteira enquanto o batedor o carrega e
abre fogo com seu canhão a laser. Luke acende sua espada a laser e
começa a desviar os parafusos. A bicicleta do batedor continua chegando e
parece que em um segundo cortará Luke ao meio. No último instante,
Luke se afasta e corta as pás de controle da bicicleta com um poderoso
barra. A bicicleta do batedor começa a estremecer, depois, lançando e rolando,
sobe para bater diretamente em uma árvore em uma bola gigante de fogo.

66 CAMPSITO EXT SCOUT - FLORESTA

Han, Chewie e os dróides, junto com o resto do esquadrão, esperam
ansiosamente na clareira. A tela do radar de Artoo fica fora de seu domicílio
cabeça e gira, examinando a floresta. Ele emite um sinal sonoro.

THREEPIO
General Solo, alguém está vindo. Oh!

Han, Chewie e o resto do esquadrão levantam suas armas.

Luke sai da folhagem para encontrar as armas treinadas nele. Ele é
cansado demais para se importar. Ele se joga em uma pedra e olha em volta.

HAN
Lucas! Cadê a Leia?

LUKE ( preocupado )
O que? Ela não voltou?

HAN
Eu pensei que ela estava com você.

LUKE
Nós nos separamos.

Luke e Han trocam um olhar silencioso e sombrio. Luke se levanta cansadamente.

LUKE
Ei, é melhor irmos procurá-la.

Han assente e sinaliza para um oficial rebelde.

HAN
Leve o esquadrão à frente.  Nos encontraremos no gerador de blindagem às 0300.

LUKE
Vamos, Artoo.  Vamos precisar dos seus scanners.

Luke, Chewie, Han e os dróides se movem em uma direção como o
esquadrão prossegue em outro.

THREEPIO
Não se preocupe, mestre Luke.  Nós sabemos o que fazer.

Eles se movem para a floresta.

THREEPIO ( para Artoo )
E você disse que era bonito aqui. Ugh!

67 EXT FOREST CLEARING - SITE DE GALO DE LEIA

Um rostinho peludo estranho com enormes olhos negros entra lentamente
vista. A criatura é um EWOK, chamado WICKET. Ele parece um pouco
intrigado e cutucou Leia com uma lança. A princesa geme; isso
assusta a bola atarracada e ele a cutuca novamente. Leia senta-se
e olha para o Ewok de três pés de altura. Ela tenta descobrir onde
ela é e o que aconteceu. Suas roupas estão rasgadas; ela está machucada e
desgrenhado.

O Ewok pula e pega uma lança de um metro e meio de comprimento, que ele segura em uma
posição defensiva. Leia o observa enquanto ele circula com cautela e começa
cutucando-a com o ponto afiado da lança.

LEIA
Pare com isso!

Ela se levanta e o Ewok se afasta rapidamente.

LEIA
Eu não vou te machucar.

Leia olha em volta para a densa floresta e para os restos carbonizados de
sua bicicleta de velocidade, depois se senta, com um suspiro, em um tronco caído.

LEIA
Bem, parece que estou preso aqui. O problema é que não sei onde aqui
é.

Ela coloca a cabeça nas mãos para esfregar um pouco da dor de
a queda dela. Ela olha para o pequeno vigilante Ewok e dá um tapinha no tronco
ao lado dela.

LEIA
Bem, talvez você possa me ajudar. Vamos, sente-se.

Wicket segura sua lança com cautela e rosna para ela como um filhote. Leia
dá um tapinha no log novamente.

LEIA
Prometo que não vou te machucar. Agora venha aqui.

Mais rosnados e guinchos da pequena criatura urso.

LEIA
Tudo certo. Você quer algo para comer?

Ela tira um pedaço de comida do bolso e oferece a ele.
Wicket dá um passo para trás, depois bate a cabeça e se move com cautela
em direção a Leia, conversando em sua linguagem estridente de Ewok.

LEIA
Está certo. Vamos. Hummm?

Cheirando a comida curiosamente, o Ewok vem em direção a Leia e senta no
log ao lado dela. Ela tira o capacete e a pequena criatura pula
de volta, assustado novamente. Ele corre ao longo do tronco, apontando sua lança para ela
e batendo uma faixa azul. Leia segura o capacete para ele.

LEIA
Olha, é um chapéu. Não vai te machucar. Veja. Você é um nervoso
coisinha, não é?

Tranquilizado, Wicket abaixa a lança e sobe de volta no tronco, chegando
investigar o capacete. De repente, seus ouvidos se animam e ele começa a
cheirar o ar. Ele olha em volta com cautela, sussurrando um aviso de Ewokese
para Leia.

LEIA
O que é isso?

De repente, um raio laser sai da folhagem e explode no tronco
ao lado de Leia. Leia e Wicket rolam para trás do tronco, escondendo
atrás dele. Leia mantém sua própria arma laser pronta, enquanto Wicket desaparece
embaixo do tronco. Outro tiro, e ainda não havia visão de ninguém no
floresta. Então Leia sente algo e se vira para encontrar um grande IMPERIAL
SCOUT em pé sobre ela com a arma apontada para a cabeça dela. Ele alcança
fora da mão dele pela arma dela.

SCOUT # l
Congelar!  Vamos, levante-se!

Ela entrega a arma, quando um segundo batedor emerge da folhagem
na frente do tronco.

SCOUT # 1
Vá pegar sua carona e leve-a de volta à base.

SCOUT # 2
Sim senhor.

O segundo batedor começa em direção a sua bicicleta, enquanto Wicket se agachava sob o
log, estende sua lança e bate no primeiro batedor na perna. O batedor
pula e solta uma exclamação e olha para Wicket, intrigado.
Leia agarra um galho e o nocauteia. Ela mergulha na pistola a laser dele,
e o segundo batedor, agora em sua bicicleta, decola. Leia dispara e
bate na bicicleta que escapa, fazendo com que ela colidir com o primeiro batedor
bicicleta, que voa de ponta a ponta e explode. A floresta está quieta uma vez
Mais. Wicket enfia a cabeça confusa por trás do tronco e considera
Leia com � novo respeito. Ele murmura sua admiração. Leia se apressa, olhando
o tempo todo, e move a pequena criatura gordinha para dentro do
folhagem densa.

LEIA
Vamos lá, vamos sair daqui.

À medida que se movem para a folhagem, Wicket assume a liderança. Ele grita e
puxa Lia para segui-lo.

68 INT DEATH STAR - CORREDOR À TORRE DO EMPEROR

Darth Vader caminha pelo corredor até a Torre do Imperador e
elevador. A guarda privada do imperador pisa no caminho de Vader.

GUARDA
Pare! O imperador não deseja ser perturbado no momento.

VADER
( erguendo a mão enluvada para os dois guardas e sufocando-os com os
Força )
O imperador vai me ver agora!

GUARDA
( repetindo o comando de Vader )
O imperador verá você agora.

69 TOWER DO IMPERADOR INT - QUARTO DE TRONE

Dois guardas imperiais vermelhos vigiam o elevador quando a porta se abre
para revelar Vader. Vader entra na misteriosa e agourenta sala do trono. É
parece estar vazio. Seus passos ecoam quando ele se aproxima do trono. Ele
espera, absolutamente imóvel. O Imperador senta-se de costas para o Escuro
Senhor.

EMPEROR
Eu disse para você permanecer no navio de comando.

VADER
Uma pequena força rebelde penetrou no escudo e pousou em Endor.

EMPEROR ( sem surpresa )
Sim eu conheço.

VADER ( após uma batida )
Meu filho está com eles.

EMPEROR ( muito legal )
Você tem certeza?

VADER
Eu o senti, meu mestre.

EMPEROR
Estranho, que eu não tenho. Gostaria de saber se seus sentimentos sobre esse assunto são
claro, Senhor
Vader.

Vader sabe o que está sendo perguntado.

VADER
Eles são claros, meu mestre.

EMPEROR
Então você deve ir à Lua do Santuário e esperar por eles.

VADER ( cético )
Ele virá até mim?

EMPEROR
Eu previ isso. Sua compaixão por você será sua ruína. Ele vai
venha até você e
então você o trará diante de mim.

VADER ( arcos )
Como você deseja.

O Lorde das Trevas sai da sala do trono.

70 EXT FOREST CLEARING - SITE DE GALO DE LEIA

Han, Luke, Chewie e os dois dróides estão espalhados à medida que se movem
através da folhagem pesada perto da clareira onde vimos Leia pela última vez.
Luke encontra o capacete de Leia, pega com uma expressão de preocupação.

HAN ( OS )
Lucas! Lucas!

Luke corre com o capacete para onde Han encontrou os destroços carbonizados
de uma bicicleta de velocidade na grama.

THREEPIO
Oh, mestre Luke.

LUKE
Há mais dois speeders destruídos lá atrás. E eu encontrei isso.

Ele joga o capacete para Han.

THREEPIO
Receio que os sensores de Artoo não encontrem vestígios da princesa Leia.

HAN ( gravamente )
Espero que ela esteja bem.

Chewbacca rosna, cheirando o ar, então, com uma casca, empurra
através da folhagem.

HAN
Chewie? O que? Chewie!

Os outros correm para acompanhar o gigante Wookiee. Enquanto ele avança,
Artoo assobia nervosamente.

71 EXT FOREST - FOLIAGEM DE DENSA

O grupo chegou a uma pausa na vegetação rasteira. Chewie caminha até um
estaca alta plantada no chão. Há um animal morto pendurado em
isto.

HAN
Ei, eu não entendo.

O resto do grupo se junta ao Wookiee em torno da estaca.

HAN ( cont )
Não, é apenas um animal morto, Chewie.

Chewie não pode resistir. Ele alcança a carne.

LUKE
Chewie, espere!  Não!

Tarde demais. O Wookiee já puxou o animal da estaca.
SPROOING! O grupo se vê pendurado de cabeça para baixo em uma rede Ewok,
suspenso acima da clareira. Artoo deixa escapar uma série selvagem de
bipes e assobios, e Chewie uiva seu arrependimento. Seus corpos são um
desordenar na rede. Han tira uma pata Wookiee da boca.

HAN
Bom trabalho. Ótimo, Chewie! Ótimo! Sempre pensando com o estômago.

LUKE
Você vai ter calma? Vamos descobrir uma maneira de sair disso
coisa.
( tentando libertar um braço )
Han, você pode alcançar meu sabre de luz?

HAN
Sim claro.

Artoo está no ponto mais baixo da rede. Ele estende seu corte
apêndice e começa a cortar na rede. Han está tentando apertar um
passe por Threepio para chegar ao sabre de luz de Luke. A rede continua a
girar.

THREEPIO
Artoo, não tenho certeza se é uma boa ideia. É um dro-o-
op!!

Artoo cortou e todo o grupo cai da rede,
colidindo com o chão. Ao recuperar os sentidos e sentar-se, eles
perceba que eles estão cercados por dezenas de Ewoks, cada um brandindo um longo
lança.

HAN
Wha--?  Ei!  Aponte essa coisa para outro lugar.

Han empurra a lança empunhada por TEEBO para fora de seu rosto e um segundo Ewok
guerreiro vem discutir com Teebo. A lança retorna ao rosto de Han.
Ele agarra com raiva e começa a pegar sua pistola a laser.

HAN
Ei!

LUKE
Han, não. Vai ficar tudo bem.

Os Ewoks enxameiam através deles e confiscam suas armas. Luke deixa
eles pegam o sabre de luz dele. Chewie rosna nas criaturas peludas.

LUKE
Chewie, dê a eles sua besta.

Artoo e Threepio estão apenas se desembaraçando. Threepio fica livre
da rede e senta-se, sacudido.

THREEPIO
Oh, minha cabeça. Oh meu Deus!

Quando os Ewoks veem Threepio, eles soltam um suspiro e conversam entre
eles mesmos. Threepio fala com eles em sua língua nativa. O Ewok
mais perto dele deixa cair a lança e se prostra diante do dróide. No
um momento, todos os Ewoks seguiram o exemplo. Chewie deixa escapar um intrigado
casca. Han e Luke consideram as criaturas curvadas maravilhadas. Os Ewoks
comece a cantar no Threepio.

LUKE
Você entende alguma coisa que eles estão dizendo?

THREEPIO
Oh, sim, mestre Luke!  Lembre-se de que sou fluente em mais de seis milhões
formas de
comunicação.

HAN
O que você está dizendo a eles?

THREEPIO
Olá, eu acho... Eu poderia estar enganado. Eles estão usando um primitivo muito
dialeto.  Mas
Eu acredito que eles pensam que eu sou algum tipo de deus.

Chewbacca e Artoo acham isso muito engraçado. Han e Luke trocam
"o que vem depois?" parece.

HAN
Bem, por que você não usa sua influência divina e nos tira disso?

THREEPIO
Peço desculpas, general Solo, mas isso não seria adequado.

HAN
Adequado?!

THREEPIO
É contra a minha programação personificar uma divindade.

Han se move em direção a Threepio ameaçadoramente.

HAN
Por que você--

Várias lanças de Ewoks são empurradas no rosto de Han na afronta à sua
Deus. Os Ewoks se mudam para proteger seu deus e Han é cercado por um
ameaçador círculo de lanças, tudo voltado para ele. Ele levanta as mãos
placantemente.

HAN
Meu erro. Ele é um velho amigo meu.

72 EXT FOREST - SÉRIE DE TIRAS

Uma procissão de Ewoks serpenteia pela floresta cada vez mais escura. Deles
prisioneiros - Han, Luke, Chewie e Artoo - estão amarrados a postes longos e
envolto em videiras, parecidas com casulos.

Cada poste é carregado nos ombros de vários Ewoks. Atrás do
cativos, Threepio é carregado em uma ninhada, como um rei, pelo
criaturas restantes.

73 EXT FOREST WALKWAY - LUA FLORESTA

A procissão se move ao longo de uma passarela de madeira trêmula e estreita, no alto do
árvores gigantes. Para no final da passarela, que cai em
nada. Do outro lado do abismo, há uma vila de cabanas de barro
e passarelas precárias, presas às árvores gigantes. O líder Ewok leva
segura uma videira longa e oscila até a praça da vila; o outro
Os Ewoks seguem o exemplo.

74 QUADRO DE VILA EXT EWOK

A procissão segue para a praça da vila. Mãe Ewoks
ajuntam seus bebês e correm para suas cabanas ao ver o
recém-chegados. O grupo para antes da maior cabana.

Han, Luke, Chewie e Artoo ainda estão ligados aos seus pólos. Han é
colocado em um espeto acima do que parece uma churrasqueira e os outros
estão encostados em uma árvore próxima. A ninhada / trono de Threepio é gentilmente
colocado perto do poço. Ele assiste com fascínio extasiado. Han, Luke e
Chewie são menos do que fascinados.

HAN
Eu tenho um mau pressentimento sobre isso.

Chewie rosna sua preocupação.

De repente, toda atividade para quando LOGRAY, o curandeiro tribal, vem
fora da grande cabana. Ele examina os cativos com cuidado, vai se juntar
Threepio, cujo trono foi colocado em uma plataforma elevada. A
Ewok maior, de cabelos grisalhos, CHEFE CHIRPA, está examinando o sabre de luz de Luke
com grande curiosidade.

Logray fala com Threepio e a assembléia de Ewoks confusos, apontando
aos prisioneiros amarrados às apostas. Os Ewoks começam a encher o poço
sob Han com lenha.

HAN
O que ele disse?

THREEPIO
Estou um pouco envergonhado, general Solo, mas parece que você deve ser o
prato principal em um
banquete em minha homenagem.

A bateria começa a bater e todas as cabeças peludas se voltam para a cabana grande.
Leia surge, vestindo um vestido de pele de animal. Ela vê o que está acontecendo
no mesmo momento os prisioneiros a veem.

HAN e LUKE
Leia!

Enquanto ela se move em direção a eles, os Ewoks bloqueiam seu caminho com lanças levantadas.

LEIA
Oh!

THREEPIO
Sua Alteza Real.

Artoo e Chewie conversam com as boas-vindas. Leia olha para o
Ewoks e suspiros montados.

LEIA
Mas estes são meus amigos. Threepio, diga a eles que eles devem ser libertados.

Threepio fala com Chirpa e Logray, que ouvem e balançam a cabeça
negativamente. O curandeiro gesticula em direção aos prisioneiros e latidos
algumas ordens. Vários Ewoks pulam e empilham mais madeira no churrasco
com vigor. Leia negocia olhares frenéticos com Luke e Han .

HAN
De alguma forma, tive a sensação de que não nos ajudou muito.

LUKE
Threepio, diga a eles se eles não fizerem o que você deseja, você ficará com raiva
e use sua mágica.

THREEPIO
Mas mestre Luke, que mágica? Eu não poderia -

LUKE
Apenas diga a eles.

Threepio fala com os Ewoks. Os Ewoks estão perturbados. Etapas da bandeja de logon
para a frente e desafia Threepio. Luke fecha os olhos e começa a
concentrar.

THREEPIO
Você vê, mestre Luke; eles não acreditaram em mim. Somente...

Agora a ninhada / trono, com Threepio sentado sobre ela, sobe do
chão. A princípio, Threepio não percebe e continua falando.

THREEPIO
... como eu disse que não. O que está acontecendo! Oh! Oh céus!
Oh!

Os Ewoks recuam aterrorizados do trono flutuante. Agora Threepio
começa a girar como se estivesse em um banquinho giratório, com Threepio
chamando em pânico total a situação dele.

THREEPIO
Coloque-me no chão! He-e-elp! Mestre Luke! Artoo! Alguém, alguém, ajude!
Mestre Luke, Artoo! Artoo, rápido! Faça alguma coisa, alguém! Oh! Ohhh!

O chefe Chirpa grita ordens para os Ewoks encolhidos. Eles se apressam e
libertar os prisioneiros ligados. Luke e Han envolvem Leia em um grupo
abraço. Luke percebe o Threepio girando, com Artoo apitando para
ele, e lentamente abaixa o dróide de ouro e o trono no chão.
Logray ordena que o pequeno dróide seja cortado. Artoo cai no chão.
Quando os Ewoks o colocaram na posição vertical, o pequeno dróide está lutando louco. Artoo
emite um sinal sonoro no Ewok mais próximo e começa a persegui-lo,
finalmente chegando perto o suficiente para zapear com uma carga elétrica. O
Ewok pula dois pés no ar e foge, gritando. Um pequeno grupo
dos Ewoks cercam o gigante Wookiee, coçando a cabeça e
maravilhado com sua altura.

THREEPIO
Oh, oh, oh, oh! Graças a Deus.

LUKE
Obrigado, Threepio.

THREEPIO ( ainda abalado )
EU...Eu nunca soube que tinha em mim.

75 INT CHEFE'S HUT - CONSELHO DE IDOSOS

Um fogo brilhante dança no centro da sala espartana e de teto baixo,
criando um caleidoscópio de sombras nas paredes. Ao lado, um
grupo de dez anciãos Ewok flanqueia o chefe Chirpa, que está sentado em seu trono.
Os rebeldes sentam-se ao longo das paredes da cabana, com Threepio entre os
dois grupos e Wicket e Teebo para um lado.

Threepio está no meio de um longo discurso animado no Ewok's
língua nativa estridente. Os Ewoks ouvem atentamente e ocasionalmente
comentários murmurados um para o outro. Threepio aponta várias vezes no
Grupo rebelde e pantomimas uma breve história da Guerra Civil Galáctica,
imitando a explosão e os sons de foguetes, imitando os caminhantes imperiais.
Ao longo da longa conta, certos nomes familiares são distinguíveis
em inglês: Princesa Leia, Artoo, Darth Vader, Estrela da Morte, Jedi, Obi-
Wan Kenobi. Artoo começa a apitar animadamente em Threepio.

THREEPIO
Sim, Artoo. Eu estava chegando a isso.

Threepio continua com: Millennium Falcon, Cloud City, Vader, Han
Solo, carbonita, Sarlacc, trazendo a história até os dias atuais.

No final, o chefe, Logray e os anciãos conferem, depois acenam com a cabeça
acordo. O chefe se levanta e faz um pronunciamento.

A bateria começa a soar, e todos os Ewoks ficam com uma grande alegria
e gritos.

HAN
O que está acontecendo?

LEIA
Eu não sei.

Luke tem compartilhado a alegria com um rosto sorridente, mas agora algo
passa como uma nuvem negra através de sua consciência. Os outros não
aviso prévio.

THREEPIO
Maravilhoso! Agora fazemos parte da tribo.

Vários dos ursinhos de pelúcia correm e abraçam os rebeldes.

HAN
Exatamente o que eu sempre quis.

Chewbacca está sendo abraçado com entusiasmo por um Ewok, enquanto Wicket
se apega à perna de Han.

HAN ( risadas )
Bem, ajuda curta é melhor do que nenhuma ajuda, Chewie.
( para postigo )
Obrigado. OK.

THREEPIO
Ele diz que os batedores vão nos mostrar o caminho mais rápido para o escudo
gerador.

Chewie late. Luke foi para a parte de trás da cabana. Agora ele vagueia
do lado de fora para o luar. Leia percebe e segue.

HAN
Boa. Quão longe é isso? Pergunte a ele. Também precisamos de alguns suprimentos frescos. E tente
e pegue nossas armas de volta.

Han puxa Threepio de volta enquanto ele continua tentando traduzir.

HAN ( cont )
E se apresse, sim? Eu não tenho o dia todo.

76 VILA EXT EWOK - NOITE

A passarela está deserta agora. As janelas das cabanas brilham e
tremulação dos fogos lá dentro. Os sons da floresta enchem os macios
ar noturno. Luke se afastou da cabana do chefe e se levantou
olhando para a Estrela da Morte. Leia o encontra assim.

LEIA
Luke, o que há de errado?

Luke se vira e olha para ela por um longo momento.

LUKE
Leia ... você se lembra da sua mãe? Sua verdadeira mãe?

LEIA
Só um pouquinho. Ela morreu quando eu era muito jovem.

LUKE
O que você lembra?

LEIA
Apenas ... imagens, realmente. Sentimentos.

LUKE
Conte-me.

LEIA
( um pouco surpreso com sua insistência )
Ela era muito bonita. Tipo, mas ... triste.
( procura )
Por que você está me perguntando tudo isso?

Ele desvia o olhar.

LUKE
Não tenho lembrança da minha mãe. Eu nunca a conheci.

LEIA
Luke, me diga. O que está incomodando você?

LUKE
Vader está aqui ... agora, nesta lua.

LEIA ( alarmado )
Como você sabe?

LUKE
Eu senti a presença dele. Ele veio atrás de mim. Ele pode sentir quando estou perto.
É por isso que tenho que ir.
( enfrentando-a )
Enquanto eu ficar, estou colocando em risco o grupo e nossa missão aqui.
( beat )
Eu tenho que enfrentá-lo.

Leia está perturbada, confusa.

LEIA
Por quê?

Luke se aproxima e seu jeito é gentil. E muito calmo.

LUKE
Ele é meu pai.

LEIA
Seu pai?

LUKE
Tem mais. Não será fácil para você ouvir, mas você deve. Se eu
não volte, você é a única esperança para a Aliança.

Leia está muito perturbada com isso. Ela se afasta, como se quisesse negar.

LEIA
Luke, não fale assim. Você tem um poder que eu - eu não entendo e
nunca poderia ter.

LUKE
Você está errado, Leia. Você também tem esse poder. Com o tempo você aprenderá a
use-o como eu tenho. A força é forte na minha família. Meu pai tem
isto...Eu tenho ... e ... minha irmã tem.

Leia olha nos olhos dele. O que ela vê lá a assusta. Mas ela
não se afasta. Ela começa a entender.

LUKE
Sim. É você Leia.

LEIA
Eu sei. De alguma forma...Eu sempre soube.

LUKE
Então você sabe por que eu tenho que enfrentá-lo.

LEIA
Não! Luke, fuja, muito longe. Se ele pode sentir sua presença, então saia
este lugar. Eu gostaria de poder ir com você.

LUKE
Não, você não. Você sempre foi forte.

LEIA
Mas, por que você deve confrontá-lo?

LUKE
Porque ... há bom nele. Eu senti isso. Ele não vai me entregar para
o imperador. Eu posso salvá-lo. Eu posso devolvê-lo ao lado bom. eu
tem que tentar.

Eles se abraçam e se olham, irmão e irmã.

Leia retém suas lágrimas enquanto Luke lentamente a deixa ir e se afasta. Ele
desaparece na passarela que leva para fora da vila. Leia, banhada
ao luar, observa-o partir quando Han sai da cabana do chefe e
vem até ela. Leia está chorando, seu corpo tremendo. Ele percebe apenas
agora que ela está chorando.

HAN
Ei, o que está acontecendo?

Leia tenta sufocar seus soluços e enxuga os olhos.

LEIA
Nada. Eu só quero ficar sozinha por um tempo.

HAN ( emagrecer )
Nada?  Vamos, me diga.  O que está acontecendo?

Ela olha para ele, lutando para se controlar.

LEIA
EU...Eu não posso te contar.

HAN ( perde a paciência )
Você contou a Luke? É isso que você poderia dizer?

LEIA
EU...

HAN
Ahhh...

Ele começa a se afastar, exasperado, depois para e volta para ela.

HAN
Eu sinto Muito.

LEIA
Me abrace.

Han a reúne com força em seu abraço protetor.

77 EXT FOREST - PLATAFORMA DE ESCADA IMPERIAL

Um ônibus imperial flutua da Estrela da Morte e pousa
graciosamente na enorme plataforma.

Agora, um caminhante imperial se aproxima da plataforma da escuridão de
a floresta. Todo o posto avançado - plataforma, caminhantes, militares - parece
particularmente ofensivo no meio dessa beleza verdejante.

78 PLATAFORMA DE TERRA IMPERIAL EXT - DECK INFERIOR

Darth Vader desce a rampa do ônibus espacial para a plataforma, para
um elevador e aparece em uma rampa em um nível mais baixo. Ele caminha em direção a
outra saída da rampa e é recebida por dois soldados e um comandante com Luke,
em ligantes, no centro deles. Os jovens Jedi olham para Vader com
calma completa.

COMANDANTE
Este é um rebelde que se rendeu a nós. Embora ele negue, eu
acredito que pode haver mais deles, e peço permissão para conduzir
uma pesquisa adicional da área.

O comandante estende a mão, revelando o sabre de luz de Luke.

COMANDANTE
Ele estava armado apenas com isso.

Vader olha para Luke, se vira e enfrenta o comandante, pegando o
sabre de luz da mão do comandante.

VADER
Bom trabalho, comandante. Nos deixe. Conduza sua pesquisa e traga a sua
companheiros para mim.

COMANDANTE
Sim meu senhor.

O oficial e as tropas se retiram. Vader e Luke são deixados sozinhos
na beleza estranhamente tranquila do lugar. Os sons da floresta
filtre sobre eles.

VADER
O imperador estava esperando você.

LUKE
Eu sei pai.

VADER
Então, você aceitou a verdade.

LURA
Aceitei a verdade de que você já foi Anakin Skywalker, meu pai.

VADER ( virando-se para enfrentá-lo )
Esse nome não tem mais significado para mim.

LUKE
É o nome do seu verdadeiro eu. Você só esqueceu. Eu sei lá
é bom em você. O imperador não o expulsou completamente de você. Isso é
por que você não poderia me destruir. É por isso que você não vai me trazer para o seu
Imperador agora.

Vader olha de Luke para o sabre de luz em sua própria luva preta
mão. Ele parece refletir sobre as palavras de Luke.

VADER ( indicando sabre de luz )
Vejo que você construiu um novo sabre de luz.

Vader acende o sabre de luz e o segura para examinar seu zumbido,
lâmina brilhante.

VADER
Suas habilidades estão completas. De fato, você é poderoso, como o Imperador
previsto.

Eles ficam de pé por um momento, o Vader apaga o sabre de luz.

LUKE
Venha comigo.

VADER
Obi-Wan pensou uma vez como você.

Luke se aproxima de Vader e depois para. Vader ainda está.

VADER
Você não conhece o poder do lado sombrio. Eu devo obedecer meu mestre.

LUKE
Eu não vou me virar ... e você será forçado a me matar.

VADER
Se esse é o seu destino.

LUKE
Procure seus sentimentos, pai. Você não pode fazer isso. Eu sinto o conflito
dentro de você. Solte
do seu ódio.

VADER
É tarde demais para mim, filho. O imperador mostrará a verdadeira natureza
da força. Ele é
seu mestre agora.

Vader sinaliza para alguns stormtroopers distantes. Ele e Luke estão olhando
um no outro por um longo momento.

LUKE
Então meu pai está realmente morto.

79 EXT ENDOR - GENERADOR DE ESCUDO DE VIDRO

Han, Leia, Chewbacca, os dróides, Wicket e outro batedor do Ewok,
PAPLOO, esconda-se em uma cordilheira com vista para o enorme escudo imperial
gerador. Na base do gerador há um pouso imperial
plataforma. Leia estuda a instalação.

LEIA
A entrada principal do bunker de controle fica do outro lado da
plataforma de pouso. Este
não vai ser fácil.

HAN
Ei, não se preocupe. Chewie e eu entramos em muitos lugares com mais força
guardado que isso.

Wicket e Paploo estão conversando no idioma Ewok. Eles falam com
Threepio.

LEIA
O que ele está dizendo?

THREEPIO
Ele diz que há uma entrada secreta do outro lado da cordilheira.

ESPAÇO EXT - LINHA DE REBEL

A vasta frota paira no espaço perto de um planeta azul. Uma estrela rebelde gigante
O cruzador está na frente, mas agora o Millennium Flacon ruge até um
ponto à frente, minúsculo em comparação.

81 FALCON DE MILÊNIO INT - COCKPIT

Lando está no assento do piloto. Seu copiloto alienígena, NIEN NUNB, leva alguns
acostumando-se com os arredores familiares do cockpit do Falcon. Lando
fala em seu comlink.

LANDO
Almirante, estamos em posição. Todos os lutadores foram responsáveis.

ACKBAR ( VO )
Prossiga com a contagem regressiva. Todos os grupos assumem coordenadas de ataque.

Lando se vira para seu copiloto estranho.

LANDO
Não se preocupe, meus amigos estão lá em baixo. Eles terão esse escudo
na hora...
( para si mesmo )
ou esta será a ofensiva mais curta de todos os tempos.

O copiloto aciona alguns interruptores e grunhe um comentário alienígena.

ACKBAR ( VO )
Todo o ofício, prepare-se para pular para o hiperespaço na minha marca.

LANDO
Tudo certo. Espera.

Ele puxa uma alavanca e as estrelas do lado de fora começam a se espalhar.

82 ESPAÇO EXT - FROTA DE REBEL

Somos tratados com uma visão impressionante: primeiro o Millennium Falcon, depois
Star Cruiser da Ackbar, então, em grandes segmentos, a enorme frota ROARS
EM HIPERSPACE. E desaparece.

83 EXT ENDOR - BUNKER DE CONTROLE DE SUPERLOOKING DE PASSEIO

Han, Leia, Chewie, os dróides e seus dois guias Ewok, Wicket e
Paploo, reuniu-se com o esquadrão de ataque rebelde. Todo o grupo é
espalhe pela vegetação rasteira espessa. Abaixo deles está o BUNKER que
leva para o gerador. Quatro batedores imperiais, suas motos de velocidade
estacionado nas proximidades, vigie a entrada do bunker. Chewie rosna um
observação e Paploo conversam com Han no idioma Ewok.

HAN
Porta dos fundos, hein? Boa ideia.

Wicket e Paploo continuam sua conversa sobre Ewok.

HAN ( cont )
São apenas alguns guardas. Isso não deve ser demais.

LEIA
Bem, é preciso apenas um para soar o alarme.

HAN ( com sorriso autoconfiante )
Então vamos fazer isso bem quieto.

Threepio explica o que está acontecendo com Wicket e Paploo. Os Ewoks
tagarelar um momento entre si. Então Paploo pula e pisa
na vegetação rasteira.

Threepio pergunta a Wicket onde Paploo foi e recebe uma resposta curta.

THREEPIO
Oh! Oh meu. Princesa Leia!

LEIA
Quieto.

THREEPIO
Receio que nosso companheiro peludo tenha feito algo bastante precipitado.

LEIA
Ah não.

84 EXT BUNKER - ENTRADA

Paploo saiu da vegetação rasteira perto de onde o Imperial
batedores estão descansando. Ele silenciosamente balança a bola peluda de um corpo para
uma das motos de velocidade do batedor e começa a acionar interruptores em
aleatório. De repente, o motor da bicicleta dispara com um tremendo ROAR.
Paploo sorri e continua lançando interruptores. Os batedores saltam
surpresa.

85 PASSEIO EXT

Han, Leia e companhia assistem em perigo. Chewie late.

HAN ( suspira )
Lá se vai o nosso ataque surpresa.

86 EXT BUNKER

Os batedores imperiais correm em direção a Paploo, assim como seu velocista se aproxima
movimento. Paploo aguenta as patas e atira na floresta.

SCOUT
Veja! Lá! Pare ele!

Três dos batedores imperiais pulam em suas motos e se afastam
em perseguição. O quarto os observa sair do poste na porta.

87 PASSEIO EXT

Han, Leia e Chewie trocam olhares encantados.

HAN
Nada mal para um pouco de furball. Só resta um. Você fica aqui.
Nós vamos cuidar disso.

Han e os Wookiee acenam um para o outro e descem em direção ao bunker.
Threepio se move para ficar ao lado de Wicket e Artoo.

THREEPIO
Eu decidi que vamos ficar aqui.

88 EXT FOREST

Paploo navega pelas árvores, com mais sorte do que no controle. É assustador,
mas ele adora. Quando os batedores imperiais se vêem atrás dele
e começar a disparar parafusos a laser, ele decide que já teve o suficiente. Enquanto ele gira
uma árvore, fora de vista, Paploo pega uma videira e balança para dentro
árvores. Um momento depois, os batedores rasgam sob ele em busca do
bicicleta ainda voando e desocupada.

89 EXT BUNKER

Han se aproxima atrás do escoteiro imperial restante, dá um tapinha nele
ombro e deixa o batedor persegui-lo atrás do bunker nos braços
da equipe de ataque rebelde em espera. Han retorna para a frente e bate
fora de um padrão no painel de controle da porta do bunker. Todo mundo se destaca
de vista, no estilo da polícia, quando a porta se abre. Han e Leia espiam por dentro. Não
sinal de vida. O grupo entra no bunker silenciosamente, deixando um vigia
atrás.

ESTRELA DE MORTE DE 90 INT - SALA DE TRONE DO IMPEROR

O elevador se abre. Vader e Luke entram na sala sozinhos. Eles andam
através do espaço escuro para ficar diante do trono, lado pai e filho
de lado sob o olhar do imperador. Vader se curva ao seu mestre.

EMPEROR
Bem-vindo, jovem Skywalker. Eu estive esperando você.

Luke espia a figura encapuzada desafiadoramente. O imperador então olha para baixo
nos fichários de Luke.

EMPEROR
Você não precisa mais disso.

O Imperador se move levemente com o dedo e as pastas de Luke
cair, batendo no chão. Luke olha para suas próprias mãos,
livre agora para estender a mão e agarrar o pescoço do imperador. Ele não faz nada.

EMPEROR
Guardas, deixe-nos.

Os guardas de capa vermelha se viram e desaparecem atrás do elevador.

EMPEROR ( para Luke )
Estou ansioso para concluir seu treinamento. Com o tempo você ligará
eu mestre.

LUKE
Você está gravemente enganado. Você não vai me converter como fez com meu pai.

O imperador desce do trono e caminha muito perto de Lucas.
O imperador olha nos olhos dele e, pela primeira vez, Luke pode
perceber o rosto maligno dentro do capô.

EMPEROR
Oh, não, meu jovem Jedi. Você verá que é você quem é
enganado ... sobre muitas coisas.

VADER
O sabre de luz dele.

Vader estende a mão enluvada em direção ao Imperador, revelando a de Luke
sabre de luz. O imperador pega.

EMPEROR
Ah, sim, a arma de um Jedi. Muito parecido com o do seu pai. Até agora você deve saber
seu pai nunca pode ser desviado do lado sombrio. Então será com
tu.

LUKE
Você está errado. Em breve estarei morto ... e você comigo.

O imperador ri.

EMPEROR
Talvez você se refira ao ataque iminente de sua frota rebelde.

Luke olha bruscamente.

EMPEROR
Sim...Garanto que estamos bem a salvo de seus amigos aqui.

Vader olha para Luke.

LUKE
Seu excesso de confiança é sua fraqueza.

EMPEROR
Sua fé em seus amigos é sua.

VADER
Não faz sentido resistir, meu filho.

O imperador se vira para enfrentar Luke.

EMPEROR ( emagrecer )
Tudo o que aconteceu foi feito de acordo com o meu design.
( indica Endor )
Seus amigos lá em cima na Lua do Santuário...

Luke reage. O imperador observa.

EMPEROR ( cont )
...estão entrando em uma armadilha. Como é a sua frota rebelde! Fui eu quem
permitiu que a Aliança soubesse a localização do gerador de escudos. É
está bem a salvo da sua lamentável pequena banda. Uma legião inteira da minha
as melhores tropas os aguardam.

O olhar de Lucas vai do imperador a Vader e, finalmente, à espada
na mão do imperador.

EMPEROR
Ah...Receio que o escudo defletor esteja bastante operacional quando
seus amigos chegam.

91 INT BUNKER - PRINCIPAL SALA DE CONTROLE

Han, Leia, Chewie e a equipe de ataque rebelde invadem uma porta e
entre na sala de controle principal, levando todo o pessoal prisioneiro.

HAN
Tudo certo! Acima! Mover! Vamos! Rapidamente! Rapidamente, Chewie.

As tropas rebeldes afastam os controladores do gerador de seus painéis.
Leia olha para uma das telas do painel de controle.

LEIA
Han! Pressa! A frota estará aqui a qualquer momento.

HAN
Encargos!  Vamos! Vamos!

Lá fora, Threepio observa nervosamente nos arbustos como vários outros
controladores e stormtroopers correm para o bunker, deixando guardas em
a porta.

THREEPIO ( para Wicket )
Oh meu! Eles serão capturados!

Conversa fiada no idioma Ewok e depois decola a todo vapor
a floresta.

THREEPIO
Wa-espera! Espere, volte! Artoo, fique comigo.

Dentro do bunker, Han procura por apresentar acusações como um imperial
comandante entra.

COMANDANTE
Congelar! Sua escória rebelde.

Han e Leia giram, para encontrar dezenas de armas imperiais treinadas nelas
e seus companheiros. Uma força equilibrada de tropas imperiais os rodeia.
Ainda mais despeje na sala, desarmando aproximadamente o contingente rebelde.
Han, Leia e Chewie trocam olhares. Eles estão desamparados.

ESPAÇO EXT - ENDOR, ESTRELA DE MORTE, FROTA DE REBEL

A Estrela da Morte e sua Lua do Santuário ficam distantes no espaço como o
A frota rebelde sai do hiperespaço com um rugido incrível. O
Millennium Falcon e vários combatentes rebeldes estão na frente como o
a armada espacial está no seu alvo.

93 FALCON DE MILÊNIO INT - COCKPIT

Lando vira comutadores, verifica a tela e fala no rádio.

LANDO
Todas as asas se reportam.

CASA
Líder Vermelho aguardando.

LÍDER GRAY
Líder cinza aguardando.

LÍDER VERDE
Líder Verde aguardando.

CASA
Trave as folhas S em posições de ataque.

CRUISER ESTRELA DE 94 INT - PONTE

Da ponte da fragata da sede rebelde, almirante Ackbar
observa os lutadores se reunindo do lado de fora da tela.

ACKBAR
Que a Força esteja conosco.

FALCON DE MILÊNIO DE 95 INT - COCKPIT

Lando olha com preocupação para seu copiloto alienígena, Nien Nunb, que aponta para
o painel de controle e conversa com Lando.

LANDO
Temos que ser capazes de obter algum tipo de leitura nesse escudo
ou para baixo. Bem, como
eles poderiam estar nos bloqueando se não souberem se estamos chegando.

Lando atira um olhar preocupado para a Estrela da Morte que se aproxima como
implicações do que ele acabou de dizer afundam. Ele aperta um interruptor
comlink.

LANDO
Pare o ataque! O escudo ainda está levantado.

LÍDER VERMELHO ( VO )
Não recebo leitura. Você tem certeza?

LANDO
Puxar para cima! Toda a nave puxa para cima!

O Falcon vira com força para a esquerda. Pela janela as estrelas e os
Estrela da Morte se move para a direita.

ESPAÇO EXT - ESCUDO DE ESTRELA DE MORTE

O Falcon e os combatentes do Esquadrão Vermelho se afastam desesperadamente para evitar
a parede invisível.

CRUISER ESTRELA DE 97 INT - PONTE

Alarmes estão gritando e luzes piscando à medida que o enorme navio muda
curso abruptamente. Outros navios da frota disparam por fora como
armada tenta interromper seu impulso para a frente.

ACKBAR
Tome uma ação evasiva! Grupo Verde, fique perto de manter o setor MV-7.

Um controlador Mon Calamari se afasta da tela e chama para
Ackbar, bastante animado. O almirante corre para o controlador.

CONTROLADOR
Almirante, temos navios inimigos no setor 47.

Na tela pode ser vista a lua, a Estrela da Morte e a enorme
Frota imperial. Ackbar se move para o comlink.

ACKBAR
É uma armadilha!

LANDO ( sobre o comlink )
Lutadores entrando.

Há muita emoção na ponte quando o ataque começa.

O Millennium Falcon e vários esquadrões de combatentes rebeldes se dirigem para um
armada de caças TIE. O céu explode quando uma feroz briga de cães ocorre em
e ao redor dos gigantes cruzadores rebeldes.

PILOTO DE REBELO
Há muitos deles!

LANDO
Acelere para atacar a velocidade! Tire o fogo dos cruzadores.

CASA
Copie, líder de ouro.

A batalha continua em torno dos cruzadores gigantes.

98 INT DEATH STAR - SALA DE THRONE DO EMPEROR

Pela janela redonda atrás do trono do imperador pode ser visto
flashes distantes da batalha espacial em andamento.

EMPEROR
Venha garoto. Veja por si mesmo.

O imperador está sentado em seu trono, com Vader ao seu lado.
Luke se move para olhar através de uma pequena seção da janela.

EMPEROR
A partir daqui, você testemunhará a destruição final da Aliança e
o fim de sua rebelião insignificante.

Luke está atormentado. Ele olha para o sabre de luz sentado no apoio de braço
do trono. O imperador o observa e sorri, toca o
sabre de luz.

EMPEROR
Você quer isso, não é? O ódio está inchando em você agora. Pegue seu
Arma Jedi. Use-o. Estou desarmado. Me derrube com isso. Ceder para
sua raiva. A cada momento que passa, você se torna mais meu
servo.

Vader observa Luke em sua agonia.

LUKE
Não!

EMPEROR
É inevitável. É o seu destino. Você, como seu pai, agora está
meu!

99 EXT FOREST - BUNKER GENERADOR

Han, Leia, Chewie e o resto da equipe de ataque são levados para fora do
bunker por seus captores. A área circundante, deserta antes, está agora
lotado de caminhantes imperiais de duas pernas e centenas de imperiais
tropas. A situação parece desesperadora.

STORMTROOPER
Tudo bem, mexa-se! Eu disse mova-o! Continue!

Da vegetação rasteira além da clareira vem uma série selvagem de bipes
e assobios.
E -

THREEPIO
Olá! Eu digo ali! Você estava me procurando?

COMANDANTE DO BUNKER
Traga esses dois aqui em baixo!

STORMTROOPER
Vamos lá!

Artoo e Threepio estão de pé perto de uma das grandes árvores. Como seis
Os stormtroopers imperiais correm para levá-los em cativeiro, os dois dróides
pato fora de vista atrás da árvore.

THREEPIO
Bem, eles estão a caminho. Artoo, você tem certeza de que foi uma boa ideia?

STORMTROOPER
Congelar! Não se mexa!

THREEPIO
Nós nos rendemos.

Os stormtroopers contornam a árvore e encontram os dois dróides esperando
silenciosamente para ser levado. À medida que as tropas imperiais se movem para fazer isso, no entanto, um
banda de Ewoks cai de cima e os domina demais.

THREEPIO
Ohhh! Afaste-se, Artoo.

Em uma árvore próxima, um Ewok levanta um chifre nos lábios e soa o EWOK
CHAMADA DE ATAQUE. Todo o inferno se abre quando centenas de Ewoks jogam seus
corpos confusos na briga contra os stormtroopers e
seus incríveis caminhantes de duas pernas. Biker escoteiros disrem sobre explosões
Ewoks, apenas para ser esmagado por uma saraivada de pedras lançadas por Ewoks do
árvores acima.

Na confusão da batalha, Han e Leia se separam e mergulham
a cobertura da porta do bunker quando explosões surgem ao seu redor. Han vai
para o painel de controle da porta do bunker.

LEIA
O código mudou. Precisamos de Artoo!

HAN
Aqui está o terminal.

LEIA ( em comlink )
Artoo, onde você está? Precisamos de você no bunker imediatamente.

Artoo e Threepio estão se escondendo atrás de um tronco enquanto a batalha se arrasta
eles. De repente, o pequeno astródroide atarracado deixa escapar uma série de
assobios e brotos através do campo de batalha. Threepio, em pânico,
corre atrás dele.

THREEPIO
Indo? Como assim, você está indo. Mas-- mas indo para onde, Artoo?
Não o quê! Artoo! Oh, não é hora de heroísmo. Volte!

Escoteiros correm ao redor e sobre os dois dróides, explodindo no
pequenos Ewoks enquanto os peludos correm para se esconder.

Um grupo de Ewoks colocou uma catapulta primitiva em posição. Eles
disparar contra uma pedra grande que atinge um dos caminhantes. O caminhante vira
e segue para a catapulta, explodindo com as duas armas. Os Ewoks
abandonar suas armas e fugir em todas as direções. Assim como o caminhante
se move para pisar a catapulta, Ewoks largam videiras restringindo dois enormes
troncos que balançam e esmagam a cabeça do caminhante.

Uma linha de Ewoks paira desesperadamente em uma videira que é viciada em um caminhante
pé. À medida que o caminhante avança, as criaturas nebulosas são arrastadas
atrás.

Duas motos speeder perseguem Ewoks pela vegetação rasteira. Como os batedores
em volta de uma árvore, eles são derrubados de suas motos por um vinetied entre
duas árvores.

ESPAÇO 100 EXT

O Falcon e outros combatentes rebeldes estão envolvidos em um combate feroz
com combatentes imperiais do TIE, a batalha se arrasta pelos cruzadores do
Armada rebelde.

101 INT MILLENNIUM FALCON - COCKPIT
Lando está em comunicação por rádio com os pilotos do outro rebelde
esquadrões.

LANDO
Cuidado, Wedge! Três de cima!

CASA
Vermelho Três, Vermelho Dois, entre!

DOIS VERMELHOS
Entendi!

TRÊS VERMELHOS
Três deles entrando, vinte graus!

CASA
Corte para a esquerda! Eu vou levar o líder! Eles estão indo para o médico
fragata.

Lando dirige o Falcon através de um giro completo, enquanto sua equipe dispara contra
os TIEs das armas da barriga.

NAVIGATOR
A pressão está firme.

O copiloto Nien Nunb conversa com uma observação.

LANDO
Somente os lutadores estão atacando.  Eu me pergunto o que aqueles destruidores de estrelas
estão esperando.

ESPAÇO EXT - FROTA IMPERIAL

O gigante Imperial Star Destroyer espera silenciosamente a alguma distância do
batalha. O enorme Super Star Destroyer do Imperador repousa no meio de
a frota.

103 INT SUPER STAR DESTROYER - PONTE

Almirante Piett e dois comandantes da frota assistem à batalha no enorme
janela da ponte Super Star Destroyer.

COMANDANTE
Estamos na posição de ataque agora, senhor.

PIETT
Segure aqui.

COMANDANTE
Nós não vamos atacar?

PIETT
Eu tenho minhas ordens do próprio imperador. Ele tem algo especial
planejado para eles. Só precisamos impedi-los de escapar.

104 INT EMPEROR'S TOWER - QUARTO DE THRONE

O Imperador, Vader e um Lucas horrorizado assistem à batalha aérea
fogos de artifício pela janela e nas telas. Outro navio rebelde
explode contra o escudo protetor.

EMPEROR
Como você pode ver, meu jovem aprendiz, seus amigos falharam. Agora
testemunhar o poder de fogo desta batalha totalmente armada e operacional
estação.
( no comlink )
Atire à vontade, comandante.

Luke, em choque, olha através da superfície da Estrela da Morte para o
Frota rebelde além.

105 INT DEATH STAR - SALA DE CONTROLE

Os controladores recuam em vários interruptores. Comandante Jerjerrod está
sobre eles.

JERJERROD
Fogo!

106 INT DEATH STAR - CÂMARA DE BRILHO

Um botão é pressionado, que liga um painel de luzes. Um encapuzado
Soldado imperial alcança a cabeça e puxa uma alavanca. Um enorme feixe de
a luz emana de um eixo longo. Dois stormtroopers estão de um lado
em um painel de controle.

107 ESTRELA DE MORTE EXT

O prato gigante a laser na metade completa da Estrela da Morte começa a
brilho; Então, um poderoso raio dispara em direção à batalha aérea.

ESPAÇO EXT - BATALHA DO AR

O ar é espesso por navios gigantes. Entre eles, Rebel X-wings
briga de cães com combatentes imperiais do LAÇO. Agora, um enorme cruzador rebelde é
atingido pelo raio da Estrela da Morte e é soprado em pó.

O Millennium Falcon ruge sobre a CAMERA, seguido de perto por vários TIE
lutadores.

109 FALCON DE MILÊNIO INT - COCKPIT

O navio é atingido pela tremenda explosão do cruzador rebelde.
Lando e seu copiloto ficam surpresos ao ver a Estrela da Morte
poder de fogo.

LANDO
Essa explosão veio da Estrela da Morte! Essa coisa está operacional!
( no comlink )
Home One, este é o líder de ouro.

CRUISER ESTRELA DE 110 INT - PONTE

Ackbar fica no meio da confusão na ponte larga e fala para o
comlink.

ACKBAR
Nós vimos isso. Toda a nave se prepara para recuar.

LANDO
Você não terá outra chance disso, almirante.

ACKBAR
Não temos escolha, general Calrissian. Nossos cruzadores não podem repelir
poder de fogo dessa magnitude.

LANDO
Han terá esse escudo abaixado. Temos que dar a ele mais tempo.

111 EXT FOREST - BUNKER GENERADOR

Artoo e Threepio chegam à porta, enquanto Han e Leia fornecem cobertura
fogo.

THREEPIO
Estavam chegando!

HAN
Vamos! Vamos!

THREEPIO
Oh, Artoo, depressa!

O pequeno dróide se move para o terminal e conecta o braço do computador. A
grande explosão atinge perto de Artoo, derrubando-o de cabeça para baixo, finalmente
pousando em seus pés. A cabeça do astródroide atarracado está girando e
ardente. De repente, há uma alta SPROOING e Han e Leia viram
ao redor para ver Artoo com todas as portas do compartimento abertas e todas as suas
apêndices saindo; água e fumaça saem dos bicos em
o corpo dele. Han corre para o terminal, enquanto Threepio corre para seus feridos
companheiro.

THREEPIO
Minha nossa! Artoo, por que você teve que ser tão corajoso?

HAN
Bem, suponho que eu poderia ligar essa coisa.

LEIA
Eu vou te cobrir.

Ewoks em asa-delta feitos à mão e primitivos jogam pedras no
stormtroopers, mergulhando seus adversários mortais.  Um é atingido no
asa com fogo a laser e colisões. Um caminhante se aproxima, atirando
explosões a laser em frenéticos Ewoks correndo em todas as direções.  Dois Ewoks são
atingido por explosões a laser.  Um tenta despertar seu amigo, então
percebe que ele está morto.

112 ESPAÇO EXT - ESTRELA DE MORTE

A frota rebelde continua sendo retirada, de um lado pela morte
Feixe mortal da estrela, do outro pela furiosa Estrela Imperial
Destruidores.

113 FALCON DE MILÊNIO INT - COCKPIT

Lando dirige o Falcon descontroladamente através de uma pista de obstáculos flutuando
gigantes. Ele está gritando no comlink.

LANDO ( desesperadamente )
Sim! Eu disse mais perto! Mova-se o mais perto possível e envolva as Estrelas
Destruidores em ponto
intervalo em branco.

ACKBAR
A essa distância, não vamos durar muito contra os Destruidores de Estrelas.

LANDO
Vamos durar mais tempo do que contra a Estrela da Morte ... e podemos
basta pegar alguns
eles conosco.

Os cruzadores rebeldes se movem muito perto dos Destruidores Imperiais de Estrelas e
comece a explodir à queima-roupa. Pequenos lutadores correm pelo
superfícies gigantes, contra um pano de fundo de fogo a laser.

A torre de controle de um Destruidor de Estrelas está sob ataque.

PILOTO DE REBELO
Ela vai explodir!

PILOTO DE ASA
Eu sou atingido!

A asa Y danificada despenca em direção ao Destruidor de Estrelas e colide com
a torre de controle, explodindo.

114 INT EMPEROR'S TOWER - QUARTO DE THRONE

Fora da janela e nas telas de visualização, a frota rebelde está sendo
dizimado em explosões ofuscantes de luz e detritos. Mas aqui
não é som de batalha. O imperador se vira para Luke.

EMPEROR
Sua frota perdeu. E seus amigos na lua Endor não
sobreviver. Não há escapatória, meu jovem aprendiz. A Aliança
morra ... assim como seus amigos.

Os olhos de Luke estão cheios de raiva. Vader o observa.

EMPEROR
Boa. Eu posso sentir sua raiva. Eu sou indefeso.  Pegue sua arma!
Derrube-me com todo o seu ódio e sua jornada em direção ao escuro
lado estará completo.

Luke não pode mais resistir. O sabre de luz voa em sua mão. Ele
acende em um instante e balança para o imperador. Sabre de luz de Vader
pisca à vista, bloqueando o golpe de Luke antes que ele possa alcançar o
Imperador. As duas lâminas brilham em contato. Luke se vira para lutar contra ele
pai.

115 EXT FOREST

A batalha continua. Stormtroopers disparam contra Ewoks com sofisticados
armas enquanto seus pequenos adversários peludos se escondem atrás do
Tropas imperiais e bata na cabeça com grandes clubes.

Um caminhante marcha pela vegetação rasteira que explode Ewoks. Um
O guerreiro Ewok dá o sinal e uma pilha de toras é solta. O
toras caem sob os pés do caminhante, fazendo com que escorregue e deslize até
finalmente cai com um grande acidente.

Uma bicicleta de escoteiro passa e é laçada com uma videira pesada. O outro lado
da videira está amarrada a uma árvore, e a bicicleta gira sempre
apertando círculos até ficar sem corda e
cai nas árvores com uma enorme explosão.

Chewie balança em uma videira até o telhado de um dos caminhantes. Dois Ewoks
agarre-se a ele. Eles pousam com um baque no topo da máquina de balançar,
então espere pela vida querida. Um dos Ewoks espreita pela janela.

PILOTO DE CAMINHADA # 1
Veja!

PILOTO # 2
Tire-o de lá!

O piloto do caminhante abre a escotilha para ver o que está acontecendo. Ele é arrancado
fora e jogado ao mar antes que ele possa gritar. Os dois Ewoks entram em cena
o cockpit e nocautear o segundo piloto. Os Ewoks são
jogada violentamente enquanto a poderosa máquina se preocupa fora de controle. Lado de fora,
Chewie está quase derrubado no mar; ele enfia a cabeça na escotilha
com uma série de latidos furiosos. Os Ewoks estão muito ocupados e assustados para
ouça a reclamação do Wookiee. Chewie desliza dentro do caminhante.

O caminhante de Chewbacca se move pela floresta, disparando explosões a laser contra
stormtroopers inocentes e destruindo outros caminhantes imperiais. O
Os Ewoks gritam e aplaudem enquanto a máquina gigante ajuda a virar a maré do
batalha a favor deles.

116 EXT FOREST - BUNKER GENERADOR

Han trabalha furiosamente no painel de controle; fios acendem enquanto ele tenta
ligue a porta. Ele se muda para Leia, que está explodindo em alguns
stormtroopers.

HAN
Eu acho que entendi. Deixa comigo!

Os três fios acendem quando a conexão é feita. Com um WHOOSH ALTO, um
a segunda porta de explosão bate na frente da primeira.

Han franze a testa e volta aos fios novamente. Leia troca tiros com
stormtroopers nos arbustos, depois de repente grita de dor, ela
ombro atingido por uma explosão a laser.

THREEPIO
Princesa Leia, você está bem?

HAN
Vamos ver.

LEIA
Não é ruim.

STORMTROOPER ( OS )
Congelar!

Eles congelam.

THREEPIO
Oh céus.

STORMTROOPER
Não se mexa!

Leia mantém sua pistola a laser pronta, atrás de Han, fora da vista dos dois
stormtroopers se movendo em direção a eles. Os olhos de Han e Leia travam; o momento
parece suspenso a tempo.

HAN
Eu te amo.

Outro olhar compartilhado entre eles, enquanto ela sorri para Han.

LEIA
Eu sei.

STORMTROOPER
Mãos ao ar! Levante-se!

Han se levanta devagar e se vira, revelando a arma na mão de Leia. Ela
descarta os stormtroopers em um flash. Quando Han volta para
Leia, ele olha para cima para ver um caminhante gigante se aproximando e ficar diante dele,
suas armas mortais apontadas diretamente para ele.

HAN ( para Leia )
Fique atrás.

A escotilha em cima do caminhante se abre e Chewie enfia a cabeça para fora e
late triunfantemente.

HAN
Chewie!  Desça aqui!  Ela está ferida!  Não espera....  Eu tive uma ideia.

117 TORRE DO IMPERADOR INT - QUARTO DE TRONE

Luke e Vader estão envolvidos em um duelo de sabres de luz homem a homem
mais cruel que a batalha em Bespin. Mas o jovem Jedi cresceu
mais forte nesse ínterim, e agora a vantagem muda para ele. Vader é
forçado a voltar, perdendo o equilíbrio, e é derrubado pelas escadas. Lucas
fica no topo da escada, pronto para atacar.

EMPEROR ( rindo )
Boa.  Use seus sentimentos agressivos, garoto!  Deixe o ódio fluir
tu.

Lucas olha momentaneamente para o Imperador, depois volta para Vader, e
percebe que ele está usando o lado sombrio. Ele recua, desliga a sua
sabre de luz e relaxa, expulsando o ódio de seu ser.

VADER
Obi-Wan te ensinou bem.

LUKE
Eu não vou lutar com você, pai.

Vader sobe as escadas até Luke.

VADER
Você não é prudente em abaixar suas defesas.

Vader ataca, forçando Luke na defensiva. O jovem Jedi pula
um incrível reverso para a segurança da passarela no alto. Vader
fica abaixo dele.

LUKE
Seus pensamentos o traem, pai. Eu me sinto bem em você ... o
conflito.

VADER
Não há conflito.

LUKE
Você não poderia me matar antes, e eu não acredito
você vai me destruir
agora.

VADER
Você subestima o poder do lado sombrio. Se você não vai lutar,
então você vai se encontrar
seu destino.

Vader joga a espada do laser e corta os suportes segurando
a passarela, depois retorna à mão de Vader. Luke cai no chão
em uma chuva de faíscas e sai da vista sob o imperador
plataforma. Vader se move para encontrá-lo.

EMPEROR ( risos )
Boa.  Boa.

118 ESPAÇO EXT - BATALHA DO AR

As duas armadas, como seus ancestrais no mar, explodem a cada
outro em confrontos individuais à queima-roupa. Um destruidor de estrelas
explode. O vencedor rebelde manca para longe, suas costas meio vivas com um
série de pequenas explosões. O cruzador rebelde consegue se mover no próximo
para um segundo Destruidor de Estrelas antes que ele exploda completamente, levando o
Destruidor Imperial de Estrelas com ele. O Falcon e vários combatentes atacam
um dos maiores navios imperiais.

LANDO
Cuidado. Esquadrão em 0,06.

PILOTO DE REBELO
Estou nisso, líder de ouro.

CASA
Bom tiro, Red Two.

LANDO
Agora ... vamos lá, Han, velho amigo. Não me decepcione.

119 INT BUNKER - SALA DE CONTROLE

Os controladores assistem à tela principal na qual uma figura vaga de um
Piloto de caminhante imperial pode ser visto. Há muita estática e
interferência.

HAN / PILOTO ( VO )
Acabou, comandante. Os rebeldes foram roteados. Eles estão fugindo para
a floresta. Nós
precisa de reforços para continuar a busca.

Os controladores aplaudem.

COMANDANTE DA SALA DE CONTROLE
Envie três esquadrões para ajudar. Abra a porta dos fundos.

SEGUNDO COMANDANTE
Sim senhor.

120 EXT FOREST - BUNKER GENERADOR

Quando a porta do bunker se abre e as tropas imperiais saem correndo,
eles ficam surpresos ao se encontrarem cercados por rebeldes, seus
armas apontadas para eles. Ewoks segurando arcos e flechas aparecem no
telhado do bunker. As tropas imperiais jogam suas armas no chão
enquanto Han e Chewie correm para dentro do bunker com cargas explosivas.

121 INT BUNKER - SALA DE CONTROLE

Han, Chewie e várias tropas correm para a sala de controle e plantam
cargas explosivas nos painéis de controle e sai correndo.

HAN
Jogue-me outra carga.

122 INT EMPEROR'S TOWER - QUARTO DE THRONE

Vader persegue a área de teto baixo no nível abaixo do trono,
procurando por Luke na semi-escuridão, seu sabre de luz se manteve pronto.

VADER
Você não pode se esconder para sempre, Luke.

LUKE
Eu não vou lutar com você.

VADER
Dê-se ao lado sombrio. É a única maneira de salvar seu
amigos. Sim seu
pensamentos traem você. Seus sentimentos por eles são fortes. Especialmente
para...

Vader para e sente algo. Luke fecha os olhos com força
angústia.

VADER
Irmã! Então ... você tem uma irmã gêmea. Seus sentimentos agora traíram
ela também. Obi-Wan
foi sábio escondê-la de mim. Agora seu fracasso está completo. Se você quiser
não vire para o escuro
lado, então talvez ela o faça.

LUKE
Nunca-r-r!

Luke acende o sabre de luz e grita de raiva, correndo para o pai
com um frenesi que nunca vimos antes. Faíscas voam como Luke e Vader
lutar na área apertada. O ódio de Luke obriga Vader a se retirar
a área baixa e do outro lado de uma ponte com vista para um vasto poço de elevador.
Cada golpe da espada de Lucas leva seu pai ainda mais à derrota.

O Lorde das Trevas é derrubado de joelhos e quando ele levanta a espada para
bloquear outro ataque, Luke corta a mão direita de Vader no
punho, fazendo com que peças metálicas e eletrônicas voem da mecânica
toco. A espada de Vader se apega inutilmente, sobre o
borda da plataforma e no eixo sem fundo abaixo. Luke se move
sobre Vader e segura a lâmina de sua espada na garganta do Lorde das Trevas.
O Imperador observa com agitação incontrolável e satisfeita.

EMPEROR
Boa! Seu ódio fez você ser poderoso. Agora, cumpra seu destino e
pegue o seu pai
coloque ao meu lado!

Luke olha para a mão mecânica de seu pai, depois para a sua própria mecânica,
mão de luvas pretas e percebe o quanto ele está se tornando como seu
pai. Ele toma a decisão pela qual passou a vida inteira
preparação. Luke recua e joga o sabre de luz para longe.

LUKE
Nunca! Eu nunca vou virar para o lado sombrio. Você falhou, Alteza.
Eu sou um Jedi,
como meu pai antes de mim.

A alegria do imperador se transforma em raiva.

EMPEROR
Que assim seja...Jedi.

123 EXT FOREST - BUNKER GENERADOR

Han e vários lutadores ficam sem bunker e correm por todo o lado
a clareira.

HAN
Mover! Mover!

Uma onda de choque os derruba quando o bunker explode, seguido por um
exibição espetacular enquanto o enorme prato de radar do gerador de escudos explode
junto com o bunker.

CRUISER ESTRELA DE 124 INT - PONTE

Ackbar, sentado em sua cadeira de controle, fala no rádio.

ACKBAR
O escudo está abaixado! Iniciar ataque ao reator principal da Estrela da Morte.

LANDO
Estamos a caminho. Grupo Vermelho, Grupo Dourado, todos os lutadores me seguem.
( risos )
Disse que eles fariam isso!

O Falcon, seguido por vários caças rebeldes menores, segue em direção a
a superestrutura inacabada da Estrela da Morte.

TORRE DO IMPERADOR DE 125 INT - QUARTO DE THRONE

Lucas fica parado, quando o imperador chega ao fundo do andar de baixo. O
O riso do imperador se transformou em raiva. Ele levanta os braços em direção a Luke.

EMPEROR
Se você não for transformado, será destruído.

Parafusos ofuscantes de energia, raios malignos, disparam do Imperador
mãos para Luke. Mesmo em sua surpresa, o jovem Jedi tenta usar o
Força para desviá-los. No começo, ele é meio bem sucedido, mas depois de um
momento os parafusos de energia estão chegando com tanta velocidade e potência
o jovem Jedi encolhe diante deles, com os joelhos dobrando. O Vader ferido
luta a seus pés e se move para ficar ao lado de seu mestre.

EMPEROR
Jovem tolo ... só agora, no final, você entende.

Luke está quase inconsciente sob o ataque contínuo do
Relâmpago do imperador. Ele segura uma vasilha para não cair
o eixo sem fundo enquanto os parafusos rasgam através dele.

EMPEROR
Suas habilidades fracas não são páreo para o poder do lado sombrio. Você
pagou o preço por
sua falta de visão.

Lucas se contorce no chão com uma dor insuportável, alcançando-se fracamente em direção a
onde Vader está assistindo.

Gemidos de LUKE ( )
Pai, por favor. Ajude-me.

Mais uma vez Vader se levanta, assistindo Luke. Ele olha para seu mestre, o imperador,
depois de volta para Luke no chão.

EMPEROR
Agora, jovem Skywalker ... você vai morrer.

Embora não parecesse possível, o derramamento de parafusos
dos dedos do imperador realmente aumenta em intensidade, o som
gritando pela sala. O corpo de Luke se contorce de dor.

Vader agarra o Imperador por trás, lutando pelo controle dos vestidos
figura apesar do corpo enfraquecido do Lorde das Trevas e do braço gravemente enfraquecido.
O Imperador luta em seu abraço, suas mãos atirando em parafusos agora
levantou-se alto, longe de Luke. Agora os relâmpagos brancos voltam para
greve em Vader. Ele tropeça com sua carga enquanto as faíscas chovem
capacete e flua sobre sua capa preta. Ele mantém seu mestre do mal alto
sobre a cabeça e caminha até a beira do abismo, no centro central de
a sala do trono. Com uma explosão final de sua força outrora impressionante,
Darth Vader lança o corpo do imperador no poço sem fundo.

O corpo do imperador gira impotente no vazio, arqueando quando cai
no abismo. Finalmente, quando o corpo está bem abaixo do eixo, ele
explode, criando uma onda de ar pela sala
chicoteado pelo vento e ele cambaleia, e cai em direção ao
buraco sem fundo. Luke rasteja para o lado de seu pai e o afasta
da borda do abismo à segurança. Tanto o jovem Jedi quanto o gigante
guerreiro são fracos demais para se mover.

126 EXT / INT - BATALHA ESPAÇO - ESTRELA DE FIGHTER E MORTE

Lutadores rebeldes seguem o Falcon através da superfície da Estrela da Morte
para a porção inacabada, onde mergulham na superestrutura de
a estação de batalha gigante, seguida por muitos combatentes do TIE.

CASA
Eu vou entrar.

LANDO
Aqui não vai nada.

Três asas X lideram a perseguição através do eixo sempre estreito, seguido
pelo Falcon e quatro outros lutadores, além de combatentes do TIE que
disparar continuamente nos rebeldes. As luzes refletem nos rostos do piloto como
eles correm pelo poço escuro.

LANDO
Agora bloqueie a fonte de energia mais forte. Deve ser o poder
gerador.

CASA
Formar. E fique alerta. Poderíamos ficar sem espaço muito rápido.

Os lutadores e o Falcon correm pelo túnel, ainda perseguidos por
os lutadores do LAÇO. Um dos X-wings é atingido por trás e explode.

LANDO
Divida e volte para a superfície. Veja se você pode obter alguns
aqueles lutadores de LAÇO para
siga você.

PILOTO
Copie, líder de ouro.

Os navios rebeldes descascam perseguidos por três dos TIE, enquanto Lando e
A cunha continua através do túnel principal. Estreita e o Falcão
raspa o lado perigosamente. Dois outros lutadores do TIE continuam explodindo
longe deles.

LANDO
Isso foi muito perto.

Nien Nunb concorda. A batalha entre a frota rebelde e imperial se enfurece
em. Vários cruzadores disparam no gigante Super Star Destroyer.

CRUISER DE ESTRELA DE 127 INT - PONTE

ACKBAR
Temos que dar mais tempo a esses lutadores. Concentre todo o fogo em
aquele Super Star Destroyer.

Os pilotos de asas X atravessam a superfície do enorme navio de guerra.

128 DESTRUÍDO DE ESTRELA DE INT VADER - PONTE

O almirante Piett e um comandante estão de pé na janela, olhando para o
batalha. Eles parecem preocupados.

CONTROLADOR
Senhor, perdemos nosso escudo defletor de ponte.

PIETT
Intensifique as baterias para a frente. Não quero que nada aconteça.

O comandante está olhando pela janela onde um rebelde danificado
o lutador está fora de controle e está indo diretamente em direção à ponte.

PIETT
Intensifique o poder de fogo para a frente!

COMANDANTE
É tarde demais!

O piloto rebelde grita quando seu navio atinge o Destruidor de Estrelas, causando um
enorme explosão. O navio de batalha gigante perde o controle, colide com o
Estrela da Morte, e explode.

129 CRUISER DE ESTRELA DE REBELO - PONTE

Há emoção na ponte enquanto a batalha se arrasta por todos os lados.
Eles aplaudem quando o gigante Star Destroyer explode.

130 INT DEATH STAR - PRINCIPAL DOCKING BAY

Caos. Pela primeira vez, a Estrela da Morte é abalada por explosões como
a frota rebelde, não mais apoiada contra uma parede, aproxima o zoom, descarregando
uma barragem pesada. Tropas imperiais correm em todas as direções, confusas e
desesperado para escapar.

No meio desse tumulto, Luke está tentando carregar o enorme
peso morto do corpo enfraquecido de seu pai em direção a um ônibus imperial.
Finalmente, Luke cai da tensão. As explosões ficam mais altas à medida que
Vader o aproxima.

VADER ( um sussurro )
Luke, me ajude a tirar essa máscara.

LURA
Mas você vai morrer.

VADER
Nada pode parar com isso agora. Só pela primeira vez ... deixe-me olhar para você com meu
próprios olhos.

Lenta e hesitante, Luke remove a máscara do rosto de seu pai. Lá
embaixo das cicatrizes há um homem idoso. Seus olhos não se concentram. Mas o
moribundo sorri ao ver diante dele.

ANAKIN ( muito fraco )
Agora ... vá, meu filho. Me deixe.

LUKE
Não. Você vem comigo. Não posso deixar você aqui. Eu tenho que salvar
tu.

ANAKIN
Você já tem, Luke. Você estava certo sobre mim. Diga a sua irmã ... você
estavam certos.

LUKE
Pai...Eu não vou deixar você.

Darth Vader, Anakin Skywalker...O pai de Luke morre.

Uma enorme explosão sacode a baía de ancoragem. Lentamente, Luke se levanta e, meio
carregando, arrastando meio o corpo de seu pai, tropeça em direção a um
transporte.

131 ESTRELA DE MORTE EXT

O Millennium Falcon lidera uma bomba fervilhante percorrida pelo imenso
superestrutura da Estrela da Morte semi-construída. Os cruzadores Rebel Star
do lado de fora bombardeiam continuamente a enorme estação. E cada golpe direto é
respondido por ressonantes explosões de reação em cadeia dentro da estação
em si.

132 FALCON DE MILÊNIO INT - PORTAS DE MALHA E ARMA

A equipe de Lando dispara para os combatentes do TIE perseguidores como o arremesso
Barão de Bespin e seu copiloto alienígena chegam ao reator principal
eixo. É incrível. Uma asa X solitária fica bem em frente ao Falcon.

CASA
Aí está!

LANDO
Tudo bem, Wedge. Vá para o regulador de energia na torre norte.

CASA
Copie, líder de ouro. Eu já estou saindo.

A asa X segue para o topo do enorme reator e dispara vários
torpedos de prótons no regulador de energia, causando uma série de pequenos
explosões.

O Falcon segue para o reator principal e quando é perigosamente
perto, Lando dispara os mísseis, que disparam do Falcon com um
rugido poderoso e atingido diretamente no centro do reator principal.

Ele manobra o Falcon da superestrutura sinuosa logo à frente de
a cadeia contínua de explosões.

133 CRUISER DE ESTRELA DE REBELO - PONTE

Ackbar e outros Mon Calamari se apoiam nos trilhos da ponte,
assistindo a tela grande mostrando a Estrela da Morte no briefing principal
sala.

ACKBAR
Afaste a frota da Estrela da Morte.

134 ESTRELA DE MORTE EXT

Um ônibus imperial, com Luke sozinho no cockpit, foguetes para fora do
principal baía de ancoragem, enquanto toda a seção da Estrela da Morte é explodida
longe.

Finalmente, assim como parece que o Falcon não vai conseguir, Lando
pilota habilmente a nave fora da superestrutura explosiva e
zumbe em direção à Lua do Santuário, apenas um momento antes da Estrela da Morte
supernovas no esquecimento.

135 FALCON DE MILÊNIO INT - COCKPIT

Lando e Nien Nunb riem e aplaudem em alívio.

136 EXT ENDOR FOREST

Han e Leia, Chewie, os dróides, as tropas rebeldes e os Ewoks todos
olhe para o céu quando a Estrela da Morte se revela em um flash final de
autodestruição. Todos eles aplaudem.

THREEPIO
Eles fizeram isso!

Han olha a cidade do céu para Leia, um olhar de preocupação em seu rosto.
Leia continua olhando para o céu como se estivesse ouvindo um silêncio
voz.

HAN
Tenho certeza que Luke não estava nessa coisa quando explodiu.

LEIA
Ele não estava. Eu posso sentir isso.

HAN
Você o ama, não é?

Leia sorri, intrigada.

LEIA
Sim.

HAN
Tudo certo. Compreendo. Bem. Quando ele voltar, eu não vou entrar no
caminho.

Ela percebe o mal-entendido dele.

LEIA
Oh. Não, não é nada disso. Ele é meu irmão.

Han está surpreso com esta notícia. Ela sorri e eles se abraçam.

137 EXT ENDOR FOREST - NOITE

Luke coloca uma tocha nos troncos empilhados sob uma pira funerária onde
o corpo do pai mente, novamente vestido com máscara preta e capacete. Ele fica de pé,
assistindo tristemente, enquanto as chamas saltam mais alto para consumir Darth Vader -
Anakin Skywalker.

No céu acima, fogos de artifício explodem e combatentes rebeldes aumentam o zoom acima do
floresta.

138 QUADRO DE VILA EXT EWOK - NOITE

Uma enorme fogueira é a peça central de uma celebração selvagem. Rebeldes e
Os Ewoks se alegram com o brilho quente da luz do fogo, bateria batendo, cantando,
dançando e rindo na linguagem comunitária da vitória e
libertação.

Lando corre e é entusiasticamente abraçado por Han e Chewie. Então,
finalmente, Luke chega e os amigos correm para cumprimentá-lo e abraçá-lo.
Eles ficam perto, esse grupo resistente, confortando um no outro
toque, juntos até o fim.

Rebeldes e Ewoks se juntam em dança e celebração. O original
grupo de aventureiros assista à margem. Apenas Luke parece
distraído, sozinho no meio deles, seus pensamentos em outro lugar.

Ele olha para o lado e vê três figuras cintilantes e sorridentes em
a borda das sombras: Ben Kenobi, Yoda e Anakin Skywalker.

DESLIGADO

CRÉDITOS FINAIS SOBRE O CAMPO DE ESTRELA
`;

enviarScript(script, 2000)
    .then(e => console.log(`Código finalizado, ${e} mensagens enviadas`))
    .catch(console.error);