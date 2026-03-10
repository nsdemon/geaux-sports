import type { UpcomingGame } from './types';

export const upcomingGames: UpcomingGame[] = [
  { id: '1', sport: 'Football', opponent: 'USC', location: 'Neutral', venue: 'Las Vegas', date: '2026-08-30', time: '7:30 PM', isConference: false },
  { id: '2', sport: 'Football', opponent: 'Nicholls', location: 'Home', venue: 'Tiger Stadium', date: '2026-09-06', time: '6:00 PM', isConference: false },
  { id: '3', sport: 'Football', opponent: 'South Alabama', location: 'Home', venue: 'Tiger Stadium', date: '2026-09-13', time: '6:30 PM', isConference: false },
  { id: '4', sport: 'Football', opponent: 'South Carolina', location: 'Away', venue: 'Williams-Brice Stadium', date: '2026-09-20', time: '11:00 AM', isConference: true },
  { id: '5', sport: 'Football', opponent: 'Ole Miss', location: 'Home', venue: 'Tiger Stadium', date: '2026-10-03', time: 'TBA', isConference: true },
  { id: '6', sport: 'Baseball', opponent: 'Milwaukee', location: 'Home', venue: 'Alex Box Stadium', date: '2026-02-13', time: '6:30 PM', isConference: false },
  { id: '7', sport: 'Baseball', opponent: 'Vanderbilt', location: 'Away', venue: 'Hawkins Field', date: '2026-03-13', time: '6:00 PM', isConference: true },
  { id: '8', sport: 'Baseball', opponent: 'Oklahoma', location: 'Home', venue: 'Alex Box Stadium', date: '2026-03-20', time: '6:30 PM', isConference: true },
  { id: '9', sport: "Men's Basketball", opponent: 'Texas A&M', location: 'Home', venue: 'Pete Maravich Center', date: '2026-01-14', time: '7:00 PM', isConference: true },
  { id: '10', sport: "Men's Basketball", opponent: 'Alabama', location: 'Away', venue: 'Coleman Coliseum', date: '2026-01-21', time: '7:30 PM', isConference: true },
  { id: '19', sport: "Women's Basketball", opponent: 'South Carolina', location: 'Home', venue: 'Pete Maravich Center', date: '2026-01-16', time: '6:00 PM', isConference: true },
  { id: '20', sport: "Women's Basketball", opponent: 'Tennessee', location: 'Away', venue: 'Thompson-Boling Arena', date: '2026-01-23', time: '6:30 PM', isConference: true },
  { id: '11', sport: 'Softball', opponent: 'Florida', location: 'Home', venue: 'Tiger Park', date: '2026-03-28', time: '1:00 PM', isConference: true },
  { id: '12', sport: 'Soccer', opponent: 'Arkansas', location: 'Away', venue: 'Razorback Field', date: '2026-09-25', time: '6:00 PM', isConference: true },
  { id: '13', sport: 'Volleyball', opponent: 'Kentucky', location: 'Home', venue: 'Pete Maravich Center', date: '2026-10-10', time: '6:00 PM', isConference: true },
  { id: '14', sport: 'Gymnastics', opponent: 'Florida', location: 'Home', venue: 'Pete Maravich Center', date: '2026-02-06', time: '6:00 PM', isConference: true },
  { id: '15', sport: 'Track & Field', opponent: 'SEC Indoor Championships', location: 'Away', venue: 'Fayetteville', date: '2026-02-27', time: 'All Day', isConference: true },
  { id: '16', sport: 'Swimming & Diving', opponent: 'SEC Championships', location: 'Neutral', venue: 'Auburn', date: '2026-02-18', time: 'All Day', isConference: true },
  { id: '17', sport: 'Tennis', opponent: 'Georgia', location: 'Away', venue: 'Athens', date: '2026-03-15', time: '2:00 PM', isConference: true },
  { id: '18', sport: 'Golf', opponent: 'David Toms Intercollegiate', location: 'Home', venue: 'University Club', date: '2026-09-21', time: 'All Day', isConference: false },
];
