import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegistroScreen: React.FC = () => {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [CPF, setCPF] = useState('');
  const [idioma, setIdioma] = useState('');

  const handleCadastro = () => {
    console.log('Nome:', nome);
    console.log('Gênero:', genero);
    console.log('Data de Nascimento:', dataNascimento);
    console.log('Usuário:', usuario);
    console.log('Senha:', senha);
    console.log('E-mail:', email);
    console.log('Confirmar E-mail:', confirmarEmail);
    console.log('CPF:', CPF);
    console.log('Idioma do Currículo:', idioma);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Gênero"
        value={genero}
        onChangeText={(text) => setGenero(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={dataNascimento}
        onChangeText={(text) => setDataNascimento(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={(text) => setUsuario(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme seu E-mail"
        value={confirmarEmail}
        onChangeText={(text) => setConfirmarEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={CPF}
        onChangeText={(text) => setCPF(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Idioma do Currículo"
        value={idioma}
        onChangeText={(text) => setIdioma(text)}
      />
      <Button style={styles.botao} title="REGISTRAR" onPress={handleCadastro} />
      {nome}
      <br />
      {genero}
      <br />    
      {dataNascimento}
      <br />
      {usuario}
      <br />
      {senha}
      <br />
      {email}
      <br />
      {confirmarEmail}
      <br />
      {CPF}
      <br />
      {idioma}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "cornsilk"
  },
  input: {
    width: '30%',
    height: '30%',
    marginTop: 20,
    padding: 10,
    marginVertical: 5,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "white"
  },
  botao: {
    marginTop: 0
  }
});

export default RegistroScreen;
