<template>
          <div class="header">
              <button @click="emitToggle">+</button>
              <button>
                  <i class="fa fa-clone"></i>
              </button>
          </div>
          <div class="search">
              <div  class="search__container">
                <span>
                    <i class="fa fa-filter"></i>
                </span>
                <span>
                    <input type="text" placeholder="Filter channel...">
                </span>
              </div>
          </div>
          <channel-item :title="'Uncategorized Channels'"/>
          <channel-item :title="'Direct Messages'"/>
</template>

<script>
import ChannelItem from './ChannelItem.vue';

export default {
    name: 'left-side-bar',
    emits: ['toggleModal'],
    components: { ChannelItem },
    setup(props, context) {
        const emitToggle = () => {
            context.emit('toggleModal', true);
        };
        
        return {
            emitToggle
        }
    }
}
</script>

<style lang="scss" scoped>
.fa {
    color: #017075;
}
.header {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    button {
        font-size: 20px;
        background: #fff;
        border: 1px solid rgba(1, 112, 117, 0.5);
        color: #017075;
        border-radius: 3px;
        &:focus {
            outline: none;
        }
    }
    button:nth-child(2) {
        float: right;
        background: #fff;
        border: none;
        height: 30px;
    }
}
.search {
    padding: 10px; 
    text-align: center;
    &__container {
        border: 1px solid #c0c0c0; 
        padding: 5px; box-sizing: border-box; 
        border-radius: 5px;
        span {
            input {
                border: none;
                &:focus {
                    outline: none;
                    height: 100%;   
                }
            }
        }
        span:nth-child(2) {
            margin-left: 10px;
        }
    }
}
</style>