<template>
  <div class="createchannel-main">
      <div class="title">Hi {{currentUser}}</div>
      <div class="welcome-msg">Welcome to Zing. <br> There is nothing here yet. Start by creating a channel</div>
      <div class="create">
          <div class="text">
              <i class="fa fa-plus" style="height: 30px; font-size: 30px;"></i>
              <div style="margin-top: 10px;">Create Channel</div>
          </div>
      </div>
  </div>
</template>

<script>
import {computed} from 'vue';
import {useStore} from 'vuex';

export default {
setup() {
      const store = useStore();
      return {
        currentUser: computed(() => store.state.currentUser), //Shows up as an empty object
      };
    }
}
</script>

<style lang="scss" scoped>
.createchannel-main {
    text-align: center;
    .title {
        color: #360167;
        font-size: 32px;
    }
    .welcome-msg {
        margin-top: 60px;
        font-size: 20px;
        line-height:1.6;
    }
    .create {
        height: 200px;
        width: 250px;
        margin: 30px auto;
        border: 2px dashed #8a9486;
        &:hover {
            cursor: pointer;
        }
        .text {
            color: #8a9486;
            width: 150px;
            height: 40px;
            margin: 70px auto;
        }
    }
}
</style>