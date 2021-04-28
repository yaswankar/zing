<template>
  <create-channel-modal :showChannelCreateModal="showChannelCreateModal" @close="toggleChannelCreation"/>
  <channel-layout>
      <template #leftSidebar>
          <left-sidebar @toggleModal="toggleChannelCreation"/>
      </template>
      <template #rightSidebar>
          <right-sidebar/>
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
</style>