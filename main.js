/**
 * The function `enviarScript` takes a string of JavaScript code, splits it into lines, and simulates
 * typing and sending each line in a chat conversation.
 * @param scriptText - The `scriptText` parameter is a string that represents the script you want to
 * send as a message in a conversation. Each line of the script should be separated by a newline
 * character (`\n`).
 * @returns the number of lines in the script that were successfully executed.
 */
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

/* The code is defining a script as a multi-line string using backticks (`). The script contains text
that will be sent as messages in a conversation. */
const script = `
Coloque o seu texto aqui
Put your text here
`;

enviarScript(script)
    .then(e => console.log(`Código finalizado, ${e} mensagens enviadas`))
    .catch(console.error);
