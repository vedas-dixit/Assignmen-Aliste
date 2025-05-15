import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart } from '../context/CartContext';
import CartItemCard from '../components/CartItemCard';
import Button from '../components/Button';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CartScreen() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const isEmpty = cart.items.length === 0;

  const handleCheckout = () => {
    // In a real app, we'd navigate to checkout
    alert('Checkout functionality would be implemented here.');
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleContinueShopping = () => {
    router.push('/');
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container} edges={['right', 'left', 'top']}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={handleGoBack}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color="#2A59FE" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Shopping Cart</Text>
          <Ionicons name="cart" size={20} color="#2A59FE" style={styles.cartIcon} />
        </View>
        <View style={styles.placeholderView} />
      </View>

      {isEmpty ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
          <Button 
            title="Continue Shopping" 
            onPress={handleContinueShopping} 
            style={styles.continueButton}
          />
        </View>
      ) : (
        <>
          <FlatList
            data={cart.items}
            renderItem={({ item }) => <CartItemCard item={item} />}
            keyExtractor={(item) => item.product.id.toString()}
            contentContainerStyle={styles.listContent}
          />
          
          <View style={styles.footer}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalLabel}>Total:</Text>
              <Text style={styles.totalAmount}>${cart.total.toFixed(2)}</Text>
            </View>
            
            <View style={styles.actionsContainer}>
              <Button 
                title="Clear Cart" 
                onPress={handleClearCart} 
                variant="outline"
                style={styles.clearButton}
              />
              <Button 
                title="Checkout" 
                onPress={handleCheckout} 
                style={styles.checkoutButton}
              />
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 4,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartIcon: {
    marginLeft: 8,
  },
  placeholderView: {
    width: 32, // To balance the header
  },
  listContent: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  continueButton: {
    minWidth: 200,
  },
  footer: {
    backgroundColor: 'white',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '500',
    color: '#555',
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2A59FE',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearButton: {
    flex: 1,
    marginRight: 8,
  },
  checkoutButton: {
    flex: 1,
    marginLeft: 8,
  },
}); 