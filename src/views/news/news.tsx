import React, { useEffect, useState } from 'react';
import './news.css';
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
