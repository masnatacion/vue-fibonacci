<template>
  <div>
    <b-form @submit.prevent="submit">
      <b-row>
        <b-col md="4">
          <b-form-input
            class="mr-2"
            type="number"
            :state="!$v.form.number.$error && null"
            v-model="form.number"
            placeholder="Ingresa un número"
            min="0"
            step="1"
            ref="number"
            autofocus
            />

          <b-form-invalid-feedback>
            Campo requerido y debe ser un entero
          </b-form-invalid-feedback>
        </b-col>

        <b-col md="2">
          <b-button
            variant="primary"
            :disabled="$v.$invalid"
            type="submit">
            Calcular
          </b-button>
        </b-col>

        <b-col md="6">
          <resultFibonacci/>
        </b-col>
      </b-row>

    </b-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { validationMixin } from 'vuelidate'
import { required, numeric, minLength } from 'vuelidate/lib/validators'

import resultFibonacci from '@components/resultFibonacci'

export default {
  name: 'formFibonacci',
  mixins: [validationMixin],
	data: function() {
		return {
      form: {
        number: '',
      },
		}
	},
  computed:{

  },
  validations: {
    form: {
      number: {
        required,
        numeric,
        minLength: minLength(1)
      }
    }
  },
	methods: {
    ...mapMutations(['setSequence']),
		submit() {
      let me = this;

      me.$v.$touch();

      if (!me.$v.$invalid) {
        me.setSequence(me.getSequence(me.form.number));
        me.form.number = "";
      }

      me.focusNumber();
		},

    focusNumber()
    {
      let me = this;
      me.$refs.number.focus();
    },

    getFibonacci(number){
      let me = this;
      if (number <= 1) return 1;
      return me.getFibonacci(number - 1) + me.getFibonacci(number - 2);
    },

    getSequence(number) {
      let me = this;
      let index = 0;
      let lastValue = 0;
      let sequence = [];
      while (lastValue <= number) {
        sequence.push(lastValue);
        lastValue = me.getFibonacci(index);
        index++;
      }
      return sequence;
    }
  },

  components:{
    resultFibonacci
  }

}


</script>
