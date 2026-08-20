import { useState } from "react";
import {
  Search,
  Mic,
  Bell,
  FileText,
  IdCard,
  KeyRound,
  Trophy,
  MoreHorizontal,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    id: "updates",
    title: "New Updates",
    icon: Bell,
    color: "blue",
  },
  {
    id: "syllabus",
    title: "Syllabus",
    icon: FileText,
    color: "green",
  },
  {
    id: "admit",
    title: "Admit Card",
    icon: IdCard,
    color: "purple",
  },
  {
    id: "answer",
    title: "Answer Key",
    icon: KeyRound,
    color: "orange",
  },
  {
    id: "results",
    title: "Results",
    icon: Trophy,
    color: "red",
  },
  {
    id: "more",
    title: "More",
    icon: MoreHorizontal,
    color: "indigo",
  },
];

const updates = [
  {
    id: 1,
    category: "updates",
    title: "Rajasthan Police Recruitment 2026",
    date: "20 Aug 2026",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80",
    description:
      "Rajasthan Police Recruitment 2026 से संबंधित महत्वपूर्ण notification, eligibility, dates और application details.",
  },
  {
    id: 2,
    category: "updates",
    title: "RAS Examination Notification 2026",
    date: "19 Aug 2026",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80",
    description:
      "RAS examination notification, application dates और examination से संबंधित महत्वपूर्ण जानकारी.",
  },
  {
    id: 3,
    category: "syllabus",
    title: "RAS Pre & Mains Syllabus 2026",
    date: "18 Aug 2026",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1000&q=80",
    description:
      "RAS Prelims और Mains का subject-wise syllabus.",
  },
  {
    id: 4,
    category: "syllabus",
    title: "SSC Exam Syllabus 2026",
    date: "17 Aug 2026",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    description:
      "SSC examination का subject-wise syllabus और preparation details.",
  },
  {
    id: 5,
    category: "admit",
    title: "RAS Admit Card 2026",
    date: "17 Aug 2026",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
    description:
      "RAS admit card download और examination instructions.",
  },
  {
    id: 6,
    category: "answer",
    title: "RAS Answer Key 2026",
    date: "16 Aug 2026",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80",
    description:
      "RAS provisional answer key, objection और final answer key से संबंधित जानकारी.",
  },
  {
    id: 7,
    category: "results",
    title: "RAS Result 2026",
    date: "15 Aug 2026",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80",
    description:
      "RAS result, merit list और आगे की selection process.",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [activeFeature, setActiveFeature] = useState("updates");

  const filteredUpdates = updates.filter((item) => {
    const matchesCategory =
      activeFeature === "updates" ||
      activeFeature === "more" ||
      item.category === activeFeature;

    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleVoiceSearch = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice search इस browser में available नहीं है.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "hi-IN";
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setSearch(text);
    };

    recognition.start();
  };

  return (
    <div className="app">

      {/* ================= HEADER ================= */}

      <header className="header">

        <div className="logo-area">
          <div className="logo-box">
            P
          </div>

          <div className="logo-text">
            <h2>paper wala</h2>
            <span>Education & Exam Platform</span>
          </div>
        </div>

        {/* SEARCH BAR */}

        <div className="search-box">

          <Search size={21} />

          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className="voice-btn"
            onClick={handleVoiceSearch}
          >
            <Mic size={20} />
          </button>

        </div>

      </header>


      {/* ================= HERO ================= */}

      <main>

        <section className="hero">

          <div className="hero-content">

            <span className="hero-small">
              PAPER WALA
            </span>

            <h1>
              Stay Updated,
              <br />
              <span>Stay Ahead!</span>
            </h1>

            <p>
              Get all the important exam updates
              in one place.
            </p>

            <button
              className="hero-btn"
              onClick={() => setActiveFeature("updates")}
            >
              Explore Updates
              <ChevronRight size={18} />
            </button>

          </div>


          {/* Illustration */}

          <div className="hero-illustration">

            <div className="paper-card">

              <div className="paper-top"></div>

              <div className="check-line">
                <b>✓</b>
                <span></span>
              </div>

              <div className="check-line">
                <b>✓</b>
                <span></span>
              </div>

              <div className="check-line">
                <b>✓</b>
                <span></span>
              </div>

            </div>

            <div className="book book-one"></div>
            <div className="book book-two"></div>

          </div>

        </section>


        {/* ================= SIX FEATURES ================= */}

        <section className="features-section">

          <div className="section-title">

            <div>
              <small>QUICK ACCESS</small>
              <h2>Exam Services</h2>
            </div>

          </div>


          <div className="features">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (
                <button
                  key={feature.id}
                  className={`feature ${
                    activeFeature === feature.id
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveFeature(feature.id)
                  }
                >

                  <div
                    className={`feature-icon ${feature.color}`}
                  >
                    <Icon size={27} />
                  </div>

                  <span>
                    {feature.title}
                  </span>

                </button>
              );

            })}

          </div>

        </section>


        {/* ================= UPDATES ================= */}

        <section className="updates-section">

          <div className="section-title">

            <div>
              <small>LATEST</small>

              <h2>
                {
                  features.find(
                    (item) =>
                      item.id === activeFeature
                  )?.title
                }
              </h2>

            </div>

            <button
              className="view-all"
              onClick={() => {
                setActiveFeature("updates");
                setSearch("");
              }}
            >
              View All
              <ChevronRight size={17} />
            </button>

          </div>


          <div className="update-grid">

            {filteredUpdates.length > 0 ? (

              filteredUpdates.map((item) => (

                <article
                  className="update-card"
                  key={item.id}
                >

                  <div className="update-image">

                    <img
                      src={item.image}
                      alt={item.title}
                    />

                  </div>

                  <div className="update-content">

                    <span className="update-date">
                      {item.date}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                    <button className="read-more">
                      Read Details
                      <ChevronRight size={16} />
                    </button>

                  </div>

                </article>

              ))

            ) : (

              <div className="no-result">

                <Search size={35} />

                <h3>
                  No result found
                </h3>

                <p>
                  Search या category बदलकर देखें.
                </p>

              </div>

            )}

          </div>

        </section>

      </main>


      {/* ================= BOTTOM NAVIGATION ================= */}

      <nav className="bottom-navigation">

        {features.map((feature) => {

          const Icon = feature.icon;

          return (
            <button
              key={feature.id}
              className={
                activeFeature === feature.id
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveFeature(feature.id)
              }
            >

              <Icon size={20} />

              <span>
                {feature.title}
              </span>

            </button>
          );

        })}

      </nav>

    </div>
  );
}

export default App;
