import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import getAllCountriesFromAmerica from './fetchCountries';

/**
 * 
 * Ejercicio solo trae un pais de america
 * 
 * 
 */
const Country = () => {

    const [countries, setCountries] = useState([]);


    useEffect(() => {
        getAllCountriesFromAmerica().then(data => setCountries(data));
    }, []);


    return (
        <ScrollView style={styles.container}>
            {countries
                .sort((a, b) => a.name.common.localeCompare(b.name.common))
                .map((country, index) => {
                    return (
                        <View key={index} style={styles.countryCard}>
                            <Text style={styles.contryName}> {country.flag} {country.name.common}</Text>
                            <Text style={styles.contryOfficialName}>Nombre Oficial: {country.name.official}</Text>
                            <Text style={styles.contryCapital}>Capital: {country.capital?.[0] || "Sin Capital"}</Text>

                        </View>

                    );
                })}
        </ScrollView>);

}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    countryCard: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    contryName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    contryOfficialName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    contryCapital: {
        fontSize: 16,
    }

});

export default Country;