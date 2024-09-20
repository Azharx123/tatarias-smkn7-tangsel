import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../css/Treatment.css";
import Imagez from "../assets/images/bgbg.jpeg";
import { CgCalendarDates, CgCheckO } from "react-icons/cg";
import { BsFillPlayCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Swal from "sweetalert2";
import Footer from "../components/Footer";
import Komponen1 from "../assets/images/materi/komponen/nomor1.jpg";
import Komponen2 from "../assets/images/materi/komponen/nomor2.jpg";
import Komponen3 from "../assets/images/materi/komponen/nomor3.jpg";
import Komponen4 from "../assets/images/materi/komponen/nomor4.jpg";
import Langkah1 from "../assets/images/materi/langkah/nomr1.jpg";
import Langkah2 from "../assets/images/materi/langkah/nomor2.png";
import Langkah3 from "../assets/images/materi/langkah/nomor3.jpg";
import Langkah4 from "../assets/images/materi/langkah/nomor4.jpg";
import Langkah5 from "../assets/images/materi/langkah/nomor5.png";
import Langkah6 from "../assets/images/materi/langkah/nomor6.jpeg";
import Gunting1 from "../assets/images/materi/gunting/nomor1.png";
import Gunting2 from "../assets/images/materi/gunting/nomor2.png";
import Gunting3 from "../assets/images/materi/gunting/nomor3.png";
import Gunting4 from "../assets/images/materi/gunting/nomor4.png";
import Gunting5 from "../assets/images/materi/gunting/nomor5.png";
import Alat1 from "../assets/images/materi/alat/nomor1.png";
import Alat2 from "../assets/images/materi/alat/nomor2.png";
import Alat3 from "../assets/images/materi/alat/nomor3.png";
import Alat4 from "../assets/images/materi/alat/nomor4.png";
import Alat5 from "../assets/images/materi/alat/nomor5.png";
import Alat6 from "../assets/images/materi/alat/nomor6.png";
import Alat7 from "../assets/images/materi/alat/nomor7.png";
import Alat8 from "../assets/images/materi/alat/nomor8.png";
import Alat9 from "../assets/images/materi/alat/nomor9.png";
import Alat10 from "../assets/images/materi/alat/nomor10.png";
import Alat11 from "../assets/images/materi/alat/nomor11.png";
import Alat12 from "../assets/images/materi/alat/nomor12.png";
import Klien from "../assets/images/materi/klien.png";

function HairStyling() {
  const [tabIndex, setTabIndex] = useState(0);
  const [isKumpul, setIskumpul] = useState(false);

  return (
    <div>
      <Navbar/>
      <div className="treatment-container">
        <div className="hairstyling-title">
          <div className="tag-badge">
            <p>Free Course</p>
          </div>
          <div className="title-section">
            <h1>Belajar Hairstyling Untuk Pemula</h1>
            <p>Pemangkasan Rambut Teknik Uniform Layer</p>
            <div className="created-container">
              <div className="created">
                <CgCalendarDates size={30} className="icons" color="#c41dd0" />
                <p style={{ color: "#c41dd0" }}> Release date March 2023</p>
              </div>
              <div className="created">
                <CgCheckO size={30} className="icons" color="#c41dd0" />
                <p style={{ color: "#c41dd0" }}>Last updated March 2023</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hairstyling-content">
          <div className="main-hairstyling">
            <div className="video-container">
              <img src={Imagez} alt="" style={{ width: "75%" }} />
            </div>
            <div className="card-list-video">
              <p>10 video (3 Jam)</p>

              <div className="list-video">
                <BsFillPlayCircleFill
                  size={30}
                  style={{ marginRight: 10 }}
                  color="#7c0a76"
                />
                <span>Pengenalan</span>
              </div>
              <div className="list-video">
                <BsFillPlayCircleFill
                  color="#7c0a76"
                  size={30}
                  style={{ marginRight: 10 }}
                />
                <span>Apa yang dibutuhkan</span>
              </div>
              <div className="list-video">
                <BsFillPlayCircleFill
                  color="#7c0a76"
                  size={30}
                  style={{ marginRight: 10 }}
                />
                <span>8 video lainnya</span>
              </div>

              <div className="button-gabung">
                <span>Gabung Kelas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hairstyling-details">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
            selectedTabClassName="selected-tab"
          >
            <TabList className="badge-container">
              <Tab className="course-badge">
                <span>Tentang</span>
              </Tab>
              <Tab className="course-badge">
                <span>Materi</span>
              </Tab>
              <Tab className="course-badge">
                <span>Video</span>
              </Tab>
              <Tab className="course-badge">
                <span>Latihan</span>
              </Tab>
            </TabList>
            <div className="details-course-container">
              <TabPanel>
                <div className="about-course">
                  <h2>Tentang Kelas</h2>
                  <p>
                    Materi yang terdapat dalam E-Modul ini menyajikan
                    pengetahuan tentang pemangkasan rambut Teknik uniform layer
                    mulai dari konsep, unsur desain, peralatan, sampai Langkah
                    kerja pada pemangkasan rambut Teknik uniform layer. Dengan
                    adanya E-Modul ini penulis berharap pembaca dapat menemukan
                    wawasan baru, memudahkan pembelajaran mandiri, serta
                    meningkatkan keterampilan diri yang sesuai dengan tingkat
                    dan jenjang pembaca. Sehingga pembaca dapat menyerap dan
                    memproses materi secara efektif serta memudahkan tercapainya
                    tujuan pembelajaran.
                  </p>
                </div>
                <div className="designed-for">
                  <h2>Dibuat Untuk</h2>
                  <div className="list-for-container">
                    <div className="lists">
                      <BsFillCheckCircleFill
                        color="purple"
                        size={20}
                        style={{ marginRight: 10 }}
                      />
                      <span>Orang yang ingin belajar Teknik Pangkas</span>
                    </div>
                    <div className="lists">
                      <BsFillCheckCircleFill
                        color="purple"
                        size={20}
                        style={{ marginRight: 10 }}
                      />
                      <span>
                        Pemula yang ingin belajar Teknik Uniform Layer
                      </span>
                    </div>
                    <div className="lists">
                      <BsFillCheckCircleFill
                        color="purple"
                        size={20}
                        style={{ marginRight: 10 }}
                      />
                      <span>Orang yang ingin belajar hal baru</span>
                    </div>
                  </div>
                </div>
                <div className="kompetensi-dasar">
                  <h2>Kompetensi Dasar</h2>
                  <h4>
                    3.4 Menerapkan pemangkasan rambut Teknik uniform layer
                  </h4>
                  <h4>
                    3.4 Menerapkan pemangkasan rambut Teknik uniform layer
                  </h4>
                </div>
                <div className="indikator-pencapaian">
                  <h2>Indikator Pencapaian Kompetensi</h2>
                  <h4>
                    1. Menguraikan konsep dasar pemangkasan rambut Teknik
                    uniform layer
                  </h4>
                  <h4>
                    2. Memilih alat pemangkasan rambut sesuai fungsi dan cara
                    penggunaan alat
                  </h4>
                  <h4>
                    3. Menganalisis Teknik pemangkasan rambut Teknik uniform
                    layer sesuai dengan konsep pemangkasan rambut
                  </h4>
                  <h4>
                    4. Merencanakan pemangkasan rambut Teknik uniform layer
                    sesuai dengan prosedur
                  </h4>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="materi-container">
                  <h2>Materi</h2>
                  <p>
                    Materi yang terdapat dalam E-Modul ini menyajikan
                    pengetahuan tentang pemangkasan rambut Teknik uniform layer
                    mulai dari konsep, unsur desain, peralatan, sampai Langkah
                    kerja pada pemangkasan rambut Teknik uniform layer.
                  </p>
                </div>
                <div className="materi-content">
                  <h2>Apaitu Teknik Uniform Layer ?</h2>
                  <p>
                    Secara “ethymologi”, kata pemangkasan terdiri dari kata
                    “pangkas” yang artinya potong, sehingga pemangkasan
                    merupakan tindakan memotong yang mana dalam dunia kecantikan
                    tindakan pemangkasan rambut. Pengertian pemangkasan bisa
                    diartikan sebagai tindakan untuk mengurangi panjang rambut
                    semula dengan teknik-teknik tertentu, disesuaikan dengan
                    bentuk wajah, jenis rambut, perawatan, pekerjaan dan
                    kepribadian seseorang sehingga menghasilkan model pangkasan
                    yang diinginkan oleh seseorang. Berdasarkan sudut
                    pemangkatan, teknik pemangkasan dibagi dalam tiga teknik
                    utama yaitu Pemangkasan teknik Solid, Pemangkasan teknik
                    Graduasi, dan Pemangkasan teknik Layer. Pemangkasan bertrap
                    penuh dikenal dengan istilah layer adalah pemangkasan yang
                    dilakukan dengan sudut elevasi 90°-180°. Pemangkasan uniform
                    layer adalah pemangkasan dengan sudut elevasi 90° merupakan
                    bentuk pemangkasan mengikuti bentuk kepala, kepanjangan
                    rambut yang sama.
                  </p>
                  <h2>Tujuan Teknik Uniform Layer</h2>
                  <p>1. Memperindah bentuk kepala</p>
                  <p>2. Mempermudah pengaturan rambut</p>
                  <p>3. Memberi kesan wajah oval</p>
                  <p>4. Mempertajam garis wajah</p>
                  <p>5. Mencegah rambut jatuh ke depan wajah</p>
                  <p>6. Mengikuti model yang sedang berlaku dan sebagainya</p>
                  <h2>Komponen Teknik Uniform Layer</h2>
                  <p>1. Bentuk</p>
                  <img src={Komponen1} alt="" width={200} />
                  <p style={{ marginTop: 30 }}>
                    Pemangkasan Uniform Layer menunjukkan bentuk desain
                    guntingan rambut yang membulat sesuai dengan bentuk kepala,
                    dengan kepanjangan rambut yang sama panjang.
                  </p>
                  <p style={{ marginTop: 30 }}>2. Tekstur</p>
                  <img src={Komponen2} alt="" width={300} />
                  <p style={{ marginTop: 30 }}>
                    Susunan permukaan rambut bertekstur aktif (seluruh cahaya
                    yang jatuh diserap seluruhnya dan tidak ada cahaya yang
                    dipantulkan kembali) Jatuhnya ujung-ujung rambut tersusun
                    dengan teratur.
                  </p>
                  <p style={{ marginTop: 30 }}>3. Struktur</p>
                  <img src={Komponen3} alt="" width={300} />
                  <p style={{ marginTop: 30 }}>
                    Struktur kerangka pemangkasan di setiap kepanjangan rambut
                    jatuh di daerah yang sama, struktur kerangka pemangkasan
                    uniform layer dengan kepanjangan rambut yang sama.
                  </p>
                  <p style={{ marginTop: 30 }}>4. Sudut Pemangkasan</p>
                  <img src={Komponen4} alt="" />
                  <p style={{ marginTop: 30 }}>
                    Uniform layer memiliki sudut sudut dan ketebalan rambut yang
                    terbagi rata di seluruh kepala.Uniform layer memiliki sudut
                    pemangkasan 90°. Setiap teknik pemangkasan memiliki pola
                    garis yang berbeda. Adapun pola garis pemangkasan pada
                    Uniform Layer yaitu : 1. Garis pola pangkas melengkung
                    Pemangkasan dilakukan dengan menggunakan pola pangkas
                    hairline. Rambut sekeliling hairline dipangkas sesuai desain
                    dan panjang yang diinginkan. Setelah itu dilanjutkan
                    pemangkasan dari luar (Eksterior) ke arah dalam (Interior)
                    dengan patokan pola tersebut. 2. Garis pola pangkas datar
                    Pemangkasan dengan patokan dari bagian dalam dengan panjang
                    yang diinginkan, kemudian pangkas ke arah luar.
                  </p>
                  <h2>Langkah Prosedur Pemangkasan </h2>
                  <img src={Langkah1} alt="" />
                  <p style={{ marginTop: 20, marginBottom: 20 }}>
                    1. Pahami garis pemangkasan uniform layer
                  </p>
                  <img src={Langkah2} alt="" />
                  <p style={{ marginTop: 30, marginBottom: 20 }}>
                    2. Ambil rambut mulai dari bagian poni tengah seperti pola
                    pemangkasan uniform layer, dengan sudut pemangkasan 90°{" "}
                  </p>
                  <img src={Langkah3} alt="" />
                  <p style={{ marginTop: 30, marginBottom: 20 }}>
                    3. Lanjutkan Pemangkasan pada daerah interior dengan
                    mengambil guide line dari potongan sebelumnya. Pemangkasan
                    dilakukan dengan sudut 90°
                  </p>
                  <img src={Langkah4} alt="" />
                  <p style={{ marginTop: 30, marginBottom: 20 }}>
                    4. Lakukan hal yang sama pada bagian eksterior sesuai guide
                    line, lakukan secara bertahap, hingga selesai pemangkasan
                  </p>
                  <img src={Langkah5} alt="" />
                  <p style={{ marginTop: 30, marginBottom: 20 }}>
                    5. Lakukan crosss check, yakinkan seluruh bagian rambut
                    sudah rata dan lurus juga simetris.
                  </p>
                  <img src={Langkah6} alt="" width={200} />
                  <p style={{ marginTop: 30, marginBottom: 20 }}>
                    6. Hasil akhir pemangkasan
                  </p>
                  <h2>Persiapan Kerja</h2>
                  <p style={{ fontSize: 20 }}> A. Persiapan Area Kerja</p>
                  <p>
                    Kondisi ruangan dalam keadaan nyaman , bersih dari kotoran
                    dan debu
                  </p>
                  <p style={{ fontSize: 20, marginTop: 20 }}>
                    B. Persiapan Alat dan Bahan
                  </p>
                  <p>
                    Berbagai alat pemangkasan rambut dapat digunakan, dengan
                    ketentuan memenuhi standar minimal kebutuhan, kelayakan dan
                    aman digunakan , contohnya
                  </p>
                  <h2>1. Gunting Pangkas Bilah Satu</h2>
                  <p style={{ fontSize: 20, marginTop: 20 }}>A. Bentuk 4 1/2</p>
                  <img src={Gunting1} alt="" width={250} />
                  <p style={{ marginTop: 20 }}>
                    Memangkas tambut secara umum, layer dan untuk sudut
                    pemangkasan
                  </p>
                  <p style={{ fontSize: 20, marginTop: 20 }}>B. Bentuk 5</p>
                  <img src={Gunting2} alt="" width={250} />
                  <p style={{ marginTop: 20 }}>
                    Memangkas tambut secara umum, layer dan untuk sudut
                    pemangkasan
                  </p>
                  <p style={{ fontSize: 20, marginTop: 20 }}>C. Bentuk 5 1/2</p>
                  <img src={Gunting3} alt="" width={250} />
                  <p style={{ marginTop: 20 }}>
                    Memangkas tambut secara umum, layer dan untuk sudut
                    pemangkasan
                  </p>
                  <h2>2. Gunting Penipis</h2>
                  <p>
                    Gunting penipis digunakan untuk meringankan volume rambut,
                    mengurangi ketebalan dan kepadatan rambut, mempunyai ukuran
                    gigi yang berbeda sesuai dengan desai pangkasan yang
                    diinginkan.
                  </p>
                  <p style={{ fontSize: 20, marginTop: 20 }}>
                    A. Bentuk Satu Bilah
                  </p>
                  <img src={Gunting4} alt="" width={250} />
                  <p style={{ marginTop: 20 }}>
                    Memangkas garis pemangkasan lengkung karena memiliki gigi
                    yang lebih Panjang.
                  </p>
                  <p style={{ fontSize: 20, marginTop: 20 }}>
                    B. Bentuk Dua Bilah
                  </p>
                  <img src={Gunting5} alt="" width={250} />
                  <p style={{ marginTop: 20 }}>
                    Memangkas garis pemangkasan lurus
                  </p>
                  <h2>3. Alat Penunjang Pemangkasan</h2>
                  <p style={{ fontSize: 20, marginTop: 20 }}>
                    1. Cape Penyampoan
                  </p>
                  <img src={Alat1} alt="" />
                  <p style={{ marginTop: 20 }}>
                    Melindungi baju klien dari percikan air saat pencucian
                    rambut
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>2. Cape Pangkas</p>
                  <img src={Alat2} alt="" />
                  <p style={{ marginTop: 20 }}>
                    Menghalangi rambut yang telah dipangkas sagar tidak menempel
                    pada baju atau kulit klien
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>3. Handuk Kecil</p>
                  <img src={Alat3} alt="" />
                  <p style={{ marginTop: 20 }}>
                    Mengeringkan rambut dan melindungi bagian tengkuk klien dari
                    pecikan kosmetik
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>4. Sisir Besar</p>
                  <img src={Alat4} alt="" />
                  <p style={{ marginTop: 20 }}>
                    Menyisir rambut secara umum setelah memncuci rambut
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>
                    5. Sisir Berekor
                  </p>
                  <img src={Alat5} alt="" />
                  <p style={{ marginTop: 20 }}>
                    Memudahkan pembagian (parting) rambut
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>
                    6. Sisir Pangkas
                  </p>
                  <img src={Alat6} alt="" />
                  <p style={{ marginTop: 20 }}>Alat bantu pemangkasan</p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>7. Sisir Leher</p>
                  <img src={Alat7} alt="" />
                  <p style={{ marginTop: 20 }}>
                    Membersihkan leher dan bahu dari sisa potongan rambut
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>8. Sisir Blow</p>
                  <img src={Alat8} alt="" />
                  <p style={{ marginTop: 20 }}>
                    Membentuk volume pada rambut selama proses penataan Teknik
                    blowdryer
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>
                    9. Jepit Bergerigi
                  </p>
                  <img src={Alat9} alt="" />
                  <p style={{ marginTop: 20 }}>
                    Untuk menjepit rambut yang telah di parting
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>10. Jepit Bebek</p>
                  <img src={Alat10} alt="" />
                  <p style={{ marginTop: 20 }}>
                    Untuk menejpit dan membagi section rambut yang akan
                    dipangkas
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>
                    11. Water Sprayer
                  </p>
                  <img src={Alat11} alt="" />
                  <p style={{ marginTop: 20 }}>
                    Membasahi rambut agar ujung rambut tetap dalam keadaan basah
                    saat pemangkasant
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>12. Hair Dryer</p>
                  <img src={Alat12} alt="" />
                  <p style={{ marginTop: 20 }}>
                    Mengeringkan rambut dengan suhuh yag dapat diatur sesuai
                    kebutuhan
                  </p>
                  <h2>Persiapan Pribadi</h2>
                  <p style={{ fontSize: 20, marginTop: 30 }}>
                    1. mengenakan riasan wajah sehingga wajah tambpak segar dan
                    cerah
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>
                    2. Rambut ditata rapi dan tidak mengganggu pekerjaan
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>
                    3. Memakai baju kerja tidak kusut, licin dan bersih/tidak
                    bernoda, tidak terlalu sempit
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>
                    4. Mengenakan sepatu dengan hak rendah dan terbuat dari
                    karet agar tidak licin
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>
                    5. Tidak mengenakan perhiasan yang menyolok kecuali jam
                    tangan
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>
                    6. Menjaga bau mulut dan bau badan sehingga kebersihan gigi
                    dan badan harus dijaga
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>
                    7. Jaga kebersihan kuku dan kulit
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>
                    8. Tampilkan ekspresi wajah yang ramah, dan sikap selalu
                    ingin membantu pelanggan
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>
                    9. Jaga suara bicara dan komunikasi dengan sopan
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>
                    10. Siap mental dan penuh percaya diri
                  </p>
                  <img
                    src={Klien}
                    alt=""
                    width={200}
                    style={{ marginTop: 80 }}
                  />
                  <h2>Persiapan Klien </h2>
                  <p>
                    Persiapan klien dilakukan untuk meingkatkan daya Tarik dan
                    kenyamanan selama pelayanan pemangkasan. Berikan alas bahu
                    dan pasangkan cape pemangkasan yang bersih dan menutup baju
                    klien dengan sempurna, sehingga baju klien tidak kotor oleh
                    serpihan potongan rambut. Berkemas
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30, color: "#c41dd0 " }}>
                    Berkemas
                  </p>
                  <p>
                    Setelah menyelasikan Tindakan pemangkasan, kegiatan berkemas
                    dilakukan untuk merapihkan Kembali area kerja sehingga
                    bersih, kegiatan yang dilakukan dalam berkemas seperti :
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>
                    1. Membersihkan alat-alat yang sudah dipakai, simpan kembali
                    pada tempatnya
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>
                    2. Menyimpan kosmetik pada tempatnya.
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>
                    3. Membersihkan ruangan, membuang sampah pada tempatnya
                  </p>
                  <p style={{ fontSize: 20, marginTop: 30 }}>
                    4. Mematikan semua aliran listrik (apabila sudah tidak
                    digunakan)
                  </p>{" "}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="course-content">
                  <h2>Video Materi</h2>
                  <div className="list-video-container">
                    <div className="title-video">
                      <div className="rounded">
                        <span>1</span>
                      </div>
                      <div className="title">
                        <a href="https://www.youtube.com/watch?v=w0RDnWdGn1g&t=1s&ab_channel=LattcCosmo2020">
                          Pengenalan
                        </a>
                      </div>
                    </div>
                    <div className="list-video-courses-container">
                      <div className="list-video-courses">
                        <BsFillPlayCircleFill size={25} color="#490846" />
                        <span>Pengenalan Hairstyling</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="latihan-content">
                  <h2>Soal Latihan</h2>
                  <div className="soal-latihan-container">
                    <div className="soal-containers">
                      <div className="title-video">
                        <div className="roundedd">
                          <span>1</span>
                        </div>
                        <div className="title">
                          <h3 className="soalnya">
                            Tindakan mengurangi Panjang rambut semula dengan
                            Teknik tertentu, sesuai dengan bentuk wajah, jenis
                            rambut, perawakan, pekerjaan dan kepribadian
                            seseorang adalah definisi dari….
                          </h3>
                        </div>
                      </div>
                      <div className="list-video-courses-container">
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Pemangkasan</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Pewarnaan</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Pengeritingan</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Pelurusan</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Styling</span>
                        </div>
                      </div>
                    </div>
                    <div className="soal-containers">
                      <div className="title-video">
                        <div className="roundedd">
                          <span>2</span>
                        </div>
                        <div className="title">
                          <h3 className="soalnya">
                            Tujuan pemangkasan rambut adalah sebagai berikut,
                            kecuali….
                          </h3>
                        </div>
                      </div>
                      <div className="list-video-courses-container">
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Mengurangi Panjang Rambut</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Mengikuti Trend</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Mengubah Bentuk Kepala</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Merapikan Rambut</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Mengubah Penampilan</span>
                        </div>
                      </div>
                    </div>
                    <div className="soal-containers">
                      <div className="title-video">
                        <div className="roundedd">
                          <span>3</span>
                        </div>
                        <div className="title">
                          <h3 className="soalnya">
                            Karyawan salon yang biasa menangani pemangkasan
                            disebut…..
                          </h3>
                        </div>
                      </div>
                      <div className="list-video-courses-container">
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Pelayan</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Capster</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Beauticient</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Suster</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Blester</span>
                        </div>
                      </div>
                    </div>
                    <div className="soal-containers">
                      <div className="title-video">
                        <div className="roundedd">
                          <span>4</span>
                        </div>
                        <div className="title">
                          <h3 className="soalnya">
                            Susunan permukaan rambut yang dapat diraba, dilihat
                            dan dirasakan adalah….
                          </h3>
                        </div>
                      </div>
                      <div className="list-video-courses-container">
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Struktur Rambut </span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Tekstur Rambut </span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Pola Pemangkasan</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Arah Pemangkasan</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Arah Pertumbuhan Rambut</span>
                        </div>
                      </div>
                    </div>
                    <div className="soal-containers">
                      <div className="title-video">
                        <div className="roundedd">
                          <span>5</span>
                        </div>
                        <div className="title">
                          <h3 className="soalnya">
                            Penipisan pada rambut yang tebal dapat dilakukan
                            dengan menggunakan alat….
                          </h3>
                        </div>
                      </div>
                      <div className="list-video-courses-container">
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Gunting</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Gunting Penipisan </span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Gunting Bilah Satur</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Mata Pisau</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Cutter</span>
                        </div>
                      </div>
                    </div>
                    <div className="soal-containers">
                      <div className="title-video">
                        <div className="roundedd">
                          <span>6</span>
                        </div>
                        <div className="title">
                          <h3 className="soalnya">
                            Pengeringan rambut yang dilakukan dengan cara
                            menggunakan sisir blow juga dikenal dengan Teknik….
                          </h3>
                        </div>
                      </div>
                      <div className="list-video-courses-container">
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik blow dry</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik block dry</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik parting dry</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik natural dry</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik finger dry</span>
                        </div>
                      </div>
                    </div>
                    <div className="soal-containers">
                      <div className="title-video">
                        <div className="roundedd">
                          <span>7</span>
                        </div>
                        <div className="title">
                          <h3 className="soalnya">
                            Jepit gerigi atau jepit bebek dalam proses
                            pemangkasan digunakan untuk…..
                          </h3>
                        </div>
                      </div>
                      <div className="list-video-courses-container">
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Menjepit rambut yang diparting</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Menjepit cape klien</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Meringkas rambut</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Membuat rambut menjadi berombak</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Menjepit rambut operator</span>
                        </div>
                      </div>
                    </div>
                    <div className="soal-containers">
                      <div className="title-video">
                        <div className="roundedd">
                          <span>8</span>
                        </div>
                        <div className="title">
                          <h3 className="soalnya">
                            Pemangkasan yang dilakukan dengan cara mengurangi
                            sebagai Panjang rambut dengan sudut pengangkatan 90°
                            dinamakan dengan Teknik Pemangkasan ….
                          </h3>
                        </div>
                      </div>
                      <div className="list-video-courses-container">
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Solid</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Graduation</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Uniform Layer</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Increase Layer</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Convace</span>
                        </div>
                      </div>
                    </div>
                    <div className="soal-containers">
                      <div className="title-video">
                        <div className="roundedd">
                          <span>9</span>
                        </div>
                        <div className="title">
                          <h3 className="soalnya">
                            Saat melakukan pemangkasan rambut, rambut harus
                            dalam keadaan basah agar mempermudah dalam
                            pemangkasan. Alat yang digunakan adalah….
                          </h3>
                        </div>
                      </div>
                      <div className="list-video-courses-container">
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Gunting Pangkas</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Sprayer</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Cape Pangkas</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Shower</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Hairdryer</span>
                        </div>
                      </div>
                    </div>
                    <div className="soal-containers">
                      <div className="title-video">
                        <div className="roundedd">
                          <span>10</span>
                        </div>
                        <div className="title">
                          <h3 className="soalnya">
                            Berikut ini hal yang penting dilakukan saat selesai
                            melakukan pemangkasan rambut, kecuali…
                          </h3>
                        </div>
                      </div>
                      <div className="list-video-courses-container">
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Penataaan Rambut</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Melakukan Pembersihan area leher dan bahu</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Memberikan saran pasca pemangkasan</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Melakukan Pengecekan</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Menentukan guide line</span>
                        </div>
                      </div>
                    </div>
                    <div className="button-container">
                      <button
                        className="button"
                        onClick={() =>
                          Swal.fire({
                            title: "Apakah kamu yakin dengan jawaban mu?",
                            showDenyButton: true,
                            showCancelButton: true,
                            confirmButtonText: "Ya",
                            denyButtonText: `Tidak`,
                          }).then((result) => {
                            /* Read more about isConfirmed, isDenied below */
                            if (result.isConfirmed) {
                              Swal.fire("Dikumpulkan !", "", "success");
                              setIskumpul(true);
                            } else if (result.isDenied) {
                              Swal.fire(
                                "Jawaban gagal dikumpulkan",
                                "",
                                "info"
                              );
                            }
                          })
                        }
                      >
                        Submit
                      </button>
                    </div>
                    {isKumpul ? (
                      <div className="jawaban-container">
                        <h3>Kunci Jawaban </h3>
                        <p>1. Pemangkasan</p>
                        <p>2. Mengubah bentuk kepala</p>
                        <p>3. Capster</p>
                        <p> 4. Tekstur Rambut</p>
                        <p> 5. Gunting Penipisan</p>
                        <p> 6. Teknik Blow Dry</p>
                        <p>7. Menjepit rambut yang departing</p>
                        <p>8. Uniform layer</p>
                        <p> 9. Sprayer</p>
                        <p>10. Menentukan guidline</p>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HairStyling;
