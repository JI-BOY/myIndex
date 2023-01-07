<template>
    <div class="oneword">
        <h2> {{ text }}</h2>
        <p class="from"><span>——</span><span>{{ from }}</span></p>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const text = ref('')
const from = ref('')
onMounted(() => {
    fetch('https://v1.hitokoto.cn/').then(r => r.json()).then(res => {
        text.value = res.hitokoto
        from.value = res.from
    })
})
</script>

<style lang="scss" scoped>
.oneword {
    .from {
        text-align: right;
        margin-top: 20px;
    }
}
</style>