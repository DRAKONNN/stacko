import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.css';
//import { Button } from 'react-bootstrap';

function App() {
  return (
    <div>
       
  <nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">STACK'O</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Filters</a>
            <ul class="dropdown-menu checkbox-menu allow-focus">
              <li >
                <label>
                  <input type="checkbox" value="quick" id="checkboxQuick" checked /> Quick
                </label>
              </li>
              <li >
                <label>
                  <input type="checkbox" value="party" id="checkboxParty" checked /> Party
                </label>
              </li>
              <li >
                <label>
                  <input type="checkbox" value="frenetic" id="checkboxFrenetic" checked /> Frenetic
                </label>
              </li>
              <li >
                <label>
                  <input type="checkbox" value="strategy" id="checkboxStrategy" checked /> Strategy
                </label>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header>
    
    <div class="overlay"></div>
    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
      <source src="media/CardOverlay.mov" type="video/mp4" />
    </video>
  
    <div class="container h-100">
      <div class="d-flex h-100 text-center align-items-center">
        <div class="w-100 text-white">
          <h1 class="display-3">Welcome to Stack'o</h1>
          <p class="lead mb-0">Using HTML5 Video and Bootstrap</p>
        </div>
      </div>
    </div>
  </header>


  <div id="root"></div>
  <div class="container">
    <div class="row row-cols-1 gy-5">
      <div class="col-lg-6 quick party frenetic">
        <div class="bg-primary me-md-3 pt-3 px-3 pt-md-3 px-md-5 text-center text-white overflow-hidden">
          <h5 class="text-start"><span class="badge bg-light text-dark"><i class="fas fa-users" aria-hidden="true"></i> 4-8</span></h5>
          <h5 class="text-start"><span class="badge rounded-pill bg-light text-dark"><i class="fas fa-clock" aria-hidden="true"></i> 5-15 min</span></h5>
          <div class="my-3 py-3">
            <h2 class="display-5">President</h2>
            <h3 class="display-6">(Asshole, Capitalism or Scum)</h3>
            <p class="lead">Race to get rid of all of the cards in their hands in order to become "president"</p>
            <button class="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#presidentOffCanvas">
              Read rules!
            </button>
          </div>
          <div class="bg-light shadow-sm mx-auto card-block"><img class="card-img-bottom" src="images/President.png" alt="Card image" />
          </div>
        </div>
      </div>
      <div class="col-lg-6 quick strategy">
        <div class="bg-danger me-md-3 pt-3 px-3 pt-md-3 px-md-5 text-center text-white overflow-hidden">
          <h5 class="text-start"><span class="badge bg-warning"><i class="fas fa-users" aria-hidden="true"></i> 2-6</span></h5>
          <h5 class="text-start"><span class="badge rounded-pill bg-warning"><i class="fas fa-clock" aria-hidden="true"></i> 5-15 min</span></h5>
          <div class="my-3 p-3">
            <h2 class="display-5">Durak</h2>
            <h3 class="display-6">("Fool", Kur or Russian War)</h3>
            <p class="lead">Attack your opponents and defend yourself from others so as not to become the "fool"</p>
            <button class="btn btn-warning text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#durakOffCanvas">
              Read rules!
            </button>
          </div>
          <div class="bg-warning shadow-sm mx-auto card-block"><img class="card-img-bottom" src="images/Durak.png" alt="Card image" /></div>
        </div>
      </div>
    
      <div class="col-lg-6">
        <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 p-3">
            <h2 class="display-5">Another headline</h2>
            <p class="lead">And an even wittier subheading.</p>
          </div>
          <div class="bg-dark shadow-sm mx-auto card-block"></div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">Another headline</h2>
            <p class="lead">And an even wittier subheading.</p>
          </div>
          <div class="bg-light shadow-sm mx-auto card-block"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="offcanvas offcanvas-start text-bg-dark" id="presidentOffCanvas">
    <div class="offcanvas-header">
      <h1 class="offcanvas-title">Rules</h1>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
      <h2>Deal</h2>
      <p>Starting to the dealers left, deal one card at a time until all cards (52) have been dealt.</p>
      <p>After cards are dealt, the scum must hand over the two best cards in their hand to the president, and the president passes back any two cards they do not want. 
        Same with vice-president and vice-scum but only 1 card.</p>
      <p>Ascending ranking: 3, 4, 5, 6, 7, 8, 9, J, Q, K, A (highest card), 2 (trump card that becomes any of the deck).</p>
      <h2>Game round</h2>
      <p>The player to dealer's left starts by leading (face up) any single card or any set of cards of equal rank (for example three fives). 
        Each player in turn must then either pass (i.e. not play any cards), or play face up a card or set of cards (higher), which beats the previous play.</p>
      <p>It's allowed to play a card with the same rank, skipping the next player who misses a turn</p>
      <p>Also passing does not prevent you from playing the next time your turn comes round.</p>
      <p>The play continues as many times around the table as necessary until someone makes a play which everyone else passes or plays the highest card (or trump card) that automatically ends the round.</p>
      <p>All the cards played are then turned face down and put to one side, and the player who played last (and highest) starts again by leading any card or set of equal cards.</p>
      <h2>Endgame</h2>
      <p>The first player who is out of cards is awarded the highest social rank: president; second player: vice-president; penultimate: vice-scum; last player: scum</p>
      </div>
  </div>
  <div class="offcanvas offcanvas-start text-bg-dark" id="durakOffCanvas">
    <div class="offcanvas-header">
      <h1 class="offcanvas-title">Rules</h1>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
      <h2>Deal</h2>
      <p>Starting to the dealers left, each player is dealt six cards.</p>
      <p>Pick one card from the stock, turn and place face up on the table. 
        Its suit determining the trump suit for the current deal. 
        For example, if it is the 7 of diamonds, then diamonds rank higher than all plain-suit cards. 
        The rest of the pack is then placed on half over the turnup and at right angles to it, so that it remains visible.</p>
      <p>Ascending ranking: 6, 7, 8, 9, J, Q, K, A and then trump cards with same ascending ranking.</p>
      <h2>Game round</h2>
      <p>The "fool" (who lost the last game) starts attacking the next player (defender) with any single card (face up). 
        A card which is not a trump can be beaten by playing a higher card of the same suit, or by any trump. 
        A trump card can only be beaten by playing a higher trump.</p>
      <p>The attacker and the rest of the players can continue the attack by playing another card, 
        which is of the same rank as some card already played during the current bout – either an attack card or a card played by the defender.</p>
        <p>The total number of cards played by the attackers during a bout must never exceed six or the number of cards in the defender's hand.</p>
      <p>If defender has beaten off all cards, the attackers have to click "Beaten".</p>
      <p>If defender can't beat off some card, he have to click "Take".</p>
      <p>When an attack is beaten off, the defender becomes the new attacker for the next assault/round which attacks next player, the new defender. 
        Otherwise, the defeated player's turn is skipped and the next one becomes the attacker.</p>
      <p>All players who have spent cards in the round have to draw cards from the pile to reach the minimum of six cards in hand.</p>
      <h2>Endgame</h2>
      <p>When the stock has run out (including the trump card face up), the last player left holding cards is the loser.</p>
    </div>
  </div>

  <footer class="container py-5">
    <div class="row">
      <div class="col-12 col-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
        <small class="d-block mb-3 text-muted">&copy; 2023–2023</small>
      </div>
      <div class="col-6 col-md">
        <h5>Features</h5>
        <ul class="list-unstyled text-small">
          <li><a class="link-secondary" href="#">Cool stuff</a></li>
          <li><a class="link-secondary" href="#">Random feature</a></li>
          <li><a class="link-secondary" href="#">Team feature</a></li>
          <li><a class="link-secondary" href="#">Stuff for developers</a></li>
          <li><a class="link-secondary" href="#">Another one</a></li>
          <li><a class="link-secondary" href="#">Last time</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li><a class="link-secondary" href="#">Resource name</a></li>
          <li><a class="link-secondary" href="#">Resource</a></li>
          <li><a class="link-secondary" href="#">Another resource</a></li>
          <li><a class="link-secondary" href="#">Final resource</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li><a class="link-secondary" href="#">Business</a></li>
          <li><a class="link-secondary" href="#">Education</a></li>
          <li><a class="link-secondary" href="#">Government</a></li>
          <li><a class="link-secondary" href="#">Gaming</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>About</h5>
        <ul class="list-unstyled text-small">
          <li><a class="link-secondary" href="#">Team</a></li>
          <li><a class="link-secondary" href="#">Locations</a></li>
          <li><a class="link-secondary" href="#">Privacy</a></li>
          <li><a class="link-secondary" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
