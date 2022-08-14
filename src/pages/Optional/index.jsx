import React, { useState } from "react";
import "./index.css";

//SOAL OPTIONAL
export default function OptionalChallenge() {
  const [angkaRahasia, setAngkaRahasia] = useState("");
  const [angkaTebakan, setAngkaTebakan] = useState("");

  const hasilTebakan = (e) => {
    e.preventDefault();
    const splitAngkaRahasia = angkaRahasia.split("");
    const splitAngkaTebakan = angkaTebakan.split("");
    if (splitAngkaRahasia.length !== 4) {
      alert("HARUS 4 ANGKA");
    }

    if (splitAngkaTebakan.length !== splitAngkaRahasia.length) {
      alert("JUMLAH ANGKA TIDAK SAMA");
    }

    for (let i = 0; i <= 3; i++) {
      if (splitAngkaRahasia[i] === splitAngkaTebakan[i]) {
        alert(`angka ${splitAngkaRahasia[i]} Adalah Alhamdulillah`);
      } else {
        alert(`angka ${splitAngkaTebakan[i]} Adalah Subhanallah`);
      }
    }
  };

  return (
    <div className="container mt-5">
      <form className="form-box">
        <input
          className="form-con"
          placeholder="Angka 4 Rahasia"
          value={angkaRahasia}
          onChange={(e) => setAngkaRahasia(e.target.value)}
        />
        <input
          className="form-con"
          placeholder="Angka 4 Tebakan"
          value={angkaTebakan}
          onChange={(e) => setAngkaTebakan(e.target.value)}
        />
        <button onClick={hasilTebakan}>RUN</button>
        <h1>{angkaRahasia}</h1>
        <h1>{angkaTebakan}</h1>
      </form>
    </div>
  );
}
