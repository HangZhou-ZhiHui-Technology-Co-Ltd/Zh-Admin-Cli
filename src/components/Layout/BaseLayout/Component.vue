<template>
  <a-layout class="bh">
    <head-layout />
    <a-layout>
      <side-layout />
      <body-layout />
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: 'base-layout',
  components: {
    SideLayout: () => import('./Components/Side'),
    HeadLayout: () => import('./Components/Head'),
    BodyLayout: () => import('./Components/Body')
  }
}
</script>
