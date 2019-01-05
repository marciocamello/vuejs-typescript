import { shallowMount, mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Home)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders props.msg when passed', () => {
    const msg = 'This is an home page'
    const wrapper = shallowMount(Home, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })

  it('renders a h1', () => {
    const wrapper = mount(Home)
    expect(wrapper.contains('h1')).toBe(true)
  })

  it('renders a h1 text is This is an home page', () => {
    const wrapper = mount(Home)
    expect(wrapper.text()).toContain('This is an home page')
  })
})
