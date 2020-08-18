import * as React from "react";
import './index.scss';

class Header extends React.Component{
	render() {
		return (
			<div className='snowball-header'>
				<div className='snowball-header-title'>snowball</div>
				<div>一天学一点，总会有用的。</div>
			</div>

		)
	}
}

export default Header;
