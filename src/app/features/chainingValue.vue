<script setup lang="ts">
import { IO, Maybe } from 'monet'
const DEFAULT_VALUE = '0.00$'
const getMaybeFalsyValueFromStorage = () => null
const getValueFromStorage = () => '20000'
const parseToNumber = (value: string) => parseInt(value, 10)
const getDollarsFromCents = (cents: number) => cents / 100
const cashFormat = (dollars: number) => dollars.toFixed(2)
const getCurrencySign = (cash: string) => cash.concat('$')



const resultOne = IO(getValueFromStorage)
    .map(value => parseToNumber(value))
    .map(cents => getDollarsFromCents(cents))
    .map(dollars => cashFormat(dollars))
    .map(cash => getCurrencySign(cash))
    .run()

// console.log('resultOne ', resultOne)

const resultTwo = IO(getValueFromStorage)
    .map(parseToNumber)
    .map(getDollarsFromCents)
    .map(cashFormat)
    .map(getCurrencySign)
    .run()

// console.log('resultTwo simply: ', resultTwo)


const resultThree =
    Maybe.fromNull(getMaybeFalsyValueFromStorage())
      .map(parseToNumber)
      .map(getDollarsFromCents)
      .map(cashFormat)
      .map(getCurrencySign)
      .getOrElse(DEFAULT_VALUE)

// console.log('resultThree ', resultThree)

</script>

<template>
  <p>IO</p>
</template>