<template>
  <div class="login">
    <el-container>
      <el-aside width="200px">
        <h1 class="logo"></h1>
        <div class="dh">
          <!-- 导航栏 -->

          <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
          >
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">管理首页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">学员管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">学员项目管理</el-menu-item>
                <el-menu-item index="1-2">学员资料</el-menu-item>
                <el-menu-item index="1-3">学员宿舍</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">考勤管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-document"></i>
              <span slot="title">数据统计</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-document"></i>
              <span slot="title">我的中心</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>

      <el-container>
        <el-header>
          <div>
            <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="6">
                <el-radio-group
                  v-model="isCollapse"
                  style="margin-bottom: 20px;"
                >
                  <el-radio-button :label="false">✿</el-radio-button>
                  <el-radio-button :label="true">❀</el-radio-button>
                </el-radio-group></el-col
              >
              <el-col :span="6">千峰管理系统</el-col>
              <el-col :span="6"
                >欢迎您:
                <div class="demo-type">
                  <div>
                    <el-avatar
                      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    ></el-avatar>
                  </div>
                </div>
                <div class="gl">
                  <a>管理员</a>
                </div>
                <div class="tuo"><a>退出</a></div>
              </el-col>
            </el-row>
          </div>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

/* 导航栏样式 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

/* 标题栏样式 */
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.row-bg {
  /* padding: 10px 0; */
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
