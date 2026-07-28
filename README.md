# GO-GRILL-ER.BANANA

A small browser arcade game built with [Phaser](https://phaser.io/). Move your blaster left and right, shoot falling bananas, and rack up hits before they get past you.

## How to play

| Control | Action |
| --- | --- |
| **← / →** or **swipe left/right** | Move the blaster |
| **Space** or **tap** | Shoot |
| **Space** or **tap** | Start game / restart after game over |

Hit bananas with your laser to score. When the game ends, your final score is shown — press **Space** or **tap** to play again.

## Run it

Serve the project folder over HTTP (Phaser needs a local server; opening `index.html` as a file may not load assets correctly):

```bash
# example with Python
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## Project layout

- `index.html` / `bundle.min.js` — entry point and bundled game
- `Scenes/` — title, gameplay, and game-over scenes
- `assets/` — sprites (license-free)
- `Config/config.js` — Phaser game config (1200×800)

## License notes

Game code is yours to publish. Phaser is third-party open source (bundled as `phaser.min.js` / inside the build). Keep its license notice if you redistribute the engine.
