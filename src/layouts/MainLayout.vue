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
        <div class="user-icon" @click="openUser">{{currentUser? currentUser[0].toUpperCase() : ''}}</div>
        <div id="myDropdown" v-if="userToggle" class="dropdown-content">
          <a href="#home">Settings</a>
          <a href="#about">Contact</a>
          <a href="#contact">About</a>
          <a href="#contact" @click="logout">Logout</a>
        </div>
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
import {ref, computed, onMounted, onBeforeUnmount} from 'vue';
import {useStore} from 'vuex';

export default {
	components: { SidePaneModal },
    name: 'main-layout',
    setup() {
        const sideBarToggle = ref(false);
        const userToggle = ref(false);
        const store = useStore();
        onMounted(() => {
          document.addEventListener('click', closeUserPopup)
        });
        onBeforeUnmount(() => {
          document.removeEventListener('click', closeUserPopup);
        })
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
        const openUser = () => {
            userToggle.value = !userToggle.value;

        }
        const closeUserPopup = (event) => {
              if (!event.target.matches('.user-icon')) {
                userToggle.value = false;
              }
          }
        return {
          currentUser: computed(() => store.state.currentUser), //Shows up as an empty object
            logout,
            close,
            openSidebar,
            openUser,
            closeUserPopup,
            sideBarToggle,
            userToggle
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
        width: calc(100% - 80px);
        padding: 0 10px;
    }
  }

  &__user {
    padding-top: 0.5em;
    display: inline-flex;
    float: right;
    &:hover {
      cursor: pointer;
      user-select: none;
    }
    .user-icon {
      width: 18px;
        padding: 7px;
        margin-top: -10px;
        min-height: 17px;
        font-weight: bold;
        text-align: center;
        border-radius: 50%;
        color: white;
        background: #360167;
    }
    .dropdown-content {
      display: block;
      font-size: 14px;
      right: 10px;
      top: 42px;
      position: absolute;
      background-color: #fff;
      min-width: 120px;
      overflow: auto;
      box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.2);
      z-index: 1;
      a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        &:hover {
          background: #fafbfb;
        }
      }
    }
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