<template>
  <create-channel-modal :showChannelCreateModal="showChannelCreateModal" @close="close"/>
  <div class="createchannel-main">
      <div class="title">Hi {{currentUser ? currentUser.username : '' }}</div>
      <div class="welcome-msg">Welcome to Zing. <br> There is nothing here yet. Start by creating a channel</div>
      <div class="create" @click="openPopup">
          <div class="text">
              <i class="fa fa-plus" style="height: 30px; font-size: 30px;"></i>
              <div style="margin-top: 10px;">Create Channel</div>
          </div>
      </div>
  </div>
</template>

<script>
import {computed, ref} from 'vue';
import {useStore} from 'vuex';
import CreateChannelModal from '../components/modals/CreateChannelModal.vue';

export default {
    name: 'create-channel',
    components: { CreateChannelModal },
    setup() {
        const store = useStore();
        const showChannelCreateModal = ref(false);
        const openPopup = () => {
          showChannelCreateModal.value = true;
        }
        const close = () => {
          showChannelCreateModal.value = false;
        }
        return {
            showChannelCreateModal,
            currentUser: computed(() => store.state.currentUser), //Shows up as an empty object
            openPopup,
            close
         };
        }
}
</script>

<style lang="scss" scoped>
.createchannel-main {
    text-align: center;
    padding-top: 1.5em;
    padding-bottom: 2em;
    background: #fafbfb;
    .title {
        color: #017075;
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