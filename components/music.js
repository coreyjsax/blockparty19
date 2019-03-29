const MusicMain = (props) => {
    return (
        <div className="container music-main">
            <h1>Want to Play the Block Party?</h1>
            <img src="/static/pizza-luce-block-party.png" />
            <style jsx>{`
                .music-main{
                    background-image: url('/static/two.jpg');
                    background-repeat: no-repeat;
                    width:100%;
                    height:500px;
                }
            `}</style>
        </div>
    )
}

const MusicSubmit = (props) => {
    return (
        <div className="container music-submit">
            <div className="transparency">
                <h1>Submissions</h1>
                <img src="/static/pizza-luce-block-party.png" />
            </div>
            
            <style jsx>{`
                .music-submit{
                    background-image: url('/static/two.jpg');
                    background-repeat: no-repeat;
                    width:100%;
                    height:500px;
                    position: relative;
                }
                .transparency {
                    background-color: rgba(248, 247, 216, 0.7);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                
            `}</style>

        </div>
    )
}

class MusicSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display: 'main'
        };
    }

    changeDisplay = () => {
        let {display} = this.state;
        this.setState({display: display === 'main' ? 'submit' : 'main'});
    }

    renderInner() {
        let {display} = this.state;

        if (display === 'main') {
            return <MusicMain />
        } else if (display === 'submit'){
            return <MusicSubmit />
        }
    }

    render() {
        return (
            <section id="music" name="music" className="music">
                <div className="container">
                    <button className="button" onClick={this.changeDisplay}>
                        click me
                    </button>
                </div>
    
                {this.renderInner()}
                <style jsx>{`
                    #music {
                        width:100%;
                    }
                    
                `}</style>
            </section>
        )
    }
}

export default MusicSection