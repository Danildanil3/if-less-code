export function describe(thing, block) {
    console.log('#', thing, ':');
    block();
    console.log();
}

export function it(testCase, block) {
    try {
        block();
        console.log('+ [PASS]', testCase);
    } catch (error) {
        console.error('- [FAIL]', testCase);
        console.error('   with :');
        for(let line of error.toString().split('\n')) {
            console.error('        ', line);
        }
    }
}

export function expect(value) {
    return matcher(value);
}

function matcher(got) {
    return {
        toBe(expected) {
            if (got !== expected) {
                throw `expected: ${expected}\ngot: ${got}`
            }
        }
    }
}