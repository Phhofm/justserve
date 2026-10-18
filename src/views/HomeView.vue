<script setup lang="ts">
import ScriptureBand from '../components/ScriptureBand.vue'

const KISPI_URL = 'https://phhofm.github.io/justserve-kispi-175/'
const NEWS_1 =
  'https://news-ch.kirchejesuchristi.org/artikel/ehrenamtlicher-einsatz-der-kirche-jesu-christi-der-heiligen-der-letzten-tage-in-zurich'
const NEWS_2 =
  'https://news-ch.kirchejesuchristi.org/artikel/gemeinsam-gutes-tun-die-kirche-jesu-christi-der-heiligen-der-letzten-tage-engagiert-sich-in-zurich'
</script>

<template>
  <main>
    <section class="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white">
      <div class="mx-auto max-w-5xl px-4 py-14 text-center sm:py-24">
        <p class="inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-medium tracking-wide">
          JustServe Pfahl Zürich
        </p>
        <h1 class="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">Gemeinsam dienen</h1>
        <p class="mx-auto mt-5 max-w-2xl text-base text-blue-50 sm:text-lg">
          Wir dienen, weil Jesus Christus dient. Aus Liebe zu unserem Erlöser tun wir Gutes – für die
          Kinder im Kinderspital, für unsere Umwelt, für unsere Gemeinschaft und unser Land.
        </p>
      </div>
    </section>

    <div class="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      <section class="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-8">
        <h2 class="text-xl font-semibold text-slate-900">Warum wir dienen</h2>
        <p class="mt-2 leading-relaxed text-slate-600">
          Dienst ist für uns keine Pflicht, sondern eine Antwort auf die Liebe, die wir von Jesus
          Christus empfangen haben. Er hat sich den Menschen zugewandt – den Kranken, den Kleinen, den
          Vergessenen. Wenn wir dasselbe tun, dienen wir ihm.
        </p>
      </section>

      <div class="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-8">
        <ScriptureBand
          stelle="Mosia 2,17"
          zitat="Wenn ihr im **Dienst eurer Mitmenschen** steht, seid ihr im Dienst eures Gottes."
        />
      </div>

      <h2 class="mt-10 text-xl font-semibold text-slate-900 sm:text-2xl">Unsere zwei Projekte 2027</h2>

      <div class="mt-4 grid gap-5 sm:grid-cols-2">
        <a
          :href="KISPI_URL"
          target="_blank"
          rel="noopener"
          class="group flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:shadow-md hover:ring-blue-200"
        >
          <span class="text-3xl" aria-hidden="true">🧸</span>
          <h3 class="mt-3 text-lg font-semibold text-slate-900">
            Trösterli für das Kinderspital Zürich
          </h3>
          <p class="mt-1 grow text-sm leading-relaxed text-slate-600">
            Sammeln, was Kindern ein Lächeln schenkt – und es gemeinsam dem Kinderspital übergeben.
            Das Sammelprojekt zum 175-Jahr-Jubiläum.
          </p>
          <span class="mt-4 text-sm font-semibold text-blue-700 group-hover:underline"
            >Zum Projekt →</span
          >
        </a>

        <RouterLink
          to="/cleanup"
          class="group flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:shadow-md hover:ring-blue-200"
        >
          <span class="text-3xl" aria-hidden="true">🌿</span>
          <h3 class="mt-3 text-lg font-semibold text-slate-900">Nationaler Clean-Up Day Schweiz</h3>
          <p class="mt-1 grow text-sm leading-relaxed text-slate-600">
            Am Samstag, 18. September 2027, räumen wir gemeinsam beim Chinagarten in Zürich auf – als
            Teil der schweizweiten Aktion.
          </p>
          <span class="mt-4 text-sm font-semibold text-blue-700 group-hover:underline"
            >Zum Projekt →</span
          >
        </RouterLink>
      </div>

      <div class="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-8">
        <ScriptureBand
          stelle="Johannes 13,34-35"
          zitat="Ein neues Gebot gebe ich euch: **Liebt einander!** Wie ich euch geliebt habe, so sollt auch ihr einander lieben. Daran werden alle erkennen, dass ihr meine Jünger seid: wenn ihr einander liebt."
        />
      </div>

      <section class="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-8">
        <h2 class="text-xl font-semibold text-slate-900">Ausblick 2028</h2>
        <p class="mt-2 leading-relaxed text-slate-600">
          2028 feiern wir das 175-Jahr-Jubiläum unserer Kirche in der Schweiz in der Swiss Life
          Arena. Unsere Projekte 2027 zeigen, dass wir mittendrin sind – gemeinschaftlich und für das
          Gemeinwohl.
        </p>
      </section>

      <section class="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-8">
        <h2 class="text-xl font-semibold text-slate-900">Vergangene Projekte</h2>
        <h3 class="mt-3 font-semibold text-slate-900">1000 ehrenamtliche Arbeitsstunden Zürich</h3>
        <ul class="mt-3 space-y-2 text-sm">
          <li>
            <a
              :href="NEWS_1"
              target="_blank"
              rel="noopener"
              class="font-medium text-blue-700 hover:underline"
              >Ehrenamtlicher Einsatz in Zürich →</a
            >
          </li>
          <li>
            <a
              :href="NEWS_2"
              target="_blank"
              rel="noopener"
              class="font-medium text-blue-700 hover:underline"
              >Gemeinsam Gutes tun in Zürich →</a
            >
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>