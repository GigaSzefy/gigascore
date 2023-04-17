const apiNewsDef = () => {

    const getNews = async () => {

        try {
            const apiURL = `https://newsapi.org/v2/everything?q=sport&from=2023-04-01&sortBy=popularity&apiKey=ee1e6126ee11484fb715297f8fd1d85a`
    
        const response = await fetch(apiURL) 
          const news = await response.json()
          return news.articles
        }

        catch (error) {}
    }

    return {getNews}
}

export const apiNews = apiNewsDef()