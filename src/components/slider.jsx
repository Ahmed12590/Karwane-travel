import { useEffect, useRef } from "react";
import "./slider.css";
import butterfly from '../assets/butterfly1.jpeg' 
import first from '../assets/first-image.jpg' 



export default function Carousel() {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const timeBarRef = useRef(null);
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);

  const timeRunning = 3000;   // class toggle clear time
  const timeAutoNext = 7000;  // autoplay gap

  // helper: reset the green top progress bar animation
  const resetTimeAnimation = () => {
    const el = timeBarRef.current;
    if (!el) return;
    el.style.animation = "none";
    // force reflow
    // eslint-disable-next-line no-unused-expressions
    el.offsetHeight;
    el.style.animation = null;
    el.style.animation = "runningTime 7s linear 1 forwards";
  };

  // show next/prev slide by moving DOM nodes
  const showSlider = (type) => {
    const carousel = carouselRef.current;
    const list = listRef.current;
    if (!carousel || !list) return;

    const items = list.querySelectorAll(".item");
    if (!items.length) return;

    if (type === "next") {
      list.appendChild(items[0]);                 // first → last
      carousel.classList.add("next");
    } else {
      list.prepend(items[items.length - 1]);      // last → first
      carousel.classList.add("prev");
    }

    // remove helper classes after animation time
    window.clearTimeout(showSlider._tid);
    showSlider._tid = window.setTimeout(() => {
      carousel.classList.remove("next");
      carousel.classList.remove("prev");
    }, timeRunning);

    // restart autoplay
    window.clearTimeout(showSlider._autoTid);
    showSlider._autoTid = window.setTimeout(() => {
      nextBtnRef.current?.click();
    }, timeAutoNext);

    resetTimeAnimation();
  };

  // initial autoplay + time bar kickoff
  useEffect(() => {
    resetTimeAnimation();
    showSlider._autoTid = window.setTimeout(() => {
      nextBtnRef.current?.click();
    }, timeAutoNext);

    return () => {
      window.clearTimeout(showSlider._tid);
      window.clearTimeout(showSlider._autoTid);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={listRef}>
        {/* Slides: same structure you shared, now as JSX */}
        <div className="item" style={{ backgroundImage: `url(${first})` }}
>
          <div className="content">
            <div className="title">SLIDER</div>
            <div className="name">EAGLE</div>
            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
            <div className="btn">
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="item" style={{ backgroundImage: `url(${butterfly})` }}
>
          <div className="content">
            <div className="title">SLIDER</div>
            <div className="name">OWL</div>
            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
            <div className="btn">
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="item" style={{ backgroundImage: `url(${butterfly})` }}
>
          <div className="content">
            <div className="title">SLIDER</div>
            <div className="name">CROW</div>
            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
            <div className="btn">
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        {/* baqi slides bhi isi pattern par — same as your HTML */}
        <div className="item" style={{ backgroundImage: `url(${butterfly})` }}
>
          <div className="content">
            <div className="title">SLIDER</div>
            <div className="name">BUTTERFLY</div>
            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
            <div className="btn">
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="item" style={{ backgroundImage: `url(${butterfly})` }}
>
          <div className="content">
            <div className="title">SLIDER</div>
            <div className="name">OWL</div>
            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
            <div className="btn">
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        {/* add the rest of your slides the same way... */}
      </div>

      {/* next prev buttons */}
      <div className="arrows">
        <button
          className="prev"
          ref={prevBtnRef}
          onClick={() => showSlider("prev")}
          aria-label="Previous"
        >
          &lt;
        </button>
        <button
          className="next"
          ref={nextBtnRef}
          onClick={() => showSlider("next")}
          aria-label="Next"
        >
          &gt;
        </button>
      </div>

      {/* time running */}
      <div className="timeRunning" ref={timeBarRef} />
    </div>
  );
}
