/**
 * The function `enviarScript` takes a string of JavaScript code, splits it into lines, and simulates
 * typing and sending each line in a chat conversation.
 * @param scriptText - The `scriptText` parameter is a string that represents the script you want to
 * send as a message in a conversation. Each line of the script should be separated by a newline
 * character (`\n`).
 * @param delay - The `delay` parameter is the time delay (in milliseconds) between sending each message.
 * @returns the number of lines in the script that were successfully executed.
 */
async function enviarScript(scriptText, delay = 1000) {
  const lines = scriptText
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line);

  const main = document.querySelector("#main");
  const textarea = main.querySelector(`div[contenteditable="true"]`);

  if (!textarea) {
    throw new Error("Não há uma conversa aberta");
  }

  for (const line of lines) {
    console.log(line);
    textarea.focus();
    document.execCommand("insertText", false, line);
    textarea.dispatchEvent(new Event("change", { bubbles: true }));

    await new Promise((resolve) => setTimeout(resolve, 100));

    const sendButton =
      main.querySelector(`[data-testid="send"]`) ||
      main.querySelector(`[data-icon="wds-ic-send-filled"]`);
    sendButton.click();

    if (lines.indexOf(line) !== lines.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  return lines.length;
}

/**
 * Repete o envio do script múltiplas vezes com um intervalo entre execuções completas.
 * @param scriptText - Texto do script a ser enviado.
 * @param delayEntreLinhas - Tempo (ms) entre cada linha do script.
 * @param vezes - Quantas vezes repetir o envio completo do script.
 * @param delayEntreExecucoes - Tempo (ms) entre cada execução do script.
 */
async function enviarScriptVariasVezes(
  scriptText,
  delayEntreLinhas = 1000,
  vezes = 3,
  delayEntreExecucoes = 5000
) {
  for (let i = 0; i < vezes; i++) {
    console.log(`Execução ${i + 1} de ${vezes}`);
    try {
      const mensagens = await enviarScript(scriptText, delayEntreLinhas);
      console.log(
        `Execução ${i + 1} finalizada, ${mensagens} mensagens enviadas`
      );
    } catch (err) {
      console.error(`Erro na execução ${i + 1}:`, err);
      break;
    }

    if (i < vezes - 1) {
      await new Promise((resolve) => setTimeout(resolve, delayEntreExecucoes));
    }
  }

  console.log("Todas as execuções foram finalizadas");
}

// Exemplo de script e chamada
const script = `
Coloque o seu texto aqui
Put your text here
`;

// Envia o script 5 vezes, com 2 segundos entre linhas e 10 segundos entre execuções
enviarScriptVariasVezes(script, 2000, 5, 10000);
