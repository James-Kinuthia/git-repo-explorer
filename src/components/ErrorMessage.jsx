

const ErrorMessage = ({message, className = ''}) => !message ? null : (
    <div className={`max-w-2xl mx-auto mb-6 p-4 bg-red-900/50 border border-red-700 rounded-l-2xl rounded-lg text-red-200 ${className}`}>
        {message}
    </div>
);

export default ErrorMessage;