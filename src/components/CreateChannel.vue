<template>
  <center-pane-modal :show="showChannelCreateModal" @close="close">
    <div class="modal-container">
        <div class="title">
            <span>Create Channel</span>
            <span class="close-modal" @click="close">&#10005;</span>
        </div>
        <div class="description">
            <p>A channel is a lightweight space where you can communicate and collaborate with anyone to get work done</p>
            <div class="channel-header">Channel Name</div>
            <input class="channel-name" type="text">
            <div class="actions">
                <button>Create</button>
                <button @click="close">Cancel</button>
            </div>
        </div>
    </div>
  </center-pane-modal>
  <div class="createchannel-main">
      <div class="title">Hi {{currentUser.username}}</div>
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
import CenterPaneModal from '../components/modals/CenterPaneModal.vue';

export default {
    name: 'create-channel',
    components: { CenterPaneModal },
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
.modal-container {
    width: 500px;
    .title {
        padding: 20px;
        box-sizing: border-box;
        font-size: 18px;
        background: rgb(216, 216, 216);
        .close-modal {
            float: right;
            font-size: 20px;
            &:hover {
                user-select: none;
                cursor: pointer;
            }
        }
    }
    .description {
        padding: 20px;
        box-sizing: border-box;
        p {
            font-size: 14px;
            color: rgb(107, 106, 106);
        }
        .channel-header {
            margin-top: 30px;
            font-size: 15px;
        }
        .channel-name {
            margin-top: 15px;
            font-size: 15px;
            height: 30px;
            width: 99%;
            font-size: 15px;
        }
        .actions {
            width: 250px;
            margin: 30px auto;
            text-align: center;
            box-sizing: border-box;
            button {
                margin-right: 20px;
                height: 30px;
                height: 35px;
                width: 105px;
                color: #fff;
                font-weight: 700;
                border: 1px solid #fff;
                border-radius: 5px;
                background: rgba(54, 1, 103, 0.5);
            }
        }
    }
}
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