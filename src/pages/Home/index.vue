<template>
  <div class="home">
    <div class="tu"></div>
    <div class="right">
      <h1>
        千峰管理系统
      </h1>
      <el-form
        :model="loginform"
        status-icon
        :rules="rules"
        ref="loginform"
        label-width="100px"
        class="demo-loginform"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            type="text"
            v-model="loginform.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="loginform.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginform')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <div>
      <video
        src="./../../../../bac.mp4"
        class="video"
        muted="muted"
        loop="loop"
        autoplay="autoplay"
      ></video>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    /**
     * @parma rule 就是表单验证对象
     */
    var validateName = (rule, value, callback) => {
      // console.log(rule);
      if (value === "") {
        let a = "";
        // console.log(a.test());
        callback(new Error("用户名不能为空！"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      // 获取表单里面的值
      loginform: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: validateName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      console.log(this.$refs[formName]);
      this.$refs[formName].validate(valid => {
        if (valid) {
          //本地校验通过
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
