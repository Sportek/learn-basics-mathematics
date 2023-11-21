/// <reference types="vite/client" />
enum Symbols {
  Addition = "+",
  Subtraction = "-",
  Multiplication = "x",
  Division = "/"
}

type Card = {
    type: "math",
    symbol: Symbols
} | {
    type: "number",
    number: number
}