import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    },
    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16,
    },
    input: {
        flex: 1,/*ocupar todo o espaço */
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor:'#1f709f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form:{
        width: '100%',
        flexDirection: 'row',
        marginTop: 36, 
        marginBottom: 20,
    },
    listEmptyText: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center',
    },
    imageContainer:{
        alignContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 180,
        marginTop: 15,
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    criadas: {
        color: '#4a9fd1',
        fontSize: 20,
        marginBottom: 20,
    },
    concluidas: {
        color: '#8386fc',
        fontSize: 20,
        marginBottom: 20,
    },
    // participantContainer: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     marginBottom: 10,
    //   },
    //   markButton: {
    //     width: 20,
    //     height: 20,
    //     borderRadius: 10,
    //     marginRight: 10,
    //     borderWidth: 2,
    //     borderColor: 'gray',
    //   },
  });