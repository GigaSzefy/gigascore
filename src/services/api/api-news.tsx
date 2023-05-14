const apiNewsDef = () => {

    const getNews = async () => {

        try {
            const apiURL = `https://newsapi.org/v2/everything?q=football&from=2023-05-02&sortBy=popularity&apiKey=ee1e6126ee11484fb715297f8fd1d85a`
    
        const response = await fetch(apiURL) 
          const news = await response.json()
          return news.articles
        }

        catch (error) {}
    }

    const getCustomNews = async (keyword: string) => {

        try {
            const apiURL = `https://newsapi.org/v2/everything?q=${keyword}&from=2023-05-02&sortBy=popularity&apiKey=ee1e6126ee11484fb715297f8fd1d85a`
    
        const response = await fetch(apiURL) 
          const news = await response.json()
          return news.articles
        }

        catch (error) {}
    }

    return {getNews, getCustomNews}
    
}

export const apiNews = apiNewsDef()