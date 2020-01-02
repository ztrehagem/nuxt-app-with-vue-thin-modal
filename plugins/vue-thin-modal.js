import Vue from 'vue'
import { Modal, ModalPortal, generateMediator } from 'vue-thin-modal'

const ModalPortalExtended = Vue.extend(ModalPortal).extend({
  destroyed() {
    window.document.body.classList.remove('modal-open')
  },
})

export default (ctx, inject) => {
  const mediator = generateMediator(Vue)
  inject('modal', mediator)

  Vue.component('modal', Modal)
  Vue.component('modal-portal', ModalPortalExtended)
}
