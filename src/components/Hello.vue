<template>
  <div class="hello">
    <h1>Vue-validator test</h1>
    <form action="">
      <div class="form-group">
        <label>姓名：</label>
        <input type="text" v-model="name" name="name" v-validate="{required: true, email: true}">
      </div>
      <div class="form-group">
        <label for="">密码：</label>
        <input type="password" v-model="password">
      </div>
      <div class="form-group">
        <div @click="submitForm" class="submit">提交</div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    submitForm () {
      this.$validate()
    }
  }
}
</script>

<style scoped>
.form-group {
  margin: 20px 0;
}

.submit {
  border: 1px solid #2095ff;
  background: #2095ff;
  display: inline-block;
  color: #fff;
  padding: 2px 6px;
}
</style>
