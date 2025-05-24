// const Contact = () => {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-50 py-20 relative overflow-hidden">
//       {/* Decorative Art Background */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-16 left-12 w-36 h-44 bg-gradient-to-br from-gray-800 to-black rounded-lg shadow-2xl transform rotate-6"></div>
//         <div className="absolute top-32 right-20 w-32 h-40 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-2xl transform -rotate-12"></div>
//         <div className="absolute bottom-24 left-1/4 w-28 h-36 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg shadow-2xl transform rotate-45"></div>
//         <div className="absolute bottom-32 right-16 w-40 h-32 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg shadow-2xl transform -rotate-6"></div>
//       </div>

//       {/* Ornamental Borders */}
//       <div className="absolute inset-8 border-2 border-double border-gray-700 opacity-15 rounded-lg"></div>
//       <div className="absolute inset-12 border border-gray-500 opacity-10 rounded-lg"></div>

//       <div className="container mx-auto px-8 relative z-10">
//         {" "}
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-serif text-black mb-6">Contact</h2>
//           <div className="w-32 h-1 bg-gradient-to-r from-gray-700 to-black mx-auto mb-8"></div>
//           <p className="text-xl text-gray-700 italic max-w-3xl mx-auto leading-relaxed">
//             "Như những nhà bảo trợ nghệ thuật thời phục hưng, hãy cùng tôi tạo
//             ra những kiệt tác công nghệ"
//           </p>
//         </div>
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {" "}
//             {/* Contact Form */}
//             <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-2xl border-2 border-gray-300">
//               <h3 className="text-3xl font-serif text-black mb-6 text-center">
//                 Gửi Thông Điệp
//               </h3>

//               <form className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-black font-medium mb-2">
//                       Tên của bạn
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gray-500 focus:outline-none transition-colors bg-white"
//                       placeholder="Nhập tên của bạn"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-black font-medium mb-2">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gray-500 focus:outline-none transition-colors bg-white"
//                       placeholder="example@email.com"
//                     />
//                   </div>
//                 </div>{" "}
//                 <div>
//                   <label className="block text-black font-medium mb-2">
//                     Chủ đề
//                   </label>
//                   <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gray-500 focus:outline-none transition-colors bg-white">
//                     <option>Tư vấn dự án mới</option>
//                     <option>Hợp tác phát triển</option>
//                     <option>Freelance opportunity</option>
//                     <option>Câu hỏi kỹ thuật</option>
//                     <option>Khác</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-black font-medium mb-2">
//                     Nội dung
//                   </label>
//                   <textarea
//                     rows={6}
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gray-500 focus:outline-none transition-colors bg-white resize-none"
//                     placeholder="Hãy chia sẻ ý tưởng của bạn..."
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full px-8 py-4 bg-gradient-to-r from-gray-700 to-black text-white font-medium rounded-lg shadow-lg hover:from-black hover:to-gray-900 transition-all duration-300 transform hover:scale-105"
//                 >
//                   Gửi Thông Điệp
//                 </button>
//               </form>
//             </div>
//             {/* Contact Information */}
//             <div className="space-y-8">
//               {" "}
//               {/* Contact Details */}
//               <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-2xl border-2 border-gray-300">
//                 <h3 className="text-3xl font-serif text-black mb-6 text-center">
//                   Thông Tin Liên Hệ
//                 </h3>

//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-black rounded-full flex items-center justify-center">
//                       <span className="text-white text-xl">📧</span>
//                     </div>
//                     <div>
//                       <h4 className="font-medium text-black">Email</h4>
//                       <p className="text-gray-600">developer@renaissance.dev</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-black rounded-full flex items-center justify-center">
//                       <span className="text-white text-xl">📱</span>{" "}
//                     </div>
//                     <div>
//                       <h4 className="font-medium text-black">Điện thoại</h4>
//                       <p className="text-gray-600">+84 XXX XXX XXX</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-black rounded-full flex items-center justify-center">
//                       <span className="text-white text-xl">📍</span>
//                     </div>
//                     <div>
//                       <h4 className="font-medium text-black">Địa chỉ</h4>
//                       <p className="text-gray-600">
//                         Thành phố Hồ Chí Minh, Việt Nam
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-black rounded-full flex items-center justify-center">
//                       <span className="text-white text-xl">⏰</span>
//                     </div>
//                     <div>
//                       <h4 className="font-medium text-black">Giờ làm việc</h4>
//                       <p className="text-gray-600">T2 - T6: 9:00 - 18:00</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>{" "}
//               {/* Social Links */}
//               <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-2xl border-2 border-gray-300">
//                 <h3 className="text-2xl font-serif text-black mb-6 text-center">
//                   Theo Dõi Tôi
//                 </h3>

//                 <div className="grid grid-cols-2 gap-4">
//                   <a
//                     href="#"
//                     className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 transform hover:scale-105 border border-gray-300"
//                   >
//                     <span className="text-2xl">💼</span>
//                     <span className="font-medium text-black">LinkedIn</span>
//                   </a>

//                   <a
//                     href="#"
//                     className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 transform hover:scale-105 border border-gray-300"
//                   >
//                     <span className="text-2xl">🐙</span>
//                     <span className="font-medium text-black">GitHub</span>
//                   </a>

//                   <a
//                     href="#"
//                     className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 transform hover:scale-105 border border-gray-300"
//                   >
//                     <span className="text-2xl">🐦</span>
//                     <span className="font-medium text-black">Twitter</span>
//                   </a>

//                   <a
//                     href="#"
//                     className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 transform hover:scale-105 border border-gray-300"
//                   >
//                     <span className="text-2xl">📷</span>
//                     <span className="font-medium text-black">Instagram</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>{" "}
//         {/* Inspirational Quote */}
//         <div className="mt-16 text-center">
//           <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-gray-300 max-w-4xl mx-auto">
//             <blockquote className="text-2xl font-serif text-black italic mb-4 leading-relaxed">
//               "Sự hợp tác tốt nhất sinh ra từ những cuộc gặp gỡ có ý nghĩa. Hãy
//               cùng tạo ra điều gì đó đặc biệt."
//             </blockquote>
//             <cite className="text-gray-600 font-medium">
//               - Về Tầm Quan Trọng Của Kết Nối
//             </cite>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-50 py-20 relative overflow-hidden">
      {/* Decorative Art Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-12 w-36 h-44 bg-gradient-to-br from-gray-800 to-black rounded-lg shadow-2xl transform rotate-6"></div>
        <div className="absolute top-32 right-20 w-32 h-40 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-2xl transform -rotate-12"></div>
        <div className="absolute bottom-24 left-1/4 w-28 h-36 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg shadow-2xl transform rotate-45"></div>
        <div className="absolute bottom-32 right-16 w-40 h-32 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg shadow-2xl transform -rotate-6"></div>
      </div>

      {/* Ornamental Borders */}
      <div className="absolute inset-8 border-2 border-double border-gray-700 opacity-15 rounded-lg"></div>
      <div className="absolute inset-12 border border-gray-500 opacity-10 rounded-lg"></div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-black mb-6">Contact</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gray-700 to-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 italic max-w-3xl mx-auto leading-relaxed">
            "Connect with me through these social platforms"
          </p>
        </div>

        {/* Social Links Only */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-2xl border-2 border-gray-300">
            <h3 className="text-3xl font-serif text-black mb-8 text-center">
              Follow Me
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a
                href="#"
                className="flex items-center justify-center space-x-4 p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 transform hover:scale-105 border border-gray-300"
              >
                <span>
                  <LinkedinOutlined className="text-3xl" />
                </span>
                <span className="font-medium text-black text-lg">LinkedIn</span>
              </a>

              <a
                target="_blank"
                href="https://github.com/HaiAnhDuy"
                className="flex items-center justify-center space-x-4 p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 transform hover:scale-105 border border-gray-300"
              >
                <span>
                  <GithubOutlined className="text-3xl" />
                </span>
                <span className="font-medium text-black text-lg">GitHub</span>
              </a>

              <a
                href="https://www.facebook.com/haianh.duy.735"
                target="_blank"
                className="flex items-center justify-center space-x-4 p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 transform hover:scale-105 border border-gray-300"
              >
                <span>
                  <FacebookOutlined className="text-3xl" />
                </span>
                <span className="font-medium text-black text-lg">Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/ddulcecor/"
                target="_blank"
                className="flex items-center justify-center space-x-4 p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 transform hover:scale-105 border border-gray-300"
              >
                <span>
                  <InstagramOutlined className="text-3xl" />
                </span>
                <span className="font-medium text-black text-lg">
                  Instagram
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-gray-300 max-w-4xl mx-auto">
            <blockquote className="text-2xl font-serif text-black italic mb-4 leading-relaxed">
              "The best collaborations arise from meaningful connections. Let's
              create something special together."
            </blockquote>
            <cite className="text-gray-600 font-medium">
              - On the Importance of Connection
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
