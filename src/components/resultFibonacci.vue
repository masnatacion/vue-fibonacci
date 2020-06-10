<template>
  <div>
    <span class="h3 text-left">
      {{ fibonacci }}
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'resultFibonacci',

	data: function() {
		return {
		}
	},
  computed:{
    ...mapState(['fibonacci'])
  },

}


</script>
