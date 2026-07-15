// Sleep Debt Calculator

// ============================================
// STEP 1: Store the actual hours slept each night of the last week in
// an array. Change these values to reflect your own week.
// ============================================
const getSleepHours = (day) => {
  const actualSleepHours = {
    monday: 8,
    tuesday: 7,
    wednesday: 6,
    thursday: 7.5,
    friday: 5,
    saturday: 9,
    sunday: 8,
  };
  return actualSleepHours[day];
};

// ============================================
// STEP 2: Calculate the actual total sleep hours across all seven
// nights, using getSleepHours() for each day.
// ============================================
const calculateSleepHours = () => {
  const monday = getSleepHours("monday");
  const tuesday = getSleepHours("tuesday");
  const wednesday = getSleepHours("wednesday");
  const thursday = getSleepHours("thursday");
  const friday = getSleepHours("friday");
  const saturday = getSleepHours("saturday");
  const sunday = getSleepHours("sunday");

  return (
    monday + tuesday + wednesday + thursday + friday + saturday + sunday
  );
};

// ============================================
// STEP 3: Store your ideal hours of sleep per night, and calculate the
// ideal total for the week (ideal hours × 7 nights).
// ============================================
const