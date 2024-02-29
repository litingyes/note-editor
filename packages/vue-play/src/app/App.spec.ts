import { mount } from '@vue/test-utils'
import App from './App.vue'

describe('app', () => {
  it('renders properly', () => {
    const wrapper = mount(App, {})
    expect(wrapper.text()).toContain('Welcome vue-play 👋')
  })
})
