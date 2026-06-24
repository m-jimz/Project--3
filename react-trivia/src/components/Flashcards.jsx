import { useState } from 'react'
import quizItems from './reactQuizQuestions.json'

function Flashcards() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [showAnswer, setShowAnswer] = useState(false)

	const totalCards = quizItems.length
	const currentCard = quizItems[currentIndex]

	const handleNext = () => {
		setShowAnswer(false)
		setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards)
	}

	const handlePrevious = () => {
		setShowAnswer(false)
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? totalCards - 1 : prevIndex - 1
		)
	}

	const handleFlip = () => {
		setShowAnswer((prev) => !prev)
	}

	if (totalCards === 0) {
		return <p>No flashcards available.</p>
	}

	return (
		<section aria-label="React flashcards">
			<h2>React Flashcards</h2>
			<p>
				Card {currentIndex + 1} of {totalCards}
			</p>

			<article
				role="button"
				tabIndex={0}
				onClick={handleFlip}
				onKeyDown={(event) => {
					if (event.key === 'Enter' || event.key === ' ') {
						event.preventDefault()
						handleFlip()
					}
				}}
				aria-pressed={showAnswer}
			>
				<h3>{showAnswer ? 'Answer' : 'Question'}</h3>
				<p>{showAnswer ? currentCard.answer : currentCard.question}</p>
			</article>

			<div>
				<button type="button" onClick={handlePrevious}>
					Previous
				</button>
				<button type="button" onClick={handleFlip}>
					{showAnswer ? 'Show Question' : 'Show Answer'}
				</button>
				<button type="button" onClick={handleNext}>
					Next
				</button>
			</div>
		</section>
	)
}

export default Flashcards
