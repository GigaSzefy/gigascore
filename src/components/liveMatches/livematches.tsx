import React, { useEffect, useState } from 'react';
import { LiveMatchesType } from '../../types/liveMatches';
import './livematches.css';
import { ApiFootball } from '../../services/api/api-football';
import { useAppSelector } from '../../app/hooks';
import { selectFixtures } from '../../slices/liveMatches-slice';

const LiveMatches: React.FC = () => {
	const liveMatches = useAppSelector(selectFixtures);
	const convertTimestampToTime = (timestamp: number): string => {
		const date = new Date(timestamp * 1000);
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const formattedTime = `${hours}:${minutes}`;
		return formattedTime;
	};

	return (
		<>
			<div>
				{liveMatches.map((match) => {
					const time = convertTimestampToTime(match.fixture.timestamp);
					return (
						<div key={match.fixture.id}>
							<div className='matchDiv'>
								{time}
								<p>
									{match.teams.home.name} vs {match.teams.away.name}
								</p>
								<img
									className='logo'
									src={`${match.teams.home.logo}`}
									alt='homeLogo'
								/>
								<img
									className='logo'
									src={`${match.teams.away.logo}`}
									alt='awayLogo'
								/>
								<p>
									{match.goals.home} : {match.goals.away}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default LiveMatches;
