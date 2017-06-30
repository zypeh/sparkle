<template>
	<textarea placeholder="comment here">{{ value }}</textarea>
</template>

<script>
import autosize from 'autosize'

export default {
    name: 'autoresize-textarea',
    props: ['handle-change', 'value'],
    mounted() { autosize(this.$el) }
}
</script>
<style>
	textarea{
		width:100%;
		border: 0;
		border-top: solid 1px rgba(0,0,0,.0975);
		padding: 5px 2px;
		resize: none;
	}
	textarea:focus{
		outline: 0;
	}
</style>
