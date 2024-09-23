<script setup lang="ts">
import { ref } from 'vue'
import { users, User } from '../../data/users'
import { products } from "../../data/product";
import { Maybe } from 'monet'

const userId = ref('')
const user = ref<User | null>(null)
const errorMsg = ref('')

const findUser = (id: string): User | undefined =>
    users.find(user => user.id === id)

const setError = () => {
  errorMsg.value = 'Not found'
  console.log('toast with error')
}

const getUser = (id: string) =>
    Maybe.fromNull(findUser(id))
        .cata(
            () => setError(),
            (founded) => user.value = founded
        )

const resetSearchValue = () => {
  user.value = null;
  errorMsg.value = ''
}
const resetApp = () => {
  userId.value = ''
  resetSearchValue()
}
const isUserExist = () => {
  resetSearchValue()
  getUser(userId.value)
}


//anyway it throws undefined becouse id doesn't exists
const getProduct = (id: string) =>
    products.filter(product =>
        Maybe.fromFalsy(product.id).getOrElse('-1') === id
    )

</script>

<template>
  <p>- from Nullable</p>
  <input style="border: 1px solid black" type="text" v-model="userId" />
  <button @click="isUserExist">Find user</button>
  <button @click="resetApp">Reset</button>
  <p v-if="errorMsg.length">{{ errorMsg }}</p>
  <p v-if="user">User: {{ user }}</p>
</template>