<template>
  <Teleport to="body">
    <Transition>
      <div class="msg" v-if="show">
        <span>{{ timeText }}</span><span>欢迎来到这里</span>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const show = ref(true)
const timeText = ref('')
const currentTime = new Date().getHours()
onMounted(() => {
  if (currentTime > 23) {
    timeText.value = '夜深了！'
  } else if (currentTime > 20) {
    timeText.value = '天黑了！'
  } else if (currentTime > 18) {
    timeText.value = '天快黑了！'
  } else if (currentTime > 14) {
    timeText.value = '下午好！'
  } else if (currentTime > 10) {
    timeText.value = '中午好！'
  } else if (currentTime > 8) {
    timeText.value = '上午好！'
  } else if (currentTime > 6) {
    timeText.value = '早上好！'
  } else if (currentTime > 3) {
    timeText.value = '天快亮了！'
  }
  const showTimwer = setTimeout(() => {
    clearTimeout(showTimwer)
    show.value = false
  }, 1500)

})
</script>

<style lang="scss" scoped>
.msg {
  position: fixed;
  top: 30px;
  width: 300px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  left: calc(50% - 150px);
  border-radius: 10px;
  animation: msg 1s forwards;
  background-color: $main-color;
  color: #fff;

}

.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
  opacity: 1;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@keyframes msg {
  0% {
    top: 0px;
  }

  25% {
    top: 60px;
  }

  50% {
    top: 10px;
  }

  75% {
    top: 40px;
  }

  100% {
    top: 30px;
  }
}
</style>