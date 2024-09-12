<template>
  <div>
    <h1>Star Wars Wordle</h1>
    <form @submit.prevent="handleGuess">
      <input v-model="currentGuess" placeholder="Enter your guess" />
      <button type="submit">Submit Guess</button>
    </form>
    <p v-if="feedback">{{ feedback }}</p>
    <ul>
      <li v-for="(result, index) in guessResults" :key="index">{{ result }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      characters: [],
      hiddenWord: null,
      currentGuess: '',
      feedback: '',
      guessResults: [],
    }
  },
  methods: {
    // Open the methods object
    handleGuess() {
      const lowerCaseGuess = this.currentGuess.toLowerCase()
      const lowerCaseHiddenWord = this.hiddenWord.toLowerCase()
      let result = ''

      if (lowerCaseGuess === lowerCaseHiddenWord) {
        this.feedback = 'Correct! You guessed the word!'
        result = `Correct! The word was: ${this.hiddenWord}`
      } else {
        result = this.compareGuessToWord(lowerCaseGuess, lowerCaseHiddenWord)
        this.feedback = `Incorrect! You guessed: ${this.currentGuess}`
      }

      this.guessResults.push(result)
      this.currentGuess = ''
    },
    compareGuessToWord(guess, word) {
      let feedbackArray = []

      for (let i = 0; i < guess.length; i++) {
        if (guess[i] === word[i]) {
          feedbackArray.push(`${guess[i]} is correct at position ${i + 1}`)
        } else if (word.includes(guess[i])) {
          feedbackArray.push(`${guess[i]} is in the word but at a different position`)
        } else {
          feedbackArray.push(`${guess[i]} is not in the word`)
        }
      }

      return feedbackArray.join(', ')
    },
  }, // Close the methods object and add a comma here
  async mounted() {
    // Properly separate mounted from methods
    try {
      const response = await axios.get('http://localhost:3000/api/starwars') // Backend API call
      this.characters = response.data.results
      if (this.characters.length) {
        const randomIndex = Math.floor(Math.random() * this.characters.length)
        this.hiddenWord = this.characters[randomIndex].name.toLowerCase()
      }
    } catch (error) {
      console.error('Error fetching data from the backend:', error)
    }
  },
}
</script>
