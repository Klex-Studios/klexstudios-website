import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Klex Studios – Noxa, Reson, Elixa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function SocialImage() {
  const brands = [
    { name: "Klex", file: "klex-logo.png" },
    { name: "Noxa", file: "noxa-logo.png" },
    { name: "Reson", file: "reson-logo.png" },
    { name: "Elixa", file: "elixa-logo.png" },
  ];
  const logos = await Promise.all(brands.map(async brand => ({
    ...brand,
    src: `data:image/png;base64,${await readFile(join(process.cwd(), "public", "logos", brand.file), "base64")}`,
  })));

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "62px 76px", color: "#f5f7fb", background: "radial-gradient(ellipse at 78% 16%, #19372e 0%, #07121b 40%, #040a0e 78%)", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <img src={logos[0].src} width={76} height={76} alt="" />
        <div style={{ display: "flex", flexDirection: "column", fontSize: 24, letterSpacing: 5 }}><span>KLEX</span><span style={{ fontSize: 14, letterSpacing: 6, color: "#bec5d6", marginTop: 8 }}>STUDIOS</span></div>
      </div>
      <div style={{ display: "flex", fontSize: 86, fontWeight: 700, letterSpacing: -4 }}>Klex Studios</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #30434d", paddingTop: 28 }}>
        <div style={{ display: "flex", gap: 38 }}>
          {logos.slice(1).map(brand => <div key={brand.name} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 24 }}><img src={brand.src} width={46} height={46} alt="" /><span>{brand.name}</span></div>)}
        </div>
        <span style={{ fontSize: 19, color: "#9eb4c2" }}>klexstudios.com</span>
      </div>
    </div>, size,
  );
}
