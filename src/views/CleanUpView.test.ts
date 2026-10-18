import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CleanUpView from './CleanUpView.vue'

describe('CleanUpView', () => {
  it('nennt Datum, Ort und Uhrzeit', () => {
    const w = mount(CleanUpView)
    expect(w.text()).toContain('18. September 2027')
    expect(w.text()).toContain('Chinagarten')
    expect(w.text()).toContain('10 Uhr')
  })

  it('begründet den Dienst mit Jesus Christus und Schriftstellen', () => {
    const w = mount(CleanUpView)
    expect(w.text()).toContain('weil Jesus Christus dient')
    expect(w.text()).toContain('1. Mose 2,15')
    expect(w.text()).toContain('Psalm 24,1')
  })

  it('ist freiwillig und nennt, was man mitbringt', () => {
    const w = mount(CleanUpView)
    expect(w.text()).toContain('Kein Muss')
    expect(w.text()).toContain('Wasser zu trinken')
    expect(w.text()).toContain('Eigene Handschuhe')
  })

  it('nennt den Weg über die eigene Gemeinde', () => {
    const w = mount(CleanUpView)
    expect(w.text()).toContain('eigenen Gemeinde')
    expect(w.html()).toContain('igsu.ch')
  })
})