import { writable } from "svelte/store";

export const projects = writable([
  {
    title: "the-beginners-gambit",
    url: "https://arlandfran.github.io/the-beginners-gambit/",
    display:
      "The Beg<svg id='pawn' viewBox='0 0 11 11' preserveAspectRatio='xMinYMin meet'><path d='M11 11H0s0-2.865 1.833-2.865c1.834 0 1.834-1.718 1.834-1.718h3.666s0 1.718 1.834 1.718C11 8.135 11 11 11 11zM3.667 6.417h3.666s-1.186 0-1.156-1.09h-1.35c.03 1.09-1.16 1.09-1.16 1.09z'></path><path d='M8.25 2.75a2.75 2.75 0 11-5.5 0 2.75 2.75 0 015.5 0z'></path></svg>nners Gambit",
  },
  {
    title: "anime-corner-rankings",
    url: "https://arlandfran.github.io/anime-corner-rankings/",
    display: "animecorner.me rankings",
  },
  {
    title: "workability",
    url: "http://workability-team12.herokuapp.com/",
    display:
      "<svg id='workability-icon' viewBox='0 0 32 32'><rect x='7.5' y='9.4' width='17.1' height='11.4' rx='2' stroke='#001F3F' stroke-width='2'/><path d='M31 16a15 15 0 1 1-30 0 15 15 0 0 1 30 0Z' stroke='#001F3F' stroke-width='2'/><path d='M17 13.8c-1.7 1.8-2.3 2-3 1-.8-.8-1.8-.7-1.8.2 0 .7 2 2.9 2.8 2.9.7 0 4.8-4.3 4.8-5 0-1.1-1-.8-2.8 1Z' fill='#57B894'/><path d='M12.2 23.5c0 1 .3 1 3.8 1s3.8 0 3.8-1c0-.9-.3-1-3.8-1s-3.8.1-3.8 1Z' fill='#001F3F'/></svg><span id='workability-text'>Workability</span>",
  },
]);
