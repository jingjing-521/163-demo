//vee-validate

import Vue from 'vue'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
import zh_CN from 'vee-validate/dist/locale/zh_CN'

export default VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号',
    code: '验证码'
  }
})
