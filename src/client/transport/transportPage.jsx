import React, { useEffect } from "react";
import styles from "./transportPage.module.css";
import FormTransport from "./formSelection/formTransport";
export function TransportPage() {
  useEffect(() => {
    window.scrollTo(0, 0); // to scroll to the top of the page when the component mounts up.  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.bd}>
      <FormTransport />
    </div>
  );
}
