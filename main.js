import './style.css';

document.querySelector('#app').innerHTML = `
  <div class='app'>
  <section>
  <article class='score'>
    <h2>Your Result</h2>
    <div class='score__point'>
      <span class='score__point-value'>76</span>
      <span>of 100</span>
    </div>
    <h3>Great</h3>
    <p>You scored higher than 65% of the people who have taken these tests.</p>
  </article>
  <article class='summary'>
    <h2>Summary</h2>
    <ul role='list'>
      <li>
        <div>
          <img src='./assets/images/icon-reaction.svg' alt=''>
          <h4>
            Reaction
          </h4>
        </div>
        <p class='summary__text'><span>80</span> / 100</p>
      </li>
      <li>
        <div>
          <img src='./assets/images/icon-memory.svg' alt=''>
          <h4>
            Memory
          </h4>
        </div>
        <p class='summary__text'><span>92</span> / 100</p>
      </li>
      <li>
        <div>
          <img src='./assets/images/icon-verbal.svg' alt=''>
          <h4>
            Verbal
          </h4>
        </div>
        <p class='summary__text'><span>61</span> / 100</p>
      </li>
      <li>
        <div>
          <img src='./assets/images/icon-visual.svg' alt=''>
          <h4>
            Visual
          </h4>
        </div>
        <p class='summary__text'><span>72</span> / 100</p>
      </li>
    </ul>
    <button>Continue</button>
  </article>
  </section>
  </div>
`


