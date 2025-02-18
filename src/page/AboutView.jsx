import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

const AboutView = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="about-container min-h-screen bg-gradient-to-b from-base-200 to-base-300 p-8 rounded-xl">
      <div className="max-w-4xl mx-auto">
        <h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center hover:text-primary transition-colors duration-500"
          data-aos="fade-down"
        >
          Tentang Kami
        </h1>

        <div 
          className="bg-base-100 rounded-lg shadow-xl p-6 mb-8 hover:shadow-2xl transition-shadow duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-lg mb-4 leading-relaxed">
            Selamat datang di toko online kami! Kami berdedikasi untuk
            memberikan produk terbaik dan layanan pelanggan yang luar biasa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div 
            className="bg-base-100 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Misi Kami
            </h2>
            <p className="text-lg leading-relaxed">
              Misi kami adalah menyediakan produk berkualitas tinggi dengan
              harga terjangkau, serta memberikan pengalaman belanja yang
              menyenangkan dan mudah.
            </p>
          </div>

          <div 
            className="bg-base-100 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Visi Kami
            </h2>
            <p className="text-lg leading-relaxed">
              Visi kami adalah menjadi toko online terkemuka yang dikenal karena
              keunggulan produk dan layanan pelanggan.
            </p>
          </div>
        </div>

        <div 
          className="mt-8 bg-base-100 rounded-lg shadow-lg p-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h2 className="text-4xl text-center font-semibold mb-4 text-primary">Tim Kami</h2>
          <p className="text-lg text-center leading-relaxed mb-6">
            Kami memiliki tim yang terdiri dari profesional berpengalaman yang <br />
            berdedikasi untuk memberikan layanan terbaik kepada pelanggan kami.
            <span className="hidden sm:block md:hidden lg:block">
              Kami percaya bahwa dengan bekerja sama, kami dapat memberikan
              pengalaman <br /> belanja yang lebih baik dan meningkatkan kepuasan
              pelanggan.
            </span>
          </p>

            </div>
          </div>
          <div className="grid mt-5 md:grid-cols-2 gap-6">
            <div 
              className="bg-base-100 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                  <img
                    src="/revan-profile.jpg"
                    alt="Revan"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">Eka Revandi</h3>
                <p className="text-lg font-semibold text-gray-600">Frontend Developer</p>
                <p className="text-center mt-2">
                  Spesialis dalam <span className="font-bold text-primary">UI/UX</span> serta pengembangan <span className='font-bold text-primary'>interface</span> pengguna yang menarik, interaktif dan responsif.
                </p>
              </div>
            </div>

            <div 
              className="bg-base-100 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
              data-aos="fade-left"
              data-aos-delay="1000"
            >
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                  <img
                    src="/isak-profile.jpg"
                    alt="Predi"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">Freedy Fajar</h3>
                <p className="text-lg font-semibold text-gray-600">Backend Developer</p>
                <p className="text-center mt-2">
                  Ahli dalam pengembangan sistem <span className='font-bold text-primary'>Backend</span> dan manajemen <span className="font-bold text-primary">Database</span>.
                </p>
              </div>
        </div>

        <div 
          className="mt-8 bg-base-100 rounded-lg shadow-lg p-6"
          data-aos="fade-up"
          data-aos-delay="1100"
        >
          <h2 className="text-4xl text-center font-semibold mb-8 text-primary">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div 
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="1200"
            >
              <SiMongodb className="w-20 h-20 hover:scale-110 hover:text-green-500 transition-all duration-300" />
              <p className="mt-2 font-semibold text-primary">MongoDB</p>
            </div>
            <div 
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="1300"
            >
              <SiExpress className="w-20 h-20 hover:scale-110 hover:text-gray-600 transition-all duration-300" />
              <p className="mt-2 font-semibold text-primary">Express.js</p>
            </div>
            <div 
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="1400"
            >
              <SiReact className="w-20 h-20 hover:scale-110 hover:text-blue-400 transition-all duration-300" />
              <p className="mt-2 font-semibold text-primary">React</p>
            </div>
            <div 
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="1500"
            >
              <SiNodedotjs className="w-20 h-20 hover:scale-110 hover:text-green-600 transition-all duration-300" />
              <p className="mt-2 font-semibold text-primary">Node.js</p>
            </div>
          </div>
          <p className="text-center mt-8 text-lg">
            Website ini dibangun menggunakan stack teknologi MERN (MongoDB, Express.js, React, dan Node.js) 
            untuk memberikan pengalaman pengguna yang optimal dan performa yang handal.
          </p>
        </div>

        <div 
          className="mt-5 bg-primary/10 rounded-lg shadow-lg p-6"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Kontak Kami
          </h2>
          <div className="flex flex-col space-y-4">
            <p className="text-lg leading-relaxed">
              Jika Anda memiliki pertanyaan atau membutuhkan bantuan, jangan
              ragu untuk menghubungi kami melalui:
            </p>
            <div className="flex items-center space-x-2 hover:text-primary transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>support@frevanshop.com</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-primary transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>(021) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
