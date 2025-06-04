
import { View, StyleSheet } from "react-native";
const BlockLayout = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row} testID="row">
                <View style={[styles.block, styles.lightBlue]} testID="block"/>
                <View style={[styles.block, styles.darkBlue]} testID="block"/>
                <View style={[styles.block, styles.darkBlue]} testID="block"/>
            </View>

            <View style={styles.row} testID="row">
                <View style={[styles.fullBlock, styles.green]} testID="block"/>
            </View>

            <View style={styles.row} testID="row">
                <View style={[styles.fullBlock, styles.green]} testID="block" />
            </View>

            <View style={styles.row} testID="row">
                <View style={[styles.block, styles.darkGreen]} testID="block"/>
                <View style={[styles.block, styles.lightGreen]} testID="block"/>
                <View style={[styles.block, styles.darkGreen]} testID="block"/>
            </View>

            <View style={styles.row}testID="row">
                <View style={[styles.fullBlock, styles.darkBlue]} testID="block"/>
            </View>

            <View style={styles.row} testID="row">
                <View style={[styles.fullBlock, styles.lightBlue]} testID="block" />
                
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: 375,
        height: 667,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
    },
    block: {
        width: 125, // 375 / 3 = 125
        height: 100,
    },
    fullBlock: {
        width: 375,
        height: 100,
    },
    lightBlue: {
        backgroundColor: '#87CEFA',
    },
    darkBlue: {
        backgroundColor: '#4682B4',
    },
    green: {
        backgroundColor: '#7CFC00',
    },
    darkGreen: {
        backgroundColor: '#006400',
    },
    lightGreen: {
        backgroundColor: '#ADFF2F',
    },
        
});


export default BlockLayout;