import styles from './_error.scss'

const Error = ({ statusCode }) => {
    return (
        <div className={styles.errorWrapper}>
            <p>
                {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client'
                }
            </p>
            <p>This page could not be found.</p>
        </div>
    )
}
  
Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
