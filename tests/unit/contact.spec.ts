import { shallowMount, mount } from '@vue/test-utils'
import Contact from '@/views/Contact.vue'

describe('Contact.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Contact)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders props.msg when passed', () => {
    const msg = 'This is an contact page'
    const wrapper = shallowMount(Contact, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })

  it('renders a h1', () => {
    const wrapper = mount(Contact)
    expect(wrapper.contains('h1')).toBe(true)
  })

  it('renders a h1 text is This is an contact page', () => {
    const wrapper = mount(Contact)
    expect(wrapper.text()).toContain('This is an contact page')
  })
})
