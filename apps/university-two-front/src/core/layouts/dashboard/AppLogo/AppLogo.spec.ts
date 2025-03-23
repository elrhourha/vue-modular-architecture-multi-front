import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import AppLogo from '@/core/layouts/dashboard/AppLogo/AppLogo.vue'

describe('McLogo', () => {
  test('renders properly', () => {
    const wrapper = mount(AppLogo)
    expect(wrapper.text()).toContain('Model Convertor')
  })
})
