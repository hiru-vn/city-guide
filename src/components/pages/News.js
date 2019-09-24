import React from 'react'
import NewsCard from '../NewsCard';
import { InfoConsumer } from '../context';

class News extends React.Component {
    render() {
        return (
            <InfoConsumer>
                {
                    value => {
                        return value.news.map(item => {
                            return (
                            <NewsCard key={item.id} item={item}/>)
                        })
                    }
                }
            </InfoConsumer>
        )
    }
}

export default News