import React from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./phone.jpg')}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.stars}>
            <FontAwesome name="star" size={24} color="gold" />
            <FontAwesome name="star" size={24} color="gold" />
            <FontAwesome name="star" size={24} color="gold" />
            <FontAwesome name="star" size={24} color="gold" />
            <FontAwesome name="star-half" size={24} color="gold" />
          </View>
          <Text style={styles.ratingText}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>1.790.000 ₫</Text>
          <Text style={styles.oldPrice}>2.090.000 ₫</Text>
        </View>
        <View style={styles.promoContainer}>
          <Text style={styles.promo}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <FontAwesome name="question-circle" size={16} color="rgba(0, 0, 0, 0.78)" />
        </View>
        <Text style={styles.options}>4 MÀU - CHỌN LOẠI</Text>
        <TouchableOpacity style={styles.button} onPress={() => alert('Mua hàng thành công!')}>
          <Text style={styles.buttonText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 265,
    height: 324,
    marginTop: 18,
    marginLeft: 40,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    width: '100%',
  },
  title: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Roboto',
    width: 288,
    height: 35,
    marginTop: 18,
    marginLeft: 0,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  stars: {
    flexDirection: 'row',
    marginRight: 10,
  },
  ratingText: {
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: '400',
    color: 'black',
    marginLeft: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'flex-start',
  },
  oldPrice: {
    fontSize: 15,
    color: 'gray',
    textDecorationLine: 'line-through',
    marginLeft: 20,
  },
  price: {
    fontSize: 18,
    color: 'black',
    marginRight: 40,
    fontFamily: 'roboto',
    fontWeight: '700',
    alignSelf: 'flex-start',
  },
  promoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  promo: {
    fontSize: 12,
    color: 'red',
    fontFamily: 'roboto',
    fontWeight: '700',
    marginRight: 5,
  },
  options: {
    fontSize: 16,
    marginBottom: 80,
  },
  button: {
    backgroundColor: '#CA1536',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
