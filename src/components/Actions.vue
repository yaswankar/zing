<template>
  <div class="actions-header-one">
      <div style="float: right;" class="header-content">
          <span><i class="fa fa-expand"></i></span>
          <span>View Board</span>
      </div>
  </div>
  <div class="actions-header-two">
    <div class="search">
        <span>
            <i class="fa fa-search"></i>
        </span>
        <span>
            <input type="text" placeholder="Search Actions">
        </span>
    </div>
  </div>
  <div class="content-one">
      <div class="action-field">
        <span><i class="fa fa-plus"></i></span>
        <span class="action-name"><input type="text"></span>
      </div>
  </div>
  <div class="empty-content">
      <div class="icon"><i class="fa fa-tasks"></i></div>
      <div class="caption">No Actions</div>
      <p class="message">Add an action by clicking the 'Add Action' button or by clicking the message buttons</p>
      <button class="add-action">Add Action</button>
  </div>
</template>

<script>
export default {
    name: 'actions'
}
</script>

<style lang="scss" scoped>
.fa {
    color: #017075;
}
.actions-header-one {
    height: 40px;
    font-size: 14px;
    box-sizing: border-box;
    padding: 10px;
    border-bottom: 1px solid #e7e7e7;
    .header-content {
        color: #8a94a6;
        float: right;
        margin-left: 5px;
        &:hover {
            cursor: pointer;
        }
        span {
            margin-left: 5px;
        }
    }
}
.actions-header-two {
    height: 50px;
    font-size: 14px;
    box-sizing: border-box;
    padding: 10px;
    border-bottom: 1px solid #e7e7e7;
    .search {
        border: 1px solid #c0c0c0; 
        padding: 5px; 
        box-sizing: border-box; 
        border-radius: 5px;
        width: 160px;
        span {
            input {
                border: none;
                width: 120px;
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
.content-one {
    padding: 20px;
    text-align: center;
    height: 40px;
    .action-field {
        .action-name {
            input {
                margin-left: 5px;
                padding: 0 5px; 
                height: 20px;
                border: 1px solid #c0c0c0; 
                &:focus {
                    outline: 2px solid #017075;
                     border: 1px solid #fff; 
                }
            }
        }
    }
}
.empty-content {
    padding: 10px;
    text-align: center;
    color: #8a94a6;
    .caption {
        margin-top: 10px;
        font-size: 16px;
        font-weight: bold;
    }
    .message {
        font-size: 14px;
    }
    .add-action {
        color: white;
        background: #017075;
        height: 30px;
        width: 110px;
        font-weight: bold;
        border: 1px solid #fff;
        border-radius: 5px;
        &:hover {
            cursor: pointer;
        }
    }
}
</style>