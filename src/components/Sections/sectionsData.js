import old from "../../Assets/gallery/pics2/old.jpg";
import old1 from "../../Assets/gallery/pics2/old (2).jpg";
import old2 from "../../Assets/gallery/pics2/old (3).jpg";

import middle from "../../Assets/gallery/pics2/middle (2).jpg";
import middle1 from "../../Assets/gallery/pics2/middle.jpg";
import middle2 from "../../Assets/gallery/pics2/midddle.jpg";

import news from "../../Assets/gallery/gust.jpg";
import news1 from "../../Assets/gallery/pics2/mom3.jpg";
import news2 from "../../Assets/gallery/pics2/mom4.jpg";

import Mummies from "../../Assets/gallery/mom.jpg";
import mummy1 from "../../Assets/gallery/pics2/mom4.jpg";
import mummy2 from "../../Assets/gallery/pics2/mom3.jpg";

import paper from "../../Assets/gallery/pics2/paper (2).jpg";
import paper1 from "../../Assets/gallery/pics2/paper.jpg";
import paper2 from "../../Assets/gallery/pics2/paper (3).jpg";

import Statues from "../../Assets/gallery/status.jpg";
import statue1 from "../../Assets/gallery/pics2/status.jpg";
import statue2 from "../../Assets/gallery/status.jpg";

import jall3 from "../../Assets/gallery/pics2/ja.jpg";
import jewelry1 from "../../Assets/gallery/pics2/jall.jpg";
import jewelry2 from "../../Assets/gallery/pics2/jallry3.jpg";

export const Sdata = [
  {
    id: 1,
    title: "Pharaonic Artifacts",
    image: old,
    images: [old, old1, old2], // صور السلايدر
    description: "A collection of artifacts from different periods of ancient Egypt, including pottery, tools, and jewelry used by the pharaohs.",
  },
  {
    id: 2,
    title: "Middle Kingdom",
    image: middle,
    images: [middle, middle1, middle2],
    description: "Artifacts from the Middle Kingdom era, showcasing the evolution of art and architecture during this period.",
  },
  {
    id: 3,
    title: "New Kingdom",
    image: news,
    images: [news, news1, news2],
    description: "The New Kingdom represents Egypt's most prosperous era, featuring grand temples, statues, and exquisite paintings.",
  },
  {
    id: 4,
    title: "Royal Mummies Hall",
    image: Mummies,
    images: [Mummies, mummy1, mummy2],
    description: "A special hall that houses the royal mummies of famous pharaohs, preserved for thousands of years.",
  },
  {
    id: 5,
    title: "Papyri & Coins",
    image: paper,
    images: [paper, paper1, paper2],
    description: "Ancient papyrus manuscripts and coins that give insight into the daily life and economy of ancient Egypt.",
  },
  {
    id: 6,
    title: "Sarcophagi & Statues",
    image: Statues,
    images: [Statues, statue1, statue2],
    description: "A collection of sarcophagi and statues representing gods, pharaohs, and other significant figures in ancient Egyptian history.",
  },
  {
    id: 7,
    title: "Gold & Royal Jewelry",
    image: jall3,
    images: [jall3, jewelry1, jewelry2],
    description: "A stunning collection of gold ornaments and royal jewelry worn by queens and high-ranking officials.",
  }
];

export default Sdata;
