<template>
  <Message />
  <Transition name="main">
    <div class="main" v-if="active">
      <div class="myInfo" @mousedown="bgColor.qq = '#2c3e50'">
        <OneWord></OneWord>
        <div class="bot">
          <div class="icons">
            <a href="tencent://message/?uin=1247386221&Site=&Menu=yes" @mouseenter="bgColor.qq = false"
              @mouseleave="bgColor.qq = true">
              <tencent-qq v-if="bgColor.qq" theme="outline" size="25" fill="#333" />
              <tencent-qq v-else theme="outline" size="25" fill="#40ad95" />
            </a>
            <a @mouseenter="bgColor.wechar = false" @mouseleave="bgColor.wechar = true">
              <wechat v-if="bgColor.wechar" theme="outline" size="25" fill="#333" />
              <wechat v-else theme="outline" size="25" fill="#40ad95" />
            </a>
            <a @mouseenter="bgColor.telegram = false" @mouseleave="bgColor.telegram = true">
              <telegram v-if="bgColor.telegram" theme="outline" size="25" fill="#333" />
              <telegram v-else theme="outline" size="25" fill="#40ad95" />
            </a>
            <a href="https://github.com/JI-BOY" @mouseenter="bgColor.github = false"
              @mouseleave="bgColor.github = true">
              <github v-if="bgColor.github" theme="outline" size="25" fill="#333" />
              <github v-else theme="outline" size="25" fill="#40ad95" />
            </a>

          </div>
          <div class="info">
            <p>©2020 - 2023 By 牧雨</p>
            <p>©豫ICP备2022020894号-1</p>
          </div>
          <div class="down">
            <drop-down-list theme="outline" size="30" fill="#333" />
          </div>
        </div>
      </div>
      <div class="module">
        <div class="boark">
          <TopTime></TopTime>
        </div>
        <div class="tools">
          <Item class="box" v-for="item in myDb" :icon="Home" :msg="item.itemName" iconSize="48px">
            <div class="test">
              弹窗内容暂未开发！！
            </div>
          </Item>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import Message from "@/components/message/Message.vue";
import OneWord from "@/components/oneword/OneWord.vue";
import Item from "@/components/item/Item.vue";
import TopTime from "@/components/toptime/TopTime.vue";
import { Home, TencentQq, Wechat, Telegram, Github, DropDownList } from '@icon-park/vue-next';
// const show = ref(true);
const active = ref(false);
const myDb = ref([]);
const bgColor = reactive({
  qq: true,
  wechar: true,
  telegram: true,
  github: true,
})
onMounted(() => {
  active.value = true;
  fetch('./mydb/item.json').then(r => r.json()).then(res => {
    console.log(res);
    myDb.value = res
  })
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  color: #2c3e50;

  .main {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 750px) {
      display: block;
    }

    .myInfo {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: linear-gradient($main-color, #fff);
      color: #fff;
      height: 100%;
      flex: 2;
      box-sizing: border-box;
      padding: 100px 40px;

      .bot {
        .icons {
          span {
            margin: 3px;
          }
        }

        .info {
          color: $main-color;
          font-size: 12px;

          p {
            margin: 3px;
          }
        }

        .down {
          border-radius: 50%;
          width: 30px;
          height: 30px;
          padding: 3px;
          border: 3px solid #333;
          display: inline-block;
          margin-top: 15px;

          @media screen and (min-width: 750px) {
            display: none;

          }
        }
      }
    }

    .module {
      flex: 4;
      height: 100%;
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;



      .boark {
        height: 200px;
        // background-color: #2c3e50;
        width: 100%;
        margin-bottom: 20px;
      }

      .tools {
        height: 300px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;

        .box {
          width: 25%;
          height: 100px;
          box-sizing: border-box;

          .test {
            font-size: 99px;
          }
        }

      }
    }
  }
}

.main-enter-active,
.main-leave-active {
  transition: all 0.5s ease;
}

.main-enter-from,
.main-leave-to {
  transform: scale(1.3);
}
</style>
