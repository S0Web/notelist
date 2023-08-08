import { TouchableOpacity, Text } from "react-native"
import {s} from './Card.style.js'

export function Card({note, onLongPress}) {
    return (
        <TouchableOpacity onLongPress={() => onLongPress(note)} style={s.card}>
            <Text style={s.title}>{note.title}</Text>
            <Text style={s.content}>{note.content}</Text>
        </TouchableOpacity>
        
)}