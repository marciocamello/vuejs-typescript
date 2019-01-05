import { shallowMount, mount } from '@vue/test-utils'
import About from '@/views/About.vue'

describe('About.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(About)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders props.msg when passed', () => {
    const msg = 'This is an about page'
    const wrapper = shallowMount(About, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })

  it('renders a h1', () => {
    const wrapper = mount(About)
    expect(wrapper.contains('h1')).toBe(true)
  })

  it('renders a h1 text is This is an about page', () => {
    const wrapper = mount(About)
    expect(wrapper.text()).toContain('This is an about page')
  })
})
