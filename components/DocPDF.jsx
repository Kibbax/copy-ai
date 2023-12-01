import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    margin: 20,
    marginBottom: 40, // Ajusta el margen inferior según sea necesario
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
  },
  inputSection: {
    textAlign: 'right',
  },
  resultSection: {
    textAlign: 'left',
    marginTop: 20,
  },
  separator: {
    borderBottom: 1,
    borderBottomColor: '#240046',
    marginBottom: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    borderTop: 1,
    borderTopColor: '#240046',
    paddingTop: 5,
    textAlign: 'center',
    fontSize: 10,
  },
});

const DocPDF = ({ result }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Membrete */}
        <View style={styles.header}>
          {/* <Image style={styles.logo} src="/path/to/your/logo.png" /> */}
          <Text style={styles.headerText}>Copy Craft Pro</Text>
        </View>

        <View style={styles.separator} />

        {/* Título */}
        <Text style={styles.title}>Título del PDF</Text>

        {/* Input Section */}
        <View style={styles.section}>
          <Text>Input</Text>
        </View>

        {/* Result Section */}
        <View style={[styles.section, styles.resultSection]}>
          <Text>Result</Text>
          <Text>{result ? result : "..."}</Text>
        </View>

        {/* Pie de página */}
        <View style={styles.footer}>
          <Text>¡Gracias por utilizar Copy Craft Pro!</Text>
        </View>
      </Page>
    </Document>
  );
};

export default DocPDF;
