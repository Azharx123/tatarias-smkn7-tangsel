Program jsx:

import React, { useState, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  BsFillPlayCircleFill,
  BsFillPauseFill,
} from "react-icons/bs";
import "react-quill/dist/quill.snow.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "react-tabs/style/react-tabs.css";

import MaterialImage from "../assets/images/Hairstyling Material.png";


const HairStyling = () => {
  const [activeVideos, setActiveVideos] = useState({});
  const resultsRef = useRef(null);

 const VideoPlayer = ({ src }) => {
   const videoId = src.split("v=")[1]?.split("&")[0] || src.split("/").pop();
   return <YouTube videoId={videoId} opts={{ width: "100%", height: "315" }} />;
 };



  const hairstyles = [
    {
      title: "Deskripsi Kelas",
      image: MaterialImage,
      description: "Materi pembelajaran tentang teknik hairstyling.",
      chapters: [
        "Pengenalan Alat dan Bahan",
        "Dasar-dasar Pemangkasan Rambut",
        "Teknik Uniform Layer",
        "Finishing dan Styling",
      ],
    },
    {
      title: "Video",
      content: [
        {
          sectionTitle: "Pengenalan",
          videos: [
            {
              title: "Pengenalan Hairstyling",
              src: "https://youtu.be/c96leQ_fRII",
            },
            {
              title: "Hairstyling",
              src: "https://youtu.be/c96leQ_fRII",
            },
          ],
        },
        {
          sectionTitle: "Tingkat Lanjut",
          videos: [
            {
              title: "Hairstyling Belajar",
              src: "https://youtu.be/c96leQ_fRII",
            },
            {
              title: "Hairstyling Akhir",
              src: "https://youtu.be/c96leQ_fRII",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="hairstyling-page">
      <Navbar />
      <div className="hairstyling-container">
        <main>
          <section id="class-course">
            <h2>Class Course</h2>
            <Tabs className="hairstyle-tabs">
              <TabList>
                {hairstyles.map((style, index) => (
                  <Tab key={index}>{style.title}</Tab>
                ))}
              </TabList>
              {hairstyles.map((style, index) => (
                <TabPanel key={index}>
                  {style.title === "Deskripsi Kelas" ? (
                    <div className="hairstyle-content">
                      <img src={style.image} alt={style.title} />
                      <div className="hairstyle-info">
                        <h3>{style.title}</h3>
                        <p>{style.description}</p>
                        <h4>Chapters:</h4>
                        <ol>
                          {style.chapters.map((chapter, i) => (
                            <li key={i}>{chapter}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  ) : style.title === "Video" ? (
                    <div className="video-hairstyle">
                      <h2 className="video-main-title">Video Materi</h2>
                      {style.content.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="video-section">
                          <div className="section-header">
                            <div className="section-number">
                              {sectionIndex + 1}
                            </div>
                            <h3 className="section-title">
                              {section.sectionTitle}
                            </h3>
                          </div>
                          <div className="video-list">
                            {section.videos.map((video, videoIndex) => (
                              <div key={videoIndex} className="video-item">
                                <div
                                  className="video-title-wrapper"
                                  onClick={() =>
                                    toggleVideo(sectionIndex, videoIndex)
                                  }
                                >
                                  {activeVideos[
                                    `${sectionIndex}-${videoIndex}`
                                  ] ? (
                                    <BsFillPauseFill className="play-icon" />
                                  ) : (
                                    <BsFillPlayCircleFill className="play-icon" />
                                  )}
                                  <span className="video-title">
                                    {video.title}
                                  </span>
                                </div>
                                {activeVideos[
                                  `${sectionIndex}-${videoIndex}`
                                ] && (
                                  <div className="video-player">
                                    <VideoPlayer src={video.src} />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </TabPanel>
              ))}
            </Tabs>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HairStyling;

Program css:

:root {
  --primary-color: #fe3efb;
  --secondary-color: #350e38;
  --background-color: #f4f4f4;
  --text-color: #333;
  --font-primary: "Darker Grotesque", sans-serif;
  --font-secondary: "Poppins", sans-serif;
}

/* Global Styles */
body {
  font-family: var(--font-secondary);
  color: var(--text-color);
}

/* Loading indicator for asynchronous operations */
.loading {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: var(--primary-color);
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.react-tabs__tab-list {
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

.react-tabs__tab {
  flex: 1;
  padding: 1.5rem 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  background-color: transparent;
  list-style-type: none;
}

.react-tabs__tab:hover {
  background-color: var(--secondary-color);
  color: #fff;
}

.react-tabs__tab--selected {
  background-color: var(--primary-color);
  color: #fff;
}

.react-tabs__tab h3 {
  margin-top: 0.5rem;
  font-size: 1.2rem;
}

.react-tabs__tab svg {
  font-size: 2rem;
}

.react-tabs__tab-panel {
  background-color: #fff;
  padding: 2rem;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.react-tabs__tab-panel h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.react-tabs__tab-panel p {
  margin-bottom: 4rem;
  padding: 0 20px;
}

.react-tabs__tab-panel h4 {
  text-align: left;
  padding-inline-start: 20px;
  margin-top: 40px;
}

/* Class Course Section */
#class-course {
  padding: 4rem 2rem;
  background-color: #fff;
}

#class-course h2 {
  text-align: center;
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.hairstyle-tabs {
  max-width: 1000px;
  margin: 0 auto;
}

.hairstyle-tabs .react-tabs__tab-list {
  background-color: var(--background-color);
  border-radius: 10px 10px 0 0;
}

.hairstyle-content {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 20px;
}

.hairstyle-content img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.hairstyle-info {
  flex: 1;
}

.hairstyle-info h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  margin-top: 0;
  font-size: 2rem;
}

.hairstyle-info p {
  margin-bottom: 1rem;
  text-align: justify;
}

.hairstyle-info h4 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.hairstyle-info ul {
  list-style-type: circle;
  padding: 0 20px 0 40px;
}

.hairstyle-info li {
  margin-bottom: 0.5rem;
  text-align: left;
}

.video-main-title {
  font-size: 2rem !important;
  color: #fe3efb;
  text-align: center;
  margin-top: 0rem;
}

.video-section {
  margin-bottom: 2rem;
  margin-left: 2rem;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.section-number {
  width: 35px;
  height: 35px;
  background-color: #fe3efb;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 1rem;
}

.section-title {
  font-size: 1.5rem;
  color: #350e38;
  margin: 0 0 0 0 !important;
}

.video-list {
  margin-left: 3rem;
}

.video-item {
  margin-bottom: 1rem;
}

.video-title-wrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.video-title-wrapper:hover {
  background-color: #f0f0f0;
}

.play-icon {
  color: #fe3efb;
  font-size: 1.5rem;
  margin-right: 1rem;
}

.video-title {
  font-size: 1.2rem;
  color: #333;
}

.video-player {
  margin-top: 1rem;
  margin-left: 0.8rem;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .video-wrapper {
    max-width: 90%;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .react-tabs__tab-list {
    flex-direction: column;
  }

  .react-tabs__tab {
    border-bottom: 1px solid #eee;
  }

  .react-tabs__tab:last-child {
    border-bottom: none;
  }

  .hairstyle-content,
  .content-container {
    flex-direction: column;
  }

  .hairstyle-content img,
  .content-container img {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

  .video-main-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .video-list {
    margin-left: 1rem;
  }

  .video-title {
    font-size: 1rem;
  }

  .video-player {
    margin-left: 0;
  }
}

agar bagian class course deskripsi kelas dapat memuat kalimat kalimat berikut dengan style yang sesuai:

Deskripsi Kelas: Teknik Pemangkasan Rambut Uniform Layer
Ringkasan Kelas
Kelas ini menyajikan pengetahuan komprehensif tentang teknik pemangkasan rambut Uniform Layer, mulai dari konsep dasar hingga prosedur praktis. Peserta akan mempelajari definisi, tujuan, komponen, dan langkah-langkah detail dalam melakukan pemangkasan Uniform Layer.
Tujuan Pembelajaran
Setelah menyelesaikan kelas ini, peserta akan mampu:

Memahami konsep dan prinsip dasar teknik Uniform Layer
Mengidentifikasi tujuan dan manfaat pemangkasan Uniform Layer
Mengenali komponen-komponen penting dalam teknik Uniform Layer
Melaksanakan prosedur pemangkasan Uniform Layer dengan benar
Mempersiapkan area kerja, alat, dan bahan yang diperlukan
Menerapkan persiapan pribadi dan klien yang tepat
Melakukan kegiatan berkemas pasca-pemangkasan

Materi Kelas

Pengantar Teknik Uniform Layer

Definisi dan etimologi pemangkasan
Penjelasan khusus tentang Uniform Layer


Tujuan dan Manfaat Teknik Uniform Layer
Komponen Teknik Uniform Layer

Bentuk
Tekstur
Struktur
Sudut Pemangkasan


Prosedur Pemangkasan Uniform Layer

Langkah-langkah detail
Teknik pengambilan dan pemangkasan rambut
Cross check dan finishing


Persiapan Kerja

Persiapan area kerja
Alat dan bahan yang diperlukan
Fungsi masing-masing alat


Persiapan Pribadi dan Klien

Standar penampilan dan sikap profesional
Persiapan klien untuk kenyamanan dan keamanan


Kegiatan Berkemas Pasca-Pemangkasan

Metode Pembelajaran

Teori dan konsep
Demonstrasi teknik
Praktik langsung
Diskusi dan tanya jawab

Durasi
[Masukkan durasi kelas sesuai kebutuhan, misalnya: 8 jam atau 2 hari]
Target Peserta

Mahasiswa tata rias
Penata rambut pemula
Profesional yang ingin meningkatkan keterampilan

Evaluasi

Ujian tertulis untuk pemahaman teori
Praktik pemangkasan Uniform Layer
Penilaian persiapan dan kebersihan area kerja

Sertifikasi
Peserta yang berhasil menyelesaikan kelas dan lulus evaluasi akan menerima sertifikat kompetensi dalam Teknik Pemangkasan Rambut Uniform Layer.