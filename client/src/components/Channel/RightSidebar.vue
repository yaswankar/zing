<template>
  <div class="header">
    <div class="action-button" :class="{'active': active.actions, 'inactive': !active.actions}" @click="enableTab('actions')">
      <span><i class="fa fa-tasks"></i></span>
      <span>Actions</span>
    </div>
    <div class="action-button" :class="{'active': active.files, 'inactive': !active.files}" @click="enableTab('files')">
      <span><i class="fa fa-file-text-o"></i></span>
      <span>Files</span>
    </div>
    <div class="action-button" :class="{'active': active.wiki, 'inactive': !active.wiki}" @click="enableTab('wiki')">
      <span><i class="fa fa-info-circle"></i></span>
      <span>Wiki</span>
    </div>
  </div>
  <div>
    <component v-bind:is="content" />
  </div>
</template>

<script>
import {ref} from 'vue';
import Actions from '../Actions.vue';
import Files from '../Files.vue';
import Wiki from '../Wiki.vue';

export default {
 name: 'right-side-bar',
 components: {
   Actions,
   Files,
   Wiki
 },
 setup() {
  const active = ref({actions: true, files: false, wiki: false});
  const content = ref('actions');
  const enableTab = (type) => {
    for(let entry in active.value) {
      if(entry === type) {
        active.value[type] = true;
        content.value = type;
      } else active.value[entry] = false;
    }
  }
  return {
    active,
    content,
    enableTab
  }
 }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  text-align: center;
  display: flex;
  font-size: 14px;
  padding: 10px 15px;
  background: #fafafa;
  box-sizing: border-box;
  border-bottom: 1px solid #e7e7e7;
  .action-button {
    color: #017075;
    width: 33.33%;
    padding: 10px;
    margin-left: 0.33%;
    &:hover {
      cursor: pointer;  
    }
    span:nth-child(2) {
      margin-left: 7px;
    }
  }
  .active {
    background: rgba(1, 112, 117, 0.1);
    transition: 0.5s;
    border-radius: 20px;
  }
  .inactive {
    background: #fafafa;
    color: #0a1f44;
    transition: 0.2s;
  }
}
</style>