import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { QRCodeCanvas } from "qrcode.react";
import "./index.css";

export default function Home() {
  const API = "http://localhost:3006/api/v1/product";
  const TIKETAPI = "http://localhost:3006/api/v1/tiketBanten";
  const TIKETBEKASIAPI = "http://localhost:3006/api/v1/tiketBekasi";
  const TIKETBOGORAPI = "http://localhost:3006/api/v1/tiketBogor";
  const TIKETJAKBARAPI = "http://localhost:3006/api/v1/tiketJakbar";
  const TIKETJAKPUSAPI = "http://localhost:3006/api/v1/tiketJakpus";
  const TIKETJAKSELAPI = "http://localhost:3006/api/v1/tiketJaksel";
  const TIKETJAKUTAPI = "http://localhost:3006/api/v1/tiketJakut";
  const TIKETJAKTIMAPI = "http://localhost:3006/api/v1/tiketJaktim";
  const TIKETTANGERANGAPI = "http://localhost:3006/api/v1/tiketTangerang";
  const [listBarang, setListBarang] = useState("");
  const [listTiket, setListTiket] = useState("");
  const [listTiketBekasi, setListTiketBekasi] = useState("");
  const [listTiketBogor, setListTiketBogor] = useState("");
  const [listTiketJakbar, setListTiketJakbar] = useState("");
  const [listTiketJakpus, setListTiketJakpus] = useState("");
  const [listTiketJaksel, setListTiketJaksel] = useState("");
  const [listTiketJakut, setListTiketJakut] = useState("");
  const [listTiketJaktim, setListTiketJaktim] = useState("");
  const [listTiketTangerang, setListTiketTangerang] = useState("");
  const [uniqID, setUniqID] = useState("");
  const [showqr, setShowqr] = useState(false);

  useEffect(() => {
    getBarang(API);
    getTiket(TIKETAPI);
    getTiketBekasi(TIKETBEKASIAPI);
    getTiketBogor(TIKETBOGORAPI);
    getTiketJakbar(TIKETJAKBARAPI);
    getTiketJakpus(TIKETJAKPUSAPI);
    getTiketJaksel(TIKETJAKSELAPI);
    getTiketJakut(TIKETJAKUTAPI);
    getTiketJaktim(TIKETJAKTIMAPI);
    getTiketTangerang(TIKETTANGERANGAPI);
  }, []);

  const getTiket = async (TIKETAPI) => {
    await axios.get(TIKETAPI).then((res) => {
      const tiket = res.data.response;
      setListTiket(tiket);
    });
  };

  const getTiketBekasi = async (TIKETBEKASIAPI) => {
    await axios.get(TIKETBEKASIAPI).then((res) => {
      const tiket = res.data.response;
      setListTiketBekasi(tiket);
    });
  };

  const getTiketBogor = async (TIKETBOGORAPI) => {
    await axios.get(TIKETBOGORAPI).then((res) => {
      const tiket = res.data.response;
      setListTiketBogor(tiket);
    });
  };

  const getTiketJakbar = async (TIKETJAKBARAPI) => {
    await axios.get(TIKETJAKBARAPI).then((res) => {
      const tiket = res.data.response;
      setListTiketJakbar(tiket);
    });
  };

  const getTiketJakpus = async (TIKETJAKPUSAPI) => {
    await axios.get(TIKETJAKPUSAPI).then((res) => {
      const tiket = res.data.response;
      setListTiketJakpus(tiket);
    });
  };

  const getTiketJaksel = async (TIKETJAKSELAPI) => {
    await axios.get(TIKETJAKSELAPI).then((res) => {
      const tiket = res.data.response;
      setListTiketJaksel(tiket);
    });
  };

  const getTiketJakut = async (TIKETJAKUTAPI) => {
    await axios.get(TIKETJAKUTAPI).then((res) => {
      const tiket = res.data.response;
      setListTiketJakut(tiket);
    });
  };

  const getTiketJaktim = async (TIKETJAKTIMAPI) => {
    await axios.get(TIKETJAKTIMAPI).then((res) => {
      const tiket = res.data.response;
      setListTiketJaktim(tiket);
    });
  };

  const getTiketTangerang = async (TIKETTANGERANGAPI) => {
    await axios.get(TIKETTANGERANGAPI).then((res) => {
      const tiket = res.data.response;
      setListTiketTangerang(tiket);
    });
  };

  const getBarang = async (API) => {
    await axios.get(API).then((res) => {
      const barang = res.data.response;
      setListBarang(barang);
    });
  };

  function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("id-ID", {
      month: "long",
    });
  }

  const qrshow = () => {
    setShowqr(!showqr);
  };

  const QRCODE = (barangItem) => (e) => {
    e.preventDefault();
    const bulanBeli = toMonthName(barangItem.bulan_pembelian);
    const alertText = `${barangItem.nama_jenis_barang} area ${barangItem.kota_branch} pembelian bulan ${bulanBeli} tahun 20${barangItem.tahun_pembelian} ke ${barangItem.query}`;
    setUniqID(alertText);
    qrshow();
  };

  return (
    <div className="container pt-5 pl-2 pr-2">
      
      {/* SOAL-NOMOR-1 */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Jenis Barang</th>
            <th>Kota Branch</th>
            <th>Tanggal Pembelian</th>
            <th>Action</th>
            <th>OKE</th>
          </tr>
        </thead>
        <tbody>
          {listBarang ? (
            listBarang.length > 0 &&
            listBarang.map((barangItem) => {
              return (
                <tr key={barangItem.id_aset_barang}>
                  <td>1</td>
                  <td>{barangItem.nama_jenis_barang}</td>
                  <td>{barangItem.kota_branch}</td>
                  <td>
                    {barangItem.bulan_pembelian +
                      "" +
                      barangItem.tahun_pembelian}
                  </td>
                  <td>
                    {barangItem.sub_jenis_barang +
                      "" +
                      barangItem.sub_kota_branch +
                      "" +
                      barangItem.bulan_pembelian +
                      "" +
                      barangItem.tahun_pembelian +
                      "" +
                      barangItem.query}
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={QRCODE(barangItem)}
                    >
                      CETAK
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </Table>
      <div className={showqr ? "qrcode-con" : "hidden"}>
        <h1>QR CODE</h1>
        <QRCodeCanvas id="qrbarang" value={uniqID} />
      </div>

      {/* SOAL-NOMOR-5 */}
      <div className="tiket-con">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Witel Name</th>
              {listTiket ? (
                listTiket.length > 0 &&
                listTiket.map((tiketItem) => {
                  return (
                    <th className="text-center" key={tiketItem.id}>
                      <p>{tiketItem.tanggal}</p>
                      <p>Open</p>
                    </th>
                  );
                })
              ) : (
                <th></th>
              )}
            </tr>
            <tr>
              <th>Banten</th>
              {listTiket ? (
                listTiket.length > 0 &&
                listTiket.map((tiketItem) => {
                  return (
                    <th key={tiketItem.id} className="tableok text-center">
                      {tiketItem.open}
                    </th>
                  );
                })
              ) : (
                <th></th>
              )}
            </tr>
            <tr>
              <th>Bekasi</th>
              {listTiketBekasi ? (
                listTiketBekasi.length > 0 &&
                listTiketBekasi.map((tiketItem) => {
                  return (
                    <th key={tiketItem.id} className="tableok text-center">
                      {tiketItem.open}
                    </th>
                  );
                })
              ) : (
                <th></th>
              )}
            </tr>
            <tr>
              <th>Bogor</th>
              {listTiketBogor ? (
                listTiketBogor.length > 0 &&
                listTiketBogor.map((tiketItem) => {
                  return (
                    <th key={tiketItem.id} className="tableok text-center">
                      {tiketItem.open}
                    </th>
                  );
                })
              ) : (
                <th></th>
              )}
            </tr>
            <tr>
              <th>Jakbar</th>
              {listTiketJakbar ? (
                listTiketJakbar.length > 0 &&
                listTiketJakbar.map((tiketItem) => {
                  return (
                    <th key={tiketItem.id} className="tableok text-center">
                      {tiketItem.open}
                    </th>
                  );
                })
              ) : (
                <th></th>
              )}
            </tr>
            <tr>
              <th>Jakpus</th>
              {listTiketJakpus ? (
                listTiketJakpus.length > 0 &&
                listTiketJakpus.map((tiketItem) => {
                  return (
                    <th key={tiketItem.id} className="tableok text-center">
                      {tiketItem.open}
                    </th>
                  );
                })
              ) : (
                <th></th>
              )}
            </tr>
            <tr>
              <th>Jaksel</th>
              {listTiketJaksel ? (
                listTiketJaksel.length > 0 &&
                listTiketJaksel.map((tiketItem) => {
                  return (
                    <th key={tiketItem.id} className="tableok text-center">
                      {tiketItem.open}
                    </th>
                  );
                })
              ) : (
                <th></th>
              )}
            </tr>
            <tr>
              <th>Jaktim</th>
              {listTiketJaktim ? (
                listTiketJaktim.length > 0 &&
                listTiketJaktim.map((tiketItem) => {
                  return (
                    <th key={tiketItem.id} className="tableok text-center">
                      {tiketItem.open}
                    </th>
                  );
                })
              ) : (
                <th></th>
              )}
            </tr>
            <tr>
              <th>Jakut</th>
              {listTiketJakut ? (
                listTiketJakut.length > 0 &&
                listTiketJakut.map((tiketItem) => {
                  return (
                    <th key={tiketItem.id} className="tableok text-center">
                      {tiketItem.open}
                    </th>
                  );
                })
              ) : (
                <th></th>
              )}
            </tr>
            <tr>
              <th>Tangerang</th>
              {listTiketTangerang ? (
                listTiketTangerang.length > 0 &&
                listTiketTangerang.map((tiketItem) => {
                  return (
                    <th key={tiketItem.id} className="tableok text-center">
                      {tiketItem.open}
                    </th>
                  );
                })
              ) : (
                <th></th>
              )}
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
