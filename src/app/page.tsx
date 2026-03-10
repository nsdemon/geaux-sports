'use client';

import { useState, useMemo } from 'react';
import { upcomingGames } from '@/data/upcomingGames';
import { scores2026 } from '@/data/scores2026';
import type { SportCategory } from '@/data/types';

const ALL_CATEGORIES = 'All Sports';
const sportCategories: SportCategory[] = [
  'Football',
  'Baseball',
  "Men's Basketball",
  "Women's Basketball",
  'Softball',
  'Soccer',
  'Volleyball',
  'Track & Field',
  'Gymnastics',
  'Swimming & Diving',
  'Tennis',
  'Golf',
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function Home() {
  const [upcomingFilter, setUpcomingFilter] = useState<string>(ALL_CATEGORIES);
  const [scoresFilter, setScoresFilter] = useState<string>(ALL_CATEGORIES);

  const filteredUpcoming = useMemo(() => {
    if (upcomingFilter === ALL_CATEGORIES) return upcomingGames;
    return upcomingGames.filter((g) => g.sport === upcomingFilter);
  }, [upcomingFilter]);

  const filteredScores = useMemo(() => {
    if (scoresFilter === ALL_CATEGORIES) return scores2026;
    return scores2026.filter((g) => g.sport === scoresFilter);
  }, [scoresFilter]);

  const scoreDisplay = (lsu: number, opp: number) =>
    Number.isInteger(lsu) && Number.isInteger(opp)
      ? `${lsu}-${opp}`
      : `${lsu.toFixed(2)}-${opp.toFixed(2)}`;

  return (
    <main className="min-h-screen">
      <header className="header">
        <div className="header-inner">
          <h1 className="logo">Geaux Sports</h1>
          <p className="tagline">LSU Tigers · Purple & Gold</p>
        </div>
      </header>

      <div className="container">
        <section className="section">
          <h2 className="section-title">Upcoming Games</h2>
          <div className="filter-row">
            <label htmlFor="upcoming-category" className="filter-label">
              Filter by sport
            </label>
            <select
              id="upcoming-category"
              value={upcomingFilter}
              onChange={(e) => setUpcomingFilter(e.target.value)}
              className="select"
            >
              <option value={ALL_CATEGORIES}>{ALL_CATEGORIES}</option>
              {sportCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <ul className="game-list">
            {filteredUpcoming.map((game) => (
              <li key={game.id} className="game-card">
                <span className="game-sport">{game.sport}</span>
                <span className="game-matchup">
                  LSU vs {game.opponent}
                  {game.isConference && <span className="badge">SEC</span>}
                </span>
                <span className="game-meta">
                  {game.location} · {game.venue}
                </span>
                <span className="game-datetime">
                  {formatDate(game.date)} · {game.time}
                </span>
              </li>
            ))}
          </ul>
          {filteredUpcoming.length === 0 && (
            <p className="empty">No upcoming games for this category.</p>
          )}
        </section>

        <section className="section">
          <h2 className="section-title">2026 Scores</h2>
          <div className="filter-row">
            <label htmlFor="scores-category" className="filter-label">
              Filter by sport
            </label>
            <select
              id="scores-category"
              value={scoresFilter}
              onChange={(e) => setScoresFilter(e.target.value)}
              className="select"
            >
              <option value={ALL_CATEGORIES}>{ALL_CATEGORIES}</option>
              {sportCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <ul className="score-list">
            {filteredScores.map((game) => (
              <li key={game.id} className="score-card">
                <span
                  className={`result result-${game.result.toLowerCase()}`}
                  title={game.result === 'W' ? 'Win' : game.result === 'L' ? 'Loss' : 'Tie'}
                >
                  {game.result}
                </span>
                <span className="score-sport">{game.sport}</span>
                <span className="score-matchup">
                  LSU {scoreDisplay(game.lsuScore, game.opponentScore)}{' '}
                  {game.opponent}
                  {game.isConference && <span className="badge">SEC</span>}
                </span>
                <span className="score-meta">
                  {game.location} · {formatDate(game.date)}
                </span>
              </li>
            ))}
          </ul>
          {filteredScores.length === 0 && (
            <p className="empty">No 2026 scores for this category.</p>
          )}
        </section>
      </div>

      <footer className="footer">
        <p>Geaux Tigers · Data is sample; for official schedules see lsusports.net</p>
      </footer>
    </main>
  );
}
