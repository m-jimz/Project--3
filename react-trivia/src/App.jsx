import { useState } from 'react'
import Flashcards from './components/Flashcards.jsx'
import Button from './components/Button.jsx'
import quizItems from './components/reactQuizQuestions.json'
import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const totalCards = quizItems.length
  const currentCard = quizItems[currentIndex]

  const canGoNext = currentIndex < totalCards - 1
  const canGoPrevious = currentIndex > 0

  const handleNext = () => {
    if (!canGoNext) return
    setShowAnswer(false)
    setCurrentIndex((prev) => prev + 1)
  }

  const handlePrevious = () => {
    if (!canGoPrevious) return
    setShowAnswer(false)
    setCurrentIndex((prev) => prev - 1)
  }

  const handleFlip = () => setShowAnswer((s) => !s)

  return (
    <>
      <Flashcards
        currentCard={currentCard}
        showAnswer={showAnswer}
        onFlip={handleFlip}
        onNext={handleNext}
        onPrevious={handlePrevious}
        canGoNext={canGoNext}
        canGoPrevious={canGoPrevious}
        currentIndex={currentIndex}
        totalCards={totalCards}
      />

      <Button
        answer={currentCard.answer}
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
      />
    </>
  )
}

export default App
