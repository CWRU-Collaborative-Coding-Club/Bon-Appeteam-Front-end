import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#eaeaea',
    },
    header : {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    table: {
        borderWidth: 1,
        borderColor: '#000',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#000',
    },
    tableCell: {
        flex: 1,
        padding: 8,
        paddingLeft: 15,
        borderRightWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
    },
    tableHeader: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#61dafb',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    blue: {
        color: '#003071'
    },
    white: {
        color: '#FFFFFF'
    },
    lightblue: {
        color: '#A6D2E6'
    },
    darkblue: {
        color: '#09143A'
    }
});

export default styles;