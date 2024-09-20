import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { CgCalendarDates, CgCheckO } from "react-icons/cg";
import { BsFillPlayCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import { FaScissors, FaRuler, FaSprayCan } from "react-icons/fa6";
import { PiHairDryerFill } from "react-icons/pi";
import YouTube from "react-youtube";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "react-tabs/style/react-tabs.css";

import HairstylingBackground from "../assets/images/Class Hairstyling.png";
import MaterialImage from "../assets/images/Hairstyling Material.png";
import FotoRambut from "../assets/images/Foto Rambut.png";
import HairPhoto from "../assets/images/Uniform Layer.png";

const HairStyling = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Pengenalan",
      icon: <CgCalendarDates />,
      descriptions: [
        "Website kami menyediakan semua yang kamu butuhkan untuk belajar hairstyling secara mandiri. Mulai dari video tutorial berkualitas tinggi, panduan langkah demi langkah, hingga forum diskusi yang aktif. Semua dikemas dalam satu platform yang mudah diakses dan dinavigasi.",
      ],
      details: [
        {
          title: "Dibuat untuk",
          items: [
            "Orang yang ingin belajar Teknik Pangkas.",
            "Pemula yang ingin belajar Teknik Uniform Layer.",
            "Orang yang ingin belajar hal baru.",
          ],
        },
        {
          title: "Kompetensi Dasar",
          items: [
            "Menerapkan pemangkasan rambut Teknik uniform layer.",
            "Menganalisis berbagai jenis kulit dan bentuk wajah untuk menentukan teknik riasan yang sesuai.",
            "Memilih produk kosmetik yang tepat sesuai dengan jenis kulit, warna kulit, dan tujuan riasan.",
            "Merawat peralatan dan bahan riasan agar tetap bersih dan awet.",
          ],
        },
        {
          title: "Indikator Pencapaian Kompetensi",
          items: [
            "Menguraikan konsep dasar pemangkasan rambut Teknik uniform layer.",
            "Memilih alat pemangkasan rambut sesuai fungsi dan cara penggunaan alat.",
            "Menganalisis Teknik pemangkasan rambut Teknik uniform layer sesuai dengan konsep pemangkasan rambut.",
            "Merencanakan pemangkasan rambut Teknik uniform layer sesuai dengan prosedur.",
          ],
        },
      ],
    },
    {
      title: "Apa yang dibutuhkan",
      icon: <CgCheckO />,
      descriptions: [
        "Untuk mengikuti kursus ini dengan efektif, Anda akan memerlukan beberapa peralatan dan bahan penting. Berikut adalah daftar lengkap yang akan membantu Anda mempersiapkan diri untuk memulai perjalanan belajar hairstyling Anda.",
      ],
      details: [
        { icon: <FaScissors />, text: "Gunting profesional" },
        { icon: <FaRuler />, text: "Sisir dan sikat rambut" },
        {
          icon: <FaSprayCan />,
          text: "Produk styling (gel, mousse, hairspray)",
        },
        { icon: <PiHairDryerFill />, text: "Pengering rambut" },
        { icon: <BsFillCheckCircleFill />, text: "Cape potong rambut" },
        { icon: <BsFillCheckCircleFill />, text: "Botol semprot" },
        { icon: <BsFillCheckCircleFill />, text: "Handuk kecil" },
        {
          icon: <BsFillCheckCircleFill />,
          text: "Mannequin head untuk latihan",
        },
      ],
    },
    {
      title: "Video",
      icon: <BsFillPlayCircleFill />,
      descriptions: [
        "Kursus ini menyediakan 8 video tutorial komprehensif yang akan memandu Anda melalui setiap tahap pembelajaran hairstyling. Setiap video dirancang untuk memberikan instruksi yang jelas dan mudah diikuti, memastikan Anda dapat menguasai teknik-teknik penting dengan percaya diri.",
      ],
      videos: [
        {
          title: "Pengenalan Alat dan Bahan",
          src: "https://www.youtube.com/watch?v=c96leQ_fRII",
          type: "youtube",
        },
        {
          title: "Dasar-dasar Pemangkasan",
          src: "https://youtu.be/7RGiRqOVxeo",
          type: "youtube",
        },
      ],
    },
  ];

  const VideoPlayer = ({ src, type }) => {
    if (type === "youtube") {
      const videoId = src.split("v=")[1]?.split("&")[0] || src;

      return (
        <YouTube videoId={videoId} opts={{ width: "100%", height: "315" }} />
      );
    } else if (type === "local") {
      return (
        <video controls width="100%">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    return null;
  };

 const renderClassDescription = (classInfo) => (
   <div className="hairstyle-content">
     <img src={classInfo.image} alt={classInfo.title} />
     <div className="hairstyle-info">
       <h3>{classInfo.title}</h3>
       {Array.isArray(classInfo.description) ? (
         <ul>
           {classInfo.description.map((item, i) => (
             <li key={i}>{item}</li>
           ))}
         </ul>
       ) : (
         <p>{classInfo.description}</p>
       )}
     </div>
   </div>
 );

 // New function to render multiple content sections
 const renderMultiSectionContent = (title, sections) => (
   <div className="multi-section-content">
     <h3>{title}</h3>
     {sections.map((section, index) => (
       <div key={index} className="content-container">
         <img src={section.image} alt={section.subTitle} />
         <div className="content-info">
           <h4>{section.subTitle}</h4>
           <p>{section.description}</p>
         </div>
       </div>
     ))}
   </div>
 );
 
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
    title: "Materi",
    content: [
      {
        image: HairstylingBackground,
        title: "Konsep Modul",
        description:
          "Materi yang terdapat dalam E-Modul ini menyajikan pengetahuan tentang pemangkasan rambut Teknik uniform layer.",
      },
      {
        image: FotoRambut,
        title: "Apa itu Teknik Uniform Layer ?",
        description:
          "Secara “ethymologi”, kata pemangkasan terdiri dari kata “pangkas” yang artinya potong, sehingga pemangkasan merupakan tindakan memotong yang mana dalam dunia kecantikan tindakan pemangkasan rambut. Pengertian pemangkasan bisa diartikan sebagai tindakan untuk mengurangi panjang rambut semula dengan teknik-teknik tertentu, disesuaikan dengan bentuk wajah, jenis rambut, perawatan, pekerjaan dan kepribadian seseorang sehingga menghasilkan model pangkasan yang diinginkan oleh seseorang. Berdasarkan sudut pemangkatan, teknik pemangkasan dibagi dalam tiga teknik utama yaitu Pemangkasan teknik Solid, Pemangkasan teknik Graduasi, dan Pemangkasan teknik Layer. Pemangkasan bertrap penuh dikenal dengan istilah layer adalah pemangkasan yang dilakukan dengan sudut elevasi 90°-180°. Pemangkasan uniform layer adalah pemangkasan dengan sudut elevasi 90° merupakan bentuk pemangkasan mengikuti bentuk kepala, kepanjangan rambut yang sama.",
      },
      {
        image: HairPhoto,
        title: "Tujuan Teknik Uniform Layer",
        description: [
          "Memperindah bentuk kepala",
          "Mempermudah pengaturan rambut",
          "Memberi kesan wajah oval",
          "Mempertajam garis wajah",
          "Mencegah rambut jatuh ke depan wajah",
          "Mengikuti model yang sedang berlaku dan sebagainya",
        ],
      },
    ],
    multiSectionContent: [
      {
        title: "Komponen Teknik Uniform Layer",
        sections: [
          {
            image: MaterialImage,
            subTitle: "Bentuk",
            description:
              "Pemangkasan Uniform Layer menunjukkan bentuk desain guntingan rambut yang membulat sesuai dengan bentuk kepala, dengan kepanjangan rambut yang sama panjang.",
          },
          {
            image: HairPhoto,
            subTitle: "Tekstur",
            description:
              "Susunan permukaan rambut bertekstur aktif (seluruh cahaya yang jatuh diserap seluruhnya dan tidak ada cahaya yang dipantulkan kembali) Jatuhnya ujung-ujung rambut tersusun dengan teratur.",
          },
          {
            image: HairPhoto,
            subTitle: "Struktur",
            description:
              "Struktur kerangka pemangkasan di setiap kepanjangan rambut jatuh di daerah yang sama, struktur kerangka pemangkasan uniform layer dengan kepanjangan rambut yang sama.",
          },
          {
            image: HairPhoto,
            subTitle: "Sudut Pemangkasan",
            description: (
              <>
                {
                  "Uniform layer memiliki sudut sudut dan ketebalan rambut yang terbagi rata di seluruh kepala. Uniform layer memiliki sudut pemangkasan 90°. Setiap teknik pemangkasan memiliki pola garis yang berbeda. Adapun pola garis pemangkasan pada Uniform Layer yaitu:"
                }
                {
                  <ol>
                    <li>
                      <strong>Garis pola pangkas melengkung:</strong>{" "}
                      Pemangkasan dilakukan dengan menggunakan pola pangkas
                      hairline. Rambut sekeliling hairline dipangkas sesuai
                      desain dan panjang yang diinginkan. Setelah itu
                      dilanjutkan pemangkasan dari luar (Eksterior) ke arah
                      dalam (Interior) dengan patokan pola tersebut.
                    </li>
                    <li>
                      <strong>Garis pola pangkas datar:</strong> Pemangkasan
                      dengan patokan dari bagian dalam dengan panjang yang
                      diinginkan, kemudian pangkas ke arah luar.
                    </li>
                  </ol>
                }
              </>
            ),
          },
        ],
      },
      {
        title: "Teknik Pewarnaan Rambut Modern",
        sections: [
          {
            image: MaterialImage,
            subTitle: "Balayage",
            description:
              "Teknik pewarnaan yang memberikan efek gradasi warna alami dengan cara melukis warna secara bebas pada rambut.",
          },
          {
            image: MaterialImage,
            subTitle: "Ombre",
            description:
              "Teknik pewarnaan yang menciptakan gradasi warna dari gelap di akar rambut ke terang di ujung rambut.",
          },
          {
            image: MaterialImage,
            subTitle: "Perawatan Pasca Pewarnaan",
            description:
              "Tips dan trik untuk merawat rambut yang telah diwarnai agar tetap sehat dan warnanya tahan lama.",
          },
        ],
      },
    ],
  },
  {
    title: "Video",
    videos: [
      { title: "Persiapan Alat dan Bahan", id: "video1" },
      { title: "Teknik Dasar Pemangkasan", id: "video2" },
      { title: "Pemangkasan Uniform Layer", id: "video3" },
      { title: "Finishing dan Styling", id: "video4" },
    ],
  },
  {
    title: "Latihan",
    questions: {
      multipleChoice: [
        {
          question: "Apa yang dimaksud dengan teknik uniform layer?",
          options: [
            "Potongan rambut dengan panjang yang sama",
            "Potongan rambut berlapis",
            "Potongan rambut pendek",
            "Potongan rambut panjang",
          ],
          answer: 1,
        },
        // ... more multiple choice questions
      ],
      essay: [
        "Jelaskan langkah-langkah dalam melakukan pemangkasan teknik uniform layer!",
        "Apa perbedaan antara texturizing dan blunt cutting?",
        // ... more essay questions
      ],
    },
  },
];

  return (
    <div className="hairstyling-page">
      <Navbar />
      <div className="hairstyling-container">
        <main>
          <section className="hairstyling-hero">
            <div className="hero-content">
              <h1>Belajar Hairstyling Untuk Pemula</h1>
              <p>Pemangkasan Rambut Teknik Uniform Layer</p>
              <button
                onClick={() => scrollToSection("course-summary")}
                className="cta-button"
              >
                Gabung Kelas
              </button>
            </div>
            <div className="hero-video">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/mHQFy8IZPLY"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Hairstyling Tutorial"
                ></iframe>
              </div>
            </div>
          </section>

          <section className="services-section" id="course-summary">
            <h2>Course Summary</h2>
            <Tabs
              selectedIndex={activeTab}
              onSelect={(index) => setActiveTab(index)}
              className="services-tabs"
            >
              <TabList>
                {services.map((service, index) => (
                  <Tab key={index}>
                    {service.icon}
                    <h3>{service.title}</h3>
                  </Tab>
                ))}
              </TabList>

              {services.map((service, index) => (
                <TabPanel key={index}>
                  {service.descriptions &&
                    service.descriptions.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  {service.title === "Pengenalan" && (
                    <div className="service-details">
                      {service.details.map((detailSet, i) => (
                        <div key={i} className="competency-section">
                          <h4>{detailSet.title}</h4>
                          <ul className="service-details">
                            {detailSet.items.map((item, j) => (
                              <li key={j}>
                                <BsFillCheckCircleFill />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                  {service.title === "Apa yang dibutuhkan" && (
                    <ul className="service-details equipment-list">
                      {service.details.map((detail, i) => (
                        <li key={i}>
                          {detail.icon}
                          {detail.text}
                        </li>
                      ))}
                    </ul>
                  )}
                  {service.title === "Video" && (
                    <div className="video-list">
                      {service.videos.map((video, i) => (
                        <div key={i} className="video-item">
                          <h4>{video.title}</h4>
                          <VideoPlayer src={video.src} type={video.type} />
                        </div>
                      ))}
                    </div>
                  )}
                </TabPanel>
              ))}
            </Tabs>
          </section>

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
                  ) : style.title === "Materi" ? (
                    <>
                      {style.content.map((classInfo, i) => (
                        <React.Fragment key={i}>
                          {renderClassDescription(classInfo)}
                        </React.Fragment>
                      ))}
                      {style.multiSectionContent.map((sectionContent, i) => (
                        <React.Fragment key={i}>
                          {renderMultiSectionContent(
                            sectionContent.title,
                            sectionContent.sections
                          )}
                        </React.Fragment>
                      ))}
                    </>
                  ) : style.title === "Video" ? (
                    <div className="video-list">
                      <h3>{style.title}</h3>
                      {style.videos.map((video, i) => (
                        <div key={i} className="video-item">
                          <h4>{video.title}</h4>
                          <div className="video-player">
                            <div className="placeholder-player">
                              Video Player for {video.id}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : style.title === "Latihan" ? (
                    <div className="exercise-section">
                      <h3>{style.title}</h3>
                      <div className="multiple-choice">
                        <h4>Pilihan Ganda:</h4>
                        {style.questions.multipleChoice.map((q, i) => (
                          <div key={i} className="question">
                            <p>
                              {i + 1}. {q.question}
                            </p>
                            <ul>
                              {q.options.map((option, j) => (
                                <li key={j}>{option}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="essay">
                        <h4>Essay:</h4>
                        <ol>
                          {style.questions.essay.map((q, i) => (
                            <li key={i}>{q}</li>
                          ))}
                        </ol>
                      </div>
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
