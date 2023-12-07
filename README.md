### Video Demo Tutorial: https://www.youtube.com/watch?v=RG-dclLtYvA

# WhatsAppScripts TravaZap

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Parameters](#parameters)
- [Error Handling](#error-handling)
- [Example](#example)

## Overview

The `enviarScript` function is an asynchronous JavaScript function designed to send a series of messages to a conversation on a web page. It splits the provided script text into lines, simulates user input by typing each line into the conversation textarea, and then clicks the send button to dispatch the messages.

## Prerequisites

REQUIREMENT: WhatsApp Web Version
https://web.whatsapp.com/

Before using the `enviarScript` function, ensure the following:

- The script is executed in an environment with access to the DOM (Document Object Model) as it interacts with web page elements.
- The conversation must be open and accessible in the DOM.
- The function is called with the appropriate permissions, considering browser security restrictions.

## Usage

1. Include the script containing the `enviarScript` function in your HTML document.
2. Ensure the conversation is open and accessible in the DOM.
3. Press F12, open console tab and paste raw script.
4. Enter to the `enviarScript` function with the desired script text.

## Parameters

- `scriptText`: A string containing the script to be sent as messages. Each line in the script will be treated as a separate message.

## Error Handling

The function may throw an error if no conversation is open. Ensure that a conversation is active in the DOM before calling the function.

## Example

```javascript
// Example script to be sent
const script = `
Coloque o seu texto aqui
Put your text here
`;

// Calling the enviarScript function
enviarScript(script)
    .then(e => console.log(`Código finalizado, ${e} mensagens enviadas`))
    .catch(console.error);
```

In this example, the `enviarScript` function is called with a multi-line script, and the completion message or error is logged to the console.

Feel free to customize the script and adapt the function to fit your specific use case.