<template>
	<textarea :placeholder="placeholder"></textarea>
</template>

<script>
import autosize from 'autosize'

export default {
	name: 'autoresize-textarea',
	props: ['handle-change', 'value'],
	props:{
      placeholder : { default: null },
    },
	mounted() { autosize(this.$el) },
}
</script>
