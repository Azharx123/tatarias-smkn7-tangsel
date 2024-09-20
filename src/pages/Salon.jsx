import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../css/HairStyling.css";
import { CgCalendarDates, CgCheckO } from "react-icons/cg";
import { BsFillPlayCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Swal from "sweetalert2";
// import Footer from "../section/Footer";
function Salon() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <Navbar />
      <div className="hairstyling-container">
        <div className="hairstyling-title">
          <div className="tag-badge">
            <p>Free Course</p>
          </div>
          <div className="title-section">
            <h1>Pewarnaan Rambut Teknik Color Melt</h1>

            <div className="created-container">
              <div className="created">
                <CgCalendarDates size={30} className="icons" color="#7c0a76" />
                <p style={{ color: "#7c0a76" }}> Release date March 2023</p>
              </div>
              <div className="created">
                <CgCheckO size={30} className="icons" color="#7c0a76" />
                <p style={{ color: "#7c0a76" }}>Last updated March 2023</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hairstyling-content">
          <div className="main-hairstyling">
            <div className="video-container">
              <iframe
                width="1000"
                height="515"
                src="https://www.youtube.com/embed/wGtrNvg2GWk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
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
                <span>About</span>
              </Tab>
              <Tab className="course-badge">
                <span>Courses</span>
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
                    Materi yang terdapat dalam video pembelajaran ini menyajikan
                    pengetahuan tentang pewarnaan rambut komersial teknik color
                    melt mulai dari KI/KD, pengertian, alat dan bahan, persiapan
                    beautician, sampai ke langkah kerja pada pewarnaan rambut
                    komersial teknik color melt. Dengan adanya video
                    pembelajaran pewarnaan rambut komersial teknik color melt
                    ini penulis berharap pembaca dapat menemukan wawasan baru,
                    memudahkan pembelajaran mandiri, serta meningkatkan
                    keterampilan diri yang sesuai dengan tingkat dan jenjang
                    pembaca. Sehingga pembaca dapat menyerap dan memproses
                    materi secara efektif serta memudahkan tercapainya
                    tujuan pembelajaran.
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
                      <span>Pemula yang ingin belajar Teknik Pewarnaan</span>
                    </div>
                  </div>
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
                        <h3>Pengenalan</h3>
                      </div>
                    </div>
                    <div className="list-video-courses-container">
                      <div className="list-video-courses">
                        <BsFillPlayCircleFill size={25} color="#490846" />
                        <span>
                          <a
                            href="https://youtu.be/wGtrNvg2GWk"
                            style={{ color: "purple", textDecoration: "none" }}
                          >
                            Teknik Coloring
                          </a>
                        </span>
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
                        <div className="rounded">
                          <span>1</span>
                        </div>
                        <div className="title">
                          <h3>Pengenalan</h3>
                        </div>
                      </div>
                      <div className="list-video-courses-container">
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Pengenalan Hairstyling</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Apaitu Hairstyling ?</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik Awal Hairstyling</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik Awal Hairstyling</span>
                        </div>
                      </div>
                    </div>
                    <div className="soal-containers">
                      <div className="title-video">
                        <div className="rounded">
                          <span>2</span>
                        </div>
                        <div className="title">
                          <h3>Pengenalan</h3>
                        </div>
                      </div>
                      <div className="list-video-courses-container">
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Pengenalan Hairstyling</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Apaitu Hairstyling ?</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik Awal Hairstyling</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik Awal Hairstyling</span>
                        </div>
                      </div>
                    </div>
                    <div className="soal-containers">
                      <div className="title-video">
                        <div className="rounded">
                          <span>3</span>
                        </div>
                        <div className="title">
                          <h3>Pengenalan</h3>
                        </div>
                      </div>
                      <div className="list-video-courses-container">
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Pengenalan Hairstyling</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Apaitu Hairstyling ?</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik Awal Hairstyling</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik Awal Hairstyling</span>
                        </div>
                      </div>
                    </div>
                    <div className="soal-containers">
                      <div className="title-video">
                        <div className="rounded">
                          <span>4</span>
                        </div>
                        <div className="title">
                          <h3>Pengenalan</h3>
                        </div>
                      </div>
                      <div className="list-video-courses-container">
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Pengenalan Hairstyling</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Apaitu Hairstyling ?</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik Awal Hairstyling</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik Awal Hairstyling</span>
                        </div>
                      </div>
                    </div>
                    <div className="soal-containers">
                      <div className="title-video">
                        <div className="rounded">
                          <span>5</span>
                        </div>
                        <div className="title">
                          <h3>Pengenalan</h3>
                        </div>
                      </div>
                      <div className="list-video-courses-container">
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Pengenalan Hairstyling</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Apaitu Hairstyling ?</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik Awal Hairstyling</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik Awal Hairstyling</span>
                        </div>
                      </div>
                    </div>
                    <div className="soal-containers">
                      <div className="title-video">
                        <div className="rounded">
                          <span>6</span>
                        </div>
                        <div className="title">
                          <h3>Pengenalan</h3>
                        </div>
                      </div>
                      <div className="list-video-courses-container">
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Pengenalan Hairstyling</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Apaitu Hairstyling ?</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik Awal Hairstyling</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik Awal Hairstyling</span>
                        </div>
                      </div>
                    </div>
                    <div className="soal-containers">
                      <div className="title-video">
                        <div className="rounded">
                          <span>7</span>
                        </div>
                        <div className="title">
                          <h3>Pengenalan</h3>
                        </div>
                      </div>
                      <div className="list-video-courses-container">
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Pengenalan Hairstyling</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Apaitu Hairstyling ?</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik Awal Hairstyling</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik Awal Hairstyling</span>
                        </div>
                      </div>
                    </div>
                    <div className="soal-containers">
                      <div className="title-video">
                        <div className="rounded">
                          <span>8</span>
                        </div>
                        <div className="title">
                          <h3>Pengenalan</h3>
                        </div>
                      </div>
                      <div className="list-video-courses-container">
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Pengenalan Hairstyling</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Apaitu Hairstyling ?</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik Awal Hairstyling</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik Awal Hairstyling</span>
                        </div>
                      </div>
                    </div>
                    <div className="soal-containers">
                      <div className="title-video">
                        <div className="rounded">
                          <span>9</span>
                        </div>
                        <div className="title">
                          <h3>Pengenalan</h3>
                        </div>
                      </div>
                      <div className="list-video-courses-container">
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Pengenalan Hairstyling</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Apaitu Hairstyling ?</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik Awal Hairstyling</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik Awal Hairstyling</span>
                        </div>
                      </div>
                    </div>
                    <div className="soal-containers">
                      <div className="title-video">
                        <div className="rounded">
                          <span>10</span>
                        </div>
                        <div className="title">
                          <h3>Pengenalan</h3>
                        </div>
                      </div>
                      <div className="list-video-courses-container">
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Pengenalan Hairstyling</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Apaitu Hairstyling ?</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik Awal Hairstyling</span>
                        </div>
                        <div className="list-video-courses">
                          <input type="checkbox" />
                          <span>Teknik Awal Hairstyling</span>
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
                  </div>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    {/* <Footer /> */}
    </div>
  );
}

export default Salon;
