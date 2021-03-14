<template>
  <q-layout view="lHr Lpr lFr">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon
            name="fas fa-feather-alt"
            size="sm"
            color="primary"
            class="q-pa-md  lt-md header-icon"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered :width="283">
      <q-icon
        name="fas fa-feather-alt"
        size="lg"
        color="primary"
        class="q-pa-md q-ma-md"
      />

      <template>
        <div class="q-pa-md" style="max-width: 350px">
          <q-list>
            <q-item clickable v-ripple to="/" exact>
              <q-item-section avatar>
                <q-icon name="fas fa-home" size=" md" />
              </q-item-section>

              <q-item-section class="text-h6 text-weight-bold"
                >Home</q-item-section
              >
            </q-item>
            <q-item clickable v-ripple to="/about" exact>
              <q-item-section avatar>
                <q-icon name="fas fa-question-circle" size=" md" />
              </q-item-section>
              <q-item-section class="text-h6 text-weight-bold"
                >About</q-item-section
              >
            </q-item>
          </q-list>
        </div>
      </template>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <q-input
        outlined
        rounded
        class="q-ma-md"
        placeholder="Search qwitter"
        dense
      >
        <template v-slot:prepend>
          <q-icon name="fas fa-search" size="xs" />
        </template>
      </q-input>
      <q-list padding separator>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold"
              >Something amazing happened!</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold"
              >Something amazing happened!</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold"
              >Something amazing happened!</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive> <router-view /></keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
      right: false
    };
  }
};
</script>

<style lang="sass" scoped>
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>
