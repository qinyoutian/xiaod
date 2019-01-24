<template>
    <div>
        <p class="title">
            <i class="cubeic-home"></i>
            {{listtitle}}
            <i class="cubeic-home"></i>
        </p>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:['listtitle'],
    data(){
        return {

        }
    }
}
</script>
<style lang='stylus'>
    .title
        height 40px
        line-height  40px
        text-align center
        font-size  15px
        i 
            font-size 12px


</style>
