import { useState } from 'react';
import s from './Navbar.module.scss';

const Navbar = () => {
  const [progressValue, setProgressValue] = useState(20);

  const handleProgressChange = (event) => {
    setProgressValue(event.target.value);
  };

  return (
    <section className={s.navbar}>
      <div className="container">
        {/* TYPE */}
        <div className={s.type}>
          <p>TYPE</p>
          <div className={s.checkbox}>
            <input type="checkbox" id="sport" />
            <label htmlFor="sport">Sport(10)</label>
          </div>
          <div className={s.checkbox}>
            <input type="checkbox" id="suv" />
            <label htmlFor="suv">SUV(12)</label>
          </div>
          <div className={s.checkbox}>
            <input type="checkbox" id="mpv" />
            <label htmlFor="mpv">MPV(16)</label>
          </div>
          <div className={s.checkbox}>
            <input type="checkbox" id="sedan" />
            <label htmlFor="sedan">Sedan(20)</label>
          </div>
          <div className={s.checkbox}>
            <input type="checkbox" id="coupe" />
            <label htmlFor="coupe">Coupe(14)</label>
          </div>
          <div className={s.checkbox}>
            <input type="checkbox" id="hatchback" />
            <label htmlFor="hatchback">Hatchback(14)</label>
          </div>
        </div>

        {/* CAPACITY */}
        <div className={s.capacity}>
          <p>CAPACITY</p>
          <div className={s.checkbox}>
            <input type="checkbox" id="twoPerson" />
            <label htmlFor="twoPerson">2 Person(10)</label>
          </div>
          <div className={s.checkbox}>
            <input type="checkbox" id="fourPerson" />
            <label htmlFor="fourPerson">4 Person(14)</label>
          </div>
          <div className={s.checkbox}>
            <input type="checkbox" id="sixPerson" />
            <label htmlFor="sixPerson">6 Person(12)</label>
          </div>
          <div className={s.checkbox}>
            <input type="checkbox" id="eightPerson" />
            <label htmlFor="eightPerson">8 Person(16)</label>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className={s.progressBar}>
          <p>PROGRESS</p>
          <input
            type="range"
            min="0"
            max="100"
            value={progressValue}
            onChange={handleProgressChange}
          />
          <span>{progressValue}$</span>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
