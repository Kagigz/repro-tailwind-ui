
<template>
  <div class="h-full bg-slate-50">
    <ResponsiveSidenav/>
    <div class="flex flex-1 flex-col md:pl-64">
      <Header />
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>
