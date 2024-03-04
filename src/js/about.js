function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
}

const FIELD = document.getElementById('typing');
const TYPING = [
    'Authors',
    'Creators',
    'Thinkers',
    'Journalists',
    'Writers',
    'Reporters'
];
const LETTER_DELAY = 0.1;
const WORD_DELAY = 2.5;

async function typingText() {
    console.log('running')

    for (let i=0; i<TYPING.length; i++) {
        
        const word = TYPING[i];
        let content = '';
        
        for (let j=0; j<word.length; j++) {
        const letter = word[j];
        content += letter;
        console.log(content);
        FIELD.textContent = content;
        await sleep(LETTER_DELAY);
        
        }
        
        await sleep(WORD_DELAY)
        
        for (let j=0; j<word.length; j++) {
        content = content.slice(0, -1);
        console.log(content);
        FIELD.textContent = content;
        await sleep(LETTER_DELAY);
        
        }
        
    }

    clearInterval(typingText);
    setTimeout(typingText, 0);
    
}

const TOTAL_LENGTH = LETTER_DELAY*2*TYPING.join('').length + WORD_DELAY*TYPING.length;

typingText();
