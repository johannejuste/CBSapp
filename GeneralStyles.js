import { StyleSheet } from 'react-native';

export default defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerHorizontal: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    centerVertical: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    centerCenter: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    }
});
