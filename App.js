import { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [valor, setValor] = useState(20);

  function resetar() {
    setValor(20);
  }

  function alterarValor(numero) {
    setValor(valor + numero);
  }

  function calcularNovoValor(valorAtual, operacao) {
    if (operacao === 'dobrar') return valorAtual * 2;
    if (operacao === 'metade') return valorAtual / 2;
    if (operacao === 'somar') return valorAtual + 2;
    if (operacao === 'subtrair') return valorAtual - 2;
    return valorAtual;
  }

  function executarOperacao(operacao) {
    const novoValor = calcularNovoValor(valor, operacao);
    setValor(novoValor);
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>Calculadora</Text>

      <View style={styles.display}>
        <Text style={styles.displayLabel}>valor atual</Text>
        <Text style={styles.valor}>{valor}</Text>
      </View>

      <View style={styles.grid}>

        <View style={styles.linha}>
          <TouchableOpacity style={[styles.botao, styles.botaoClaro]} onPress={() => executarOperacao('somar')}>
            <Text style={styles.textoBotao}>+2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, styles.botaoClaro]} onPress={() => executarOperacao('subtrair')}>
            <Text style={styles.textoBotao}>-2</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linha}>
          <TouchableOpacity style={[styles.botao, styles.botaoClaro]} onPress={() => alterarValor(15)}>
            <Text style={styles.textoBotao}>+15</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, styles.botaoClaro]} onPress={() => alterarValor(-15)}>
            <Text style={styles.textoBotao}>-15</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linha}>
          <TouchableOpacity style={[styles.botao, styles.botaoDestaque]} onPress={() => executarOperacao('dobrar')}>
            <Text style={styles.textoBotao}>Dobrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, styles.botaoDestaque]} onPress={() => executarOperacao('metade')}>
            <Text style={styles.textoBotao}>Metade</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botaoReset} onPress={resetar}>
          <Text style={styles.textoReset}>Resetar</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12121A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#AAAACC',
    letterSpacing: 3,
    textTransform: 'uppercase',
    marginBottom: 28,
  },
  display: {
    backgroundColor: '#1E1E2E',
    borderRadius: 20,
    paddingVertical: 28,
    paddingHorizontal: 52,
    alignItems: 'center',
    marginBottom: 32,
  },
  displayLabel: {
    fontSize: 12,
    color: '#555577',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 6,
  },
  valor: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#C084FC',
  },
  grid: {
    width: '100%',
    gap: 12,
    margin: 20
  },
  linha: {
    flexDirection: 'row',
    gap: 12,
    margin: 30
  },
  botao: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  botaoClaro: {
    backgroundColor: '#1E1E2E'
  },
  botaoDestaque: {
    backgroundColor: '#2D1B4E',
  },
  textoBotao: {
    color: '#E2E2FF',
    fontSize: 16,
    fontWeight: '600',
  },
  botaoReset: {
    backgroundColor: '#1A1A1A',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  textoReset: {
    color: '#888',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 1,
  },
});