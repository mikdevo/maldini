window.PROFILE_CONFIG = {
  site: {
    backgroundImage: "./assets/background.png",
    animatedBackground: {
      enabled: true,
      type: "blobs",
      blobs: 5,
      speed: 28
    },
    theme: {
      primary: "#6c5ce7",
      accent: "#00d1ff",
      text: "#f6f7fb",
      muted: "#cfd3e3",
    },
  },
  user: {
    displayName: "Wick",
    avatar: "./assets/avatar.png",
    banner: "./assets/banner.jpg",
    roles: [
      "Gamer",
      "Professor",
      "Trainer",
    ],
  },
  roles: {
    Gamer: '<i class="fas fa-gamepad"></i>',
    Professor: '<i class="fas fa-graduation-cap"></i>',
    Trainer: '<i class="fas fa-dumbbell"></i>',
  },
  dynamic: {
    discord: {
      enabled: true,
      userId: "1004732678639194162",
      sourcePriority: ["japi", "lanyard"],
      refreshMs: 10000,
      overrideDisplayName: true,
      imageSizes: { avatar: 512, banner: 2048 },
    },
  },
  socials: [
    { name: "Discord", url: "https://discord.com/users/1004732678639194162", icon: "discord" },
    { name: "Snapchat", url: "https://t.snapchat.com/GpLZDGdv", icon: "snapchat" },
    { name: "Instagram", url: "https://www.instagram.com/t4h1r.73", icon: "instagram" },
  ],
};