import Vue from 'vue'
import VueThinModal, { generateMediator } from 'vue-thin-modal'


export default (ctx, inject) => {
  const options = <%= serialize(options) %>
  Vue.use(VueThinModal, options)

  const mediator = Vue.prototype.$_vueThinModal || generateMediator(Vue)

  inject('vtmodal', mediator)

  if (!Vue.prototype.$_vueThinModal) {
    Vue.mixin({
      beforeCreate() {
        if (this.$_vueThinModal) {
          this.$_vueThinModal = mediator
        }
      },
    })
  }
}
