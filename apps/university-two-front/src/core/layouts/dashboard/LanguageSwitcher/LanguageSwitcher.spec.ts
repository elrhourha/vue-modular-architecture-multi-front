import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import McIconOnlyButton from '@/core/components/actions/buttons/McIconOnlyButton/McIconOnlyButton.vue'
import LanguageSwitcher from '@/core/layouts/dashboard/LanguageSwitcher/LanguageSwitcher.vue'

describe('LanguageSwitcher', () => {
  test('Should render properly', () => {
    const wrapper = mount(LanguageSwitcher)
    expect(wrapper.findComponent(McIconOnlyButton)).toBeDefined()
  })

  test('Should render Vuetify menu on button click', async () => {
    // Given: a user is on the language switcher component
    const wrapper = mount(LanguageSwitcher, {
      attachTo: document.body,
    })
    // Then: the user should see the language switcher button
    const button = wrapper.findComponent(McIconOnlyButton)
    expect(button.exists()).toBe(true)
    // When: the user clicks on the language switcher button
    await button.trigger('click')
    // Then: the user should see the language switcher menu
    const list = document.body.querySelector('.v-list')
    expect(list).not.toBeNull()
    // Then: the user should see the list of languages
    const listItems = list?.querySelectorAll('.v-list-item')
    expect(listItems?.length).toBe(4)
    const expectedListItems = ['🇺🇸 - en', '🇪🇸 - es', '🇫🇷 - fr', '🇷🇴 - ro']
    listItems?.forEach((item, index) => {
      expect(item?.textContent?.trim()).toBe(expectedListItems[index])
    })
  })
})
