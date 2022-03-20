import { useState } from "react";
import "./App.css";
import { Input } from "./components/core-components/Input";
import { formPropertyTypeConverter } from "./helper/core-helpers";

function App() {
	const [formData, setFormData] = useState({
		amount: 0,
		name: "Serdar Şerifoğlu",
	});

	const handleChange = (prop) => (event) => {
		setFormData({
			...formData,
			[prop]: formPropertyTypeConverter(
				formData,
				prop,
				event.target.value
			),
		});
	};
	return (
		<div className="App">
			SERDAR
			<Input
				type="number"
				onChange={handleChange("amount")}
				value={formData.amount}
			></Input>
			<Input
				type="text"
				onChange={handleChange("name")}
				value={formData.name}
			></Input>
		</div>
	);
}

export default App;
