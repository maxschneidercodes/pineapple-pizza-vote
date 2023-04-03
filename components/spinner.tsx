export default function Spinner() {
    return <div className="text-center p-4">
        <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
}