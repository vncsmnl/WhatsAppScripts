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
A história começou
Quando um relógio esquisito
Grudou no pulso dele vindo lá do infinito
Agora tem poderes e com eles faz bonito
É o Ben 10
(Ben 10, Ben 10, Ben 10)

Se acaso encontrá-lo, você vai se admirar
Diante de seus olhos ele vai se transformar
Em um ser alienígena
Que bota pra quebrar
É o Ben 10
(Ben 10)

Com seus poderes vai combater
Os inimigos e vai vencer
Ele não foge de medo ou dor
Moleque muito irado
Seja onde for
É o Ben 10
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error);
