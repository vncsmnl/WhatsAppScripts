async function enviarScript(scriptText, delay = 1000, repetitions = 1) {
    const lines = scriptText.split('\n').map(line => line.trim()).filter(line => line);

    const main = document.querySelector("#main");
    const textarea = main.querySelector(`div[contenteditable="true"]`);

    if (!textarea) {
        throw new Error("Não há uma conversa aberta");
    }

    for (let i = 0; i < repetitions; i++) {
        console.log(`Executando repetição ${i + 1}/${repetitions}`);

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

        await new Promise(resolve => setTimeout(resolve, delay));
    }

    return repetitions * lines.length;
}

const script = `
Volta o cão arrependido
Com suas orelhas tão fartas
Com seu osso roído
E com o rabo entre as patas
`;

enviarScript(script, 2000, 44)
    .then(e => console.log(`Código finalizado, ${e} mensagens enviadas`))
    .catch(console.error);
