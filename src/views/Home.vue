<template>
  <div>
    <b-container fluid>

      <b-row>
        <b-col md="6" offset-md="3">
            <header>
              <h1 class="text-center mt-4">Fibonacci</h1>
              <p>Recibe un número del conjunto de los números Enteros mayores a cero.</p>
              <p>Se regresa un número inmediato de la serie de Fibonacci(0,1), menor o igual.</p>
            </header>

            <article>
              <formFibonacci/>
            </article>

        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>

import formFibonacci from '@components/form'

export default {
  name: 'Home',
  components:{
    formFibonacci
  }
}
</script>

