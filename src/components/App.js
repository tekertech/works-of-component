import React from 'react'; 
import '../App.css';
import News from './News';
function App() {
           const news = [{tranCode: "TranCode 1",
                       customerNumber: "customerNumber 1"
                      },
                      {
                       tranCode: "TranCode 2",
                       customerNumber: "customerNumber 2"
                      },
                      {
                       tranCode: "TranCode 3",
                       customerNumber: "customerNumber 3"
                      }
                    ];

  return (
    
    <div className="App">
      <header className="App-header">
       <News news = {news}></News>
      </header>
    </div>
  );
}

export default App;
