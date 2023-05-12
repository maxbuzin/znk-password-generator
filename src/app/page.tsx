/** @format */
'use client'

import { useState } from 'react'
import copy from 'copy-to-clipboard'

const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*()_-+='

export default function Home() {
	const [passwordLength, setPasswordLength] = useState<number>(18)
	const [includeLowercaseLetters, setIncludeLowercaseLetters] = useState<boolean>(true)
	const [includeUppercaseLetters, setIncludeUppercaseLetters] = useState<boolean>(true)
	const [includeNumbers, setIncludeNumbers] = useState<boolean>(true)
	const [includeSymbols, setIncludeSymbols] = useState<boolean>(true)
	const [generatedPassword, setGeneratedPassword] = useState<string>('')

	const generatePassword = () => {
		let characters = ''
		if (includeLowercaseLetters) {
			characters += lowercaseLetters
		}
		if (includeUppercaseLetters) {
			characters += uppercaseLetters
		}
		if (includeNumbers) {
			characters += numbers
		}
		if (includeSymbols) {
			characters += symbols
		}

		let password = ''
		for (let i = 0; i < passwordLength; i++) {
			password += characters[Math.floor(Math.random() * characters.length)]
		}

		setGeneratedPassword(password)
	}

	const handleCopy = () => {
		copy(generatedPassword)
	}

	return (
		<main className='flex flex-col items-center justify-center w-full min-h-screen py-4 text-zinc-100 bg-zinc-800'>
			<div
				id='content'
				className='flex flex-col items-center justify-center flex-1 w-full max-w-md'>
				<div className=''>
					<h2 className='text-2xl font-semibold text-center uppercase'>Password Generator</h2>
				</div>
				<div className='flex flex-col items-center justify-between w-full max-w-xs gap-2 px-8 pt-8'>
					<label className='text-zinc-100'>Password Length:</label>
					<input
						type='number'
						min={8}
						max={32}
						value={passwordLength}
						onChange={(event) => setPasswordLength(Number(event.target.value))}
						className='flex py-1 pl-2 border rounded text-zinc-800'
					/>
				</div>

				<section className='flex flex-col items-center justify-between w-full max-w-xs gap-4 py-8'>
					<div className='flex justify-between w-full px-8'>
						<label className=''>Include Lowercase Letters:</label>
						<input
							type='checkbox'
							checked={includeLowercaseLetters}
							onChange={(event) => setIncludeLowercaseLetters(event.target.checked)}
							className='w-5 h-5 text-gray-600 form-checkbox'
						/>
					</div>

					<div className='flex justify-between w-full px-8'>
						<label>Include Uppercase Letters:</label>
						<input
							type='checkbox'
							checked={includeUppercaseLetters}
							onChange={(event) => setIncludeUppercaseLetters(event.target.checked)}
							className='w-5 h-5 text-gray-600 form-checkbox'
						/>
					</div>

					<div className='flex justify-between w-full px-8'>
						<label>Include Numbers:</label>
						<input
							type='checkbox'
							checked={includeNumbers}
							onChange={(event) => setIncludeNumbers(event.target.checked)}
							className='w-5 h-5 text-gray-600 form-checkbox'
						/>
					</div>

					<div className='flex justify-between w-full px-8'>
						<label>Include Symbols:</label>
						<input
							type='checkbox'
							checked={includeSymbols}
							onChange={(event) => setIncludeSymbols(event.target.checked)}
							className='w-5 h-5 text-gray-600 form-checkbox'
						/>
					</div>
				</section>
				<div>
					<button
						onClick={generatePassword}
						className='px-4 py-2 font-bold text-white duration-300 bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'>
						Generate Password
					</button>
				</div>

				{generatedPassword && (
					<div className='flex flex-col justify-center w-full max-w-sm mt-8'>
						<label className='block mb-2 text-center'>Generated Password:</label>
						<div className='flex flex-col items-center gap-4'>
							<input
								type='text'
								readOnly
								value={generatedPassword}
								className='w-full max-w-[90%] px-2 py-2 font-mono font-bold text-center text-sm flex-wrap tracking-widest text-gray-800 bg-gray-200 rounded'
							/>
							<button
								onClick={handleCopy}
								className='px-4 py-2 font-bold text-white duration-300 bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'>
								Copy
							</button>
						</div>
					</div>
				)}
			</div>
			<footer className='flex gap-2'>
				<p className='text-zinc-500'>Developed by Max Buzin.</p>
				<a
					href='https://github.com/maxbuzin/password-generator'
					target='_blank'
					className='text-blue-600 duration-300 hover:text-blue-500'>
					GitHub
				</a>
			</footer>
		</main>
	)
}
