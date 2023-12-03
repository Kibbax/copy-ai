import React from 'react';
import { Document, Page, Text, View, Link, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#F0DCF0",
    padding: 20,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    textAlign: 'left',
    padding: 15,
    backgroundColor: '#5A189A',
    color: 'white',
    fontSize: 15,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    borderRadius: 10,
    border: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    textDecoration: 'underline',
  },
  resultText: {
    fontSize: 14,
    lineHeight: 1.5,
  },
  spaceBetweenText: {
    marginBottom: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#5A189A',
    color: 'white',
    fontSize: 12,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'underline',
  },
});

const DocPDF = ({ input, result }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* Header */}
        <View style={styles.header}>
          <Text>Copy Craft Pro</Text>
        </View>

        {/* Input Section */}
        <View style={[styles.section, { marginTop: 80 }]}>
          <Text style={styles.title}>Your Creative Input</Text>
          <Text style={[styles.resultText, styles.spaceBetweenText]}>
            {input ? input : "..."}
          </Text>
        </View>

        {/* Result Section */}
        <View style={[styles.section, {marginTop: 30}]}>
          <Text style={styles.title}>Crafted Copy Just for You</Text>
          <Text style={[styles.resultText, styles.spaceBetweenText, { fontStyle: 'italic', color: '#333' }]}>Take a moment to savor the copy you've crafted. It's uniquely yours.</Text>
          <Text style={styles.resultText}>{result ? result : "..."}</Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>
            Thank you for using Copy Craft Pro!{" "}
            <Link src="https://copycraftpro.vercel.app" style={styles.link}>
              Visit our web application.
            </Link>
          </Text>
        </View>

      </Page>
    </Document>
  );
};

export default DocPDF;
