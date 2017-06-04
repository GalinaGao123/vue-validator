<template>
<div>
  <div class="form-group">
    <label for="">姓名：</label>
    <input type="text" name="name" v-validate="['required','email']" data-email="请输入正确的邮箱">
  </div>
  <div class="form-group">
    <label for="">密码：</label>
    <input type="text" name="password" v-validate="['number']">
  </div>
  <div class="form-group">
    <button @click="submitForm">提交</button>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    submitForm () {
    }
  }
}
</script>