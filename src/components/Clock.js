import React, { useEffect, useState } from "react";

const currentTime = () => new Date().toLocaleTimeString();

export default function Clock()
{
	const [time, setTime] = useState(currentTime);

	useEffect(() => {
		const updateTime = () => setTime(currentTime());
		const interval = setInterval(updateTime, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<span>
			{time}
		</span>
	);
}
