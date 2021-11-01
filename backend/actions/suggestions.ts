
export var lettersByNumber = [ "", "", "abc", "def", "ghi", "jkl",
    "mno", "pqrs", "tuv", "wxyz" ];

//refactor to this
export var numberToLetters = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
}

function generateSuggestions(inputNumberArray: string[] ,inputIterator: number, helpingOutputStashArr: string[], depthOfWord: any, finalArray: string[])
{

    if (inputIterator == depthOfWord)
    {
        finalArray.push(helpingOutputStashArr.join(""))
        return;
    }

    for(let i = 0;
        i < String(lettersByNumber[Number(inputNumberArray[inputIterator])]).length;
        i++)
    {
        helpingOutputStashArr.push(String(lettersByNumber[Number(inputNumberArray[inputIterator])]).charAt(i)); // push iterated
        generateSuggestions(inputNumberArray, Number(inputIterator) + 1, helpingOutputStashArr, depthOfWord,finalArray);
        helpingOutputStashArr.pop();
        if(Number(inputNumberArray[inputIterator]) == 0 || Number(inputNumberArray[inputIterator]) == 1)
            return
    }
}

export function getSuggestions(param: string): string[]{
    console.log("TEXTTTTT ", param)
    // console.log("hash ", hashTable)
    //TODO filter out 01
    // TODO check-word
    // var checkWord = require('check-word'),
    //     words     = checkWord('en'); // setup the language for check, default is en
    // words.check('dog'); // true
    // words.check('perro'); // false
    // words.check('hi'); // true
    const finalArray = [] as string[];
    const inputArrayNumbers = param.split("") as string[];
    console.log(inputArrayNumbers)
    generateSuggestions(inputArrayNumbers, 0, [], inputArrayNumbers?.length, finalArray);
    console.log("Final arr", finalArray)
    return finalArray;
}
