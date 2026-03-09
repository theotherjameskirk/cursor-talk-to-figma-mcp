import { useState } from "react";

const AGE_BRACKETS = [
  "13 - 18",
  "19 - 25",
  "26 - 35",
  "36 - 49",
  "50 - 65",
  "Over 65",
];

export default function AgeSelector() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div
      style={{
        width: 402,
        height: 874,
        background: "#000",
        borderRadius: 62,
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {/* Radial gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 100% 0%, #140838 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Status bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 20px 0",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span style={{ color: "#fff", fontSize: 15, fontWeight: 600 }}>
          9:41
        </span>
        {/* Dynamic Island */}
        <div
          style={{
            width: 124,
            height: 35,
            background: "#000",
            borderRadius: 35,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: 14,
          }}
        />
        {/* Battery */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div
            style={{
              width: 25,
              height: 13,
              border: "1px solid #fff",
              borderRadius: 4,
              padding: 2,
            }}
          >
            <div
              style={{
                width: "85%",
                height: "100%",
                background: "#fff",
                borderRadius: 2,
              }}
            />
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "12px 16px",
          gap: 8,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Back button */}
        <button
          style={{
            width: 32,
            height: 32,
            borderRadius: 34,
            background: "rgba(111,111,111,0.24)",
            border: "none",
            color: "#fff",
            fontSize: 16,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          ‹
        </button>

        {/* Progress bar */}
        <div style={{ flex: 1, height: 4, background: "#292929", borderRadius: 34 }}>
          <div
            style={{
              width: "20%",
              height: "100%",
              background: "#fff",
              borderRadius: 8,
            }}
          />
        </div>

        {/* Share icon */}
        <button
          style={{
            width: 44,
            height: 44,
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 18,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ↑
        </button>
      </div>

      {/* Avatar + question */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 8,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Avatar with halo */}
        <div style={{ position: "relative", width: 112, height: 112 }}>
          {/* Halo ellipses */}
          {[
            { color: "#6375df", width: 81, height: 144, top: -50, left: 15 },
            { color: "#3a3aff", width: 101, height: 144, top: -50, left: 5 },
            { color: "#c45fff", width: 71, height: 80, top: -35, left: 41 },
            { color: "#6d24ff", width: 71, height: 80, top: -35, left: -15 },
            { color: "#ff56d7", width: 64, height: 64, top: -5, left: 23 },
            { color: "#50e2ff", width: 91, height: 91, top: -22, left: 33 },
            { color: "#9156f9", width: 78, height: 78, top: -57, left: 40 },
          ].map((e, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: e.width,
                height: e.height,
                background: e.color,
                borderRadius: "50%",
                top: e.top,
                left: e.left,
                opacity: 0.7,
                filter: "blur(8px)",
              }}
            />
          ))}
          {/* Avatar circle */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #9156f9, #50e2ff)",
              zIndex: 1,
            }}
          />
        </div>

        {/* Caption */}
        <p
          style={{
            color: "#fff",
            fontSize: 28,
            fontWeight: 500,
            textAlign: "center",
            margin: "24px 24px 0",
            lineHeight: 1.2,
          }}
        >
          In which age bracket are you, Ed?
        </p>
      </div>

      {/* Age bracket list */}
      <div
        style={{
          margin: "24px 16px 0",
          background: "#292929",
          borderRadius: 16,
          overflow: "hidden",
          position: "relative",
          zIndex: 1,
        }}
      >
        {AGE_BRACKETS.map((bracket, i) => (
          <button
            key={bracket}
            onClick={() => setSelected(bracket)}
            style={{
              width: "100%",
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 16px",
              background:
                selected === bracket ? "rgba(255,255,255,0.08)" : "transparent",
              border: "none",
              borderTop: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <span
              style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: 0.064,
              }}
            >
              {bracket}
            </span>
            {/* Checkbox */}
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                border:
                  selected === bracket
                    ? "none"
                    : "1.5px solid rgba(255,255,255,0.3)",
                background:
                  selected === bracket ? "#5419dd" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {selected === bracket && (
                <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                  <path
                    d="M1 4L4.5 7.5L11 1"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Bottom actions */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background:
            "linear-gradient(to bottom, transparent, #000 16%, #000 100%)",
          padding: "16px 24px 24px",
          zIndex: 2,
        }}
      >
        <button
          disabled={!selected}
          style={{
            width: "100%",
            height: 56,
            borderRadius: 50,
            border: "none",
            background: selected ? "#5419dd" : "#262626",
            color: selected ? "#fff" : "#878787",
            fontSize: 17,
            fontWeight: 500,
            cursor: selected ? "pointer" : "default",
            transition: "background 0.2s, color 0.2s",
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          {selected ? "Continue" : "Select one"}
        </button>
        {/* Home indicator */}
        <div
          style={{
            width: 144,
            height: 5,
            background: "#fff",
            borderRadius: 100,
            margin: "16px auto 0",
          }}
        />
      </div>
    </div>
  );
}
