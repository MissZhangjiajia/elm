import React from 'react';
import banner from '../img/banner.png';
import img from '../img/humb.png';

class App extends React.Component{
    render(){
        return(
            <div>
                <div className="list">
                    <div className="banner">
                        <img src={banner}/>
                    </div>
                    <ul>
                        <li>
                            <img src={img}/>
                            <span>美食</span>
                        </li>
                        <li>
                            <img src={img}/>
                            <span>美食</span>
                        </li>
                        <li>
                            <img src={img}/>
                            <span>美食</span>
                        </li>
                        <li>
                            <img src={img}/>
                            <span>美食</span>
                        </li>
                        <li>
                            <img src={img}/>
                            <span>美食</span>
                        </li>
                        <li>
                            <img src={img}/>
                            <span>美食</span>
                        </li>
                        <li>
                            <img src={img}/>
                            <span>美食</span>
                        </li>
                        <li>
                            <img src={img}/>
                            <span>美食</span>
                        </li>
                        <li>
                            <img src={img}/>
                            <span>美食</span>
                        </li>
                        <li>
                            <img src={img}/>
                            <span>美食</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default App;