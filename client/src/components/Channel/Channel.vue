<template>
  <create-channel-modal :showChannelCreateModal="showChannelCreateModal" @close="toggleChannelCreation"/>
  <channel-layout>
      <template #leftSidebar>
          <left-sidebar @toggleModal="toggleChannelCreation"/>
      </template>
      <template #rightSidebar>
          <right-sidebar/>
      </template>
      <template #channel-content>
          <div class="channel-content"></div>
          <div class="text-editor">
              <div class="text-editor__container">
                 <input type="text" placeholder="Say something... or use @ to mention someone">
                 <span class="send-icon"><i class="fa fa-send"></i></span>
              </div>
          </div>
      </template>
  </channel-layout>
</template>

<script>
import {ref} from 'vue';
import ChannelLayout from '../../layouts/ChannelLayout.vue';
import CreateChannelModal from '../modals/CreateChannelModal.vue';
import LeftSidebar from './LeftSidebar.vue';
import RightSidebar from './RightSidebar.vue'

export default {
    name: 'channel',
    components: {
        ChannelLayout,
        LeftSidebar,
        RightSidebar,
        CreateChannelModal
    },
    setup() {
        const showChannelCreateModal = ref(false);
        const toggleChannelCreation = (val) => {
            showChannelCreateModal.value = val;
        }
        return {
            showChannelCreateModal,
            toggleChannelCreation
        };
    }
}
</script>

<style lang="scss" scoped>
 .channel-content {
    height: calc(100% - 100px);
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