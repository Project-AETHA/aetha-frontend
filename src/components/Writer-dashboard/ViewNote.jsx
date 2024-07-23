import { useParams } from 'react-router-dom'

export default function ViewNote () {
    const { noteId } = useParams()

    return (
        <div>Viewing Note {noteId}</div>
    )
}