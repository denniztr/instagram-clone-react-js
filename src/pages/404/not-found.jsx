import { Link } from 'react-router-dom';

export const NotFound = () => {
    const styles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    return (
        <div style={styles}>
            <h4
                style={{
                    fontSize: '64px',
                    letterSpacing: '3px',
                    fontWeight: '300',
                    color: 'dimgray',
                }}
            >
                404
            </h4>
            <Link
                style={{
                    fontSize: '32px',
                    letterSpacing: '3px',
                    fontWeight: '300',
                    marginTop: '5rem',
                }}
                to="/"
            >
                click to turn back
            </Link>
        </div>
    );
};
