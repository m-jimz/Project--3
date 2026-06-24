import { useState } from 'react'

function Button({ answer, setShowAnswer }) {
  const [guess, setGuess] = useState('')
  const [status, setStatus] = useState(null) // 'correct' | 'incorrect' | null

  const normalize = (s) => String(s).trim().toLowerCase()

  const handleSubmit = (e) => {
    e.preventDefault()
    const isCorrect = normalize(guess) === normalize(answer)
    if (isCorrect) {
      setStatus('correct')
      setShowAnswer(true)
    } else {
      setStatus('incorrect')
      // keep showing question; do not reveal answer
    }
  }

  return (
    <form onSubmit={handleSubmit} className="guess-form">
      <label htmlFor="guess-input" style={{ position: 'absolute', left: '-9999px' }}>
        Enter your guess
      </label>
      <input
        id="guess-input"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value)
          // reset status while typing
          if (status) setStatus(null)
        }}
        placeholder="Type your guess"
        className={`guess-input ${status === 'correct' ? 'correct' : status === 'incorrect' ? 'incorrect' : ''}`}
        aria-label="Type your guess"
      />
      <button
        type="submit"
        style={{ padding: '10px 16px', borderRadius: 8, cursor: 'pointer' }}
      >
        Submit
      </button>
    </form>
  )
}

export default Button;
