<template>
  <div class="channel-item-container">
        <div class="collapsible-row"  @click="expandCollapse">
        <span class="collapser" v-if="expand">
            <i class="fa fa-caret-down"></i>
        </span>
        <span class="collapser" v-if="!expand">
            <i class="fa fa-caret-right"></i>
        </span>
        <span class="title">{{title}}</span>
        </div>
        <transition name="slide-fade">
            <div v-if="expand" style="max-height: 225px; overflow: auto; margin-top: 5px;">
            <div class="empty-wrapper" v-if="!channels.length">
                You do not have any direct messages yets
            </div>
            <div class="channel-menu-item" v-else v-for="(channel, index) in channels" v-bind:key="index" @click="updateSelectedChannel(channel.channelName)">{{channel.channelName}}</div>
            </div>
        </transition>
  </div>
</template>

<script>
import {ref, computed} from 'vue';
import {useStore} from 'vuex';

export default {
    name: 'channel-item',
    props: ['title'],
    setup(props) {
        const expand = ref(false);
        const store = useStore();
        const expandCollapse = () => {
            expand.value = !expand.value;
        }
        const channels =  computed(() => {
                if(props.title !== 'Direct Messages') 
                  return store.state.channels
                else return []
        });
        const updateSelectedChannel = (name) => {
            store.commit('updateSelectedChannel', name);
        }
        return {
            expand,
            expandCollapse,
            channels,
            updateSelectedChannel
        }
    }
}
</script>

<style lang="scss">
 .channel-item-container {
    height: 40px;
    border-bottom: 1px solid #e7e7e7;
    padding: 10px;
    box-sizing: border-box;
    vertical-align: middle;
    height: auto;
    .collapsible-row {
        color: #8A94A6;
        font-weight: 700;
        .collapser {
            font-size: 12px;
        }
        .title {
            margin-left: 15px;
            font-size: 13px;
        }
    }
    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
    transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
    }
    .empty-wrapper {
        height: 60px;
        font-size: 13px;
        color: #b0b7c3;
        background: #fafafa;
        width: 200px;
        margin: 10px auto;
        padding: 15px;
        box-sizing: border-box;
        border-radius: 5px;
    }
    .channel-menu-item {
        padding: 10px 10px 10px 20px;
        border-bottom: 1px solid #e7e7e7;
        box-sizing: border-box;
        font-size: 13px;
        color: #4e4f52;
        vertical-align: middle;
        height: auto;
        &:first-child {
           padding: 20px 10px 10px 20px; 
        }
        &:last-child {
            border-bottom: 1px solid #fff;
            padding: 10px 10px 0px 20px;
        }
    }
 }
</style>