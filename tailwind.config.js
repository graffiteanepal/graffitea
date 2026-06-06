module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        teaBlue: "#0c96d8",
        teaBlueDark: "#087bb4",
        teaYellow: "#f5c94a",
        teaInk: "#173b55",
        teaCream: "#fff9e8",
        teaMist: "#dff4ff",
      },
      fontFamily: {
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 20px 45px rgba(9, 80, 117, 0.16)",
        glow: "0 28px 80px rgba(4, 89, 132, 0.22)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
      },
      animation: {
        marquee: "marquee 18s linear infinite",
      },
    },
  },
  plugins: [],
};
