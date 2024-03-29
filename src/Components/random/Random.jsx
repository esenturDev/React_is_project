import React from "react";
import scss from "./Random.module.scss";
import { useState } from "react";
import { Button } from "../ul/button/Button.jsx";
import { createPortal } from "react-dom";
import { Modal } from "../modal/Modal.jsx";
import { useEffect } from "react";

const Data = [
	{
		id: 1,
		title: "Что такое теги?",
	},
	{
		id: 2,
		title: "Какие общие списки можно использовать при разработке страницы?",
	},
	{
		id: 3,
		title: "Что такое карта-изображение?",
	},
	{
		id: 4,
		title: "В чем преимущество свертывания пустого пространства?",
	},
	{
		id: 5,
		title: "Что такое SCSS?",
	},
	{
		id: 6,
		title: "Сколькими способами можно интегрировать CSS в веб-страницу?",
	},
	{
		id: 7,
		title: "Какие преимущества и недостатки имеют внешние таблицы стилей?",
	},
	{
		id: 8,
		title: "Почему легко вставить файл, импортировав его?",
	},
	{
		id: 9,
		title: "В чем разница между null и undefined?",
	},
	{
		id: 10,
		title: "Для чего используется оператор " && "?",
	},
	{
		id: 11,
		title:
			"Почему функции в JS называют объектами первого класса (First-class Objects)?",
	},
	{
		id: 12,
		title: "Что такое AJAX?",
	},
	{
		id: 13,
		title: "Что вызывает обновление компонента?",
	},
	{
		id: 14,
		title: "setState синхронный или асинхронный?",
	},
	{
		id: 15,
		title: "что такое jsx и он что назвращается",
	},
	{
		id: 16,
		title: "зачем нам нужна styled components и модульную style",
	},
];

export const Random = () => {
	const [random, setRandom] = useState(Data);
	const [random2, setRandom2] = useState([]);
	const [modal1, setModal1] = useState(false);
	const randomRes = () => setModal1(true);
	const randomNoo = () => setModal1(false);
	const getResults = () => {
		const randomIndex = Math.floor(Math.random() * random.length);
		const randomElement = random[randomIndex];

		setRandom2([randomElement]);
	};
	useEffect(() => {
		getResults();
	}, [modal1]);
	return (
		<div>
			<Button onClick={randomRes}>Random !</Button>
			<div>
				{modal1 &&
					createPortal(
						<Modal isOpen={randomNoo}>
							<div className={scss.randomContent}>
								{random2.map((item) => (
									<div key={item.id}>
										<p>{item.title}</p>
									</div>
								))}
								<Button onClick={getResults}>нажми на кнопку</Button>
							</div>
						</Modal>,
						document.getElementById("modal")
					)}
			</div>
		</div>
	);
};

// Как это сделать здесь, когда при нажатии кнопки Math должна выполняться функция getResults() Math.random() и заголовок массива Data менять и выводить в Modal?
