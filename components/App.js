import React from 'react';
import fen from "../img/fen.png"
import di from "../img/di.png"
class App extends React.Component{
	render(){
		return(
			<div>
				<h4 className="top"><span>&lt;</span><span>×</span>饿了么<img src={fen}/></h4>
				<div className="search">
					<h3><img src={di}/>海为科技园</h3>
					<input type="text" placeholder="搜所商家、商品名称"/>
				</div>
			</div>
		)
	}
}

export default App;