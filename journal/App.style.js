import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
    app: {
        backgroundColor: "#F9F9F9",
        flex:1,
    },
    header: {
        flex: 1
    
    },
    body: {
        flex: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    
    },
    footer: {
        height: 70
    
    },

    cardItem: {
        marginBottom: 20
    }
})