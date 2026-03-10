import type { UpcomingGame } from './types';

export const upcomingGames: UpcomingGame[] = [
  // Football 2026
  { id: '1', sport: 'Football', opponent: 'USC', location: 'Neutral', venue: 'Las Vegas', date: '2026-08-30', time: '7:30 PM', isConference: false },
  { id: '2', sport: 'Football', opponent: 'Nicholls', location: 'Home', venue: 'Tiger Stadium', date: '2026-09-06', time: '6:00 PM', isConference: false },
  { id: '3', sport: 'Football', opponent: 'South Alabama', location: 'Home', venue: 'Tiger Stadium', date: '2026-09-13', time: '6:30 PM', isConference: false },
  { id: '4', sport: 'Football', opponent: 'South Carolina', location: 'Away', venue: 'Williams-Brice Stadium', date: '2026-09-20', time: '11:00 AM', isConference: true },
  { id: '5', sport: 'Football', opponent: 'Ole Miss', location: 'Home', venue: 'Tiger Stadium', date: '2026-10-03', time: 'TBA', isConference: true },
  { id: '21', sport: 'Football', opponent: 'Texas A&M', location: 'Away', venue: 'Kyle Field', date: '2026-10-24', time: 'TBA', isConference: true },
  { id: '22', sport: 'Football', opponent: 'Kentucky', location: 'Away', venue: 'Kroger Field', date: '2026-10-31', time: 'TBA', isConference: true },
  { id: '23', sport: 'Football', opponent: 'Mississippi State', location: 'Home', venue: 'Tiger Stadium', date: '2026-11-07', time: 'TBA', isConference: true },
  { id: '24', sport: 'Football', opponent: 'Auburn', location: 'Away', venue: 'Jordan-Hare Stadium', date: '2026-11-14', time: 'TBA', isConference: true },
  { id: '25', sport: 'Football', opponent: 'Alabama', location: 'Home', venue: 'Tiger Stadium', date: '2026-11-21', time: 'TBA', isConference: true },
  { id: '26', sport: 'Football', opponent: 'Texas', location: 'Away', venue: 'DKR-Texas Memorial', date: '2026-11-28', time: 'TBA', isConference: true },
  // Football 2027
  { id: '27', sport: 'Football', opponent: 'TBD', location: 'Neutral', venue: 'TBA', date: '2027-08-28', time: 'TBA', isConference: false },
  { id: '28', sport: 'Football', opponent: 'TBD', location: 'Home', venue: 'Tiger Stadium', date: '2027-09-04', time: 'TBA', isConference: false },
  { id: '29', sport: 'Football', opponent: 'TBD', location: 'Home', venue: 'Tiger Stadium', date: '2027-09-11', time: 'TBA', isConference: false },
  // Baseball 2026
  { id: '6', sport: 'Baseball', opponent: 'Milwaukee', location: 'Home', venue: 'Alex Box Stadium', date: '2026-02-13', time: '6:30 PM', isConference: false },
  { id: '7', sport: 'Baseball', opponent: 'Vanderbilt', location: 'Away', venue: 'Hawkins Field', date: '2026-03-13', time: '6:00 PM', isConference: true },
  { id: '8', sport: 'Baseball', opponent: 'Oklahoma', location: 'Home', venue: 'Alex Box Stadium', date: '2026-03-20', time: '6:30 PM', isConference: true },
  { id: '30', sport: 'Baseball', opponent: 'Arkansas', location: 'Away', venue: 'Baum-Walker Stadium', date: '2026-04-03', time: '6:30 PM', isConference: true },
  { id: '31', sport: 'Baseball', opponent: 'Florida', location: 'Home', venue: 'Alex Box Stadium', date: '2026-04-17', time: '6:30 PM', isConference: true },
  { id: '32', sport: 'Baseball', opponent: 'Georgia', location: 'Away', venue: 'Foley Field', date: '2026-05-01', time: '6:00 PM', isConference: true },
  // Baseball 2027
  { id: '33', sport: 'Baseball', opponent: 'TBD', location: 'Home', venue: 'Alex Box Stadium', date: '2027-02-12', time: '6:30 PM', isConference: false },
  { id: '34', sport: 'Baseball', opponent: 'TBD', location: 'Home', venue: 'Alex Box Stadium', date: '2027-03-19', time: '6:30 PM', isConference: true },
  // Men's Basketball 2026
  { id: '9', sport: "Men's Basketball", opponent: 'Texas A&M', location: 'Home', venue: 'Pete Maravich Center', date: '2026-01-14', time: '7:00 PM', isConference: true },
  { id: '10', sport: "Men's Basketball", opponent: 'Alabama', location: 'Away', venue: 'Coleman Coliseum', date: '2026-01-21', time: '7:30 PM', isConference: true },
  { id: '35', sport: "Men's Basketball", opponent: 'Arkansas', location: 'Home', venue: 'Pete Maravich Center', date: '2026-02-04', time: '7:00 PM', isConference: true },
  { id: '36', sport: "Men's Basketball", opponent: 'Florida', location: 'Away', venue: 'Exactech Arena', date: '2026-02-14', time: '5:30 PM', isConference: true },
  // Men's Basketball 2026-27
  { id: '37', sport: "Men's Basketball", opponent: 'TBD', location: 'Home', venue: 'Pete Maravich Center', date: '2026-11-13', time: '7:00 PM', isConference: false },
  { id: '38', sport: "Men's Basketball", opponent: 'TBD', location: 'Home', venue: 'Pete Maravich Center', date: '2027-01-09', time: '7:00 PM', isConference: true },
  { id: '39', sport: "Men's Basketball", opponent: 'TBD', location: 'Away', venue: 'TBA', date: '2027-02-20', time: 'TBA', isConference: true },
  // Women's Basketball 2026
  { id: '19', sport: "Women's Basketball", opponent: 'South Carolina', location: 'Home', venue: 'Pete Maravich Center', date: '2026-01-16', time: '6:00 PM', isConference: true },
  { id: '20', sport: "Women's Basketball", opponent: 'Tennessee', location: 'Away', venue: 'Thompson-Boling Arena', date: '2026-01-23', time: '6:30 PM', isConference: true },
  { id: '40', sport: "Women's Basketball", opponent: 'Georgia', location: 'Home', venue: 'Pete Maravich Center', date: '2026-02-07', time: '6:00 PM', isConference: true },
  { id: '41', sport: "Women's Basketball", opponent: 'Vanderbilt', location: 'Away', venue: 'Memorial Gymnasium', date: '2026-02-21', time: '6:00 PM', isConference: true },
  // Women's Basketball 2026-27
  { id: '42', sport: "Women's Basketball", opponent: 'TBD', location: 'Home', venue: 'Pete Maravich Center', date: '2026-11-10', time: '6:00 PM', isConference: false },
  { id: '43', sport: "Women's Basketball", opponent: 'TBD', location: 'Away', venue: 'TBA', date: '2027-01-14', time: 'TBA', isConference: true },
  // Softball 2026
  { id: '11', sport: 'Softball', opponent: 'Florida', location: 'Home', venue: 'Tiger Park', date: '2026-03-28', time: '1:00 PM', isConference: true },
  { id: '44', sport: 'Softball', opponent: 'Alabama', location: 'Away', venue: 'Rhoads Stadium', date: '2026-04-11', time: '1:00 PM', isConference: true },
  { id: '45', sport: 'Softball', opponent: 'Texas A&M', location: 'Home', venue: 'Tiger Park', date: '2026-04-25', time: '1:00 PM', isConference: true },
  // Softball 2027
  { id: '46', sport: 'Softball', opponent: 'TBD', location: 'Home', venue: 'Tiger Park', date: '2027-02-12', time: 'TBA', isConference: false },
  // Soccer 2026
  { id: '12', sport: 'Soccer', opponent: 'Arkansas', location: 'Away', venue: 'Razorback Field', date: '2026-09-25', time: '6:00 PM', isConference: true },
  { id: '47', sport: 'Soccer', opponent: 'Florida', location: 'Home', venue: 'LSU Soccer Stadium', date: '2026-10-09', time: '6:00 PM', isConference: true },
  { id: '48', sport: 'Soccer', opponent: 'Texas A&M', location: 'Away', venue: 'Ellis Field', date: '2026-10-23', time: '6:00 PM', isConference: true },
  // Soccer 2027
  { id: '49', sport: 'Soccer', opponent: 'TBD', location: 'Home', venue: 'LSU Soccer Stadium', date: '2027-08-20', time: 'TBA', isConference: false },
  // Volleyball 2026
  { id: '13', sport: 'Volleyball', opponent: 'Kentucky', location: 'Home', venue: 'Pete Maravich Center', date: '2026-10-10', time: '6:00 PM', isConference: true },
  { id: '50', sport: 'Volleyball', opponent: 'Florida', location: 'Away', venue: 'Exactech Arena', date: '2026-10-24', time: '6:00 PM', isConference: true },
  { id: '51', sport: 'Volleyball', opponent: 'Alabama', location: 'Home', venue: 'Pete Maravich Center', date: '2026-11-07', time: '6:00 PM', isConference: true },
  // Volleyball 2027
  { id: '52', sport: 'Volleyball', opponent: 'TBD', location: 'Home', venue: 'Pete Maravich Center', date: '2027-08-27', time: 'TBA', isConference: false },
  // Gymnastics 2026
  { id: '14', sport: 'Gymnastics', opponent: 'Florida', location: 'Home', venue: 'Pete Maravich Center', date: '2026-02-06', time: '6:00 PM', isConference: true },
  { id: '53', sport: 'Gymnastics', opponent: 'Alabama', location: 'Away', venue: 'Coleman Coliseum', date: '2026-02-20', time: '6:00 PM', isConference: true },
  { id: '54', sport: 'Gymnastics', opponent: 'Arkansas', location: 'Home', venue: 'Pete Maravich Center', date: '2026-03-06', time: '6:00 PM', isConference: true },
  // Gymnastics 2027
  { id: '55', sport: 'Gymnastics', opponent: 'TBD', location: 'Home', venue: 'Pete Maravich Center', date: '2027-01-15', time: 'TBA', isConference: true },
  // Track & Field 2026
  { id: '15', sport: 'Track & Field', opponent: 'SEC Indoor Championships', location: 'Away', venue: 'Fayetteville', date: '2026-02-27', time: 'All Day', isConference: true },
  { id: '56', sport: 'Track & Field', opponent: 'SEC Outdoor Championships', location: 'Away', venue: 'TBA', date: '2026-05-14', time: 'All Day', isConference: true },
  { id: '57', sport: 'Track & Field', opponent: 'NCAA Outdoor Championships', location: 'Neutral', venue: 'TBA', date: '2026-06-11', time: 'All Day', isConference: false },
  // Track & Field 2027
  { id: '58', sport: 'Track & Field', opponent: 'SEC Indoor Championships', location: 'Away', venue: 'TBA', date: '2027-02-26', time: 'All Day', isConference: true },
  // Swimming & Diving 2026
  { id: '16', sport: 'Swimming & Diving', opponent: 'SEC Championships', location: 'Neutral', venue: 'Auburn', date: '2026-02-18', time: 'All Day', isConference: true },
  { id: '59', sport: 'Swimming & Diving', opponent: 'NCAA Championships', location: 'Neutral', venue: 'TBA', date: '2026-03-26', time: 'All Day', isConference: false },
  // Swimming & Diving 2027
  { id: '60', sport: 'Swimming & Diving', opponent: 'SEC Championships', location: 'Neutral', venue: 'TBA', date: '2027-02-17', time: 'All Day', isConference: true },
  // Tennis 2026
  { id: '17', sport: 'Tennis', opponent: 'Georgia', location: 'Away', venue: 'Athens', date: '2026-03-15', time: '2:00 PM', isConference: true },
  { id: '61', sport: 'Tennis', opponent: 'Florida', location: 'Home', venue: 'LSU Tennis Complex', date: '2026-04-05', time: '2:00 PM', isConference: true },
  { id: '62', sport: 'Tennis', opponent: 'Texas A&M', location: 'Away', venue: 'George P. Mitchell Tennis Center', date: '2026-04-19', time: '2:00 PM', isConference: true },
  // Tennis 2027
  { id: '63', sport: 'Tennis', opponent: 'TBD', location: 'Home', venue: 'LSU Tennis Complex', date: '2027-03-14', time: 'TBA', isConference: true },
  // Golf 2026
  { id: '18', sport: 'Golf', opponent: 'David Toms Intercollegiate', location: 'Home', venue: 'University Club', date: '2026-09-21', time: 'All Day', isConference: false },
  { id: '64', sport: 'Golf', opponent: 'SEC Fall Preview', location: 'Away', venue: 'TBA', date: '2026-10-05', time: 'All Day', isConference: true },
  { id: '65', sport: 'Golf', opponent: 'SEC Championship', location: 'Neutral', venue: 'TBA', date: '2027-04-23', time: 'All Day', isConference: true },
];
