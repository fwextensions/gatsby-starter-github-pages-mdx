import React from "react";

export default function Header({ siteTitle })
{
	return (
		<header
			style={{
				borderBottom: "1px solid #aaa",
				borderBottomColor: "gray.3",
				mb: "24px"
			}}
		>
			<div
				style={{
					margin: "0 auto",
					maxWidth: "80%",
					padding: "1.5em 0"
				}}
			>
{/*
				<Flex as="nav" sx={{ justifyContent: "space-between" }}>
					<Link to="/" sx={{ m: 0 }}>
						{siteTitle}
					</Link>
					<Flex>
						<Link to="/our-story/">Our Story</Link>
						<Link to="/faq/">FAQ</Link>
						<Link to="/support/">Support</Link>
						<Link to="/user-guides/">User Guides</Link>
					</Flex>
				</Flex>
*/}
			</div>
		</header>
	);
}
