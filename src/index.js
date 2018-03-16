class Square extends React.component {
    render() {
        return (
            <button className='square'>
                {/* TODO */}
            </button>
        );
    }
}

class Board extends React.component {
    renderSquare(i) {
        return <square />;
    }

    render() {
        const status = 'Next player: x';

        return (
            <div>
                <div className="status">{status}
        </div>

                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}