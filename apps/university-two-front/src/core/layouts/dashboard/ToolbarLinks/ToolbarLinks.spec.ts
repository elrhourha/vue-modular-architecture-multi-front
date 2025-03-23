import { mount } from '@vue/test-utils'
import ToolbarLinks from 'src/core/layouts/dashboard/ToolbarLinks/ToolbarLinks.vue'
import { describe, expect, test } from 'vitest'

describe('ToolbarLinks', () => {
  test('Should render properly', () => {
    const wrapper = mount(ToolbarLinks)
    expect(wrapper.text()).toContain('Model Mapping')
    expect(wrapper.text()).toContain('Product Conversion')
    expect(wrapper.text()).toContain('Split Model')
  })
})
