<style scoped lang="less">
  div {
    color: red;
    font-size: 18px;
  }
</style>

<template>
  <div>{{message}}</div>
  <Button @click="setMessage('button msg')">set msg</Button>
  <div>{{num}}</div>
  <Button @click="num++">set num</Button>
</template>

<script>
import useAppStore from '../store/app'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

export default {
  setup() {
    const appStore = useAppStore()
    const { message } = storeToRefs(appStore)
    const { setMessage } = appStore
    return {
      message, setMessage, num: ref(0)
    }
  },
  mounted() {
    this.setMessage('hello electron-forge')
  },
};
</script>
