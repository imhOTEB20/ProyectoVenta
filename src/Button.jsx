import 'bulma/css/bulma.min.css';

export default function Button({ action, title }) {
    return (
        <>
            <button
                className='button is-dark'
                onClick={action}
            >
                {title}
            </button>
        </>
    )
}