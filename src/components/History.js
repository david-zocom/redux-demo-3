import React from 'react';

function History(props) {
	console.log('history:', props.history)
	return <p>History: {props.history[0].type}</p>;
}

export default History;