<template>
  <header class="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3">
      <RouterLink to="/" class="flex items-center gap-2">
        <span
          class="grid h-8 w-8 place-items-center rounded-lg bg-blue-700 text-sm font-bold text-white"
          >JS</span
        >
        <span class="text-sm font-semibold text-slate-900 sm:text-base">JustServe Pfahl Zürich</span>
      </RouterLink>
      <nav class="flex items-center gap-0.5 text-sm sm:gap-1">
        <RouterLink
          to="/"
          class="rounded-full px-2.5 py-2 text-slate-600 transition hover:bg-slate-100 sm:px-3"
          active-class="bg-slate-100 text-slate-900"
          >Übersicht</RouterLink
        >
        <RouterLink
          to="/cleanup"
          class="rounded-full px-2.5 py-2 text-slate-600 transition hover:bg-slate-100 sm:px-3"
          active-class="bg-slate-100 text-slate-900"
          >Clean-Up Day</RouterLink
        >
        <RouterLink
          to="/kispi"
          class="rounded-full px-2.5 py-2 text-slate-600 transition hover:bg-slate-100 sm:px-3"
          active-class="bg-slate-100 text-slate-900"
          >Kispi</RouterLink
        >
      </nav>
    </div>
  </header>
</template>