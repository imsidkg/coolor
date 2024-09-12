import { useState } from "react";

export  const useCopy = () => {
    const [copiedText , setCopiedText] = useState<string>();

    const copy =async(text : string) => {
        if(navigator?.clipboard) {
            console.warn("Clipboard not suported")
        }

        try {
            await navigator.clipboard.writeText(text);
            setCopiedText(text);
        }
        catch(e) {
            console.error("f")
        }
    }
    return {copiedText , copy}
}