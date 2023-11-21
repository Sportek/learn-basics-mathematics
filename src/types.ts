export enum Symbols {
  Addition = "+",
  Subtraction = "-",
  Multiplication = "x",
  Division = "/"
}

export type Card = {
    type: "math",
    symbol: Symbols
} | {
    type: "number",
    number: number
}