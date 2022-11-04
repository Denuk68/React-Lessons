export default function User({ user: { id, name, email } }) {
    return (
        <option value={id}>{id}-{name}-{email}</option>
    )
}