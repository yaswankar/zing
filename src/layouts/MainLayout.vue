<template>
  <side-pane-modal :show="sideBarToggle" @close="close">
   <div>Channels</div>
   <div>Files</div>
   <div>Actions</div>
  </side-pane-modal>
  <div class="LayoutDefault">
   <nav class="LayoutDefault__nav">
      <div class="toggler">
        <i class="fa fa-navicon" @click="openSidebar" style="font-size: 28px"></i>
      </div>
      <div class="LayoutDefault__user">
        <button class="logout" @click="logout">Logout</button>
      </div>
    </nav>
    <main class="LayoutDefault__main">
      <slot/>
    </main>
    <footer class="LayoutDefault__footer">
      &copy; Awesome Company
    </footer>
    </div>
</template>

<script>
import firebase from 'firebase';
import SidePaneModal from '../components/modals/SidePaneModal.vue';
import {ref} from 'vue';


export default {
	components: { SidePaneModal },
    name: 'main-layout',
    setup() {
        const sideBarToggle = ref(false);
        const logout = () => {
        firebase.auth().signOut().then(() => console.log('Signed out'))
        .catch(err=> alert(err.message));
        }
        const close = () => {
            sideBarToggle.value = false;
        }
        const openSidebar = () => {
            sideBarToggle.value = true;
        }
        return {
            logout,
            close,
            openSidebar,
            sideBarToggle
        }
    }
}
</script>

<style lang="scss">
.LayoutDefault {
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;

  &__nav {
    padding-top: 0.5em;
    padding-bottom: 1em;
    border-bottom: 1px solid #c0c0c0;
    height: 20px;
    display: flex;
    .toggler {
        width: calc(100% - 100px);
        padding: 0 10px;
    }
  }

  &__user {
    padding-top: 0.5em;;
    float: right;
  }

  &__main {
    padding-top: 1.5em;
    padding-bottom: 2em;
    background: #fafbfb;
  }

  &__footer {
    padding-top: 1em;
    padding-bottom: 1em;
    border-top: 1px solid #c0c0c0;
  }
}

</style>