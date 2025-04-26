import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2023 IPL Dashboard. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#282c34",
    color: "white",
    textAlign: "center" as const,
    padding: "1rem 0",
    // position: "fixed" as const,
    bottom: 0,
    width: "100%",
  },
  text: {
    margin: 0,
  },
};

export default Footer;
