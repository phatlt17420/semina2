// MyNewPieChart.js hoặc MyNewPieChart.jsx

import React from 'react';
// Vẫn cần import các component từ React Native cho môi trường React Native
import { View, Text, StyleSheet } from 'react-native';
// Vẫn cần import thư viện biểu đồ pie dành cho React Native
import PieChart from 'react-native-pie-chart';

// --- Định nghĩa Dữ liệu ---
const dataValues = [20, 30, 50];
const dataColors = ['#F44336', '#2196F3', '#FFEB3B'];
const labels = ['Ăn uống', 'Thuê nhà', 'Tiết kiệm'];

// Chuyển đổi dữ liệu sang định dạng API yêu cầu: mảng obj gồm value và color
const SERIES_API = dataValues.map((value, index) => ({
    value: value,
    color: dataColors[index],
}));

// --- Component Biểu đồ ---
// Component được định nghĩa là một hàm component và được export để sử dụng
const NewPieChart = () => {
    const chartWidthAndHeight = 300;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Biểu đồ Pie</Text>
            <PieChart
                widthAndHeight={chartWidthAndHeight}
                series={SERIES_API}
            />

            {/* Chú giải (Legend) */}
            <View style={styles.legendContainer}>
                {dataValues.map((value, index) => (
                    <View key={index} style={styles.legendItem}>
                        <View style={[styles.colorBox, { backgroundColor: dataColors[index] }]} />
                        <Text>
                            {value}% ({labels[index]})
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

// --- Định nghĩa Styles ---
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    legendContainer: {
        marginTop: 30,
        width: '80%',
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    colorBox: {
        width: 15,
        height: 15,
        marginRight: 10,
        borderRadius: 3,
    },
});

export default NewPieChart;