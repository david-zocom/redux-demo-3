import React from 'react';

function ListView(props) {
	const list = props.items.map( x => <li key={x}>{x}</li> )
	return (
		<ul>{list}</ul>
	);
}

export default ListView;