<template>
  <q-page class="relative-position ">
    <q-scroll-area class="absolute full-width full-height">
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input
            class="new-qweet"
            bottom-slots
            v-model="newQweetContent"
            placeholder="What's popping?"
            counter
            maxlength="280"
            autogrow
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <q-icon name="fas fa-user-alt" />
              </q-avatar>
            </template>

            <template v-slot:append>
              <q-icon
                v-if="newQweetContent !== ''"
                name="close"
                @click="newQweetContent = ''"
                class="cursor-pointer"
              />
            </template>
          </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn
            @click="addNewQweet"
            class="q-mb-lg"
            unelevated
            rounded
            color="primary"
            label="Qweet"
            no-caps
            :disable="!newQweetContent"
          />
        </div>
      </div>
      <q-separator size="10px" color="grey-2" class="divider" />

      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >
          <q-item class="q-py-md qweet" v-for="qweet in qweets" :key="qweet.id">
            <q-item-section avatar top>
              <q-avatar size="xl">
                <q-icon name="fas fa-user-alt" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-subtitle1"
                ><strong>Cool user name</strong>
                <span class="text-grey-7">
                  <br class="lt-md" />
                  @equallycool__email &bull; {{ qweet.date | relativeDate }}
                </span></q-item-label
              >
              <q-item-label class="qweet-content text-body1">
                {{ qweet.content }}
              </q-item-label>
              <div class="qweet-icons row justify-between q-mt-sm">
                <q-btn
                  flat
                  round
                  color="grey"
                  size="sm"
                  icon="fas fa-comment"
                />
                <q-btn
                  flat
                  round
                  color="grey"
                  size="sm"
                  icon="fas fa-retweet"
                />
                <q-btn
                  @click="toggleLiked(qweet)"
                  flat
                  round
                  :icon="qweet.liked ? 'fas fa-heart' : 'far fa-heart'"
                  :color="qweet.liked ? 'pink' : 'grey'"
                  size="sm"
                />

                <q-btn
                  @click="deleteQweet(qweet)"
                  flat
                  round
                  color="grey"
                  size="sm"
                  icon="fas fa-trash"
                />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import db from "src/boot/firebase";
import { formatDistance } from "date-fns";
export default {
  name: "PageHome",
  data() {
    return {
      newQweetContent: "",
      qweets: []
    };
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date());
    }
  },
  methods: {
    addNewQweet() {
      let newQweet = {
        content: this.newQweetContent,
        date: Date.now(),
        liked: false
      };
      db.collection("qweets")
        .add(newQweet)
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        });
      this.newQweetContent = "";
    },
    deleteQweet(qweet) {
      db.collection("qweets")
        .doc(qweet.id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch(error => {
          console.error("Error removing document: ", error);
        });
    },
    toggleLiked(qweet) {
      db.collection("qweets")
        .doc(qweet.id)
        .update({
          liked: !qweet.liked
        })
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch(error => {
          console.error("Error updating document: ", error);
        });
    }
  },
  mounted() {
    db.collection("qweets")
      .orderBy("date")
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          let qweetChange = change.doc.data();
          qweetChange.id = change.doc.id;
          if (change.type === "added") {
            this.qweets.unshift(qweetChange);
          }
          if (change.type === "modified") {
            let index = this.qweets.findIndex(
              qweet => qweet.id === qweetChange.id
            );
            Object.assign(this.qweets[index], qweetChange);
          }
          if (change.type === "removed") {
            let index = this.qweets.findIndex(
              qweet => qweet.id === qweetChange.id
            );
            this.qweets.splice(index, 1);
          }
        });
      });
  }
};
</script>

<style lang="sass" scoped>
.new-qweet
  textarea
    font-size: 19px
    line-height: 1.4rem !important
.divider
  border-top:1px solid
  border-bottom: 1px solid
  border-color: $grey-4

.qweet-content
  white-space: pre-line

.qweet-icons
  margin-left:-5px

.qweet:not(:first-child)
  border-top: 1px solid rgba(0,0,0,0.12)
</style>
