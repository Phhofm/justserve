import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DonationSection from './DonationSection.vue'

describe('DonationSection', () => {
  it('zeigt das Bild mit Alt-Text', () => {
    const w = mount(DonationSection)
    const img = w.find('img')
    expect(img.exists()).toBe(true)
    expect((img.attributes('alt') ?? '').length).toBeGreaterThan(0)
  })

  it('erklärt die Gemeindeaktion und dass der Erlös Trösterli finanziert', () => {
    const w = mount(DonationSection)
    expect(w.text()).toContain('Gemeindeaktion')
    expect(w.text()).toContain('Trösterli')
  })

  it('zeigt kein zusätzliches Spendenziel mehr', () => {
    const w = mount(DonationSection)
    expect(w.text()).not.toContain('CHF')
  })
})
