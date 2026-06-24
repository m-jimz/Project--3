import '../App.css'

function Flashcards({
	currentCard,
	showAnswer,
	onFlip,
	onNext,
	onPrevious,
	canGoNext,
	canGoPrevious,
	currentIndex,
	totalCards,
}) {
	if (!currentCard) return <p>No flashcards available.</p>

	return (
		<section className="flashcards" aria-label="React flashcards">
			<h2>React Flashcards</h2>
			<p className="flashcards-progress">
				Card {currentIndex + 1} of {totalCards}
			</p>

			<div className="flashcard-scene">
				<article
					className={`flashcard ${showAnswer ? 'is-flipped' : ''}`}
					role="button"
					tabIndex={0}
					onClick={onFlip}
					onKeyDown={(event) => {
						if (event.key === 'Enter' || event.key === ' ') {
							event.preventDefault()
							onFlip()
						}
					}}
					aria-pressed={showAnswer}
				>
					<div className="flashcard-face flashcard-front">
						<h3>Question</h3>
						<p>{currentCard.question}</p>
					</div>
					<div className="flashcard-face flashcard-back">
						<h3>Answer</h3>
						<p>{currentCard.answer}</p>
					</div>
				</article>
			</div>

			<div className="flashcards-controls">
				<button
					type="button"
					onClick={() => canGoPrevious && onPrevious()}
					disabled={!canGoPrevious}
					aria-disabled={!canGoPrevious}
				>
					Previous
				</button>
				<button type="button" onClick={onFlip}>
					{showAnswer ? 'Show Question' : 'Show Answer'}
				</button>
				<button
					type="button"
					onClick={() => canGoNext && onNext()}
					disabled={!canGoNext}
					aria-disabled={!canGoNext}
				>
					Next
				</button>
			</div>
		</section>
	)
}

export default Flashcards

