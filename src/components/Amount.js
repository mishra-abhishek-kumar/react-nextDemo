import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { amountSlice } from "../state/slice/AmountSlice";

const Amount = () => {
	const [amount, setAmount] = useState(0);
	const dispatch = useDispatch();

	return (
		<div>
			<button
				onClick={(e) => {
					dispatch(amountSlice.actions.decreament(amount));
				}}
			>
				-
			</button>
			<input type="text" onChange={(e) => setAmount(e.target.value)} />
			<button
				onClick={(e) => {
					dispatch(amountSlice.actions.increament(amount));
				}}
			>
				+
			</button>
		</div>
	);
};

export default Amount;
