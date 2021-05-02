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
            <div class="empty-wrapper" v-if="emptyWrapper && expand">
                You do not have any direct messages yets
            </div>
        </transition>
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
    name: 'channel-item',
    props: ['title'],
    setup() {
        const expand = ref(false);
        const emptyWrapper = ref(true);
        const expandCollapse = () => {
            expand.value = !expand.value;
        }
        return {
            expand,
            emptyWrapper,
            expandCollapse
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
 }
</style>