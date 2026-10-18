<script setup lang="ts">
import ScriptureBand from '../components/ScriptureBand.vue'

const IGSU_ANMELDUNG = 'https://www.igsu.ch/de/clean-up-day/anmeldung/'

const MITBRINGEN = [
  { icon: '👕', titel: 'Wetterfeste Kleidung', text: 'Lange Hosen, feste Schuhe, bei Regen eine Jacke.' },
  { icon: '🧤', titel: 'Eigene Handschuhe', text: 'Am bestenbringst Du Deine eigenen Arbeitshandschuhe mit.' },
  { icon: '💧', titel: 'Wasser zu trinken', text: 'Eine eigene Trinkflasche – wir sind ein paar Stunden unterwegs.' },
  { icon: '☀️', titel: 'Sonnenschutz', text: 'Je nach Wetter Sonnencreme oder Regenschutz.' },
]
</script>

<template>
  <main>
    <section class="bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-700 text-white">
      <div class="mx-auto max-w-5xl px-4 py-14 text-center sm:py-24">
        <p class="inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-medium tracking-wide">
          Nationaler Clean-Up Day 2027
        </p>
        <h1 class="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
          Gemeinsam aufräumen am Chinagarten
        </h1>
        <p class="mx-auto mt-5 max-w-2xl text-base text-emerald-50 sm:text-lg">
          Samstag, 18. September 2027 · 10 Uhr · Chinagarten Zürich
        </p>
        <p class="mx-auto mt-2 max-w-2xl text-sm text-emerald-100">
          Freiwillig und ohne Druck – komm, wenn es Dir passt.
        </p>
      </div>
    </section>

    <div class="mx-auto max-w-4xl px-4 py-10 sm:py-14">
      <section class="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-8">
        <h2 class="text-xl font-semibold text-slate-900">Warum wir mitmachen</h2>
        <p class="mt-2 leading-relaxed text-slate-600">
          Wir dienen, weil Jesus Christus dient. Die Erde ist nicht unser Eigentum, sondern ein
          Geschenk, das wir gemeinsam hüten dürfen. Wenn wir am Chinagarten aufräumen, tun wir etwas
          für unsere Stadt, für die Menschen, die hier wohnen, und für die Schöpfung. Und wir zeigen,
          dass wir als Kirche zur Schweiz gehören – seit 175 Jahren.
        </p>
      </section>

      <div class="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-8">
        <ScriptureBand
          stelle="1. Mose 2,15"
          zitat="Gott, der Herr, nahm den Menschen und setzte ihn in den Garten Eden, ihn zu **bebauen und zu bewahren**."
        />
      </div>

      <section class="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-8">
        <h2 class="text-xl font-semibold text-slate-900">Worum geht es?</h2>
        <p class="mt-2 leading-relaxed text-slate-600">
          Der Nationale Clean-Up Day ist die grösste Aufräumaktion der Schweiz. 2027 findet er am
          Freitag, 17. und Samstag, 18. September statt. Der Pfahl Zürich beteiligt sich am
          <strong>Samstag, 18. September</strong>, mit einer eigenen Aktion am
          <strong>Chinagarten</strong> am Zürichsee.
        </p>
      </section>

      <section class="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-8">
        <h2 class="text-xl font-semibold text-slate-900">Was Du mitbringst</h2>
        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <div v-for="m in MITBRINGEN" :key="m.titel" class="rounded-xl bg-slate-50 p-4">
            <span class="text-xl" aria-hidden="true">{{ m.icon }}</span>
            <p class="mt-1 font-semibold text-slate-900">{{ m.titel }}</p>
            <p class="mt-0.5 text-sm leading-relaxed text-slate-600">{{ m.text }}</p>
          </div>
        </div>
      </section>

      <section class="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-8">
        <h2 class="text-xl font-semibold text-slate-900">Zwei Wege mitzumachen</h2>
        <div class="mt-4 grid gap-4 sm:grid-cols-2">
          <div class="rounded-xl bg-emerald-50 p-4">
            <h3 class="font-semibold text-emerald-900">1. Zur Pfahl-Aktion kommen</h3>
            <p class="mt-1 text-sm leading-relaxed text-emerald-900/80">
              Samstag, 18. September 2027, 10 Uhr, Chinagarten Zürich. Einfach vorbeikommen – allein,
              als Familie oder mit Freunden. Eine Anmeldung ist nicht nötig.
            </p>
          </div>
          <div class="rounded-xl bg-slate-50 p-4">
            <h3 class="font-semibold text-slate-900">2. In der eigenen Gemeinde aufräumen</h3>
            <p class="mt-1 text-sm leading-relaxed text-slate-600">
              Ihr möchtet lokal in Eurer Gemeinde eine eigene Aktion machen? Meldet sie direkt bei
              der IGSU an. Das läuft nicht über den Pfahl.
            </p>
            <a
              :href="IGSU_ANMELDUNG"
              target="_blank"
              rel="noopener"
              class="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline"
              >Zur IGSU-Anmeldung →</a
            >
          </div>
        </div>
      </section>

      <div class="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-8">
        <ScriptureBand
          stelle="Psalm 24,1"
          zitat="Die Erde gehört dem Herrn und alles, was sie erfüllt, der Erdkreis und alle, die ihn bewohnen."
        />
      </div>

      <section class="mt-6 rounded-2xl bg-emerald-50 p-5 text-emerald-900 sm:p-8">
        <h2 class="text-lg font-semibold">Kein Muss</h2>
        <p class="mt-1 text-sm leading-relaxed">
          Dies ist ein freiwilliges Angebot. Wer Zeit und Lust hat, kommt vorbei – wer nicht kann,
          ist genauso willkommen. Jede helfende Hand zählt.
        </p>
      </section>
    </div>
  </main>
</template>