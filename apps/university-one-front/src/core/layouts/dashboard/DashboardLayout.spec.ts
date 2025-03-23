import { mount } from '@vue/test-utils'
import DashboardLayout from 'src/core/layouts/dashboard/DashboardLayout.vue'
import { describe, expect, test } from 'vitest'
import AppLogo from '@/core/layouts/dashboard/AppLogo/AppLogo.vue'
import LanguageSwitcher from '@/core/layouts/dashboard/LanguageSwitcher/LanguageSwitcher.vue'
import ThemeSwitcher from '@/core/layouts/dashboard/ThemeSwitcher/ThemeSwitcher.vue'
import ToolbarLinks from '@/core/layouts/dashboard/ToolbarLinks/ToolbarLinks.vue'

describe('DashboardLayout', () => {
  test('Should render properly', () => {
    // Given: a user is on the dashboard layout
    const wrapper = mount(DashboardLayout)
    // Then: the user should see the logo
    expect(wrapper.findComponent(AppLogo)).toBeDefined()
    // Then: the user should see the toolbar links
    expect(wrapper.findComponent(ToolbarLinks)).toBeDefined()
    expect(wrapper.findComponent(ToolbarLinks).text()).toContain('Model Mapping')
    // Then: the user should see language switcher
    expect(wrapper.findComponent(LanguageSwitcher)).toBeDefined()
    // Then: the user should see theme switcher
    expect(wrapper.findComponent(ThemeSwitcher)).toBeDefined()
  })
})
