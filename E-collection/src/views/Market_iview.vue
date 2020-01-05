<template>
  <div class="layout">
    <Layout>
      <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem name="1-1">
            <Icon type="ios-navigate"></Icon>
            <span>Option 1</span>
          </MenuItem>
          <MenuItem name="1-2">
            <Icon type="ios-search"></Icon>
            <span>Option 2</span>
          </MenuItem>
          <MenuItem name="1-3">
            <Icon type="ios-settings"></Icon>
            <span>Option 3</span>
          </MenuItem>
        </Menu>
        <div slot="trigger"></div>
      </Sider>
      <Layout>
        <Header class="layout-header-bar" :style="{position: 'fixed', width: '100%'}">
          <Card :style="{width: '90%', height: '80%', top: '10%', left: '-2%', float: 'left'}">
            <Icon
              :class="rotateIcon"
              :style="{margin: '0 0px', float: 'left'}"
              type="md-menu"
              size="24"
            ></Icon>
          </Card>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '220px'}">
          <Card style="width:320px" v-for="x in list" :key=x>
            <div class="content-items">
              <img src="../images/apple-watch.png" />
              <h3>A high quality UI Toolkit based on Vue.js</h3>
            </div>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "market",
  data() {
    return {
      isCollapsed: false,
      list: [1,2,3,4,5]
    };
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>

<style scoped>
.content-items {
  text-align: center;
  display: flex;
  flex-direction: row;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: rgb(245, 247, 249);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.rotateIcon:hover {
  color: red;
}
/* @import "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600";

@import "../assets/app-assets/vendors/css/vendors.min.css";
@import "../assets/app-assets/vendors/css/file-uploaders/dropzone.min.css";
@import "../assets/app-assets/vendors/css/tables/datatable/datatables.min.css";
@import "../assets/app-assets/vendors/css/tables/datatable/extensions/dataTables.checkboxes.css";

@import "http://cdn.bootstrapmb.com/bootstrap/4.3.1/css/bootstrap.min.css";
@import "../assets/app-assets/css/bootstrap-extended.css";
@import "../assets/app-assets/css/colors.css";
@import "../assets/app-assets/css/components.css";
@import "../assets/app-assets/css/themes/dark-layout.css";
@import "../assets/app-assets/css/themes/semi-dark-layout.css";

@import "../assets/app-assets/css/core/menu/menu-types/vertical-menu.css";
@import "../assets/app-assets/css/core/colors/palette-gradient.css";
@import "../assets/app-assets/css/plugins/file-uploaders/dropzone.css";
@import "../assets/app-assets/css/pages/data-list-view.css";

@import "../assets/assets/css/style.css"; */
</style>
