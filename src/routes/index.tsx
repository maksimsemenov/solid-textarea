import { createSignal } from 'solid-js'

export default function Home() {
	const [value, setValue] = createSignal('')
	const [inputValue, setInputValue] = createSignal('')
	let ref: HTMLTextAreaElement
	let inputRef: HTMLInputElement
	return (
		<main>
			<section>
				<textarea
					id="textarea"
					onInput={(event) => setValue(event.target.value)}
					ref={(el) => (ref = el)}
					rows={10}
				>
					{value()}
				</textarea>
				<div>
					<button onClick={() => setValue('')}>Clear with state</button>
					<button
						onClick={() => {
							if (ref) ref.value = ''
						}}
					>
						Clear with ref
					</button>
				</div>
			</section>
			<input
				id="input"
				onInput={(event) => setInputValue(event.target.value)}
				ref={(el) => (inputRef = el)}
				value={inputValue()}
			></input>
			<button onClick={() => setInputValue('')}>Clear with state</button>
			<button
				onClick={() => {
					if (inputRef) inputRef.value = ''
				}}
			>
				Clear with ref
			</button>
		</main>
	)
}
