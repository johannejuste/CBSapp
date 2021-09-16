import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
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
