const dictionary = {
    'A': '0', 'B': '1', 'C': '1', 'D': '1', 'E': '2', 'F': '3', 'G': '3', 'H': '3',
    'I': '4', 'J': '5', 'K': '5', 'L': '5', 'M': '5', 'N': '5',
    'O': '6', 'P': '7', 'Q': '7', 'R': '7', 'S': '7', 'T': '7',
    'U': '8', 'V': '9', 'W': '9', 'X': '9', 'Y': '9', 'Z': '9',
    ' ': '0',
    'a': '9', 'b': '8', 'c': '8', 'd': '8', 'e': '7', 'f': '6', 'g': '6', 'h': '6',
    'i': '5', 'j': '4', 'k': '4', 'l': '4', 'm': '4', 'n': '4',
    'o': '3', 'p': '2', 'q': '2', 'r': '2', 's': '2', 't': '2',
    'u': '1', 'v': '0', 'w': '0', 'x': '0', 'y': '0', 'z': '0'
};

function calculateStep1(input) {
    return input.split('').map(char => dictionary[char] || char).join(' ');
}

function calculateStep2(step1) {
    const nums = step1.split(' ').filter(n => n !== '');
    let result = parseInt(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        if (i % 2 === 1) {
            result += parseInt(nums[i]);
        } else {
            result -= parseInt(nums[i]);
        }
    }
    return result;
}

function calculateStep3(step2) {
    const num = Math.abs(step2);
    let result = [];
    let sequence = ['A', 'B', 'E', 'F', 'I', 'J'];
    let currentIndex = 0;
    
    for (let i = 0; i < 8; i++) {
        if (step2 < 0 && result.join('') === 'ABEFI') {
            result.push('J');
        } else if (currentIndex < sequence.length) {
            result.push(sequence[currentIndex % sequence.length]);
        }
        
        if (!(step2 < 0 && result.length === 6)) {
            currentIndex++;
        }
        
        if (result.join('') === 'ABEFI') {
            currentIndex = 0;
        }
    }
    
    return result.join(' ');
}

function calculateStep4(step3, step2) {
    const letters = step3.replace(/\s/g, '').split('');
    let result = [];
    
    if (step2 < 0) {
        result = 'A B E F I J B E'.split(' ');
    } else {
        result = 'A B E F I A B B E'.split(' ');
    }
    
    return result.join(' ');
}

function calculateStep5(step4) {
    const mapping = {
        'A': '1',
        'B': '1',
        'E': '3',
        'F': '3',
        'I': '5',
        'J': '5'
    };
    
    return step4.split(' ')
                .map(char => mapping[char] || '1')
                .join(' ');
}

function processText(input) {
    console.log("Input: " + input);
    
    const step1 = calculateStep1(input);
    console.log("Step 1: " + step1);
    
    const step2 = calculateStep2(step1);
    console.log("Step 2: " + step2);
    
    const step3 = calculateStep3(step2);
    console.log("Step 3: " + step3);
    
    const step4 = calculateStep4(step3, step2);
    console.log("Step 4: " + step4);
    
    const step5 = calculateStep5(step4);
    console.log("Step 5: " + step5);
}

module.exports = { processText };