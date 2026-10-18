<script setup lang="ts">
const spendenbild = `${import.meta.env.BASE_URL}spendenbild.svg`

const IDEEN = [
  {
    icon: '🏃',
    titel: 'Sponsorenlauf',
    text: 'An einem bestehenden Lauf mitmachen (z. B. Greifenseelauf) und fürs Kinderspital sammeln lassen.',
  },
  {
    icon: '🍰',
    titel: 'Kuchenverkauf',
    text: 'An einem Fest oder einer Pfahlaktivität.',
  },
  {
    icon: '🧸',
    titel: 'Flohmarkt',
    text: 'Ausgedientes verkaufen und den Erlös spenden.',
  },
]
</script>

<template>
  <section class="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 sm:flex">
    <img
      :src="spendenbild"
      alt="Platzhalterbild der Gemeindeaktion für das Kinderspital Zürich"
      class="h-44 w-full object-cover sm:h-auto sm:w-2/5"
    />
    <div class="p-5 sm:p-8">
      <h2 class="text-xl font-semibold text-slate-900">Gemeindeaktion?</h2>
      <p class="mt-2 leading-relaxed text-slate-600">
        Ihr möchtet als Gemeinde – oder auch als Einzelne – etwas Gemeinsames auf die Beine stellen?
        Hier ein paar Ideen als Anregung:
      </p>

      <ul class="mt-4 grid gap-2 sm:grid-cols-3">
        <li
          v-for="i in IDEEN"
          :key="i.titel"
          class="rounded-xl bg-slate-50 p-3 text-sm text-slate-700"
        >
          <span class="text-lg" aria-hidden="true">{{ i.icon }}</span>
          <p class="mt-1 font-semibold text-slate-900">{{ i.titel }}</p>
          <p class="text-slate-600">{{ i.text }}</p>
        </li>
      </ul>

      <p class="mt-3 text-xs text-slate-500">
        Das sind nur Beispiele und Ideen – keine fest geplanten Anlässe des Pfahls. Ob allein, als
        Familie oder als ganze Gemeinde: Ihr entscheidet, was passt.
      </p>

      <p class="mt-4 rounded-xl bg-blue-50 px-4 py-3 text-sm leading-relaxed text-blue-900">
        Im Vordergrund steht der gemeinsame Dienst: Trösterli sammeln, zusammen backen, gemeinsam
        laufen. Der Erlös aus einer solchen Aktion bleibt bei Euch: Ihr kauft davon selbst Trösterli
        und bringt sie in die Sammelkiste. So hilft jede Form des Beitrags – und niemand muss Geld
        weitergeben.
      </p>
    </div>
  </section>
</template>
