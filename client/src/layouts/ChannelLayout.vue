<template>
  <div id="myLeftSidebar" class="leftSidebar">
    <slot name="leftSidebar"></slot>
  </div>
  <div id="myRightSidebar" class="rightSidebar">
    <slot name="rightSidebar"></slot>
  </div>

  <div id="channel-main">
    <div class="collpasible-actions" style="width: 100%;">
      <button @click="toggleLeftNav">
        <i :class="{'fa fa-angle-double-left': leftNav, 'fa fa-angle-double-right': !leftNav}"></i>
      </button>
      <button @click="toggleRightNav" style="float: right;">
        <i :class="{'fa fa-angle-double-left': !rightNav, 'fa fa-angle-double-right': rightNav}"></i>
      </button>
    </div>
    <slot name="channel-content"></slot>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue';

export default {
    name: 'channel-layout',
    setup() {
        const leftNav = ref(true);
        const rightNav = ref(true);

        onMounted(() => {
          document.getElementById("myLeftSidebar").style.width = "250px";
          document.getElementById("channel-main").style.marginLeft = "250px";

          document.getElementById("myRightSidebar").style.width = "350px";
          document.getElementById("channel-main").style.marginRight = "350px";
        });
        /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
        const toggleLeftNav = () => {
          leftNav.value = !leftNav.value;
          if(leftNav.value) {
            document.getElementById("myLeftSidebar").style.width = "250px";
            document.getElementById("channel-main").style.marginLeft = "250px";
          } else {
            document.getElementById("myLeftSidebar").style.width = "0";
            document.getElementById("channel-main").style.marginLeft = "0";
          }
        }

         /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
        const toggleRightNav = () => {
          rightNav.value = !rightNav.value
          if(rightNav.value) {
            document.getElementById("myRightSidebar").style.width = "350px";
            document.getElementById("channel-main").style.marginRight = "350px";
          } else {
            document.getElementById("myRightSidebar").style.width = "0";
            document.getElementById("channel-main").style.marginRight = "0";
          }
        }

        return {
            leftNav,
            rightNav,
            toggleLeftNav,
            toggleRightNav
        }
    }

}
</script>

<style lang="scss" scoped>
/* The sidebar menu */
.leftSidebar, .rightSidebar {
  height: calc(100% - 45px); /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  margin-top: 45px;
  position: fixed; /* Stay in place */
  top: 0;
  // background-color: #fff; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */ /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the leftSidebar */
}
.leftSidebar {
  left: 0;
  border-right: 1px solid #c0c0c0;
}
.rightSidebar {
  right: 0;
  border-left: 1px solid #c0c0c0;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#channel-main {
  transition: margin .5s; /* If you want a transition effect */
  background: #fafbfb;
  height: 100%;
  padding: 5px 0;
  box-sizing: border-box;
  .collpasible-actions {
    width: 100%;
    height: 40px;
    button {
      background: rgba(1, 112, 117, 0.5);
      color: white;
      border: 1px solid #fff;
      height: 30px;
      &:focus {
        outline: none;
      }
      i {
        font-size: 18px;
      }
    }
  }
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
// @media screen and (max-height: 450px) {
//   .leftSidebar {padding-top: 15px;}
  // .rightSidebar {padding-top: 15px;}
// }




</style>