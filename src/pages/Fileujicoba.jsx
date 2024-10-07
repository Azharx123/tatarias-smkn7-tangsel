import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  BsFillPauseFill,
  BsFillPlayCircleFill
} from "react-icons/bs";
import "react-quill/dist/quill.snow.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import YouTube from "react-youtube";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import HairstylingBackground from "../assets/images/Class Hairstyling.png";
import FotoRambut from "../assets/images/Foto Rambut.png";
import Component1 from "../assets/images/komponen1.jpg";
import Component2 from "../assets/images/komponen2.jpg";
import Component3 from "../assets/images/komponen3.jpg";
import Component4 from "../assets/images/komponen4.jpg";
import Step1 from "../assets/images/langkah1.jpg";
import Step2 from "../assets/images/langkah2.png";
import Step3 from "../assets/images/langkah3.jpg";
import Step4 from "../assets/images/langkah4.jpg";
import Step5 from "../assets/images/langkah5.png";
import Step6 from "../assets/images/langkah6.jpeg";
import HairPhoto from "../assets/images/Uniform Layer.png";

const HairStyling = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const timeUpdateIntervalRef = useRef(null);
  const [activeVideos, setActiveVideos] = useState({});

  const stopTimeUpdate = useCallback(() => {
    if (timeUpdateIntervalRef.current) {
      clearInterval(timeUpdateIntervalRef.current);
      timeUpdateIntervalRef.current = null;
    }
  }, []);

  const startTimeUpdate = useCallback(() => {
    stopTimeUpdate();
    timeUpdateIntervalRef.current = setInterval(() => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.getCurrentTime());
      }
    }, 1000);
  }, [stopTimeUpdate]);

  useEffect(() => {
    const onPlayerReady = (event) => {
      setDuration(event.target.getDuration());
      setIsVideoReady(true);
    };

    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.PLAYING) {
        setIsPlaying(true);
        startTimeUpdate();
      } else if (event.data === window.YT.PlayerState.PAUSED) {
        setIsPlaying(false);
        stopTimeUpdate();
      }
    };

    const initializeYouTubePlayer = () => {
      videoRef.current = new window.YT.Player("youtube-player", {
        height: "100%",
        width: "100%",
        videoId: "mHQFy8IZPLY",
        playerVars: {
          autoplay: 0,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          fs: 0,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = initializeYouTubePlayer;

    return () => {
      window.onYouTubeIframeAPIReady = null;
      stopTimeUpdate();
    };
  }, [startTimeUpdate, stopTimeUpdate]);

  const handlePlayPause = useCallback(() => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pauseVideo();
    } else {
      videoRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleProgressChange = useCallback((e) => {
    if (!videoRef.current) return;

    const newTime = e.target.value;
    videoRef.current.seekTo(newTime);
    setCurrentTime(newTime);
  }, []);

  const handleVolumeChange = useCallback((e) => {
    if (!videoRef.current) return;

    const newVolume = e.target.value;
    videoRef.current.setVolume(newVolume);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  }, []);

  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;

    if (isMuted) {
      videoRef.current.unMute();
      videoRef.current.setVolume(volume);
    } else {
      videoRef.current.mute();
    }
    setIsMuted(!isMuted);
  }, [isMuted, volume]);

  const formatTime = useCallback((time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }, []);

  const toggleVideo = (sectionIndex, videoIndex) => {
    setActiveVideos((prev) => ({
      ...prev,
      [`${sectionIndex}-${videoIndex}`]: !prev[`${sectionIndex}-${videoIndex}`],
    }));
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const VideoPlayer = ({ src }) => {
    const videoId = src.split("v=")[1]?.split("&")[0] || src.split("/").pop();
    return (
      <YouTube videoId={videoId} opts={{ width: "100%", height: "315" }} />
    );
  };


  const hairstyles = [
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
              image: Component1,
              subTitle: "Bentuk",
              description:
                "Pemangkasan Uniform Layer menunjukkan bentuk desain guntingan rambut yang membulat sesuai dengan bentuk kepala, dengan kepanjangan rambut yang sama panjang.",
            },
            {
              image: Component2,
              subTitle: "Tekstur",
              description:
                "Susunan permukaan rambut bertekstur aktif (seluruh cahaya yang jatuh diserap seluruhnya dan tidak ada cahaya yang dipantulkan kembali) Jatuhnya ujung-ujung rambut tersusun dengan teratur.",
            },
            {
              image: Component3,
              subTitle: "Struktur",
              description:
                "Struktur kerangka pemangkasan di setiap kepanjangan rambut jatuh di daerah yang sama, struktur kerangka pemangkasan uniform layer dengan kepanjangan rambut yang sama.",
            },
            {
              image: Component4,
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
          title: "Langkah Prosedur Pemangkasan",
          sections: [
            {
              image: Step1,
              subTitle: "Pertama",
              description: "Pahami garis pemangkasan uniform layer",
            },
            {
              image: Step2,
              subTitle: "Kedua",
              description:
                "Ambil rambut mulai dari bagian poni tengah seperti pola pemangkasan uniform layer, dengan sudut pemangkasan 90°",
            },
            {
              image: Step3,
              subTitle: "Ketiga",
              description:
                "Lanjutkan Pemangkasan pada daerah interior dengan mengambil guide line dari potongan sebelumnya. Pemangkasan dilakukan dengan sudut 90°",
            },
            {
              image: Step4,
              subTitle: "Keempat",
              description:
                "Lakukan hal yang sama pada bagian eksterior sesuai guide line, lakukan secara bertahap, hingga selesai pemangkasan",
            },
            {
              image: Step5,
              subTitle: "Kelima",
              description:
                "Lakukan crosss check, yakinkan seluruh bagian rambut sudah rata dan lurus juga simetris.",
            },
            {
              image: Step6,
              subTitle: "Keenam",
              description: "Hasil akhir pemangkasan",
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
            <div className="hero-media">
              <div className="video-container">
                <div className="video-wrapper">
                  <div className="video-inner">
                    <div id="youtube-player"></div>
                    {(!isPlaying || !isVideoReady) && (
                      <div className="video-cover">
                        <div className="cover-content">
                          <div className="cover-text">
                            <h2>Teknik Uniform Layer</h2>
                            <p>Tutorial Lengkap Pemangkasan Rambut</p>
                          </div>
                          <button
                            className="cover-play-btn"
                            onClick={handlePlayPause}
                            aria-label="Play video"
                          >
                            <Play size={40} />
                          </button>
                        </div>
                      </div>
                    )}
                    <div className="video-controls">
                      <button
                        className="play-pause-btn"
                        onClick={handlePlayPause}
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                      </button>
                      <div className="progress-container">
                        <input
                          type="range"
                          ref={progressRef}
                          className="progress-bar"
                          min="0"
                          max={duration}
                          value={currentTime}
                          onChange={handleProgressChange}
                        />
                        <span className="time-display">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>
                      <div className="volume-container">
                        <button
                          className="mute-btn"
                          onClick={toggleMute}
                          aria-label={isMuted ? "Unmute" : "Mute"}
                        >
                          {isMuted ? (
                            <VolumeX size={24} />
                          ) : (
                            <Volume2 size={24} />
                          )}
                        </button>
                        <input
                          type="range"
                          className="volume-slider"
                          min="0"
                          max="100"
                          value={isMuted ? 0 : volume}
                          onChange={handleVolumeChange}
                          aria-label="Volume"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  {style.title === "Video" ? (
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
