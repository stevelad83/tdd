// IMPORT MODULES under test here:
import { myFunction } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = 'hello world';
    const actual = myFunction('hello world');
    expect.equal(actual, expected);

    const expected2 = 'HELLO WORLD';
    const actual2 = myFunction('HELLO WORLD');
    expect.equal(actual2, expected2);

    const expected3 = 'hi there world';
    const actual3 = myFunction('hi there world');
    expect.equal(actual3, expected3);
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});
