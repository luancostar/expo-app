
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';


const list = [
{
  id: 1,
  label: 'Boleto conta luz',
  value: '300,90',
  date: '17/09/2022',
  type: 0 //despesas
},
{
  id: 2,
  label: 'Pix cliente X',
  value: '300,90',
  date: '17/09/2022',
  type: 1 //receitas
},
{
  id: 3,
  label: 'Salário',
  value: '300,90',
  date: '17/09/2022',
  type: 1 //receitas
},
]


export default function App() {
  return (
    <View style={styles.container}>
      <Header name="Luan Rodrigues" />
      <Balance saldo="7.000,00" gastos="-3.200,00"/>
      <Text style={styles.title}>Últimas Movimentações</Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
