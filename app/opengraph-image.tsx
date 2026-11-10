import { ImageResponse } from "next/og";

export const alt = "Emmanuel Wopara: Full-stack developer. Student of markets.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Share card shown by LinkedIn, Slack, iMessage and X. Colors match the dark theme tokens in globals.css.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#12110e",
          color: "#f1ede2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#a39e90", letterSpacing: 3, fontFamily: "monospace" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#4cc38a" }} />
          EMMANUEL WOPARA
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 92, lineHeight: 1.05, letterSpacing: -2 }}>
          <div style={{ display: "flex" }}>Full-stack developer.</div>
          <div style={{ display: "flex" }}>
            <span>Student of&nbsp;</span>
            <span style={{ color: "#4cc38a" }}>markets</span>
            <span style={{ marginLeft: -6 }}>.</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#a39e90", fontFamily: "monospace", letterSpacing: 2 }}>
          <div style={{ display: "flex" }}>COBOL / JCL / NATURAL + TYPESCRIPT / REACT</div>
          <div style={{ display: "flex" }}>paradoxequity.com</div>
        </div>
      </div>
    ),
    size,
  );
}
