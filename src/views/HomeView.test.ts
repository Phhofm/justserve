import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from './HomeView.vue'

const global = { stubs: { RouterLink: { template: '<a><slot /></a>' } } }

describe('HomeView', () => {
  it('stellt beide Projekte vor', () => {
    const w = mount(HomeView, { global })
    expect(w.text()).toContain('Trösterli für das Kinderspital Zürich')
    expect(w.text()).toContain('Nationaler Clean-Up Day')
  })

  it('verlinkt die Kispi-Seite intern', () => {
    const w = mount(HomeView, { global })
    expect(w.html()).toContain('/kispi')
  })

  it('nennt 2027, 2028 und das vergangene Projekt', () => {
    const w = mount(HomeView, { global })
    expect(w.text()).toContain('2027')
    expect(w.text()).toContain('2028')
    expect(w.text()).toContain('1000 ehrenamtliche Arbeitsstunden')
  })

  it('begründet den Dienst mit Jesus Christus und Schriftstellen', () => {
    const w = mount(HomeView, { global })
    expect(w.text()).toContain('weil Jesus Christus dient')
    expect(w.text()).toContain('Mosia 2,17')
    expect(w.text()).toContain('Johannes 13,34-35')
  })
})