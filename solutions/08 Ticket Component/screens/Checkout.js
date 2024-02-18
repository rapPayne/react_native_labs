import { useState } from 'react';
import { Button, Text, TextInput } from 'react-native';

export function Checkout({ cart, setCart }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [pan, setPan] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <>
      <Text>Checkout</Text>
      <Text>Your cart</Text>
      <Text>First name</Text>
      <TextInput value={firstName} onChangeText={setFirstName} />
      <Text>Last name</Text>
      <TextInput value={lastName} onChangeText={setLastName} />
      <Text>Email (optional)</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Cell (optional)</Text>
      <TextInput value={cell} onChangeText={setCell} />
      <Text>Credit card number</Text>
      <TextInput value={pan} onChangeText={setPan} />
      <Text>Expiration month</Text>
      <TextInput value={expiryMonth} onChangeText={setExpiryMonth} />
      <Text>First name</Text>
      <TextInput value={expiryYear} onChangeText={setExpiryYear} />
      <Text>CVV (3-digit code)</Text>
      <TextInput value={cvv} onChangeText={setCvv} />
      <Button title="Purchase" />
    </>
  )
}