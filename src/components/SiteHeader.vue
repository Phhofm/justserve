<template>
  <header class="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2.5 sm:px-4 sm:py-3">
      <RouterLink to="/" class="flex shrink-0 items-center gap-2">
        <span
          class="grid h-8 w-8 place-items-center rounded-lg bg-blue-700 text-sm font-bold text-white"
          >JS</span
        >
        <span class="hidden text-sm font-semibold text-slate-900 sm:inline sm:text-base"
          >JustServe Pfahl Zürich</span
        >
      </RouterLink>
      <nav class="flex items-center gap-0.5 text-xs sm:gap-1 sm:text-sm">
        <RouterLink
          to="/"
          class="whitespace-nowrap rounded-full px-2.5 py-2 text-slate-600 transition hover:bg-slate-100 sm:px-3"
          active-class="bg-slate-100 text-slate-900"
          >Übersicht</RouterLink
        >
        <RouterLink
          to="/cleanup"
          class="whitespace-nowrap rounded-full px-2.5 py-2 text-slate-600 transition hover:bg-slate-100 sm:px-3"
          active-class="bg-slate-100 text-slate-900"
          ><span class="sm:hidden">Clean-Up</span><span class="hidden sm:inline">Clean-Up Day</span></RouterLink
        >
        <RouterLink
          to="/kispi"
          class="whitespace-nowrap rounded-full px-2.5 py-2 text-slate-600 transition hover:bg-slate-100 sm:px-3"
          active-class="bg-slate-100 text-slate-900"
          >Kispi</RouterLink
        >
      </nav>
    </div>
  </header>
</template>