import { showSection, animations } from "../animations";
import { ReactComponent as TracksMap } from "../assets/img/tracks.svg";
import { ReactComponent as FAQIcon } from "../assets/img/faq.svg";
import { ReactComponent as PrizesMedal } from "../assets/img/prizes.svg";
import { ReactComponent as InfoTent } from "../assets/img/home.svg";

export const mobileSections = [
  {
    reverseAnimation: (direction) => {
      showSection(
        "mobile-tracks",
        {
          rotate: "0deg",
          translate: { x: 0, y: 0 },
          scale: 1,
          opacity: 1,
        },
        direction
      );
    },
    onClick: (direction) => {
      showSection(
        "mobile-tracks",
        {
          rotate: "0deg",
          translate: { x: 0, y: 0 },
          scale: 1,
          opacity: 0,
        },
        direction
      );
      animations();
    },
    title: "Tracks",
    class: "mobile-tracks",
    image: <TracksMap className="img-svg" />,
  },
  {
    reverseAnimation: (direction) => {
      showSection(
        "mobile-faq",
        {
          rotate: "0deg",
          translate: { x: 0, y: 0 },
          scale: 1,
          opacity: 1,
        },
        direction
      );
    },
    onClick: (direction) => {
      showSection(
        "mobile-faq",
        {
          rotate: "0deg",
          translate: { x: 0, y: 0 },
          scale: 1,
          opacity: 0,
        },
        direction
      );
    },
    title: "FAQs",
    class: "mobile-faq",
    image: <FAQIcon className="img-svg mb-5" />,
  },
  {
    reverseAnimation: (direction) => {
      showSection(
        "mobile-prizes",
        {
          rotate: "0deg",
          translate: { x: 0, y: 0 },
          scale: 1,
          opacity: 1,
        },
        direction
      );
    },
    onClick: (direction) => {
      showSection(
        "mobile-prizes",
        {
          rotate: "0deg",
          translate: { x: 0, y: 0 },
          scale: 1,
          opacity: 0,
        },
        direction
      );
    },
    title: "Prizes",
    class: "mobile-prizes",
    image: <PrizesMedal className="img-svg mb-5" />,
  },
  {
    reverseAnimation: (direction) => {
      showSection(
        "mobile-info",
        {
          rotate: "0deg",
          translate: { x: 0, y: 0 },
          scale: 1,
          opacity: 1,
        },
        direction
      );
    },
    onClick: (direction) => {
      showSection(
        "mobile-info",
        {
          rotate: "0deg",
          translate: { x: 0, y: 0 },
          scale: 1,
          opacity: 0,
        },
        direction
      );
    },
    title: "What is COD?",
    class: "mobile-info",
    image: <InfoTent className="img-svg" />,
  },
];

export const homeSections = {
  firstRow: [
    {
      reverseAnimation: (direction) => {
        showSection(
          "tracks",
          {
            rotate: "-30deg",
            translate: { x: "0", y: "0" },
            scale: 1,
            opacity: 1,
          },
          direction
        );
      },
      onClick: (direction) => {
        showSection(
          "tracks",
          {
            rotate: "0deg",
            translate: { x: "3.2em", y: "2.8em" },
            scale: 10,
            opacity: 0.8,
          },
          direction
        );
        animations();
      },
      title: "Tracks",
      class: "tracks",
      titleID: "tracks-title",
      image: (
        <TracksMap
          style={{
            background: "none",
            width: "100%",
            height: "100%",
            transform: "rotate(-30deg)",
          }}
        />
      ),
    },
    {
      reverseAnimation: (direction) => {
        showSection(
          "prizes",
          {
            rotate: "0deg",
            translate: { x: "0%", y: "0%" },
            scale: 1,
            opacity: 1,
          },
          direction
        );
      },
      onClick: (direction) => {
        showSection(
          "prizes",
          {
            rotate: "0deg",
            translate: { x: "-7%", y: "20%" },
            scale: 3,
            opacity: 1.0,
          },
          direction
        );
      },
      title: "Prizes",
      class: "prizes",
      titleID: "prizes-title",
      image: (
        <PrizesMedal
          style={{ background: "none", width: "100%", height: "100%" }}
          className="ml-4"
        />
      ),
    },
  ],
  secondRow: [
    {
      reverseAnimation: (direction) => {
        showSection(
          "faq",
          {
            rotate: "30deg",
            translate: { x: "0%", y: "0%" },
            scale: 1,
            opacity: 1,
          },
          direction
        );
      },
      onClick: (direction) => {
        showSection(
          "faq",
          {
            rotate: "0deg",
            translate: { x: "28%", y: "-37%" },
            scale: 3,
            opacity: 1.0,
          },
          direction
        );
      },
      title: "FAQs",
      class: "faq",
      titleID: "faq-title",
      image: (
        <FAQIcon
          style={{
            background: "none",
            width: "90%",
            height: "90%",
            transform: "rotate(-30deg)",
          }}
          className="mt-4"
        />
      ),
    },
    {
      reverseAnimation: (direction) => {
        showSection(
          "info",
          {
            rotate: "0deg",
            translate: { x: "0%", y: "0%" },
            scale: 1,
            opacity: 1,
          },
          direction
        );
      },
      onClick: (direction) => {
        showSection(
          "info",
          {
            rotate: "0deg",
            translate: { x: "-15%", y: "-20%" },
            scale: 18,
            opacity: 0.3,
          },
          direction
        );
      },
      title: "What is COD?",
      class: "info",
      titleID: "info-title",
      image: (
        <InfoTent
          style={{ background: "none", width: "100%", height: "100%" }}
        />
      ),
    },
  ],
};
