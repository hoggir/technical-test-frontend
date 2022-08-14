import React, { useState } from "react";

//IMPLEMENTASI METODE DRY SOAL-NOMOR-2
export default function Worker() {
  const [hoursWorked, setHoursWorked] = useState("");
  const [rate, setRate] = useState("");
  const [tax, setTax] = useState("");
  const [totalBasicSalary, setTotalBasicSalary] = useState("");
  const [totalSalary, setTotalSalary] = useState("");

  const salary = () => {
    const hitung = hoursWorked * rate;
    setTotalBasicSalary(hitung);
    setTotalSalary(totalBasicSalary + tax);
    console.log(
      `Basic Salary = ${totalBasicSalary} & Total Salary = ${totalSalary}`
    );
  };
  salary();
  return <div></div>;
}


//REFACTOR ERROR HANDLING SOAL-NOMOR-3
const sebuahFungsi = () => {
  try {
    Run1();
    Run2();
    Run3();
    Run4();
  } catch (err) {
    console.log(err);
  }
};
