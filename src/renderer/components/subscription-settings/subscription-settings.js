import Vue from 'vue'
import FtCard from '../ft-card/ft-card.vue'
import FtToggleSwitch from '../ft-toggle-switch/ft-toggle-switch.vue'
import FtButton from '../ft-button/ft-button.vue'
import FtSelect from '../ft-select/ft-select.vue'
import FtFlexBox from '../ft-flex-box/ft-flex-box.vue'

export default Vue.extend({
  name: 'PlayerSettings',
  components: {
    'ft-card': FtCard,
    'ft-toggle-switch': FtToggleSwitch,
    'ft-button': FtButton,
    'ft-select': FtSelect,
    'ft-flex-box': FtFlexBox
  },
  data: function () {
    return {
      title: 'Subscription Settings',
      viewNames: [
        'Basic',
        'Modern'
      ],
      viewValues: [
        'basic',
        'modern'
      ]
    }
  },
  methods: {
    goToChannel: function () {
      console.log('TODO: Handle goToChannel')
    }
  }
})
