// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    divideThenMultiply,
    getLastItem,
    getSecondItem,
    makeLuckyGreeting,
    multiplyBy12ThenHalve,
    multiplyBySeven,
    myFunction,
    returnAsAnArray,
    returnAsAString,
} from '../functions.js';

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

test('add 3 exclamation points', (expect) => {
    const expected = 'hello!!!';
    const actual = addExclamationPoints('hello');
    expect.equal(actual, expected);

    const expected2 = 'run!!!';
    const actual2 = addExclamationPoints('run');
    expect.equal(actual, expected);

    const expected3 = 'boo!!!';
    const actual3 = addExclamationPoints('boo');
    expect.equal(actual, expected);
});

test('multiply number by seven', (expect) => {
    const expected = 49;
    const actual = multiplyBySeven(7);
    expect.equal(actual, expected);

    const expected2 = 7;
    const actual2 = multiplyBySeven(1);
    expect.equal(actual2, expected2);

    const expected3 = 7000000;
    const actual3 = multiplyBySeven(1000000);
    expect.equal(actual3, expected3);
});

test('multiply by 12 and then cut in half', (expect) => {
    const expected = 6;
    const actual = multiplyBy12ThenHalve(1);
    expect.equal(actual, expected);

    const expected2 = 12;
    const actual2 = multiplyBy12ThenHalve(2);
    expect.equal(actual2, expected2);

    const expected3 = 24;
    const actual3 = multiplyBy12ThenHalve(4);
    expect.equal(actual3, expected3);
});

test('divide first number by second then multiply by third', (expect) => {
    const expected = 2;
    const actual = divideThenMultiply(2, 2, 2);
    expect.equal(actual, expected);

    const expected2 = 3;
    const actual2 = divideThenMultiply(3, 3, 3);
    expect.equal(actual2, expected2);

    const expected3 = 350;
    const actual3 = divideThenMultiply(100, 2, 7);
    expect.equal(actual3, expected3);
});

test('takes three numbers and returns them in an array', (expect) => {
    const expected = [5, 8, 7];
    const actual = returnAsAnArray(5, 8, 7);
    expect.deepEqual(actual, expected);

    const expected2 = [4, 9, 2];
    const actual2 = returnAsAnArray(4, 9, 2);
    expect.deepEqual(actual2, expected2);

    const expected3 = [6, 7, 3];
    const actual3 = returnAsAnArray(6, 7, 3);
    expect.deepEqual(actual3, expected3);
});

test('returns a greeting that sums two nums', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12';
    const actual = makeLuckyGreeting(6, 6);
    expect.equal(actual, expected);

    const expected2 = 'Hello! Your lucky number for the day is 1578293';
    const actual2 = makeLuckyGreeting(1578292, 1);
    expect.equal(actual2, expected2);

    const expected3 = 'Hello! Your lucky number for the day is 2';
    const actual3 = makeLuckyGreeting(-2, 4);
    expect.equal(actual3, expected3);
});

test('take an array and return second item of that array', (expect) => {
    const expected = 'orange';
    const actual = getSecondItem(['apple', 'orange', 'banana']);
    expect.equal(actual, expected);

    const expected2 = 'box';
    const actual2 = getSecondItem(['orange', 'box', 'bat']);
    expect.equal(actual2, expected2);

    const expected3 = 'mushroom';
    const actual3 = getSecondItem(['juice', 'mushroom', 'tea']);
    expect.equal(actual3, expected3);
});

test('take an array and return the last item of that array', (expect) => {
    const expected = 'frog';
    const actual = getLastItem(['bat', 'cat', 'dog', 'frog']);
    expect.equal(actual, expected);

    const expected2 = 'tarantula';
    const actual2 = getLastItem(['bat', 'cat', 'dog', 'frog', 'tarantula']);
    expect.equal(actual2, expected2);

    const expected3 = 'dragon';
    const actual3 = getLastItem(['dragon']);
    expect.equal(actual3, expected3);
});
