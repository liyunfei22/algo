<template>
  <div class="math-demo">
    <input v-model.number="num1" type="number">
    <select v-model="operation">
      <option value="add">+</option>
      <option value="subtract">-</option>
      <option value="multiply">*</option>
    </select>
    <input v-model.number="num2" type="number">
    <button @click="calculate">=</button>
    <span>{{ result }}</span>
  </div>
</template>

<script>
import { ref } from 'vue'
import * as RollupTs from '@redarsenal/rollup-ts'

export default {
  setup() {
    const num1 = ref(5)
    const num2 = ref(3)
    const operation = ref('add')
    const result = ref(0)

    const calculate = () => {
      switch (operation.value) {
        case 'add':
          result.value = RollupTs.add(num1.value, num2.value)
          break
        case 'subtract':
          result.value = RollupTs.subtract(num1.value, num2.value)
          break
        case 'multiply':
          result.value = RollupTs.multiply(num1.value, num2.value)
          break
      }
    }

    return {
      num1,
      num2,
      operation,
      result,
      calculate
    }
  }
}
</script>

<style scoped>
.math-demo {
  margin: 20px 0;
}
</style>