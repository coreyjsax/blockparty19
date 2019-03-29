

const FirstComponent = (props) => {
    return (
        <div className="first-class">
            I'm the first component
        </div>
    )
}

const SecondComponent = (props) => {
    return (
        <div className="second-class">
            <div>
                I'm the second component
            </div>
            <style jsx>{`
                .second-class {
                    background-image: url('https://pizzaluce.com/bpassets/lo-rez/two.jpg');
                    height: 100%;
                }
            `}</style>
        </div>
    )
}

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: 'first'
        };
    }

    changeDisplay = () => {
        let { display } = this.state;
        this.setState({ display: display === 'first' ? 'second' : 'first'});
    }

    renderInner(){
        let { display } = this.state;

        if (display === 'first'){
            return <FirstComponent />
        } else if (display === 'second'){
            return <SecondComponent />
        }
    }

    render(){
        return (
            <div className="main-class">
                <button className="button" onClick={this.changeDisplay}>
                    click me
                </button>

                {this.renderInner()}
                
            </div>
        );
    }
}

export default VisibilityToggle;