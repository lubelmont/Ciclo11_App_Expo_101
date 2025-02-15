import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import searchCountry from './fetchCountries';


const Country = () => {

    const [countries, setCountries] = useState([]);

    
    useEffect(() => {   
        searchCountry().then(data => setCountries(data));
    }, []);
    

    return (//.map (mas menos) un for
    <ScrollView style={styles.container}>
        {countries.map((country, index) => {
            return (
                <View key={index}>
                    <Text>Nombre: {country.name.common}</Text>
                    <Text> Nombre oficial:{country.name.official}</Text>
                </View>
            );
        })

    }

    </ScrollView >
    );

}

const styles = StyleSheet.create({
    container: {
       padding: 10,
    },

});

export default Country;