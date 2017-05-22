<template>
<div>
  <div class="form-group">
    <label for="">姓名：</label>
    <input type="text" name="name" v-validate="['email']">
  </div>
  <div class="form-group">
    <label for="">密码：</label>
    <input type="text" name="name" v-validate="['number']">
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