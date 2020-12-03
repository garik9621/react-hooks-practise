import React from 'react'
import {Search} from "../components/Search";
import {Card} from "../components/Card";

export const Home = () => {
	return (
		<>
			<Search />

			<div className="row">
				{[1, 2, 3].map((item, index) => {
					return (
						<div key={index} className="col-sm-4 mb-4">
							<Card />
						</div>
					)
				})}
			</div>
		</>
	)
}