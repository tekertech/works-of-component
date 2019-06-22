import React from 'react'; 

class NewsItem extends React.Component {
    
    constructor(props) {
        super(props); 
        console.log("constructor props : " + props);
    }

    render(){ 
        const {tranCode, customerNumber} = this.props;  
        return(
             <div>
                <p>{tranCode}</p>
                <p>{customerNumber}</p> 
             </div>
        )
    }
}

export default NewsItem;
