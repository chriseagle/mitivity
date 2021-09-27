<template>
  <nav id="nav" class="bg-gray-900 p-4 flex flex-col">
    <h1 class="branding text-3xl text-white tracking-tight font-bold">
      mitivity<span class="text-green-600">.</span>
    </h1>
    <ul class="my-8">
      <li class="my-2 font-bold text-sm text-white">
        <router-link to="/">My Tasks</router-link>
      </li>
      <li class="my-2 font-bold text-sm text-white">
        <router-link to="/archive">Archived Task</router-link>
      </li>
    </ul>
    <small class="mt-auto text-gray-400">a thing by Chris Eagle</small>
  </nav>
  <main role="main" id="main" class="p-4">
    <router-view/>
  </main>
</template>

<style lang="scss">
html,body {
  font-size:16px;
  padding:0;
  margin:0;
  min-height:100%;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display:flex;
  min-height:100vh;
}

#nav {
  width:260px;
}
#main {
  padding:1rem;
  width:100%;
  flex-grow: 1;
}
</style>
