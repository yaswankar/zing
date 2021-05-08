<template>
  <center-pane-modal :show="showAddUserModal" @close="close">
    <div class="modal-container">
        <div class="title">
            <span>Add User</span>
            <span class="close-modal" @click="$emit('close', false)">&#10005;</span>
        </div>
        <div class="description">
            <p>The user will be able to view all the messages posted in this channel</p>
            <div class="channel-header">User Email</div>
            <input class="channel-name" type="email" v-model="userMail">
            <div class="actions">
                <button @click="addUser">Add</button>
                <button @click="$emit('close', false)">Cancel</button>
            </div>
        </div>
    </div>
  </center-pane-modal>
</template>

<script>
import {ref, inject, onBeforeUnmount} from 'vue';
import CenterPaneModal from '../modals/CenterPaneModal.vue';
import { useStore } from 'vuex';

export default {
    name: 'add-user-modal',
    props: [
        'showAddUserModal'
    ],
    emits: [
        'close'
    ],
    components: {
        CenterPaneModal
    },
    setup(props, context) {
        const userMail = ref('');
        const $zingService = inject('$zingService');
        const store = useStore();
        const addUser = () => {
            $zingService.Channel.addUser({ channelName: store.state.selectedChannel, user: userMail.value})
            .then(async() => {
                await store.dispatch('getChannels');
                userMail.value = '';
                context.emit('close');
            });
        }
        onBeforeUnmount(() => {
            userMail.value = '';
        });
        return {
            userMail,
            addUser
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