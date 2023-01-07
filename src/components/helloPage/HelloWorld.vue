<template>
  <div class="loading">
    <Transition name="left" :duration="1100">
      <div class="left" v-if="porps.show"></div>
    </Transition>
    <Transition name="right" :duration="1100">
      <div class="right" v-if="porps.show"></div>
    </Transition>
    <div class="loading-item" v-if="porps.show">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const porps = defineProps(["show"]);
</script>
<style lang="scss">
.loading {
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  top: 0;
  left: 0;
  .left,
  .right {
    width: 50vw;
    height: 100%;
    background-color: #b2bbbe;
  }
  .loading-item {
    position: absolute;
    height: 50px;
    line-height: 50px;
    text-align: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    .dot {
      width: 24px;
      height: 24px;
      margin: 5px;
      border-radius: 100%;
      display: inline-block;
      animation: slide 1s infinite;
      background-color: #bfa;
      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          animation-delay: 0.2s * $i;
          // background-color: rgb(random(255), random(255), random(255));
        }
      }
    }
  }
}

@keyframes slide {
  0% {
    transform: scale(1);
  }

  50% {
    opacity: 0.3;
    transform: scale(2);
  }

  100% {
    transform: scale(1);
  }
}

.left-enter-active,
.left-leave-active {
  transition: all 1s ease;
}

.left-enter-from,
.left-leave-to {
  transform: translateX(-110%);
}
.right-enter-active,
.right-leave-active {
  transition: all 1s ease;
}

.right-enter-from,
.right-leave-to {
  transform: translateX(110%);
}
</style>