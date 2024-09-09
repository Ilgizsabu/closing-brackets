const textUser = prompt('Enter text');
const check = Array.from(textUser);
debugger;
const checkIfBalance = (data) => {
    const stack = [];
    for (const symbol of data) {
        if (symbol === '(' || symbol === '{' || symbol === '[') {
            stack.push(symbol);
        } else if (symbol === ')' || symbol === '}' || symbol === ']') {
            const last = stack.pop();
            if (
                (symbol === ')' && last !== '(') || 
                (symbol === '}' && last !== '{') || 
                (symbol === ']' && last !== '[')
            ) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};

console.log(checkIfBalance(check));