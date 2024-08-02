 function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

      const phrases = ["Developer", "Designer", "Educator", "Lover <3"];
      const el = document.getElementById("typewriter");

      let sleepTime = 100;

      let curPhraseIndex = 0;
      let page_opened = true;

      const writeLoop = async () => {
        while (true) {
          let curWord = phrases[curPhraseIndex];
          if (page_opened === true) {
              await sleep(2000);
              page_opened = false;
          }

          for (let i = 0; i < curWord.length; i++) {
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
          }

          await sleep(sleepTime * 10);

          for (let i = curWord.length; i > 0; i--) {
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
          }

          await sleep(sleepTime * 5);

          if (curPhraseIndex === phrases.length - 1) {
            curPhraseIndex = 0;
          } else {
            curPhraseIndex++;
          }
        }
      };

      writeLoop();