<template>
  <div class="item" @click="show = true">
    <component :is="porps.icon" :size="iconSize"></component>
    <div class="msg">
      {{ porps.msg }}
    </div>
    <Teleport to="body">
      <transition name="animation">
        <div class="dialogBox isShowMask" v-if="show" @click.self="show = false">
          <div class="dialogBoxContent">
            <div class="headhead">
              <slot name="header">
                <span>{{ porps.title || 'Tips' }}</span>
              </slot>
              <close @click="show = false" theme="outline" size="20" fill="#333" strokeLinecap="butt" />
            </div>
            <div class="bodybody">
              <slot></slot>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Close } from '@icon-park/vue-next';
const porps = defineProps(['icon', 'msg', 'iconSize', 'title'])
const show = ref(false)
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 15px;
  background-color: rgba(0, 0, 0, .4);
  border-radius: 15px;
  backdrop-filter: blur(5px);
}

.pb {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.4);

  .popups {
    position: absolute;

    width: 600px;
    height: 400px;
    background-color: #fff;
    border-radius: 15px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 20px;
    margin: auto;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>