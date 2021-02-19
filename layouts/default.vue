<template>
  <transition name="layout" mode="out-in">
    <nuxt />
  </transition>
</template>

<style>
html,
body {
  height: 100% !important;
  width: 100% !important;
  padding: 0px;
  margin: 0px;
  overflow-x: hidden;
}

#__nuxt,
#__layout {
  height: 100% !important;
  width: 100% !important;
}
</style>
