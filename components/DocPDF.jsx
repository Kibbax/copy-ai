  import React from 'react';
  import { Document, Page, Text, View, Link, StyleSheet } from '@react-pdf/renderer';

  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#F0DCF0",
      padding: 20,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: "center",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
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
          
          {/* Title Section */}
          <View style={styles.title}>
            <Text>{input ? input : "Sales Success"}</Text>
          </View>

          {/* Result Section */}
          <View style={styles.section}>
            <Text style={[styles.resultText, styles.spaceBetweenText]}>Take a look at the copy you generated.</Text>
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
