import React, { Component } from 'react';
import { View, Text, Switch, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

class ConfigScreen extends Component {
  constructor() {
    super();
    this.state = {
      displayName: 'Seu Nome',
      notificationsEnabled: true,
      language: 'Português',
      theme: 'light', // 'light', 'dark', ou 'auto'
    };
  }

  handleNameChange = (text) => {
    this.setState({ displayName: text });
  }

  toggleNotifications = () => {
    this.setState((prevState) => ({
      notificationsEnabled: !prevState.notificationsEnabled,
    }));
  }

  handleLanguageChange = (language) => {
    this.setState({ language });
  }

  toggleTheme = (theme) => {
    this.setState({ theme }, () => {
      // Quando o tema é alterado, você pode aplicar os estilos apropriados.
      if (theme === 'dark') {
        // Altere as cores de acordo com o tema escuro
        this.applyDarkThemeStyles();
      } else {
        // Use cores padrão
        this.applyLightThemeStyles();
      }
    });
  }

  applyDarkThemeStyles = () => {
    // Defina estilos para o tema escuro
    this.setState({
      sectionBackgroundColor: '#333',
      sectionHeaderColor: '#FFF',
      labelColor: '#FFF',
      inputBorderColor: '#555',
      optionTextColor: '#FFF',
      optionSelectedColor: 'lightblue',
    });
  }

  applyLightThemeStyles = () => {
    // Use estilos padrão
    this.setState({
      sectionBackgroundColor: '#FFF',
      sectionHeaderColor: 'black',
      labelColor: 'black',
      inputBorderColor: 'gray',
      optionTextColor: 'black',
      optionSelectedColor: 'lightblue',
    });
  }

  logout = () => {
    // Aqui você deve adicionar a lógica de logout, como limpar o token de autenticação e redirecionar para a tela de login.
    console.log('Usuário deslogado');
  }

  saveSettings = () => {
    // Aqui você deve adicionar a lógica real para salvar as configurações, como fazer uma chamada de API para o servidor.
    console.log('Configurações salvas:', this.state);
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { backgroundColor: this.state.sectionBackgroundColor },
        ]}
      >
        <View
          style={[
            styles.section,
            { backgroundColor: this.state.sectionBackgroundColor },
          ]}
        >
          <Text
            style={[
              styles.sectionHeader,
              { color: this.state.sectionHeaderColor },
            ]}
          >
            Configurações de Conta
          </Text>
          <Text style={[styles.label, { color: this.state.labelColor }]}>
            Nome de Exibição:
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                borderColor: this.state.inputBorderColor,
                color: this.state.labelColor,
              },
            ]}
            value={this.state.displayName}
            onChangeText={this.handleNameChange}
          />
        </View>

        <View
          style={[
            styles.section,
            { backgroundColor: this.state.sectionBackgroundColor },
          ]}
        >
          <Text
            style={[
              styles.sectionHeader,
              { color: this.state.sectionHeaderColor },
            ]}
          >
            Configurações do Aplicativo
          </Text>
          <View style={styles.option}>
            <Text
              style={[
                styles.label,
                { color: this.state.labelColor },
              ]}
            >
              Idioma
            </Text>
            <TouchableOpacity onPress={() => this.handleLanguageChange('Português')}>
              <Text
                style={[
                  this.state.language === 'Português' ? styles.optionSelected : styles.optionText,
                  { color: this.state.optionTextColor },
                ]}
              >
                Português
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleLanguageChange('Inglês')}>
              <Text
                style={[
                  this.state.language === 'Inglês' ? styles.optionSelected : styles.optionText,
                  { color: this.state.optionTextColor },
                ]}
              >
                Inglês
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.option}>
            <Text style={[styles.label, { color: this.state.labelColor }]}>Notificações Push</Text>
            <Switch value={this.state.notificationsEnabled} onValueChange={this.toggleNotifications} />
          </View>
          <View style={styles.option}>
            <Text style={[styles.label, { color: this.state.labelColor }]}>Tema</Text>
            <TouchableOpacity onPress={() => this.toggleTheme('light')}>
              <Text
                style={[
                  this.state.theme === 'light' ? styles.optionSelected : styles.optionText,
                  { color: this.state.optionTextColor },
                ]}
              >
                Claro
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.toggleTheme('dark')}>
              <Text
                style={[
                  this.state.theme === 'dark' ? styles.optionSelected : styles.optionText,
                  { color: this.state.optionTextColor },
                ]}
              >
                Escuro
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.toggleTheme('auto')}>
              <Text
                style={[
                  this.state.theme === 'auto' ? styles.optionSelected : styles.optionText,
                  { color: this.state.optionTextColor },
                ]}
              >
                Automático
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.saveButton,
            { backgroundColor: this.state.sectionBackgroundColor },
          ]}
          onPress={this.saveSettings}
        >
          <Text style={[styles.saveButtonText, { color: this.state.labelColor }]}>
            Salvar Configurações
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={this.logout}>
          <Text style={styles.logoutButtonText}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginTop: 8,
  },
  option: {
    marginTop: 16,
  },
  optionText: {
    fontSize: 16,
    marginVertical: 4,
  },
  optionSelected: {
    fontSize: 16,
    marginVertical: 4,
    fontWeight: 'bold',
  },
  languageOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  themeOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  saveButtonText: {
    fontSize: 18,
  },
  logoutButton: {
    backgroundColor: '#e53935',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ConfigScreen;
