import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import McIconOnlyButton from '@/core/components/actions/buttons/McIconOnlyButton/McIconOnlyButton.vue'
import ThemeSwitcher from '@/core/layouts/dashboard/ThemeSwitcher/ThemeSwitcher.vue'

describe('ThemeSwitcher', () => {
  test('Should render properly', () => {
    const wrapper = mount(ThemeSwitcher)
    const button = wrapper.findComponent(McIconOnlyButton)
    expect(button.exists()).toBe(true)
  })

  test('should switch theme', async () => {
    // Given: a user is on the theme switcher component
    const wrapper = mount(ThemeSwitcher, {
      attachTo: document.body,
    })
    // Then: the user should see the theme switcher button
    const buttonDark = wrapper.findComponent(McIconOnlyButton)
    expect(buttonDark.props('icon')).toBe('mdi-white-balance-sunny')
    // When: the user clicks on the theme switcher button
    await buttonDark.trigger('click')
    // Then: theme should be updated
    const buttonLight = wrapper.findComponent(McIconOnlyButton)
    expect(buttonLight.props('icon')).toBe('mdi-weather-night')
  })
})
