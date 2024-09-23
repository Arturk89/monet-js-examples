<script setup lang="ts">
import { ref } from 'vue'
import { users } from '../../data/users'
import {Either, Maybe} from "monet";

const isPromiseSuccess = ref(true)

function getFakeData() {
  return new Promise((resolve, reject) => {
    setTimeout(() =>
        isPromiseSuccess.value ?
            resolve(users) :
            reject('Wystąpił błąd podczas pobierania danych.')
        , 1000);
  });
}

Either.fromPromise(getFakeData())
    .then(res => Maybe.fromFalsy(res.isRight())
        .cata(() => {
          console.log('err ', res)
        }, () => {
          console.log('success ', res)
          return res
        }))

</script>

<template>
</template>