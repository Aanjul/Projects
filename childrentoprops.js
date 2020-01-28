
<script type="text/babel" data-presets="env,react">

const App =() =>{
	return (
<div>
<Segment>
 <div className="ui icon header">
 <i className="pdf file outine"></i>
 List some Documents
 </div>

 <div className="ui primary button"> Add the Document </div>
</Segment>

<Segment>
<h4 class="ui header"> For your information </h4>

<p>
This is some gibberish text. This is some gibberish text.This is some gibberish text.This is some gibberish text.This is some gibberish text.This is some gibberish text.This is some gibberish text.This is some gibberish text.This is some gibberish text.This is some gibberish text.This is some gibberish text.


</p>
</Segment>
</div> 
	)
}


const Segment =(props) => {
	return <div className="ui placeholder segment">
	{props.children}
	</div>
};


    ReactDOM.render(<App />, document.querySelector('#root'));
</script>



<div id="root"></div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/@babel/preset-env-standalone@7/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />