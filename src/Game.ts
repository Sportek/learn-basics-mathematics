import { getRandomNumber, getRandomEnumValue } from '@/utils'

import { Symbols } from './types';

const MAXIMUM = {
    [Symbols.Addition]: {
        min: 10,
        max: 200
    },
    [Symbols.Subtraction]: {
        min: 10,
        max: 200
    },
    [Symbols.Multiplication]: {
        min: 1,
        max: 12
    },
    [Symbols.Division]: {
        min: 1,
        max: 12
    }
}

export class Game {
    constructor(amountOfPossibleAnswers: number) {
        this._amountOfPossibleAnswers = amountOfPossibleAnswers;
        this._equation = getRandomEnumValue(Symbols);
        const answerObject = this.generateRandomNumbers(this._equation);
        this._first = answerObject.first;
        this._second = answerObject.second;
        this._answer = answerObject.answer;
        this._possibleAnswers = Array.from({ length: amountOfPossibleAnswers - 1 }, () => this.generateRandomNumbers(this._equation).answer);
        this._possibleAnswers.push(answerObject.answer);
    }

    private readonly _amountOfPossibleAnswers : number;
    private readonly _first : number;
    private readonly _second : number;
    private readonly _equation : Symbols;
    private readonly _answer : number;
    private readonly _possibleAnswers : number[];


    get amountOfPossibleAnswers(): number {
        return this._amountOfPossibleAnswers;
    }

    get first(): number {
        return this._first;
    }

    get second(): number {
        return this._second;
    }
    get answer(): number {
        return this._answer;
    }

    get possibleAnswers(): number[] {
        return this._possibleAnswers;
    }

    get equation(): Symbols {
        return this._equation;
    }

    private generateRandomNumbers(equation : Symbols) {

        let first = 0;
        let second = 0;
        let answer = 0;

        switch (equation) {
            case Symbols.Addition:
                first = getRandomNumber(MAXIMUM[Symbols.Addition].min, MAXIMUM[Symbols.Addition].max);
                second = getRandomNumber(MAXIMUM[Symbols.Addition].min, MAXIMUM[Symbols.Addition].max);
                answer = first + second;
                break;

            case Symbols.Subtraction:
                first = getRandomNumber(MAXIMUM[Symbols.Subtraction].min, MAXIMUM[Symbols.Subtraction].max);
                second = getRandomNumber(MAXIMUM[Symbols.Subtraction].min, MAXIMUM[Symbols.Subtraction].max);
                answer = first - second;
                break;

            case Symbols.Multiplication:
                first = getRandomNumber(MAXIMUM[Symbols.Multiplication].min, MAXIMUM[Symbols.Multiplication].max);
                second = getRandomNumber(MAXIMUM[Symbols.Multiplication].min, MAXIMUM[Symbols.Multiplication].max);
                answer = first * second;
            break;

            case Symbols.Division:
                first = getRandomNumber(MAXIMUM[Symbols.Division].min, MAXIMUM[Symbols.Division].max); // doit être second
                second = getRandomNumber(MAXIMUM[Symbols.Division].min, MAXIMUM[Symbols.Division].max);
                // Pour avoir un nombre entier facilement.
                // eslint-disable-next-line no-case-declarations
                const temp = first;
                first = second * temp;
                second = temp;
                answer = first / second;
                break;
        
            default:
                break;
        }

        return {first: first, second: second, answer: answer};
    }
}