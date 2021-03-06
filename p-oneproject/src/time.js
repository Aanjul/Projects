<script type="text/babel" data-presets="env,react">
    function getTime() {
        return (new Date()).toLocaleTimeString()
    }

    // Creates a functional component
    const time = getTime();
    const App = () => {
        return (
            <div>
                <div>Current Time:</div>
                <h3>{time}</h3>
            </div>
        );
    }

    // Renders the App component into a div with id 'root'
    ReactDOM.render(<App />, document.querySelector('#root'));
</script>
