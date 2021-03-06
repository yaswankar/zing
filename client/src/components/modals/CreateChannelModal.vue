<template>
  <center-pane-modal :show="showChannelCreateModal" @close="close">
    <div class="modal-container">
        <div class="title">
            <span>Create Channel</span>
            <span class="close-modal" @click="$emit('close', false)">&#10005;</span>
        </div>
        <div class="description">
            <p>A channel is a lightweight space where you can communicate and collaborate with anyone to get work done</p>
            <div class="channel-header">Channel Name</div>
            <input class="channel-name" type="text" v-model="channelName">
            <div class="actions">
                <button @click="createChannel">Create</button>
                <button @click="$emit('close', false)">Cancel</button>
            </div>
        </div>
    </div>
  </center-pane-modal>
</template>

<script>
import {ref, inject} from 'vue';
import {useRouter} from 'vue-router';
import CenterPaneModal from '../modals/CenterPaneModal.vue';
import { useStore } from 'vuex';

export default {
    name: 'create-channel-modal',
    props: [
        'showChannelCreateModal'
    ],
    emits: [
        'close'
    ],
    components: {
        CenterPaneModal
    },
    setup(props, context) {
        const channelName = ref('');
        const $zingService = inject('$zingService');
        const store = useStore();
        const router = useRouter();
        const createChannel = () => {
            $zingService.Channel.createChannel({ channelName: channelName.value, user: store.state.currentUser.email})
            .then(async() => {
                await store.dispatch('getChannels');
                store.commit('updateSelectedChannel');
                if(router.currentRoute._value.fullPath === '/createChannel') router.push('/channels');
                channelName.value = '';
                context.emit('close');
            });
        }
        return {
            channelName,
            createChannel
        }
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
                background: rgba(1, 112, 117, 0.5);
            }
        }
    }
}
</style>