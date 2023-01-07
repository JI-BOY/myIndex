<template>
    <div class="time">
        <span class="text">距离下班还有</span> <span class="xb">{{ time }}</span>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
const time = ref('12:0:0')
// 24小时倒计时
onMounted(() => {
    setInterval(() => {
        defineTime()
    }, 1000)
})
//  获取当前时间的24小时倒计时
let defineTime = () => {
    let now = new Date(); // 获取当前时间
    let hour = now.getHours(); // 时
    let min = now.getMinutes(); // 分
    let sec = now.getSeconds(); // 秒
    let result = ''; // 返回结果

    let h = 18 - hour; // 一天中剩下的时间(小时)
    if (min > 0 || sec > 0) {
        h -= 1
    }
    let m = 60 - min; // 一天中剩下的时间(分钟)
    if (sec > 0) {
        m -= 1
    }
    if (m == 60) {
        m = 0
    }
    let s = 60 - sec; // 一天中剩下的时间(秒)
    if (s == 60) {
        s = 0
    }

    h = h.toString();
    m = m.toString();
    s = s.toString();
    if (h.length == 1) { // 补0
        h = '0' + h
    }
    if (m.length == 1) { // 补0
        m = '0' + m
    }
    if (s.length == 1) // 补0
        s = '0' + s
    result = h + ':' + m + ':' + s;
    time.value = result

}
</script>
<style lang="scss" scoped>
.time {
    font-size: 40px;
    background-color: #dcdcdc;
    height: 150px;
    line-height: 150px;
    border-radius: 15px;

    .xb {
        font-family: 'LED';
    }
}
</style>
