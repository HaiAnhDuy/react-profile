const RenaissanceArt = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large Sistine Chapel Ceiling Background Element */}
      <div
        className="absolute top-0 left-1/4 w-1/2 h-32 opacity-8 transform rotate-2 float-slow"
        style={{ animationDelay: "6s" }}
      >
        <svg viewBox="0 0 200 80" className="w-full h-full">
          {/* Central rectangular frame */}
          <rect
            x="20"
            y="10"
            width="160"
            height="60"
            fill="none"
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="1"
          />
          {/* Multiple panels */}
          <line
            x1="60"
            y1="10"
            x2="60"
            y2="70"
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="0.5"
          />
          <line
            x1="100"
            y1="10"
            x2="100"
            y2="70"
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="0.5"
          />
          <line
            x1="140"
            y1="10"
            x2="140"
            y2="70"
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="0.5"
          />
          {/* Figure silhouettes in panels */}
          <circle cx="40" cy="35" r="6" fill="rgba(0,0,0,0.12)" />
          <circle cx="80" cy="30" r="7" fill="rgba(0,0,0,0.15)" />
          <circle cx="120" cy="35" r="6" fill="rgba(0,0,0,0.12)" />
          <circle cx="160" cy="32" r="6" fill="rgba(0,0,0,0.12)" />
          {/* Decorative borders */}
          <path
            d="M15,5 Q100,0 185,5"
            fill="none"
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="0.6"
          />
          <path
            d="M15,75 Q100,80 185,75"
            fill="none"
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="0.6"
          />
        </svg>
      </div>

      {/* Mona Lisa Silhouette */}
      <div className="absolute top-20 left-10 w-32 h-48 opacity-50 transform rotate-12 float-slow">
        <img
          src="/images/PIC1.jpg"
          alt="Mona Lisa Silhouette"
          className="w-full h-full"
        />
      </div>

      {/* The Creation of Adam Hands */}
      <div className="absolute top-32 right-0 w-40 h-24 opacity-50 transform -rotate-6 float-medium">
        <img
          src="/images/PIC2.jpg"
          alt="Mona Lisa Silhouette"
          className="w-full h-full"
        />
      </div>

      {/* The Birth of Venus Silhouette */}
      <div className="absolute bottom-0 left-20 w-48 h-32 opacity-50 transform rotate-6 float-slow-reverse">
        <img
          src="/images/PIC3.jpg"
          alt="Mona Lisa Silhouette"
          className="w-full h-full"
        />
      </div>

      {/* The Last Supper Table */}
      <div className="absolute bottom-32 right-24 w-56 h-20 opacity-50 transform -rotate-3 float-medium-reverse">
        <img
          src="/images/PIC4.jpg"
          alt="Mona Lisa Silhouette"
          className="w-full h-full"
        />
      </div>

      {/* Vitruvian Man */}
      <div className="absolute top-1/2 left-8 w-32 h-32 opacity-50 transform rotate-45 float-slow">
        <img
          src="/images/PIC5.jpg"
          alt="Mona Lisa Silhouette"
          className="w-full h-full"
        />
      </div>

      {/* The School of Athens Architecture */}
      <div className="absolute top-1/3 right-8 w-44 h-28 opacity-50 transform -rotate-12 float-medium">
        <img
          src="/images/PIC6.jpg"
          alt="Mona Lisa Silhouette"
          className="w-full h-full"
        />
      </div>

      {/* Michelangelo's Sculpture Study */}
      <div
        className="absolute bottom-45 left-1/5 w-28 h-40 opacity-50 transform rotate-8 float-medium-reverse"
        style={{ animationDelay: "1.5s" }}
      >
        <img
          src="/images/PIC8.jpg"
          alt="Mona Lisa Silhouette"
          className="w-full h-full"
        />
      </div>

      {/* Botanical Renaissance Study */}
      <div
        className="absolute top-[30%] left-16 w-32 h-24 opacity-50 transform rotate-25 float-slow"
        style={{ animationDelay: "3s" }}
      >
        <img
          src="/images/PIC9.jpg"
          alt="Mona Lisa Silhouette"
          className="w-full h-full"
        />
      </div>

      {/* Classical Drapery Study */}
      <div
        className="absolute bottom-40 right-8 w-24 h-36 opacity-50 transform -rotate-20 float-medium"
        style={{ animationDelay: "4s" }}
      >
        <img
          src="/images/PIC10.jpg"
          alt="Mona Lisa Silhouette"
          className="w-full h-full"
        />
      </div>

      {/* Mathematical Diagram */}
      <div
        className="absolute top-2/3 right-20 w-28 h-28 opacity-50 transform rotate-30 float-slow-reverse"
        style={{ animationDelay: "2.5s" }}
      >
        <img
          src="/images/PIC11.jpg"
          alt="Mona Lisa Silhouette"
          className="w-full h-full"
        />
      </div>

      {/* Classical Face Profile */}
      <div
        className="absolute top-80 left-[80%] w-20 h-28 opacity-50 transform -rotate-5 float-medium-reverse"
        style={{ animationDelay: "1s" }}
      >
        <img
          src="/images/PIC12.jpg"
          alt="Mona Lisa Silhouette"
          className="w-full h-full"
        />
      </div>

      {/* Renaissance Window Study */}
      <div
        className="absolute top-80 right-60 w-24 h-32 opacity-50 transform rotate-12 float-medium"
        style={{ animationDelay: "4.5s" }}
      >
        <img
          src="/images/PIC13.jpg"
          alt="Mona Lisa Silhouette"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default RenaissanceArt;
