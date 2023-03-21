import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";


type Props = {
	message: string;
}

const Home = () => {
	const [headline, setHeadline] = useState<string[]>([])
	const [notes, setNotes] = useState<string[]>([])
	const {register, handleSubmit, formState: {errors}} = useForm({
		defaultValues: {
			headline: "",
			note: ""
		}
	})

	//editlogik til at ændre tekst
	const handleEdit = () => {
		alert("input field med mulighed for at ændre teksten...")
	}
	/*const handleEdit = (index:number) => {
		const newText = notes.map((note, i) => {
			if(i === index) {
				//hardcoded
				return	note = "howdy"
			}
		})
		setNotes(newText)
	}
	*/

	//forsøg på at persistere data mellem page change. 
	useEffect(() => {
		setHeadline(JSON.parse(window.localStorage.getItem('headline') || ''));
	  }, []);
	
	  useEffect(() => {
		window.localStorage.setItem('headline', JSON.stringify(headline));
	  }, []);

	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<div className='h2 mt-5'>
						Make new note
					</div>
					<div>
						<form onSubmit={handleSubmit((data) => {
							setHeadline(prevHeadlines => [...prevHeadlines, data.headline])
							setNotes(prevNotes => [...prevNotes, data.note])
						})}>
							<input 
								{...register('headline', {required: "This is required"})} placeholder='Write your headline' 
							/>
							<p>{errors.headline?.message}</p>
							<input 
								{...register('note', {required: "This is required", minLength: {
									value: 10,
									message: "Needs to be at least 10 chars long"
								}})} placeholder='Write your note' 
							/>
							<p>{errors.note?.message}</p>

							<input type="submit" />
						</form>
					</div>
				</div>
				<div className='col'>
					<div className="h2 mt-5">
						See notes
					</div>
					<div className="row">
						<div className="col-2">
							<div className="h5 my-2">Headlines</div>
						{headline.map((headline, index) => {
							return (
								<div key={index}>
									<p>{headline}</p>
								</div>
							)
						})}
						</div>
						<div className="col-10">
						<div className="h5 my-2">Notes</div>
						{notes.map((note, index) => {
							return (
								<div key={index}>
									<p className='mb-2'>{note} <button onClick={handleEdit} className='btn btn-sm btn-warning'>edit</button> </p>
								</div>
							)
						})}
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Home