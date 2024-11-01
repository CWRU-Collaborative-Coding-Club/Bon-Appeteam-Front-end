import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

function RecommendationsScreen () {
    return (
        <View>
            <View style={styles.table}>

                <View style={styles.tableRow}>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Option</Text>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Similarity</Text>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Location</Text>
                    <Text style={[styles.tableCell, styles.tableHeader]}>Remaining Swipes</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={[styles.tableCell]}>Option 1</Text>
                    <Text style={[styles.tableCell]}>insert bar here</Text>
                    <Text style={[styles.tableCell]}>2miles</Text>
                    <Text style={[styles.tableCell]}>393493 swipes</Text>
                </View>


            </View>
        </View>
    );
}

export default RecommendationsScreen;
