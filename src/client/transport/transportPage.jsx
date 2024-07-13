import React from "react";
import styles from "./transportPage.module.css" 
import FormTransport from "./formSelection/formTransport";
export function TransportPage(){
    return (
        <div className={styles.bd}>
        <FormTransport/>
        </div>
    )
}