import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 30,
      color: '#1B2330',
      marginBottom: 20,
      marginLeft: 20,
      fontWeight: 'bold',
    },
    copyRow: {
      flexDirection: 'row',
      justifyContent: 'right',
      width: '100%'
    },
    copyButton:{
      height: 20, 
      width: 20,
      marginTop: 9,
      marginRight: 9,
      borderRadius: 100
  
    },
    copyIcon: {
      height: 20, 
      width: 20,
      color: '#718096',
    },
    password: {
      width: 200,
      height: 160,
      fontSize: 17,
      fontWeight: '500',
      color: '#3A4A65',
      marginTop: 10,
      textAlign: 'center',
    },
    box: {
      alignItems: 'center',
      maxWidth: 300,
      width: '80%',
      direction: 'column',
      height: 219,
      borderWidth: 2,
      borderColor: '#E2E8F0',
      borderRadius: 10,
    },
    box2: {
      marginTop: -20,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row',
      width: 150,
      height: 40,
      borderWidth: 2,
      borderColor: '#E2E8F0',
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
      shadowColor: "#cdd1d4",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity:  0.21,
      shadowRadius: 8.19,
      elevation: 11
    },
    textLength: {
      color: '#718096', 
      fontWeight: '500',
      marginLeft: 10
    },
    input: {
      marginLeft: 4,
      width: 30,
      height: 40,
    },
    tagsRow: {
      paddingLeft: 10,
      width: 300,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row',
      marginTop: 14,
      marginBottom: 20
  
    },
    tag: {
      padding: 9,
      width: 'auto',
      height: 23,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#E2E8F0',
      borderRadius: 5,
      backgroundColor: '#FFFFFF',
      backgroundColor: '#E2E8F0',
      marginRight: 10,
  
    },
    button: {
      marginTop: 20,
      marginBottom: 10,
      padding: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
      maxWidth: 300,
      height: 10,
      backgroundColor: '#0C009C',
      borderRadius: 10,
    },
    textButton: {
      flex: 1,
      color: 'white',
      fontSize: 14.5,
      textAlign: 'center',
      marginLeft: 20,
    },
    iconButton: {
      width: 20, 
      height: 20, 
      color: 'white'
    },
    linkText: {
      marginTop: 20,
      color: 'blue', // Cor do link
      textDecorationLine: 'underline', // Adiciona sublinhado ao texto
    },
    messageGithub: {
      marginTop: 10,
    }
  });