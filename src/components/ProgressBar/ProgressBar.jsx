import { useState } from 'react';
import s from './ProgressBar.module.scss';
const ProgressBar = () => {
  const [progress, setProgress] = useState(100000,0); 
  const handleDrag = (e) => {
    const slider = e.target.closest('.slider-bar');
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newProgress = Math.min(
      100,
      Math.max(0, (offsetX / rect.width) * 100)
    );
    setProgress(newProgress);
  };

  const handleClick = (e) => {
    handleDrag(e);
  };

  const handleMouseMove = (e) => {
    if (e.buttons !== 1) return;
    handleDrag(e);
  };
  return (
    <>
      <section className={s.price}>
        <div className="container">
          <div className={s.slidercontainer}>
            <p className={s.label}>PRICE</p>
            <div
              className={s.sliderbar}
              onMouseDown={handleClick}
              onMouseMove={handleMouseMove}
            >
              <div
                className={s.sliderprogress}
                style={{ width: `${progress}%` }}
              ></div>
              <div
                className={s.sliderhandle}
                style={{ left: `${progress}%` }}
              ></div>
            </div>
            <p className={s.value}>Max. ${progress.toFixed(2)}</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProgressBar;
