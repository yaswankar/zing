<template>
<main-layout>
  <create-channel-modal :showChannelCreateModal="showChannelCreateModal" @close="toggleChannelCreation"/>
  <add-user-modal :showAddUserModal="showAddUserModal" @close="toggleUserAddModal"/>
  <channel-layout>
      <template #leftSidebar>
          <left-sidebar @toggleModal="toggleChannelCreation"/>
      </template>
      <template #rightSidebar>
          <right-sidebar/>
      </template>
      <template #channel-content>
          <div class="channel-content">
              <div class="channel-space">
                <span class="channel-name">{{selectedChannel}}</span>
                <span class="channel-users has-count" @click="toggleUserAddModal(true)" :data-count="userCount"><i class="fa fa-users" aria-hidden="true"></i></span>
              </div>
          </div>
          <div class="text-editor">
              <div class="text-editor__container">
                 <input type="text" placeholder="Say something... or use @ to mention someone">
                 <span class="send-icon"><i class="fa fa-send"></i></span>
              </div>
          </div>
      </template>
  </channel-layout>
  </main-layout>
</template>

<script>
import {ref, computed} from 'vue';
import {useStore} from 'vuex';
import MainLayout from '../../layouts/MainLayout.vue';
import ChannelLayout from '../../layouts/ChannelLayout.vue';
import CreateChannelModal from '../modals/CreateChannelModal.vue';
import AddUserModal from '../modals/AddUserModal.vue';
import LeftSidebar from './LeftSidebar.vue';
import RightSidebar from './RightSidebar.vue'

export default {
    name: 'channel',
    components: {
        MainLayout,
        ChannelLayout,
        LeftSidebar,
        RightSidebar,
        CreateChannelModal,
        AddUserModal
    },
    setup() {
        const store = useStore();
        const showChannelCreateModal = ref(false);
        const showAddUserModal = ref(false);
        const toggleChannelCreation = (val) => {
            showChannelCreateModal.value = val;
        }
        const toggleUserAddModal = (val) => {
            showAddUserModal.value = val;
        }
        return {
            showChannelCreateModal,
            showAddUserModal,
            toggleChannelCreation,
            toggleUserAddModal,
            selectedChannel: computed(() => store.state.selectedChannel),
            userCount: computed(() => {
                if(store.state.channels) {
                    const channel = store.state.channels.find(item => item.channelName === store.state.selectedChannel);
                    if(channel) return channel.users.length;
                    else return 0;
                }
                else return 0;
            })     
        };
    }
}
</script>

<style lang="scss" scoped>
 .channel-content {
    height: calc(100% - 100px);
    .channel-space {
        position: relative;
        top: -30px;
        margin: 0 30px 0 30px;
        .channel-name {
        }
        .channel-users {
            float: right;
            font-size: 20px;
            padding-right: 10px;
            i {
                color: #8a94a6;
            }
        }
        .has-count[data-count]:after {
            position: absolute;
            right: 0;
            top: 16px;
            content: attr(data-count);
            font-size: 10px;
            padding: 0.1em;
            border-radius: 50%;
            line-height: 1.3em;
            color: white;
            background: #017075;
            text-align: center;
            min-width: 1.5em;
            font-weight: bold;
        }
    }
 }
 .text-editor {
    height: 65px;
    width: 100%;
    border-top: 1px solid #e7e7e7;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
    &__container {
        width: 100%;
        input {
            background: #f1f2f4; 
            height: 35px; 
            width: calc(100% - 80px); 
            border: 1px solid #fff; 
            border-radius: 5px;
            margin-left: 10px;
            &:focus {
                box-shadow: 0px 0px 2px 2px#017075;
                outline: none;
            }
        }
        .send-icon {
            margin-left: 20px;
            color: #017075;
            border-radius: 50%;
            height: 40px;
            padding: 10px;
            &:hover {
                background: #017075;
                color: white;
                transition: 0.3s;
                cursor: pointer;
            }
        }
    }
 }
</style>