import React, { useEffect, useState } from 'react';
import { Article } from '../../types/news';
import NewsComponent from '../../components/newsComponent/newsComponent';

const NewsView: React.FC = () => {
	return (
		<>
			<NewsComponent />
		</>
	);
};

export default NewsView;
