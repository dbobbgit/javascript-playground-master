<script setup></script>

<template>
  <!-- <div>
    <h1>Star Wars Wordle</h1> -->
  <!-- <p v-if="character">The game is ready! Start guessing the word!</p> -->
  <!-- <p>{{ character.name }}</p>
    <p v-if="hiddenWord">The hidden word is: {{ hiddenWord }}</p>
    <ul v-if="characters.length">
      <li v-for="(character, index) in characters" :key="index">{{ character.name }}</li>
    </ul>
  </div> -->

  <div id="app">
    <!-- Render the Wordle Game Component -->
    <WordleGame />
  </div>

  <div class="h-screen flex justify-center items-center bg-gradient-to-br from-indigo-600 to-purple-600">
    <div
      class="relative bg-white px-6 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10"
    >
      <div class="mx-auto max-w-md">
        <div class="divide-y divide-gray-300/50">
          <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
            <p>Let's build something together:</p>
            <ul class="space-y-4">
              <li class="flex items-center">
                <svg
                  class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="11" />
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                </svg>
                <p class="ml-4">
                  Maybe we build something fun with
                  <a href="https://api.nasa.gov" class="text-blue-500 underline" target="_blank">NASA's APIs</a>
                </p>
              </li>
              <li class="flex items-start">
                <svg
                  class="mt-1 h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="11" />
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                </svg>
                <p class="ml-4">
                  Maybe we implement something boring like user registration and authentication, but instead of
                  passwords it's doodles on a <code>&lt;canvas&gt;</code>
                </p>
              </li>
              <li class="flex items-start">
                <svg
                  class="mt-1 h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="11" />
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                </svg>
                <p class="ml-4">
                  Maybe it's a real-time chat application with no typing! You use speech recognition and dictation to
                  communicate.
                </p>
              </li>
            </ul>
            <p>It really doesn't matter what we decide or accomplish. We just want to build cool stuff!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script>
import { getStarWarsData } from './swapiService'

export default {
  data() {
    return {
      // character: null,
      characters: [], // Store fetched characters in an array
      hiddenWord: null, // Store the random word for the game
    }
  },
  async mounted() {
    // this.character = await getStarWarsData('people/1/') // Fetch data for Luke Skywalker (id 1)
    // Fetch multiple characters
    const data = await getStarWarsData('people')
    console.log(data)
    this.characters = data.results // Assuming I get results aray from the API
    // Generate a random number between 0 and the length of the characters array
    if (this.characters.length) {
      const randomIndex = Math.floor(Math.random() * this.characters.length)
      this.hiddenWord = this.characters[randomIndex].name.toUpperCase() // Store the random word in uppercase
    }
  },
}
</script> -->
<script>
import WordleGame from './WordleGame.vue'

export default {
  components: {
    WordleGame,
  },
}
</script>
