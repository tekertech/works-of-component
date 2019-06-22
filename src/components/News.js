import React, { Component } from 'react';
import NewsItem from './newsItem';

class News extends Component {
    constructor(props) {
        super(props);
      console.log("constructor");
      console.log(props);
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("nextProps");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    render() {
        return (
            <div>
               {
                   this.props.news.map( item => <li>
                                                      {
                                                            <NewsItem tranCode = {item.tranCode}
                                                                    customerNumber = {item.customerNumber}>
                                                            </NewsItem>
                                                      }
                                                </li>
                                      )
                }
            </div>
        );
    }
}

News.propTypes = {
  
};

export default News;

