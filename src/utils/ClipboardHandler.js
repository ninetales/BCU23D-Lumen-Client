export default class ClipboardHandler {

    static copyText({ text }) {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Text copied to clipboard', text);
            })
    }

}